// // // // // // "use client"

// // // // // // import { useState, useCallback } from "react"
// // // // // // import {
// // // // // //   BarChart, Bar, LineChart, Line, AreaChart, Area,
// // // // // //   PieChart, Pie, Cell, XAxis, YAxis, Tooltip,
// // // // // //   CartesianGrid, ResponsiveContainer, Legend,
// // // // // //   TooltipProps,
// // // // // // } from "recharts"

// // // // // // interface ChartRendererProps {
// // // // // //   type: string
// // // // // //   data: any[]
// // // // // //   columns: string[]
// // // // // //   size?: "large" | "small" | "pie"
// // // // // //   accent?: string
// // // // // // }

// // // // // // const PALETTE = [
// // // // // //   "#e1325a", "#a78bfa", "#2dd4bf", "#f0c060",
// // // // // //   "#fb923c", "#34d399", "#38bdf8", "#f472b6",
// // // // // //   "#818cf8", "#a3e635",
// // // // // // ]

// // // // // // const mkAxis = (accent = "#e1325a") => ({
// // // // // //   tick: { fontSize: 11, fill: "#55445a", fontFamily: "'DM Sans',sans-serif", fontWeight: 400 },
// // // // // //   axisLine: { stroke: "rgba(255,255,255,0.04)" },
// // // // // //   tickLine: false as any,
// // // // // // })

// // // // // // const GRID = { stroke: "rgba(255,255,255,0.04)", strokeDasharray: "0" }

// // // // // // // ── Custom Tooltip ────────────────────────────────────────────────────
// // // // // // function Tip({ active, payload, label }: TooltipProps<any, any>) {
// // // // // //   if (!active || !payload?.length) return null
// // // // // //   return (
// // // // // //     <div style={{
// // // // // //       background: "linear-gradient(145deg, #1e0e16, #160c12)",
// // // // // //       border: "1px solid rgba(225,50,90,0.35)",
// // // // // //       borderRadius: "14px", padding: "14px 18px",
// // // // // //       boxShadow: "0 24px 56px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
// // // // // //       minWidth: "140px", backdropFilter: "blur(12px)",
// // // // // //     }}>
// // // // // //       {label !== undefined && label !== null && (
// // // // // //         <p style={{ fontSize: "10px", color: "#55445a", marginBottom: "10px", letterSpacing: "0.08em", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "8px" }}>
// // // // // //           {String(label)}
// // // // // //         </p>
// // // // // //       )}
// // // // // //       {payload.map((e: any, i: number) => {
// // // // // //         const val = typeof e.value === "number" && e.value >= 1000 ? e.value.toLocaleString() : e.value
// // // // // //         return (
// // // // // //           <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", marginTop: i > 0 ? "6px" : 0 }}>
// // // // // //             <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
// // // // // //               <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: e.color || PALETTE[0], boxShadow: `0 0 8px ${e.color || PALETTE[0]}88`, flexShrink: 0 }} />
// // // // // //               {e.name && <span style={{ fontSize: "11px", color: "#7a6a88" }}>{e.name}</span>}
// // // // // //             </div>
// // // // // //             <span style={{ fontSize: "14px", color: "#fdf0f3", fontWeight: 600, fontFamily: "var(--font-display)" }}>{val}</span>
// // // // // //           </div>
// // // // // //         )
// // // // // //       })}
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // // ── Custom Bar Shape with hover glow ─────────────────────────────────
// // // // // // function GlowBar(props: any) {
// // // // // //   const { x, y, width, height, fill, index } = props
// // // // // //   const [hovered, setHovered] = useState(false)
// // // // // //   if (!height || height <= 0) return null
// // // // // //   const color = PALETTE[index % PALETTE.length]
// // // // // //   return (
// // // // // //     <g>
// // // // // //       {/* Glow shadow */}
// // // // // //       {hovered && (
// // // // // //         <rect x={x - 2} y={y - 2} width={width + 4} height={height + 4}
// // // // // //           rx={6} fill={color} opacity={0.15} filter="url(#glow)" />
// // // // // //       )}
// // // // // //       <rect
// // // // // //         x={x} y={y} width={width} height={height}
// // // // // //         rx={5} ry={5}
// // // // // //         fill={fill}
// // // // // //         style={{ cursor: "pointer", transition: "opacity 0.2s" }}
// // // // // //         opacity={hovered ? 1 : 0.85}
// // // // // //         onMouseEnter={() => setHovered(true)}
// // // // // //         onMouseLeave={() => setHovered(false)}
// // // // // //       />
// // // // // //       {/* Top highlight */}
// // // // // //       <rect x={x + 1} y={y + 1} width={width - 2} height={3} rx={4} fill="rgba(255,255,255,0.2)" />
// // // // // //     </g>
// // // // // //   )
// // // // // // }

// // // // // // // ── Custom Active Dot ─────────────────────────────────────────────────
// // // // // // function ActiveDot(props: any) {
// // // // // //   const { cx, cy, fill } = props
// // // // // //   return (
// // // // // //     <g>
// // // // // //       <circle cx={cx} cy={cy} r={10} fill={fill} opacity={0.15} />
// // // // // //       <circle cx={cx} cy={cy} r={6} fill={fill} opacity={0.3} />
// // // // // //       <circle cx={cx} cy={cy} r={4} fill={fill} stroke="#1a0d12" strokeWidth={2} />
// // // // // //     </g>
// // // // // //   )
// // // // // // }

// // // // // // // ── Custom Legend ─────────────────────────────────────────────────────
// // // // // // function CustomLegend({ payload }: any) {
// // // // // //   if (!payload?.length) return null
// // // // // //   return (
// // // // // //     <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", paddingTop: "12px" }}>
// // // // // //       {payload.map((entry: any, i: number) => (
// // // // // //         <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
// // // // // //           <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: entry.color, boxShadow: `0 0 6px ${entry.color}88` }} />
// // // // // //           <span style={{ fontSize: "11px", color: "#8888aa", fontFamily: "var(--font-body)" }}>{entry.value}</span>
// // // // // //         </div>
// // // // // //       ))}
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // // ── Custom Pie Label ──────────────────────────────────────────────────
// // // // // // function PieLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) {
// // // // // //   if (percent < 0.05) return null
// // // // // //   const RADIAN = Math.PI / 180
// // // // // //   const r = innerRadius + (outerRadius - innerRadius) * 0.55
// // // // // //   const x = cx + r * Math.cos(-midAngle * RADIAN)
// // // // // //   const y = cy + r * Math.sin(-midAngle * RADIAN)
// // // // // //   return (
// // // // // //     <text x={x} y={y} fill="rgba(255,255,255,0.85)" textAnchor="middle" dominantBaseline="central"
// // // // // //       style={{ fontSize: "11px", fontFamily: "var(--font-display)", fontWeight: 600 }}>
// // // // // //       {`${(percent * 100).toFixed(0)}%`}
// // // // // //     </text>
// // // // // //   )
// // // // // // }

// // // // // // // ── Main Component ────────────────────────────────────────────────────
// // // // // // export default function ChartRenderer({ type, data, columns, size = "small", accent = "#e1325a" }: ChartRendererProps) {
// // // // // //   const height = size === "large" ? 390 : size === "pie" ? 290 : 270
// // // // // //   const xKey = columns?.[0] || "name"
// // // // // //   const yKey = columns?.[1] || "value"

// // // // // //   if (!data || data.length === 0) {
// // // // // //     return (
// // // // // //       <div style={{ height: `${height}px`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", border: "1px dashed rgba(255,255,255,0.07)", borderRadius: "12px" }}>
// // // // // //         <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
// // // // // //           <path d="M4 20l6-6 4 4 7-9 3 3" stroke="#55445a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// // // // // //           <rect x="2" y="2" width="24" height="24" rx="4" stroke="#33334a" strokeWidth="1"/>
// // // // // //         </svg>
// // // // // //         <p style={{ color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.06em" }}>NO DATA AVAILABLE</p>
// // // // // //       </div>
// // // // // //     )
// // // // // //   }

// // // // // //   const AXIS = mkAxis(accent)

// // // // // //   // ── BAR ────────────────────────────────────────────────────────────
// // // // // //   if (type === "bar") {
// // // // // //     return (
// // // // // //       <ResponsiveContainer width="100%" height={height}>
// // // // // //         <BarChart data={data} barCategoryGap="36%" barGap={4} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
// // // // // //           <defs>
// // // // // //             <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
// // // // // //               <feGaussianBlur stdDeviation="4" result="blur"/>
// // // // // //               <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
// // // // // //             </filter>
// // // // // //             {PALETTE.map((c, i) => (
// // // // // //               <linearGradient key={i} id={`barG${i}`} x1="0" y1="0" x2="0" y2="1">
// // // // // //                 <stop offset="0%" stopColor={c} stopOpacity="1"/>
// // // // // //                 <stop offset="100%" stopColor={c} stopOpacity="0.35"/>
// // // // // //               </linearGradient>
// // // // // //             ))}
// // // // // //           </defs>
// // // // // //           <CartesianGrid vertical={false} {...GRID} />
// // // // // //           <XAxis dataKey={xKey} {...AXIS} />
// // // // // //           <YAxis {...AXIS} width={50} tickFormatter={v => v >= 1000000 ? `${(v/1000000).toFixed(1)}M` : v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
// // // // // //           <Tooltip content={<Tip />} cursor={{ fill: `${accent}08`, rx: 6 }} />
// // // // // //           {columns.slice(1).map((col, i) => (
// // // // // //             <Bar key={col} dataKey={col} fill={`url(#barG${i})`} maxBarSize={52} shape={<GlowBar />} />
// // // // // //           ))}
// // // // // //         </BarChart>
// // // // // //       </ResponsiveContainer>
// // // // // //     )
// // // // // //   }

// // // // // //   // ── LINE ──────────────────────────────────────────────────────────
// // // // // //   if (type === "line") {
// // // // // //     return (
// // // // // //       <ResponsiveContainer width="100%" height={height}>
// // // // // //         <LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
// // // // // //           <defs>
// // // // // //             <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
// // // // // //               <stop offset="0%" stopColor="#e1325a"/>
// // // // // //               <stop offset="50%" stopColor="#f0c060"/>
// // // // // //               <stop offset="100%" stopColor="#a78bfa"/>
// // // // // //             </linearGradient>
// // // // // //           </defs>
// // // // // //           <CartesianGrid {...GRID} />
// // // // // //           <XAxis dataKey={xKey} {...AXIS} />
// // // // // //           <YAxis {...AXIS} width={50} tickFormatter={v => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
// // // // // //           <Tooltip content={<Tip />} />
// // // // // //           {columns.slice(1).map((col, i) => (
// // // // // //             <Line key={col} type="monotone" dataKey={col}
// // // // // //               stroke={i === 0 ? "url(#lineGrad)" : PALETTE[i + 1]}
// // // // // //               strokeWidth={2.5}
// // // // // //               dot={{ fill: PALETTE[i] || "#e1325a", stroke: "#180e13", strokeWidth: 2.5, r: 4 }}
// // // // // //               activeDot={<ActiveDot fill={PALETTE[i] || "#e1325a"} />}
// // // // // //             />
// // // // // //           ))}
// // // // // //         </LineChart>
// // // // // //       </ResponsiveContainer>
// // // // // //     )
// // // // // //   }

// // // // // //   // ── AREA ──────────────────────────────────────────────────────────
// // // // // //   if (type === "area") {
// // // // // //     return (
// // // // // //       <ResponsiveContainer width="100%" height={height}>
// // // // // //         <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
// // // // // //           <defs>
// // // // // //             {columns.slice(1).map((col, i) => (
// // // // // //               <linearGradient key={i} id={`areaG${i}`} x1="0" y1="0" x2="0" y2="1">
// // // // // //                 <stop offset="5%" stopColor={PALETTE[i]} stopOpacity="0.4"/>
// // // // // //                 <stop offset="60%" stopColor={PALETTE[i]} stopOpacity="0.08"/>
// // // // // //                 <stop offset="100%" stopColor={PALETTE[i]} stopOpacity="0"/>
// // // // // //               </linearGradient>
// // // // // //             ))}
// // // // // //           </defs>
// // // // // //           <CartesianGrid {...GRID} />
// // // // // //           <XAxis dataKey={xKey} {...AXIS} />
// // // // // //           <YAxis {...AXIS} width={50} tickFormatter={v => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
// // // // // //           <Tooltip content={<Tip />} />
// // // // // //           {columns.slice(1).map((col, i) => (
// // // // // //             <Area key={col} type="monotone" dataKey={col}
// // // // // //               stroke={PALETTE[i]} strokeWidth={2.5}
// // // // // //               fill={`url(#areaG${i})`} dot={false}
// // // // // //               activeDot={<ActiveDot fill={PALETTE[i]} />}
// // // // // //             />
// // // // // //           ))}
// // // // // //         </AreaChart>
// // // // // //       </ResponsiveContainer>
// // // // // //     )
// // // // // //   }

// // // // // //   // ── PIE ──────────────────────────────────────────────────────────
// // // // // //   if (type === "pie") {
// // // // // //     return (
// // // // // //       <ResponsiveContainer width="100%" height={height}>
// // // // // //         <PieChart>
// // // // // //           <defs>
// // // // // //             {PALETTE.map((c, i) => (
// // // // // //               <radialGradient key={i} id={`pieG${i}`} cx="50%" cy="30%" r="70%">
// // // // // //                 <stop offset="0%" stopColor={c} stopOpacity="1"/>
// // // // // //                 <stop offset="100%" stopColor={c} stopOpacity="0.65"/>
// // // // // //               </radialGradient>
// // // // // //             ))}
// // // // // //             <filter id="pieShadow">
// // // // // //               <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.4"/>
// // // // // //             </filter>
// // // // // //           </defs>
// // // // // //           <Pie
// // // // // //             data={data} dataKey={yKey} nameKey={xKey}
// // // // // //             cx="50%" cy="44%" outerRadius="68%"
// // // // // //             paddingAngle={3} strokeWidth={0}
// // // // // //             labelLine={false}
// // // // // //             label={<PieLabel />}
// // // // // //             isAnimationActive={true}
// // // // // //             animationBegin={100}
// // // // // //             animationDuration={900}
// // // // // //           >
// // // // // //             {data.map((_: any, i: number) => (
// // // // // //               <Cell key={i} fill={`url(#pieG${i % PALETTE.length})`} filter="url(#pieShadow)" />
// // // // // //             ))}
// // // // // //           </Pie>
// // // // // //           <Tooltip content={<Tip />} />
// // // // // //           <Legend content={<CustomLegend />} />
// // // // // //         </PieChart>
// // // // // //       </ResponsiveContainer>
// // // // // //     )
// // // // // //   }

// // // // // //   // ── DONUT ────────────────────────────────────────────────────────
// // // // // //   if (type === "donut") {
// // // // // //     const total = data.reduce((s: number, d: any) => s + (Number(d[yKey]) || 0), 0)
// // // // // //     const fmtTotal = total >= 1000000
// // // // // //       ? `${(total / 1000000).toFixed(1)}M`
// // // // // //       : total >= 1000 ? `${(total / 1000).toFixed(0)}k` : String(total)

// // // // // //     return (
// // // // // //       <div style={{ position: "relative" }}>
// // // // // //         <ResponsiveContainer width="100%" height={height}>
// // // // // //           <PieChart>
// // // // // //             <defs>
// // // // // //               {PALETTE.map((c, i) => (
// // // // // //                 <linearGradient key={i} id={`donutG${i}`} x1="0" y1="0" x2="1" y2="1">
// // // // // //                   <stop offset="0%" stopColor={c} stopOpacity="1"/>
// // // // // //                   <stop offset="100%" stopColor={c} stopOpacity="0.55"/>
// // // // // //                 </linearGradient>
// // // // // //               ))}
// // // // // //             </defs>
// // // // // //             <Pie
// // // // // //               data={data} dataKey={yKey} nameKey={xKey}
// // // // // //               cx="50%" cy="44%" innerRadius="46%" outerRadius="70%"
// // // // // //               paddingAngle={3} strokeWidth={0}
// // // // // //               isAnimationActive={true} animationBegin={100} animationDuration={1000}
// // // // // //             >
// // // // // //               {data.map((_: any, i: number) => (
// // // // // //                 <Cell key={i} fill={`url(#donutG${i % PALETTE.length})`} />
// // // // // //               ))}
// // // // // //             </Pie>
// // // // // //             <Tooltip content={<Tip />} />
// // // // // //             <Legend content={<CustomLegend />} />
// // // // // //           </PieChart>
// // // // // //         </ResponsiveContainer>

// // // // // //         {/* Center label */}
// // // // // //         <div style={{
// // // // // //           position: "absolute", top: size === "pie" ? "41%" : "42%",
// // // // // //           left: "50%", transform: "translate(-50%, -50%)",
// // // // // //           textAlign: "center", pointerEvents: "none",
// // // // // //         }}>
// // // // // //           <p style={{ fontFamily: "var(--font-display)", fontSize: size === "pie" ? "22px" : "26px", fontWeight: 800, color: "#fdf0f3", letterSpacing: "-0.03em", lineHeight: 1 }}>
// // // // // //             {fmtTotal}
// // // // // //           </p>
// // // // // //           <p style={{ fontSize: "9px", color: "var(--text-muted)", letterSpacing: "0.12em", marginTop: "4px" }}>TOTAL</p>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     )
// // // // // //   }

// // // // // //   // ── TABLE fallback ────────────────────────────────────────────────
// // // // // //   if (data.length > 0) {
// // // // // //     const cols = Object.keys(data[0])
// // // // // //     return (
// // // // // //       <div style={{ overflowX: "auto", borderRadius: "10px", overflow: "hidden" }}>
// // // // // //         <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
// // // // // //           <thead>
// // // // // //             <tr style={{ background: "rgba(225,50,90,0.05)" }}>
// // // // // //               {cols.map((col) => (
// // // // // //                 <th key={col} style={{
// // // // // //                   padding: "11px 16px", textAlign: "left",
// // // // // //                   color: "var(--text-muted)", fontWeight: 500,
// // // // // //                   fontSize: "10px", letterSpacing: "0.1em",
// // // // // //                   borderBottom: "1px solid rgba(225,50,90,0.15)",
// // // // // //                   fontFamily: "var(--font-display)",
// // // // // //                 }}>
// // // // // //                   {col.toUpperCase().replace(/_/g, " ")}
// // // // // //                 </th>
// // // // // //               ))}
// // // // // //             </tr>
// // // // // //           </thead>
// // // // // //           <tbody>
// // // // // //             {data.slice(0, 25).map((row: any, i: number) => (
// // // // // //               <TableRow key={i} row={row} cols={cols} even={i % 2 === 0} />
// // // // // //             ))}
// // // // // //           </tbody>
// // // // // //         </table>
// // // // // //         {data.length > 25 && (
// // // // // //           <div style={{ textAlign: "center", padding: "14px", borderTop: "1px solid rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.01)" }}>
// // // // // //             <p style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "0.08em" }}>
// // // // // //               +{data.length - 25} MORE ROWS
// // // // // //             </p>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     )
// // // // // //   }

// // // // // //   return null
// // // // // // }

// // // // // // function TableRow({ row, cols, even }: { row: any; cols: string[]; even: boolean }) {
// // // // // //   const [hovered, setHovered] = useState(false)
// // // // // //   return (
// // // // // //     <tr
// // // // // //       onMouseEnter={() => setHovered(true)}
// // // // // //       onMouseLeave={() => setHovered(false)}
// // // // // //       style={{
// // // // // //         borderBottom: "1px solid rgba(255,255,255,0.04)",
// // // // // //         background: hovered ? "rgba(225,50,90,0.05)" : even ? "rgba(255,255,255,0.01)" : "transparent",
// // // // // //         transition: "background 0.15s ease",
// // // // // //       }}
// // // // // //     >
// // // // // //       {cols.map((col, j) => (
// // // // // //         <td key={col} style={{
// // // // // //           padding: "11px 16px",
// // // // // //           color: j === 0 ? "#fdf0f3" : "var(--text-secondary)",
// // // // // //           fontWeight: j === 0 ? 400 : 300,
// // // // // //           fontSize: "13px",
// // // // // //           borderLeft: j === 0 && hovered ? "2px solid #e1325a" : "2px solid transparent",
// // // // // //           transition: "border-color 0.2s",
// // // // // //         }}>
// // // // // //           {row[col] !== null && row[col] !== undefined ? String(row[col]) : "—"}
// // // // // //         </td>
// // // // // //       ))}
// // // // // //     </tr>
// // // // // //   )
// // // // // // }
// // // // // "use client"

