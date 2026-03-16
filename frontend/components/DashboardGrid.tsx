// // // "use client"

// // // import ChartRenderer from "./ChartRenderer"

// // // interface DashboardGridProps {
// // //   result: {
// // //     primary_chart: any
// // //     additional_charts: any[]
// // //     insights: string
// // //   }
// // // }

// // // export default function DashboardGrid({ result }: DashboardGridProps) {
  
// // //   const { primary_chart, additional_charts, insights } = result

// // //   return (
// // //     <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
      
// // //       {/* Insights Section */}
// // //       <div style={{
// // //         background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
// // //         padding: "20px",
// // //         borderRadius: "12px",
// // //         border: "1px solid #e2e8f0"
// // //       }}>
// // //         <h3 style={{ 
// // //           marginBottom: "15px", 
// // //           color: "#1e293b",
// // //           fontSize: "18px",
// // //           fontWeight: "600"
// // //         }}>
// // //           📊 Key Insights
// // //         </h3>
// // //         <div style={{ 
// // //           color: "#475569",
// // //           lineHeight: "1.6",
// // //           whiteSpace: "pre-line"
// // //         }}>
// // //           {insights}
// // //         </div>
// // //       </div>

// // //       {/* Primary Chart */}
// // //       <div style={{
// // //         background: "white",
// // //         padding: "25px",
// // //         borderRadius: "12px",
// // //         boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
// // //         border: "1px solid #e2e8f0"
// // //       }}>
// // //         <h3 style={{ 
// // //           marginBottom: "20px", 
// // //           color: "#1e293b",
// // //           fontSize: "20px",
// // //           fontWeight: "600"
// // //         }}>
// // //           {primary_chart.title}
// // //         </h3>
        
// // //         <ChartRenderer
// // //           type={primary_chart.chart}
// // //           data={primary_chart.data}
// // //           columns={primary_chart.columns}
// // //         />
        
// // //         <details style={{ marginTop: "15px" }}>
// // //           <summary style={{ 
// // //             color: "#6b7280", 
// // //             cursor: "pointer",
// // //             fontSize: "14px"
// // //           }}>
// // //             View SQL Query
// // //           </summary>
// // //           <pre style={{ 
// // //             marginTop: "10px",
// // //             padding: "10px",
// // //             background: "#f8fafc",
// // //             borderRadius: "6px",
// // //             fontSize: "12px",
// // //             color: "#374151"
// // //           }}>
// // //             {primary_chart.sql}
// // //           </pre>
// // //         </details>
// // //       </div>

// // //       {/* Additional Charts Grid */}
// // //       {additional_charts.length > 0 && (
// // //         <div style={{
// // //           display: "grid",
// // //           gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
// // //           gap: "20px"
// // //         }}>
// // //           {additional_charts.map((chart, index) => (
// // //             <div key={index} style={{
// // //               background: "white",
// // //               padding: "20px",
// // //               borderRadius: "12px",
// // //               boxShadow: "0 2px 4px -1px rgba(0, 0, 0, 0.1)",
// // //               border: "1px solid #e2e8f0"
// // //             }}>
// // //               <h4 style={{ 
// // //                 marginBottom: "15px", 
// // //                 color: "#1e293b",
// // //                 fontSize: "16px",
// // //                 fontWeight: "500"
// // //               }}>
// // //                 {chart.title}
// // //               </h4>
              
// // //               <ChartRenderer
// // //                 type={chart.chart}
// // //                 data={chart.data}
// // //                 columns={chart.columns}
// // //                 size="small"
// // //               />
// // //             </div>
// // //           ))}
// // //         </div>
// // //       )}

// // //     </div>
// // //   )
// // // }
// // "use client"

// // import { useState } from "react"
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

// //   // Parse insights into bullet points if multi-line
// //   const insightLines = insights
// //     ? insights.split(/\n+/).filter((l: string) => l.trim())
// //     : []

