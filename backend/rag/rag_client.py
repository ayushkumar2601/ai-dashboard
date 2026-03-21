# backend/rag/rag_client.py
import os
import json
from typing import Optional
from dotenv import load_dotenv
import snowflake.connector
from snowflake.connector import DictCursor

load_dotenv()

# ── Snowflake connection ──────────────────────────────────────────────
def get_snowflake_connection():
    return snowflake.connector.connect(
        account=os.getenv("SNOWFLAKE_ACCOUNT"),       # e.g. abc12345.us-east-1
        user=os.getenv("SNOWFLAKE_USER"),
        password=os.getenv("SNOWFLAKE_PASSWORD"),
        role=os.getenv("SNOWFLAKE_ROLE", "SYSADMIN"),
        warehouse=os.getenv("SNOWFLAKE_WAREHOUSE", "COMPUTE_WH"),
        database=os.getenv("SNOWFLAKE_DATABASE", "BI_DASHBOARD"),
        schema=os.getenv("SNOWFLAKE_SCHEMA", "RAG"),
    )


# ── Setup: run once to create tables + Cortex Search service ─────────
SETUP_SQL = """
-- Database + schema
CREATE DATABASE IF NOT EXISTS BI_DASHBOARD;
CREATE SCHEMA IF NOT EXISTS BI_DASHBOARD.RAG;
USE SCHEMA BI_DASHBOARD.RAG;

-- Table: stores past successful queries + generated SQL + insights
CREATE TABLE IF NOT EXISTS query_history (
    id              NUMBER AUTOINCREMENT PRIMARY KEY,
    user_query      TEXT NOT NULL,
    generated_sql   TEXT,
    chart_type      TEXT,
    insights        TEXT,
    result_summary  TEXT,
    created_at      TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

-- Table: stores domain knowledge / business context chunks
CREATE TABLE IF NOT EXISTS knowledge_base (
    id          NUMBER AUTOINCREMENT PRIMARY KEY,
    chunk_id    TEXT UNIQUE NOT NULL,
    category    TEXT,           -- 'schema', 'business_rule', 'example_query'
    content     TEXT NOT NULL,
    metadata    VARIANT,
    created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP()
);

-- Cortex Search service over BOTH tables (unified semantic search)
CREATE OR REPLACE CORTEX SEARCH SERVICE BI_DASHBOARD.RAG.dashboard_search
    ON content
    WAREHOUSE = COMPUTE_WH
    TARGET_LAG = '1 minute'
    AS (
        SELECT
            'query_history'        AS source_table,
            id::TEXT               AS doc_id,
            user_query || ' ' || COALESCE(insights, '') || ' ' || COALESCE(result_summary, '') AS content,
            user_query,
            generated_sql,
            chart_type,
            insights,
            result_summary,
            created_at::TEXT       AS ts
        FROM query_history
        UNION ALL
        SELECT
            'knowledge_base'       AS source_table,
            chunk_id               AS doc_id,
            content,
            NULL                   AS user_query,
            NULL                   AS generated_sql,
            category               AS chart_type,
            content                AS insights,
            NULL                   AS result_summary,
            created_at::TEXT       AS ts
        FROM knowledge_base
    );
"""


def setup_snowflake():
    """Run once during first launch to create Snowflake schema + Cortex Search."""
    conn = get_snowflake_connection()
    try:
        cur = conn.cursor()
        for stmt in SETUP_SQL.strip().split(";"):
            stmt = stmt.strip()
            if stmt:
                cur.execute(stmt)
        print("✅ Snowflake RAG setup complete")
    finally:
        conn.close()


# ── Seed knowledge base with schema + business rules ─────────────────
KNOWLEDGE_CHUNKS = [
    {
        "chunk_id": "schema_sales_table",
        "category": "schema",
        "content": (
            "The sales table has 13 columns: order_id (unique order identifier), "
            "product_id, order_date (YYYY-MM-DD), product_category "
            "(Books, Fashion, Sports, Electronics, Beauty, Home & Kitchen), "
            "price (unit price in USD), discount_percent (0-100), quantity_sold, "
            "payment_method (UPI, Credit Card, Wallet, Cash on Delivery, Debit Card), "
            "discounted_price, total_revenue (quantity_sold * discounted_price), "
            "customer_region (North America, Asia, Europe, Middle East), "
            "rating (1-5), review_count."
        ),
        "metadata": {"type": "schema", "table": "sales"},
    },
    {
        "chunk_id": "business_rule_revenue",
        "category": "business_rule",
        "content": (
            "Revenue analysis: total_revenue = quantity_sold * discounted_price. "
            "Use SUM(total_revenue) for aggregated revenue. "
            "To compare revenue over time use GROUP BY strftime('%Y-%m', order_date). "
            "For regional revenue use GROUP BY customer_region. "
            "Always ORDER BY revenue DESC for top queries."
        ),
        "metadata": {"type": "rule", "domain": "revenue"},
    },
    {
        "chunk_id": "business_rule_products",
        "category": "business_rule",
        "content": (
            "Product analysis: use product_category for category-level grouping. "
            "Top products are measured by SUM(quantity_sold) or SUM(total_revenue). "
            "Average rating is AVG(rating). Discount analysis uses AVG(discount_percent). "
            "For product performance, combine revenue + rating + quantity_sold."
        ),
        "metadata": {"type": "rule", "domain": "products"},
    },
    {
        "chunk_id": "example_monthly_trend",
        "category": "example_query",
        "content": (
            "Example: 'monthly revenue trend' → "
            "SELECT strftime('%Y-%m', order_date) AS month, SUM(total_revenue) AS revenue "
            "FROM sales GROUP BY month ORDER BY month. Chart type: line or area."
        ),
        "metadata": {"type": "example", "chart": "line"},
    },
    {
        "chunk_id": "example_top_categories",
        "category": "example_query",
        "content": (
            "Example: 'top product categories by revenue' → "
            "SELECT product_category, SUM(total_revenue) AS revenue "
            "FROM sales GROUP BY product_category ORDER BY revenue DESC LIMIT 5. "
            "Chart type: bar."
        ),
        "metadata": {"type": "example", "chart": "bar"},
    },
    {
        "chunk_id": "example_region_distribution",
        "category": "example_query",
        "content": (
            "Example: 'revenue distribution by region' → "
            "SELECT customer_region, SUM(total_revenue) AS revenue "
            "FROM sales GROUP BY customer_region ORDER BY revenue DESC. "
            "Chart type: pie or donut."
        ),
        "metadata": {"type": "example", "chart": "pie"},
    },
    {
        "chunk_id": "example_payment_methods",
        "category": "example_query",
        "content": (
            "Example: 'payment method distribution' → "
            "SELECT payment_method, COUNT(*) AS count, SUM(total_revenue) AS revenue "
            "FROM sales GROUP BY payment_method ORDER BY count DESC. "
            "Chart type: donut."
        ),
        "metadata": {"type": "example", "chart": "donut"},
    },
    {
        "chunk_id": "example_ratings",
        "category": "example_query",
        "content": (
            "Example: 'average rating by category' → "
            "SELECT product_category, ROUND(AVG(rating), 2) AS avg_rating "
            "FROM sales GROUP BY product_category ORDER BY avg_rating DESC. "
            "Chart type: bar."
        ),
        "metadata": {"type": "example", "chart": "bar"},
    },
]


