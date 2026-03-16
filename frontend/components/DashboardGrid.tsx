// // "use client"

// // import ChartRenderer from "./ChartRenderer"

// // interface DashboardGridProps {
// //   result: {
// //     primary_chart: any
// //     additional_charts: any[]
// //     insights: string
// //   }
// // }

// // export default function DashboardGrid({ result }: DashboardGridProps) {
  
// //   const { primary_chart, additional_charts, insights } = result

// //   return (
// //     <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      
// //       {/* Insights Section */}
// //       <div style={{
// //         background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
// //         padding: "20px",
// //         borderRadius: "12px",
// //         border: "1px solid #e2e8f0"
// //       }}>
// //         <h3 style={{ 
// //           marginBottom: "15px", 
// //           color: "#1e293b",
// //           fontSize: "18px",
// //           fontWeight: "600"
// //         }}>
// //           📊 Key Insights
// //         </h3>
// //         <div style={{ 
// //           color: "#475569",
// //           lineHeight: "1.6",
// //           whiteSpace: "pre-line"
// //         }}>
// //           {insights}
// //         </div>
// //       </div>

// //       {/* Primary Chart */}
// //       <div style={{
// //         background: "white",
// //         padding: "25px",
// //         borderRadius: "12px",
// //         boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
// //         border: "1px solid #e2e8f0"
// //       }}>
// //         <h3 style={{ 
// //           marginBottom: "20px", 
// //           color: "#1e293b",
// //           fontSize: "20px",
// //           fontWeight: "600"
// //         }}>
// //           {primary_chart.title}
// //         </h3>
        
// //         <ChartRenderer
// //           type={primary_chart.chart}
// //           data={primary_chart.data}
// //           columns={primary_chart.columns}
// //         />
        
// //         <details style={{ marginTop: "15px" }}>
// //           <summary style={{ 
// //             color: "#6b7280", 
// //             cursor: "pointer",
// //             fontSize: "14px"
// //           }}>
// //             View SQL Query
// //           </summary>
// //           <pre style={{ 
// //             marginTop: "10px",
// //             padding: "10px",
// //             background: "#f8fafc",
// //             borderRadius: "6px",
// //             fontSize: "12px",
// //             color: "#374151"
// //           }}>
// //             {primary_chart.sql}
// //           </pre>
// //         </details>
// //       </div>

// //       {/* Additional Charts Grid */}
// //       {additional_charts.length > 0 && (
// //         <div style={{
// //           display: "grid",
// //           gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
// //           gap: "20px"
// //         }}>
// //           {additional_charts.map((chart, index) => (
// //             <div key={index} style={{
// //               background: "white",
// //               padding: "20px",
// //               borderRadius: "12px",
// //               boxShadow: "0 2px 4px -1px rgba(0, 0, 0, 0.1)",
// //               border: "1px solid #e2e8f0"
// //             }}>
// //               <h4 style={{ 
// //                 marginBottom: "15px", 
// //                 color: "#1e293b",
// //                 fontSize: "16px",
// //                 fontWeight: "500"
// //               }}>
// //                 {chart.title}
// //               </h4>
              
// //               <ChartRenderer
// //                 type={chart.chart}
// //                 data={chart.data}
// //                 columns={chart.columns}
// //                 size="small"
// //               />
// //             </div>
// //           ))}
// //         </div>
// //       )}

// //     </div>
// //   )
// // }
// "use client"

// import { useState } from "react"
// import ChartRenderer from "./ChartRenderer"

// interface DashboardGridProps {
//   result: {
//     primary_chart: any
//     additional_charts: any[]
//     insights: string
//   }
// }

// export default function DashboardGrid({ result }: DashboardGridProps) {
//   const { primary_chart, additional_charts, insights } = result

//   // Parse insights into bullet points if multi-line
//   const insightLines = insights
//     ? insights.split(/\n+/).filter((l: string) => l.trim())
//     : []

//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

//       {/* Insights row */}
//       <div style={{
//         background: "var(--bg-card)",
//         border: "1px solid var(--border-subtle)",
//         borderRadius: "16px",
//         padding: "28px 32px",
//         position: "relative",
//         overflow: "hidden",
//       }}>
//         {/* decorative line */}
//         <div style={{
//           position: "absolute",
//           top: 0, left: "32px",
//           width: "60px",
//           height: "2px",
//           background: "linear-gradient(90deg, var(--accent-cyan), var(--accent-violet))",
//           borderRadius: "0 0 2px 2px",
//         }} />

