// // // // // // "use client"

// // // // // // import { useState, useEffect, useRef } from "react"
// // // // // // import ChartRenderer from "./ChartRenderer"

// // // // // // interface DashboardGridProps {
// // // // // //   result: {
// // // // // //     primary_chart: any
// // // // // //     additional_charts: any[]
// // // // // //     insights: string
// // // // // //   }
// // // // // // }

// // // // // // const STAT_COLORS = [
// // // // // //   { bg: "rgba(225,50,90,0.08)", border: "rgba(225,50,90,0.18)", accent: "#e1325a", glow: "rgba(225,50,90,0.25)", label: "PRIMARY METRIC" },
// // // // // //   { bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.18)", accent: "#a78bfa", glow: "rgba(167,139,250,0.25)", label: "SECONDARY METRIC" },
// // // // // //   { bg: "rgba(45,212,191,0.08)", border: "rgba(45,212,191,0.18)", accent: "#2dd4bf", glow: "rgba(45,212,191,0.25)", label: "TERTIARY METRIC" },
// // // // // //   { bg: "rgba(240,192,96,0.08)", border: "rgba(240,192,96,0.18)", accent: "#f0c060", glow: "rgba(240,192,96,0.25)", label: "QUATERNARY METRIC" },
// // // // // // ]

// // // // // // // Animated counter hook
// // // // // // function useCounter(target: number, duration = 1200) {
// // // // // //   const [count, setCount] = useState(0)
// // // // // //   useEffect(() => {
// // // // // //     let start = 0
// // // // // //     const step = target / (duration / 16)
// // // // // //     const timer = setInterval(() => {
// // // // // //       start += step
// // // // // //       if (start >= target) { setCount(target); clearInterval(timer) }
// // // // // //       else setCount(Math.floor(start))
// // // // // //     }, 16)
// // // // // //     return () => clearInterval(timer)
// // // // // //   }, [target, duration])
// // // // // //   return count
// // // // // // }

// // // // // // function KpiCard({ line, index, visible }: { line: string; index: number; visible: boolean }) {
// // // // // //   const c = STAT_COLORS[index % STAT_COLORS.length]
// // // // // //   const clean = line.replace(/^[-•·\d.]\s*/, "")
// // // // // //   const numMatch = clean.match(/([\$£€]?)([\d,]+)(\.?\d*)?([%kKmMbB]?)/)
// // // // // //   const rawNum = numMatch ? parseFloat(numMatch[2].replace(/,/g, "") + (numMatch[3] || "")) : null
// // // // // //   const prefix = numMatch?.[1] || ""
// // // // // //   const suffix = numMatch?.[4] || ""
// // // // // //   const rest = numMatch ? clean.replace(numMatch[0], "").replace(/^[:\s\-–]+/, "").trim() : clean
// // // // // //   const animated = useCounter(rawNum ?? 0, 1400)
// // // // // //   const [hovered, setHovered] = useState(false)

// // // // // //   const displayNum = rawNum !== null
// // // // // //     ? prefix + (animated >= 1000 ? animated.toLocaleString() : animated) + suffix
// // // // // //     : null

// // // // // //   return (
// // // // // //     <div
// // // // // //       onMouseEnter={() => setHovered(true)}
// // // // // //       onMouseLeave={() => setHovered(false)}
// // // // // //       style={{
// // // // // //         padding: "22px 24px",
// // // // // //         background: hovered ? `rgba(${index === 0 ? "225,50,90" : index === 1 ? "167,139,250" : index === 2 ? "45,212,191" : "240,192,96"},0.12)` : c.bg,
// // // // // //         border: `1px solid ${hovered ? c.accent : c.border}`,
// // // // // //         borderRadius: "16px", position: "relative", overflow: "hidden",
// // // // // //         cursor: "default",
// // // // // //         transform: visible ? "translateY(0)" : "translateY(20px)",
// // // // // //         opacity: visible ? 1 : 0,
// // // // // //         transition: `all 0.5s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.08}s`,
// // // // // //         boxShadow: hovered ? `0 8px 32px ${c.glow}, inset 0 1px 0 rgba(255,255,255,0.06)` : "0 2px 12px rgba(0,0,0,0.2)",
// // // // // //       }}
// // // // // //     >
// // // // // //       {/* Top gradient bar */}
// // // // // //       <div style={{
// // // // // //         position: "absolute", top: 0, left: 0, right: 0, height: "2px",
// // // // // //         background: `linear-gradient(90deg, ${c.accent}, ${c.accent}44, transparent)`,
// // // // // //         transform: hovered ? "scaleX(1)" : "scaleX(0.6)",
// // // // // //         transformOrigin: "left",
// // // // // //         transition: "transform 0.4s ease",
// // // // // //       }} />

// // // // // //       {/* Background shimmer on hover */}
// // // // // //       {hovered && (
// // // // // //         <div style={{
// // // // // //           position: "absolute", inset: 0,
// // // // // //           background: `radial-gradient(ellipse at 50% 0%, ${c.glow} 0%, transparent 70%)`,
// // // // // //           pointerEvents: "none",
// // // // // //         }} />
// // // // // //       )}

// // // // // //       {/* Floating orb */}
// // // // // //       <div style={{
// // // // // //         position: "absolute", right: "-20px", top: "-20px",
// // // // // //         width: "80px", height: "80px",
// // // // // //         borderRadius: "50%",
// // // // // //         background: `radial-gradient(circle, ${c.accent}18 0%, transparent 70%)`,
// // // // // //         transform: hovered ? "scale(1.4)" : "scale(1)",
// // // // // //         transition: "transform 0.6s ease",
// // // // // //       }} />

// // // // // //       <p style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.14em", marginBottom: "12px", fontFamily: "var(--font-display)", position: "relative" }}>
// // // // // //         {c.label}
// // // // // //       </p>

// // // // // //       {rawNum !== null ? (
// // // // // //         <>
// // // // // //           <p style={{
// // // // // //             fontFamily: "var(--font-display)", fontSize: "32px", fontWeight: 800,
// // // // // //             color: c.accent, letterSpacing: "-0.03em", lineHeight: 1, position: "relative",
// // // // // //             textShadow: hovered ? `0 0 24px ${c.glow}` : "none",
// // // // // //             transition: "text-shadow 0.3s",
// // // // // //           }}>
// // // // // //             {displayNum}
// // // // // //           </p>
// // // // // //           {rest && <p style={{ fontSize: "12px", color: "var(--text-secondary)", marginTop: "8px", lineHeight: 1.5, position: "relative" }}>{rest}</p>}
// // // // // //         </>
// // // // // //       ) : (
// // // // // //         <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.65, fontWeight: 300, position: "relative" }}>{clean}</p>
// // // // // //       )}

// // // // // //       {/* Trend arrow */}
// // // // // //       <div style={{
// // // // // //         position: "absolute", bottom: "16px", right: "18px",
// // // // // //         opacity: hovered ? 1 : 0,
// // // // // //         transform: hovered ? "translateY(0)" : "translateY(4px)",
// // // // // //         transition: "all 0.3s ease",
// // // // // //       }}>
// // // // // //         <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
// // // // // //           <path d="M3 13L13 3M13 3H7M13 3V9" stroke={c.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // // // //         </svg>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default function DashboardGrid({ result }: DashboardGridProps) {
// // // // // //   const { primary_chart, additional_charts, insights } = result
// // // // // //   const [visible, setVisible] = useState(false)
// // // // // //   const insightLines = insights ? insights.split(/\n+/).filter((l: string) => l.trim()) : []
// // // // // //   const pieCharts = additional_charts?.filter((c: any) => c.chart === "pie" || c.chart === "donut") || []
// // // // // //   const otherCharts = additional_charts?.filter((c: any) => c.chart !== "pie" && c.chart !== "donut") || []

// // // // // //   useEffect(() => {
// // // // // //     const t = setTimeout(() => setVisible(true), 50)
// // // // // //     return () => clearTimeout(t)
// // // // // //   }, [])

// // // // // //   return (
// // // // // //     <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

// // // // // //       {/* KPI Cards */}
// // // // // //       {insightLines.length > 0 && (
// // // // // //         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: "14px" }}>
// // // // // //           {insightLines.slice(0, 4).map((line: string, i: number) => (
// // // // // //             <KpiCard key={i} line={line} index={i} visible={visible} />
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Primary chart */}
// // // // // //       <ChartCard chart={primary_chart} size="large" index={0} visible={visible} />

// // // // // //       {/* Pie charts row */}
// // // // // //       {pieCharts.length > 0 && (
// // // // // //         <div style={{
// // // // // //           display: "grid",
// // // // // //           gridTemplateColumns: `repeat(${Math.min(pieCharts.length, 3)}, 1fr)`,
// // // // // //           gap: "16px"
// // // // // //         }}>
// // // // // //           {pieCharts.map((chart: any, i: number) => (
// // // // // //             <ChartCard key={i} chart={chart} size="pie" index={i + 1} visible={visible} />
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Other charts */}
// // // // // //       {otherCharts.length > 0 && (
// // // // // //         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(480px, 1fr))", gap: "16px" }}>
// // // // // //           {otherCharts.map((chart: any, i: number) => (
// // // // // //             <ChartCard key={i} chart={chart} size="small" index={pieCharts.length + i + 1} visible={visible} />
// // // // // //           ))}
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Extra insight cards */}
// // // // // //       {insightLines.length > 4 && (
// // // // // //         <div style={{
// // // // // //           background: "linear-gradient(135deg, #150d10, #110a0d)",
// // // // // //           border: "1px solid rgba(255,255,255,0.06)",
// // // // // //           borderRadius: "16px", padding: "24px 28px",
// // // // // //           opacity: visible ? 1 : 0,
// // // // // //           transform: visible ? "translateY(0)" : "translateY(16px)",
// // // // // //           transition: "all 0.5s ease 0.5s",
// // // // // //         }}>
// // // // // //           <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
// // // // // //             <div style={{ width: "3px", height: "18px", background: "linear-gradient(180deg, #e1325a, #a78bfa)", borderRadius: "2px" }} />
// // // // // //             <p style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.14em", fontFamily: "var(--font-display)" }}>ADDITIONAL INSIGHTS</p>
// // // // // //           </div>
// // // // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px" }}>
// // // // // //             {insightLines.slice(4).map((line: string, i: number) => (
// // // // // //               <InsightRow key={i} text={line.replace(/^[-•·]\s*/, "")} delay={i * 0.06} />
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // function InsightRow({ text, delay }: { text: string; delay: number }) {
// // // // // //   const [hovered, setHovered] = useState(false)
// // // // // //   return (
// // // // // //     <div
// // // // // //       onMouseEnter={() => setHovered(true)}
// // // // // //       onMouseLeave={() => setHovered(false)}
// // // // // //       style={{
// // // // // //         padding: "12px 16px",
// // // // // //         background: hovered ? "rgba(225,50,90,0.06)" : "rgba(255,255,255,0.02)",
// // // // // //         border: `1px solid ${hovered ? "rgba(225,50,90,0.2)" : "rgba(255,255,255,0.05)"}`,
// // // // // //         borderRadius: "10px",
// // // // // //         display: "flex", alignItems: "flex-start", gap: "10px",
// // // // // //         transition: "all 0.2s ease",
// // // // // //         cursor: "default",
// // // // // //       }}
// // // // // //     >
// // // // // //       <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#e1325a", marginTop: "5px", flexShrink: 0, boxShadow: hovered ? "0 0 8px #e1325a" : "none", transition: "box-shadow 0.2s" }} />
// // // // // //       <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 300 }}>{text}</p>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // const CHART_TYPE_ICONS: Record<string, string> = {
// // // // // //   bar: "▊", line: "∿", area: "◬", pie: "◔", donut: "◯", table: "⊞",
// // // // // // }
// // // // // // const ACCENT_CYCLE = ["#e1325a", "#a78bfa", "#2dd4bf", "#f0c060", "#fb923c"]

// // // // // // function ChartCard({ chart, size, index, visible }: { chart: any; size: "large" | "small" | "pie"; index: number; visible: boolean }) {
// // // // // //   const [sqlOpen, setSqlOpen] = useState(false)
// // // // // //   const [hovered, setHovered] = useState(false)
// // // // // //   const accent = ACCENT_CYCLE[index % ACCENT_CYCLE.length]
// // // // // //   if (!chart) return null

// // // // // //   const delay = index * 0.09

// // // // // //   return (
// // // // // //     <div
// // // // // //       onMouseEnter={() => setHovered(true)}
// // // // // //       onMouseLeave={() => setHovered(false)}
// // // // // //       style={{
// // // // // //         background: "linear-gradient(145deg, #180e13, #100a0e)",
// // // // // //         border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.06)"}`,
// // // // // //         borderRadius: "18px", overflow: "hidden",
// // // // // //         boxShadow: hovered
// // // // // //           ? `0 16px 56px rgba(0,0,0,0.45), 0 0 0 1px ${accent}22`
// // // // // //           : "0 6px 28px rgba(0,0,0,0.3)",
// // // // // //         transform: visible
// // // // // //           ? hovered ? "translateY(-3px)" : "translateY(0)"
// // // // // //           : "translateY(24px)",
// // // // // //         opacity: visible ? 1 : 0,
// // // // // //         transition: `transform 0.55s cubic-bezier(0.34,1.56,0.64,1) ${delay}s, opacity 0.4s ease ${delay}s, border-color 0.25s, box-shadow 0.3s`,
// // // // // //       }}
// // // // // //     >
// // // // // //       {/* Animated top accent bar */}
// // // // // //       <div style={{
// // // // // //         height: "2px",
// // // // // //         background: `linear-gradient(90deg, ${accent}, ${accent}88, transparent)`,
// // // // // //         transform: hovered ? "scaleX(1)" : "scaleX(0.5)",
// // // // // //         transformOrigin: "left",
// // // // // //         transition: "transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",
// // // // // //       }} />

// // // // // //       {/* Ambient corner glow */}
// // // // // //       <div style={{
// // // // // //         position: "absolute", top: 0, right: 0,
// // // // // //         width: "160px", height: "160px",
// // // // // //         background: `radial-gradient(circle at top right, ${accent}12 0%, transparent 65%)`,
// // // // // //         pointerEvents: "none",
// // // // // //         opacity: hovered ? 1 : 0,
// // // // // //         transition: "opacity 0.4s ease",
// // // // // //       }} />

// // // // // //       {/* Header */}
// // // // // //       <div style={{ padding: "20px 24px 14px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", position: "relative" }}>
// // // // // //         <div>
// // // // // //           <h3 style={{
// // // // // //             fontFamily: "var(--font-display)",
// // // // // //             fontSize: size === "large" ? "17px" : "14px",
// // // // // //             fontWeight: 700, color: "#fdf0f3",
// // // // // //             letterSpacing: "-0.01em", marginBottom: "6px",
// // // // // //             transition: "color 0.2s",
// // // // // //           }}>
// // // // // //             {chart.title}
// // // // // //           </h3>
// // // // // //           <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// // // // // //             <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.1em" }}>{chart.chart?.toUpperCase()}</span>
// // // // // //             <div style={{ width: "3px", height: "3px", borderRadius: "50%", background: "var(--text-muted)" }} />
// // // // // //             <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.08em" }}>{chart.data?.length || 0} RECORDS</span>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div style={{ display: "flex", gap: "8px", alignItems: "center", flexShrink: 0 }}>
// // // // // //           {/* Chart type badge */}
// // // // // //           <div style={{
// // // // // //             padding: "4px 10px",
// // // // // //             background: hovered ? `${accent}22` : "rgba(255,255,255,0.04)",
// // // // // //             border: `1px solid ${hovered ? accent + "55" : "rgba(255,255,255,0.08)"}`,
// // // // // //             borderRadius: "8px",
// // // // // //             transition: "all 0.3s ease",
// // // // // //           }}>
// // // // // //             <span style={{ fontSize: "10px", color: hovered ? accent : "var(--text-muted)", letterSpacing: "0.08em", transition: "color 0.3s" }}>
// // // // // //               {CHART_TYPE_ICONS[chart.chart] || "◈"} {chart.chart?.toUpperCase()}
// // // // // //             </span>
// // // // // //           </div>

// // // // // //           {chart.sql && (
// // // // // //             <button
// // // // // //               onClick={() => setSqlOpen(v => !v)}
// // // // // //               style={{
// // // // // //                 padding: "4px 10px",
// // // // // //                 background: sqlOpen ? "rgba(167,139,250,0.15)" : "transparent",
// // // // // //                 border: `1px solid ${sqlOpen ? "rgba(167,139,250,0.4)" : "rgba(255,255,255,0.08)"}`,
// // // // // //                 borderRadius: "8px", fontSize: "10px",
// // // // // //                 color: sqlOpen ? "#a78bfa" : "var(--text-muted)",
// // // // // //                 cursor: "pointer", fontFamily: "var(--font-body)",
// // // // // //                 letterSpacing: "0.06em", transition: "all 0.2s",
// // // // // //               }}
// // // // // //               onMouseOver={e => { if (!sqlOpen) { e.currentTarget.style.borderColor = "rgba(167,139,250,0.3)"; e.currentTarget.style.color = "#a78bfa" }}}
// // // // // //               onMouseOut={e => { if (!sqlOpen) { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "var(--text-muted)" }}}
// // // // // //             >
// // // // // //               {sqlOpen ? "▲ SQL" : "▼ SQL"}
// // // // // //             </button>
// // // // // //           )}
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* SQL panel */}
// // // // // //       <div style={{
// // // // // //         maxHeight: sqlOpen ? "200px" : "0px",
// // // // // //         overflow: "hidden",
// // // // // //         transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
// // // // // //       }}>
// // // // // //         <div style={{ padding: "14px 24px 16px", background: "rgba(0,0,0,0.5)", borderTop: "1px solid rgba(167,139,250,0.1)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
// // // // // //           <pre style={{ fontSize: "11px", color: "#a78bfa", fontFamily: "'Fira Code','Consolas',monospace", lineHeight: 1.75, overflowX: "auto", margin: 0, opacity: 0.85 }}>
// // // // // //             {chart.sql}
// // // // // //           </pre>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Divider */}
// // // // // //       <div style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${accent}22, transparent)`, margin: "0 24px" }} />

// // // // // //       {/* Chart */}
// // // // // //       <div style={{ padding: size === "pie" ? "12px 18px 22px" : "12px 24px 24px" }}>
// // // // // //         <ChartRenderer type={chart.chart} data={chart.data} columns={chart.columns} size={size} accent={accent} />
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // "use client"

// // // // // import { useState, useEffect, useRef } from "react"
// // // // // import ChartRenderer from "./ChartRenderer"

// // // // // interface DashboardGridProps {
// // // // //   result: {
// // // // //     primary_chart: any
// // // // //     additional_charts: any[]
// // // // //     insights: string
// // // // //   }
// // // // // }

// // // // // // ── Animated counter ──────────────────────────────────────────────────
// // // // // function useCounter(target: number, duration = 1600) {
// // // // //   const [val, setVal] = useState(0)
// // // // //   useEffect(() => {
// // // // //     if (!target) return
// // // // //     let start = 0
// // // // //     const steps = 60
// // // // //     const inc = target / steps
// // // // //     let frame = 0
// // // // //     const timer = setInterval(() => {
// // // // //       frame++
// // // // //       start = Math.min(start + inc, target)
// // // // //       setVal(Math.floor(start))
// // // // //       if (frame >= steps) clearInterval(timer)
// // // // //     }, duration / steps)
// // // // //     return () => clearInterval(timer)
// // // // //   }, [target, duration])
// // // // //   return val
// // // // // }

// // // // // // ── Sparkline mini chart ──────────────────────────────────────────────
// // // // // function Sparkline({ data, color }: { data: number[]; color: string }) {
// // // // //   if (!data || data.length < 2) return null
// // // // //   const w = 120, h = 40
// // // // //   const min = Math.min(...data), max = Math.max(...data)
// // // // //   const range = max - min || 1
// // // // //   const pts = data.map((v, i) => {
// // // // //     const x = (i / (data.length - 1)) * w
// // // // //     const y = h - ((v - min) / range) * (h - 6) - 3
// // // // //     return `${x},${y}`
// // // // //   }).join(" ")
// // // // //   const areaPath = `M0,${h} L${data.map((v, i) => {
// // // // //     const x = (i / (data.length - 1)) * w
// // // // //     const y = h - ((v - min) / range) * (h - 6) - 3
// // // // //     return `${x},${y}`
// // // // //   }).join(" L")} L${w},${h} Z`

// // // // //   return (
// // // // //     <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }}>
// // // // //       <defs>
// // // // //         <linearGradient id={`spark-${color.replace("#","")}`} x1="0" y1="0" x2="0" y2="1">
// // // // //           <stop offset="0%" stopColor={color} stopOpacity="0.3"/>
// // // // //           <stop offset="100%" stopColor={color} stopOpacity="0"/>
// // // // //         </linearGradient>
// // // // //       </defs>
// // // // //       <path d={areaPath} fill={`url(#spark-${color.replace("#","")})`} />
// // // // //       <polyline points={pts} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
// // // // //       {/* Last point dot */}
// // // // //       {(() => {
// // // // //         const last = data[data.length - 1]
// // // // //         const x = w
// // // // //         const y = h - ((last - min) / range) * (h - 6) - 3
// // // // //         return <circle cx={x} cy={y} r="3" fill={color} stroke="#150d10" strokeWidth="1.5"/>
// // // // //       })()}
// // // // //     </svg>
// // // // //   )
// // // // // }