// // // // // import { useState } from "react"
// // // // // import {
// // // // //   BarChart, Bar, LineChart, Line, AreaChart, Area,
// // // // //   PieChart, Pie, Cell, XAxis, YAxis, Tooltip,
// // // // //   CartesianGrid, ResponsiveContainer, Legend, TooltipProps,
// // // // //   RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
// // // // //   ScatterChart, Scatter, ZAxis, ReferenceLine,
// // // // //   ComposedChart,
// // // // // } from "recharts"

// // // // // interface ChartRendererProps {
// // // // //   type: string
// // // // //   data: any[]
// // // // //   columns: string[]
// // // // //   size?: "large" | "small" | "pie"
// // // // //   accent?: string
// // // // // }

// // // // // const PALETTE = [
// // // // //   "#e1325a", "#a78bfa", "#2dd4bf", "#f0c060",
// // // // //   "#fb923c", "#34d399", "#38bdf8", "#f472b6",
// // // // //   "#818cf8", "#a3e635",
// // // // // ]

// // // // // // ── Dynamic Y-axis domain ─────────────────────────────────────────────
// // // // // function getYDomain(data: any[], keys: string[]): [number, number] {
// // // // //   let min = Infinity, max = -Infinity
// // // // //   data.forEach(row => {
// // // // //     keys.forEach(k => {
// // // // //       const v = Number(row[k])
// // // // //       if (!isNaN(v)) { min = Math.min(min, v); max = Math.max(max, v) }
// // // // //     })
// // // // //   })
// // // // //   if (min === Infinity) return [0, 100]
// // // // //   const range = max - min
// // // // //   const padding = range * 0.15 || max * 0.1 || 10
// // // // //   // Start axis slightly below min so bars show relative difference clearly
// // // // //   const domainMin = min >= 0 ? Math.max(0, min - padding) : min - padding
// // // // //   return [Math.floor(domainMin), Math.ceil(max + padding * 0.5)]
// // // // // }

// // // // // const AXIS_STYLE = {
// // // // //   tick: { fontSize: 11, fill: "#55445a", fontFamily: "'DM Sans',sans-serif" },
// // // // //   axisLine: { stroke: "rgba(255,255,255,0.04)" },
// // // // //   tickLine: false as any,
// // // // // }

// // // // // const GRID_PROPS = { stroke: "rgba(255,255,255,0.05)", strokeDasharray: "0" }

// // // // // function fmt(v: number) {
// // // // //   return v >= 1000000 ? `${(v / 1000000).toFixed(1)}M`
// // // // //     : v >= 1000 ? `${(v / 1000).toFixed(0)}k`
// // // // //     : Number.isInteger(v) ? String(v)
// // // // //     : v.toFixed(1)
// // // // // }

// // // // // // ── Tooltip ───────────────────────────────────────────────────────────
// // // // // function Tip({ active, payload, label }: TooltipProps<any, any>) {
// // // // //   if (!active || !payload?.length) return null
// // // // //   return (
// // // // //     <div style={{
// // // // //       background: "linear-gradient(145deg, #1e0e16, #160c12)",
// // // // //       border: "1px solid rgba(225,50,90,0.3)",
// // // // //       borderRadius: "14px", padding: "13px 17px",
// // // // //       boxShadow: "0 20px 48px rgba(0,0,0,0.7)",
// // // // //       minWidth: "130px", backdropFilter: "blur(12px)",
// // // // //     }}>
// // // // //       {label != null && (
// // // // //         <p style={{ fontSize: "10px", color: "#55445a", marginBottom: "8px", letterSpacing: "0.06em", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "7px" }}>
// // // // //           {String(label)}
// // // // //         </p>
// // // // //       )}
// // // // //       {payload.map((e: any, i: number) => (
// // // // //         <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", marginTop: i > 0 ? "5px" : 0 }}>
// // // // //           <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
// // // // //             <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: e.color || PALETTE[0], boxShadow: `0 0 6px ${e.color || PALETTE[0]}` }} />
// // // // //             {e.name && <span style={{ fontSize: "10px", color: "#7a6a88" }}>{e.name}</span>}
// // // // //           </div>
// // // // //           <span style={{ fontSize: "14px", color: "#fdf0f3", fontWeight: 700, fontFamily: "var(--font-display)" }}>
// // // // //             {typeof e.value === "number" ? fmt(e.value) : e.value}
// // // // //           </span>
// // // // //         </div>
// // // // //       ))}
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // // ── Custom Bar Shape ──────────────────────────────────────────────────
// // // // // function GlowBar(props: any) {
// // // // //   const { x, y, width, height, fill, index } = props
// // // // //   const [h, setH] = useState(false)
// // // // //   if (!height || height <= 0) return null
// // // // //   const c = PALETTE[index % PALETTE.length]
// // // // //   return (
// // // // //     <g>
// // // // //       {h && <rect x={x - 3} y={y - 3} width={width + 6} height={height + 6} rx={7} fill={c} opacity={0.12} />}
// // // // //       <rect x={x} y={y} width={width} height={height} rx={[5, 5, 0, 0] as any} fill={fill}
// // // // //         opacity={h ? 1 : 0.88} style={{ cursor: "pointer", transition: "opacity 0.15s" }}
// // // // //         onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
// // // // //       />
// // // // //       <rect x={x + 1} y={y + 1} width={width - 2} height={Math.min(3, height - 2)} rx={3} fill="rgba(255,255,255,0.2)" />
// // // // //     </g>
// // // // //   )
// // // // // }

// // // // // // ── Active Dot ────────────────────────────────────────────────────────
// // // // // function ActiveDot({ cx, cy, fill }: any) {
// // // // //   return (
// // // // //     <g>
// // // // //       <circle cx={cx} cy={cy} r={11} fill={fill} opacity={0.1} />
// // // // //       <circle cx={cx} cy={cy} r={6} fill={fill} opacity={0.25} />
// // // // //       <circle cx={cx} cy={cy} r={4} fill={fill} stroke="#180e13" strokeWidth={2} />
// // // // //     </g>
// // // // //   )
// // // // // }

// // // // // // ── Legend ────────────────────────────────────────────────────────────
// // // // // function CustomLegend({ payload }: any) {
// // // // //   if (!payload?.length) return null
// // // // //   return (
// // // // //     <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", paddingTop: "10px" }}>
// // // // //       {payload.map((e: any, i: number) => (
// // // // //         <div key={i} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
// // // // //           <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: e.color, boxShadow: `0 0 5px ${e.color}88` }} />
// // // // //           <span style={{ fontSize: "11px", color: "#8888aa", fontFamily: "var(--font-body)" }}>{e.value}</span>
// // // // //         </div>
// // // // //       ))}
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // // ── Pie % Label ───────────────────────────────────────────────────────
// // // // // function PieLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) {
// // // // //   if (percent < 0.05) return null
// // // // //   const R = Math.PI / 180
// // // // //   const r = innerRadius + (outerRadius - innerRadius) * 0.55
// // // // //   return (
// // // // //     <text
// // // // //       x={cx + r * Math.cos(-midAngle * R)}
// // // // //       y={cy + r * Math.sin(-midAngle * R)}
// // // // //       fill="rgba(255,255,255,0.9)" textAnchor="middle" dominantBaseline="central"
// // // // //       style={{ fontSize: "11px", fontFamily: "var(--font-display)", fontWeight: 700 }}
// // // // //     >
// // // // //       {`${(percent * 100).toFixed(0)}%`}
// // // // //     </text>
// // // // //   )
// // // // // }

// // // // // // ── Chart Type Selector ───────────────────────────────────────────────
// // // // // const CHART_TYPES = [
// // // // //   { id: "bar", label: "▊ Bar" },
// // // // //   { id: "line", label: "∿ Line" },
// // // // //   { id: "area", label: "◬ Area" },
// // // // //   { id: "composed", label: "⊕ Mixed" },
// // // // // ]
// // // // // const PIE_TYPES = [
// // // // //   { id: "pie", label: "◔ Pie" },
// // // // //   { id: "donut", label: "◯ Donut" },
// // // // //   { id: "radar", label: "⬡ Radar" },
// // // // // ]

// // // // // function TypeSwitcher({ current, types, onChange }: { current: string; types: typeof CHART_TYPES; onChange: (t: string) => void }) {
// // // // //   return (
// // // // //     <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
// // // // //       {types.map(t => (
// // // // //         <button key={t.id} onClick={() => onChange(t.id)} style={{
// // // // //           padding: "4px 10px",
// // // // //           background: current === t.id ? "rgba(225,50,90,0.15)" : "rgba(255,255,255,0.03)",
// // // // //           border: `1px solid ${current === t.id ? "rgba(225,50,90,0.4)" : "rgba(255,255,255,0.07)"}`,
// // // // //           borderRadius: "7px", fontSize: "10px",
// // // // //           color: current === t.id ? "#e1325a" : "#55445a",
// // // // //           cursor: "pointer", fontFamily: "var(--font-body)",
// // // // //           transition: "all 0.18s",
// // // // //         }}>
// // // // //           {t.label}
// // // // //         </button>
// // // // //       ))}
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // // ── Empty ─────────────────────────────────────────────────────────────
// // // // // function Empty({ height }: { height: number }) {
// // // // //   return (
// // // // //     <div style={{ height, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px", border: "1px dashed rgba(255,255,255,0.06)", borderRadius: "12px" }}>
// // // // //       <p style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "0.08em" }}>NO DATA</p>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // // ── Main ──────────────────────────────────────────────────────────────
// // // // // export default function ChartRenderer({ type, data, columns, size = "small", accent = "#e1325a" }: ChartRendererProps) {
// // // // //   const height = size === "large" ? 380 : size === "pie" ? 300 : 260
// // // // //   const xKey = columns?.[0] || "name"
// // // // //   const yKeys = columns.slice(1).length > 0 ? columns.slice(1) : [columns[1] || "value"]

// // // // //   // Switchable type
// // // // //   const isPie = type === "pie" || type === "donut"
// // // // //   const isCartesian = !isPie && type !== "radar" && type !== "scatter"
// // // // //   const switchers = isPie ? PIE_TYPES : isCartesian ? CHART_TYPES : []
// // // // //   const [activeType, setActiveType] = useState(type)

// // // // //   // Sync when parent type changes
// // // // //   const resolvedType = activeType

// // // // //   if (!data || data.length === 0) return <Empty height={height} />

// // // // //   const yDomain = getYDomain(data, yKeys)

// // // // //   // ── COMPOSED (Bar + Line) ───────────────────────────────────────
// // // // //   if (resolvedType === "composed") {
// // // // //     return (
// // // // //       <div>
// // // // //         <TypeSwitcher current={resolvedType} types={CHART_TYPES} onChange={setActiveType} />
// // // // //         <ResponsiveContainer width="100%" height={height}>
// // // // //           <ComposedChart data={data} margin={{ top: 6, right: 8, bottom: 0, left: 0 }}>
// // // // //             <defs>
// // // // //               {yKeys.map((_, i) => (
// // // // //                 <linearGradient key={i} id={`cg${i}`} x1="0" y1="0" x2="0" y2="1">
// // // // //                   <stop offset="0%" stopColor={PALETTE[i]} stopOpacity="1"/>
// // // // //                   <stop offset="100%" stopColor={PALETTE[i]} stopOpacity="0.3"/>
// // // // //                 </linearGradient>
// // // // //               ))}
// // // // //             </defs>
// // // // //             <CartesianGrid vertical={false} {...GRID_PROPS} />
// // // // //             <XAxis dataKey={xKey} {...AXIS_STYLE} />
// // // // //             <YAxis {...AXIS_STYLE} width={50} domain={yDomain} tickFormatter={fmt} />
// // // // //             <Tooltip content={<Tip />} cursor={{ fill: `${accent}08` }} />
// // // // //             <Legend content={<CustomLegend />} />
// // // // //             {yKeys.map((col, i) =>
// // // // //               i === 0
// // // // //                 ? <Bar key={col} dataKey={col} fill={`url(#cg${i})`} maxBarSize={48} radius={[4,4,0,0]} />
// // // // //                 : <Line key={col} type="monotone" dataKey={col} stroke={PALETTE[i]} strokeWidth={2.5}
// // // // //                     dot={{ fill: PALETTE[i], stroke: "#180e13", strokeWidth: 2, r: 3 }}
// // // // //                     activeDot={<ActiveDot fill={PALETTE[i]} />} />
// // // // //             )}
// // // // //           </ComposedChart>
// // // // //         </ResponsiveContainer>
// // // // //       </div>
// // // // //     )
// // // // //   }

// // // // //   // ── BAR ──────────────────────────────────────────────────────────
// // // // //   if (resolvedType === "bar") {
// // // // //     return (
// // // // //       <div>
// // // // //         <TypeSwitcher current={resolvedType} types={CHART_TYPES} onChange={setActiveType} />
// // // // //         <ResponsiveContainer width="100%" height={height}>
// // // // //           <BarChart data={data} barCategoryGap="32%" barGap={3} margin={{ top: 6, right: 8, bottom: 0, left: 0 }}>
// // // // //             <defs>
// // // // //               <filter id="barGlow" x="-30%" y="-30%" width="160%" height="160%">
// // // // //                 <feGaussianBlur stdDeviation="3" result="blur"/>
// // // // //                 <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
// // // // //               </filter>
// // // // //               {PALETTE.map((c, i) => (
// // // // //                 <linearGradient key={i} id={`bg${i}`} x1="0" y1="0" x2="0" y2="1">
// // // // //                   <stop offset="0%" stopColor={c} stopOpacity="1"/>
// // // // //                   <stop offset="100%" stopColor={c} stopOpacity="0.28"/>
// // // // //                 </linearGradient>
// // // // //               ))}
// // // // //             </defs>
// // // // //             <CartesianGrid vertical={false} {...GRID_PROPS} />
// // // // //             <XAxis dataKey={xKey} {...AXIS_STYLE} interval={0} tick={{ ...AXIS_STYLE.tick, fontSize: data.length > 8 ? 9 : 11 }} />
// // // // //             <YAxis {...AXIS_STYLE} width={52} domain={yDomain} tickFormatter={fmt} />
// // // // //             <Tooltip content={<Tip />} cursor={{ fill: `${accent}08`, rx: 6 }} />
// // // // //             {yKeys.length > 1 && <Legend content={<CustomLegend />} />}
// // // // //             {yKeys.map((col, i) => (
// // // // //               <Bar key={col} dataKey={col} fill={`url(#bg${i})`} maxBarSize={52} shape={<GlowBar />} />
// // // // //             ))}
// // // // //           </BarChart>
// // // // //         </ResponsiveContainer>
// // // // //       </div>
// // // // //     )
// // // // //   }

// // // // //   // ── LINE ────────────────────────────────────────────────────────
// // // // //   if (resolvedType === "line") {
// // // // //     return (
// // // // //       <div>
// // // // //         <TypeSwitcher current={resolvedType} types={CHART_TYPES} onChange={setActiveType} />
// // // // //         <ResponsiveContainer width="100%" height={height}>
// // // // //           <LineChart data={data} margin={{ top: 6, right: 8, bottom: 0, left: 0 }}>
// // // // //             <defs>
// // // // //               <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
// // // // //                 <stop offset="0%" stopColor="#e1325a"/>
// // // // //                 <stop offset="50%" stopColor="#f0c060"/>
// // // // //                 <stop offset="100%" stopColor="#a78bfa"/>
// // // // //               </linearGradient>
// // // // //             </defs>
// // // // //             <CartesianGrid {...GRID_PROPS} />
// // // // //             <XAxis dataKey={xKey} {...AXIS_STYLE} />
// // // // //             <YAxis {...AXIS_STYLE} width={52} domain={yDomain} tickFormatter={fmt} />
// // // // //             <Tooltip content={<Tip />} />
// // // // //             {yKeys.length > 1 && <Legend content={<CustomLegend />} />}
// // // // //             {yKeys.map((col, i) => (
// // // // //               <Line key={col} type="monotone" dataKey={col}
// // // // //                 stroke={i === 0 ? "url(#lineGrad)" : PALETTE[i + 1]}
// // // // //                 strokeWidth={2.5}
// // // // //                 dot={{ fill: PALETTE[i], stroke: "#180e13", strokeWidth: 2, r: 4 }}
// // // // //                 activeDot={<ActiveDot fill={PALETTE[i]} />}
// // // // //               />
// // // // //             ))}
// // // // //           </LineChart>
// // // // //         </ResponsiveContainer>
// // // // //       </div>
// // // // //     )
// // // // //   }

// // // // //   // ── AREA ────────────────────────────────────────────────────────
// // // // //   if (resolvedType === "area") {
// // // // //     return (
// // // // //       <div>
// // // // //         <TypeSwitcher current={resolvedType} types={CHART_TYPES} onChange={setActiveType} />
// // // // //         <ResponsiveContainer width="100%" height={height}>
// // // // //           <AreaChart data={data} margin={{ top: 6, right: 8, bottom: 0, left: 0 }}>
// // // // //             <defs>
// // // // //               {yKeys.map((_, i) => (
// // // // //                 <linearGradient key={i} id={`ag${i}`} x1="0" y1="0" x2="0" y2="1">
// // // // //                   <stop offset="0%" stopColor={PALETTE[i]} stopOpacity="0.45"/>
// // // // //                   <stop offset="65%" stopColor={PALETTE[i]} stopOpacity="0.07"/>
// // // // //                   <stop offset="100%" stopColor={PALETTE[i]} stopOpacity="0"/>
// // // // //                 </linearGradient>
// // // // //               ))}
// // // // //             </defs>
// // // // //             <CartesianGrid {...GRID_PROPS} />
// // // // //             <XAxis dataKey={xKey} {...AXIS_STYLE} />
// // // // //             <YAxis {...AXIS_STYLE} width={52} domain={yDomain} tickFormatter={fmt} />
// // // // //             <Tooltip content={<Tip />} />
// // // // //             {yKeys.length > 1 && <Legend content={<CustomLegend />} />}
// // // // //             {yKeys.map((col, i) => (
// // // // //               <Area key={col} type="monotone" dataKey={col}
// // // // //                 stroke={PALETTE[i]} strokeWidth={2.5}
// // // // //                 fill={`url(#ag${i})`} dot={false}
// // // // //                 activeDot={<ActiveDot fill={PALETTE[i]} />}
// // // // //               />
// // // // //             ))}
// // // // //           </AreaChart>
// // // // //         </ResponsiveContainer>
// // // // //       </div>
// // // // //     )
// // // // //   }

// // // // //   // ── RADAR ───────────────────────────────────────────────────────
// // // // //   if (resolvedType === "radar") {
// // // // //     return (
// // // // //       <div>
// // // // //         <TypeSwitcher current={resolvedType} types={PIE_TYPES} onChange={setActiveType} />
// // // // //         <ResponsiveContainer width="100%" height={height}>
// // // // //           <RadarChart data={data} cx="50%" cy="50%" outerRadius="70%">
// // // // //             <defs>
// // // // //               {yKeys.map((_, i) => (
// // // // //                 <linearGradient key={i} id={`rg${i}`} x1="0" y1="0" x2="0" y2="1">
// // // // //                   <stop offset="0%" stopColor={PALETTE[i]} stopOpacity="0.35"/>
// // // // //                   <stop offset="100%" stopColor={PALETTE[i]} stopOpacity="0.05"/>
// // // // //                 </linearGradient>
// // // // //               ))}
// // // // //             </defs>
// // // // //             <PolarGrid stroke="rgba(255,255,255,0.07)" />
// // // // //             <PolarAngleAxis dataKey={xKey} tick={{ fontSize: 11, fill: "#55445a", fontFamily: "'DM Sans',sans-serif" }} />
// // // // //             <PolarRadiusAxis tick={{ fontSize: 9, fill: "#44445a" }} axisLine={false} />
// // // // //             {yKeys.map((col, i) => (
// // // // //               <Radar key={col} name={col} dataKey={col}
// // // // //                 stroke={PALETTE[i]} strokeWidth={2}
// // // // //                 fill={`url(#rg${i})`}
// // // // //               />
// // // // //             ))}
// // // // //             <Legend content={<CustomLegend />} />
// // // // //             <Tooltip content={<Tip />} />
// // // // //           </RadarChart>
// // // // //         </ResponsiveContainer>
// // // // //       </div>
// // // // //     )
// // // // //   }

