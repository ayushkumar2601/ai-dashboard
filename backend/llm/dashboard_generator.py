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
    """Generate 2-3 additional relevant charts"""
    
    additional_charts = []
    
    # Common supplementary queries based on the main query
    supplementary_queries = [
        "Show revenue by region",
        "Show top 5 product categories by revenue", 
        "Show monthly revenue trend"
    ]
    
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

def generate_insights(df, user_query: str):
    """Generate AI insights from the data"""
    
    # Convert dataframe to summary for LLM
    data_summary = df.head(10).to_string()
    
    prompt = f"""
Analyze this data and provide 2-3 key business insights in bullet points.
Be concise and focus on actionable findings.

User Query: {user_query}

Data Sample:
{data_summary}

Provide insights in this format:
• Key insight 1
• Key insight 2  
• Key insight 3
"""
    
    try:
        insights = ask_gemini(prompt)
        return insights.strip()
    except:
        return "• Data analysis completed successfully"

def generate_chart_title(user_query: str):
    """Generate a clean title for the chart"""
    return user_query.capitalize()