//         <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
//           <div style={{
//             width: "30px", height: "30px",
//             background: "rgba(99,218,255,0.08)",
//             border: "1px solid rgba(99,218,255,0.15)",
//             borderRadius: "8px",
//             display: "flex", alignItems: "center", justifyContent: "center",
//           }}>
//             <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//               <path d="M7 1v4M7 9v4M1 7h4M9 7h4" stroke="var(--accent-cyan)" strokeWidth="1.5" strokeLinecap="round"/>
//             </svg>
//           </div>
//           <span style={{ fontFamily: "var(--font-display)", fontSize: "11px", letterSpacing: "0.12em", color: "var(--text-muted)" }}>KEY INSIGHTS</span>
//         </div>

//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
//           {insightLines.length > 0
//             ? insightLines.map((line: string, i: number) => (
//               <InsightCard key={i} text={line} index={i} />
//             ))
//             : (
//               <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.7, fontWeight: 300 }}>
//                 {insights}
//               </p>
//             )
//           }
//         </div>
//       </div>

//       {/* Primary chart */}
//       <ChartCard chart={primary_chart} size="large" />

//       {/* Secondary charts grid */}
//       {additional_charts && additional_charts.length > 0 && (
//         <div style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
//           gap: "20px",
//         }}>
//           {additional_charts.map((chart: any, i: number) => (
//             <ChartCard key={i} chart={chart} size="small" />
//           ))}
//         </div>
//       )}

//     </div>
//   )
// }

// function InsightCard({ text, index }: { text: string; index: number }) {
//   const accents = ["var(--accent-cyan)", "var(--accent-gold)", "var(--accent-violet)", "#22c55e", "#f87171"]
//   const color = accents[index % accents.length]

//   return (
//     <div style={{
//       padding: "16px 18px",
//       background: "rgba(255,255,255,0.02)",
//       border: "1px solid var(--border-subtle)",
//       borderLeft: `2px solid ${color}`,
//       borderRadius: "10px",
//       animation: `fadeUp 0.4s ease ${index * 0.08}s both`,
//     }}>
//       <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.65, fontWeight: 300 }}>
//         {text.replace(/^[-•·]\s*/, "")}
//       </p>
//     </div>
//   )
// }

// function ChartCard({ chart, size }: { chart: any; size: "large" | "small" }) {
//   const [sqlOpen, setSqlOpen] = useState(false)

//   return (
//     <div style={{
//       background: "var(--bg-card)",
//       border: "1px solid var(--border-subtle)",
//       borderRadius: "16px",
//       overflow: "hidden",
//       animation: "fadeUp 0.5s ease both",
//     }}>
//       {/* Card header */}
//       <div style={{
//         padding: "20px 24px 16px",
//         borderBottom: "1px solid var(--border-subtle)",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//       }}>
//         <div>
//           <h3 style={{
//             fontFamily: "var(--font-display)",
//             fontSize: size === "large" ? "17px" : "15px",
//             fontWeight: 600,
//             color: "var(--text-primary)",
//             letterSpacing: "-0.01em",
//           }}>
//             {chart.title}
//           </h3>
//           <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "4px", letterSpacing: "0.05em" }}>
//             {chart.chart?.toUpperCase()} CHART · {chart.data?.length || 0} RECORDS
//           </p>
//         </div>

//         {chart.sql && (
//           <button
//             onClick={() => setSqlOpen(v => !v)}
//             style={{
//               padding: "6px 12px",
//               background: sqlOpen ? "rgba(99,218,255,0.08)" : "transparent",
//               border: `1px solid ${sqlOpen ? "rgba(99,218,255,0.2)" : "var(--border-subtle)"}`,
//               borderRadius: "8px",
//               fontSize: "11px",
//               color: sqlOpen ? "var(--accent-cyan)" : "var(--text-muted)",
//               cursor: "pointer",
//               fontFamily: "var(--font-body)",
//               letterSpacing: "0.05em",
//               transition: "all 0.2s",
//             }}
//           >
//             {sqlOpen ? "HIDE SQL" : "VIEW SQL"}
//           </button>
//         )}
//       </div>