// // // // //   // ── PIE ─────────────────────────────────────────────────────────
// // // // //   if (resolvedType === "pie") {
// // // // //     return (
// // // // //       <div>
// // // // //         <TypeSwitcher current={resolvedType} types={PIE_TYPES} onChange={setActiveType} />
// // // // //         <ResponsiveContainer width="100%" height={height}>
// // // // //           <PieChart>
// // // // //             <defs>
// // // // //               {PALETTE.map((c, i) => (
// // // // //                 <radialGradient key={i} id={`pg${i}`} cx="50%" cy="30%" r="70%">
// // // // //                   <stop offset="0%" stopColor={c} stopOpacity="1"/>
// // // // //                   <stop offset="100%" stopColor={c} stopOpacity="0.6"/>
// // // // //                 </radialGradient>
// // // // //               ))}
// // // // //             </defs>
// // // // //             <Pie data={data} dataKey={yKeys[0]} nameKey={xKey}
// // // // //               cx="50%" cy="46%" outerRadius="68%"
// // // // //               paddingAngle={3} strokeWidth={0}
// // // // //               labelLine={false} label={<PieLabel />}
// // // // //               isAnimationActive animationBegin={80} animationDuration={900}
// // // // //             >
// // // // //               {data.map((_: any, i: number) => (
// // // // //                 <Cell key={i} fill={`url(#pg${i % PALETTE.length})`} />
// // // // //               ))}
// // // // //             </Pie>
// // // // //             <Tooltip content={<Tip />} />
// // // // //             <Legend content={<CustomLegend />} />
// // // // //           </PieChart>
// // // // //         </ResponsiveContainer>
// // // // //       </div>
// // // // //     )
// // // // //   }

// // // // //   // ── DONUT ───────────────────────────────────────────────────────
// // // // //   if (resolvedType === "donut") {
// // // // //     const total = data.reduce((s: number, d: any) => s + (Number(d[yKeys[0]]) || 0), 0)
// // // // //     return (
// // // // //       <div>
// // // // //         <TypeSwitcher current={resolvedType} types={PIE_TYPES} onChange={setActiveType} />
// // // // //         <div style={{ position: "relative" }}>
// // // // //           <ResponsiveContainer width="100%" height={height}>
// // // // //             <PieChart>
// // // // //               <defs>
// // // // //                 {PALETTE.map((c, i) => (
// // // // //                   <linearGradient key={i} id={`dg${i}`} x1="0" y1="0" x2="1" y2="1">
// // // // //                     <stop offset="0%" stopColor={c} stopOpacity="1"/>
// // // // //                     <stop offset="100%" stopColor={c} stopOpacity="0.5"/>
// // // // //                   </linearGradient>
// // // // //                 ))}
// // // // //               </defs>
// // // // //               <Pie data={data} dataKey={yKeys[0]} nameKey={xKey}
// // // // //                 cx="50%" cy="46%" innerRadius="44%" outerRadius="70%"
// // // // //                 paddingAngle={3} strokeWidth={0}
// // // // //                 isAnimationActive animationBegin={80} animationDuration={1000}
// // // // //               >
// // // // //                 {data.map((_: any, i: number) => (
// // // // //                   <Cell key={i} fill={`url(#dg${i % PALETTE.length})`} />
// // // // //                 ))}
// // // // //               </Pie>
// // // // //               <Tooltip content={<Tip />} />
// // // // //               <Legend content={<CustomLegend />} />
// // // // //             </PieChart>
// // // // //           </ResponsiveContainer>
// // // // //           <div style={{ position: "absolute", top: "43%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", pointerEvents: "none" }}>
// // // // //             <p style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "#fdf0f3", letterSpacing: "-0.03em", lineHeight: 1 }}>
// // // // //               {fmt(total)}
// // // // //             </p>
// // // // //             <p style={{ fontSize: "9px", color: "var(--text-muted)", letterSpacing: "0.12em", marginTop: "3px" }}>TOTAL</p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     )
// // // // //   }

// // // // //   // ── SCATTER ─────────────────────────────────────────────────────
// // // // //   if (resolvedType === "scatter") {
// // // // //     const scatterData = data.map(row => ({ x: Number(row[xKey]) || 0, y: Number(row[yKeys[0]]) || 0, z: 1 }))
// // // // //     return (
// // // // //       <ResponsiveContainer width="100%" height={height}>
// // // // //         <ScatterChart margin={{ top: 6, right: 8, bottom: 0, left: 0 }}>
// // // // //           <CartesianGrid {...GRID_PROPS} />
// // // // //           <XAxis type="number" dataKey="x" name={xKey} {...AXIS_STYLE} tickFormatter={fmt} />
// // // // //           <YAxis type="number" dataKey="y" name={yKeys[0]} {...AXIS_STYLE} width={52} tickFormatter={fmt} />
// // // // //           <ZAxis range={[40, 160]} />
// // // // //           <Tooltip content={<Tip />} cursor={{ strokeDasharray: "3 3", stroke: "rgba(255,255,255,0.1)" }} />
// // // // //           <Scatter data={scatterData} fill={accent}>
// // // // //             {scatterData.map((_: any, i: number) => (
// // // // //               <Cell key={i} fill={PALETTE[i % PALETTE.length]} fillOpacity={0.8} />
// // // // //             ))}
// // // // //           </Scatter>
// // // // //         </ScatterChart>
// // // // //       </ResponsiveContainer>
// // // // //     )
// // // // //   }

// // // // //   // ── TABLE ───────────────────────────────────────────────────────
// // // // //   const cols = Object.keys(data[0])
// // // // //   return (
// // // // //     <div style={{ overflowX: "auto", borderRadius: "10px", overflow: "hidden" }}>
// // // // //       <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
// // // // //         <thead>
// // // // //           <tr style={{ background: "rgba(225,50,90,0.06)" }}>
// // // // //             {cols.map(col => (
// // // // //               <th key={col} style={{ padding: "11px 16px", textAlign: "left", color: "var(--text-muted)", fontWeight: 500, fontSize: "10px", letterSpacing: "0.1em", borderBottom: "1px solid rgba(225,50,90,0.15)", fontFamily: "var(--font-display)" }}>
// // // // //                 {col.toUpperCase().replace(/_/g, " ")}
// // // // //               </th>
// // // // //             ))}
// // // // //           </tr>
// // // // //         </thead>
// // // // //         <tbody>
// // // // //           {data.slice(0, 25).map((row: any, i: number) => (
// // // // //             <TableRow key={i} row={row} cols={cols} even={i % 2 === 0} />
// // // // //           ))}
// // // // //         </tbody>
// // // // //       </table>
// // // // //       {data.length > 25 && (
// // // // //         <div style={{ textAlign: "center", padding: "12px", borderTop: "1px solid rgba(255,255,255,0.04)", background: "rgba(0,0,0,0.2)" }}>
// // // // //           <p style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "0.08em" }}>+{data.length - 25} MORE ROWS</p>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // function TableRow({ row, cols, even }: { row: any; cols: string[]; even: boolean }) {
// // // // //   const [h, setH] = useState(false)
// // // // //   return (
// // // // //     <tr onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
// // // // //       style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: h ? "rgba(225,50,90,0.05)" : even ? "rgba(255,255,255,0.01)" : "transparent", transition: "background 0.15s" }}
// // // // //     >
// // // // //       {cols.map((col, j) => (
// // // // //         <td key={col} style={{ padding: "10px 16px", color: j === 0 ? "#fdf0f3" : "var(--text-secondary)", fontWeight: j === 0 ? 400 : 300, fontSize: "13px", borderLeft: j === 0 ? `2px solid ${h ? "#e1325a" : "transparent"}` : "none", transition: "border-color 0.2s" }}>
// // // // //           {row[col] != null ? String(row[col]) : "—"}
// // // // //         </td>
// // // // //       ))}
// // // // //     </tr>
// // // // //   )
// // // // // }

// // // // "use client"

// // // // import { useState } from "react"
// // // // import {
// // // //   BarChart, Bar, LineChart, Line, AreaChart, Area,
// // // //   PieChart, Pie, Cell, XAxis, YAxis, Tooltip,
// // // //   CartesianGrid, ResponsiveContainer, Legend, TooltipProps,
// // // //   RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
// // // //   ScatterChart, Scatter, ZAxis, ComposedChart,
// // // // } from "recharts"

// // // // interface ChartRendererProps {
// // // //   type: string
// // // //   data: any[]
// // // //   columns: string[]
// // // //   size?: "large" | "small" | "pie"
// // // //   accent?: string
// // // // }

// // // // const PALETTE = [
// // // //   "#e1325a","#a78bfa","#2dd4bf","#f0c060",
// // // //   "#fb923c","#34d399","#38bdf8","#f472b6",
// // // //   "#818cf8","#a3e635",
// // // // ]

// // // // function getDomain(data: any[], keys: string[]): [number, number] {
// // // //   let min = Infinity, max = -Infinity
// // // //   data.forEach(row => keys.forEach(k => {
// // // //     const v = Number(row[k])
// // // //     if (!isNaN(v)) { min = Math.min(min, v); max = Math.max(max, v) }
// // // //   }))
// // // //   if (min === Infinity) return [0, 100]
// // // //   const range = max - min
// // // //   const pad = range * 0.15 || max * 0.1 || 10
// // // //   return [Math.floor(Math.max(0, min - pad)), Math.ceil(max + pad * 0.4)]
// // // // }

// // // // function fmt(v: number) {
// // // //   return v >= 1000000 ? `${(v/1000000).toFixed(1)}M`
// // // //        : v >= 1000    ? `${(v/1000).toFixed(0)}k`
// // // //        : Number.isInteger(v) ? String(v) : v.toFixed(1)
// // // // }

// // // // const AXIS = {
// // // //   tick: { fontSize: 11, fill: "#55445a", fontFamily: "'DM Sans',sans-serif", fontWeight: 500 },
// // // //   axisLine: { stroke: "rgba(255,255,255,0.04)" },
// // // //   tickLine: false as any,
// // // // }
// // // // const GRID = { stroke: "rgba(255,255,255,0.05)", strokeDasharray: "0" }

// // // // // ── Tooltip ───────────────────────────────────────────────────────────
// // // // function Tip({ active, payload, label }: TooltipProps<any,any>) {
// // // //   if (!active || !payload?.length) return null
// // // //   return (
// // // //     <div style={{ background: "linear-gradient(145deg,#1e0e16,#160c12)", border: "1px solid rgba(225,50,90,0.3)", borderRadius: "14px", padding: "13px 17px", boxShadow: "0 20px 48px rgba(0,0,0,0.7)", minWidth: "130px", backdropFilter: "blur(12px)" }}>
// // // //       {label != null && <p style={{ fontSize: "11px", color: "#55445a", marginBottom: "8px", letterSpacing: "0.06em", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "7px", fontWeight: 600 }}>{String(label)}</p>}
// // // //       {payload.map((e: any, i: number) => (
// // // //         <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", marginTop: i > 0 ? "5px" : 0 }}>
// // // //           <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
// // // //             <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: e.color || PALETTE[0], boxShadow: `0 0 6px ${e.color || PALETTE[0]}` }} />
// // // //             {e.name && <span style={{ fontSize: "10px", color: "#7a6a88", fontWeight: 500 }}>{e.name}</span>}
// // // //           </div>
// // // //           <span style={{ fontSize: "15px", color: "#fdf0f3", fontWeight: 800, fontFamily: "var(--font-display)" }}>
// // // //             {typeof e.value === "number" ? fmt(e.value) : e.value}
// // // //           </span>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   )
// // // // }

// // // // // ── Glow Bar ─────────────────────────────────────────────────────────
// // // // function GlowBar(props: any) {
// // // //   const { x, y, width, height, fill, index } = props
// // // //   const [h, setH] = useState(false)
// // // //   if (!height || height <= 0) return null
// // // //   const c = PALETTE[index % PALETTE.length]
// // // //   return (
// // // //     <g>
// // // //       {h && <rect x={x-3} y={y-3} width={width+6} height={height+6} rx={7} fill={c} opacity={0.1}/>}
// // // //       <rect x={x} y={y} width={width} height={height} rx={[5,5,0,0] as any} fill={fill}
// // // //         opacity={h ? 1 : 0.85} style={{ cursor: "pointer", transition: "opacity 0.15s" }}
// // // //         onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
// // // //       />
// // // //       <rect x={x+1} y={y+1} width={width-2} height={Math.min(4, height-2)} rx={3} fill="rgba(255,255,255,0.22)" />
// // // //     </g>
// // // //   )
// // // // }

// // // // function ADot({ cx, cy, fill }: any) {
// // // //   return (
// // // //     <g>
// // // //       <circle cx={cx} cy={cy} r={11} fill={fill} opacity={0.1}/>
// // // //       <circle cx={cx} cy={cy} r={6} fill={fill} opacity={0.22}/>
// // // //       <circle cx={cx} cy={cy} r={4} fill={fill} stroke="#180e13" strokeWidth={2}/>
// // // //     </g>
// // // //   )
// // // // }

// // // // function CLegend({ payload }: any) {
// // // //   if (!payload?.length) return null
// // // //   return (
// // // //     <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", paddingTop: "12px" }}>
// // // //       {payload.map((e: any, i: number) => (
// // // //         <div key={i} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
// // // //           <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: e.color, boxShadow: `0 0 5px ${e.color}88` }}/>
// // // //           <span style={{ fontSize: "12px", color: "#8888aa", fontFamily: "var(--font-body)", fontWeight: 500 }}>{e.value}</span>
// // // //         </div>
// // // //       ))}
// // // //     </div>
// // // //   )
// // // // }

// // // // function PLabelInner({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) {
// // // //   if (percent < 0.05) return null
// // // //   const R = Math.PI / 180
// // // //   const r = innerRadius + (outerRadius - innerRadius) * 0.55
// // // //   return (
// // // //     <text x={cx + r * Math.cos(-midAngle * R)} y={cy + r * Math.sin(-midAngle * R)}
// // // //       fill="rgba(255,255,255,0.92)" textAnchor="middle" dominantBaseline="central"
// // // //       style={{ fontSize: "12px", fontFamily: "var(--font-display)", fontWeight: 700 }}>
// // // //       {`${(percent*100).toFixed(0)}%`}
// // // //     </text>
// // // //   )
// // // // }

// // // // // ── Type Switcher ─────────────────────────────────────────────────────
// // // // const CART_TYPES = [
// // // //   { id: "bar", label: "▊ Bar" },
// // // //   { id: "line", label: "∿ Line" },
// // // //   { id: "area", label: "◬ Area" },
// // // //   { id: "composed", label: "⊕ Mixed" },
// // // // ]
// // // // const PIE_TYPES = [
// // // //   { id: "pie", label: "◔ Pie" },
// // // //   { id: "donut", label: "◯ Donut" },
// // // //   { id: "radar", label: "⬡ Radar" },
// // // // ]

// // // // function Switcher({ current, types, onChange, accent }: { current: string; types: typeof CART_TYPES; onChange: (t: string) => void; accent: string }) {
// // // //   return (
// // // //     <div style={{ display: "flex", gap: "4px", marginBottom: "10px", flexWrap: "wrap" }}>
// // // //       {types.map(t => (
// // // //         <button key={t.id} onClick={() => onChange(t.id)} style={{
// // // //           padding: "4px 11px",
// // // //           background: current === t.id ? `${accent}22` : "rgba(255,255,255,0.03)",
// // // //           border: `1px solid ${current === t.id ? accent + "55" : "rgba(255,255,255,0.07)"}`,
// // // //           borderRadius: "8px", fontSize: "11px",
// // // //           color: current === t.id ? accent : "#55445a",
// // // //           cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 600,
// // // //           transition: "all 0.18s",
// // // //         }}>{t.label}</button>
// // // //       ))}
// // // //     </div>
// // // //   )
// // // // }

// // // // function Empty({ height }: { height: number }) {
// // // //   return (
// // // //     <div style={{ height, display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed rgba(255,255,255,0.06)", borderRadius: "12px" }}>
// // // //       <p style={{ color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.08em", fontWeight: 500 }}>NO DATA</p>
// // // //     </div>
// // // //   )
// // // // }

// // // // // ── Main ──────────────────────────────────────────────────────────────
// // // // export default function ChartRenderer({ type, data, columns, size = "small", accent = "#e1325a" }: ChartRendererProps) {
// // // //   const height = size === "large" ? 380 : size === "pie" ? 300 : 265
// // // //   const xKey = columns?.[0] || "name"
// // // //   const yKeys = columns?.slice(1)?.length > 0 ? columns.slice(1) : ["value"]

// // // //   const isPie = type === "pie" || type === "donut"
// // // //   const isCart = !isPie && type !== "radar" && type !== "scatter"
// // // //   const [active, setActive] = useState(type)

// // // //   if (!data || data.length === 0) return <Empty height={height} />
// // // //   const domain = getDomain(data, yKeys)