// //   return (
// //     <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

// //       {/* Insights row */}
// //       <div style={{
// //         background: "var(--bg-card)",
// //         border: "1px solid var(--border-subtle)",
// //         borderRadius: "16px",
// //         padding: "28px 32px",
// //         position: "relative",
// //         overflow: "hidden",
// //       }}>
// //         {/* decorative line */}
// //         <div style={{
// //           position: "absolute",
// //           top: 0, left: "32px",
// //           width: "60px",
// //           height: "2px",
// //           background: "linear-gradient(90deg, var(--accent-cyan), var(--accent-violet))",
// //           borderRadius: "0 0 2px 2px",
// //         }} />

// //         <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
// //           <div style={{
// //             width: "30px", height: "30px",
// //             background: "rgba(99,218,255,0.08)",
// //             border: "1px solid rgba(99,218,255,0.15)",
// //             borderRadius: "8px",
// //             display: "flex", alignItems: "center", justifyContent: "center",
// //           }}>
// //             <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// //               <path d="M7 1v4M7 9v4M1 7h4M9 7h4" stroke="var(--accent-cyan)" strokeWidth="1.5" strokeLinecap="round"/>
// //             </svg>
// //           </div>
// //           <span style={{ fontFamily: "var(--font-display)", fontSize: "11px", letterSpacing: "0.12em", color: "var(--text-muted)" }}>KEY INSIGHTS</span>
// //         </div>

// //         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
// //           {insightLines.length > 0
// //             ? insightLines.map((line: string, i: number) => (
// //               <InsightCard key={i} text={line} index={i} />
// //             ))
// //             : (
// //               <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.7, fontWeight: 300 }}>
// //                 {insights}
// //               </p>
// //             )
// //           }
// //         </div>
// //       </div>

// //       {/* Primary chart */}
// //       <ChartCard chart={primary_chart} size="large" />

// //       {/* Secondary charts grid */}
// //       {additional_charts && additional_charts.length > 0 && (
// //         <div style={{
// //           display: "grid",
// //           gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))",
// //           gap: "20px",
// //         }}>
// //           {additional_charts.map((chart: any, i: number) => (
// //             <ChartCard key={i} chart={chart} size="small" />
// //           ))}
// //         </div>
// //       )}

// //     </div>
// //   )
// // }

// // function InsightCard({ text, index }: { text: string; index: number }) {
// //   const accents = ["var(--accent-cyan)", "var(--accent-gold)", "var(--accent-violet)", "#22c55e", "#f87171"]
// //   const color = accents[index % accents.length]

// //   return (
// //     <div style={{
// //       padding: "16px 18px",
// //       background: "rgba(255,255,255,0.02)",
// //       border: "1px solid var(--border-subtle)",
// //       borderLeft: `2px solid ${color}`,
// //       borderRadius: "10px",
// //       animation: `fadeUp 0.4s ease ${index * 0.08}s both`,
// //     }}>
// //       <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.65, fontWeight: 300 }}>
// //         {text.replace(/^[-•·]\s*/, "")}
// //       </p>
// //     </div>
// //   )
// // }

// // function ChartCard({ chart, size }: { chart: any; size: "large" | "small" }) {
// //   const [sqlOpen, setSqlOpen] = useState(false)

// //   return (
// //     <div style={{
// //       background: "var(--bg-card)",
// //       border: "1px solid var(--border-subtle)",
// //       borderRadius: "16px",
// //       overflow: "hidden",
// //       animation: "fadeUp 0.5s ease both",
// //     }}>
// //       {/* Card header */}
// //       <div style={{
// //         padding: "20px 24px 16px",
// //         borderBottom: "1px solid var(--border-subtle)",
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "space-between",
// //       }}>
// //         <div>
// //           <h3 style={{
// //             fontFamily: "var(--font-display)",
// //             fontSize: size === "large" ? "17px" : "15px",
// //             fontWeight: 600,
// //             color: "var(--text-primary)",
// //             letterSpacing: "-0.01em",
// //           }}>
// //             {chart.title}
// //           </h3>
// //           <p style={{ fontSize: "11px", color: "var(--text-muted)", marginTop: "4px", letterSpacing: "0.05em" }}>
// //             {chart.chart?.toUpperCase()} CHART · {chart.data?.length || 0} RECORDS
// //           </p>
// //         </div>