// // // // // // ── KPI Card ──────────────────────────────────────────────────────────
// // // // // const KPI_THEMES = [
// // // // //   { accent: "#e1325a", bg: "rgba(225,50,90,0.07)", border: "rgba(225,50,90,0.18)", glow: "rgba(225,50,90,0.3)" },
// // // // //   { accent: "#a78bfa", bg: "rgba(167,139,250,0.07)", border: "rgba(167,139,250,0.18)", glow: "rgba(167,139,250,0.3)" },
// // // // //   { accent: "#2dd4bf", bg: "rgba(45,212,191,0.07)", border: "rgba(45,212,191,0.18)", glow: "rgba(45,212,191,0.3)" },
// // // // //   { accent: "#f0c060", bg: "rgba(240,192,96,0.07)", border: "rgba(240,192,96,0.18)", glow: "rgba(240,192,96,0.3)" },
// // // // //   { accent: "#fb923c", bg: "rgba(251,146,60,0.07)", border: "rgba(251,146,60,0.18)", glow: "rgba(251,146,60,0.3)" },
// // // // // ]

// // // // // function extractNumber(text: string): { prefix: string; num: number; suffix: string; label: string } | null {
// // // // //   const m = text.match(/([\$£€₹]?)\s*([\d,]+(?:\.\d+)?)\s*([%kKmMbBT]?)/)
// // // // //   if (!m) return null
// // // // //   const raw = parseFloat(m[2].replace(/,/g, ""))
// // // // //   return { prefix: m[1] || "", num: raw, suffix: m[3] || "", label: text.replace(m[0], "").replace(/^[:\s\-–]+/, "").trim() }
// // // // // }

// // // // // function KpiCard({ line, index, visible, sparkData }: { line: string; index: number; visible: boolean; sparkData?: number[] }) {
// // // // //   const [hovered, setHovered] = useState(false)
// // // // //   const theme = KPI_THEMES[index % KPI_THEMES.length]
// // // // //   const clean = line.replace(/^[-•·\d.]\s*/, "")
// // // // //   const extracted = extractNumber(clean)
// // // // //   const count = useCounter(extracted?.num ?? 0, 1400)

// // // // //   const displayNum = extracted
// // // // //     ? extracted.prefix + (count >= 1000 ? count.toLocaleString() : count) + extracted.suffix
// // // // //     : null

// // // // //   // Fake sparkline from number variation
// // // // //   const spark = sparkData ?? Array.from({ length: 10 }, (_, i) =>
// // // // //     (extracted?.num ?? 100) * (0.6 + Math.sin(i * 0.8 + index) * 0.25 + Math.random() * 0.15)
// // // // //   )

// // // // //   return (
// // // // //     <div
// // // // //       onMouseEnter={() => setHovered(true)}
// // // // //       onMouseLeave={() => setHovered(false)}
// // // // //       style={{
// // // // //         padding: "22px 24px 18px",
// // // // //         background: hovered
// // // // //           ? `linear-gradient(135deg, ${theme.bg.replace("0.07", "0.12")}, rgba(255,255,255,0.02))`
// // // // //           : `linear-gradient(135deg, ${theme.bg}, rgba(255,255,255,0.01))`,
// // // // //         border: `1px solid ${hovered ? theme.accent + "55" : theme.border}`,
// // // // //         borderRadius: "16px", position: "relative", overflow: "hidden",
// // // // //         cursor: "default",
// // // // //         transform: visible
// // // // //           ? hovered ? "translateY(-4px) scale(1.01)" : "translateY(0) scale(1)"
// // // // //           : "translateY(28px) scale(0.97)",
// // // // //         opacity: visible ? 1 : 0,
// // // // //         transition: `all 0.5s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.07}s`,
// // // // //         boxShadow: hovered
// // // // //           ? `0 12px 40px ${theme.glow.replace("0.3","0.2")}, inset 0 1px 0 rgba(255,255,255,0.07)`
// // // // //           : "0 2px 16px rgba(0,0,0,0.25)",
// // // // //       }}
// // // // //     >
// // // // //       {/* Animated top bar */}
// // // // //       <div style={{
// // // // //         position: "absolute", top: 0, left: 0, right: 0, height: "2px",
// // // // //         background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent}66, transparent)`,
// // // // //         transformOrigin: "left",
// // // // //         transform: `scaleX(${hovered ? 1 : 0.5})`,
// // // // //         transition: "transform 0.4s ease",
// // // // //       }} />

// // // // //       {/* Corner glow */}
// // // // //       <div style={{
// // // // //         position: "absolute", top: "-30px", right: "-30px",
// // // // //         width: "100px", height: "100px", borderRadius: "50%",
// // // // //         background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`,
// // // // //         opacity: hovered ? 1 : 0.4,
// // // // //         transition: "opacity 0.4s",
// // // // //       }} />

// // // // //       {/* Label */}
// // // // //       <p style={{
// // // // //         fontSize: "10px", color: "var(--text-muted)",
// // // // //         letterSpacing: "0.14em", marginBottom: "10px",
// // // // //         fontFamily: "var(--font-display)", position: "relative",
// // // // //       }}>
// // // // //         {extracted?.label?.toUpperCase() || clean.toUpperCase().slice(0, 20)}
// // // // //       </p>

// // // // //       {/* Value */}
// // // // //       <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "8px" }}>
// // // // //         <div style={{ position: "relative" }}>
// // // // //           {displayNum ? (
// // // // //             <p style={{
// // // // //               fontFamily: "var(--font-display)", fontSize: "30px", fontWeight: 800,
// // // // //               color: "#fdf0f3", letterSpacing: "-0.03em", lineHeight: 1,
// // // // //               textShadow: hovered ? `0 0 30px ${theme.glow}` : "none",
// // // // //               transition: "text-shadow 0.3s",
// // // // //             }}>
// // // // //               {displayNum}
// // // // //             </p>
// // // // //           ) : (
// // // // //             <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.55, fontWeight: 300, maxWidth: "160px" }}>{clean}</p>
// // // // //           )}
// // // // //         </div>
// // // // //         {/* Sparkline */}
// // // // //         <div style={{ opacity: hovered ? 1 : 0.6, transition: "opacity 0.3s", flexShrink: 0 }}>
// // // // //           <Sparkline data={spark} color={theme.accent} />
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Trend badge */}
// // // // //       {displayNum && (
// // // // //         <div style={{
// // // // //           display: "inline-flex", alignItems: "center", gap: "4px",
// // // // //           marginTop: "10px", padding: "3px 8px",
// // // // //           background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)",
// // // // //           borderRadius: "100px",
// // // // //           opacity: hovered ? 1 : 0,
// // // // //           transform: hovered ? "translateY(0)" : "translateY(4px)",
// // // // //           transition: "all 0.3s ease",
// // // // //         }}>
// // // // //           <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
// // // // //             <path d="M2 7L5 3l3 4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // // //           </svg>
// // // // //           <span style={{ fontSize: "10px", color: "#22c55e", letterSpacing: "0.05em" }}>TRENDING</span>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // // ── Chart Card ────────────────────────────────────────────────────────
// // // // // const ACCENT_CYCLE = ["#e1325a", "#a78bfa", "#2dd4bf", "#f0c060", "#fb923c", "#34d399"]

// // // // // function ChartCard({
// // // // //   chart, size, index, visible,
// // // // // }: {
// // // // //   chart: any; size: "large" | "small" | "pie" | "half"; index: number; visible: boolean
// // // // // }) {
// // // // //   const [sqlOpen, setSqlOpen] = useState(false)
// // // // //   const [hovered, setHovered] = useState(false)
// // // // //   const accent = ACCENT_CYCLE[index % ACCENT_CYCLE.length]
// // // // //   if (!chart) return null

// // // // //   return (
// // // // //     <div
// // // // //       onMouseEnter={() => setHovered(true)}
// // // // //       onMouseLeave={() => setHovered(false)}
// // // // //       style={{
// // // // //         background: "linear-gradient(145deg, #180e13 0%, #100a0e 100%)",
// // // // //         border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.07)"}`,
// // // // //         borderRadius: "18px", overflow: "hidden",
// // // // //         opacity: visible ? 1 : 0,
// // // // //         transform: visible
// // // // //           ? hovered ? "translateY(-3px)" : "translateY(0)"
// // // // //           : "translateY(28px)",
// // // // //         transition: `opacity 0.5s ease ${0.1 + index * 0.08}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.1 + index * 0.08}s, border-color 0.25s, box-shadow 0.3s`,
// // // // //         boxShadow: hovered
// // // // //           ? `0 16px 56px rgba(0,0,0,0.5), 0 0 0 1px ${accent}22`
// // // // //           : "0 4px 24px rgba(0,0,0,0.3)",
// // // // //         position: "relative",
// // // // //       }}
// // // // //     >
// // // // //       {/* Top accent line */}
// // // // //       <div style={{
// // // // //         height: "2px",
// // // // //         background: `linear-gradient(90deg, ${accent}, ${accent}55, transparent)`,
// // // // //         transformOrigin: "left",
// // // // //         transform: `scaleX(${hovered ? 1 : 0.4})`,
// // // // //         transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",
// // // // //       }} />

// // // // //       {/* Ambient corner glow */}
// // // // //       <div style={{
// // // // //         position: "absolute", top: 0, right: 0, width: "200px", height: "200px", pointerEvents: "none",
// // // // //         background: `radial-gradient(circle at top right, ${accent}10, transparent 65%)`,
// // // // //         opacity: hovered ? 1 : 0,
// // // // //         transition: "opacity 0.4s",
// // // // //       }} />

// // // // //       {/* Card header */}
// // // // //       <div style={{ padding: "18px 22px 12px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", position: "relative" }}>
// // // // //         <div>
// // // // //           <h3 style={{
// // // // //             fontFamily: "var(--font-display)", fontWeight: 700, color: "#fdf0f3",
// // // // //             fontSize: size === "large" ? "17px" : "14px",
// // // // //             letterSpacing: "-0.01em", marginBottom: "5px",
// // // // //           }}>{chart.title}</h3>
// // // // //           <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
// // // // //             <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: accent, boxShadow: `0 0 6px ${accent}` }} />
// // // // //             <span style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.09em" }}>
// // // // //               {chart.data?.length || 0} RECORDS
// // // // //             </span>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div style={{ display: "flex", gap: "7px", alignItems: "center", flexShrink: 0 }}>
// // // // //           <div style={{
// // // // //             padding: "3px 10px",
// // // // //             background: hovered ? `${accent}20` : "rgba(255,255,255,0.04)",
// // // // //             border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.08)"}`,
// // // // //             borderRadius: "8px", transition: "all 0.3s",
// // // // //           }}>
// // // // //             <span style={{ fontSize: "10px", color: hovered ? accent : "var(--text-muted)", letterSpacing: "0.08em", transition: "color 0.3s" }}>
// // // // //               {(({ bar: "▊ BAR", line: "∿ LINE", area: "◬ AREA", pie: "◔ PIE", donut: "◯ DONUT" } as Record<string, string>)[chart.chart] ?? "⊞ TABLE")}
// // // // //             </span>
// // // // //           </div>
// // // // //           {chart.sql && (
// // // // //             <button
// // // // //               onClick={() => setSqlOpen(v => !v)}
// // // // //               style={{
// // // // //                 padding: "3px 10px",
// // // // //                 background: sqlOpen ? "rgba(167,139,250,0.15)" : "transparent",
// // // // //                 border: `1px solid ${sqlOpen ? "rgba(167,139,250,0.4)" : "rgba(255,255,255,0.08)"}`,
// // // // //                 borderRadius: "8px", fontSize: "10px",
// // // // //                 color: sqlOpen ? "#a78bfa" : "var(--text-muted)",
// // // // //                 cursor: "pointer", fontFamily: "var(--font-body)", letterSpacing: "0.06em", transition: "all 0.2s",
// // // // //               }}
// // // // //               onMouseOver={e => { if (!sqlOpen) { (e.target as HTMLElement).style.color = "#a78bfa"; (e.target as HTMLElement).style.borderColor = "rgba(167,139,250,0.3)" } }}
// // // // //               onMouseOut={e => { if (!sqlOpen) { (e.target as HTMLElement).style.color = "var(--text-muted)"; (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)" } }}
// // // // //             >
// // // // //               {sqlOpen ? "▲ SQL" : "▼ SQL"}
// // // // //             </button>
// // // // //           )}
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* SQL slide panel */}
// // // // //       <div style={{ maxHeight: sqlOpen ? "180px" : "0", overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)" }}>
// // // // //         <div style={{ padding: "12px 22px 14px", background: "rgba(0,0,0,0.5)", borderTop: "1px solid rgba(167,139,250,0.1)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
// // // // //           <pre style={{ fontSize: "11px", color: "#a78bfa", fontFamily: "'Fira Code','Consolas',monospace", lineHeight: 1.75, overflowX: "auto", margin: 0, opacity: 0.85 }}>
// // // // //             {chart.sql}
// // // // //           </pre>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Divider */}
// // // // //       <div style={{ height: "1px", margin: "0 22px", background: `linear-gradient(90deg, transparent, ${accent}22, transparent)` }} />

// // // // //       {/* Chart */}
// // // // //       <div style={{ padding: size === "pie" ? "10px 16px 20px" : "10px 22px 22px" }}>
// // // // //         <ChartRenderer type={chart.chart} data={chart.data} columns={chart.columns} size={size === "half" ? "small" : size} accent={accent} />
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // // ── Dashboard Grid ────────────────────────────────────────────────────
// // // // // export default function DashboardGrid({ result }: DashboardGridProps) {
// // // // //   const { primary_chart, additional_charts, insights } = result
// // // // //   const [visible, setVisible] = useState(false)
// // // // //   useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t) }, [])

// // // // //   const insightLines = insights ? insights.split(/\n+/).filter((l: string) => l.trim()) : []
// // // // //   const pieCharts = additional_charts?.filter((c: any) => c.chart === "pie" || c.chart === "donut") || []
// // // // //   const barLineCharts = additional_charts?.filter((c: any) => c.chart === "bar" || c.chart === "line" || c.chart === "area") || []
// // // // //   const tableCharts = additional_charts?.filter((c: any) => !["pie","donut","bar","line","area"].includes(c.chart)) || []

// // // // //   return (
// // // // //     <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

// // // // //       {/* ── KPI Row ── */}
// // // // //       {insightLines.length > 0 && (
// // // // //         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
// // // // //           {insightLines.slice(0, 5).map((line: string, i: number) => (
// // // // //             <KpiCard key={i} line={line} index={i} visible={visible} />
// // // // //           ))}
// // // // //         </div>
// // // // //       )}

// // // // //       {/* ── Primary chart full width ── */}
// // // // //       <ChartCard chart={primary_chart} size="large" index={0} visible={visible} />

// // // // //       {/* ── Pie + Bar side by side (Power BI style) ── */}
// // // // //       {(pieCharts.length > 0 || barLineCharts.length > 0) && (
// // // // //         <div style={{
// // // // //           display: "grid",
// // // // //           gridTemplateColumns: pieCharts.length > 0 && barLineCharts.length > 0
// // // // //             ? "1fr 1fr"
// // // // //             : "1fr",
// // // // //           gap: "16px",
// // // // //         }}>
// // // // //           {barLineCharts.slice(0, 1).map((chart: any, i: number) => (
// // // // //             <ChartCard key={i} chart={chart} size="half" index={i + 1} visible={visible} />
// // // // //           ))}
// // // // //           {pieCharts.slice(0, 1).map((chart: any, i: number) => (
// // // // //             <ChartCard key={i} chart={chart} size="pie" index={barLineCharts.length + i + 1} visible={visible} />
// // // // //           ))}
// // // // //         </div>
// // // // //       )}

// // // // //       {/* ── Extra bar/line charts ── */}
// // // // //       {barLineCharts.length > 1 && (
// // // // //         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))", gap: "16px" }}>
// // // // //           {barLineCharts.slice(1).map((chart: any, i: number) => (
// // // // //             <ChartCard key={i} chart={chart} size="small" index={barLineCharts.length + pieCharts.length + i + 1} visible={visible} />
// // // // //           ))}
// // // // //         </div>
// // // // //       )}

// // // // //       {/* ── Extra pie charts ── */}
// // // // //       {pieCharts.length > 1 && (
// // // // //         <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(pieCharts.length - 1, 3)}, 1fr)`, gap: "16px" }}>
// // // // //           {pieCharts.slice(1).map((chart: any, i: number) => (
// // // // //             <ChartCard key={i} chart={chart} size="pie" index={barLineCharts.length + i + 2} visible={visible} />
// // // // //           ))}
// // // // //         </div>
// // // // //       )}

// // // // //       {/* ── Table charts ── */}
// // // // //       {tableCharts.map((chart: any, i: number) => (
// // // // //         <ChartCard key={i} chart={chart} size="large" index={pieCharts.length + barLineCharts.length + i + 1} visible={visible} />
// // // // //       ))}

// // // // //       {/* ── Extra insight lines ── */}
// // // // //       {insightLines.length > 5 && (
// // // // //         <div style={{
// // // // //           background: "linear-gradient(145deg, #180e13, #100a0e)",
// // // // //           border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "22px 26px",
// // // // //           opacity: visible ? 1 : 0,
// // // // //           transform: visible ? "translateY(0)" : "translateY(16px)",
// // // // //           transition: "all 0.5s ease 0.6s",
// // // // //         }}>
// // // // //           <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
// // // // //             <div style={{ width: "3px", height: "16px", background: "linear-gradient(180deg, #e1325a, #a78bfa)", borderRadius: "2px" }} />
// // // // //             <p style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.14em", fontFamily: "var(--font-display)" }}>MORE INSIGHTS</p>
// // // // //           </div>
// // // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
// // // // //             {insightLines.slice(5).map((line: string, i: number) => (
// // // // //               <InsightRow key={i} text={line.replace(/^[-•·]\s*/, "")} />
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // function InsightRow({ text }: { text: string }) {
// // // // //   const [h, setH] = useState(false)
// // // // //   return (
// // // // //     <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{
// // // // //       padding: "11px 15px", display: "flex", alignItems: "flex-start", gap: "10px",
// // // // //       background: h ? "rgba(225,50,90,0.06)" : "rgba(255,255,255,0.02)",
// // // // //       border: `1px solid ${h ? "rgba(225,50,90,0.2)" : "rgba(255,255,255,0.05)"}`,
// // // // //       borderRadius: "10px", transition: "all 0.2s", cursor: "default",
// // // // //     }}>
// // // // //       <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#e1325a", marginTop: "5px", flexShrink: 0, boxShadow: h ? "0 0 8px #e1325a" : "none", transition: "box-shadow 0.2s" }} />
// // // // //       <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 300 }}>{text}</p>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // "use client"

// // // // import { useState, useEffect, useRef } from "react"
// // // // import ChartRenderer from "./ChartRenderer"

// // // // interface DashboardGridProps {
// // // //   result: {
// // // //     primary_chart: any
// // // //     additional_charts: any[]
// // // //     insights: string
// // // //   }
// // // // }

// // // // // ── Animated counter ──────────────────────────────────────────────────
// // // // function useCounter(target: number, duration = 1400) {
// // // //   const [val, setVal] = useState(0)
// // // //   useEffect(() => {
// // // //     if (!target) return
// // // //     let frame = 0
// // // //     const steps = 55
// // // //     const timer = setInterval(() => {
// // // //       frame++
// // // //       const progress = frame / steps
// // // //       const eased = 1 - Math.pow(1 - progress, 3)
// // // //       setVal(Math.floor(target * eased))
// // // //       if (frame >= steps) { setVal(target); clearInterval(timer) }
// // // //     }, duration / steps)
// // // //     return () => clearInterval(timer)
// // // //   }, [target, duration])
// // // //   return val
// // // // }

// // // // // ── Sparkline ─────────────────────────────────────────────────────────
// // // // function Sparkline({ data, color }: { data: number[]; color: string }) {
// // // //   if (!data || data.length < 2) return null
// // // //   const w = 100, h = 36
// // // //   const min = Math.min(...data), max = Math.max(...data)
// // // //   const range = max - min || 1
// // // //   const pts = data.map((v, i) => {
// // // //     const x = (i / (data.length - 1)) * w
// // // //     const y = h - ((v - min) / range) * (h - 4) - 2
// // // //     return `${x.toFixed(1)},${y.toFixed(1)}`
// // // //   }).join(" ")
// // // //   const last = data[data.length - 1]
// // // //   const lastX = w
// // // //   const lastY = h - ((last - min) / range) * (h - 4) - 2
// // // //   const areaD = `M0,${h} L${data.map((v, i) => {
// // // //     const x = (i / (data.length - 1)) * w
// // // //     const y = h - ((v - min) / range) * (h - 4) - 2
// // // //     return `${x.toFixed(1)},${y.toFixed(1)}`
// // // //   }).join(" L")} L${w},${h} Z`