// // // //   // ── COMPOSED ──────────────────────────────────────────────────────
// // // //   if (active === "composed") {
// // // //     return (
// // // //       <div>
// // // //         <Switcher current={active} types={CART_TYPES} onChange={setActive} accent={accent} />
// // // //         <ResponsiveContainer width="100%" height={height}>
// // // //           <ComposedChart data={data} margin={{ top: 6, right: 8, bottom: 0, left: 0 }}>
// // // //             <defs>{PALETTE.map((c,i) => <linearGradient key={i} id={`cgr${i}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={c} stopOpacity="1"/><stop offset="100%" stopColor={c} stopOpacity="0.3"/></linearGradient>)}</defs>
// // // //             <CartesianGrid vertical={false} {...GRID} />
// // // //             <XAxis dataKey={xKey} {...AXIS} />
// // // //             <YAxis {...AXIS} width={52} domain={domain} tickFormatter={fmt} />
// // // //             <Tooltip content={<Tip />} cursor={{ fill: `${accent}08` }} />
// // // //             <Legend content={<CLegend />} />
// // // //             {yKeys.map((col, i) => i === 0
// // // //               ? <Bar key={col} dataKey={col} fill={`url(#cgr${i})`} maxBarSize={50} radius={[4,4,0,0]} />
// // // //               : <Line key={col} type="monotone" dataKey={col} stroke={PALETTE[i]} strokeWidth={2.5} dot={{ fill: PALETTE[i], stroke: "#180e13", strokeWidth: 2, r: 3 }} activeDot={<ADot fill={PALETTE[i]} />} />
// // // //             )}
// // // //           </ComposedChart>
// // // //         </ResponsiveContainer>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   // ── BAR ──────────────────────────────────────────────────────────
// // // //   if (active === "bar") {
// // // //     return (
// // // //       <div>
// // // //         <Switcher current={active} types={CART_TYPES} onChange={setActive} accent={accent} />
// // // //         <ResponsiveContainer width="100%" height={height}>
// // // //           <BarChart data={data} barCategoryGap="32%" barGap={3} margin={{ top: 6, right: 8, bottom: 0, left: 0 }}>
// // // //             <defs>
// // // //               <filter id="bgl" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
// // // //               {PALETTE.map((c,i) => <linearGradient key={i} id={`bgr${i}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={c} stopOpacity="1"/><stop offset="100%" stopColor={c} stopOpacity="0.28"/></linearGradient>)}
// // // //             </defs>
// // // //             <CartesianGrid vertical={false} {...GRID} />
// // // //             <XAxis dataKey={xKey} {...AXIS} interval={0} tick={{ ...AXIS.tick, fontSize: data.length > 8 ? 9 : 11 }} />
// // // //             <YAxis {...AXIS} width={52} domain={domain} tickFormatter={fmt} />
// // // //             <Tooltip content={<Tip />} cursor={{ fill: `${accent}08`, rx: 6 }} />
// // // //             {yKeys.length > 1 && <Legend content={<CLegend />} />}
// // // //             {yKeys.map((col, i) => <Bar key={col} dataKey={col} fill={`url(#bgr${i})`} maxBarSize={52} shape={<GlowBar />} />)}
// // // //           </BarChart>
// // // //         </ResponsiveContainer>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   // ── LINE ─────────────────────────────────────────────────────────
// // // //   if (active === "line") {
// // // //     return (
// // // //       <div>
// // // //         <Switcher current={active} types={CART_TYPES} onChange={setActive} accent={accent} />
// // // //         <ResponsiveContainer width="100%" height={height}>
// // // //           <LineChart data={data} margin={{ top: 6, right: 8, bottom: 0, left: 0 }}>
// // // //             <defs><linearGradient id="lgrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#e1325a"/><stop offset="50%" stopColor="#f0c060"/><stop offset="100%" stopColor="#a78bfa"/></linearGradient></defs>
// // // //             <CartesianGrid {...GRID} />
// // // //             <XAxis dataKey={xKey} {...AXIS} />
// // // //             <YAxis {...AXIS} width={52} domain={domain} tickFormatter={fmt} />
// // // //             <Tooltip content={<Tip />} />
// // // //             {yKeys.length > 1 && <Legend content={<CLegend />} />}
// // // //             {yKeys.map((col, i) => <Line key={col} type="monotone" dataKey={col} stroke={i===0?"url(#lgrad)":PALETTE[i+1]} strokeWidth={2.5} dot={{ fill: PALETTE[i], stroke: "#180e13", strokeWidth: 2, r: 4 }} activeDot={<ADot fill={PALETTE[i]}/>} />)}
// // // //           </LineChart>
// // // //         </ResponsiveContainer>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   // ── AREA ─────────────────────────────────────────────────────────
// // // //   if (active === "area") {
// // // //     return (
// // // //       <div>
// // // //         <Switcher current={active} types={CART_TYPES} onChange={setActive} accent={accent} />
// // // //         <ResponsiveContainer width="100%" height={height}>
// // // //           <AreaChart data={data} margin={{ top: 6, right: 8, bottom: 0, left: 0 }}>
// // // //             <defs>{yKeys.map((_,i) => <linearGradient key={i} id={`agr${i}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={PALETTE[i]} stopOpacity="0.45"/><stop offset="65%" stopColor={PALETTE[i]} stopOpacity="0.07"/><stop offset="100%" stopColor={PALETTE[i]} stopOpacity="0"/></linearGradient>)}</defs>
// // // //             <CartesianGrid {...GRID} />
// // // //             <XAxis dataKey={xKey} {...AXIS} />
// // // //             <YAxis {...AXIS} width={52} domain={domain} tickFormatter={fmt} />
// // // //             <Tooltip content={<Tip />} />
// // // //             {yKeys.length > 1 && <Legend content={<CLegend />} />}
// // // //             {yKeys.map((col,i) => <Area key={col} type="monotone" dataKey={col} stroke={PALETTE[i]} strokeWidth={2.5} fill={`url(#agr${i})`} dot={false} activeDot={<ADot fill={PALETTE[i]}/>}/>)}
// // // //           </AreaChart>
// // // //         </ResponsiveContainer>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   // ── RADAR ────────────────────────────────────────────────────────
// // // //   if (active === "radar") {
// // // //     return (
// // // //       <div>
// // // //         <Switcher current={active} types={PIE_TYPES} onChange={setActive} accent={accent} />
// // // //         <ResponsiveContainer width="100%" height={height}>
// // // //           <RadarChart data={data} cx="50%" cy="50%" outerRadius="68%">
// // // //             <defs>{yKeys.map((_,i) => <linearGradient key={i} id={`rgr${i}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={PALETTE[i]} stopOpacity="0.35"/><stop offset="100%" stopColor={PALETTE[i]} stopOpacity="0.05"/></linearGradient>)}</defs>
// // // //             <PolarGrid stroke="rgba(255,255,255,0.07)" />
// // // //             <PolarAngleAxis dataKey={xKey} tick={{ fontSize: 11, fill: "#55445a", fontFamily: "'DM Sans',sans-serif", fontWeight: 500 }} />
// // // //             <PolarRadiusAxis tick={{ fontSize: 9, fill: "#44445a" }} axisLine={false} />
// // // //             {yKeys.map((col,i) => <Radar key={col} name={col} dataKey={col} stroke={PALETTE[i]} strokeWidth={2} fill={`url(#rgr${i})`}/>)}
// // // //             <Legend content={<CLegend />} />
// // // //             <Tooltip content={<Tip />} />
// // // //           </RadarChart>
// // // //         </ResponsiveContainer>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   // ── PIE ──────────────────────────────────────────────────────────
// // // //   if (active === "pie") {
// // // //     return (
// // // //       <div>
// // // //         <Switcher current={active} types={PIE_TYPES} onChange={setActive} accent={accent} />
// // // //         <ResponsiveContainer width="100%" height={height}>
// // // //           <PieChart>
// // // //             <defs>{PALETTE.map((c,i) => <radialGradient key={i} id={`pgr${i}`} cx="50%" cy="30%" r="70%"><stop offset="0%" stopColor={c} stopOpacity="1"/><stop offset="100%" stopColor={c} stopOpacity="0.6"/></radialGradient>)}</defs>
// // // //             <Pie data={data} dataKey={yKeys[0]} nameKey={xKey} cx="50%" cy="46%" outerRadius="68%" paddingAngle={3} strokeWidth={0} labelLine={false} label={<PLabelInner />} isAnimationActive animationBegin={80} animationDuration={900}>
// // // //               {data.map((_: any, i: number) => <Cell key={i} fill={`url(#pgr${i % PALETTE.length})`} />)}
// // // //             </Pie>
// // // //             <Tooltip content={<Tip />} />
// // // //             <Legend content={<CLegend />} />
// // // //           </PieChart>
// // // //         </ResponsiveContainer>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   // ── DONUT ────────────────────────────────────────────────────────
// // // //   if (active === "donut") {
// // // //     const total = data.reduce((s: number, d: any) => s + (Number(d[yKeys[0]]) || 0), 0)
// // // //     return (
// // // //       <div>
// // // //         <Switcher current={active} types={PIE_TYPES} onChange={setActive} accent={accent} />
// // // //         <div style={{ position: "relative" }}>
// // // //           <ResponsiveContainer width="100%" height={height}>
// // // //             <PieChart>
// // // //               <defs>{PALETTE.map((c,i) => <linearGradient key={i} id={`dgr${i}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor={c} stopOpacity="1"/><stop offset="100%" stopColor={c} stopOpacity="0.5"/></linearGradient>)}</defs>
// // // //               <Pie data={data} dataKey={yKeys[0]} nameKey={xKey} cx="50%" cy="46%" innerRadius="44%" outerRadius="70%" paddingAngle={3} strokeWidth={0} isAnimationActive animationBegin={80} animationDuration={1000}>
// // // //                 {data.map((_: any, i: number) => <Cell key={i} fill={`url(#dgr${i % PALETTE.length})`} />)}
// // // //               </Pie>
// // // //               <Tooltip content={<Tip />} />
// // // //               <Legend content={<CLegend />} />
// // // //             </PieChart>
// // // //           </ResponsiveContainer>
// // // //           <div style={{ position: "absolute", top: "43%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", pointerEvents: "none" }}>
// // // //             <p style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 800, color: "#fdf0f3", letterSpacing: "-0.03em", lineHeight: 1 }}>{fmt(total)}</p>
// // // //             <p style={{ fontSize: "9px", color: "var(--text-muted)", letterSpacing: "0.12em", marginTop: "3px", fontWeight: 600 }}>TOTAL</p>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   // ── TABLE ────────────────────────────────────────────────────────
// // // //   const cols = Object.keys(data[0])
// // // //   return (
// // // //     <div style={{ overflowX: "auto", borderRadius: "10px", overflow: "hidden" }}>
// // // //       <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
// // // //         <thead>
// // // //           <tr style={{ background: "rgba(225,50,90,0.06)" }}>
// // // //             {cols.map(col => <th key={col} style={{ padding: "11px 16px", textAlign: "left", color: "var(--text-muted)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.1em", borderBottom: "1px solid rgba(225,50,90,0.15)", fontFamily: "var(--font-display)" }}>{col.toUpperCase().replace(/_/g," ")}</th>)}
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {data.slice(0, 25).map((row: any, i: number) => <TRow key={i} row={row} cols={cols} even={i%2===0}/>)}
// // // //         </tbody>
// // // //       </table>
// // // //       {data.length > 25 && <div style={{ textAlign: "center", padding: "12px", borderTop: "1px solid rgba(255,255,255,0.04)", background: "rgba(0,0,0,0.2)" }}><p style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "0.08em", fontWeight: 600 }}>+{data.length-25} MORE ROWS</p></div>}
// // // //     </div>
// // // //   )
// // // // }

// // // // function TRow({ row, cols, even }: { row: any; cols: string[]; even: boolean }) {
// // // //   const [h, setH] = useState(false)
// // // //   return (
// // // //     <tr onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
// // // //       style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: h ? "rgba(225,50,90,0.05)" : even ? "rgba(255,255,255,0.01)" : "transparent", transition: "background 0.15s" }}>
// // // //       {cols.map((col, j) => (
// // // //         <td key={col} style={{ padding: "10px 16px", color: j===0 ? "#fdf0f3" : "var(--text-secondary)", fontWeight: j===0 ? 600 : 300, fontSize: "13px", borderLeft: j===0 ? `2px solid ${h ? "#e1325a" : "transparent"}` : "none", transition: "border-color 0.2s" }}>
// // // //           {row[col] != null ? String(row[col]) : "—"}
// // // //         </td>
// // // //       ))}
// // // //     </tr>
// // // //   )
// // // // }

// // // "use client"

// // // import { useState } from "react"
// // // import {
// // //   BarChart, Bar, LineChart, Line, AreaChart, Area,
// // //   PieChart, Pie, Cell, XAxis, YAxis, Tooltip,
// // //   CartesianGrid, ResponsiveContainer, Legend, TooltipProps,
// // //   RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
// // //   ScatterChart, Scatter, ZAxis, ComposedChart,
// // // } from "recharts"

// // // interface ChartRendererProps {
// // //   type: string
// // //   data: any[]
// // //   columns: string[]
// // //   size?: "large" | "small" | "pie"
// // //   accent?: string
// // // }

// // // const PALETTE = [
// // //   "#e1325a","#a78bfa","#2dd4bf","#f0c060",
// // //   "#fb923c","#34d399","#38bdf8","#f472b6",
// // //   "#818cf8","#a3e635",
// // // ]

// // // function getDomain(data: any[], keys: string[]): [number, number] {
// // //   let min = Infinity, max = -Infinity
// // //   data.forEach(row => keys.forEach(k => {
// // //     const v = Number(row[k])
// // //     if (!isNaN(v)) { min = Math.min(min, v); max = Math.max(max, v) }
// // //   }))
// // //   if (min === Infinity) return [0, 100]
// // //   const range = max - min || max * 0.2 || 1
// // //   // Always zoom: start below min so differences are clearly visible
// // //   const pad = range * 0.25
// // //   const domainMin = min - pad
// // //   const domainMax = max + pad * 0.3
// // //   return [
// // //     parseFloat(domainMin.toFixed(2)),
// // //     parseFloat(domainMax.toFixed(2))
// // //   ]
// // // }

// // // function fmt(v: number) {
// // //   return v >= 1000000 ? `${(v/1000000).toFixed(1)}M`
// // //        : v >= 1000    ? `${(v/1000).toFixed(0)}k`
// // //        : Number.isInteger(v) ? String(v) : v.toFixed(1)
// // // }

// // // const AXIS = {
// // //   tick: { fontSize: 11, fill: "#55445a", fontFamily: "'DM Sans',sans-serif", fontWeight: 500 },
// // //   axisLine: { stroke: "rgba(255,255,255,0.04)" },
// // //   tickLine: false as any,
// // // }
// // // const GRID = { stroke: "rgba(255,255,255,0.05)", strokeDasharray: "0" }

// // // // ── Tooltip ───────────────────────────────────────────────────────────
// // // function Tip({ active, payload, label }: TooltipProps<any,any>) {
// // //   if (!active || !payload?.length) return null
// // //   return (
// // //     <div style={{ background: "linear-gradient(145deg,#1e0e16,#160c12)", border: "1px solid rgba(225,50,90,0.3)", borderRadius: "14px", padding: "13px 17px", boxShadow: "0 20px 48px rgba(0,0,0,0.7)", minWidth: "130px", backdropFilter: "blur(12px)" }}>
// // //       {label != null && <p style={{ fontSize: "11px", color: "#55445a", marginBottom: "8px", letterSpacing: "0.06em", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "7px", fontWeight: 600 }}>{String(label)}</p>}
// // //       {payload.map((e: any, i: number) => (
// // //         <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", marginTop: i > 0 ? "5px" : 0 }}>
// // //           <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
// // //             <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: e.color || PALETTE[0], boxShadow: `0 0 6px ${e.color || PALETTE[0]}` }} />
// // //             {e.name && <span style={{ fontSize: "10px", color: "#7a6a88", fontWeight: 500 }}>{e.name}</span>}
// // //           </div>
// // //           <span style={{ fontSize: "15px", color: "#fdf0f3", fontWeight: 800, fontFamily: "var(--font-display)" }}>
// // //             {typeof e.value === "number" ? fmt(e.value) : e.value}
// // //           </span>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   )
// // // }

// // // // ── Glow Bar ─────────────────────────────────────────────────────────
// // // function GlowBar(props: any) {
// // //   const { x, y, width, height, fill, index } = props
// // //   const [h, setH] = useState(false)
// // //   // height can be small when domain is zoomed — only skip truly invalid
// // //   if (height === undefined || height === null || isNaN(height)) return null
// // //   const safeH = Math.max(height, 2) // min 2px so bar is always visible
// // //   const c = PALETTE[index % PALETTE.length]
// // //   return (
// // //     <g>
// // //       {h && <rect x={x-3} y={y-3} width={width+6} height={safeH+6} rx={7} fill={c} opacity={0.1}/>}
// // //       <rect x={x} y={y} width={width} height={safeH}
// // //         rx={height > 6 ? 5 : 2}
// // //         fill={fill}
// // //         opacity={h ? 1 : 0.88}
// // //         style={{ cursor: "pointer", transition: "opacity 0.15s" }}
// // //         onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
// // //       />
// // //       {safeH > 5 && (
// // //         <rect x={x+1} y={y+1} width={width-2} height={Math.min(4, safeH-2)} rx={3} fill="rgba(255,255,255,0.22)" />
// // //       )}
// // //     </g>
// // //   )
// // // }

// // // function ADot({ cx, cy, fill }: any) {
// // //   return (
// // //     <g>
// // //       <circle cx={cx} cy={cy} r={11} fill={fill} opacity={0.1}/>
// // //       <circle cx={cx} cy={cy} r={6} fill={fill} opacity={0.22}/>
// // //       <circle cx={cx} cy={cy} r={4} fill={fill} stroke="#180e13" strokeWidth={2}/>
// // //     </g>
// // //   )
// // // }

// // // function CLegend({ payload }: any) {
// // //   if (!payload?.length) return null
// // //   return (
// // //     <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", paddingTop: "12px" }}>
// // //       {payload.map((e: any, i: number) => (
// // //         <div key={i} style={{ display: "flex", alignItems: "center", gap: "5px" }}>
// // //           <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: e.color, boxShadow: `0 0 5px ${e.color}88` }}/>
// // //           <span style={{ fontSize: "12px", color: "#8888aa", fontFamily: "var(--font-body)", fontWeight: 500 }}>{e.value}</span>
// // //         </div>
// // //       ))}
// // //     </div>
// // //   )
// // // }

// // // function PLabelInner({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) {
// // //   if (percent < 0.05) return null
// // //   const R = Math.PI / 180
// // //   const r = innerRadius + (outerRadius - innerRadius) * 0.55
// // //   return (
// // //     <text x={cx + r * Math.cos(-midAngle * R)} y={cy + r * Math.sin(-midAngle * R)}
// // //       fill="rgba(255,255,255,0.92)" textAnchor="middle" dominantBaseline="central"
// // //       style={{ fontSize: "12px", fontFamily: "var(--font-display)", fontWeight: 700 }}>
// // //       {`${(percent*100).toFixed(0)}%`}
// // //     </text>
// // //   )
// // // }

// // // // ── Type Switcher ─────────────────────────────────────────────────────
// // // const CART_TYPES = [
// // //   { id: "bar", label: "▊ Bar" },
// // //   { id: "line", label: "∿ Line" },
// // //   { id: "area", label: "◬ Area" },
// // //   { id: "composed", label: "⊕ Mixed" },
// // //   { id: "pie", label: "◔ Pie" },
// // //   { id: "donut", label: "◯ Donut" },
// // // ]
// // // const PIE_TYPES = [
// // //   { id: "pie", label: "◔ Pie" },
// // //   { id: "donut", label: "◯ Donut" },
// // //   { id: "radar", label: "⬡ Radar" },
// // //   { id: "bar", label: "▊ Bar" },
// // //   { id: "line", label: "∿ Line" },
// // // ]

// // // function Switcher({ current, types, onChange, accent }: { current: string; types: { id: string; label: string }[]; onChange: (t: string) => void; accent: string }) {
// // //   return (
// // //     <div style={{ display: "flex", gap: "4px", marginBottom: "10px", flexWrap: "wrap" }}>
// // //       {types.map(t => (
// // //         <button key={t.id} onClick={() => onChange(t.id)} style={{
// // //           padding: "4px 11px",
// // //           background: current === t.id ? `${accent}22` : "rgba(255,255,255,0.03)",
// // //           border: `1px solid ${current === t.id ? accent + "55" : "rgba(255,255,255,0.07)"}`,
// // //           borderRadius: "8px", fontSize: "11px",
// // //           color: current === t.id ? accent : "#55445a",
// // //           cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 600,
// // //           transition: "all 0.18s",
// // //         }}>{t.label}</button>
// // //       ))}
// // //     </div>
// // //   )
// // // }

// // // function Empty({ height }: { height: number }) {
// // //   return (
// // //     <div style={{ height, display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed rgba(255,255,255,0.06)", borderRadius: "12px" }}>
// // //       <p style={{ color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.08em", fontWeight: 500 }}>NO DATA</p>
// // //     </div>
// // //   )
// // // }

// // // // ── Main ──────────────────────────────────────────────────────────────
// // // export default function ChartRenderer({ type, data, columns, size = "small", accent = "#e1325a" }: ChartRendererProps) {
// // //   const height = size === "large" ? 380 : size === "pie" ? 300 : 265
// // //   const xKey = columns?.[0] || "name"
// // //   const yKeys = columns?.slice(1)?.length > 0 ? columns.slice(1) : ["value"]
// // //   const [active, setActive] = useState(type)

// // //   if (!data || data.length === 0) return <Empty height={height} />
// // //   const domain = getDomain(data, yKeys)

// // //   // All charts get ALL type options — unified switcher
// // //   const ALL_TYPES = [
// // //     { id: "bar", label: "▊ Bar" },
// // //     { id: "line", label: "∿ Line" },
// // //     { id: "area", label: "◬ Area" },
// // //     { id: "composed", label: "⊕ Mixed" },
// // //     { id: "pie", label: "◔ Pie" },
// // //     { id: "donut", label: "◯ Donut" },
// // //     { id: "radar", label: "⬡ Radar" },
// // //   ]