//       {/* SQL panel */}
//       {sqlOpen && chart.sql && (
//         <div style={{
//           padding: "16px 24px",
//           background: "rgba(0,0,0,0.3)",
//           borderBottom: "1px solid var(--border-subtle)",
//         }}>
//           <pre style={{
//             fontSize: "12px",
//             color: "var(--accent-cyan)",
//             fontFamily: "'Fira Code', 'Consolas', monospace",
//             lineHeight: 1.6,
//             overflowX: "auto",
//             margin: 0,
//             opacity: 0.8,
//           }}>
//             {chart.sql}
//           </pre>
//         </div>
//       )}

//       {/* Chart */}
//       <div style={{ padding: "24px" }}>
//         <ChartRenderer
//           type={chart.chart}
//           data={chart.data}
//           columns={chart.columns}
//           size={size === "large" ? "normal" : "small"}
//         />
//       </div>
//     </div>
//   )
// }
"use client"

import { useState } from "react"
import ChartRenderer from "./ChartRenderer"

interface DashboardGridProps {
  result: {
    primary_chart: any
    additional_charts: any[]
    insights: string
  }
}

const STAT_COLORS = [
  { bg: "rgba(225,50,90,0.08)", border: "rgba(225,50,90,0.2)", accent: "#e1325a", label: "PRIMARY" },
  { bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)", accent: "#a78bfa", label: "SECONDARY" },
  { bg: "rgba(45,212,191,0.08)", border: "rgba(45,212,191,0.2)", accent: "#2dd4bf", label: "TERTIARY" },
  { bg: "rgba(240,192,96,0.08)", border: "rgba(240,192,96,0.2)", accent: "#f0c060", label: "QUATERNARY" },
]