// // // //   return (
// // // //     <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }}>
// // // //       <defs>
// // // //         <linearGradient id={`sp-${color.replace("#","")}`} x1="0" y1="0" x2="0" y2="1">
// // // //           <stop offset="0%" stopColor={color} stopOpacity="0.35"/>
// // // //           <stop offset="100%" stopColor={color} stopOpacity="0"/>
// // // //         </linearGradient>
// // // //       </defs>
// // // //       <path d={areaD} fill={`url(#sp-${color.replace("#","")})`} />
// // // //       <polyline points={pts} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
// // // //       <circle cx={lastX} cy={lastY} r="3" fill={color} stroke="#100a0e" strokeWidth="1.5"/>
// // // //     </svg>
// // // //   )
// // // // }

// // // // // ── Export utilities ──────────────────────────────────────────────────
// // // // function exportAsPNG(elementId: string, filename: string) {
// // // //   import("html2canvas").then(({ default: html2canvas }) => {
// // // //     const el = document.getElementById(elementId)
// // // //     if (!el) return
// // // //     html2canvas(el, {
// // // //       backgroundColor: "#0a0608",
// // // //       scale: 2,
// // // //       useCORS: true,
// // // //     }).then(canvas => {
// // // //       const link = document.createElement("a")
// // // //       link.download = `${filename}.png`
// // // //       link.href = canvas.toDataURL("image/png")
// // // //       link.click()
// // // //     })
// // // //   }).catch(() => {
// // // //     // fallback: print
// // // //     window.print()
// // // //   })
// // // // }

// // // // function exportAsCSV(data: any[], filename: string) {
// // // //   if (!data || !data.length) return
// // // //   const cols = Object.keys(data[0])
// // // //   const rows = [cols.join(","), ...data.map(row => cols.map(c => `"${row[c] ?? ""}"`).join(","))]
// // // //   const blob = new Blob([rows.join("\n")], { type: "text/csv" })
// // // //   const link = document.createElement("a")
// // // //   link.download = `${filename}.csv`
// // // //   link.href = URL.createObjectURL(blob)
// // // //   link.click()
// // // // }

// // // // function exportAsJSON(result: any, filename: string) {
// // // //   const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" })
// // // //   const link = document.createElement("a")
// // // //   link.download = `${filename}.json`
// // // //   link.href = URL.createObjectURL(blob)
// // // //   link.click()
// // // // }

// // // // // ── Export Button Bar ─────────────────────────────────────────────────
// // // // function ExportBar({ result, dashboardId }: { result: any; dashboardId: string }) {
// // // //   const [open, setOpen] = useState(false)
// // // //   const allData = [
// // // //     ...(result.primary_chart?.data || []),
// // // //     ...(result.additional_charts?.flatMap((c: any) => c.data || []) || []),
// // // //   ]
// // // //   const title = result.primary_chart?.title || "dashboard"

// // // //   return (
// // // //     <div style={{ position: "relative" }}>
// // // //       <button
// // // //         onClick={() => setOpen(v => !v)}
// // // //         style={{
// // // //           display: "flex", alignItems: "center", gap: "7px",
// // // //           padding: "9px 18px",
// // // //           background: "linear-gradient(135deg, rgba(225,50,90,0.15), rgba(167,139,250,0.1))",
// // // //           border: "1px solid rgba(225,50,90,0.3)",
// // // //           borderRadius: "10px", color: "#fdf0f3",
// // // //           fontSize: "13px", fontWeight: 600,
// // // //           cursor: "pointer", fontFamily: "var(--font-display)",
// // // //           letterSpacing: "0.04em",
// // // //           transition: "all 0.2s",
// // // //           boxShadow: "0 4px 16px rgba(225,50,90,0.15)",
// // // //         }}
// // // //         onMouseOver={e => { e.currentTarget.style.background = "linear-gradient(135deg, rgba(225,50,90,0.25), rgba(167,139,250,0.18))"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(225,50,90,0.25)" }}
// // // //         onMouseOut={e => { e.currentTarget.style.background = "linear-gradient(135deg, rgba(225,50,90,0.15), rgba(167,139,250,0.1))"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(225,50,90,0.15)" }}
// // // //       >
// // // //         <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// // // //           <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
// // // //         </svg>
// // // //         Export
// // // //         <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>
// // // //           <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
// // // //         </svg>
// // // //       </button>

// // // //       {open && (
// // // //         <div style={{
// // // //           position: "absolute", top: "calc(100% + 8px)", right: 0,
// // // //           background: "linear-gradient(145deg, #1e0e16, #160c12)",
// // // //           border: "1px solid rgba(225,50,90,0.2)",
// // // //           borderRadius: "12px", overflow: "hidden",
// // // //           boxShadow: "0 20px 48px rgba(0,0,0,0.6)",
// // // //           zIndex: 50, minWidth: "200px",
// // // //         }}>
// // // //           {[
// // // //             { icon: "🖼", label: "Export as PNG", sub: "High-res screenshot", action: () => { exportAsPNG(dashboardId, title); setOpen(false) } },
// // // //             { icon: "📊", label: "Export as CSV", sub: "Raw data spreadsheet", action: () => { exportAsCSV(allData, title); setOpen(false) } },
// // // //             { icon: "📋", label: "Export as JSON", sub: "Power BI compatible", action: () => { exportAsJSON(result, title); setOpen(false) } },
// // // //             { icon: "🖨", label: "Print / PDF", sub: "Browser print dialog", action: () => { setOpen(false); setTimeout(() => window.print(), 100) } },
// // // //           ].map((item, i) => (
// // // //             <button key={i} onClick={item.action} style={{
// // // //               width: "100%", display: "flex", alignItems: "center", gap: "12px",
// // // //               padding: "12px 16px",
// // // //               background: "transparent",
// // // //               border: "none",
// // // //               borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
// // // //               cursor: "pointer", textAlign: "left",
// // // //               transition: "background 0.15s",
// // // //             }}
// // // //               onMouseOver={e => (e.currentTarget.style.background = "rgba(225,50,90,0.08)")}
// // // //               onMouseOut={e => (e.currentTarget.style.background = "transparent")}
// // // //             >
// // // //               <span style={{ fontSize: "18px" }}>{item.icon}</span>
// // // //               <div>
// // // //                 <p style={{ fontSize: "13px", color: "#fdf0f3", fontWeight: 600, fontFamily: "var(--font-display)", margin: 0 }}>{item.label}</p>
// // // //                 <p style={{ fontSize: "11px", color: "var(--text-muted)", margin: 0, marginTop: "2px" }}>{item.sub}</p>
// // // //               </div>
// // // //             </button>
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   )
// // // // }

// // // // // ── KPI Themes ────────────────────────────────────────────────────────
// // // // const KPI_THEMES = [
// // // //   { accent: "#e1325a", bg: "rgba(225,50,90,0.08)", border: "rgba(225,50,90,0.2)", glow: "rgba(225,50,90,0.3)" },
// // // //   { accent: "#a78bfa", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)", glow: "rgba(167,139,250,0.3)" },
// // // //   { accent: "#2dd4bf", bg: "rgba(45,212,191,0.08)", border: "rgba(45,212,191,0.2)", glow: "rgba(45,212,191,0.3)" },
// // // //   { accent: "#f0c060", bg: "rgba(240,192,96,0.08)", border: "rgba(240,192,96,0.2)", glow: "rgba(240,192,96,0.3)" },
// // // //   { accent: "#fb923c", bg: "rgba(251,146,60,0.08)", border: "rgba(251,146,60,0.2)", glow: "rgba(251,146,60,0.3)" },
// // // // ]

// // // // function extractNum(text: string) {
// // // //   const m = text.match(/([\$£€₹]?)\s*([\d,]+(?:\.\d+)?)\s*([%kKmMbBT]?)/)
// // // //   if (!m) return null
// // // //   return {
// // // //     prefix: m[1] || "",
// // // //     num: parseFloat(m[2].replace(/,/g, "")),
// // // //     suffix: m[3] || "",
// // // //     label: text.replace(m[0], "").replace(/^[:\s\-–]+/, "").trim(),
// // // //     original: m[0].trim(),
// // // //   }
// // // // }

// // // // function KpiCard({ line, index, visible }: { line: string; index: number; visible: boolean }) {
// // // //   const [hovered, setHovered] = useState(false)
// // // //   const theme = KPI_THEMES[index % KPI_THEMES.length]
// // // //   const clean = line.replace(/^[-•·\d.]\s*/, "")
// // // //   const extracted = extractNum(clean)
// // // //   const count = useCounter(extracted?.num ?? 0, 1500)
// // // //   const spark = Array.from({ length: 12 }, (_, i) =>
// // // //     (extracted?.num ?? 100) * (0.55 + Math.sin(i * 0.9 + index * 1.3) * 0.28 + (i / 12) * 0.17)
// // // //   )

// // // //   const displayNum = extracted
// // // //     ? extracted.prefix + (count >= 1000 ? count.toLocaleString() : count) + extracted.suffix
// // // //     : null

// // // //   return (
// // // //     <div
// // // //       onMouseEnter={() => setHovered(true)}
// // // //       onMouseLeave={() => setHovered(false)}
// // // //       style={{
// // // //         padding: "24px 26px 20px",
// // // //         background: hovered
// // // //           ? `linear-gradient(145deg, ${theme.bg.replace("0.08","0.14")}, rgba(0,0,0,0.2))`
// // // //           : `linear-gradient(145deg, ${theme.bg}, rgba(0,0,0,0.15))`,
// // // //         border: `1px solid ${hovered ? theme.accent + "66" : theme.border}`,
// // // //         borderRadius: "18px", position: "relative", overflow: "hidden",
// // // //         cursor: "default",
// // // //         transform: visible ? (hovered ? "translateY(-4px) scale(1.01)" : "translateY(0)") : "translateY(24px) scale(0.97)",
// // // //         opacity: visible ? 1 : 0,
// // // //         transition: `all 0.5s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.07}s`,
// // // //         boxShadow: hovered ? `0 16px 40px ${theme.glow.replace("0.3","0.18")}, inset 0 1px 0 rgba(255,255,255,0.07)` : "0 2px 16px rgba(0,0,0,0.3)",
// // // //       }}
// // // //     >
// // // //       {/* Top bar */}
// // // //       <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent}44, transparent)`, transformOrigin: "left", transform: `scaleX(${hovered ? 1 : 0.5})`, transition: "transform 0.4s ease" }} />
// // // //       {/* Corner orb */}
// // // //       <div style={{ position: "absolute", top: "-24px", right: "-24px", width: "90px", height: "90px", borderRadius: "50%", background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`, opacity: hovered ? 1 : 0.5, transition: "opacity 0.4s", pointerEvents: "none" }} />

// // // //       {/* Label */}
// // // //       <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.16em", marginBottom: "12px", fontFamily: "var(--font-display)", fontWeight: 600, position: "relative" }}>
// // // //         {(extracted?.label || clean).toUpperCase().slice(0, 22)}
// // // //       </p>

// // // //       {/* Value + sparkline */}
// // // //       <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "10px" }}>
// // // //         <div>
// // // //           {displayNum ? (
// // // //             <p style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 800, color: "#fdf0f3", letterSpacing: "-0.04em", lineHeight: 1, textShadow: hovered ? `0 0 32px ${theme.glow}` : "none", transition: "text-shadow 0.3s" }}>
// // // //               {displayNum}
// // // //             </p>
// // // //           ) : (
// // // //             <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.55, fontWeight: 400, maxWidth: "160px" }}>{clean}</p>
// // // //           )}
// // // //         </div>
// // // //         <div style={{ opacity: hovered ? 1 : 0.65, transition: "opacity 0.3s", flexShrink: 0, paddingBottom: "4px" }}>
// // // //           <Sparkline data={spark} color={theme.accent} />
// // // //         </div>
// // // //       </div>

// // // //       {/* Trend pill */}
// // // //       {displayNum && (
// // // //         <div style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "12px", padding: "3px 8px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "100px", opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(4px)", transition: "all 0.3s" }}>
// // // //           <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 7L5 3l3 4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // // //           <span style={{ fontSize: "10px", color: "#22c55e", letterSpacing: "0.06em", fontWeight: 600 }}>TRENDING</span>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   )
// // // // }

// // // // // ── Chart Card ────────────────────────────────────────────────────────
// // // // const ACCENTS = ["#e1325a", "#a78bfa", "#2dd4bf", "#f0c060", "#fb923c", "#34d399"]

// // // // function ChartCard({ chart, colSpan = 1, rowSpan = 1, index, visible, allChartData }: {
// // // //   chart: any; colSpan?: number; rowSpan?: number; index: number; visible: boolean; allChartData?: any[]
// // // // }) {
// // // //   const [sqlOpen, setSqlOpen] = useState(false)
// // // //   const [hovered, setHovered] = useState(false)
// // // //   const accent = ACCENTS[index % ACCENTS.length]
// // // //   if (!chart) return null

// // // //   const size = colSpan >= 2 ? "large" : (chart.chart === "pie" || chart.chart === "donut") ? "pie" : "small"

// // // //   return (
// // // //     <div
// // // //       id={`chart-card-${index}`}
// // // //       onMouseEnter={() => setHovered(true)}
// // // //       onMouseLeave={() => setHovered(false)}
// // // //       style={{
// // // //         gridColumn: `span ${colSpan}`,
// // // //         gridRow: `span ${rowSpan}`,
// // // //         background: "linear-gradient(145deg, #180e13 0%, #110a0e 100%)",
// // // //         border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.07)"}`,
// // // //         borderRadius: "20px", overflow: "hidden",
// // // //         opacity: visible ? 1 : 0,
// // // //         transform: visible ? (hovered ? "translateY(-2px)" : "translateY(0)") : "translateY(24px)",
// // // //         transition: `opacity 0.5s ease ${0.1 + index * 0.07}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.1 + index * 0.07}s, border-color 0.25s, box-shadow 0.3s`,
// // // //         boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${accent}22` : "0 4px 24px rgba(0,0,0,0.3)",
// // // //         position: "relative", display: "flex", flexDirection: "column",
// // // //       }}
// // // //     >
// // // //       {/* Accent top bar */}
// // // //       <div style={{ height: "3px", background: `linear-gradient(90deg, ${accent}, ${accent}66, transparent)`, transformOrigin: "left", transform: `scaleX(${hovered ? 1 : 0.35})`, transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1)", flexShrink: 0 }} />

// // // //       {/* Corner glow */}
// // // //       <div style={{ position: "absolute", top: 0, right: 0, width: "180px", height: "180px", background: `radial-gradient(circle at top right, ${accent}10, transparent 65%)`, pointerEvents: "none", opacity: hovered ? 1 : 0, transition: "opacity 0.4s", zIndex: 0 }} />

// // // //       {/* Header */}
// // // //       <div style={{ padding: "20px 24px 12px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", position: "relative", zIndex: 1, flexShrink: 0 }}>
// // // //         <div>
// // // //           <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#fdf0f3", fontSize: colSpan >= 2 ? "20px" : "16px", letterSpacing: "-0.02em", marginBottom: "6px", lineHeight: 1.2 }}>
// // // //             {chart.title}
// // // //           </h3>
// // // //           <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// // // //             <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: accent, boxShadow: `0 0 8px ${accent}` }} />
// // // //             <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em", fontWeight: 500 }}>
// // // //               {chart.data?.length || 0} RECORDS
// // // //             </span>
// // // //           </div>
// // // //         </div>

// // // //         <div style={{ display: "flex", gap: "7px", alignItems: "center", flexShrink: 0 }}>
// // // //           <div style={{ padding: "4px 10px", background: hovered ? `${accent}22` : "rgba(255,255,255,0.04)", border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.08)"}`, borderRadius: "8px", transition: "all 0.25s" }}>
// // // //             <span style={{ fontSize: "10px", color: hovered ? accent : "var(--text-muted)", letterSpacing: "0.08em", fontWeight: 600, transition: "color 0.25s" }}>
// // // //               {({"bar":"▊ BAR","line":"∿ LINE","area":"◬ AREA","pie":"◔ PIE","donut":"◯ DONUT"} as Record<string,string>)[chart.chart] ?? "⊞ TABLE"}
// // // //             </span>
// // // //           </div>
// // // //           {chart.sql && (
// // // //             <button onClick={() => setSqlOpen(v => !v)} style={{ padding: "4px 10px", background: sqlOpen ? "rgba(167,139,250,0.15)" : "transparent", border: `1px solid ${sqlOpen ? "rgba(167,139,250,0.4)" : "rgba(255,255,255,0.08)"}`, borderRadius: "8px", fontSize: "10px", color: sqlOpen ? "#a78bfa" : "var(--text-muted)", cursor: "pointer", fontFamily: "var(--font-body)", letterSpacing: "0.06em", fontWeight: 600, transition: "all 0.2s" }}>
// // // //               {sqlOpen ? "▲ SQL" : "▼ SQL"}
// // // //             </button>
// // // //           )}
// // // //           {/* Per-chart CSV export */}
// // // //           <button onClick={() => exportAsCSV(chart.data || [], chart.title || "chart")} title="Export chart data" style={{ padding: "4px 8px", background: "transparent", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", cursor: "pointer", color: "var(--text-muted)", transition: "all 0.2s", fontSize: "12px" }}
// // // //             onMouseOver={e => { e.currentTarget.style.borderColor = `${accent}44`; e.currentTarget.style.color = accent }}
// // // //             onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "var(--text-muted)" }}
// // // //           >↓</button>
// // // //         </div>
// // // //       </div>

// // // //       {/* SQL slide */}
// // // //       <div style={{ maxHeight: sqlOpen ? "160px" : "0", overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)", flexShrink: 0, position: "relative", zIndex: 1 }}>
// // // //         <div style={{ padding: "12px 24px 14px", background: "rgba(0,0,0,0.5)", borderTop: "1px solid rgba(167,139,250,0.1)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
// // // //           <pre style={{ fontSize: "11px", color: "#a78bfa", fontFamily: "'Fira Code','Consolas',monospace", lineHeight: 1.75, overflowX: "auto", margin: 0 }}>{chart.sql}</pre>
// // // //         </div>
// // // //       </div>

// // // //       {/* Divider */}
// // // //       <div style={{ height: "1px", margin: "0 24px", background: `linear-gradient(90deg, transparent, ${accent}22, transparent)`, flexShrink: 0, position: "relative", zIndex: 1 }} />

// // // //       {/* Chart */}
// // // //       <div style={{ padding: "12px 20px 20px", flex: 1, position: "relative", zIndex: 1 }}>
// // // //         <ChartRenderer type={chart.chart} data={chart.data} columns={chart.columns} size={size} accent={accent} />
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // // ── Main Dashboard ────────────────────────────────────────────────────
// // // // export default function DashboardGrid({ result }: DashboardGridProps) {
// // // //   const { primary_chart, additional_charts, insights } = result
// // // //   const [visible, setVisible] = useState(false)
// // // //   const dashboardId = "axiom-dashboard"
// // // //   useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t) }, [])

// // // //   const insightLines = insights ? insights.split(/\n+/).filter((l: string) => l.trim()) : []
// // // //   const pieCharts = additional_charts?.filter((c: any) => c.chart === "pie" || c.chart === "donut") || []
// // // //   const otherCharts = additional_charts?.filter((c: any) => c.chart !== "pie" && c.chart !== "donut") || []
// // // //   const allChartData = [
// // // //     ...(primary_chart?.data || []),
// // // //     ...(additional_charts?.flatMap((c: any) => c.data || []) || []),
// // // //   ]

// // // //   return (
// // // //     <div id={dashboardId}>

// // // //       {/* ── Top toolbar ── */}
// // // //       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
// // // //         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
// // // //           <div style={{ width: "3px", height: "28px", background: "linear-gradient(180deg, #e1325a, #a78bfa)", borderRadius: "2px" }} />
// // // //           <div>
// // // //             <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.12em", fontFamily: "var(--font-display)", fontWeight: 600 }}>DASHBOARD OVERVIEW</p>
// // // //             <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "2px", fontWeight: 400 }}>
// // // //               {insightLines.length} metrics · {(additional_charts?.length || 0) + 1} charts
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //         <ExportBar result={result} dashboardId={dashboardId} />
// // // //       </div>

// // // //       {/* ── KPI Bento Row ── */}
// // // //       {insightLines.length > 0 && (
// // // //         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", marginBottom: "16px" }}>
// // // //           {insightLines.slice(0, 5).map((line: string, i: number) => (
// // // //             <KpiCard key={i} line={line} index={i} visible={visible} />
// // // //           ))}
// // // //         </div>
// // // //       )}

// // // //       {/* ── Bento Chart Grid ── */}
// // // //       <div style={{
// // // //         display: "grid",
// // // //         gridTemplateColumns: "repeat(4, 1fr)",
// // // //         gap: "14px",
// // // //         gridAutoRows: "minmax(320px, auto)",
// // // //       }}>

// // // //         {/* Primary chart — full width */}
// // // //         <ChartCard chart={primary_chart} colSpan={4} rowSpan={1} index={0} visible={visible} allChartData={allChartData} />

// // // //         {/* Layout logic for additional charts */}
// // // //         {(() => {
// // // //           const items: React.ReactNode[] = []
// // // //           let idx = 1