// // //   // ── COMPOSED ──────────────────────────────────────────────────────
// // //   if (active === "composed") {
// // //     return (
// // //       <div>
// // //         <Switcher current={active} types={ALL_TYPES} onChange={setActive} accent={accent} />
// // //         <ResponsiveContainer width="100%" height={height}>
// // //           <ComposedChart data={data} margin={{ top: 6, right: 8, bottom: 0, left: 0 }}>
// // //             <defs>{PALETTE.map((c,i) => <linearGradient key={i} id={`cgr${i}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={c} stopOpacity="1"/><stop offset="100%" stopColor={c} stopOpacity="0.3"/></linearGradient>)}</defs>
// // //             <CartesianGrid vertical={false} {...GRID} />
// // //             <XAxis dataKey={xKey} {...AXIS} />
// // //             <YAxis {...AXIS} width={52} domain={domain} tickFormatter={fmt} allowDataOverflow />
// // //             <Tooltip content={<Tip />} cursor={{ fill: `${accent}08` }} />
// // //             <Legend content={<CLegend />} />
// // //             {yKeys.map((col, i) => i === 0
// // //               ? <Bar key={col} dataKey={col} fill={`url(#cgr${i})`} maxBarSize={50} radius={[4,4,0,0]} />
// // //               : <Line key={col} type="monotone" dataKey={col} stroke={PALETTE[i]} strokeWidth={2.5} dot={{ fill: PALETTE[i], stroke: "#180e13", strokeWidth: 2, r: 3 }} activeDot={<ADot fill={PALETTE[i]} />} />
// // //             )}
// // //           </ComposedChart>
// // //         </ResponsiveContainer>
// // //       </div>
// // //     )
// // //   }

// // //   // ── BAR ──────────────────────────────────────────────────────────
// // //   if (active === "bar") {
// // //     return (
// // //       <div>
// // //         <Switcher current={active} types={ALL_TYPES} onChange={setActive} accent={accent} />
// // //         <ResponsiveContainer width="100%" height={height}>
// // //           <BarChart data={data} barCategoryGap="32%" barGap={3} margin={{ top: 6, right: 8, bottom: 0, left: 0 }}>
// // //             <defs>
// // //               <filter id="bgl" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
// // //               {PALETTE.map((c,i) => <linearGradient key={i} id={`bgr${i}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={c} stopOpacity="1"/><stop offset="100%" stopColor={c} stopOpacity="0.28"/></linearGradient>)}
// // //             </defs>
// // //             <CartesianGrid vertical={false} {...GRID} />
// // //             <XAxis dataKey={xKey} {...AXIS} interval={0} tick={{ ...AXIS.tick, fontSize: data.length > 8 ? 9 : 11 }} />
// // //             <YAxis {...AXIS} width={52} domain={domain} tickFormatter={fmt} allowDataOverflow />
// // //             <Tooltip content={<Tip />} cursor={{ fill: `${accent}08`, rx: 6 }} />
// // //             {yKeys.length > 1 && <Legend content={<CLegend />} />}
// // //             {yKeys.map((col, i) => <Bar key={col} dataKey={col} fill={`url(#bgr${i})`} maxBarSize={52} shape={<GlowBar />} />)}
// // //           </BarChart>
// // //         </ResponsiveContainer>
// // //       </div>
// // //     )
// // //   }

// // //   // ── LINE ─────────────────────────────────────────────────────────
// // //   if (active === "line") {
// // //     return (
// // //       <div>
// // //         <Switcher current={active} types={ALL_TYPES} onChange={setActive} accent={accent} />
// // //         <ResponsiveContainer width="100%" height={height}>
// // //           <LineChart data={data} margin={{ top: 6, right: 8, bottom: 0, left: 0 }}>
// // //             <defs><linearGradient id="lgrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#e1325a"/><stop offset="50%" stopColor="#f0c060"/><stop offset="100%" stopColor="#a78bfa"/></linearGradient></defs>
// // //             <CartesianGrid {...GRID} />
// // //             <XAxis dataKey={xKey} {...AXIS} />
// // //             <YAxis {...AXIS} width={52} domain={domain} tickFormatter={fmt} allowDataOverflow />
// // //             <Tooltip content={<Tip />} />
// // //             {yKeys.length > 1 && <Legend content={<CLegend />} />}
// // //             {yKeys.map((col, i) => <Line key={col} type="monotone" dataKey={col} stroke={i===0?"url(#lgrad)":PALETTE[i+1]} strokeWidth={2.5} dot={{ fill: PALETTE[i], stroke: "#180e13", strokeWidth: 2, r: 4 }} activeDot={<ADot fill={PALETTE[i]}/>} />)}
// // //           </LineChart>
// // //         </ResponsiveContainer>
// // //       </div>
// // //     )
// // //   }

// // //   // ── AREA ─────────────────────────────────────────────────────────
// // //   if (active === "area") {
// // //     return (
// // //       <div>
// // //         <Switcher current={active} types={ALL_TYPES} onChange={setActive} accent={accent} />
// // //         <ResponsiveContainer width="100%" height={height}>
// // //           <AreaChart data={data} margin={{ top: 6, right: 8, bottom: 0, left: 0 }}>
// // //             <defs>{yKeys.map((_,i) => <linearGradient key={i} id={`agr${i}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={PALETTE[i]} stopOpacity="0.45"/><stop offset="65%" stopColor={PALETTE[i]} stopOpacity="0.07"/><stop offset="100%" stopColor={PALETTE[i]} stopOpacity="0"/></linearGradient>)}</defs>
// // //             <CartesianGrid {...GRID} />
// // //             <XAxis dataKey={xKey} {...AXIS} />
// // //             <YAxis {...AXIS} width={52} domain={domain} tickFormatter={fmt} allowDataOverflow />
// // //             <Tooltip content={<Tip />} />
// // //             {yKeys.length > 1 && <Legend content={<CLegend />} />}
// // //             {yKeys.map((col,i) => <Area key={col} type="monotone" dataKey={col} stroke={PALETTE[i]} strokeWidth={2.5} fill={`url(#agr${i})`} dot={false} activeDot={<ADot fill={PALETTE[i]}/>}/>)}
// // //           </AreaChart>
// // //         </ResponsiveContainer>
// // //       </div>
// // //     )
// // //   }

// // //   // ── RADAR ────────────────────────────────────────────────────────
// // //   if (active === "radar") {
// // //     return (
// // //       <div>
// // //         <Switcher current={active} types={ALL_TYPES} onChange={setActive} accent={accent} />
// // //         <ResponsiveContainer width="100%" height={height}>
// // //           <RadarChart data={data} cx="50%" cy="50%" outerRadius="68%">
// // //             <defs>{yKeys.map((_,i) => <linearGradient key={i} id={`rgr${i}`} x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor={PALETTE[i]} stopOpacity="0.35"/><stop offset="100%" stopColor={PALETTE[i]} stopOpacity="0.05"/></linearGradient>)}</defs>
// // //             <PolarGrid stroke="rgba(255,255,255,0.07)" />
// // //             <PolarAngleAxis dataKey={xKey} tick={{ fontSize: 11, fill: "#55445a", fontFamily: "'DM Sans',sans-serif", fontWeight: 500 }} />
// // //             <PolarRadiusAxis tick={{ fontSize: 9, fill: "#44445a" }} axisLine={false} />
// // //             {yKeys.map((col,i) => <Radar key={col} name={col} dataKey={col} stroke={PALETTE[i]} strokeWidth={2} fill={`url(#rgr${i})`}/>)}
// // //             <Legend content={<CLegend />} />
// // //             <Tooltip content={<Tip />} />
// // //           </RadarChart>
// // //         </ResponsiveContainer>
// // //       </div>
// // //     )
// // //   }

// // //   // ── PIE ──────────────────────────────────────────────────────────
// // //   if (active === "pie") {
// // //     return (
// // //       <div>
// // //         <Switcher current={active} types={ALL_TYPES} onChange={setActive} accent={accent} />
// // //         <ResponsiveContainer width="100%" height={height}>
// // //           <PieChart>
// // //             <defs>{PALETTE.map((c,i) => <radialGradient key={i} id={`pgr${i}`} cx="50%" cy="30%" r="70%"><stop offset="0%" stopColor={c} stopOpacity="1"/><stop offset="100%" stopColor={c} stopOpacity="0.6"/></radialGradient>)}</defs>
// // //             <Pie data={data} dataKey={yKeys[0]} nameKey={xKey} cx="50%" cy="46%" outerRadius="68%" paddingAngle={3} strokeWidth={0} labelLine={false} label={<PLabelInner />} isAnimationActive animationBegin={80} animationDuration={900}>
// // //               {data.map((_: any, i: number) => <Cell key={i} fill={`url(#pgr${i % PALETTE.length})`} />)}
// // //             </Pie>
// // //             <Tooltip content={<Tip />} />
// // //             <Legend content={<CLegend />} />
// // //           </PieChart>
// // //         </ResponsiveContainer>
// // //       </div>
// // //     )
// // //   }

// // //   // ── DONUT ────────────────────────────────────────────────────────
// // //   if (active === "donut") {
// // //     const total = data.reduce((s: number, d: any) => s + (Number(d[yKeys[0]]) || 0), 0)
// // //     return (
// // //       <div>
// // //         <Switcher current={active} types={ALL_TYPES} onChange={setActive} accent={accent} />
// // //         <div style={{ position: "relative" }}>
// // //           <ResponsiveContainer width="100%" height={height}>
// // //             <PieChart>
// // //               <defs>{PALETTE.map((c,i) => <linearGradient key={i} id={`dgr${i}`} x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor={c} stopOpacity="1"/><stop offset="100%" stopColor={c} stopOpacity="0.5"/></linearGradient>)}</defs>
// // //               <Pie data={data} dataKey={yKeys[0]} nameKey={xKey} cx="50%" cy="46%" innerRadius="44%" outerRadius="70%" paddingAngle={3} strokeWidth={0} isAnimationActive animationBegin={80} animationDuration={1000}>
// // //                 {data.map((_: any, i: number) => <Cell key={i} fill={`url(#dgr${i % PALETTE.length})`} />)}
// // //               </Pie>
// // //               <Tooltip content={<Tip />} />
// // //               <Legend content={<CLegend />} />
// // //             </PieChart>
// // //           </ResponsiveContainer>
// // //           <div style={{ position: "absolute", top: "43%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", pointerEvents: "none" }}>
// // //             <p style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 800, color: "#fdf0f3", letterSpacing: "-0.03em", lineHeight: 1 }}>{fmt(total)}</p>
// // //             <p style={{ fontSize: "9px", color: "var(--text-muted)", letterSpacing: "0.12em", marginTop: "3px", fontWeight: 600 }}>TOTAL</p>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   // ── TABLE ────────────────────────────────────────────────────────
// // //   const cols = Object.keys(data[0])
// // //   return (
// // //     <div style={{ overflowX: "auto", borderRadius: "10px", overflow: "hidden" }}>
// // //       <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
// // //         <thead>
// // //           <tr style={{ background: "rgba(225,50,90,0.06)" }}>
// // //             {cols.map(col => <th key={col} style={{ padding: "11px 16px", textAlign: "left", color: "var(--text-muted)", fontWeight: 700, fontSize: "11px", letterSpacing: "0.1em", borderBottom: "1px solid rgba(225,50,90,0.15)", fontFamily: "var(--font-display)" }}>{col.toUpperCase().replace(/_/g," ")}</th>)}
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {data.slice(0, 25).map((row: any, i: number) => <TRow key={i} row={row} cols={cols} even={i%2===0}/>)}
// // //         </tbody>
// // //       </table>
// // //       {data.length > 25 && <div style={{ textAlign: "center", padding: "12px", borderTop: "1px solid rgba(255,255,255,0.04)", background: "rgba(0,0,0,0.2)" }}><p style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "0.08em", fontWeight: 600 }}>+{data.length-25} MORE ROWS</p></div>}
// // //     </div>
// // //   )
// // // }

// // // function TRow({ row, cols, even }: { row: any; cols: string[]; even: boolean }) {
// // //   const [h, setH] = useState(false)
// // //   return (
// // //     <tr onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
// // //       style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", background: h ? "rgba(225,50,90,0.05)" : even ? "rgba(255,255,255,0.01)" : "transparent", transition: "background 0.15s" }}>
// // //       {cols.map((col, j) => (
// // //         <td key={col} style={{ padding: "10px 16px", color: j===0 ? "#fdf0f3" : "var(--text-secondary)", fontWeight: j===0 ? 600 : 300, fontSize: "13px", borderLeft: j===0 ? `2px solid ${h ? "#e1325a" : "transparent"}` : "none", transition: "border-color 0.2s" }}>
// // //           {row[col] != null ? String(row[col]) : "—"}
// // //         </td>
// // //       ))}
// // //     </tr>
// // //   )
// // // }
// // "use client"

// // import { useState } from "react"
// // import {
// //   BarChart, Bar, LineChart, Line, AreaChart, Area,
// //   PieChart, Pie, Cell, XAxis, YAxis, Tooltip,
// //   CartesianGrid, ResponsiveContainer, Legend, TooltipProps,
// //   RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
// //   ComposedChart,
// // } from "recharts"

// // interface ChartRendererProps {
// //   type: string
// //   data: any[]
// //   columns: string[]
// //   size?: "large" | "small" | "pie"
// //   accent?: string
// //   chartIndex?: number  // 0=primary, 1=second, 2=third etc
// // }

// // // ── Glassmorphism palette ─────────────────────────────────────────────
// // const GLASS_COLORS = [
// //   { solid: "#ff6b9d", glow: "rgba(255,107,157,0.6)", mid: "rgba(255,107,157,0.3)", stop: "rgba(255,107,157,0.08)" },
// //   { solid: "#c084fc", glow: "rgba(192,132,252,0.6)", mid: "rgba(192,132,252,0.3)", stop: "rgba(192,132,252,0.08)" },
// //   { solid: "#22d3ee", glow: "rgba(34,211,238,0.6)",  mid: "rgba(34,211,238,0.3)",  stop: "rgba(34,211,238,0.08)"  },
// //   { solid: "#fbbf24", glow: "rgba(251,191,36,0.6)",  mid: "rgba(251,191,36,0.3)",  stop: "rgba(251,191,36,0.08)"  },
// //   { solid: "#34d399", glow: "rgba(52,211,153,0.6)",  mid: "rgba(52,211,153,0.3)",  stop: "rgba(52,211,153,0.08)"  },
// //   { solid: "#f97316", glow: "rgba(249,115,22,0.6)",  mid: "rgba(249,115,22,0.3)",  stop: "rgba(249,115,22,0.08)"  },
// //   { solid: "#a78bfa", glow: "rgba(167,139,250,0.6)", mid: "rgba(167,139,250,0.3)", stop: "rgba(167,139,250,0.08)" },
// //   { solid: "#f472b6", glow: "rgba(244,114,182,0.6)", mid: "rgba(244,114,182,0.3)", stop: "rgba(244,114,182,0.08)" },
// //   { solid: "#38bdf8", glow: "rgba(56,189,248,0.6)",  mid: "rgba(56,189,248,0.3)",  stop: "rgba(56,189,248,0.08)"  },
// //   { solid: "#a3e635", glow: "rgba(163,230,53,0.6)",  mid: "rgba(163,230,53,0.3)",  stop: "rgba(163,230,53,0.08)"  },
// // ]

// // const SOLIDS = GLASS_COLORS.map(c => c.solid)

// // function getDomain(data: any[], keys: string[]): [number, number] {
// //   let min = Infinity, max = -Infinity
// //   data.forEach(row => keys.forEach(k => {
// //     const v = Number(row[k])
// //     if (!isNaN(v)) { min = Math.min(min, v); max = Math.max(max, v) }
// //   }))
// //   if (min === Infinity) return [0, 100]
// //   const range = max - min || max * 0.2 || 1
// //   const pad = range * 0.28
// //   return [parseFloat((min - pad).toFixed(2)), parseFloat((max + pad * 0.25).toFixed(2))]
// // }

// // function fmt(v: number) {
// //   return v >= 1000000 ? `${(v/1000000).toFixed(1)}M`
// //        : v >= 1000    ? `${(v/1000).toFixed(0)}k`
// //        : Number.isInteger(v) ? String(v)
// //        : Math.abs(v) < 10    ? v.toFixed(2)
// //        : v.toFixed(1)
// // }

// // const AXIS = {
// //   tick: { fontSize: 11, fill: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans',sans-serif", fontWeight: 500 },
// //   axisLine: { stroke: "rgba(255,255,255,0.06)" },
// //   tickLine: false as any,
// // }
// // const GRID = { stroke: "rgba(255,255,255,0.06)", strokeDasharray: "4 4" }

// // // ── Glass Tooltip ─────────────────────────────────────────────────────
// // function Tip({ active, payload, label }: TooltipProps<any,any>) {
// //   if (!active || !payload?.length) return null
// //   return (
// //     <div style={{
// //       background: "rgba(15,5,12,0.85)",
// //       backdropFilter: "blur(20px)",
// //       border: "1px solid rgba(255,255,255,0.12)",
// //       borderRadius: "14px", padding: "13px 17px",
// //       boxShadow: "0 20px 48px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)",
// //       minWidth: "130px",
// //     }}>
// //       {label != null && <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.35)", marginBottom: "8px", letterSpacing: "0.08em", borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "7px", fontWeight: 600 }}>{String(label)}</p>}
// //       {payload.map((e: any, i: number) => (
// //         <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", marginTop: i > 0 ? "5px" : 0 }}>
// //           <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
// //             <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: e.color || SOLIDS[0], boxShadow: `0 0 8px ${e.color || SOLIDS[0]}` }} />
// //             {e.name && <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>{e.name}</span>}
// //           </div>
// //           <span style={{ fontSize: "15px", color: "#fff", fontWeight: 800, fontFamily: "var(--font-display)" }}>
// //             {typeof e.value === "number" ? fmt(e.value) : e.value}
// //           </span>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }

// // // ── Glass Bar ─────────────────────────────────────────────────────────
// // function GlassBar(props: any) {
// //   const { x, y, width, height, index } = props
// //   const [h, setH] = useState(false)
// //   if (height === undefined || isNaN(height)) return null
// //   const safeH = Math.max(height, 2)
// //   const gc = GLASS_COLORS[index % GLASS_COLORS.length]
// //   const id = `glass-bar-${index}`
// //   return (
// //     <g>
// //       <defs>
// //         <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
// //           <stop offset="0%" stopColor={gc.solid} stopOpacity={h ? "1" : "0.9"}/>
// //           <stop offset="60%" stopColor={gc.solid} stopOpacity="0.5"/>
// //           <stop offset="100%" stopColor={gc.solid} stopOpacity="0.15"/>
// //         </linearGradient>
// //       </defs>
// //       {/* Glow shadow */}
// //       {h && <rect x={x-4} y={y-4} width={width+8} height={safeH+8} rx={9} fill={gc.solid} opacity={0.15} style={{ filter: `blur(6px)` }}/>}
// //       {/* Glass bar */}
// //       <rect x={x} y={y} width={width} height={safeH} rx={safeH > 8 ? 6 : 2}
// //         fill={`url(#${id})`}
// //         style={{ cursor: "pointer" }}
// //         onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
// //       />
// //       {/* Glass shine highlight */}
// //       <rect x={x+1} y={y+1} width={(width-2)*0.45} height={safeH-2} rx={safeH > 8 ? 5 : 2}
// //         fill={`linear-gradient(180deg, rgba(255,255,255,0.3), rgba(255,255,255,0))`}
// //         opacity={0.4}
// //       />
// //       {/* Top glow line */}
// //       {safeH > 4 && <rect x={x+1} y={y+1} width={width-2} height={2} rx={2} fill="rgba(255,255,255,0.35)"/>}
// //     </g>
// //   )
// // }

// // // ── Active dot ────────────────────────────────────────────────────────
// // function ADot({ cx, cy, fill }: any) {
// //   return (
// //     <g>
// //       <circle cx={cx} cy={cy} r={12} fill={fill} opacity={0.12}/>
// //       <circle cx={cx} cy={cy} r={7} fill={fill} opacity={0.25}/>
// //       <circle cx={cx} cy={cy} r={4} fill={fill} stroke="rgba(10,5,10,0.9)" strokeWidth={2}/>
// //     </g>
// //   )
// // }

// // // ── Glass Legend ──────────────────────────────────────────────────────
// // function GLegend({ payload }: any) {
// //   if (!payload?.length) return null
// //   return (
// //     <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", paddingTop: "12px" }}>
// //       {payload.map((e: any, i: number) => (
// //         <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "3px 10px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "100px", backdropFilter: "blur(8px)" }}>
// //           <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: e.color, boxShadow: `0 0 6px ${e.color}` }}/>
// //           <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)", fontFamily: "var(--font-body)", fontWeight: 500 }}>{e.value}</span>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }

// // // ── Pie % label ───────────────────────────────────────────────────────
// // function PLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent, name }: any) {
// //   if (percent < 0.04) return null
// //   const R = Math.PI / 180
// //   const r = innerRadius + (outerRadius - innerRadius) * 0.58
// //   return (
// //     <text
// //       x={cx + r * Math.cos(-midAngle * R)}
// //       y={cy + r * Math.sin(-midAngle * R)}
// //       fill="rgba(255,255,255,0.95)" textAnchor="middle" dominantBaseline="central"
// //       style={{ fontSize: "11px", fontFamily: "var(--font-display)", fontWeight: 800 }}
// //     >
// //       {`${(percent * 100).toFixed(0)}%`}
// //     </text>
// //   )
// // }

// // // ── Switcher ──────────────────────────────────────────────────────────
// // const ALL_TYPES = [
// //   { id: "bar",      label: "▊ Bar"    },
// //   { id: "line",     label: "∿ Line"   },
// //   { id: "area",     label: "◬ Area"   },
// //   { id: "composed", label: "⊕ Mixed"  },
// //   { id: "pie",      label: "◔ Pie"    },
// //   { id: "donut",    label: "◯ Donut"  },
// //   { id: "radar",    label: "⬡ Radar"  },
// // ]

// // function Switcher({ current, onChange, accent }: { current: string; onChange: (t: string) => void; accent: string }) {
// //   return (
// //     <div style={{ display: "flex", gap: "4px", marginBottom: "12px", flexWrap: "wrap" }}>
// //       {ALL_TYPES.map(t => (
// //         <button key={t.id} onClick={() => onChange(t.id)} style={{
// //           padding: "4px 11px",
// //           background: current === t.id
// //             ? `rgba(${accent === "#ff6b9d" ? "255,107,157" : "192,132,252"},0.2)`
// //             : "rgba(255,255,255,0.04)",
// //           border: `1px solid ${current === t.id ? accent + "66" : "rgba(255,255,255,0.08)"}`,
// //           borderRadius: "8px", fontSize: "11px",
// //           color: current === t.id ? accent : "rgba(255,255,255,0.3)",
// //           cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 600,
// //           backdropFilter: "blur(8px)",
// //           transition: "all 0.18s",
// //           boxShadow: current === t.id ? `0 0 12px ${accent}44` : "none",
// //         }}>{t.label}</button>
// //       ))}
// //     </div>
// //   )
// // }

// // function Empty({ height }: { height: number }) {
// //   return (
// //     <div style={{ height, display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed rgba(255,255,255,0.08)", borderRadius: "12px" }}>
// //       <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "12px", letterSpacing: "0.08em" }}>NO DATA</p>
// //     </div>
// //   )
// // }

// // // ── Main ──────────────────────────────────────────────────────────────
// // export default function ChartRenderer({ type, data, columns, size = "small", accent = "#ff6b9d", chartIndex = 0 }: ChartRendererProps) {
// //   const height = size === "large" ? 390 : size === "pie" ? 310 : 270
// //   const xKey = columns?.[0] || "name"
// //   const yKeys = columns?.slice(1)?.length > 0 ? columns.slice(1) : ["value"]

// //   // Auto-assign chart type based on position if backend returns "bar" for all
// //   const resolveDefaultType = (t: string, idx: number) => {
// //     if (t && t !== "bar") return t  // backend specified something other than bar — use it
// //     // idx 0 = primary (bar), 1 = area, 2 = donut, 3+ = pie/line alternating
// //     const autoMap: Record<number, string> = { 0: "bar", 1: "area", 2: "donut", 3: "pie", 4: "line", 5: "radar" }
// //     return autoMap[idx] ?? "bar"
// //   }

// //   const [active, setActive] = useState(() => resolveDefaultType(type, chartIndex))

// //   if (!data || data.length === 0) return <Empty height={height} />
// //   const domain = getDomain(data, yKeys)
// //   const gc = GLASS_COLORS[chartIndex % GLASS_COLORS.length]

// //   // ── Shared defs ────────────────────────────────────────────────────
// //   const GradDefs = () => (
// //     <defs>
// //       {GLASS_COLORS.map((c, i) => (
// //         <linearGradient key={i} id={`gg${i}`} x1="0" y1="0" x2="0" y2="1">
// //           <stop offset="0%"   stopColor={c.solid} stopOpacity="0.95"/>
// //           <stop offset="55%"  stopColor={c.solid} stopOpacity="0.45"/>
// //           <stop offset="100%" stopColor={c.solid} stopOpacity="0.12"/>
// //         </linearGradient>
// //       ))}
// //       {GLASS_COLORS.map((c, i) => (
// //         <linearGradient key={`a${i}`} id={`ag${i}`} x1="0" y1="0" x2="0" y2="1">
// //           <stop offset="0%"   stopColor={c.solid} stopOpacity="0.5"/>
// //           <stop offset="60%"  stopColor={c.solid} stopOpacity="0.1"/>
// //           <stop offset="100%" stopColor={c.solid} stopOpacity="0"/>
// //         </linearGradient>
// //       ))}
// //       {GLASS_COLORS.map((c, i) => (
// //         <radialGradient key={`p${i}`} id={`pg${i}`} cx="50%" cy="35%" r="65%">
// //           <stop offset="0%"   stopColor={c.solid} stopOpacity="1"/>
// //           <stop offset="100%" stopColor={c.solid} stopOpacity="0.65"/>
// //         </radialGradient>
// //       ))}
// //       <filter id="glow-filter" x="-30%" y="-30%" width="160%" height="160%">
// //         <feGaussianBlur stdDeviation="4" result="blur"/>
// //         <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
// //       </filter>
// //     </defs>
// //   )

// //   // ── BAR ──────────────────────────────────────────────────────────
// //   if (active === "bar") {
// //     return (
// //       <div>
// //         <Switcher current={active} onChange={setActive} accent={gc.solid} />
// //         <ResponsiveContainer width="100%" height={height}>
// //           <BarChart data={data} barCategoryGap="30%" barGap={4} margin={{ top: 8, right: 8, bottom: 4, left: 0 }}>
// //             <GradDefs />
// //             <CartesianGrid vertical={false} {...GRID} />
// //             <XAxis dataKey={xKey} {...AXIS} interval={0} tick={{ ...AXIS.tick, fontSize: data.length > 8 ? 9 : 11 }} />
// //             <YAxis {...AXIS} width={54} domain={domain} tickFormatter={fmt} allowDataOverflow />
// //             <Tooltip content={<Tip />} cursor={{ fill: `${gc.solid}08`, rx: 8 }} />
// //             {yKeys.length > 1 && <Legend content={<GLegend />} />}
// //             {yKeys.map((col, i) => (
// //               <Bar key={col} dataKey={col}
// //                 fill={`url(#gg${(chartIndex + i) % GLASS_COLORS.length})`}
// //                 maxBarSize={56} shape={<GlassBar />}
// //               />
// //             ))}
// //           </BarChart>
// //         </ResponsiveContainer>
// //       </div>
// //     )
// //   }

// //   // ── LINE ─────────────────────────────────────────────────────────
// //   if (active === "line") {
// //     return (
// //       <div>
// //         <Switcher current={active} onChange={setActive} accent={gc.solid} />
// //         <ResponsiveContainer width="100%" height={height}>
// //           <LineChart data={data} margin={{ top: 8, right: 8, bottom: 4, left: 0 }}>
// //             <GradDefs />
// //             <CartesianGrid {...GRID} />
// //             <XAxis dataKey={xKey} {...AXIS} />
// //             <YAxis {...AXIS} width={54} domain={domain} tickFormatter={fmt} allowDataOverflow />
// //             <Tooltip content={<Tip />} />
// //             {yKeys.length > 1 && <Legend content={<GLegend />} />}
// //             {yKeys.map((col, i) => {
// //               const c = GLASS_COLORS[(chartIndex + i) % GLASS_COLORS.length]
// //               return (
// //                 <Line key={col} type="monotone" dataKey={col}
// //                   stroke={c.solid} strokeWidth={2.5}
// //                   filter="url(#glow-filter)"
// //                   dot={{ fill: c.solid, stroke: "rgba(10,5,10,0.9)", strokeWidth: 2, r: 4 }}
// //                   activeDot={<ADot fill={c.solid} />}
// //                 />
// //               )
// //             })}
// //           </LineChart>
// //         </ResponsiveContainer>
// //       </div>
// //     )
// //   }

// //   // ── AREA ─────────────────────────────────────────────────────────
// //   if (active === "area") {
// //     return (
// //       <div>
// //         <Switcher current={active} onChange={setActive} accent={gc.solid} />
// //         <ResponsiveContainer width="100%" height={height}>
// //           <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 4, left: 0 }}>
// //             <GradDefs />
// //             <CartesianGrid {...GRID} />
// //             <XAxis dataKey={xKey} {...AXIS} />
// //             <YAxis {...AXIS} width={54} domain={domain} tickFormatter={fmt} allowDataOverflow />
// //             <Tooltip content={<Tip />} />
// //             {yKeys.length > 1 && <Legend content={<GLegend />} />}
// //             {yKeys.map((col, i) => {
// //               const c = GLASS_COLORS[(chartIndex + i) % GLASS_COLORS.length]
// //               return (
// //                 <Area key={col} type="monotone" dataKey={col}
// //                   stroke={c.solid} strokeWidth={2.5}
// //                   fill={`url(#ag${(chartIndex + i) % GLASS_COLORS.length})`}
// //                   dot={false}
// //                   activeDot={<ADot fill={c.solid} />}
// //                 />
// //               )
// //             })}
// //           </AreaChart>
// //         </ResponsiveContainer>
// //       </div>
// //     )
// //   }

// //   // ── COMPOSED ─────────────────────────────────────────────────────
// //   if (active === "composed") {
// //     return (
// //       <div>
// //         <Switcher current={active} onChange={setActive} accent={gc.solid} />
// //         <ResponsiveContainer width="100%" height={height}>
// //           <ComposedChart data={data} margin={{ top: 8, right: 8, bottom: 4, left: 0 }}>
// //             <GradDefs />
// //             <CartesianGrid vertical={false} {...GRID} />
// //             <XAxis dataKey={xKey} {...AXIS} />
// //             <YAxis {...AXIS} width={54} domain={domain} tickFormatter={fmt} allowDataOverflow />
// //             <Tooltip content={<Tip />} cursor={{ fill: `${gc.solid}08` }} />
// //             <Legend content={<GLegend />} />
// //             {yKeys.map((col, i) => {
// //               const c = GLASS_COLORS[(chartIndex + i) % GLASS_COLORS.length]
// //               return i === 0
// //                 ? <Bar key={col} dataKey={col} fill={`url(#gg${chartIndex % GLASS_COLORS.length})`} maxBarSize={50} radius={[5,5,0,0]} />
// //                 : <Line key={col} type="monotone" dataKey={col} stroke={c.solid} strokeWidth={2.5}
// //                     dot={{ fill: c.solid, stroke: "rgba(10,5,10,0.9)", strokeWidth: 2, r: 3 }}
// //                     activeDot={<ADot fill={c.solid} />} />
// //             })}
// //           </ComposedChart>
// //         </ResponsiveContainer>
// //       </div>
// //     )
// //   }

// //   // ── RADAR ─────────────────────────────────────────────────────────
// //   if (active === "radar") {
// //     return (
// //       <div>
// //         <Switcher current={active} onChange={setActive} accent={gc.solid} />
// //         <ResponsiveContainer width="100%" height={height}>
// //           <RadarChart data={data} cx="50%" cy="50%" outerRadius="68%">
// //             <GradDefs />
// //             <PolarGrid stroke="rgba(255,255,255,0.08)" />
// //             <PolarAngleAxis dataKey={xKey} tick={{ fontSize: 11, fill: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans',sans-serif", fontWeight: 500 }} />
// //             <PolarRadiusAxis tick={{ fontSize: 9, fill: "rgba(255,255,255,0.2)" }} axisLine={false} />
// //             {yKeys.map((col, i) => {
// //               const c = GLASS_COLORS[(chartIndex + i) % GLASS_COLORS.length]
// //               return <Radar key={col} name={col} dataKey={col} stroke={c.solid} strokeWidth={2} fill={`url(#ag${(chartIndex+i)%GLASS_COLORS.length})`} />
// //             })}
// //             <Legend content={<GLegend />} />
// //             <Tooltip content={<Tip />} />
// //           </RadarChart>
// //         </ResponsiveContainer>
// //       </div>
// //     )
// //   }

// //   // ── PIE ──────────────────────────────────────────────────────────
// //   if (active === "pie") {
// //     return (
// //       <div>
// //         <Switcher current={active} onChange={setActive} accent={gc.solid} />
// //         <ResponsiveContainer width="100%" height={height}>
// //           <PieChart>
// //             <GradDefs />
// //             <Pie data={data} dataKey={yKeys[0]} nameKey={xKey}
// //               cx="50%" cy="46%" outerRadius="68%"
// //               paddingAngle={3} strokeWidth={0}
// //               labelLine={false} label={<PLabel />}
// //               isAnimationActive animationBegin={80} animationDuration={900}
// //             >
// //               {data.map((_: any, i: number) => (
// //                 <Cell key={i} fill={`url(#pg${i % GLASS_COLORS.length})`}
// //                   style={{ filter: `drop-shadow(0 0 6px ${GLASS_COLORS[i % GLASS_COLORS.length].solid}88)` }}
// //                 />
// //               ))}
// //             </Pie>
// //             <Tooltip content={<Tip />} />
// //             <Legend content={<GLegend />} />
// //           </PieChart>
// //         </ResponsiveContainer>
// //       </div>
// //     )
// //   }

// //   // ── DONUT ─────────────────────────────────────────────────────────
// //   if (active === "donut") {
// //     const total = data.reduce((s: number, d: any) => s + (Number(d[yKeys[0]]) || 0), 0)
// //     return (
// //       <div>
// //         <Switcher current={active} onChange={setActive} accent={gc.solid} />
// //         <div style={{ position: "relative" }}>
// //           <ResponsiveContainer width="100%" height={height}>
// //             <PieChart>
// //               <GradDefs />
// //               <Pie data={data} dataKey={yKeys[0]} nameKey={xKey}
// //                 cx="50%" cy="46%" innerRadius="42%" outerRadius="68%"
// //                 paddingAngle={3} strokeWidth={0}
// //                 isAnimationActive animationBegin={80} animationDuration={1000}
// //               >
// //                 {data.map((_: any, i: number) => (
// //                   <Cell key={i} fill={`url(#pg${i % GLASS_COLORS.length})`}
// //                     style={{ filter: `drop-shadow(0 0 8px ${GLASS_COLORS[i % GLASS_COLORS.length].solid}66)` }}
// //                   />
// //                 ))}
// //               </Pie>
// //               <Tooltip content={<Tip />} />
// //               <Legend content={<GLegend />} />
// //             </PieChart>
// //           </ResponsiveContainer>
// //           {/* Center glass pill */}
// //           <div style={{
// //             position: "absolute", top: "43%", left: "50%", transform: "translate(-50%,-50%)",
// //             textAlign: "center", pointerEvents: "none",
// //             background: "rgba(255,255,255,0.05)",
// //             backdropFilter: "blur(12px)",
// //             border: "1px solid rgba(255,255,255,0.1)",
// //             borderRadius: "14px", padding: "8px 16px",
// //           }}>
// //             <p style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>
// //               {fmt(total)}
// //             </p>
// //             <p style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.14em", marginTop: "3px", fontWeight: 600 }}>TOTAL</p>
// //           </div>
// //         </div>
// //       </div>
// //     )
// //   }

// //   // ── TABLE fallback ────────────────────────────────────────────────
// //   const cols = Object.keys(data[0])
// //   return (
// //     <div style={{ overflowX: "auto", borderRadius: "10px", overflow: "hidden" }}>
// //       <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
// //         <thead>
// //           <tr style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(8px)" }}>
// //             {cols.map(col => (
// //               <th key={col} style={{ padding: "11px 16px", textAlign: "left", color: "rgba(255,255,255,0.35)", fontWeight: 600, fontSize: "10px", letterSpacing: "0.1em", borderBottom: "1px solid rgba(255,255,255,0.07)", fontFamily: "var(--font-display)" }}>
// //                 {col.toUpperCase().replace(/_/g," ")}
// //               </th>
// //             ))}
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {data.slice(0, 25).map((row: any, i: number) => <TRow key={i} row={row} cols={cols} even={i%2===0} accent={gc.solid} />)}
// //         </tbody>
// //       </table>
// //       {data.length > 25 && (
// //         <div style={{ textAlign: "center", padding: "12px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
// //           <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px", letterSpacing: "0.08em", fontWeight: 600 }}>+{data.length-25} MORE ROWS</p>
// //         </div>
// //       )}
// //     </div>
// //   )
// // }

// // function TRow({ row, cols, even, accent }: { row: any; cols: string[]; even: boolean; accent: string }) {
// //   const [h, setH] = useState(false)
// //   return (
// //     <tr onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
// //       style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: h ? "rgba(255,255,255,0.06)" : even ? "rgba(255,255,255,0.02)" : "transparent", transition: "background 0.15s", backdropFilter: h ? "blur(8px)" : "none" }}
// //     >
// //       {cols.map((col, j) => (
// //         <td key={col} style={{ padding: "10px 16px", color: j===0 ? "#fff" : "rgba(255,255,255,0.5)", fontWeight: j===0 ? 600 : 300, fontSize: "13px", borderLeft: j===0 ? `2px solid ${h ? accent : "transparent"}` : "none", transition: "border-color 0.2s" }}>
// //           {row[col] != null ? String(row[col]) : "—"}
// //         </td>
// //       ))}
// //     </tr>
// //   )
// // }
// "use client"

// import { useState, useId } from "react"
// import {
//   BarChart, Bar, LineChart, Line, AreaChart, Area,
//   PieChart, Pie, Cell, XAxis, YAxis, Tooltip,
//   CartesianGrid, ResponsiveContainer, Legend, TooltipProps,
//   RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
//   ComposedChart,
// } from "recharts"

// interface ChartRendererProps {
//   type: string
//   data: any[]
//   columns: string[]
//   size?: "large" | "small" | "pie"
//   accent?: string
//   chartIndex?: number
// }

// // ── Glassmorphism palette ─────────────────────────────────────────────
// const GLASS = [
//   "#ff6b9d", "#c084fc", "#22d3ee", "#fbbf24",
//   "#34d399", "#f97316", "#a78bfa", "#f472b6",
//   "#38bdf8", "#a3e635",
// ]

// // ── Domain calculation ────────────────────────────────────────────────
// function getDomain(data: any[], keys: string[]): [number, number] {
//   let min = Infinity, max = -Infinity
//   data.forEach(row => keys.forEach(k => {
//     const v = Number(row[k])
//     if (!isNaN(v)) { min = Math.min(min, v); max = Math.max(max, v) }
//   }))
//   if (min === Infinity) return [0, 100]
//   const range = max - min || max * 0.2 || 1
//   const pad = range * 0.28
//   return [
//     parseFloat((min - pad).toFixed(4)),
//     parseFloat((max + pad * 0.25).toFixed(4)),
//   ]
// }

// function fmt(v: number) {
//   if (v >= 1000000) return `${(v / 1000000).toFixed(1)}M`
//   if (v >= 1000)    return `${(v / 1000).toFixed(0)}k`
//   if (!Number.isInteger(v)) return Math.abs(v) < 10 ? v.toFixed(2) : v.toFixed(1)
//   return String(v)
// }

// const AXIS_TICK = { fontSize: 11, fill: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans',sans-serif", fontWeight: 500 }
// const AXIS_LINE = { stroke: "rgba(255,255,255,0.06)" }
// const GRID_PROPS = { stroke: "rgba(255,255,255,0.07)", strokeDasharray: "4 4" }