export default function DashboardGrid({ result }: DashboardGridProps) {
  const { primary_chart, additional_charts, insights } = result
  const insightLines = insights ? insights.split(/\n+/).filter((l: string) => l.trim()) : []

  // Detect if any chart is pie/donut to place them in pie grid
  const pieCharts = additional_charts?.filter((c: any) => c.chart === "pie" || c.chart === "donut") || []
  const otherCharts = additional_charts?.filter((c: any) => c.chart !== "pie" && c.chart !== "donut") || []

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

      {/* KPI stat cards from insight lines */}
      {insightLines.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
          {insightLines.slice(0, 4).map((line: string, i: number) => {
            const c = STAT_COLORS[i % STAT_COLORS.length]
            const clean = line.replace(/^[-•·\d.]\s*/, "")
            // Try to extract a number from the line for display
            const numMatch = clean.match(/[\$£€]?[\d,]+\.?\d*[%kKmMbB]?/)
            const num = numMatch ? numMatch[0] : null
            const rest = num ? clean.replace(num, "").replace(/^[:\s-]+/, "").trim() : clean
            return (
              <div key={i} style={{
                padding: "20px 22px", background: c.bg,
                border: `1px solid ${c.border}`,
                borderRadius: "14px", position: "relative", overflow: "hidden",
                animation: `fadeUp 0.4s ease ${i * 0.07}s both`,
              }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${c.accent}, transparent)` }} />
                <p style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.12em", marginBottom: "10px", fontFamily: "var(--font-display)" }}>{c.label} METRIC</p>
                {num ? (
                  <>
                    <p style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, color: c.accent, letterSpacing: "-0.02em", animation: "countUp 0.5s ease both" }}>{num}</p>
                    <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "6px", lineHeight: 1.5 }}>{rest}</p>
                  </>
                ) : (
                  <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 300 }}>{clean}</p>
                )}
              </div>
            )
          })}
        </div>
      )}

      {/* Primary chart — full width */}
      <ChartCard chart={primary_chart} size="large" index={0} />

      {/* Pie charts row */}
      {pieCharts.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(pieCharts.length, 3)}, 1fr)`, gap: "16px" }}>
          {pieCharts.map((chart: any, i: number) => (
            <ChartCard key={i} chart={chart} size="pie" index={i + 1} />
          ))}
        </div>
      )}

      {/* Other additional charts */}
      {otherCharts.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", gap: "16px" }}>
          {otherCharts.map((chart: any, i: number) => (
            <ChartCard key={i} chart={chart} size="small" index={pieCharts.length + i + 1} />
          ))}
        </div>
      )}

      {/* Remaining insight lines as detail cards */}
      {insightLines.length > 4 && (
        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "22px 26px" }}>
          <p style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.12em", marginBottom: "16px", fontFamily: "var(--font-display)" }}>ADDITIONAL INSIGHTS</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
            {insightLines.slice(4).map((line: string, i: number) => (
              <div key={i} style={{ padding: "12px 16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "10px" }}>
                <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 300 }}>{line.replace(/^[-•·]\s*/, "")}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function ChartCard({ chart, size, index }: { chart: any; size: "large" | "small" | "pie"; index: number }) {
  const [sqlOpen, setSqlOpen] = useState(false)
  if (!chart) return null

  const accentColors = ["var(--rose-vivid)", "var(--violet)", "var(--teal)", "var(--gold)", "var(--amber)"]
  const accent = accentColors[index % accentColors.length]

  return (
    <div style={{
      background: "linear-gradient(135deg, #150d10, #110a0d)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: "16px", overflow: "hidden",
      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      animation: `fadeUp 0.5s ease ${index * 0.08}s both`,
      transition: "border-color 0.25s, box-shadow 0.25s",
    }}
      onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(225,50,90,0.15)"; e.currentTarget.style.boxShadow = "0 12px 48px rgba(0,0,0,0.4)"; }}
      onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)"; }}
    >
      {/* Color accent bar */}
      <div style={{ height: "2px", background: `linear-gradient(90deg, ${accent}, transparent)` }} />

      {/* Header */}
      <div style={{ padding: "18px 22px 14px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontSize: size === "large" ? "16px" : "14px", fontWeight: 700, color: "#fdf0f3", letterSpacing: "-0.01em", marginBottom: "4px" }}>
            {chart.title}
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
              {chart.chart?.toUpperCase()}
            </span>
            <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--text-muted)" }} />
            <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
              {chart.data?.length || 0} RECORDS
            </span>
          </div>
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          {/* Chart type badge */}
          <div style={{ padding: "3px 8px", background: "rgba(225,50,90,0.1)", border: "1px solid rgba(225,50,90,0.2)", borderRadius: "6px" }}>
            <span style={{ fontSize: "10px", color: "var(--rose-bright)", letterSpacing: "0.08em" }}>
              {chart.chart === "bar" ? "▊ BAR" : chart.chart === "line" ? "∿ LINE" : chart.chart === "area" ? "◬ AREA" : chart.chart === "pie" ? "◔ PIE" : chart.chart === "donut" ? "◯ DONUT" : "⊞ TABLE"}
            </span>
          </div>
          {chart.sql && (
            <button onClick={() => setSqlOpen(v => !v)} style={{
              padding: "3px 10px", background: sqlOpen ? "rgba(167,139,250,0.12)" : "transparent",
              border: `1px solid ${sqlOpen ? "rgba(167,139,250,0.3)" : "rgba(255,255,255,0.08)"}`,
              borderRadius: "6px", fontSize: "10px",
              color: sqlOpen ? "var(--violet)" : "var(--text-muted)",
              cursor: "pointer", fontFamily: "var(--font-body)", letterSpacing: "0.06em", transition: "all 0.2s",
            }}>SQL</button>
          )}
        </div>
      </div>

      {/* SQL panel */}
      {sqlOpen && chart.sql && (
        <div style={{ padding: "14px 22px", background: "rgba(0,0,0,0.4)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
          <pre style={{ fontSize: "11px", color: "#a78bfa", fontFamily: "'Fira Code', 'Consolas', monospace", lineHeight: 1.7, overflowX: "auto", margin: 0 }}>
            {chart.sql}
          </pre>
        </div>
      )}

      {/* Chart body */}
      <div style={{ padding: size === "pie" ? "10px 16px 20px" : "8px 22px 22px" }}>
        <ChartRenderer type={chart.chart} data={chart.data} columns={chart.columns} size={size} />
      </div>
    </div>
  )
}