from .gemini_client import ask_gemini

# Load system prompt
with open("prompts/system_prompt.txt", "r", encoding="utf-8") as f:
    SYSTEM_PROMPT = f.read()

def generate_sql(user_query: str):

    prompt = f"""
{SYSTEM_PROMPT}

User Question:
{user_query}
"""

    sql = ask_gemini(prompt)

    sql = sql.replace("```sql", "").replace("```", "").strip()

    return sql