// // ── Tooltip ───────────────────────────────────────────────────────────
// function Tip({ active, payload, label }: TooltipProps<any, any>) {
//   if (!active || !payload?.length) return null
//   return (
//     <div style={{
//       background: "rgba(8,4,10,0.88)",
//       backdropFilter: "blur(24px)",
//       border: "1px solid rgba(255,255,255,0.13)",
//       borderRadius: "14px", padding: "13px 17px",
//       boxShadow: "0 24px 56px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)",
//       minWidth: "130px",
//     }}>
//       {label != null && (
//         <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginBottom: "8px", letterSpacing: "0.08em", borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "7px", fontWeight: 600 }}>
//           {String(label)}
//         </p>
//       )}
//       {payload.map((e: any, i: number) => (
//         <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", marginTop: i > 0 ? "5px" : 0 }}>
//           <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
//             <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: e.color || GLASS[0], boxShadow: `0 0 8px ${e.color || GLASS[0]}` }} />
//             {e.name && <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.38)", fontWeight: 500 }}>{e.name}</span>}
//           </div>
//           <span style={{ fontSize: "15px", color: "#fff", fontWeight: 800, fontFamily: "var(--font-display)" }}>
//             {typeof e.value === "number" ? fmt(e.value) : e.value}
//           </span>
//         </div>
//       ))}
//     </div>
//   )
// }

// // ── Active Dot ────────────────────────────────────────────────────────
// function ADot({ cx, cy, fill }: any) {
//   return (
//     <g>
//       <circle cx={cx} cy={cy} r={12} fill={fill} opacity={0.12} />
//       <circle cx={cx} cy={cy} r={7}  fill={fill} opacity={0.25} />
//       <circle cx={cx} cy={cy} r={4}  fill={fill} stroke="rgba(8,4,10,0.9)" strokeWidth={2} />
//     </g>
//   )
// }

// // ── Glass Legend ──────────────────────────────────────────────────────
// function GLegend({ payload }: any) {
//   if (!payload?.length) return null
//   return (
//     <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", paddingTop: "12px" }}>
//       {payload.map((e: any, i: number) => (
//         <div key={i} style={{
//           display: "flex", alignItems: "center", gap: "6px",
//           padding: "3px 10px",
//           background: "rgba(255,255,255,0.06)",
//           border: "1px solid rgba(255,255,255,0.1)",
//           borderRadius: "100px", backdropFilter: "blur(8px)",
//         }}>
//           <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: e.color, boxShadow: `0 0 6px ${e.color}` }} />
//           <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)", fontWeight: 500 }}>{e.value}</span>
//         </div>
//       ))}
//     </div>
//   )
// }

// // ── Pie % Label ───────────────────────────────────────────────────────
// function PieLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) {
//   if (percent < 0.04) return null
//   const R = Math.PI / 180
//   const r = innerRadius + (outerRadius - innerRadius) * 0.58
//   return (
//     <text
//       x={cx + r * Math.cos(-midAngle * R)}
//       y={cy + r * Math.sin(-midAngle * R)}
//       fill="rgba(255,255,255,0.95)"
//       textAnchor="middle" dominantBaseline="central"
//       style={{ fontSize: "11px", fontFamily: "var(--font-display)", fontWeight: 800 }}
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   )
// }

// // ── Type Switcher ─────────────────────────────────────────────────────
// const ALL_TYPES = [
//   { id: "bar",      label: "▊ Bar"   },
//   { id: "line",     label: "∿ Line"  },
//   { id: "area",     label: "◬ Area"  },
//   { id: "composed", label: "⊕ Mixed" },
//   { id: "pie",      label: "◔ Pie"   },
//   { id: "donut",    label: "◯ Donut" },
//   { id: "radar",    label: "⬡ Radar" },
// ]

// function Switcher({ current, onChange, color }: { current: string; onChange: (t: string) => void; color: string }) {
//   return (
//     <div style={{ display: "flex", gap: "4px", marginBottom: "12px", flexWrap: "wrap" }}>
//       {ALL_TYPES.map(t => {
//         const active = current === t.id
//         return (
//           <button key={t.id} onClick={() => onChange(t.id)} style={{
//             padding: "4px 11px",
//             background: active ? `${color}22` : "rgba(255,255,255,0.04)",
//             border: `1px solid ${active ? color + "66" : "rgba(255,255,255,0.09)"}`,
//             borderRadius: "8px", fontSize: "11px",
//             color: active ? color : "rgba(255,255,255,0.3)",
//             cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 600,
//             backdropFilter: "blur(8px)",
//             transition: "all 0.18s",
//             boxShadow: active ? `0 0 14px ${color}44` : "none",
//           }}>{t.label}</button>
//         )
//       })}
//     </div>
//   )
// }

// function Empty({ height }: { height: number }) {
//   return (
//     <div style={{ height, display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed rgba(255,255,255,0.08)", borderRadius: "12px" }}>
//       <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "12px", letterSpacing: "0.08em" }}>NO DATA</p>
//     </div>
//   )
// }

// // ── SVG Defs (rendered once per chart instance, unique IDs) ───────────
// function ChartDefs({ uid }: { uid: string }) {
//   return (
//     <defs>
//       {/* Per-color bar gradients */}
//       {GLASS.map((c, i) => (
//         <linearGradient key={`bar-${i}`} id={`${uid}-bar-${i}`} x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%"   stopColor={c} stopOpacity="0.95" />
//           <stop offset="55%"  stopColor={c} stopOpacity="0.5"  />
//           <stop offset="100%" stopColor={c} stopOpacity="0.12" />
//         </linearGradient>
//       ))}
//       {/* Per-color area gradients */}
//       {GLASS.map((c, i) => (
//         <linearGradient key={`area-${i}`} id={`${uid}-area-${i}`} x1="0" y1="0" x2="0" y2="1">
//           <stop offset="0%"   stopColor={c} stopOpacity="0.5"  />
//           <stop offset="60%"  stopColor={c} stopOpacity="0.08" />
//           <stop offset="100%" stopColor={c} stopOpacity="0"    />
//         </linearGradient>
//       ))}
//       {/* Per-color pie/donut gradients */}
//       {GLASS.map((c, i) => (
//         <radialGradient key={`pie-${i}`} id={`${uid}-pie-${i}`} cx="50%" cy="35%" r="65%">
//           <stop offset="0%"   stopColor={c} stopOpacity="1"    />
//           <stop offset="100%" stopColor={c} stopOpacity="0.65" />
//         </radialGradient>
//       ))}
//       {/* Glow filter */}
//       <filter id={`${uid}-glow`} x="-40%" y="-40%" width="180%" height="180%">
//         <feGaussianBlur stdDeviation="3" result="blur" />
//         <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
//       </filter>
//     </defs>
//   )
// }

// // ── Custom Bar that uses pre-defined gradient IDs ─────────────────────
// function makeGlassBar(uid: string) {
//   return function GlassBar(props: any) {
//     const { x, y, width, height, index } = props
//     const [hov, setHov] = useState(false)
//     if (height === undefined || isNaN(height)) return null
//     const safeH = Math.max(height, 2)
//     const colorIdx = index % GLASS.length
//     const color = GLASS[colorIdx]
//     const gradId = `${uid}-bar-${colorIdx}`

//     return (
//       <g>
//         {/* Outer glow on hover */}
//         {hov && (
//           <rect
//             x={x - 4} y={y - 4} width={width + 8} height={safeH + 8}
//             rx={10} fill={color} opacity={0.18}
//             style={{ filter: `blur(8px)` }}
//           />
//         )}
//         {/* Main bar body */}
//         <rect
//           x={x} y={y} width={width} height={safeH}
//           rx={safeH > 8 ? 6 : 2}
//           fill={`url(#${gradId})`}
//           opacity={hov ? 1 : 0.88}
//           style={{ cursor: "pointer", transition: "opacity 0.15s" }}
//           onMouseEnter={() => setHov(true)}
//           onMouseLeave={() => setHov(false)}
//         />
//         {/* White top highlight */}
//         {safeH > 4 && (
//           <rect x={x + 1} y={y + 1} width={width - 2} height={2} rx={2} fill="rgba(255,255,255,0.32)" />
//         )}
//         {/* Left glass sheen */}
//         {safeH > 10 && width > 8 && (
//           <rect
//             x={x + 1} y={y + 3}
//             width={Math.max(2, (width - 2) * 0.3)}
//             height={safeH - 6}
//             rx={2}
//             fill="rgba(255,255,255,0.1)"
//           />
//         )}
//       </g>
//     )
//   }
// }

// // ── Main Component ────────────────────────────────────────────────────
// export default function ChartRenderer({
//   type, data, columns, size = "small", accent = "#ff6b9d", chartIndex = 0
// }: ChartRendererProps) {
//   // Unique ID per instance to avoid gradient ID collisions across multiple charts
//   const uid = useId().replace(/:/g, "")

//   const height = size === "large" ? 390 : size === "pie" ? 310 : 270
//   const xKey   = columns?.[0] || "name"
//   const yKeys  = columns?.slice(1)?.length > 0 ? columns.slice(1) : ["value"]

//   // Auto-assign chart type by position when backend returns "bar" for all
//   const autoType = (t: string, idx: number): string => {
//     if (t && t !== "bar") return t
//     return (["bar", "area", "donut", "pie", "line", "radar"] as string[])[idx] ?? "bar"
//   }

//   const [active, setActive] = useState(() => autoType(type, chartIndex))

//   if (!data || data.length === 0) return <Empty height={height} />

//   const domain   = getDomain(data, yKeys)
//   const barColor = GLASS[chartIndex % GLASS.length]
//   const GlassBar = makeGlassBar(uid)

//   const axisProps = {
//     tick: AXIS_TICK,
//     axisLine: AXIS_LINE,
//     tickLine: false as any,
//   }

//   // ── BAR ────────────────────────────────────────────────────────
//   if (active === "bar") return (
//     <div>
//       <Switcher current={active} onChange={setActive} color={barColor} />
//       <ResponsiveContainer width="100%" height={height}>
//         <BarChart data={data} barCategoryGap="30%" barGap={4} margin={{ top: 8, right: 8, bottom: 4, left: 0 }}>
//           <ChartDefs uid={uid} />
//           <CartesianGrid vertical={false} {...GRID_PROPS} />
//           <XAxis dataKey={xKey} {...axisProps} interval={0} tick={{ ...AXIS_TICK, fontSize: data.length > 8 ? 9 : 11 }} />
//           <YAxis {...axisProps} width={54} domain={domain} tickFormatter={fmt} allowDataOverflow />
//           <Tooltip content={<Tip />} cursor={{ fill: `${barColor}0a`, rx: 8 }} />
//           {yKeys.length > 1 && <Legend content={<GLegend />} />}
//           {yKeys.map((col, i) => (
//             <Bar key={col} dataKey={col}
//               fill={`url(#${uid}-bar-${(chartIndex + i) % GLASS.length})`}
//               maxBarSize={56}
//               shape={<GlassBar />}
//             />
//           ))}
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   )

//   // ── LINE ───────────────────────────────────────────────────────
//   if (active === "line") return (
//     <div>
//       <Switcher current={active} onChange={setActive} color={barColor} />
//       <ResponsiveContainer width="100%" height={height}>
//         <LineChart data={data} margin={{ top: 8, right: 8, bottom: 4, left: 0 }}>
//           <ChartDefs uid={uid} />
//           <CartesianGrid {...GRID_PROPS} />
//           <XAxis dataKey={xKey} {...axisProps} />
//           <YAxis {...axisProps} width={54} domain={domain} tickFormatter={fmt} allowDataOverflow />
//           <Tooltip content={<Tip />} />
//           {yKeys.length > 1 && <Legend content={<GLegend />} />}
//           {yKeys.map((col, i) => {
//             const c = GLASS[(chartIndex + i) % GLASS.length]
//             return (
//               <Line key={col} type="monotone" dataKey={col}
//                 stroke={c} strokeWidth={2.5}
//                 dot={{ fill: c, stroke: "rgba(8,4,10,0.9)", strokeWidth: 2, r: 4 }}
//                 activeDot={<ADot fill={c} />}
//               />
//             )
//           })}
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   )

//   // ── AREA ───────────────────────────────────────────────────────
//   if (active === "area") return (
//     <div>
//       <Switcher current={active} onChange={setActive} color={barColor} />
//       <ResponsiveContainer width="100%" height={height}>
//         <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 4, left: 0 }}>
//           <ChartDefs uid={uid} />
//           <CartesianGrid {...GRID_PROPS} />
//           <XAxis dataKey={xKey} {...axisProps} />
//           <YAxis {...axisProps} width={54} domain={domain} tickFormatter={fmt} allowDataOverflow />
//           <Tooltip content={<Tip />} />
//           {yKeys.length > 1 && <Legend content={<GLegend />} />}
//           {yKeys.map((col, i) => {
//             const ci = (chartIndex + i) % GLASS.length
//             const c  = GLASS[ci]
//             return (
//               <Area key={col} type="monotone" dataKey={col}
//                 stroke={c} strokeWidth={2.5}
//                 fill={`url(#${uid}-area-${ci})`}
//                 dot={false}
//                 activeDot={<ADot fill={c} />}
//               />
//             )
//           })}
//         </AreaChart>
//       </ResponsiveContainer>
//     </div>
//   )

//   // ── COMPOSED ───────────────────────────────────────────────────
//   if (active === "composed") return (
//     <div>
//       <Switcher current={active} onChange={setActive} color={barColor} />
//       <ResponsiveContainer width="100%" height={height}>
//         <ComposedChart data={data} margin={{ top: 8, right: 8, bottom: 4, left: 0 }}>
//           <ChartDefs uid={uid} />
//           <CartesianGrid vertical={false} {...GRID_PROPS} />
//           <XAxis dataKey={xKey} {...axisProps} />
//           <YAxis {...axisProps} width={54} domain={domain} tickFormatter={fmt} allowDataOverflow />
//           <Tooltip content={<Tip />} cursor={{ fill: `${barColor}0a` }} />
//           <Legend content={<GLegend />} />
//           {yKeys.map((col, i) => {
//             const ci = (chartIndex + i) % GLASS.length
//             const c  = GLASS[ci]
//             return i === 0
//               ? <Bar key={col} dataKey={col} fill={`url(#${uid}-bar-${ci})`} maxBarSize={50} radius={[5, 5, 0, 0]} />
//               : <Line key={col} type="monotone" dataKey={col} stroke={c} strokeWidth={2.5}
//                   dot={{ fill: c, stroke: "rgba(8,4,10,0.9)", strokeWidth: 2, r: 3 }}
//                   activeDot={<ADot fill={c} />} />
//           })}
//         </ComposedChart>
//       </ResponsiveContainer>
//     </div>
//   )

//   // ── RADAR ──────────────────────────────────────────────────────
//   if (active === "radar") return (
//     <div>
//       <Switcher current={active} onChange={setActive} color={barColor} />
//       <ResponsiveContainer width="100%" height={height}>
//         <RadarChart data={data} cx="50%" cy="50%" outerRadius="68%">
//           <ChartDefs uid={uid} />
//           <PolarGrid stroke="rgba(255,255,255,0.08)" />
//           <PolarAngleAxis dataKey={xKey} tick={{ fontSize: 11, fill: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans',sans-serif", fontWeight: 500 }} />
//           <PolarRadiusAxis tick={{ fontSize: 9, fill: "rgba(255,255,255,0.2)" }} axisLine={false} />
//           {yKeys.map((col, i) => {
//             const ci = (chartIndex + i) % GLASS.length
//             return (
//               <Radar key={col} name={col} dataKey={col}
//                 stroke={GLASS[ci]} strokeWidth={2}
//                 fill={`url(#${uid}-area-${ci})`}
//               />
//             )
//           })}
//           <Legend content={<GLegend />} />
//           <Tooltip content={<Tip />} />
//         </RadarChart>
//       </ResponsiveContainer>
//     </div>
//   )

//   // ── PIE ────────────────────────────────────────────────────────
//   if (active === "pie") return (
//     <div>
//       <Switcher current={active} onChange={setActive} color={barColor} />
//       <ResponsiveContainer width="100%" height={height}>
//         <PieChart>
//           <ChartDefs uid={uid} />
//           <Pie
//             data={data} dataKey={yKeys[0]} nameKey={xKey}
//             cx="50%" cy="46%" outerRadius="68%"
//             paddingAngle={3} strokeWidth={0}
//             labelLine={false} label={<PieLabel />}
//             isAnimationActive animationBegin={80} animationDuration={900}
//           >
//             {data.map((_: any, i: number) => (
//               <Cell key={i}
//                 fill={`url(#${uid}-pie-${i % GLASS.length})`}
//                 style={{ filter: `drop-shadow(0 0 6px ${GLASS[i % GLASS.length]}88)` }}
//               />
//             ))}
//           </Pie>
//           <Tooltip content={<Tip />} />
//           <Legend content={<GLegend />} />
//         </PieChart>
//       </ResponsiveContainer>
//     </div>
//   )

//   // ── DONUT ──────────────────────────────────────────────────────
//   if (active === "donut") {
//     const total = data.reduce((s: number, d: any) => s + (Number(d[yKeys[0]]) || 0), 0)
//     return (
//       <div>
//         <Switcher current={active} onChange={setActive} color={barColor} />
//         <div style={{ position: "relative" }}>
//           <ResponsiveContainer width="100%" height={height}>
//             <PieChart>
//               <ChartDefs uid={uid} />
//               <Pie
//                 data={data} dataKey={yKeys[0]} nameKey={xKey}
//                 cx="50%" cy="46%" innerRadius="42%" outerRadius="68%"
//                 paddingAngle={3} strokeWidth={0}
//                 isAnimationActive animationBegin={80} animationDuration={1000}
//               >
//                 {data.map((_: any, i: number) => (
//                   <Cell key={i}
//                     fill={`url(#${uid}-pie-${i % GLASS.length})`}
//                     style={{ filter: `drop-shadow(0 0 8px ${GLASS[i % GLASS.length]}66)` }}
//                   />
//                 ))}
//               </Pie>
//               <Tooltip content={<Tip />} />
//               <Legend content={<GLegend />} />
//             </PieChart>
//           </ResponsiveContainer>
//           {/* Glass center label */}
//           <div style={{
//             position: "absolute", top: "43%", left: "50%",
//             transform: "translate(-50%, -50%)",
//             textAlign: "center", pointerEvents: "none",
//             background: "rgba(255,255,255,0.06)",
//             backdropFilter: "blur(14px)",
//             border: "1px solid rgba(255,255,255,0.12)",
//             borderRadius: "14px", padding: "8px 16px",
//             boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
//           }}>
//             <p style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>
//               {fmt(total)}
//             </p>
//             <p style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.14em", marginTop: "3px", fontWeight: 600 }}>
//               TOTAL
//             </p>
//           </div>
//         </div>
//       </div>
//     )
//   }