// //         {chart.sql && (
// //           <button
// //             onClick={() => setSqlOpen(v => !v)}
// //             style={{
// //               padding: "6px 12px",
// //               background: sqlOpen ? "rgba(99,218,255,0.08)" : "transparent",
// //               border: `1px solid ${sqlOpen ? "rgba(99,218,255,0.2)" : "var(--border-subtle)"}`,
// //               borderRadius: "8px",
// //               fontSize: "11px",
// //               color: sqlOpen ? "var(--accent-cyan)" : "var(--text-muted)",
// //               cursor: "pointer",
// //               fontFamily: "var(--font-body)",
// //               letterSpacing: "0.05em",
// //               transition: "all 0.2s",
// //             }}
// //           >
// //             {sqlOpen ? "HIDE SQL" : "VIEW SQL"}
// //           </button>
// //         )}
// //       </div>

// //       {/* SQL panel */}
// //       {sqlOpen && chart.sql && (
// //         <div style={{
// //           padding: "16px 24px",
// //           background: "rgba(0,0,0,0.3)",
// //           borderBottom: "1px solid var(--border-subtle)",
// //         }}>
// //           <pre style={{
// //             fontSize: "12px",
// //             color: "var(--accent-cyan)",
// //             fontFamily: "'Fira Code', 'Consolas', monospace",
// //             lineHeight: 1.6,
// //             overflowX: "auto",
// //             margin: 0,
// //             opacity: 0.8,
// //           }}>
// //             {chart.sql}
// //           </pre>
// //         </div>
// //       )}

// //       {/* Chart */}
// //       <div style={{ padding: "24px" }}>
// //         <ChartRenderer
// //           type={chart.chart}
// //           data={chart.data}
// //           columns={chart.columns}
// //           size={size === "large" ? "normal" : "small"}
// //         />
// //       </div>
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

// const STAT_COLORS = [
//   { bg: "rgba(225,50,90,0.08)", border: "rgba(225,50,90,0.2)", accent: "#e1325a", label: "PRIMARY" },
//   { bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)", accent: "#a78bfa", label: "SECONDARY" },
//   { bg: "rgba(45,212,191,0.08)", border: "rgba(45,212,191,0.2)", accent: "#2dd4bf", label: "TERTIARY" },
//   { bg: "rgba(240,192,96,0.08)", border: "rgba(240,192,96,0.2)", accent: "#f0c060", label: "QUATERNARY" },
// ]

// export default function DashboardGrid({ result }: DashboardGridProps) {
//   const { primary_chart, additional_charts, insights } = result
//   const insightLines = insights ? insights.split(/\n+/).filter((l: string) => l.trim()) : []

//   // Detect if any chart is pie/donut to place them in pie grid
//   const pieCharts = additional_charts?.filter((c: any) => c.chart === "pie" || c.chart === "donut") || []
//   const otherCharts = additional_charts?.filter((c: any) => c.chart !== "pie" && c.chart !== "donut") || []

//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

