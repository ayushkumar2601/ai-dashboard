import pandas as pd
import sqlite3

# Load dataset
df = pd.read_csv("../data/amazon_sales.csv", encoding="latin1")

# Create SQLite database
conn = sqlite3.connect("sales.db")

df.to_sql("sales", conn, if_exists="replace", index=False)

conn.close()

print("Database created successfully.")