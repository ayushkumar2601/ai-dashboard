"use client"

import { useState } from "react"

interface PromptBoxProps {
  onSubmit: (query: string) => void
}

const EXAMPLE_QUERIES = [
  "Show revenue by region",
  "Top 5 product categories by revenue", 
  "Monthly revenue trend for 2023",
  "Average rating by product category",
  "Payment method distribution"
]

export default function PromptBox({ onSubmit }: PromptBoxProps) {

  const [query, setQuery] = useState("")

  const handleSubmit = () => {
    if (query.trim()) {
      onSubmit(query)
      setQuery("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div style={{ marginBottom: "30px" }}>
      
      {/* Input Section */}
      <div style={{ 
        display: "flex", 
        gap: "12px", 
        marginBottom: "20px",
        alignItems: "center"
      }}>
        
        <input
          style={{
            padding: "16px 20px",
            width: "500px",
            borderRadius: "12px",
            border: "2px solid #e2e8f0",
            fontSize: "16px",
            outline: "none",
            transition: "border-color 0.2s",
            background: "white"
          }}
          placeholder="Ask your data anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={(e) => e.target.style.borderColor = "#6366f1"}
          onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
        />

        <button
          style={{
            padding: "16px 24px",
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            borderRadius: "12px",
            border: "none",
            color: "white",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "transform 0.2s",
            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
          }}
          onClick={handleSubmit}
          onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-1px)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
        >
          Generate Dashboard
        </button>

      </div>

      {/* Example Queries */}
      <div>
        <p style={{ 
          fontSize: "14px", 
          color: "#6b7280", 
          marginBottom: "12px",
          fontWeight: "500"
        }}>
          💡 Try these examples:
        </p>
        
        <div style={{ 
          display: "flex", 
          flexWrap: "wrap", 
          gap: "8px" 
        }}>
          {EXAMPLE_QUERIES.map((example, index) => (
            <button
              key={index}
              style={{
                padding: "8px 16px",
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "20px",
                fontSize: "13px",
                color: "#475569",
                cursor: "pointer",
                transition: "all 0.2s",
                fontWeight: "500"
              }}
              onClick={() => setQuery(example)}
              onMouseOver={(e) => {
                e.currentTarget.style.background = "#6366f1"
                e.currentTarget.style.color = "white"
                e.currentTarget.style.borderColor = "#6366f1"
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = "#f8fafc"
                e.currentTarget.style.color = "#475569"
                e.currentTarget.style.borderColor = "#e2e8f0"
              }}
            >
              {example}
            </button>
          ))}
        </div>
      </div>

    </div>
  )
}