//       {/* KPI stat cards from insight lines */}
//       {insightLines.length > 0 && (
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "14px" }}>
//           {insightLines.slice(0, 4).map((line: string, i: number) => {
//             const c = STAT_COLORS[i % STAT_COLORS.length]
//             const clean = line.replace(/^[-•·\d.]\s*/, "")
//             // Try to extract a number from the line for display
//             const numMatch = clean.match(/[\$£€]?[\d,]+\.?\d*[%kKmMbB]?/)
//             const num = numMatch ? numMatch[0] : null
//             const rest = num ? clean.replace(num, "").replace(/^[:\s-]+/, "").trim() : clean
//             return (
//               <div key={i} style={{
//                 padding: "20px 22px", background: c.bg,
//                 border: `1px solid ${c.border}`,
//                 borderRadius: "14px", position: "relative", overflow: "hidden",
//                 animation: `fadeUp 0.4s ease ${i * 0.07}s both`,
//               }}>
//                 <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: `linear-gradient(90deg, ${c.accent}, transparent)` }} />
//                 <p style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.12em", marginBottom: "10px", fontFamily: "var(--font-display)" }}>{c.label} METRIC</p>
//                 {num ? (
//                   <>
//                     <p style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 800, color: c.accent, letterSpacing: "-0.02em", animation: "countUp 0.5s ease both" }}>{num}</p>
//                     <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "6px", lineHeight: 1.5 }}>{rest}</p>
//                   </>
//                 ) : (
//                   <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 300 }}>{clean}</p>
//                 )}
//               </div>
//             )
//           })}
//         </div>
//       )}

//       {/* Primary chart — full width */}
//       <ChartCard chart={primary_chart} size="large" index={0} />

//       {/* Pie charts row */}
//       {pieCharts.length > 0 && (
//         <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(pieCharts.length, 3)}, 1fr)`, gap: "16px" }}>
//           {pieCharts.map((chart: any, i: number) => (
//             <ChartCard key={i} chart={chart} size="pie" index={i + 1} />
//           ))}
//         </div>
//       )}

//       {/* Other additional charts */}
//       {otherCharts.length > 0 && (
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))", gap: "16px" }}>
//           {otherCharts.map((chart: any, i: number) => (
//             <ChartCard key={i} chart={chart} size="small" index={pieCharts.length + i + 1} />
//           ))}
//         </div>
//       )}

//       {/* Remaining insight lines as detail cards */}
//       {insightLines.length > 4 && (
//         <div style={{ background: "var(--bg-card)", border: "1px solid var(--border-subtle)", borderRadius: "14px", padding: "22px 26px" }}>
//           <p style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.12em", marginBottom: "16px", fontFamily: "var(--font-display)" }}>ADDITIONAL INSIGHTS</p>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "12px" }}>
//             {insightLines.slice(4).map((line: string, i: number) => (
//               <div key={i} style={{ padding: "12px 16px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "10px" }}>
//                 <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 300 }}>{line.replace(/^[-•·]\s*/, "")}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// function ChartCard({ chart, size, index }: { chart: any; size: "large" | "small" | "pie"; index: number }) {
//   const [sqlOpen, setSqlOpen] = useState(false)
//   if (!chart) return null

//   const accentColors = ["var(--rose-vivid)", "var(--violet)", "var(--teal)", "var(--gold)", "var(--amber)"]
//   const accent = accentColors[index % accentColors.length]

//   return (
//     <div style={{
//       background: "linear-gradient(135deg, #150d10, #110a0d)",
//       border: "1px solid rgba(255,255,255,0.06)",
//       borderRadius: "16px", overflow: "hidden",
//       boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
//       animation: `fadeUp 0.5s ease ${index * 0.08}s both`,
//       transition: "border-color 0.25s, box-shadow 0.25s",
//     }}
//       onMouseOver={e => { e.currentTarget.style.borderColor = "rgba(225,50,90,0.15)"; e.currentTarget.style.boxShadow = "0 12px 48px rgba(0,0,0,0.4)"; }}
//       onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.3)"; }}
//     >
//       {/* Color accent bar */}
//       <div style={{ height: "2px", background: `linear-gradient(90deg, ${accent}, transparent)` }} />

