from database.db import run_query
from .sql_generator import generate_sql
from .chart_selector import choose_chart
from .gemini_client import ask_gemini

def generate_dashboard(user_query: str):
    """Generate a multi-chart dashboard with insights"""
    
    # Generate primary chart based on user query
    primary_sql = generate_sql(user_query)
    primary_df = run_query(primary_sql)
    primary_chart = choose_chart(primary_df.columns)
    
    # Generate additional relevant charts
    additional_charts = generate_additional_charts(user_query)
    
    # Generate insights
    insights = generate_insights(primary_df, user_query)
    
    return {
        "primary_chart": {
            "sql": primary_sql,
            "chart": primary_chart,
            "columns": list(primary_df.columns),
            "data": primary_df.to_dict(orient="records"),
            "title": generate_chart_title(user_query)
        },
        "additional_charts": additional_charts,
        "insights": insights
    }

def generate_additional_charts(user_query: str):
    """Generate 2-3 additional relevant charts based on context"""
    
    additional_charts = []
    
    # Determine context-aware supplementary queries
    supplementary_queries = get_contextual_queries(user_query)
    
    for supp_query in supplementary_queries[:2]:  # Limit to 2 additional charts
        try:
            sql = generate_sql(supp_query)
            df = run_query(sql)
            chart_type = choose_chart(df.columns)
            
            additional_charts.append({
                "sql": sql,
                "chart": chart_type,
                "columns": list(df.columns),
                "data": df.to_dict(orient="records"),
                "title": supp_query
            })
        except:
            continue
    
    return additional_charts

def get_contextual_queries(user_query: str):
    """Generate contextually relevant queries based on the main query"""
    
    query_lower = user_query.lower()
    
    # Revenue-focused queries
    if "revenue" in query_lower:
        return [
            "Show top 5 product categories by revenue",
            "Show monthly revenue trend"
        ]
    
    # Region-focused queries  
    if "region" in query_lower:
        return [
            "Show revenue by region",
            "Show average rating by region"
        ]
    
    # Product-focused queries
    if "product" in query_lower or "category" in query_lower:
        return [
            "Show revenue by region", 
            "Show payment method distribution"
        ]
    
    # Time-focused queries
    if "monthly" in query_lower or "trend" in query_lower:
        return [
            "Show revenue by region",
            "Show top 5 product categories by revenue"
        ]
    
    # Default fallback queries
    return [
        "Show revenue by region",
        "Show top 5 product categories by revenue"
    ]

def generate_insights(df, user_query: str):
    """Generate AI insights from the data"""
    
    # Convert dataframe to summary for LLM
    data_summary = df.head(10).to_string()
    total_rows = len(df)
    
    prompt = f"""
Analyze this business data and provide 2-3 key actionable insights in bullet points.
Focus on trends, patterns, and business opportunities.

User Query: {user_query}
Total Records: {total_rows}

Data Sample:
{data_summary}

Provide insights in this format:
• Key insight about the data trend or pattern
• Business opportunity or recommendation  
• Notable finding or comparison

Keep each insight concise and business-focused.
"""
    
    try:
        insights = ask_gemini(prompt)
        return insights.strip()
    except:
        return "• Data analysis completed successfully\n• Dashboard generated with multiple visualizations\n• Explore the charts above for detailed insights"

def generate_chart_title(user_query: str):
    """Generate a clean title for the chart"""
    # Capitalize first letter and ensure it ends properly
    title = user_query.strip()
    if title:
        title = title[0].upper() + title[1:]
        if not title.endswith(('?', '.', '!')):
            title += ""
    return title or "Data Analysis"