// // // //           // If we have both pie and bar/line, do 50/50 split
// // // //           if (pieCharts.length > 0 && otherCharts.length > 0) {
// // // //             // First pair: bar (2 cols) + pie (2 cols)
// // // //             if (otherCharts[0]) {
// // // //               items.push(<ChartCard key={`other-0`} chart={otherCharts[0]} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />)
// // // //             }
// // // //             if (pieCharts[0]) {
// // // //               items.push(<ChartCard key={`pie-0`} chart={pieCharts[0]} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />)
// // // //             }
// // // //             // Remaining others — 2 cols each
// // // //             otherCharts.slice(1).forEach((c: any, i: number) => {
// // // //               items.push(<ChartCard key={`other-${i+1}`} chart={c} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />)
// // // //             })
// // // //             // Remaining pies — 2 cols each (or 1 col if many)
// // // //             const remainPies = pieCharts.slice(1)
// // // //             if (remainPies.length === 3) {
// // // //               remainPies.forEach((c: any, i: number) => items.push(<ChartCard key={`pie-${i+1}`} chart={c} colSpan={Math.floor(4/remainPies.length) as any} index={idx++} visible={visible} allChartData={allChartData} />))
// // // //             } else {
// // // //               remainPies.forEach((c: any, i: number) => items.push(<ChartCard key={`pie-${i+1}`} chart={c} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />))
// // // //             }
// // // //           } else if (pieCharts.length > 0) {
// // // //             // Only pies — 2 cols each, 3 in a row
// // // //             pieCharts.forEach((c: any, i: number) => {
// // // //               const span = pieCharts.length === 1 ? 4 : pieCharts.length === 2 ? 2 : pieCharts.length === 3 ? (4/3 >= 1 ? 1 : 2) : 2
// // // //               items.push(<ChartCard key={`pie-${i}`} chart={c} colSpan={pieCharts.length <= 2 ? 2 : 1} index={idx++} visible={visible} allChartData={allChartData} />)
// // // //             })
// // // //           } else {
// // // //             // Only bar/line/area
// // // //             otherCharts.forEach((c: any, i: number) => {
// // // //               items.push(<ChartCard key={`other-${i}`} chart={c} colSpan={otherCharts.length === 1 ? 4 : 2} index={idx++} visible={visible} allChartData={allChartData} />)
// // // //             })
// // // //           }

// // // //           return items
// // // //         })()}
// // // //       </div>

// // // //       {/* ── Insights Footer ── */}
// // // //       {insightLines.length > 5 && (
// // // //         <div style={{ marginTop: "14px", background: "linear-gradient(145deg, #180e13, #110a0e)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "18px", padding: "24px 28px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: "all 0.5s ease 0.6s" }}>
// // // //           <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
// // // //             <div style={{ width: "3px", height: "18px", background: "linear-gradient(180deg, #e1325a, #a78bfa)", borderRadius: "2px" }} />
// // // //             <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.14em", fontFamily: "var(--font-display)", fontWeight: 600 }}>MORE INSIGHTS</p>
// // // //           </div>
// // // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
// // // //             {insightLines.slice(5).map((line: string, i: number) => (
// // // //               <InsightRow key={i} text={line.replace(/^[-•·]\s*/, "")} />
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       )}
// // // //     </div>
// // // //   )
// // // // }

// // // // function InsightRow({ text }: { text: string }) {
// // // //   const [h, setH] = useState(false)
// // // //   return (
// // // //     <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ padding: "12px 16px", display: "flex", alignItems: "flex-start", gap: "10px", background: h ? "rgba(225,50,90,0.06)" : "rgba(255,255,255,0.02)", border: `1px solid ${h ? "rgba(225,50,90,0.2)" : "rgba(255,255,255,0.05)"}`, borderRadius: "10px", transition: "all 0.2s", cursor: "default" }}>
// // // //       <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#e1325a", marginTop: "6px", flexShrink: 0, boxShadow: h ? "0 0 8px #e1325a" : "none", transition: "box-shadow 0.2s" }} />
// // // //       <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 400 }}>{text}</p>
// // // //     </div>
// // // //   )
// // // // }

// // // "use client"

// // // import { useState, useEffect, useRef } from "react"
// // // import ChartRenderer from "./ChartRenderer"

// // // interface DashboardGridProps {
// // //   result: {
// // //     primary_chart: any
// // //     additional_charts: any[]
// // //     insights: string
// // //   }
// // // }

// // // // ── Animated counter ──────────────────────────────────────────────────
// // // function useCounter(target: number, duration = 1400) {
// // //   const [val, setVal] = useState(0)
// // //   useEffect(() => {
// // //     if (!target) return
// // //     let frame = 0
// // //     const steps = 55
// // //     const timer = setInterval(() => {
// // //       frame++
// // //       const progress = frame / steps
// // //       const eased = 1 - Math.pow(1 - progress, 3)
// // //       setVal(Math.floor(target * eased))
// // //       if (frame >= steps) { setVal(target); clearInterval(timer) }
// // //     }, duration / steps)
// // //     return () => clearInterval(timer)
// // //   }, [target, duration])
// // //   return val
// // // }

// // // // ── Sparkline ─────────────────────────────────────────────────────────
// // // function Sparkline({ data, color }: { data: number[]; color: string }) {
// // //   if (!data || data.length < 2) return null
// // //   const w = 100, h = 36
// // //   const min = Math.min(...data), max = Math.max(...data)
// // //   const range = max - min || 1
// // //   const pts = data.map((v, i) => {
// // //     const x = (i / (data.length - 1)) * w
// // //     const y = h - ((v - min) / range) * (h - 4) - 2
// // //     return `${x.toFixed(1)},${y.toFixed(1)}`
// // //   }).join(" ")
// // //   const last = data[data.length - 1]
// // //   const lastX = w
// // //   const lastY = h - ((last - min) / range) * (h - 4) - 2
// // //   const areaD = `M0,${h} L${data.map((v, i) => {
// // //     const x = (i / (data.length - 1)) * w
// // //     const y = h - ((v - min) / range) * (h - 4) - 2
// // //     return `${x.toFixed(1)},${y.toFixed(1)}`
// // //   }).join(" L")} L${w},${h} Z`

// // //   return (
// // //     <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }}>
// // //       <defs>
// // //         <linearGradient id={`sp-${color.replace("#","")}`} x1="0" y1="0" x2="0" y2="1">
// // //           <stop offset="0%" stopColor={color} stopOpacity="0.35"/>
// // //           <stop offset="100%" stopColor={color} stopOpacity="0"/>
// // //         </linearGradient>
// // //       </defs>
// // //       <path d={areaD} fill={`url(#sp-${color.replace("#","")})`} />
// // //       <polyline points={pts} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
// // //       <circle cx={lastX} cy={lastY} r="3" fill={color} stroke="#100a0e" strokeWidth="1.5"/>
// // //     </svg>
// // //   )
// // // }

// // // // ── Export utilities ──────────────────────────────────────────────────
// // // function exportAsPNG(elementId: string, filename: string) {
// // //   import("html2canvas").then(({ default: html2canvas }) => {
// // //     const el = document.getElementById(elementId)
// // //     if (!el) return
// // //     html2canvas(el, {
// // //       backgroundColor: "#0a0608",
// // //       scale: 2,
// // //       useCORS: true,
// // //     }).then(canvas => {
// // //       const link = document.createElement("a")
// // //       link.download = `${filename}.png`
// // //       link.href = canvas.toDataURL("image/png")
// // //       link.click()
// // //     })
// // //   }).catch(() => {
// // //     // fallback: print
// // //     window.print()
// // //   })
// // // }

// // // function exportAsCSV(data: any[], filename: string) {
// // //   if (!data || !data.length) return
// // //   const cols = Object.keys(data[0])
// // //   const rows = [cols.join(","), ...data.map(row => cols.map(c => `"${row[c] ?? ""}"`).join(","))]
// // //   const blob = new Blob([rows.join("\n")], { type: "text/csv" })
// // //   const link = document.createElement("a")
// // //   link.download = `${filename}.csv`
// // //   link.href = URL.createObjectURL(blob)
// // //   link.click()
// // // }

// // // function exportAsJSON(result: any, filename: string) {
// // //   const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" })
// // //   const link = document.createElement("a")
// // //   link.download = `${filename}.json`
// // //   link.href = URL.createObjectURL(blob)
// // //   link.click()
// // // }

// // // // ── Export Button Bar ─────────────────────────────────────────────────
// // // function ExportBar({ result, dashboardId }: { result: any; dashboardId: string }) {
// // //   const [open, setOpen] = useState(false)
// // //   const allData = [
// // //     ...(result.primary_chart?.data || []),
// // //     ...(result.additional_charts?.flatMap((c: any) => c.data || []) || []),
// // //   ]
// // //   const title = result.primary_chart?.title || "dashboard"

// // //   return (
// // //     <div style={{ position: "relative" }}>
// // //       <button
// // //         onClick={() => setOpen(v => !v)}
// // //         style={{
// // //           display: "flex", alignItems: "center", gap: "7px",
// // //           padding: "9px 18px",
// // //           background: "linear-gradient(135deg, rgba(225,50,90,0.15), rgba(167,139,250,0.1))",
// // //           border: "1px solid rgba(225,50,90,0.3)",
// // //           borderRadius: "10px", color: "#fdf0f3",
// // //           fontSize: "13px", fontWeight: 600,
// // //           cursor: "pointer", fontFamily: "var(--font-display)",
// // //           letterSpacing: "0.04em",
// // //           transition: "all 0.2s",
// // //           boxShadow: "0 4px 16px rgba(225,50,90,0.15)",
// // //         }}
// // //         onMouseOver={e => { e.currentTarget.style.background = "linear-gradient(135deg, rgba(225,50,90,0.25), rgba(167,139,250,0.18))"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(225,50,90,0.25)" }}
// // //         onMouseOut={e => { e.currentTarget.style.background = "linear-gradient(135deg, rgba(225,50,90,0.15), rgba(167,139,250,0.1))"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(225,50,90,0.15)" }}
// // //       >
// // //         <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// // //           <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
// // //         </svg>
// // //         Export
// // //         <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>
// // //           <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
// // //         </svg>
// // //       </button>

// // //       {open && (
// // //         <div style={{
// // //           position: "absolute", top: "calc(100% + 8px)", right: 0,
// // //           background: "linear-gradient(145deg, #1e0e16, #160c12)",
// // //           border: "1px solid rgba(225,50,90,0.2)",
// // //           borderRadius: "12px", overflow: "hidden",
// // //           boxShadow: "0 20px 48px rgba(0,0,0,0.6)",
// // //           zIndex: 50, minWidth: "200px",
// // //         }}>
// // //           {[
// // //             { icon: "🖼", label: "Export as PNG", sub: "High-res screenshot", action: () => { exportAsPNG(dashboardId, title); setOpen(false) } },
// // //             { icon: "📊", label: "Export as CSV", sub: "Raw data spreadsheet", action: () => { exportAsCSV(allData, title); setOpen(false) } },
// // //             { icon: "📋", label: "Export as JSON", sub: "Power BI compatible", action: () => { exportAsJSON(result, title); setOpen(false) } },
// // //             { icon: "🖨", label: "Print / PDF", sub: "Browser print dialog", action: () => { setOpen(false); setTimeout(() => window.print(), 100) } },
// // //           ].map((item, i) => (
// // //             <button key={i} onClick={item.action} style={{
// // //               width: "100%", display: "flex", alignItems: "center", gap: "12px",
// // //               padding: "12px 16px",
// // //               background: "transparent",
// // //               border: "none",
// // //               borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
// // //               cursor: "pointer", textAlign: "left",
// // //               transition: "background 0.15s",
// // //             }}
// // //               onMouseOver={e => (e.currentTarget.style.background = "rgba(225,50,90,0.08)")}
// // //               onMouseOut={e => (e.currentTarget.style.background = "transparent")}
// // //             >
// // //               <span style={{ fontSize: "18px" }}>{item.icon}</span>
// // //               <div>
// // //                 <p style={{ fontSize: "13px", color: "#fdf0f3", fontWeight: 600, fontFamily: "var(--font-display)", margin: 0 }}>{item.label}</p>
// // //                 <p style={{ fontSize: "11px", color: "var(--text-muted)", margin: 0, marginTop: "2px" }}>{item.sub}</p>
// // //               </div>
// // //             </button>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   )
// // // }

// // // // ── KPI Themes ────────────────────────────────────────────────────────
// // // const KPI_THEMES = [
// // //   { accent: "#e1325a", bg: "rgba(225,50,90,0.08)", border: "rgba(225,50,90,0.2)", glow: "rgba(225,50,90,0.3)" },
// // //   { accent: "#a78bfa", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)", glow: "rgba(167,139,250,0.3)" },
// // //   { accent: "#2dd4bf", bg: "rgba(45,212,191,0.08)", border: "rgba(45,212,191,0.2)", glow: "rgba(45,212,191,0.3)" },
// // //   { accent: "#f0c060", bg: "rgba(240,192,96,0.08)", border: "rgba(240,192,96,0.2)", glow: "rgba(240,192,96,0.3)" },
// // //   { accent: "#fb923c", bg: "rgba(251,146,60,0.08)", border: "rgba(251,146,60,0.2)", glow: "rgba(251,146,60,0.3)" },
// // // ]

// // // function extractNum(text: string) {
// // //   const m = text.match(/([\$£€₹]?)\s*([\d,]+(?:\.\d+)?)\s*([%kKmMbBT]?)/)
// // //   if (!m) return null
// // //   return {
// // //     prefix: m[1] || "",
// // //     num: parseFloat(m[2].replace(/,/g, "")),
// // //     suffix: m[3] || "",
// // //     label: text.replace(m[0], "").replace(/^[:\s\-–]+/, "").trim(),
// // //     original: m[0].trim(),
// // //   }
// // // }

// // // function KpiCard({ line, index, visible }: { line: string; index: number; visible: boolean }) {
// // //   const [hovered, setHovered] = useState(false)
// // //   const theme = KPI_THEMES[index % KPI_THEMES.length]
// // //   const clean = line.replace(/^[-•·\d.*]\s*/, "").trim()
// // //   const extracted = extractNum(clean)
// // //   const hasNumber = extracted !== null && extracted.num > 0
// // //   const count = useCounter(hasNumber ? extracted!.num : 0, 1500)

// // //   // Only show sparkline when there's a real number
// // //   const spark = hasNumber ? Array.from({ length: 12 }, (_, i) =>
// // //     extracted!.num * (0.55 + Math.sin(i * 0.9 + index * 1.3) * 0.28 + (i / 12) * 0.17)
// // //   ) : []

// // //   const displayNum = hasNumber
// // //     ? extracted!.prefix + (count >= 1000 ? count.toLocaleString() : count) + extracted!.suffix
// // //     : null

// // //   // For text-only insights, find a short headline (first ~4 words) + rest as body
// // //   const words = clean.split(" ")
// // //   const headline = words.slice(0, 4).join(" ")
// // //   const body = words.slice(4).join(" ")

// // //   return (
// // //     <div
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //       style={{
// // //         padding: "22px 24px 20px",
// // //         background: hovered
// // //           ? `linear-gradient(145deg, ${theme.bg.replace("0.08","0.14")}, rgba(0,0,0,0.2))`
// // //           : `linear-gradient(145deg, ${theme.bg}, rgba(0,0,0,0.15))`,
// // //         border: `1px solid ${hovered ? theme.accent + "66" : theme.border}`,
// // //         borderRadius: "18px", position: "relative", overflow: "hidden",
// // //         cursor: "default",
// // //         transform: visible ? (hovered ? "translateY(-4px) scale(1.01)" : "translateY(0)") : "translateY(24px) scale(0.97)",
// // //         opacity: visible ? 1 : 0,
// // //         transition: `all 0.5s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.07}s`,
// // //         boxShadow: hovered ? `0 16px 40px ${theme.glow.replace("0.3","0.18")}, inset 0 1px 0 rgba(255,255,255,0.07)` : "0 2px 16px rgba(0,0,0,0.3)",
// // //       }}
// // //     >
// // //       {/* Top accent bar */}
// // //       <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent}44, transparent)`, transformOrigin: "left", transform: `scaleX(${hovered ? 1 : 0.5})`, transition: "transform 0.4s ease" }} />
// // //       {/* Corner orb */}
// // //       <div style={{ position: "absolute", top: "-24px", right: "-24px", width: "90px", height: "90px", borderRadius: "50%", background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`, opacity: hovered ? 1 : 0.5, transition: "opacity 0.4s", pointerEvents: "none" }} />

// // //       {hasNumber ? (
// // //         /* ── Numeric KPI layout ── */
// // //         <>
// // //           {/* Label: text around the number */}
// // //           <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.14em", marginBottom: "10px", fontFamily: "var(--font-display)", fontWeight: 600, position: "relative", textTransform: "uppercase" }}>
// // //             {(extracted!.label || clean).slice(0, 26) || "METRIC"}
// // //           </p>
// // //           <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "10px" }}>
// // //             <p style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 800, color: "#fdf0f3", letterSpacing: "-0.04em", lineHeight: 1, position: "relative", textShadow: hovered ? `0 0 32px ${theme.glow}` : "none", transition: "text-shadow 0.3s" }}>
// // //               {displayNum}
// // //             </p>
// // //             <div style={{ opacity: hovered ? 1 : 0.6, transition: "opacity 0.3s", flexShrink: 0, paddingBottom: "4px" }}>
// // //               <Sparkline data={spark} color={theme.accent} />
// // //             </div>
// // //           </div>
// // //           <div style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "12px", padding: "3px 8px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "100px", opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(4px)", transition: "all 0.3s" }}>
// // //             <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 7L5 3l3 4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
// // //             <span style={{ fontSize: "10px", color: "#22c55e", letterSpacing: "0.06em", fontWeight: 600 }}>TRENDING</span>
// // //           </div>
// // //         </>
// // //       ) : (
// // //         /* ── Text insight layout ── */
// // //         <>
// // //           {/* Insight icon */}
// // //           <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", position: "relative" }}>
// // //             <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: `${theme.accent}20`, border: `1px solid ${theme.accent}44`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// // //               <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
// // //                 <circle cx="6" cy="6" r="4" stroke={theme.accent} strokeWidth="1.4"/>
// // //                 <path d="M6 4v2.5M6 8v.5" stroke={theme.accent} strokeWidth="1.4" strokeLinecap="round"/>
// // //               </svg>
// // //             </div>
// // //             <p style={{ fontSize: "10px", color: theme.accent, letterSpacing: "0.12em", fontFamily: "var(--font-display)", fontWeight: 700 }}>INSIGHT</p>
// // //           </div>
// // //           {/* Full insight text — readable */}
// // //           <p style={{ fontSize: "13px", color: "#fdf0f3", lineHeight: 1.65, fontWeight: 500, position: "relative" }}>
// // //             {clean}
// // //           </p>
// // //         </>
// // //       )}
// // //     </div>
// // //   )
// // // }

// // // // ── Chart Card ────────────────────────────────────────────────────────
// // // const ACCENTS = ["#e1325a", "#a78bfa", "#2dd4bf", "#f0c060", "#fb923c", "#34d399"]

// // // function ChartCard({ chart, colSpan = 1, rowSpan = 1, index, visible, allChartData }: {
// // //   chart: any; colSpan?: number; rowSpan?: number; index: number; visible: boolean; allChartData?: any[]
// // // }) {
// // //   const [sqlOpen, setSqlOpen] = useState(false)
// // //   const [hovered, setHovered] = useState(false)
// // //   const accent = ACCENTS[index % ACCENTS.length]
// // //   if (!chart) return null

// // //   const size = colSpan >= 2 ? "large" : (chart.chart === "pie" || chart.chart === "donut") ? "pie" : "small"

// // //   return (
// // //     <div
// // //       id={`chart-card-${index}`}
// // //       onMouseEnter={() => setHovered(true)}
// // //       onMouseLeave={() => setHovered(false)}
// // //       style={{
// // //         gridColumn: `span ${colSpan}`,
// // //         gridRow: `span ${rowSpan}`,
// // //         background: "linear-gradient(145deg, #180e13 0%, #110a0e 100%)",
// // //         border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.07)"}`,
// // //         borderRadius: "20px", overflow: "hidden",
// // //         opacity: visible ? 1 : 0,
// // //         transform: visible ? (hovered ? "translateY(-2px)" : "translateY(0)") : "translateY(24px)",
// // //         transition: `opacity 0.5s ease ${0.1 + index * 0.07}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.1 + index * 0.07}s, border-color 0.25s, box-shadow 0.3s`,
// // //         boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${accent}22` : "0 4px 24px rgba(0,0,0,0.3)",
// // //         position: "relative", display: "flex", flexDirection: "column",
// // //       }}
// // //     >
// // //       {/* Accent top bar */}
// // //       <div style={{ height: "3px", background: `linear-gradient(90deg, ${accent}, ${accent}66, transparent)`, transformOrigin: "left", transform: `scaleX(${hovered ? 1 : 0.35})`, transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1)", flexShrink: 0 }} />

// // //       {/* Corner glow */}
// // //       <div style={{ position: "absolute", top: 0, right: 0, width: "180px", height: "180px", background: `radial-gradient(circle at top right, ${accent}10, transparent 65%)`, pointerEvents: "none", opacity: hovered ? 1 : 0, transition: "opacity 0.4s", zIndex: 0 }} />

// // //       {/* Header */}
// // //       <div style={{ padding: "20px 24px 12px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", position: "relative", zIndex: 1, flexShrink: 0 }}>
// // //         <div>
// // //           <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#fdf0f3", fontSize: colSpan >= 2 ? "20px" : "16px", letterSpacing: "-0.02em", marginBottom: "6px", lineHeight: 1.2 }}>
// // //             {chart.title}
// // //           </h3>
// // //           <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// // //             <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: accent, boxShadow: `0 0 8px ${accent}` }} />
// // //             <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em", fontWeight: 500 }}>
// // //               {chart.data?.length || 0} RECORDS
// // //             </span>
// // //           </div>
// // //         </div>

