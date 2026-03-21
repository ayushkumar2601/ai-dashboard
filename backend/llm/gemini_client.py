from groq import Groq
import os
from dotenv import load_dotenv
 
load_dotenv()
 
client = Groq(api_key=os.getenv("GROQ_API_KEY"))
 
def ask_groq(prompt: str, model: str = "llama-3.3-70b-versatile") -> str:
    response = client.chat.completions.create(
        model=model,
        messages=[
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
    )
    return response.choices[0].message.content
 
# Alias so existing imports like `from .gemini_client import ask_gemini` still work
ask_gemini = ask_groq
 