//       {/* Header */}
//       <div style={{ padding: "18px 22px 14px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
//         <div>
//           <h3 style={{ fontFamily: "var(--font-display)", fontSize: size === "large" ? "16px" : "14px", fontWeight: 700, color: "#fdf0f3", letterSpacing: "-0.01em", marginBottom: "4px" }}>
//             {chart.title}
//           </h3>
//           <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//             <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
//               {chart.chart?.toUpperCase()}
//             </span>
//             <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--text-muted)" }} />
//             <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
//               {chart.data?.length || 0} RECORDS
//             </span>
//           </div>
//         </div>
//         <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
//           {/* Chart type badge */}
//           <div style={{ padding: "3px 8px", background: "rgba(225,50,90,0.1)", border: "1px solid rgba(225,50,90,0.2)", borderRadius: "6px" }}>
//             <span style={{ fontSize: "10px", color: "var(--rose-bright)", letterSpacing: "0.08em" }}>
//               {chart.chart === "bar" ? "▊ BAR" : chart.chart === "line" ? "∿ LINE" : chart.chart === "area" ? "◬ AREA" : chart.chart === "pie" ? "◔ PIE" : chart.chart === "donut" ? "◯ DONUT" : "⊞ TABLE"}
//             </span>
//           </div>
//           {chart.sql && (
//             <button onClick={() => setSqlOpen(v => !v)} style={{
//               padding: "3px 10px", background: sqlOpen ? "rgba(167,139,250,0.12)" : "transparent",
//               border: `1px solid ${sqlOpen ? "rgba(167,139,250,0.3)" : "rgba(255,255,255,0.08)"}`,
//               borderRadius: "6px", fontSize: "10px",
//               color: sqlOpen ? "var(--violet)" : "var(--text-muted)",
//               cursor: "pointer", fontFamily: "var(--font-body)", letterSpacing: "0.06em", transition: "all 0.2s",
//             }}>SQL</button>
//           )}
//         </div>
//       </div>

//       {/* SQL panel */}
//       {sqlOpen && chart.sql && (
//         <div style={{ padding: "14px 22px", background: "rgba(0,0,0,0.4)", borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
//           <pre style={{ fontSize: "11px", color: "#a78bfa", fontFamily: "'Fira Code', 'Consolas', monospace", lineHeight: 1.7, overflowX: "auto", margin: 0 }}>
//             {chart.sql}
//           </pre>
//         </div>
//       )}

//       {/* Chart body */}
//       <div style={{ padding: size === "pie" ? "10px 16px 20px" : "8px 22px 22px" }}>
//         <ChartRenderer type={chart.chart} data={chart.data} columns={chart.columns} size={size} />
//       </div>
//     </div>
//   )
// }
"use client"

import { useState, useEffect, useRef } from "react"
import ChartRenderer from "./ChartRenderer"

interface DashboardGridProps {
  result: {
    primary_chart: any
    additional_charts: any[]
    insights: string
  }
}

const STAT_COLORS = [
  { bg: "rgba(225,50,90,0.08)", border: "rgba(225,50,90,0.18)", accent: "#e1325a", glow: "rgba(225,50,90,0.25)", label: "PRIMARY METRIC" },
  { bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.18)", accent: "#a78bfa", glow: "rgba(167,139,250,0.25)", label: "SECONDARY METRIC" },
  { bg: "rgba(45,212,191,0.08)", border: "rgba(45,212,191,0.18)", accent: "#2dd4bf", glow: "rgba(45,212,191,0.25)", label: "TERTIARY METRIC" },
  { bg: "rgba(240,192,96,0.08)", border: "rgba(240,192,96,0.18)", accent: "#f0c060", glow: "rgba(240,192,96,0.25)", label: "QUATERNARY METRIC" },
]

// Animated counter hook
function useCounter(target: number, duration = 1200) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration])
  return count
}