// // //         <div style={{ display: "flex", gap: "7px", alignItems: "center", flexShrink: 0 }}>
// // //           <div style={{ padding: "4px 10px", background: hovered ? `${accent}22` : "rgba(255,255,255,0.04)", border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.08)"}`, borderRadius: "8px", transition: "all 0.25s" }}>
// // //             <span style={{ fontSize: "10px", color: hovered ? accent : "var(--text-muted)", letterSpacing: "0.08em", fontWeight: 600, transition: "color 0.25s" }}>
// // //               {({"bar":"▊ BAR","line":"∿ LINE","area":"◬ AREA","pie":"◔ PIE","donut":"◯ DONUT"} as Record<string,string>)[chart.chart] ?? "⊞ TABLE"}
// // //             </span>
// // //           </div>
// // //           {chart.sql && (
// // //             <button onClick={() => setSqlOpen(v => !v)} style={{ padding: "4px 10px", background: sqlOpen ? "rgba(167,139,250,0.15)" : "transparent", border: `1px solid ${sqlOpen ? "rgba(167,139,250,0.4)" : "rgba(255,255,255,0.08)"}`, borderRadius: "8px", fontSize: "10px", color: sqlOpen ? "#a78bfa" : "var(--text-muted)", cursor: "pointer", fontFamily: "var(--font-body)", letterSpacing: "0.06em", fontWeight: 600, transition: "all 0.2s" }}>
// // //               {sqlOpen ? "▲ SQL" : "▼ SQL"}
// // //             </button>
// // //           )}
// // //           {/* Per-chart CSV export */}
// // //           <button onClick={() => exportAsCSV(chart.data || [], chart.title || "chart")} title="Export chart data" style={{ padding: "4px 8px", background: "transparent", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", cursor: "pointer", color: "var(--text-muted)", transition: "all 0.2s", fontSize: "12px" }}
// // //             onMouseOver={e => { e.currentTarget.style.borderColor = `${accent}44`; e.currentTarget.style.color = accent }}
// // //             onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "var(--text-muted)" }}
// // //           >↓</button>
// // //         </div>
// // //       </div>

// // //       {/* SQL slide */}
// // //       <div style={{ maxHeight: sqlOpen ? "160px" : "0", overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)", flexShrink: 0, position: "relative", zIndex: 1 }}>
// // //         <div style={{ padding: "12px 24px 14px", background: "rgba(0,0,0,0.5)", borderTop: "1px solid rgba(167,139,250,0.1)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
// // //           <pre style={{ fontSize: "11px", color: "#a78bfa", fontFamily: "'Fira Code','Consolas',monospace", lineHeight: 1.75, overflowX: "auto", margin: 0 }}>{chart.sql}</pre>
// // //         </div>
// // //       </div>

// // //       {/* Divider */}
// // //       <div style={{ height: "1px", margin: "0 24px", background: `linear-gradient(90deg, transparent, ${accent}22, transparent)`, flexShrink: 0, position: "relative", zIndex: 1 }} />

// // //       {/* Chart */}
// // //       <div style={{ padding: "12px 20px 20px", flex: 1, position: "relative", zIndex: 1 }}>
// // //         <ChartRenderer type={chart.chart} data={chart.data} columns={chart.columns} size={size} accent={accent} />
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // // ── Main Dashboard ────────────────────────────────────────────────────
// // // export default function DashboardGrid({ result }: DashboardGridProps) {
// // //   const { primary_chart, additional_charts, insights } = result
// // //   const [visible, setVisible] = useState(false)
// // //   const dashboardId = "axiom-dashboard"
// // //   useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t) }, [])

// // //   const insightLines = insights ? insights.split(/\n+/).filter((l: string) => l.trim()) : []
// // //   const pieCharts = additional_charts?.filter((c: any) => c.chart === "pie" || c.chart === "donut") || []
// // //   const otherCharts = additional_charts?.filter((c: any) => c.chart !== "pie" && c.chart !== "donut") || []
// // //   const allChartData = [
// // //     ...(primary_chart?.data || []),
// // //     ...(additional_charts?.flatMap((c: any) => c.data || []) || []),
// // //   ]

// // //   return (
// // //     <div id={dashboardId}>

// // //       {/* ── Top toolbar ── */}
// // //       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
// // //         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
// // //           <div style={{ width: "3px", height: "28px", background: "linear-gradient(180deg, #e1325a, #a78bfa)", borderRadius: "2px" }} />
// // //           <div>
// // //             <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.12em", fontFamily: "var(--font-display)", fontWeight: 600 }}>DASHBOARD OVERVIEW</p>
// // //             <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "2px", fontWeight: 400 }}>
// // //               {insightLines.length} metrics · {(additional_charts?.length || 0) + 1} charts
// // //             </p>
// // //           </div>
// // //         </div>
// // //         <ExportBar result={result} dashboardId={dashboardId} />
// // //       </div>

// // //       {/* ── KPI Bento Row ── */}
// // //       {insightLines.length > 0 && (
// // //         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", marginBottom: "16px" }}>
// // //           {insightLines.slice(0, 5).map((line: string, i: number) => (
// // //             <KpiCard key={i} line={line} index={i} visible={visible} />
// // //           ))}
// // //         </div>
// // //       )}

// // //       {/* ── Bento Chart Grid ── */}
// // //       <div style={{
// // //         display: "grid",
// // //         gridTemplateColumns: "repeat(4, 1fr)",
// // //         gap: "14px",
// // //         gridAutoRows: "minmax(320px, auto)",
// // //       }}>

// // //         {/* Primary chart — full width */}
// // //         <ChartCard chart={primary_chart} colSpan={4} rowSpan={1} index={0} visible={visible} allChartData={allChartData} />

// // //         {/* Layout logic for additional charts */}
// // //         {(() => {
// // //           const items: React.ReactNode[] = []
// // //           let idx = 1

// // //           // If we have both pie and bar/line, do 50/50 split
// // //           if (pieCharts.length > 0 && otherCharts.length > 0) {
// // //             // First pair: bar (2 cols) + pie (2 cols)
// // //             if (otherCharts[0]) {
// // //               items.push(<ChartCard key={`other-0`} chart={otherCharts[0]} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />)
// // //             }
// // //             if (pieCharts[0]) {
// // //               items.push(<ChartCard key={`pie-0`} chart={pieCharts[0]} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />)
// // //             }
// // //             // Remaining others — 2 cols each
// // //             otherCharts.slice(1).forEach((c: any, i: number) => {
// // //               items.push(<ChartCard key={`other-${i+1}`} chart={c} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />)
// // //             })
// // //             // Remaining pies — 2 cols each (or 1 col if many)
// // //             const remainPies = pieCharts.slice(1)
// // //             if (remainPies.length === 3) {
// // //               remainPies.forEach((c: any, i: number) => items.push(<ChartCard key={`pie-${i+1}`} chart={c} colSpan={Math.floor(4/remainPies.length) as any} index={idx++} visible={visible} allChartData={allChartData} />))
// // //             } else {
// // //               remainPies.forEach((c: any, i: number) => items.push(<ChartCard key={`pie-${i+1}`} chart={c} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />))
// // //             }
// // //           } else if (pieCharts.length > 0) {
// // //             // Only pies — 2 cols each, 3 in a row
// // //             pieCharts.forEach((c: any, i: number) => {
// // //               const span = pieCharts.length === 1 ? 4 : pieCharts.length === 2 ? 2 : pieCharts.length === 3 ? (4/3 >= 1 ? 1 : 2) : 2
// // //               items.push(<ChartCard key={`pie-${i}`} chart={c} colSpan={pieCharts.length <= 2 ? 2 : 1} index={idx++} visible={visible} allChartData={allChartData} />)
// // //             })
// // //           } else {
// // //             // Only bar/line/area
// // //             otherCharts.forEach((c: any, i: number) => {
// // //               items.push(<ChartCard key={`other-${i}`} chart={c} colSpan={otherCharts.length === 1 ? 4 : 2} index={idx++} visible={visible} allChartData={allChartData} />)
// // //             })
// // //           }

// // //           return items
// // //         })()}
// // //       </div>

// // //       {/* ── Insights Footer ── */}
// // //       {insightLines.length > 5 && (
// // //         <div style={{ marginTop: "14px", background: "linear-gradient(145deg, #180e13, #110a0e)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "18px", padding: "24px 28px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: "all 0.5s ease 0.6s" }}>
// // //           <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
// // //             <div style={{ width: "3px", height: "18px", background: "linear-gradient(180deg, #e1325a, #a78bfa)", borderRadius: "2px" }} />
// // //             <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.14em", fontFamily: "var(--font-display)", fontWeight: 600 }}>MORE INSIGHTS</p>
// // //           </div>
// // //           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
// // //             {insightLines.slice(5).map((line: string, i: number) => (
// // //               <InsightRow key={i} text={line.replace(/^[-•·]\s*/, "")} />
// // //             ))}
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   )
// // // }

// // // function InsightRow({ text }: { text: string }) {
// // //   const [h, setH] = useState(false)
// // //   return (
// // //     <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ padding: "12px 16px", display: "flex", alignItems: "flex-start", gap: "10px", background: h ? "rgba(225,50,90,0.06)" : "rgba(255,255,255,0.02)", border: `1px solid ${h ? "rgba(225,50,90,0.2)" : "rgba(255,255,255,0.05)"}`, borderRadius: "10px", transition: "all 0.2s", cursor: "default" }}>
// // //       <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#e1325a", marginTop: "6px", flexShrink: 0, boxShadow: h ? "0 0 8px #e1325a" : "none", transition: "box-shadow 0.2s" }} />
// // //       <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 400 }}>{text}</p>
// // //     </div>
// // //   )
// // // }

// // "use client"

// // import React, { useState, useEffect, useRef } from "react"
// // import ChartRenderer from "./ChartRenderer"

// // interface DashboardGridProps {
// //   result: {
// //     primary_chart: any
// //     additional_charts: any[]
// //     insights: string
// //   }
// // }

// // // ── Animated counter ──────────────────────────────────────────────────
// // function useCounter(target: number, duration = 1400) {
// //   const [val, setVal] = useState(0)
// //   useEffect(() => {
// //     if (!target) return
// //     let frame = 0
// //     const steps = 55
// //     const timer = setInterval(() => {
// //       frame++
// //       const progress = frame / steps
// //       const eased = 1 - Math.pow(1 - progress, 3)
// //       setVal(Math.floor(target * eased))
// //       if (frame >= steps) { setVal(target); clearInterval(timer) }
// //     }, duration / steps)
// //     return () => clearInterval(timer)
// //   }, [target, duration])
// //   return val
// // }

// // // ── Sparkline ─────────────────────────────────────────────────────────
// // function Sparkline({ data, color }: { data: number[]; color: string }) {
// //   if (!data || data.length < 2) return null
// //   const w = 100, h = 36
// //   const min = Math.min(...data), max = Math.max(...data)
// //   const range = max - min || 1
// //   const pts = data.map((v, i) => {
// //     const x = (i / (data.length - 1)) * w
// //     const y = h - ((v - min) / range) * (h - 4) - 2
// //     return `${x.toFixed(1)},${y.toFixed(1)}`
// //   }).join(" ")
// //   const last = data[data.length - 1]
// //   const lastX = w
// //   const lastY = h - ((last - min) / range) * (h - 4) - 2
// //   const areaD = `M0,${h} L${data.map((v, i) => {
// //     const x = (i / (data.length - 1)) * w
// //     const y = h - ((v - min) / range) * (h - 4) - 2
// //     return `${x.toFixed(1)},${y.toFixed(1)}`
// //   }).join(" L")} L${w},${h} Z`

// //   return (
// //     <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }}>
// //       <defs>
// //         <linearGradient id={`sp-${color.replace("#","")}`} x1="0" y1="0" x2="0" y2="1">
// //           <stop offset="0%" stopColor={color} stopOpacity="0.35"/>
// //           <stop offset="100%" stopColor={color} stopOpacity="0"/>
// //         </linearGradient>
// //       </defs>
// //       <path d={areaD} fill={`url(#sp-${color.replace("#","")})`} />
// //       <polyline points={pts} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
// //       <circle cx={lastX} cy={lastY} r="3" fill={color} stroke="#100a0e" strokeWidth="1.5"/>
// //     </svg>
// //   )
// // }

// // // ── Export utilities ──────────────────────────────────────────────────
// // function exportAsPNG(elementId: string, filename: string) {
// //   import("html2canvas").then(({ default: html2canvas }) => {
// //     const el = document.getElementById(elementId)
// //     if (!el) return
// //     html2canvas(el, {
// //       backgroundColor: "#0a0608",
// //       scale: 2,
// //       useCORS: true,
// //     }).then(canvas => {
// //       const link = document.createElement("a")
// //       link.download = `${filename}.png`
// //       link.href = canvas.toDataURL("image/png")
// //       link.click()
// //     })
// //   }).catch(() => {
// //     // fallback: print
// //     window.print()
// //   })
// // }

// // function exportAsCSV(data: any[], filename: string) {
// //   if (!data || !data.length) return
// //   const cols = Object.keys(data[0])
// //   const rows = [cols.join(","), ...data.map(row => cols.map(c => `"${row[c] ?? ""}"`).join(","))]
// //   const blob = new Blob([rows.join("\n")], { type: "text/csv" })
// //   const link = document.createElement("a")
// //   link.download = `${filename}.csv`
// //   link.href = URL.createObjectURL(blob)
// //   link.click()
// // }

// // function exportAsJSON(result: any, filename: string) {
// //   const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" })
// //   const link = document.createElement("a")
// //   link.download = `${filename}.json`
// //   link.href = URL.createObjectURL(blob)
// //   link.click()
// // }

// // // ── Export Button Bar ─────────────────────────────────────────────────
// // function ExportBar({ result, dashboardId }: { result: any; dashboardId: string }) {
// //   const [open, setOpen] = useState(false)
// //   const allData = [
// //     ...(result.primary_chart?.data || []),
// //     ...(result.additional_charts?.flatMap((c: any) => c.data || []) || []),
// //   ]
// //   const title = result.primary_chart?.title || "dashboard"

// //   return (
// //     <div style={{ position: "relative" }}>
// //       <button
// //         onClick={() => setOpen(v => !v)}
// //         style={{
// //           display: "flex", alignItems: "center", gap: "7px",
// //           padding: "9px 18px",
// //           background: "linear-gradient(135deg, rgba(225,50,90,0.15), rgba(167,139,250,0.1))",
// //           border: "1px solid rgba(225,50,90,0.3)",
// //           borderRadius: "10px", color: "#fdf0f3",
// //           fontSize: "13px", fontWeight: 600,
// //           cursor: "pointer", fontFamily: "var(--font-display)",
// //           letterSpacing: "0.04em",
// //           transition: "all 0.2s",
// //           boxShadow: "0 4px 16px rgba(225,50,90,0.15)",
// //         }}
// //         onMouseOver={e => { e.currentTarget.style.background = "linear-gradient(135deg, rgba(225,50,90,0.25), rgba(167,139,250,0.18))"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(225,50,90,0.25)" }}
// //         onMouseOut={e => { e.currentTarget.style.background = "linear-gradient(135deg, rgba(225,50,90,0.15), rgba(167,139,250,0.1))"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(225,50,90,0.15)" }}
// //       >
// //         <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
// //           <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
// //         </svg>
// //         Export
// //         <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>
// //           <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
// //         </svg>
// //       </button>

// //       {open && (
// //         <div style={{
// //           position: "absolute", top: "calc(100% + 8px)", right: 0,
// //           background: "linear-gradient(145deg, #1e0e16, #160c12)",
// //           border: "1px solid rgba(225,50,90,0.2)",
// //           borderRadius: "12px", overflow: "hidden",
// //           boxShadow: "0 20px 48px rgba(0,0,0,0.6)",
// //           zIndex: 50, minWidth: "200px",
// //         }}>
// //           {[
// //             { icon: "🖼", label: "Export as PNG", sub: "High-res screenshot", action: () => { exportAsPNG(dashboardId, title); setOpen(false) } },
// //             { icon: "📊", label: "Export as CSV", sub: "Raw data spreadsheet", action: () => { exportAsCSV(allData, title); setOpen(false) } },
// //             { icon: "📋", label: "Export as JSON", sub: "Power BI compatible", action: () => { exportAsJSON(result, title); setOpen(false) } },
// //             { icon: "🖨", label: "Print / PDF", sub: "Browser print dialog", action: () => { setOpen(false); setTimeout(() => window.print(), 100) } },
// //           ].map((item, i) => (
// //             <button key={i} onClick={item.action} style={{
// //               width: "100%", display: "flex", alignItems: "center", gap: "12px",
// //               padding: "12px 16px",
// //               background: "transparent",
// //               border: "none",
// //               borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
// //               cursor: "pointer", textAlign: "left",
// //               transition: "background 0.15s",
// //             }}
// //               onMouseOver={e => (e.currentTarget.style.background = "rgba(225,50,90,0.08)")}
// //               onMouseOut={e => (e.currentTarget.style.background = "transparent")}
// //             >
// //               <span style={{ fontSize: "18px" }}>{item.icon}</span>
// //               <div>
// //                 <p style={{ fontSize: "13px", color: "#fdf0f3", fontWeight: 600, fontFamily: "var(--font-display)", margin: 0 }}>{item.label}</p>
// //                 <p style={{ fontSize: "11px", color: "var(--text-muted)", margin: 0, marginTop: "2px" }}>{item.sub}</p>
// //               </div>
// //             </button>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // // ── KPI Themes ────────────────────────────────────────────────────────
// // const KPI_THEMES = [
// //   { accent: "#e1325a", bg: "rgba(225,50,90,0.08)", border: "rgba(225,50,90,0.2)", glow: "rgba(225,50,90,0.3)" },
// //   { accent: "#a78bfa", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)", glow: "rgba(167,139,250,0.3)" },
// //   { accent: "#2dd4bf", bg: "rgba(45,212,191,0.08)", border: "rgba(45,212,191,0.2)", glow: "rgba(45,212,191,0.3)" },
// //   { accent: "#f0c060", bg: "rgba(240,192,96,0.08)", border: "rgba(240,192,96,0.2)", glow: "rgba(240,192,96,0.3)" },
// //   { accent: "#fb923c", bg: "rgba(251,146,60,0.08)", border: "rgba(251,146,60,0.2)", glow: "rgba(251,146,60,0.3)" },
// // ]

// // function extractNum(text: string) {
// //   const m = text.match(/([\$£€₹]?)\s*([\d,]+(?:\.\d+)?)\s*([%kKmMbBT]?)/)
// //   if (!m) return null
// //   return {
// //     prefix: m[1] || "",
// //     num: parseFloat(m[2].replace(/,/g, "")),
// //     suffix: m[3] || "",
// //     label: text.replace(m[0], "").replace(/^[:\s\-–]+/, "").trim(),
// //     original: m[0].trim(),
// //   }
// // }

// // function KpiCard({ line, index, visible }: { line: string; index: number; visible: boolean }) {
// //   const [hovered, setHovered] = useState(false)
// //   const theme = KPI_THEMES[index % KPI_THEMES.length]
// //   const clean = line.replace(/^[-•·\d.*]\s*/, "").trim()
// //   const extracted = extractNum(clean)
// //   const hasNumber = extracted !== null && extracted.num > 0
// //   const count = useCounter(hasNumber ? extracted!.num : 0, 1500)

// //   // Only show sparkline when there's a real number
// //   const spark = hasNumber ? Array.from({ length: 12 }, (_, i) =>
// //     extracted!.num * (0.55 + Math.sin(i * 0.9 + index * 1.3) * 0.28 + (i / 12) * 0.17)
// //   ) : []

// //   const displayNum = hasNumber
// //     ? extracted!.prefix + (count >= 1000 ? count.toLocaleString() : count) + extracted!.suffix
// //     : null

// //   // For text-only insights, find a short headline (first ~4 words) + rest as body
// //   const words = clean.split(" ")
// //   const headline = words.slice(0, 4).join(" ")
// //   const body = words.slice(4).join(" ")

// //   return (
// //     <div
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //       style={{
// //         padding: "22px 24px 20px",
// //         background: hovered
// //           ? `linear-gradient(145deg, ${theme.bg.replace("0.08","0.14")}, rgba(0,0,0,0.2))`
// //           : `linear-gradient(145deg, ${theme.bg}, rgba(0,0,0,0.15))`,
// //         border: `1px solid ${hovered ? theme.accent + "66" : theme.border}`,
// //         borderRadius: "18px", position: "relative", overflow: "hidden",
// //         cursor: "default",
// //         transform: visible ? (hovered ? "translateY(-4px) scale(1.01)" : "translateY(0)") : "translateY(24px) scale(0.97)",
// //         opacity: visible ? 1 : 0,
// //         transition: `all 0.5s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.07}s`,
// //         boxShadow: hovered ? `0 16px 40px ${theme.glow.replace("0.3","0.18")}, inset 0 1px 0 rgba(255,255,255,0.07)` : "0 2px 16px rgba(0,0,0,0.3)",
// //       }}
// //     >
// //       {/* Top accent bar */}
// //       <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent}44, transparent)`, transformOrigin: "left", transform: `scaleX(${hovered ? 1 : 0.5})`, transition: "transform 0.4s ease" }} />
// //       {/* Corner orb */}
// //       <div style={{ position: "absolute", top: "-24px", right: "-24px", width: "90px", height: "90px", borderRadius: "50%", background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`, opacity: hovered ? 1 : 0.5, transition: "opacity 0.4s", pointerEvents: "none" }} />

