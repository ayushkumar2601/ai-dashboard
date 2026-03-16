"use client"

import ChartRenderer from "./ChartRenderer"

interface DashboardGridProps {
  result: {
    primary_chart: any
    additional_charts: any[]
    insights: string
  }
}

export default function DashboardGrid({ result }: DashboardGridProps) {
  
  const { primary_chart, additional_charts, insights } = result

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      
      {/* Insights Section */}
      <div style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #e2e8f0"
      }}>
        <h3 style={{ 
          marginBottom: "15px", 
          color: "#1e293b",
          fontSize: "18px",
          fontWeight: "600"
        }}>
          📊 Key Insights
        </h3>
        <div style={{ 
          color: "#475569",
          lineHeight: "1.6",
          whiteSpace: "pre-line"
        }}>
          {insights}
        </div>
      </div>

      {/* Primary Chart */}
      <div style={{
        background: "white",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e2e8f0"
      }}>
        <h3 style={{ 
          marginBottom: "20px", 
          color: "#1e293b",
          fontSize: "20px",
          fontWeight: "600"
        }}>
          {primary_chart.title}
        </h3>
        
        <ChartRenderer
          type={primary_chart.chart}
          data={primary_chart.data}
          columns={primary_chart.columns}
        />
        
        <details style={{ marginTop: "15px" }}>
          <summary style={{ 
            color: "#6b7280", 
            cursor: "pointer",
            fontSize: "14px"
          }}>
            View SQL Query
          </summary>
          <pre style={{ 
            marginTop: "10px",
            padding: "10px",
            background: "#f8fafc",
            borderRadius: "6px",
            fontSize: "12px",
            color: "#374151"
          }}>
            {primary_chart.sql}
          </pre>
        </details>
      </div>

      {/* Additional Charts Grid */}
      {additional_charts.length > 0 && (
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
          gap: "20px"
        }}>
          {additional_charts.map((chart, index) => (
            <div key={index} style={{
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 4px -1px rgba(0, 0, 0, 0.1)",
              border: "1px solid #e2e8f0"
            }}>
              <h4 style={{ 
                marginBottom: "15px", 
                color: "#1e293b",
                fontSize: "16px",
                fontWeight: "500"
              }}>
                {chart.title}
              </h4>
              
              <ChartRenderer
                type={chart.chart}
                data={chart.data}
                columns={chart.columns}
                size="small"
              />
            </div>
          ))}
        </div>
      )}

    </div>
  )
}