def seed_knowledge_base():
    """Insert static knowledge chunks into Snowflake. Safe to run multiple times."""
    conn = get_snowflake_connection()
    try:
        cur = conn.cursor()
        cur.execute("USE SCHEMA BI_DASHBOARD.RAG")
        for chunk in KNOWLEDGE_CHUNKS:
            cur.execute("""
                MERGE INTO knowledge_base k
                USING (SELECT %s AS chunk_id) src ON k.chunk_id = src.chunk_id
                WHEN NOT MATCHED THEN INSERT (chunk_id, category, content, metadata)
                VALUES (%s, %s, %s, PARSE_JSON(%s))
            """, (
                chunk["chunk_id"],
                chunk["chunk_id"],
                chunk["category"],
                chunk["content"],
                json.dumps(chunk["metadata"]),
            ))
        print(f"✅ Seeded {len(KNOWLEDGE_CHUNKS)} knowledge chunks")
    finally:
        conn.close()


# ── Core RAG: semantic search via Cortex Search ───────────────────────
def retrieve_context(query: str, limit: int = 5) -> str:
    """
    Search Snowflake Cortex Search for relevant past queries + knowledge chunks.
    Returns a formatted context string to inject into LLM prompts.
    """
    conn = get_snowflake_connection()
    try:
        cur = conn.cursor(DictCursor)
        cur.execute("USE SCHEMA BI_DASHBOARD.RAG")

        # Cortex Search REST-style call via SQL
        cur.execute("""
            SELECT SNOWFLAKE.CORTEX.SEARCH_PREVIEW(
                'BI_DASHBOARD.RAG.dashboard_search',
                %s,
                %s
            ) AS results
        """, (query, limit))

        row = cur.fetchone()
        if not row or not row.get("RESULTS"):
            return ""

        raw = row["RESULTS"]
        results = json.loads(raw) if isinstance(raw, str) else raw
        hits = results.get("results", [])

        if not hits:
            return ""

        context_parts = []
        for i, hit in enumerate(hits, 1):
            source = hit.get("source_table", "unknown")
            content = hit.get("content", "").strip()

            if source == "query_history":
                sql = hit.get("generated_sql", "")
                chart = hit.get("chart_type", "")
                context_parts.append(
                    f"[Past Query {i}]\n"
                    f"User asked: {hit.get('user_query', '')}\n"
                    f"SQL used: {sql}\n"
                    f"Chart type: {chart}\n"
                    f"Summary: {hit.get('result_summary', '')}"
                )
            else:
                context_parts.append(f"[Knowledge {i}]\n{content}")

        return "\n\n".join(context_parts)

    except Exception as e:
        print(f"⚠️ Cortex Search error (non-fatal): {e}")
        return ""
    finally:
        conn.close()


# ── Save successful query to history ─────────────────────────────────
def save_query_to_history(
    user_query: str,
    generated_sql: str,
    chart_type: str,
    insights: str,
    result_summary: str,
):
    """Persist a successful query execution for future RAG retrieval."""
    conn = get_snowflake_connection()
    try:
        cur = conn.cursor()
        cur.execute("USE SCHEMA BI_DASHBOARD.RAG")
        cur.execute("""
            INSERT INTO query_history (user_query, generated_sql, chart_type, insights, result_summary)
            VALUES (%s, %s, %s, %s, %s)
        """, (user_query, generated_sql, chart_type, insights, result_summary[:1000]))
        print(f"✅ Saved query to history: {user_query[:50]}")
    except Exception as e:
        print(f"⚠️ Failed to save query history (non-fatal): {e}")
    finally:
        conn.close()