function KpiCard({ line, index, visible }: { line: string; index: number; visible: boolean }) {
  const c = STAT_COLORS[index % STAT_COLORS.length]
  const clean = line.replace(/^[-•·\d.]\s*/, "")
  const numMatch = clean.match(/([\$£€]?)([\d,]+)(\.?\d*)?([%kKmMbB]?)/)
  const rawNum = numMatch ? parseFloat(numMatch[2].replace(/,/g, "") + (numMatch[3] || "")) : null
  const prefix = numMatch?.[1] || ""
  const suffix = numMatch?.[4] || ""
  const rest = numMatch ? clean.replace(numMatch[0], "").replace(/^[:\s\-–]+/, "").trim() : clean
  const animated = useCounter(rawNum ?? 0, 1400)
  const [hovered, setHovered] = useState(false)

  const displayNum = rawNum !== null
    ? prefix + (animated >= 1000 ? animated.toLocaleString() : animated) + suffix
    : null

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "22px 24px",
        background: hovered ? `rgba(${index === 0 ? "225,50,90" : index === 1 ? "167,139,250" : index === 2 ? "45,212,191" : "240,192,96"},0.12)` : c.bg,
        border: `1px solid ${hovered ? c.accent : c.border}`,
        borderRadius: "16px", position: "relative", overflow: "hidden",
        cursor: "default",
        transform: visible ? "translateY(0)" : "translateY(20px)",
        opacity: visible ? 1 : 0,
        transition: `all 0.5s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.08}s`,
        boxShadow: hovered ? `0 8px 32px ${c.glow}, inset 0 1px 0 rgba(255,255,255,0.06)` : "0 2px 12px rgba(0,0,0,0.2)",
      }}
    >
      {/* Top gradient bar */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "2px",
        background: `linear-gradient(90deg, ${c.accent}, ${c.accent}44, transparent)`,
        transform: hovered ? "scaleX(1)" : "scaleX(0.6)",
        transformOrigin: "left",
        transition: "transform 0.4s ease",
      }} />

      {/* Background shimmer on hover */}
      {hovered && (
        <div style={{
          position: "absolute", inset: 0,
          background: `radial-gradient(ellipse at 50% 0%, ${c.glow} 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />
      )}

      {/* Floating orb */}
      <div style={{
        position: "absolute", right: "-20px", top: "-20px",
        width: "80px", height: "80px",
        borderRadius: "50%",
        background: `radial-gradient(circle, ${c.accent}18 0%, transparent 70%)`,
        transform: hovered ? "scale(1.4)" : "scale(1)",
        transition: "transform 0.6s ease",
      }} />

      <p style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.14em", marginBottom: "12px", fontFamily: "var(--font-display)", position: "relative" }}>
        {c.label}
      </p>

      {rawNum !== null ? (
        <>
          <p style={{
            fontFamily: "var(--font-display)", fontSize: "32px", fontWeight: 800,
            color: c.accent, letterSpacing: "-0.03em", lineHeight: 1, position: "relative",
            textShadow: hovered ? `0 0 24px ${c.glow}` : "none",
            transition: "text-shadow 0.3s",
          }}>
            {displayNum}
          </p>
          {rest && <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "8px", lineHeight: 1.5, position: "relative" }}>{rest}</p>}
        </>
      ) : (
        <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.65, fontWeight: 300, position: "relative" }}>{clean}</p>
      )}

      {/* Trend arrow */}
      <div style={{
        position: "absolute", bottom: "16px", right: "18px",
        opacity: hovered ? 1 : 0,
        transform: hovered ? "translateY(0)" : "translateY(4px)",
        transition: "all 0.3s ease",
      }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 13L13 3M13 3H7M13 3V9" stroke={c.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}

export default function DashboardGrid({ result }: DashboardGridProps) {
  const { primary_chart, additional_charts, insights } = result
  const [visible, setVisible] = useState(false)
  const insightLines = insights ? insights.split(/\n+/).filter((l: string) => l.trim()) : []
  const pieCharts = additional_charts?.filter((c: any) => c.chart === "pie" || c.chart === "donut") || []
  const otherCharts = additional_charts?.filter((c: any) => c.chart !== "pie" && c.chart !== "donut") || []

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

      {/* KPI Cards */}
      {insightLines.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "14px" }}>
          {insightLines.slice(0, 4).map((line: string, i: number) => (
            <KpiCard key={i} line={line} index={i} visible={visible} />
          ))}
        </div>
      )}

      {/* Primary chart */}
      <ChartCard chart={primary_chart} size="large" index={0} visible={visible} />

      {/* Pie charts row */}
      {pieCharts.length > 0 && (
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.min(pieCharts.length, 3)}, 1fr)`,
          gap: "16px"
        }}>
          {pieCharts.map((chart: any, i: number) => (
            <ChartCard key={i} chart={chart} size="pie" index={i + 1} visible={visible} />
          ))}
        </div>
      )}

      {/* Other charts */}
      {otherCharts.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: "16px" }}>
          {otherCharts.map((chart: any, i: number) => (
            <ChartCard key={i} chart={chart} size="small" index={pieCharts.length + i + 1} visible={visible} />
          ))}
        </div>
      )}

      {/* Extra insight cards */}
      {insightLines.length > 4 && (
        <div style={{
          background: "linear-gradient(135deg, #150d10, #110a0d)",
          border: "1px solid rgba(255,255,255,0.06)",
          borderRadius: "16px", padding: "24px 28px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(16px)",
          transition: "all 0.5s ease 0.5s",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
            <div style={{ width: "3px", height: "18px", background: "linear-gradient(180deg, #e1325a, #a78bfa)", borderRadius: "2px" }} />
            <p style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.14em", fontFamily: "var(--font-display)" }}>ADDITIONAL INSIGHTS</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px" }}>
            {insightLines.slice(4).map((line: string, i: number) => (
              <InsightRow key={i} text={line.replace(/^[-•·]\s*/, "")} delay={i * 0.06} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function InsightRow({ text, delay }: { text: string; delay: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "12px 16px",
        background: hovered ? "rgba(225,50,90,0.06)" : "rgba(255,255,255,0.02)",
        border: `1px solid ${hovered ? "rgba(225,50,90,0.2)" : "rgba(255,255,255,0.05)"}`,
        borderRadius: "10px",
        display: "flex", alignItems: "flex-start", gap: "10px",
        transition: "all 0.2s ease",
        cursor: "default",
      }}
    >
      <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#e1325a", marginTop: "5px", flexShrink: 0, boxShadow: hovered ? "0 0 8px #e1325a" : "none", transition: "box-shadow 0.2s" }} />
      <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 300 }}>{text}</p>
    </div>
  )
}

const CHART_TYPE_ICONS: Record<string, string> = {
  bar: "▊", line: "∿", area: "◬", pie: "◔", donut: "◯", table: "⊞",
}
const ACCENT_CYCLE = ["#e1325a", "#a78bfa", "#2dd4bf", "#f0c060", "#fb923c"]

function ChartCard({ chart, size, index, visible }: { chart: any; size: "large" | "small" | "pie"; index: number; visible: boolean }) {
  const [sqlOpen, setSqlOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const accent = ACCENT_CYCLE[index % ACCENT_CYCLE.length]
  if (!chart) return null

  const delay = index * 0.09

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "linear-gradient(145deg, #180e13, #100a0e)",
        border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.06)"}`,
        borderRadius: "18px", overflow: "hidden",
        boxShadow: hovered
          ? `0 16px 56px rgba(0,0,0,0.45), 0 0 0 1px ${accent}22`
          : "0 6px 28px rgba(0,0,0,0.3)",
        transform: visible
          ? hovered ? "translateY(-3px)" : "translateY(0)"
          : "translateY(24px)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.55s cubic-bezier(0.34,1.56,0.64,1) ${delay}s, opacity 0.4s ease ${delay}s, border-color 0.25s, box-shadow 0.3s`,
      }}
    >
      {/* Animated top accent bar */}
      <div style={{
        height: "2px",
        background: `linear-gradient(90deg, ${accent}, ${accent}88, transparent)`,
        transform: hovered ? "scaleX(1)" : "scaleX(0.5)",
        transformOrigin: "left",
        transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
      }} />

      {/* Ambient corner glow */}
      <div style={{
        position: "absolute", top: 0, right: 0,
        width: "160px", height: "160px",
        background: `radial-gradient(circle at top right, ${accent}12 0%, transparent 65%)`,
        pointerEvents: "none",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.4s ease",
      }} />

      {/* Header */}
      <div style={{ padding: "20px 24px 14px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", position: "relative" }}>
        <div>
          <h3 style={{
            fontFamily: "var(--font-display)",
            fontSize: size === "large" ? "17px" : "14px",
            fontWeight: 700, color: "#fdf0f3",
            letterSpacing: "-0.01em", marginBottom: "6px",
            transition: "color 0.2s",
          }}>
            {chart.title}
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>{chart.chart?.toUpperCase()}</span>
            <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--text-muted)" }} />
            <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.08em" }}>{chart.data?.length || 0} RECORDS</span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "8px", alignItems: "center", flexShrink: 0 }}>
          {/* Chart type badge */}
          <div style={{
            padding: "4px 10px",
            background: hovered ? `${accent}22` : "rgba(255,255,255,0.04)",
            border: `1px solid ${hovered ? accent + "55" : "rgba(255,255,255,0.08)"}`,
            borderRadius: "8px",
            transition: "all 0.3s ease",
          }}>
            <span style={{ fontSize: "10px", color: hovered ? accent : "var(--text-muted)", letterSpacing: "0.08em", transition: "color 0.3s" }}>
              {CHART_TYPE_ICONS[chart.chart] || "◈"} {chart.chart?.toUpperCase()}
            </span>
          </div>

          {chart.sql && (
            <button
              onClick={() => setSqlOpen(v => !v)}
              style={{
                padding: "4px 10px",
                background: sqlOpen ? "rgba(167,139,250,0.15)" : "transparent",
                border: `1px solid ${sqlOpen ? "rgba(167,139,250,0.4)" : "rgba(255,255,255,0.08)"}`,
                borderRadius: "8px", fontSize: "10px",
                color: sqlOpen ? "#a78bfa" : "var(--text-muted)",
                cursor: "pointer", fontFamily: "var(--font-body)",
                letterSpacing: "0.06em", transition: "all 0.2s",
              }}
              onMouseOver={e => { if (!sqlOpen) { e.currentTarget.style.borderColor = "rgba(167,139,250,0.3)"; e.currentTarget.style.color = "#a78bfa" }}}
              onMouseOut={e => { if (!sqlOpen) { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "var(--text-muted)" }}}
            >
              {sqlOpen ? "▲ SQL" : "▼ SQL"}
            </button>
          )}
        </div>
      </div>

      {/* SQL panel */}
      <div style={{
        maxHeight: sqlOpen ? "200px" : "0px",
        overflow: "hidden",
        transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
      }}>
        <div style={{ padding: "14px 24px 16px", background: "rgba(0,0,0,0.5)", borderTop: "1px solid rgba(167,139,250,0.1)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
          <pre style={{ fontSize: "11px", color: "#a78bfa", fontFamily: "'Fira Code','Consolas',monospace", lineHeight: 1.75, overflowX: "auto", margin: 0, opacity: 0.85 }}>
            {chart.sql}
          </pre>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${accent}22, transparent)`, margin: "0 24px" }} />

      {/* Chart */}
      <div style={{ padding: size === "pie" ? "12px 18px 22px" : "12px 24px 24px" }}>
        <ChartRenderer type={chart.chart} data={chart.data} columns={chart.columns} size={size} accent={accent} />
      </div>
    </div>
  )
}