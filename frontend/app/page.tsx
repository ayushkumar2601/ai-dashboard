"use client"

import axios from "axios"
import { useState } from "react"

import PromptBox from "../components/PromptBox"
import DashboardGrid from "../components/DashboardGrid"

export default function Page() {

  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  async function runQuery(query: string) {
    setLoading(true)
    
    try {
      const res = await axios.post(
        "http://localhost:8000/query",
        { query }
      )
      setResult(res.data)
    } catch (error) {
      setResult({ error: "Failed to generate dashboard" })
    } finally {
      setLoading(false)
    }
  }

  return (

    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>

      <h1 style={{ 
        fontSize: "32px", 
        marginBottom: "30px",
        background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        fontWeight: "bold"
      }}>
        Conversational AI Dashboard
      </h1>

      <PromptBox onSubmit={runQuery} />

      {loading && (
        <div style={{ 
          textAlign: "center", 
          padding: "40px",
          color: "#6366f1",
          fontSize: "18px"
        }}>
          🤖 Generating your dashboard...
        </div>
      )}

      {result && !result.error && !loading && (
        <DashboardGrid result={result} />
      )}

      {result?.error && !loading && (
        <div style={{ 
          padding: "20px", 
          background: "#fee2e2", 
          borderRadius: "8px",
          color: "#dc2626"
        }}>
          Error: {result.error}
        </div>
      )}

    </div>
  )
}