// //       {hasNumber ? (
// //         /* ── Numeric KPI layout ── */
// //         <>
// //           {/* Label: text around the number */}
// //           <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.14em", marginBottom: "10px", fontFamily: "var(--font-display)", fontWeight: 600, position: "relative", textTransform: "uppercase" }}>
// //             {(extracted!.label || clean).slice(0, 26) || "METRIC"}
// //           </p>
// //           <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "10px" }}>
// //             <p style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 800, color: "#fdf0f3", letterSpacing: "-0.04em", lineHeight: 1, position: "relative", textShadow: hovered ? `0 0 32px ${theme.glow}` : "none", transition: "text-shadow 0.3s" }}>
// //               {displayNum}
// //             </p>
// //             <div style={{ opacity: hovered ? 1 : 0.6, transition: "opacity 0.3s", flexShrink: 0, paddingBottom: "4px" }}>
// //               <Sparkline data={spark} color={theme.accent} />
// //             </div>
// //           </div>
// //           <div style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "12px", padding: "3px 8px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "100px", opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(4px)", transition: "all 0.3s" }}>
// //             <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 7L5 3l3 4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
// //             <span style={{ fontSize: "10px", color: "#22c55e", letterSpacing: "0.06em", fontWeight: 600 }}>TRENDING</span>
// //           </div>
// //         </>
// //       ) : (
// //         /* ── Text insight layout ── */
// //         <>
// //           {/* Insight icon */}
// //           <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", position: "relative" }}>
// //             <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: `${theme.accent}20`, border: `1px solid ${theme.accent}44`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
// //               <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
// //                 <circle cx="6" cy="6" r="4" stroke={theme.accent} strokeWidth="1.4"/>
// //                 <path d="M6 4v2.5M6 8v.5" stroke={theme.accent} strokeWidth="1.4" strokeLinecap="round"/>
// //               </svg>
// //             </div>
// //             <p style={{ fontSize: "10px", color: theme.accent, letterSpacing: "0.12em", fontFamily: "var(--font-display)", fontWeight: 700 }}>INSIGHT</p>
// //           </div>
// //           {/* Full insight text — readable */}
// //           <p style={{ fontSize: "13px", color: "#fdf0f3", lineHeight: 1.65, fontWeight: 500, position: "relative" }}>
// //             {clean}
// //           </p>
// //         </>
// //       )}
// //     </div>
// //   )
// // }

// // // ── Chart Card ────────────────────────────────────────────────────────
// // const ACCENTS = ["#e1325a", "#a78bfa", "#2dd4bf", "#f0c060", "#fb923c", "#34d399"]

// // function ChartCard({ chart, colSpan = 1, rowSpan = 1, index, visible, allChartData }: {
// //   chart: any; colSpan?: number; rowSpan?: number; index: number; visible: boolean; allChartData?: any[]
// // }) {
// //   const [sqlOpen, setSqlOpen] = useState(false)
// //   const [hovered, setHovered] = useState(false)
// //   const accent = ACCENTS[index % ACCENTS.length]
// //   if (!chart) return null

// //   const size = colSpan >= 2 ? "large" : (chart.chart === "pie" || chart.chart === "donut") ? "pie" : "small"

// //   return (
// //     <div
// //       id={`chart-card-${index}`}
// //       onMouseEnter={() => setHovered(true)}
// //       onMouseLeave={() => setHovered(false)}
// //       style={{
// //         gridColumn: `span ${colSpan}`,
// //         gridRow: `span ${rowSpan}`,
// //         background: "linear-gradient(145deg, #180e13 0%, #110a0e 100%)",
// //         border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.07)"}`,
// //         borderRadius: "20px", overflow: "hidden",
// //         opacity: visible ? 1 : 0,
// //         transform: visible ? (hovered ? "translateY(-2px)" : "translateY(0)") : "translateY(24px)",
// //         transition: `opacity 0.5s ease ${0.1 + index * 0.07}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.1 + index * 0.07}s, border-color 0.25s, box-shadow 0.3s`,
// //         boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${accent}22` : "0 4px 24px rgba(0,0,0,0.3)",
// //         position: "relative", display: "flex", flexDirection: "column",
// //       }}
// //     >
// //       {/* Accent top bar */}
// //       <div style={{ height: "3px", background: `linear-gradient(90deg, ${accent}, ${accent}66, transparent)`, transformOrigin: "left", transform: `scaleX(${hovered ? 1 : 0.35})`, transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1)", flexShrink: 0 }} />

// //       {/* Corner glow */}
// //       <div style={{ position: "absolute", top: 0, right: 0, width: "180px", height: "180px", background: `radial-gradient(circle at top right, ${accent}10, transparent 65%)`, pointerEvents: "none", opacity: hovered ? 1 : 0, transition: "opacity 0.4s", zIndex: 0 }} />

// //       {/* Header */}
// //       <div style={{ padding: "20px 24px 12px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", position: "relative", zIndex: 1, flexShrink: 0 }}>
// //         <div>
// //           <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#fdf0f3", fontSize: colSpan >= 2 ? "20px" : "16px", letterSpacing: "-0.02em", marginBottom: "6px", lineHeight: 1.2 }}>
// //             {chart.title}
// //           </h3>
// //           <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// //             <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: accent, boxShadow: `0 0 8px ${accent}` }} />
// //             <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em", fontWeight: 500 }}>
// //               {chart.data?.length || 0} RECORDS
// //             </span>
// //           </div>
// //         </div>

// //         <div style={{ display: "flex", gap: "7px", alignItems: "center", flexShrink: 0 }}>
// //           <div style={{ padding: "4px 10px", background: hovered ? `${accent}22` : "rgba(255,255,255,0.04)", border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.08)"}`, borderRadius: "8px", transition: "all 0.25s" }}>
// //             <span style={{ fontSize: "10px", color: hovered ? accent : "var(--text-muted)", letterSpacing: "0.08em", fontWeight: 600, transition: "color 0.25s" }}>
// //               {({"bar":"▊ BAR","line":"∿ LINE","area":"◬ AREA","pie":"◔ PIE","donut":"◯ DONUT"} as Record<string,string>)[chart.chart as string] ?? "⊞ TABLE"}
// //             </span>
// //           </div>
// //           {chart.sql && (
// //             <button onClick={() => setSqlOpen(v => !v)} style={{ padding: "4px 10px", background: sqlOpen ? "rgba(167,139,250,0.15)" : "transparent", border: `1px solid ${sqlOpen ? "rgba(167,139,250,0.4)" : "rgba(255,255,255,0.08)"}`, borderRadius: "8px", fontSize: "10px", color: sqlOpen ? "#a78bfa" : "var(--text-muted)", cursor: "pointer", fontFamily: "var(--font-body)", letterSpacing: "0.06em", fontWeight: 600, transition: "all 0.2s" }}>
// //               {sqlOpen ? "▲ SQL" : "▼ SQL"}
// //             </button>
// //           )}
// //           {/* Per-chart CSV export */}
// //           <button onClick={() => exportAsCSV(chart.data || [], chart.title || "chart")} title="Export chart data" style={{ padding: "4px 8px", background: "transparent", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", cursor: "pointer", color: "var(--text-muted)", transition: "all 0.2s", fontSize: "12px" }}
// //             onMouseOver={e => { e.currentTarget.style.borderColor = `${accent}44`; e.currentTarget.style.color = accent }}
// //             onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "var(--text-muted)" }}
// //           >↓</button>
// //         </div>
// //       </div>

// //       {/* SQL slide */}
// //       <div style={{ maxHeight: sqlOpen ? "160px" : "0", overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)", flexShrink: 0, position: "relative", zIndex: 1 }}>
// //         <div style={{ padding: "12px 24px 14px", background: "rgba(0,0,0,0.5)", borderTop: "1px solid rgba(167,139,250,0.1)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
// //           <pre style={{ fontSize: "11px", color: "#a78bfa", fontFamily: "'Fira Code','Consolas',monospace", lineHeight: 1.75, overflowX: "auto", margin: 0 }}>{chart.sql}</pre>
// //         </div>
// //       </div>

// //       {/* Divider */}
// //       <div style={{ height: "1px", margin: "0 24px", background: `linear-gradient(90deg, transparent, ${accent}22, transparent)`, flexShrink: 0, position: "relative", zIndex: 1 }} />

// //       {/* Chart */}
// //       <div style={{ padding: "12px 20px 20px", flex: 1, position: "relative", zIndex: 1 }}>
// //         <ChartRenderer type={chart.chart} data={chart.data} columns={chart.columns} size={size} accent={accent} />
// //       </div>
// //     </div>
// //   )
// // }

// // // ── Main Dashboard ────────────────────────────────────────────────────
// // export default function DashboardGrid({ result }: DashboardGridProps) {
// //   const { primary_chart, additional_charts, insights } = result
// //   const [visible, setVisible] = useState(false)
// //   const dashboardId = "axiom-dashboard"
// //   useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t) }, [])

// //   const insightLines = insights ? insights.split(/\n+/).filter((l: string) => l.trim()) : []
// //   const pieCharts = additional_charts?.filter((c: any) => c.chart === "pie" || c.chart === "donut") || []
// //   const otherCharts = additional_charts?.filter((c: any) => c.chart !== "pie" && c.chart !== "donut") || []
// //   const allChartData = [
// //     ...(primary_chart?.data || []),
// //     ...(additional_charts?.flatMap((c: any) => c.data || []) || []),
// //   ]

// //   return (
// //     <div id={dashboardId}>

// //       {/* ── Top toolbar ── */}
// //       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
// //         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
// //           <div style={{ width: "3px", height: "28px", background: "linear-gradient(180deg, #e1325a, #a78bfa)", borderRadius: "2px" }} />
// //           <div>
// //             <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.12em", fontFamily: "var(--font-display)", fontWeight: 600 }}>DASHBOARD OVERVIEW</p>
// //             <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "2px", fontWeight: 400 }}>
// //               {insightLines.length} metrics · {(additional_charts?.length || 0) + 1} charts
// //             </p>
// //           </div>
// //         </div>
// //         <ExportBar result={result} dashboardId={dashboardId} />
// //       </div>

// //       {/* ── KPI Bento Row ── */}
// //       {insightLines.length > 0 && (
// //         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", marginBottom: "16px" }}>
// //           {insightLines.slice(0, 5).map((line: string, i: number) => (
// //             <KpiCard key={i} line={line} index={i} visible={visible} />
// //           ))}
// //         </div>
// //       )}

// //       {/* ── Bento Chart Grid ── */}
// //       <div style={{
// //         display: "grid",
// //         gridTemplateColumns: "repeat(4, 1fr)",
// //         gap: "14px",
// //         gridAutoRows: "minmax(320px, auto)",
// //       }}>

// //         {/* Primary chart — full width */}
// //         <ChartCard chart={primary_chart} colSpan={4} rowSpan={1} index={0} visible={visible} allChartData={allChartData} />

// //         {/* Layout logic for additional charts */}
// //         {(() => {
// //           const items: React.ReactElement[] = []
// //           let idx = 1

// //           // If we have both pie and bar/line, do 50/50 split
// //           if (pieCharts.length > 0 && otherCharts.length > 0) {
// //             // First pair: bar (2 cols) + pie (2 cols)
// //             if (otherCharts[0]) {
// //               items.push(<ChartCard key={`other-0`} chart={otherCharts[0]} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />)
// //             }
// //             if (pieCharts[0]) {
// //               items.push(<ChartCard key={`pie-0`} chart={pieCharts[0]} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />)
// //             }
// //             // Remaining others — 2 cols each
// //             otherCharts.slice(1).forEach((c: any, i: number) => {
// //               items.push(<ChartCard key={`other-${i+1}`} chart={c} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />)
// //             })
// //             // Remaining pies — 2 cols each (or 1 col if many)
// //             const remainPies = pieCharts.slice(1)
// //             if (remainPies.length === 3) {
// //               remainPies.forEach((c: any, i: number) => items.push(<ChartCard key={`pie-${i+1}`} chart={c} colSpan={Math.floor(4/remainPies.length) as any} index={idx++} visible={visible} allChartData={allChartData} />))
// //             } else {
// //               remainPies.forEach((c: any, i: number) => items.push(<ChartCard key={`pie-${i+1}`} chart={c} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />))
// //             }
// //           } else if (pieCharts.length > 0) {
// //             // Only pies — 2 cols each, 3 in a row
// //             pieCharts.forEach((c: any, i: number) => {
// //               const span = pieCharts.length === 1 ? 4 : pieCharts.length === 2 ? 2 : pieCharts.length === 3 ? (4/3 >= 1 ? 1 : 2) : 2
// //               items.push(<ChartCard key={`pie-${i}`} chart={c} colSpan={pieCharts.length <= 2 ? 2 : 1} index={idx++} visible={visible} allChartData={allChartData} />)
// //             })
// //           } else {
// //             // Only bar/line/area
// //             otherCharts.forEach((c: any, i: number) => {
// //               items.push(<ChartCard key={`other-${i}`} chart={c} colSpan={otherCharts.length === 1 ? 4 : 2} index={idx++} visible={visible} allChartData={allChartData} />)
// //             })
// //           }

// //           return items
// //         })()}
// //       </div>

// //       {/* ── Insights Footer ── */}
// //       {insightLines.length > 5 && (
// //         <div style={{ marginTop: "14px", background: "linear-gradient(145deg, #180e13, #110a0e)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "18px", padding: "24px 28px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: "all 0.5s ease 0.6s" }}>
// //           <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
// //             <div style={{ width: "3px", height: "18px", background: "linear-gradient(180deg, #e1325a, #a78bfa)", borderRadius: "2px" }} />
// //             <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.14em", fontFamily: "var(--font-display)", fontWeight: 600 }}>MORE INSIGHTS</p>
// //           </div>
// //           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
// //             {insightLines.slice(5).map((line: string, i: number) => (
// //               <InsightRow key={i} text={line.replace(/^[-•·]\s*/, "")} />
// //             ))}
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // function InsightRow({ text }: { text: string }) {
// //   const [h, setH] = useState(false)
// //   return (
// //     <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ padding: "12px 16px", display: "flex", alignItems: "flex-start", gap: "10px", background: h ? "rgba(225,50,90,0.06)" : "rgba(255,255,255,0.02)", border: `1px solid ${h ? "rgba(225,50,90,0.2)" : "rgba(255,255,255,0.05)"}`, borderRadius: "10px", transition: "all 0.2s", cursor: "default" }}>
// //       <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#e1325a", marginTop: "6px", flexShrink: 0, boxShadow: h ? "0 0 8px #e1325a" : "none", transition: "box-shadow 0.2s" }} />
// //       <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 400 }}>{text}</p>
// //     </div>
// //   )
// // }

// "use client"

// import React, { useState, useEffect, useRef } from "react"
// import ChartRenderer from "./ChartRenderer"

// interface DashboardGridProps {
//   result: {
//     primary_chart: any
//     additional_charts: any[]
//     insights: string
//   }
// }

// // ── Animated counter ──────────────────────────────────────────────────
// function useCounter(target: number, duration = 1400) {
//   const [val, setVal] = useState(0)
//   useEffect(() => {
//     if (!target) return
//     let frame = 0
//     const steps = 55
//     const timer = setInterval(() => {
//       frame++
//       const progress = frame / steps
//       const eased = 1 - Math.pow(1 - progress, 3)
//       setVal(Math.floor(target * eased))
//       if (frame >= steps) { setVal(target); clearInterval(timer) }
//     }, duration / steps)
//     return () => clearInterval(timer)
//   }, [target, duration])
//   return val
// }

// // ── Sparkline ─────────────────────────────────────────────────────────
// function Sparkline({ data, color }: { data: number[]; color: string }) {
//   if (!data || data.length < 2) return null
//   const w = 100, h = 36
//   const min = Math.min(...data), max = Math.max(...data)
//   const range = max - min || 1
//   const pts = data.map((v, i) => {
//     const x = (i / (data.length - 1)) * w
//     const y = h - ((v - min) / range) * (h - 4) - 2
//     return `${x.toFixed(1)},${y.toFixed(1)}`
//   }).join(" ")
//   const last = data[data.length - 1]
//   const lastX = w
//   const lastY = h - ((last - min) / range) * (h - 4) - 2
//   const areaD = `M0,${h} L${data.map((v, i) => {
//     const x = (i / (data.length - 1)) * w
//     const y = h - ((v - min) / range) * (h - 4) - 2
//     return `${x.toFixed(1)},${y.toFixed(1)}`
//   }).join(" L")} L${w},${h} Z`

//   return (
//     <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }}>
//       <defs>
//         <linearGradient id={`sp-${color.replace("#","")}`} x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%" stopColor={color} stopOpacity="0.35"/>
//           <stop offset="100%" stopColor={color} stopOpacity="0"/>
//         </linearGradient>
//       </defs>
//       <path d={areaD} fill={`url(#sp-${color.replace("#","")})`} />
//       <polyline points={pts} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
//       <circle cx={lastX} cy={lastY} r="3" fill={color} stroke="#100a0e" strokeWidth="1.5"/>
//     </svg>
//   )
// }

// // ── Export utilities ──────────────────────────────────────────────────
// function exportAsPNG(elementId: string, filename: string) {
//   import("html2canvas").then(({ default: html2canvas }) => {
//     const el = document.getElementById(elementId)
//     if (!el) return
//     html2canvas(el, {
//       backgroundColor: "#0a0608",
//       scale: 2,
//       useCORS: true,
//     }).then(canvas => {
//       const link = document.createElement("a")
//       link.download = `${filename}.png`
//       link.href = canvas.toDataURL("image/png")
//       link.click()
//     })
//   }).catch(() => {
//     // fallback: print
//     window.print()
//   })
// }

// function exportAsCSV(data: any[], filename: string) {
//   if (!data || !data.length) return
//   const cols = Object.keys(data[0])
//   const rows = [cols.join(","), ...data.map(row => cols.map(c => `"${row[c] ?? ""}"`).join(","))]
//   const blob = new Blob([rows.join("\n")], { type: "text/csv" })
//   const link = document.createElement("a")
//   link.download = `${filename}.csv`
//   link.href = URL.createObjectURL(blob)
//   link.click()
// }

// function exportAsJSON(result: any, filename: string) {
//   const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" })
//   const link = document.createElement("a")
//   link.download = `${filename}.json`
//   link.href = URL.createObjectURL(blob)
//   link.click()
// }

// // ── Export Button Bar ─────────────────────────────────────────────────
// function ExportBar({ result, dashboardId }: { result: any; dashboardId: string }) {
//   const [open, setOpen] = useState(false)
//   const allData = [
//     ...(result.primary_chart?.data || []),
//     ...(result.additional_charts?.flatMap((c: any) => c.data || []) || []),
//   ]
//   const title = result.primary_chart?.title || "dashboard"

//   return (
//     <div style={{ position: "relative" }}>
//       <button
//         onClick={() => setOpen(v => !v)}
//         style={{
//           display: "flex", alignItems: "center", gap: "7px",
//           padding: "9px 18px",
//           background: "linear-gradient(135deg, rgba(225,50,90,0.15), rgba(167,139,250,0.1))",
//           border: "1px solid rgba(225,50,90,0.3)",
//           borderRadius: "10px", color: "#fdf0f3",
//           fontSize: "13px", fontWeight: 600,
//           cursor: "pointer", fontFamily: "var(--font-display)",
//           letterSpacing: "0.04em",
//           transition: "all 0.2s",
//           boxShadow: "0 4px 16px rgba(225,50,90,0.15)",
//         }}
//         onMouseOver={e => { e.currentTarget.style.background = "linear-gradient(135deg, rgba(225,50,90,0.25), rgba(167,139,250,0.18))"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(225,50,90,0.25)" }}
//         onMouseOut={e => { e.currentTarget.style.background = "linear-gradient(135deg, rgba(225,50,90,0.15), rgba(167,139,250,0.1))"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(225,50,90,0.15)" }}
//       >
//         <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//           <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
//         </svg>
//         Export
//         <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>
//           <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
//         </svg>
//       </button>

