import sqlite3
import pandas as pd

DB_PATH = "sales.db"

def run_query(query: str):

    conn = sqlite3.connect(DB_PATH)

    df = pd.read_sql_query(query, conn)

    conn.close()

    return df