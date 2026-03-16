from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database.db import run_query
from llm.sql_generator import generate_sql
from llm.chart_selector import choose_chart


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {"message": "Conversational BI API running"}


@app.post("/query")
async def query_data(payload: dict):

    user_query = payload["query"]

    try:
        from llm.dashboard_generator import generate_dashboard
        
        dashboard_data = generate_dashboard(user_query)
        
        return dashboard_data

    except Exception as e:

        return {
            "error": str(e)
        }