//       {open && (
//         <div style={{
//           position: "absolute", top: "calc(100% + 8px)", right: 0,
//           background: "linear-gradient(145deg, #1e0e16, #160c12)",
//           border: "1px solid rgba(225,50,90,0.2)",
//           borderRadius: "12px", overflow: "hidden",
//           boxShadow: "0 20px 48px rgba(0,0,0,0.6)",
//           zIndex: 50, minWidth: "200px",
//         }}>
//           {[
//             { icon: "🖼", label: "Export as PNG", sub: "High-res screenshot", action: () => { exportAsPNG(dashboardId, title); setOpen(false) } },
//             { icon: "📊", label: "Export as CSV", sub: "Raw data spreadsheet", action: () => { exportAsCSV(allData, title); setOpen(false) } },
//             { icon: "📋", label: "Export as JSON", sub: "Power BI compatible", action: () => { exportAsJSON(result, title); setOpen(false) } },
//             { icon: "🖨", label: "Print / PDF", sub: "Browser print dialog", action: () => { setOpen(false); setTimeout(() => window.print(), 100) } },
//           ].map((item, i) => (
//             <button key={i} onClick={item.action} style={{
//               width: "100%", display: "flex", alignItems: "center", gap: "12px",
//               padding: "12px 16px",
//               background: "transparent",
//               border: "none",
//               borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
//               cursor: "pointer", textAlign: "left",
//               transition: "background 0.15s",
//             }}
//               onMouseOver={e => (e.currentTarget.style.background = "rgba(225,50,90,0.08)")}
//               onMouseOut={e => (e.currentTarget.style.background = "transparent")}
//             >
//               <span style={{ fontSize: "18px" }}>{item.icon}</span>
//               <div>
//                 <p style={{ fontSize: "13px", color: "#fdf0f3", fontWeight: 600, fontFamily: "var(--font-display)", margin: 0 }}>{item.label}</p>
//                 <p style={{ fontSize: "11px", color: "var(--text-muted)", margin: 0, marginTop: "2px" }}>{item.sub}</p>
//               </div>
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// // ── KPI Themes ────────────────────────────────────────────────────────
// const KPI_THEMES = [
//   { accent: "#e1325a", bg: "rgba(225,50,90,0.08)", border: "rgba(225,50,90,0.2)", glow: "rgba(225,50,90,0.3)" },
//   { accent: "#a78bfa", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)", glow: "rgba(167,139,250,0.3)" },
//   { accent: "#2dd4bf", bg: "rgba(45,212,191,0.08)", border: "rgba(45,212,191,0.2)", glow: "rgba(45,212,191,0.3)" },
//   { accent: "#f0c060", bg: "rgba(240,192,96,0.08)", border: "rgba(240,192,96,0.2)", glow: "rgba(240,192,96,0.3)" },
//   { accent: "#fb923c", bg: "rgba(251,146,60,0.08)", border: "rgba(251,146,60,0.2)", glow: "rgba(251,146,60,0.3)" },
// ]

// function extractNum(text: string) {
//   const m = text.match(/([\$£€₹]?)\s*([\d,]+(?:\.\d+)?)\s*([%kKmMbBT]?)/)
//   if (!m) return null
//   return {
//     prefix: m[1] || "",
//     num: parseFloat(m[2].replace(/,/g, "")),
//     suffix: m[3] || "",
//     label: text.replace(m[0], "").replace(/^[:\s\-–]+/, "").trim(),
//     original: m[0].trim(),
//   }
// }

// function KpiCard({ line, index, visible }: { line: string; index: number; visible: boolean }) {
//   const [hovered, setHovered] = useState(false)
//   const theme = KPI_THEMES[index % KPI_THEMES.length]
//   const clean = line.replace(/^[-•·\d.*]\s*/, "").trim()
//   const extracted = extractNum(clean)
//   const hasNumber = extracted !== null && extracted.num > 0
//   const count = useCounter(hasNumber ? extracted!.num : 0, 1500)

//   // Only show sparkline when there's a real number
//   const spark = hasNumber ? Array.from({ length: 12 }, (_, i) =>
//     extracted!.num * (0.55 + Math.sin(i * 0.9 + index * 1.3) * 0.28 + (i / 12) * 0.17)
//   ) : []

//   const displayNum = hasNumber
//     ? extracted!.prefix + (count >= 1000 ? count.toLocaleString() : count) + extracted!.suffix
//     : null

//   // For text-only insights, find a short headline (first ~4 words) + rest as body
//   const words = clean.split(" ")
//   const headline = words.slice(0, 4).join(" ")
//   const body = words.slice(4).join(" ")

//   return (
//     <div
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         padding: "22px 24px 20px",
//         background: hovered
//           ? `linear-gradient(145deg, ${theme.bg.replace("0.08","0.14")}, rgba(0,0,0,0.2))`
//           : `linear-gradient(145deg, ${theme.bg}, rgba(0,0,0,0.15))`,
//         border: `1px solid ${hovered ? theme.accent + "66" : theme.border}`,
//         borderRadius: "18px", position: "relative", overflow: "hidden",
//         cursor: "default",
//         transform: visible ? (hovered ? "translateY(-4px) scale(1.01)" : "translateY(0)") : "translateY(24px) scale(0.97)",
//         opacity: visible ? 1 : 0,
//         transition: `all 0.5s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.07}s`,
//         boxShadow: hovered ? `0 16px 40px ${theme.glow.replace("0.3","0.18")}, inset 0 1px 0 rgba(255,255,255,0.07)` : "0 2px 16px rgba(0,0,0,0.3)",
//       }}
//     >
//       {/* Top accent bar */}
//       <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent}44, transparent)`, transformOrigin: "left", transform: `scaleX(${hovered ? 1 : 0.5})`, transition: "transform 0.4s ease" }} />
//       {/* Corner orb */}
//       <div style={{ position: "absolute", top: "-24px", right: "-24px", width: "90px", height: "90px", borderRadius: "50%", background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`, opacity: hovered ? 1 : 0.5, transition: "opacity 0.4s", pointerEvents: "none" }} />

//       {hasNumber ? (
//         /* ── Numeric KPI layout ── */
//         <>
//           {/* Label: text around the number */}
//           <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.14em", marginBottom: "10px", fontFamily: "var(--font-display)", fontWeight: 600, position: "relative", textTransform: "uppercase" }}>
//             {(extracted!.label || clean).slice(0, 26) || "METRIC"}
//           </p>
//           <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "10px" }}>
//             <p style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 800, color: "#fdf0f3", letterSpacing: "-0.04em", lineHeight: 1, position: "relative", textShadow: hovered ? `0 0 32px ${theme.glow}` : "none", transition: "text-shadow 0.3s" }}>
//               {displayNum}
//             </p>
//             <div style={{ opacity: hovered ? 1 : 0.6, transition: "opacity 0.3s", flexShrink: 0, paddingBottom: "4px" }}>
//               <Sparkline data={spark} color={theme.accent} />
//             </div>
//           </div>
//           <div style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "12px", padding: "3px 8px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "100px", opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(4px)", transition: "all 0.3s" }}>
//             <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 7L5 3l3 4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
//             <span style={{ fontSize: "10px", color: "#22c55e", letterSpacing: "0.06em", fontWeight: 600 }}>TRENDING</span>
//           </div>
//         </>
//       ) : (
//         /* ── Text insight layout ── */
//         <>
//           {/* Insight icon */}
//           <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", position: "relative" }}>
//             <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: `${theme.accent}20`, border: `1px solid ${theme.accent}44`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
//               <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                 <circle cx="6" cy="6" r="4" stroke={theme.accent} strokeWidth="1.4"/>
//                 <path d="M6 4v2.5M6 8v.5" stroke={theme.accent} strokeWidth="1.4" strokeLinecap="round"/>
//               </svg>
//             </div>
//             <p style={{ fontSize: "10px", color: theme.accent, letterSpacing: "0.12em", fontFamily: "var(--font-display)", fontWeight: 700 }}>INSIGHT</p>
//           </div>
//           {/* Full insight text — readable */}
//           <p style={{ fontSize: "13px", color: "#fdf0f3", lineHeight: 1.65, fontWeight: 500, position: "relative" }}>
//             {clean}
//           </p>
//         </>
//       )}
//     </div>
//   )
// }

// // ── Chart Card ────────────────────────────────────────────────────────
// const ACCENTS = ["#e1325a", "#a78bfa", "#2dd4bf", "#f0c060", "#fb923c", "#34d399"]

// function ChartCard({ chart, colSpan = 1, rowSpan = 1, index, visible, allChartData }: {
//   chart: any; colSpan?: number; rowSpan?: number; index: number; visible: boolean; allChartData?: any[]
// }) {
//   const [sqlOpen, setSqlOpen] = useState(false)
//   const [hovered, setHovered] = useState(false)
//   const accent = ACCENTS[index % ACCENTS.length]
//   if (!chart) return null

//   const size = colSpan >= 2 ? "large" : (chart.chart === "pie" || chart.chart === "donut") ? "pie" : "small"

//   return (
//     <div
//       id={`chart-card-${index}`}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         gridColumn: `span ${colSpan}`,
//         gridRow: `span ${rowSpan}`,
//         background: "linear-gradient(145deg, #180e13 0%, #110a0e 100%)",
//         border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.07)"}`,
//         borderRadius: "20px", overflow: "hidden",
//         opacity: visible ? 1 : 0,
//         transform: visible ? (hovered ? "translateY(-2px)" : "translateY(0)") : "translateY(24px)",
//         transition: `opacity 0.5s ease ${0.1 + index * 0.07}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.1 + index * 0.07}s, border-color 0.25s, box-shadow 0.3s`,
//         boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${accent}22` : "0 4px 24px rgba(0,0,0,0.3)",
//         position: "relative", display: "flex", flexDirection: "column",
//       }}
//     >
//       {/* Accent top bar */}
//       <div style={{ height: "3px", background: `linear-gradient(90deg, ${accent}, ${accent}66, transparent)`, transformOrigin: "left", transform: `scaleX(${hovered ? 1 : 0.35})`, transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1)", flexShrink: 0 }} />

//       {/* Corner glow */}
//       <div style={{ position: "absolute", top: 0, right: 0, width: "180px", height: "180px", background: `radial-gradient(circle at top right, ${accent}10, transparent 65%)`, pointerEvents: "none", opacity: hovered ? 1 : 0, transition: "opacity 0.4s", zIndex: 0 }} />

//       {/* Header */}
//       <div style={{ padding: "20px 24px 12px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", position: "relative", zIndex: 1, flexShrink: 0 }}>
//         <div>
//           <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#fdf0f3", fontSize: colSpan >= 2 ? "20px" : "16px", letterSpacing: "-0.02em", marginBottom: "6px", lineHeight: 1.2 }}>
//             {chart.title}
//           </h3>
//           <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
//             <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: accent, boxShadow: `0 0 8px ${accent}` }} />
//             <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em", fontWeight: 500 }}>
//               {chart.data?.length || 0} RECORDS
//             </span>
//           </div>
//         </div>

//         <div style={{ display: "flex", gap: "7px", alignItems: "center", flexShrink: 0 }}>
//           <div style={{ padding: "4px 10px", background: hovered ? `${accent}22` : "rgba(255,255,255,0.04)", border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.08)"}`, borderRadius: "8px", transition: "all 0.25s" }}>
//             <span style={{ fontSize: "10px", color: hovered ? accent : "var(--text-muted)", letterSpacing: "0.08em", fontWeight: 600, transition: "color 0.25s" }}>
//               {({"bar":"▊ BAR","line":"∿ LINE","area":"◬ AREA","pie":"◔ PIE","donut":"◯ DONUT"} as Record<string,string>)[chart.chart as string] ?? "⊞ TABLE"}
//             </span>
//           </div>
//           {chart.sql && (
//             <button onClick={() => setSqlOpen(v => !v)} style={{ padding: "4px 10px", background: sqlOpen ? "rgba(167,139,250,0.15)" : "transparent", border: `1px solid ${sqlOpen ? "rgba(167,139,250,0.4)" : "rgba(255,255,255,0.08)"}`, borderRadius: "8px", fontSize: "10px", color: sqlOpen ? "#a78bfa" : "var(--text-muted)", cursor: "pointer", fontFamily: "var(--font-body)", letterSpacing: "0.06em", fontWeight: 600, transition: "all 0.2s" }}>
//               {sqlOpen ? "▲ SQL" : "▼ SQL"}
//             </button>
//           )}
//           {/* Per-chart CSV export */}
//           <button onClick={() => exportAsCSV(chart.data || [], chart.title || "chart")} title="Export chart data" style={{ padding: "4px 8px", background: "transparent", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", cursor: "pointer", color: "var(--text-muted)", transition: "all 0.2s", fontSize: "12px" }}
//             onMouseOver={e => { e.currentTarget.style.borderColor = `${accent}44`; e.currentTarget.style.color = accent }}
//             onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "var(--text-muted)" }}
//           >↓</button>
//         </div>
//       </div>

//       {/* SQL slide */}
//       <div style={{ maxHeight: sqlOpen ? "160px" : "0", overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)", flexShrink: 0, position: "relative", zIndex: 1 }}>
//         <div style={{ padding: "12px 24px 14px", background: "rgba(0,0,0,0.5)", borderTop: "1px solid rgba(167,139,250,0.1)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
//           <pre style={{ fontSize: "11px", color: "#a78bfa", fontFamily: "'Fira Code','Consolas',monospace", lineHeight: 1.75, overflowX: "auto", margin: 0 }}>{chart.sql}</pre>
//         </div>
//       </div>

//       {/* Divider */}
//       <div style={{ height: "1px", margin: "0 24px", background: `linear-gradient(90deg, transparent, ${accent}22, transparent)`, flexShrink: 0, position: "relative", zIndex: 1 }} />

//       {/* Chart */}
//       <div style={{ padding: "12px 20px 20px", flex: 1, position: "relative", zIndex: 1 }}>
//         <ChartRenderer type={chart.chart} data={chart.data} columns={chart.columns} size={size} accent={accent} />
//       </div>
//     </div>
//   )
// }

// // ── Main Dashboard ────────────────────────────────────────────────────
// export default function DashboardGrid({ result }: DashboardGridProps) {
//   const { primary_chart, additional_charts, insights } = result
//   const [visible, setVisible] = useState(false)
//   const dashboardId = "axiom-dashboard"
//   useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t) }, [])

//   const insightLines = insights ? insights.split(/\n+/).filter((l: string) => l.trim()) : []
//   const pieCharts = additional_charts?.filter((c: any) => c.chart === "pie" || c.chart === "donut") || []
//   const otherCharts = additional_charts?.filter((c: any) => c.chart !== "pie" && c.chart !== "donut") || []
//   const allChartData = [
//     ...(primary_chart?.data || []),
//     ...(additional_charts?.flatMap((c: any) => c.data || []) || []),
//   ]

//   return (
//     <div id={dashboardId}>

//       {/* ── Top toolbar ── */}
//       <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
//         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//           <div style={{ width: "3px", height: "28px", background: "linear-gradient(180deg, #e1325a, #a78bfa)", borderRadius: "2px" }} />
//           <div>
//             <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.12em", fontFamily: "var(--font-display)", fontWeight: 600 }}>DASHBOARD OVERVIEW</p>
//             <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "2px", fontWeight: 400 }}>
//               {insightLines.length} metrics · {(additional_charts?.length || 0) + 1} charts
//             </p>
//           </div>
//         </div>
//         <ExportBar result={result} dashboardId={dashboardId} />
//       </div>

//       {/* ── KPI Bento Row ── */}
//       {insightLines.length > 0 && (
//         <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", marginBottom: "16px" }}>
//           {insightLines.slice(0, 5).map((line: string, i: number) => (
//             <KpiCard key={i} line={line} index={i} visible={visible} />
//           ))}
//         </div>
//       )}

//       {/* ── Bento Chart Grid ── */}
//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(4, 1fr)",
//         gap: "14px",
//         gridAutoRows: "minmax(320px, auto)",
//       }}>

//         {/* Primary chart — full width */}
//         <ChartCard chart={primary_chart} colSpan={4} rowSpan={1} index={0} visible={visible} allChartData={allChartData} />

//         {/* Layout logic for additional charts */}
//         {(() => {
//           const items: React.ReactElement[] = []
//           let idx = 1

//           // If we have both pie and bar/line, do 50/50 split
//           if (pieCharts.length > 0 && otherCharts.length > 0) {
//             // First pair: bar (2 cols) + pie (2 cols)
//             if (otherCharts[0]) {
//               items.push(<ChartCard key={`other-0`} chart={otherCharts[0]} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />)
//             }
//             if (pieCharts[0]) {
//               items.push(<ChartCard key={`pie-0`} chart={pieCharts[0]} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />)
//             }
//             // Remaining others — 2 cols each
//             otherCharts.slice(1).forEach((c: any, i: number) => {
//               items.push(<ChartCard key={`other-${i+1}`} chart={c} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />)
//             })
//             // Remaining pies — 2 cols each (or 1 col if many)
//             const remainPies = pieCharts.slice(1)
//             if (remainPies.length === 3) {
//               remainPies.forEach((c: any, i: number) => items.push(<ChartCard key={`pie-${i+1}`} chart={c} colSpan={Math.floor(4/remainPies.length) as any} index={idx++} visible={visible} allChartData={allChartData} />))
//             } else {
//               remainPies.forEach((c: any, i: number) => items.push(<ChartCard key={`pie-${i+1}`} chart={c} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />))
//             }
//           } else if (pieCharts.length > 0) {
//             // Only pies — 2 cols each, 3 in a row
//             pieCharts.forEach((c: any, i: number) => {
//               const span = pieCharts.length === 1 ? 4 : pieCharts.length === 2 ? 2 : pieCharts.length === 3 ? (4/3 >= 1 ? 1 : 2) : 2
//               items.push(<ChartCard key={`pie-${i}`} chart={c} colSpan={pieCharts.length <= 2 ? 2 : 1} index={idx++} visible={visible} allChartData={allChartData} />)
//             })
//           } else {
//             // Only bar/line/area
//             otherCharts.forEach((c: any, i: number) => {
//               items.push(<ChartCard key={`other-${i}`} chart={c} colSpan={otherCharts.length === 1 ? 4 : 2} index={idx++} visible={visible} allChartData={allChartData} />)
//             })
//           }

//           return items
//         })()}
//       </div>

//       {/* ── Insights Footer ── */}
//       {insightLines.length > 5 && (
//         <div style={{ marginTop: "14px", background: "linear-gradient(145deg, #180e13, #110a0e)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "18px", padding: "24px 28px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: "all 0.5s ease 0.6s" }}>
//           <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
//             <div style={{ width: "3px", height: "18px", background: "linear-gradient(180deg, #e1325a, #a78bfa)", borderRadius: "2px" }} />
//             <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.14em", fontFamily: "var(--font-display)", fontWeight: 600 }}>MORE INSIGHTS</p>
//           </div>
//           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
//             {insightLines.slice(5).map((line: string, i: number) => (
//               <InsightRow key={i} text={line.replace(/^[-•·]\s*/, "")} />
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// function InsightRow({ text }: { text: string }) {
//   const [h, setH] = useState(false)
//   return (
//     <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ padding: "12px 16px", display: "flex", alignItems: "flex-start", gap: "10px", background: h ? "rgba(225,50,90,0.06)" : "rgba(255,255,255,0.02)", border: `1px solid ${h ? "rgba(225,50,90,0.2)" : "rgba(255,255,255,0.05)"}`, borderRadius: "10px", transition: "all 0.2s", cursor: "default" }}>
//       <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#e1325a", marginTop: "6px", flexShrink: 0, boxShadow: h ? "0 0 8px #e1325a" : "none", transition: "box-shadow 0.2s" }} />
//       <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 400 }}>{text}</p>
//     </div>
//   )
// }
"use client"

import React, { useState, useEffect, useRef } from "react"
import ChartRenderer from "./ChartRenderer"

interface DashboardGridProps {
  result: {
    primary_chart: any
    additional_charts: any[]
    insights: string
  }
}

// ── Animated counter ──────────────────────────────────────────────────
function useCounter(target: number, duration = 1400) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!target) return
    let frame = 0
    const steps = 55
    const timer = setInterval(() => {
      frame++
      const progress = frame / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(Math.floor(target * eased))
      if (frame >= steps) { setVal(target); clearInterval(timer) }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [target, duration])
  return val
}

// ── Sparkline ─────────────────────────────────────────────────────────
function Sparkline({ data, color }: { data: number[]; color: string }) {
  if (!data || data.length < 2) return null
  const w = 100, h = 36
  const min = Math.min(...data), max = Math.max(...data)
  const range = max - min || 1
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - ((v - min) / range) * (h - 4) - 2
    return `${x.toFixed(1)},${y.toFixed(1)}`
  }).join(" ")
  const last = data[data.length - 1]
  const lastX = w
  const lastY = h - ((last - min) / range) * (h - 4) - 2
  const areaD = `M0,${h} L${data.map((v, i) => {
    const x = (i / (data.length - 1)) * w
    const y = h - ((v - min) / range) * (h - 4) - 2
    return `${x.toFixed(1)},${y.toFixed(1)}`
  }).join(" L")} L${w},${h} Z`

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: "visible" }}>
      <defs>
        <linearGradient id={`sp-${color.replace("#","")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35"/>
          <stop offset="100%" stopColor={color} stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={areaD} fill={`url(#sp-${color.replace("#","")})`} />
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx={lastX} cy={lastY} r="3" fill={color} stroke="#100a0e" strokeWidth="1.5"/>
    </svg>
  )
}

// ── Export utilities ──────────────────────────────────────────────────
function exportAsPNG(elementId: string, filename: string) {
  import("html2canvas").then(({ default: html2canvas }) => {
    const el = document.getElementById(elementId)
    if (!el) return
    html2canvas(el, {
      backgroundColor: "#0a0608",
      scale: 2,
      useCORS: true,
    }).then(canvas => {
      const link = document.createElement("a")
      link.download = `${filename}.png`
      link.href = canvas.toDataURL("image/png")
      link.click()
    })
  }).catch(() => {
    // fallback: print
    window.print()
  })
}