//   // ── TABLE fallback ──────────────────────────────────────────────
//   const cols = Object.keys(data[0])
//   return (
//     <div style={{ overflowX: "auto", borderRadius: "10px", overflow: "hidden" }}>
//       <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
//         <thead>
//           <tr style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)" }}>
//             {cols.map(col => (
//               <th key={col} style={{ padding: "11px 16px", textAlign: "left", color: "rgba(255,255,255,0.3)", fontWeight: 600, fontSize: "10px", letterSpacing: "0.1em", borderBottom: "1px solid rgba(255,255,255,0.07)", fontFamily: "var(--font-display)" }}>
//                 {col.toUpperCase().replace(/_/g, " ")}
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.slice(0, 25).map((row: any, i: number) => (
//             <TRow key={i} row={row} cols={cols} even={i % 2 === 0} accent={barColor} />
//           ))}
//         </tbody>
//       </table>
//       {data.length > 25 && (
//         <div style={{ textAlign: "center", padding: "12px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
//           <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px", letterSpacing: "0.08em", fontWeight: 600 }}>+{data.length - 25} MORE ROWS</p>
//         </div>
//       )}
//     </div>
//   )
// }

// function TRow({ row, cols, even, accent }: { row: any; cols: string[]; even: boolean; accent: string }) {
//   const [h, setH] = useState(false)
//   return (
//     <tr
//       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
//       style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: h ? "rgba(255,255,255,0.07)" : even ? "rgba(255,255,255,0.02)" : "transparent", transition: "background 0.15s" }}
//     >
//       {cols.map((col, j) => (
//         <td key={col} style={{ padding: "10px 16px", color: j === 0 ? "#fff" : "rgba(255,255,255,0.45)", fontWeight: j === 0 ? 600 : 300, fontSize: "13px", borderLeft: j === 0 ? `2px solid ${h ? accent : "transparent"}` : "none", transition: "border-color 0.2s" }}>
//           {row[col] != null ? String(row[col]) : "—"}
//         </td>
//       ))}
//     </tr>
//   )
// }
"use client"

import { useState, useId } from "react"
import {
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  PieChart, Pie, Cell, XAxis, YAxis, Tooltip,
  CartesianGrid, ResponsiveContainer, Legend, TooltipProps,
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ComposedChart, ReferenceLine,
} from "recharts"

interface ChartRendererProps {
  type: string
  data: any[]
  columns: string[]
  size?: "large" | "small" | "pie"
  accent?: string
  chartIndex?: number
}

// ── Glass palette (solid colors — gradients applied per-SVG inline) ───
const GLASS = [
  "#ff6b9d", "#c084fc", "#22d3ee", "#fbbf24",
  "#34d399", "#f97316", "#a78bfa", "#f472b6",
  "#38bdf8", "#a3e635",
]

// ── Domain — only zoom when range is meaningful ───────────────────────
function getDomain(data: any[], keys: string[]): [number, number] {
  let min = Infinity, max = -Infinity
  data.forEach(row => keys.forEach(k => {
    const v = Number(row[k])
    if (!isNaN(v)) { min = Math.min(min, v); max = Math.max(max, v) }
  }))
  if (min === Infinity) return [0, 100]
  const range = max - min || max * 0.1 || 1
  const pad = range * 0.22
  // Don't go below 0 unless data is negative
  const lo = min >= 0 ? Math.max(0, min - pad) : min - pad
  return [parseFloat(lo.toFixed(4)), parseFloat((max + pad * 0.2).toFixed(4))]
}

function fmt(v: number) {
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(1)}M`
  if (v >= 1_000)     return `${(v / 1_000).toFixed(0)}k`
  if (!Number.isInteger(v)) return Math.abs(v) < 10 ? v.toFixed(2) : v.toFixed(1)
  return String(v)
}

const ATICK = { fontSize: 11, fill: "rgba(255,255,255,0.3)", fontFamily: "'DM Sans',sans-serif", fontWeight: 500 as any }
const ALINE = { stroke: "rgba(255,255,255,0.06)" }
const AGRID = { stroke: "rgba(255,255,255,0.07)", strokeDasharray: "4 4" }

// ── Tooltip ───────────────────────────────────────────────────────────
function Tip({ active, payload, label }: TooltipProps<any, any>) {
  if (!active || !payload?.length) return null
  return (
    <div style={{
      background: "rgba(8,3,10,0.92)", backdropFilter: "blur(24px)",
      border: "1px solid rgba(255,255,255,0.13)", borderRadius: "14px",
      padding: "13px 17px", boxShadow: "0 20px 48px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.07)",
      minWidth: "130px",
    }}>
      {label != null && <p style={{ fontSize: "10px", color: "rgba(255,255,255,0.3)", marginBottom: "8px", letterSpacing: "0.08em", borderBottom: "1px solid rgba(255,255,255,0.07)", paddingBottom: "7px", fontWeight: 600 }}>{String(label)}</p>}
      {payload.map((e: any, i: number) => (
        <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", marginTop: i > 0 ? "5px" : 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: e.color || GLASS[0], boxShadow: `0 0 8px ${e.color || GLASS[0]}` }} />
            {e.name && <span style={{ fontSize: "10px", color: "rgba(255,255,255,0.38)", fontWeight: 500 }}>{e.name}</span>}
          </div>
          <span style={{ fontSize: "15px", color: "#fff", fontWeight: 800, fontFamily: "var(--font-display)" }}>
            {typeof e.value === "number" ? fmt(e.value) : e.value}
          </span>
        </div>
      ))}
    </div>
  )
}

// ── Active Dot ────────────────────────────────────────────────────────
function ADot({ cx, cy, fill }: any) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={12} fill={fill} opacity={0.12} />
      <circle cx={cx} cy={cy} r={7}  fill={fill} opacity={0.25} />
      <circle cx={cx} cy={cy} r={4}  fill={fill} stroke="rgba(8,3,10,0.95)" strokeWidth={2} />
    </g>
  )
}

// ── Legend ────────────────────────────────────────────────────────────
function GLegend({ payload }: any) {
  if (!payload?.length) return null
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "8px", paddingTop: "12px" }}>
      {payload.map((e: any, i: number) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "3px 10px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "100px", backdropFilter: "blur(8px)" }}>
          <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: e.color, boxShadow: `0 0 6px ${e.color}` }} />
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-body)", fontWeight: 500 }}>{e.value}</span>
        </div>
      ))}
    </div>
  )
}

// ── Pie label ─────────────────────────────────────────────────────────
function PLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) {
  if (percent < 0.04) return null
  const R = Math.PI / 180
  const r = innerRadius + (outerRadius - innerRadius) * 0.58
  return (
    <text x={cx + r * Math.cos(-midAngle * R)} y={cy + r * Math.sin(-midAngle * R)}
      fill="rgba(255,255,255,0.95)" textAnchor="middle" dominantBaseline="central"
      style={{ fontSize: "11px", fontFamily: "var(--font-display)", fontWeight: 800 }}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

// ── Type switcher ─────────────────────────────────────────────────────
const ALL_TYPES = [
  { id: "bar",      label: "▊ Bar"   },
  { id: "line",     label: "∿ Line"  },
  { id: "area",     label: "◬ Area"  },
  { id: "composed", label: "⊕ Mixed" },
  { id: "pie",      label: "◔ Pie"   },
  { id: "donut",    label: "◯ Donut" },
  { id: "radar",    label: "⬡ Radar" },
]

function Switcher({ current, onChange, color }: { current: string; onChange: (t: string) => void; color: string }) {
  return (
    <div style={{ display: "flex", gap: "4px", marginBottom: "12px", flexWrap: "wrap" }}>
      {ALL_TYPES.map(t => {
        const on = current === t.id
        return (
          <button key={t.id} onClick={() => onChange(t.id)} style={{
            padding: "4px 11px",
            background: on ? `${color}28` : "rgba(255,255,255,0.04)",
            border: `1px solid ${on ? color + "77" : "rgba(255,255,255,0.09)"}`,
            borderRadius: "8px", fontSize: "11px",
            color: on ? color : "rgba(255,255,255,0.3)",
            cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 600,
            backdropFilter: "blur(8px)", transition: "all 0.18s",
            boxShadow: on ? `0 0 14px ${color}44` : "none",
          }}>{t.label}</button>
        )
      })}
    </div>
  )
}

function Empty({ h }: { h: number }) {
  return (
    <div style={{ height: h, display: "flex", alignItems: "center", justifyContent: "center", border: "1px dashed rgba(255,255,255,0.08)", borderRadius: "12px" }}>
      <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "12px", letterSpacing: "0.08em" }}>NO DATA</p>
    </div>
  )
}

// ── Glass Bar (self-contained gradient via inline SVG linearGradient) ─
function GlassBar(props: any) {
  const { x, y, width, height, index } = props
  const [hov, setHov] = useState(false)
  if (height === undefined || isNaN(height)) return null
  const safeH = Math.max(height, 2)
  const color = GLASS[index % GLASS.length]
  // Each bar defines its OWN gradient inside its own <g> → no ID collision
  const gid = `gb-${index}-${Math.round(x)}`
  return (
    <g>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={color} stopOpacity={hov ? "1" : "0.92"} />
          <stop offset="55%"  stopColor={color} stopOpacity="0.5" />
          <stop offset="100%" stopColor={color} stopOpacity="0.1" />
        </linearGradient>
      </defs>
      {hov && <rect x={x-4} y={y-4} width={width+8} height={safeH+8} rx={10} fill={color} opacity={0.15} style={{ filter: "blur(8px)" }} />}
      <rect x={x} y={y} width={width} height={safeH} rx={safeH > 8 ? 6 : 2}
        fill={`url(#${gid})`} opacity={hov ? 1 : 0.88}
        style={{ cursor: "pointer", transition: "opacity 0.15s" }}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      />
      {safeH > 4  && <rect x={x+1} y={y+1} width={width-2} height={2} rx={2} fill="rgba(255,255,255,0.3)" />}
      {safeH > 10 && width > 8 && <rect x={x+1} y={y+3} width={Math.max(2,(width-2)*0.28)} height={safeH-6} rx={2} fill="rgba(255,255,255,0.09)" />}
    </g>
  )
}

// ── Area gradient — rendered as SVG <defs> INSIDE the AreaChart SVG ──
// We inject it via a custom shape trick on the first Area
function AreaWithGradient({ uid, ci, color, ...rest }: any) {
  const gradId = `ag-${uid}-${ci}`
  return (
    <>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={color} stopOpacity="0.55" />
          <stop offset="65%"  stopColor={color} stopOpacity="0.08" />
          <stop offset="100%" stopColor={color} stopOpacity="0"    />
        </linearGradient>
      </defs>
      <Area {...rest} fill={`url(#${gradId})`} />
    </>
  )
}

// ── Main ──────────────────────────────────────────────────────────────
export default function ChartRenderer({
  type, data, columns, size = "small", accent = "#ff6b9d", chartIndex = 0
}: ChartRendererProps) {
  const rawUid = useId()
  const uid = rawUid.replace(/[^a-zA-Z0-9]/g, "")

  const height = size === "large" ? 390 : size === "pie" ? 310 : 270
  const xKey  = columns?.[0] || "name"
  const yKeys = columns?.slice(1)?.length > 0 ? columns.slice(1) : ["value"]

  const autoType = (t: string, idx: number) => {
    if (t && t !== "bar") return t
    return (["bar", "area", "donut", "pie", "line", "radar"] as const)[idx] ?? "bar"
  }
  const [active, setActive] = useState(() => autoType(type, chartIndex))

  if (!data || data.length === 0) return <Empty h={height} />

  const domain   = getDomain(data, yKeys)
  const color0   = GLASS[chartIndex % GLASS.length]

  const ax = { tick: ATICK, axisLine: ALINE, tickLine: false as any }

  // ── BAR ──────────────────────────────────────────────────────────
  if (active === "bar") return (
    <div>
      <Switcher current={active} onChange={setActive} color={color0} />
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} barCategoryGap="30%" barGap={4} margin={{ top: 8, right: 8, bottom: 4, left: 0 }}>
          <CartesianGrid vertical={false} {...AGRID} />
          <XAxis dataKey={xKey} {...ax} interval={0} tick={{ ...ATICK, fontSize: data.length > 8 ? 9 : 11 }} />
          <YAxis {...ax} width={54} domain={domain} tickFormatter={fmt} allowDataOverflow />
          <Tooltip content={<Tip />} cursor={{ fill: `${color0}0a`, rx: 8 }} />
          {yKeys.length > 1 && <Legend content={<GLegend />} />}
          {yKeys.map((col, i) => (
            <Bar key={col} dataKey={col} maxBarSize={56} shape={<GlassBar />} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  )

  // ── LINE ─────────────────────────────────────────────────────────
  if (active === "line") return (
    <div>
      <Switcher current={active} onChange={setActive} color={color0} />
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 8, right: 8, bottom: 4, left: 0 }}>
          <CartesianGrid {...AGRID} />
          <XAxis dataKey={xKey} {...ax} />
          <YAxis {...ax} width={54} domain={domain} tickFormatter={fmt} allowDataOverflow />
          <Tooltip content={<Tip />} />
          {yKeys.length > 1 && <Legend content={<GLegend />} />}
          {yKeys.map((col, i) => {
            const c = GLASS[(chartIndex + i) % GLASS.length]
            return <Line key={col} type="monotone" dataKey={col} stroke={c} strokeWidth={2.5}
              dot={{ fill: c, stroke: "rgba(8,3,10,0.9)", strokeWidth: 2, r: 4 }}
              activeDot={<ADot fill={c} />} />
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )

  // ── AREA ─────────────────────────────────────────────────────────
  if (active === "area") return (
    <div>
      <Switcher current={active} onChange={setActive} color={color0} />
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 4, left: 0 }}>
          {/* Inject ALL area gradients directly into this SVG */}
          <defs>
            {yKeys.map((_, i) => {
              const c = GLASS[(chartIndex + i) % GLASS.length]
              return (
                <linearGradient key={i} id={`${uid}-ag-${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor={c} stopOpacity="0.55" />
                  <stop offset="65%"  stopColor={c} stopOpacity="0.08" />
                  <stop offset="100%" stopColor={c} stopOpacity="0" />
                </linearGradient>
              )
            })}
          </defs>
          <CartesianGrid {...AGRID} />
          <XAxis dataKey={xKey} {...ax} />
          <YAxis {...ax} width={54} domain={domain} tickFormatter={fmt} allowDataOverflow />
          <Tooltip content={<Tip />} />
          {yKeys.length > 1 && <Legend content={<GLegend />} />}
          {yKeys.map((col, i) => {
            const c = GLASS[(chartIndex + i) % GLASS.length]
            return <Area key={col} type="monotone" dataKey={col}
              stroke={c} strokeWidth={2.5}
              fill={`url(#${uid}-ag-${i})`}
              dot={false} activeDot={<ADot fill={c} />} />
          })}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )

  // ── COMPOSED (Bar + Line) ─────────────────────────────────────────
  if (active === "composed") {
    // If only 1 yKey: duplicate as both bar and line with slight offset for visual
    const barCol  = yKeys[0]
    const lineCol = yKeys[1] ?? yKeys[0]
    const c0 = GLASS[chartIndex % GLASS.length]
    const c1 = GLASS[(chartIndex + 1) % GLASS.length]
    return (
      <div>
        <Switcher current={active} onChange={setActive} color={c0} />
        <ResponsiveContainer width="100%" height={height}>
          <ComposedChart data={data} margin={{ top: 8, right: 8, bottom: 4, left: 0 }}>
            <defs>
              <linearGradient id={`${uid}-cg0`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor={c0} stopOpacity="0.92" />
                <stop offset="100%" stopColor={c0} stopOpacity="0.12" />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} {...AGRID} />
            <XAxis dataKey={xKey} {...ax} />
            <YAxis {...ax} width={54} domain={domain} tickFormatter={fmt} allowDataOverflow />
            <Tooltip content={<Tip />} cursor={{ fill: `${c0}0a` }} />
            <Legend content={<GLegend />} />
            <Bar dataKey={barCol} fill={`url(#${uid}-cg0)`} maxBarSize={50} radius={[5,5,0,0]} name={barCol} />
            <Line type="monotone" dataKey={lineCol} stroke={c1} strokeWidth={2.5} name={lineCol}
              dot={{ fill: c1, stroke: "rgba(8,3,10,0.9)", strokeWidth: 2, r: 3 }}
              activeDot={<ADot fill={c1} />} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    )
  }

  // ── RADAR ─────────────────────────────────────────────────────────
  if (active === "radar") return (
    <div>
      <Switcher current={active} onChange={setActive} color={color0} />
      <ResponsiveContainer width="100%" height={height}>
        <RadarChart data={data} cx="50%" cy="50%" outerRadius="68%">
          <defs>
            {yKeys.map((_, i) => {
              const c = GLASS[(chartIndex + i) % GLASS.length]
              return (
                <linearGradient key={i} id={`${uid}-rg-${i}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%"   stopColor={c} stopOpacity="0.4" />
                  <stop offset="100%" stopColor={c} stopOpacity="0.05" />
                </linearGradient>
              )
            })}
          </defs>
          <PolarGrid stroke="rgba(255,255,255,0.08)" />
          <PolarAngleAxis dataKey={xKey} tick={{ ...ATICK }} />
          <PolarRadiusAxis tick={{ fontSize: 9, fill: "rgba(255,255,255,0.2)" }} axisLine={false} />
          {yKeys.map((col, i) => {
            const c = GLASS[(chartIndex + i) % GLASS.length]
            return <Radar key={col} name={col} dataKey={col}
              stroke={c} strokeWidth={2}
              fill={`url(#${uid}-rg-${i})`} />
          })}
          <Legend content={<GLegend />} />
          <Tooltip content={<Tip />} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )

  // ── PIE ───────────────────────────────────────────────────────────
  if (active === "pie") return (
    <div>
      <Switcher current={active} onChange={setActive} color={color0} />
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <Pie data={data} dataKey={yKeys[0]} nameKey={xKey}
            cx="50%" cy="46%" outerRadius="68%"
            paddingAngle={3} strokeWidth={0}
            labelLine={false} label={<PLabel />}
            isAnimationActive animationBegin={80} animationDuration={900}
          >
            {data.map((_: any, i: number) => {
              const c = GLASS[i % GLASS.length]
              return <Cell key={i} fill={c}
                style={{ filter: `drop-shadow(0 0 7px ${c}99)`, opacity: 0.9 }} />
            })}
          </Pie>
          <Tooltip content={<Tip />} />
          <Legend content={<GLegend />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )

  // ── DONUT ─────────────────────────────────────────────────────────
  if (active === "donut") {
    const total = data.reduce((s: number, d: any) => s + (Number(d[yKeys[0]]) || 0), 0)
    return (
      <div>
        <Switcher current={active} onChange={setActive} color={color0} />
        <div style={{ position: "relative" }}>
          <ResponsiveContainer width="100%" height={height}>
            <PieChart>
              <Pie data={data} dataKey={yKeys[0]} nameKey={xKey}
                cx="50%" cy="47%" innerRadius="42%" outerRadius="68%"
                paddingAngle={3} strokeWidth={0}
                isAnimationActive animationBegin={80} animationDuration={1000}
              >
                {data.map((_: any, i: number) => {
                  const c = GLASS[i % GLASS.length]
                  return <Cell key={i} fill={c}
                    style={{ filter: `drop-shadow(0 0 8px ${c}88)`, opacity: 0.88 }} />
                })}
              </Pie>
              <Tooltip content={<Tip />} />
              <Legend content={<GLegend />} />
            </PieChart>
          </ResponsiveContainer>
          {/* Glass center label */}
          <div style={{
            position: "absolute", top: "44%", left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center", pointerEvents: "none",
            background: "rgba(255,255,255,0.07)",
            backdropFilter: "blur(14px)",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: "14px", padding: "8px 16px",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1)",
          }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 800, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>
              {fmt(total)}
            </p>
            <p style={{ fontSize: "9px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.14em", marginTop: "3px", fontWeight: 600 }}>TOTAL</p>
          </div>
        </div>
      </div>
    )
  }

  // ── TABLE fallback ────────────────────────────────────────────────
  const cols = Object.keys(data[0])
  return (
    <div style={{ overflowX: "auto", borderRadius: "10px", overflow: "hidden" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
        <thead>
          <tr style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(8px)" }}>
            {cols.map(col => (
              <th key={col} style={{ padding: "11px 16px", textAlign: "left", color: "rgba(255,255,255,0.3)", fontWeight: 600, fontSize: "10px", letterSpacing: "0.1em", borderBottom: "1px solid rgba(255,255,255,0.07)", fontFamily: "var(--font-display)" }}>
                {col.toUpperCase().replace(/_/g, " ")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(0, 25).map((row: any, i: number) => (
            <TRow key={i} row={row} cols={cols} even={i % 2 === 0} accent={color0} />
          ))}
        </tbody>
      </table>
      {data.length > 25 && (
        <div style={{ textAlign: "center", padding: "12px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.02)" }}>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px", letterSpacing: "0.08em", fontWeight: 600 }}>+{data.length - 25} MORE ROWS</p>
        </div>
      )}
    </div>
  )
}

function TRow({ row, cols, even, accent }: { row: any; cols: string[]; even: boolean; accent: string }) {
  const [h, setH] = useState(false)
  return (
    <tr onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", background: h ? "rgba(255,255,255,0.07)" : even ? "rgba(255,255,255,0.02)" : "transparent", transition: "background 0.15s" }}>
      {cols.map((col, j) => (
        <td key={col} style={{ padding: "10px 16px", color: j === 0 ? "#fff" : "rgba(255,255,255,0.45)", fontWeight: j === 0 ? 600 : 300, fontSize: "13px", borderLeft: j === 0 ? `2px solid ${h ? accent : "transparent"}` : "none", transition: "border-color 0.2s" }}>
          {row[col] != null ? String(row[col]) : "—"}
        </td>
      ))}
    </tr>
  )
}