function exportAsCSV(data: any[], filename: string) {
  if (!data || !data.length) return
  const cols = Object.keys(data[0])
  const rows = [cols.join(","), ...data.map(row => cols.map(c => `"${row[c] ?? ""}"`).join(","))]
  const blob = new Blob([rows.join("\n")], { type: "text/csv" })
  const link = document.createElement("a")
  link.download = `${filename}.csv`
  link.href = URL.createObjectURL(blob)
  link.click()
}

function exportAsJSON(result: any, filename: string) {
  const blob = new Blob([JSON.stringify(result, null, 2)], { type: "application/json" })
  const link = document.createElement("a")
  link.download = `${filename}.json`
  link.href = URL.createObjectURL(blob)
  link.click()
}

// ── Export Button Bar ─────────────────────────────────────────────────
function ExportBar({ result, dashboardId }: { result: any; dashboardId: string }) {
  const [open, setOpen] = useState(false)
  const allData = [
    ...(result.primary_chart?.data || []),
    ...(result.additional_charts?.flatMap((c: any) => c.data || []) || []),
  ]
  const title = result.primary_chart?.title || "dashboard"

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          display: "flex", alignItems: "center", gap: "7px",
          padding: "9px 18px",
          background: "linear-gradient(135deg, rgba(225,50,90,0.15), rgba(167,139,250,0.1))",
          border: "1px solid rgba(225,50,90,0.3)",
          borderRadius: "10px", color: "#fdf0f3",
          fontSize: "13px", fontWeight: 600,
          cursor: "pointer", fontFamily: "var(--font-display)",
          letterSpacing: "0.04em",
          transition: "all 0.2s",
          boxShadow: "0 4px 16px rgba(225,50,90,0.15)",
        }}
        onMouseOver={e => { e.currentTarget.style.background = "linear-gradient(135deg, rgba(225,50,90,0.25), rgba(167,139,250,0.18))"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(225,50,90,0.25)" }}
        onMouseOut={e => { e.currentTarget.style.background = "linear-gradient(135deg, rgba(225,50,90,0.15), rgba(167,139,250,0.1))"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(225,50,90,0.15)" }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Export
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transform: open ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.2s" }}>
          <path d="M2 3.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 8px)", right: 0,
          background: "linear-gradient(145deg, #1e0e16, #160c12)",
          border: "1px solid rgba(225,50,90,0.2)",
          borderRadius: "12px", overflow: "hidden",
          boxShadow: "0 20px 48px rgba(0,0,0,0.6)",
          zIndex: 50, minWidth: "200px",
        }}>
          {[
            { icon: "🖼", label: "Export as PNG", sub: "High-res screenshot", action: () => { exportAsPNG(dashboardId, title); setOpen(false) } },
            { icon: "📊", label: "Export as CSV", sub: "Raw data spreadsheet", action: () => { exportAsCSV(allData, title); setOpen(false) } },
            { icon: "📋", label: "Export as JSON", sub: "Power BI compatible", action: () => { exportAsJSON(result, title); setOpen(false) } },
            { icon: "🖨", label: "Print / PDF", sub: "Browser print dialog", action: () => { setOpen(false); setTimeout(() => window.print(), 100) } },
          ].map((item, i) => (
            <button key={i} onClick={item.action} style={{
              width: "100%", display: "flex", alignItems: "center", gap: "12px",
              padding: "12px 16px",
              background: "transparent",
              border: "none",
              borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none",
              cursor: "pointer", textAlign: "left",
              transition: "background 0.15s",
            }}
              onMouseOver={e => (e.currentTarget.style.background = "rgba(225,50,90,0.08)")}
              onMouseOut={e => (e.currentTarget.style.background = "transparent")}
            >
              <span style={{ fontSize: "18px" }}>{item.icon}</span>
              <div>
                <p style={{ fontSize: "13px", color: "#fdf0f3", fontWeight: 600, fontFamily: "var(--font-display)", margin: 0 }}>{item.label}</p>
                <p style={{ fontSize: "11px", color: "var(--text-muted)", margin: 0, marginTop: "2px" }}>{item.sub}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

// ── KPI Themes ────────────────────────────────────────────────────────
const KPI_THEMES = [
  { accent: "#e1325a", bg: "rgba(225,50,90,0.08)", border: "rgba(225,50,90,0.2)", glow: "rgba(225,50,90,0.3)" },
  { accent: "#a78bfa", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)", glow: "rgba(167,139,250,0.3)" },
  { accent: "#2dd4bf", bg: "rgba(45,212,191,0.08)", border: "rgba(45,212,191,0.2)", glow: "rgba(45,212,191,0.3)" },
  { accent: "#f0c060", bg: "rgba(240,192,96,0.08)", border: "rgba(240,192,96,0.2)", glow: "rgba(240,192,96,0.3)" },
  { accent: "#fb923c", bg: "rgba(251,146,60,0.08)", border: "rgba(251,146,60,0.2)", glow: "rgba(251,146,60,0.3)" },
]

function extractNum(text: string) {
  const m = text.match(/([\$£€₹]?)\s*([\d,]+(?:\.\d+)?)\s*([%kKmMbBT]?)/)
  if (!m) return null
  return {
    prefix: m[1] || "",
    num: parseFloat(m[2].replace(/,/g, "")),
    suffix: m[3] || "",
    label: text.replace(m[0], "").replace(/^[:\s\-–]+/, "").trim(),
    original: m[0].trim(),
  }
}

function KpiCard({ line, index, visible }: { line: string; index: number; visible: boolean }) {
  const [hovered, setHovered] = useState(false)
  const theme = KPI_THEMES[index % KPI_THEMES.length]
  const clean = line.replace(/^[-•·\d.*]\s*/, "").trim()
  const extracted = extractNum(clean)
  const hasNumber = extracted !== null && extracted.num > 0
  const count = useCounter(hasNumber ? extracted!.num : 0, 1500)

  // Only show sparkline when there's a real number
  const spark = hasNumber ? Array.from({ length: 12 }, (_, i) =>
    extracted!.num * (0.55 + Math.sin(i * 0.9 + index * 1.3) * 0.28 + (i / 12) * 0.17)
  ) : []

  const displayNum = hasNumber
    ? extracted!.prefix + (count >= 1000 ? count.toLocaleString() : count) + extracted!.suffix
    : null

  // For text-only insights, find a short headline (first ~4 words) + rest as body
  const words = clean.split(" ")
  const headline = words.slice(0, 4).join(" ")
  const body = words.slice(4).join(" ")

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "22px 24px 20px",
        background: hovered
          ? `linear-gradient(145deg, ${theme.bg.replace("0.08","0.14")}, rgba(0,0,0,0.2))`
          : `linear-gradient(145deg, ${theme.bg}, rgba(0,0,0,0.15))`,
        border: `1px solid ${hovered ? theme.accent + "66" : theme.border}`,
        borderRadius: "18px", position: "relative", overflow: "hidden",
        cursor: "default",
        transform: visible ? (hovered ? "translateY(-4px) scale(1.01)" : "translateY(0)") : "translateY(24px) scale(0.97)",
        opacity: visible ? 1 : 0,
        transition: `all 0.5s cubic-bezier(0.34,1.56,0.64,1) ${index * 0.07}s`,
        boxShadow: hovered ? `0 16px 40px ${theme.glow.replace("0.3","0.18")}, inset 0 1px 0 rgba(255,255,255,0.07)` : "0 2px 16px rgba(0,0,0,0.3)",
      }}
    >
      {/* Top accent bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: `linear-gradient(90deg, ${theme.accent}, ${theme.accent}44, transparent)`, transformOrigin: "left", transform: `scaleX(${hovered ? 1 : 0.5})`, transition: "transform 0.4s ease" }} />
      {/* Corner orb */}
      <div style={{ position: "absolute", top: "-24px", right: "-24px", width: "90px", height: "90px", borderRadius: "50%", background: `radial-gradient(circle, ${theme.glow} 0%, transparent 70%)`, opacity: hovered ? 1 : 0.5, transition: "opacity 0.4s", pointerEvents: "none" }} />

      {hasNumber ? (
        /* ── Numeric KPI layout ── */
        <>
          {/* Label: text around the number */}
          <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.14em", marginBottom: "10px", fontFamily: "var(--font-display)", fontWeight: 600, position: "relative", textTransform: "uppercase" }}>
            {(extracted!.label || clean).slice(0, 26) || "METRIC"}
          </p>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "10px" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "36px", fontWeight: 800, color: "#fdf0f3", letterSpacing: "-0.04em", lineHeight: 1, position: "relative", textShadow: hovered ? `0 0 32px ${theme.glow}` : "none", transition: "text-shadow 0.3s" }}>
              {displayNum}
            </p>
            <div style={{ opacity: hovered ? 1 : 0.6, transition: "opacity 0.3s", flexShrink: 0, paddingBottom: "4px" }}>
              <Sparkline data={spark} color={theme.accent} />
            </div>
          </div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "4px", marginTop: "12px", padding: "3px 8px", background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", borderRadius: "100px", opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(4px)", transition: "all 0.3s" }}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 7L5 3l3 4" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            <span style={{ fontSize: "10px", color: "#22c55e", letterSpacing: "0.06em", fontWeight: 600 }}>TRENDING</span>
          </div>
        </>
      ) : (
        /* ── Text insight layout ── */
        <>
          {/* Insight icon */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", position: "relative" }}>
            <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: `${theme.accent}20`, border: `1px solid ${theme.accent}44`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="4" stroke={theme.accent} strokeWidth="1.4"/>
                <path d="M6 4v2.5M6 8v.5" stroke={theme.accent} strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <p style={{ fontSize: "10px", color: theme.accent, letterSpacing: "0.12em", fontFamily: "var(--font-display)", fontWeight: 700 }}>INSIGHT</p>
          </div>
          {/* Full insight text — readable */}
          <p style={{ fontSize: "13px", color: "#fdf0f3", lineHeight: 1.65, fontWeight: 500, position: "relative" }}>
            {clean}
          </p>
        </>
      )}
    </div>
  )
}

// ── Chart Card ────────────────────────────────────────────────────────
const ACCENTS = ["#e1325a", "#a78bfa", "#2dd4bf", "#f0c060", "#fb923c", "#34d399"]

function ChartCard({ chart, colSpan = 1, rowSpan = 1, index, visible, allChartData }: {
  chart: any; colSpan?: number; rowSpan?: number; index: number; visible: boolean; allChartData?: any[]
}) {
  const [sqlOpen, setSqlOpen] = useState(false)
  const [hovered, setHovered] = useState(false)
  const accent = ACCENTS[index % ACCENTS.length]
  if (!chart) return null

  const size = colSpan >= 2 ? "large" : (chart.chart === "pie" || chart.chart === "donut") ? "pie" : "small"

  return (
    <div
      id={`chart-card-${index}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
        background: "rgba(15,8,12,0.6)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "20px", overflow: "hidden",
        opacity: visible ? 1 : 0,
        transform: visible ? (hovered ? "translateY(-2px)" : "translateY(0)") : "translateY(24px)",
        transition: `opacity 0.5s ease ${0.1 + index * 0.07}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.1 + index * 0.07}s, border-color 0.25s, box-shadow 0.3s`,
        boxShadow: hovered ? `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${accent}22` : "0 4px 24px rgba(0,0,0,0.3)",
        position: "relative", display: "flex", flexDirection: "column",
      }}
    >
      {/* Accent top bar */}
      <div style={{ height: "3px", background: `linear-gradient(90deg, ${accent}, ${accent}66, transparent)`, transformOrigin: "left", transform: `scaleX(${hovered ? 1 : 0.35})`, transition: "transform 0.45s cubic-bezier(0.34,1.56,0.64,1)", flexShrink: 0 }} />

      {/* Corner glow */}
      <div style={{ position: "absolute", top: 0, right: 0, width: "180px", height: "180px", background: `radial-gradient(circle at top right, ${accent}10, transparent 65%)`, pointerEvents: "none", opacity: hovered ? 1 : 0, transition: "opacity 0.4s", zIndex: 0 }} />

      {/* Header */}
      <div style={{ padding: "20px 24px 12px", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", position: "relative", zIndex: 1, flexShrink: 0 }}>
        <div>
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 800, color: "#fdf0f3", fontSize: colSpan >= 2 ? "20px" : "16px", letterSpacing: "-0.02em", marginBottom: "6px", lineHeight: 1.2 }}>
            {chart.title}
          </h3>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: accent, boxShadow: `0 0 8px ${accent}` }} />
            <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em", fontWeight: 500 }}>
              {chart.data?.length || 0} RECORDS
            </span>
          </div>
        </div>

        <div style={{ display: "flex", gap: "7px", alignItems: "center", flexShrink: 0 }}>
          <div style={{ padding: "4px 10px", background: hovered ? `${accent}22` : "rgba(255,255,255,0.04)", border: `1px solid ${hovered ? accent + "44" : "rgba(255,255,255,0.08)"}`, borderRadius: "8px", transition: "all 0.25s" }}>
            <span style={{ fontSize: "10px", color: hovered ? accent : "var(--text-muted)", letterSpacing: "0.08em", fontWeight: 600, transition: "color 0.25s" }}>
              {({"bar":"▊ BAR","line":"∿ LINE","area":"◬ AREA","pie":"◔ PIE","donut":"◯ DONUT"} as Record<string,string>)[chart.chart as string] ?? "⊞ TABLE"}
            </span>
          </div>
          {chart.sql && (
            <button onClick={() => setSqlOpen(v => !v)} style={{ padding: "4px 10px", background: sqlOpen ? "rgba(167,139,250,0.15)" : "transparent", border: `1px solid ${sqlOpen ? "rgba(167,139,250,0.4)" : "rgba(255,255,255,0.08)"}`, borderRadius: "8px", fontSize: "10px", color: sqlOpen ? "#a78bfa" : "var(--text-muted)", cursor: "pointer", fontFamily: "var(--font-body)", letterSpacing: "0.06em", fontWeight: 600, transition: "all 0.2s" }}>
              {sqlOpen ? "▲ SQL" : "▼ SQL"}
            </button>
          )}
          {/* Per-chart CSV export */}
          <button onClick={() => exportAsCSV(chart.data || [], chart.title || "chart")} title="Export chart data" style={{ padding: "4px 8px", background: "transparent", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "8px", cursor: "pointer", color: "var(--text-muted)", transition: "all 0.2s", fontSize: "12px" }}
            onMouseOver={e => { e.currentTarget.style.borderColor = `${accent}44`; e.currentTarget.style.color = accent }}
            onMouseOut={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "var(--text-muted)" }}
          >↓</button>
        </div>
      </div>

      {/* SQL slide */}
      <div style={{ maxHeight: sqlOpen ? "160px" : "0", overflow: "hidden", transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)", flexShrink: 0, position: "relative", zIndex: 1 }}>
        <div style={{ padding: "12px 24px 14px", background: "rgba(0,0,0,0.5)", borderTop: "1px solid rgba(167,139,250,0.1)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
          <pre style={{ fontSize: "11px", color: "#a78bfa", fontFamily: "'Fira Code','Consolas',monospace", lineHeight: 1.75, overflowX: "auto", margin: 0 }}>{chart.sql}</pre>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", margin: "0 24px", background: `linear-gradient(90deg, transparent, ${accent}22, transparent)`, flexShrink: 0, position: "relative", zIndex: 1 }} />

      {/* Chart */}
      <div style={{ padding: "12px 20px 20px", flex: 1, position: "relative", zIndex: 1 }}>
        <ChartRenderer type={chart.chart} data={chart.data} columns={chart.columns} size={size} accent={accent} chartIndex={index} />
      </div>
    </div>
  )
}

// ── Main Dashboard ────────────────────────────────────────────────────
export default function DashboardGrid({ result }: DashboardGridProps) {
  const { primary_chart, additional_charts, insights } = result
  const [visible, setVisible] = useState(false)
  const dashboardId = "axiom-dashboard"
  useEffect(() => { const t = setTimeout(() => setVisible(true), 60); return () => clearTimeout(t) }, [])

  const insightLines = insights ? insights.split(/\n+/).filter((l: string) => l.trim()) : []
  const pieCharts = additional_charts?.filter((c: any) => c.chart === "pie" || c.chart === "donut") || []
  const otherCharts = additional_charts?.filter((c: any) => c.chart !== "pie" && c.chart !== "donut") || []
  const allChartData = [
    ...(primary_chart?.data || []),
    ...(additional_charts?.flatMap((c: any) => c.data || []) || []),
  ]

  return (
    <div id={dashboardId}>

      {/* ── Top toolbar ── */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", flexWrap: "wrap", gap: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ width: "3px", height: "28px", background: "linear-gradient(180deg, #e1325a, #a78bfa)", borderRadius: "2px" }} />
          <div>
            <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.12em", fontFamily: "var(--font-display)", fontWeight: 600 }}>DASHBOARD OVERVIEW</p>
            <p style={{ fontSize: "14px", color: "var(--text-secondary)", marginTop: "2px", fontWeight: 400 }}>
              {insightLines.length} metrics · {(additional_charts?.length || 0) + 1} charts
            </p>
          </div>
        </div>
        <ExportBar result={result} dashboardId={dashboardId} />
      </div>

      {/* ── KPI Bento Row ── */}
      {insightLines.length > 0 && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px", marginBottom: "16px" }}>
          {insightLines.slice(0, 5).map((line: string, i: number) => (
            <KpiCard key={i} line={line} index={i} visible={visible} />
          ))}
        </div>
      )}

      {/* ── Bento Chart Grid ── */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "14px",
        gridAutoRows: "minmax(320px, auto)",
      }}>

        {/* Primary chart — full width */}
        <ChartCard chart={primary_chart} colSpan={4} rowSpan={1} index={0} visible={visible} allChartData={allChartData} />

        {/* Layout logic for additional charts */}
        {(() => {
          const items: React.ReactElement[] = []
          let idx = 1

          // If we have both pie and bar/line, do 50/50 split
          if (pieCharts.length > 0 && otherCharts.length > 0) {
            // First pair: bar (2 cols) + pie (2 cols)
            if (otherCharts[0]) {
              items.push(<ChartCard key={`other-0`} chart={otherCharts[0]} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />)
            }
            if (pieCharts[0]) {
              items.push(<ChartCard key={`pie-0`} chart={pieCharts[0]} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />)
            }
            // Remaining others — 2 cols each
            otherCharts.slice(1).forEach((c: any, i: number) => {
              items.push(<ChartCard key={`other-${i+1}`} chart={c} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />)
            })
            // Remaining pies — 2 cols each (or 1 col if many)
            const remainPies = pieCharts.slice(1)
            if (remainPies.length === 3) {
              remainPies.forEach((c: any, i: number) => items.push(<ChartCard key={`pie-${i+1}`} chart={c} colSpan={Math.floor(4/remainPies.length) as any} index={idx++} visible={visible} allChartData={allChartData} />))
            } else {
              remainPies.forEach((c: any, i: number) => items.push(<ChartCard key={`pie-${i+1}`} chart={c} colSpan={2} index={idx++} visible={visible} allChartData={allChartData} />))
            }
          } else if (pieCharts.length > 0) {
            // Only pies — 2 cols each, 3 in a row
            pieCharts.forEach((c: any, i: number) => {
              const span = pieCharts.length === 1 ? 4 : pieCharts.length === 2 ? 2 : pieCharts.length === 3 ? (4/3 >= 1 ? 1 : 2) : 2
              items.push(<ChartCard key={`pie-${i}`} chart={c} colSpan={pieCharts.length <= 2 ? 2 : 1} index={idx++} visible={visible} allChartData={allChartData} />)
            })
          } else {
            // Only bar/line/area
            otherCharts.forEach((c: any, i: number) => {
              items.push(<ChartCard key={`other-${i}`} chart={c} colSpan={otherCharts.length === 1 ? 4 : 2} index={idx++} visible={visible} allChartData={allChartData} />)
            })
          }

          return items
        })()}
      </div>

      {/* ── Insights Footer ── */}
      {insightLines.length > 5 && (
        <div style={{ marginTop: "14px", background: "linear-gradient(145deg, #180e13, #110a0e)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "18px", padding: "24px 28px", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(16px)", transition: "all 0.5s ease 0.6s" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "18px" }}>
            <div style={{ width: "3px", height: "18px", background: "linear-gradient(180deg, #e1325a, #a78bfa)", borderRadius: "2px" }} />
            <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.14em", fontFamily: "var(--font-display)", fontWeight: 600 }}>MORE INSIGHTS</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px" }}>
            {insightLines.slice(5).map((line: string, i: number) => (
              <InsightRow key={i} text={line.replace(/^[-•·]\s*/, "")} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function InsightRow({ text }: { text: string }) {
  const [h, setH] = useState(false)
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ padding: "12px 16px", display: "flex", alignItems: "flex-start", gap: "10px", background: h ? "rgba(225,50,90,0.06)" : "rgba(255,255,255,0.02)", border: `1px solid ${h ? "rgba(225,50,90,0.2)" : "rgba(255,255,255,0.05)"}`, borderRadius: "10px", transition: "all 0.2s", cursor: "default" }}>
      <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#e1325a", marginTop: "6px", flexShrink: 0, boxShadow: h ? "0 0 8px #e1325a" : "none", transition: "box-shadow 0.2s" }} />
      <p style={{ fontSize: "14px", color: "var(--text-secondary)", lineHeight: 1.6, fontWeight: 400 }}>{text}</p>
    </div>
  )
}