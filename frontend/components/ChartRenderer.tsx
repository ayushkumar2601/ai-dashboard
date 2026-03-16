// // // "use client"

// // // import {
// // //   BarChart,
// // //   Bar,
// // //   LineChart,
// // //   Line,
// // //   XAxis,
// // //   YAxis,
// // //   Tooltip,
// // //   CartesianGrid,
// // //   ResponsiveContainer
// // // } from "recharts"

// // // interface ChartRendererProps {
// // //   type: string
// // //   data: any[]
// // //   columns: string[]
// // //   size?: "normal" | "small"
// // // }

// // // const COLORS = {
// // //   primary: "#6366f1",
// // //   secondary: "#8b5cf6", 
// // //   accent: "#06b6d4",
// // //   success: "#10b981",
// // //   warning: "#f59e0b"
// // // }

// // // export default function ChartRenderer({ type, data, columns, size = "normal" }: ChartRendererProps) {

// // //   const width = size === "small" ? 450 : 600
// // //   const height = size === "small" ? 250 : 350

// // //   if (type === "bar") {
// // //     return (
// // //       <ResponsiveContainer width="100%" height={height}>
// // //         <BarChart data={data}>
// // //           <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0"/>
// // //           <XAxis 
// // //             dataKey={columns[0]}
// // //             tick={{ fontSize: 12, fill: "#64748b" }}
// // //             axisLine={{ stroke: "#e2e8f0" }}
// // //           />
// // //           <YAxis 
// // //             tick={{ fontSize: 12, fill: "#64748b" }}
// // //             axisLine={{ stroke: "#e2e8f0" }}
// // //           />
// // //           <Tooltip 
// // //             contentStyle={{
// // //               backgroundColor: "white",
// // //               border: "1px solid #e2e8f0",
// // //               borderRadius: "8px",
// // //               boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
// // //             }}
// // //           />
// // //           <Bar 
// // //             dataKey={columns[1]} 
// // //             fill={COLORS.primary}
// // //             radius={[4, 4, 0, 0]}
// // //           />
// // //         </BarChart>
// // //       </ResponsiveContainer>
// // //     )
// // //   }

// // //   if (type === "line") {
// // //     return (
// // //       <ResponsiveContainer width="100%" height={height}>
// // //         <LineChart data={data}>
// // //           <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0"/>
// // //           <XAxis 
// // //             dataKey={columns[0]}
// // //             tick={{ fontSize: 12, fill: "#64748b" }}
// // //             axisLine={{ stroke: "#e2e8f0" }}
// // //           />
// // //           <YAxis 
// // //             tick={{ fontSize: 12, fill: "#64748b" }}
// // //             axisLine={{ stroke: "#e2e8f0" }}
// // //           />
// // //           <Tooltip 
// // //             contentStyle={{
// // //               backgroundColor: "white",
// // //               border: "1px solid #e2e8f0",
// // //               borderRadius: "8px",
// // //               boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
// // //             }}
// // //           />
// // //           <Line 
// // //             type="monotone" 
// // //             dataKey={columns[1]} 
// // //             stroke={COLORS.primary}
// // //             strokeWidth={3}
// // //             dot={{ fill: COLORS.primary, strokeWidth: 2, r: 4 }}
// // //           />
// // //         </LineChart>
// // //       </ResponsiveContainer>
// // //     )
// // //   }

// // //   return (
// // //     <div style={{
// // //       background: "#f8fafc",
// // //       padding: "20px",
// // //       borderRadius: "8px",
// // //       border: "1px solid #e2e8f0"
// // //     }}>
// // //       <pre style={{ 
// // //         fontSize: "12px",
// // //         color: "#374151",
// // //         margin: 0,
// // //         overflow: "auto"
// // //       }}>
// // //         {JSON.stringify(data, null, 2)}
// // //       </pre>
// // //     </div>
// // //   )
// // // }
// // "use client"

// // import {
// //   BarChart, Bar,
// //   LineChart, Line,
// //   AreaChart, Area,
// //   PieChart, Pie, Cell,
// //   XAxis, YAxis, Tooltip,
// //   CartesianGrid, ResponsiveContainer,
// //   Legend, TooltipProps
// // } from "recharts"

// // interface ChartRendererProps {
// //   type: string
// //   data: any[]
// //   columns: string[]
// //   size?: "normal" | "small"
// // }

// // const PALETTE = ["#63daff", "#9b6fff", "#f0c060", "#22c55e", "#f87171", "#fb923c", "#34d399", "#a78bfa"]

// // const AXIS_STYLE = {
// //   tick: { fontSize: 11, fill: "#44445a", fontFamily: "'DM Sans', sans-serif" },
// //   axisLine: { stroke: "rgba(255,255,255,0.05)" },
// //   tickLine: { stroke: "transparent" },
// // }

// // const GRID_STYLE = {
// //   stroke: "rgba(255,255,255,0.04)",
// //   strokeDasharray: "0",
// // }

// // function CustomTooltip({ active, payload, label }: TooltipProps<any, any>) {
// //   if (!active || !payload?.length) return null
// //   return (
// //     <div style={{
// //       background: "#111118",
// //       border: "1px solid rgba(99,218,255,0.2)",
// //       borderRadius: "10px",
// //       padding: "12px 16px",
// //       boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
// //       minWidth: "140px",
// //     }}>
// //       <p style={{ fontSize: "11px", color: "#44445a", marginBottom: "8px", letterSpacing: "0.05em" }}>
// //         {label}
// //       </p>
// //       {payload.map((entry: any, i: number) => (
// //         <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
// //           <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: entry.color || PALETTE[0], flexShrink: 0 }} />
// //           <span style={{ fontSize: "13px", color: "#f0f0f8", fontWeight: 500 }}>
// //             {typeof entry.value === "number"
// //               ? entry.value >= 1000
// //                 ? entry.value.toLocaleString()
// //                 : entry.value
// //               : entry.value}
// //           </span>
// //         </div>
// //       ))}
// //     </div>
// //   )
// // }

// // export default function ChartRenderer({ type, data, columns, size = "normal" }: ChartRendererProps) {
// //   const height = size === "small" ? 240 : 360
// //   const xKey = columns?.[0] || "name"
// //   const yKey = columns?.[1] || "value"

// //   if (!data || data.length === 0) {
// //     return (
// //       <div style={{
// //         height: `${height}px`,
// //         display: "flex",
// //         alignItems: "center",
// //         justifyContent: "center",
// //         color: "var(--text-muted)",
// //         fontSize: "13px",
// //         border: "1px dashed var(--border-subtle)",
// //         borderRadius: "10px",
// //       }}>
// //         No data available
// //       </div>
// //     )
// //   }

// //   if (type === "bar") {
// //     return (
// //       <ResponsiveContainer width="100%" height={height}>
// //         <BarChart data={data} barCategoryGap="32%">
// //           <defs>
// //             <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
// //               <stop offset="0%" stopColor="#63daff" stopOpacity="0.9"/>
// //               <stop offset="100%" stopColor="#9b6fff" stopOpacity="0.6"/>
// //             </linearGradient>
// //           </defs>
// //           <CartesianGrid vertical={false} {...GRID_STYLE} />
// //           <XAxis dataKey={xKey} {...AXIS_STYLE} />
// //           <YAxis {...AXIS_STYLE} width={52} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
// //           <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(99,218,255,0.04)" }} />
// //           <Bar dataKey={yKey} fill="url(#barGrad)" radius={[4, 4, 0, 0]} maxBarSize={52} />
// //         </BarChart>
// //       </ResponsiveContainer>
// //     )
// //   }

// //   if (type === "line") {
// //     return (
// //       <ResponsiveContainer width="100%" height={height}>
// //         <LineChart data={data}>
// //           <defs>
// //             <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="0">
// //               <stop offset="0%" stopColor="#9b6fff"/>
// //               <stop offset="100%" stopColor="#63daff"/>
// //             </linearGradient>
// //           </defs>
// //           <CartesianGrid {...GRID_STYLE} />
// //           <XAxis dataKey={xKey} {...AXIS_STYLE} />
// //           <YAxis {...AXIS_STYLE} width={52} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
// //           <Tooltip content={<CustomTooltip />} />
// //           <Line
// //             type="monotone"
// //             dataKey={yKey}
// //             stroke="url(#lineGlow)"
// //             strokeWidth={2.5}
// //             dot={{ fill: "#63daff", stroke: "#63daff", strokeWidth: 2, r: 4 }}
// //             activeDot={{ r: 6, fill: "#63daff", stroke: "#111118", strokeWidth: 2 }}
// //           />
// //         </LineChart>
// //       </ResponsiveContainer>
// //     )
// //   }

// //   if (type === "area") {
// //     return (
// //       <ResponsiveContainer width="100%" height={height}>
// //         <AreaChart data={data}>
// //           <defs>
// //             <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
// //               <stop offset="5%" stopColor="#63daff" stopOpacity="0.15"/>
// //               <stop offset="95%" stopColor="#63daff" stopOpacity="0"/>
// //             </linearGradient>
// //           </defs>
// //           <CartesianGrid {...GRID_STYLE} />
// //           <XAxis dataKey={xKey} {...AXIS_STYLE} />
// //           <YAxis {...AXIS_STYLE} width={52} tickFormatter={(v) => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
// //           <Tooltip content={<CustomTooltip />} />
// //           <Area
// //             type="monotone"
// //             dataKey={yKey}
// //             stroke="#63daff"
// //             strokeWidth={2}
// //             fill="url(#areaFill)"
// //             dot={false}
// //             activeDot={{ r: 5, fill: "#63daff", stroke: "#111118", strokeWidth: 2 }}
// //           />
// //         </AreaChart>
// //       </ResponsiveContainer>
// //     )
// //   }

// //   if (type === "pie" || type === "donut") {
// //     const isDonut = type === "donut"
// //     return (
// //       <ResponsiveContainer width="100%" height={height}>
// //         <PieChart>
// //           <Pie
// //             data={data}
// //             dataKey={yKey}
// //             nameKey={xKey}
// //             cx="50%"
// //             cy="50%"
// //             innerRadius={isDonut ? "45%" : 0}
// //             outerRadius="70%"
// //             paddingAngle={2}
// //             strokeWidth={0}
// //           >
// //             {data.map((_: any, i: number) => (
// //               <Cell key={i} fill={PALETTE[i % PALETTE.length]} opacity={0.85} />
// //             ))}
// //           </Pie>
// //           <Tooltip content={<CustomTooltip />} />
// //           <Legend
// //             iconType="circle"
// //             iconSize={8}
// //             wrapperStyle={{
// //               fontSize: "12px",
// //               color: "var(--text-secondary)",
// //               fontFamily: "var(--font-body)",
// //             }}
// //           />
// //         </PieChart>
// //       </ResponsiveContainer>
// //     )
// //   }

// //   // Table / raw fallback
// //   if (data.length > 0) {
// //     const cols = Object.keys(data[0])
// //     return (
// //       <div style={{ overflowX: "auto" }}>
// //         <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
// //           <thead>
// //             <tr>
// //               {cols.map((col) => (
// //                 <th key={col} style={{
// //                   padding: "10px 16px",
// //                   textAlign: "left",
// //                   color: "var(--text-muted)",
// //                   fontWeight: 500,
// //                   letterSpacing: "0.08em",
// //                   fontSize: "11px",
// //                   borderBottom: "1px solid var(--border-subtle)",
// //                   fontFamily: "var(--font-display)",
// //                 }}>
// //                   {col.toUpperCase()}
// //                 </th>
// //               ))}
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {data.slice(0, 20).map((row: any, i: number) => (
// //               <tr key={i} style={{
// //                 borderBottom: "1px solid var(--border-subtle)",
// //                 transition: "background 0.15s",
// //               }}
// //                 onMouseOver={e => (e.currentTarget.style.background = "rgba(255,255,255,0.02)")}
// //                 onMouseOut={e => (e.currentTarget.style.background = "transparent")}
// //               >
// //                 {cols.map((col) => (
// //                   <td key={col} style={{
// //                     padding: "10px 16px",
// //                     color: "var(--text-secondary)",
// //                     fontWeight: 300,
// //                   }}>
// //                     {row[col] !== null && row[col] !== undefined ? String(row[col]) : "—"}
// //                   </td>
// //                 ))}
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //         {data.length > 20 && (
// //           <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "12px", padding: "12px", letterSpacing: "0.05em" }}>
// //             +{data.length - 20} MORE ROWS
// //           </p>
// //         )}
// //       </div>
// //     )
// //   }

// //   return null
// // }
// "use client"

// import {
//   BarChart, Bar, LineChart, Line, AreaChart, Area,
//   PieChart, Pie, Cell, XAxis, YAxis, Tooltip,
//   CartesianGrid, ResponsiveContainer, Legend,
//   TooltipProps, RadialBarChart, RadialBar,
// } from "recharts"

// interface ChartRendererProps {
//   type: string
//   data: any[]
//   columns: string[]
//   size?: "large" | "small" | "pie"
// }

// // Rose-first premium palette
// const PALETTE = [
//   "#e1325a", "#a78bfa", "#2dd4bf", "#f0c060",
//   "#fb923c", "#34d399", "#38bdf8", "#f472b6",
//   "#818cf8", "#a3e635",
// ]

// const AXIS = {
//   tick: { fontSize: 11, fill: "#55445a", fontFamily: "'DM Sans', sans-serif", fontWeight: 400 },
//   axisLine: { stroke: "rgba(255,255,255,0.04)" },
//   tickLine: false as any,
// }

// const GRID = { stroke: "rgba(255,255,255,0.04)", strokeDasharray: "0" }

// function Tip({ active, payload, label }: TooltipProps<any, any>) {
//   if (!active || !payload?.length) return null
//   return (
//     <div style={{ background: "#1a0d12", border: "1px solid rgba(225,50,90,0.3)", borderRadius: "12px", padding: "12px 16px", boxShadow: "0 20px 48px rgba(0,0,0,0.6)", minWidth: "130px" }}>
//       {label && <p style={{ fontSize: "11px", color: "var(--text-muted)", marginBottom: "8px", letterSpacing: "0.05em" }}>{label}</p>}
//       {payload.map((e: any, i: number) => (
//         <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: i > 0 ? "4px" : 0 }}>
//           <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: e.color || PALETTE[0], flexShrink: 0 }} />
//           <span style={{ fontSize: "13px", color: "#fdf0f3", fontWeight: 500 }}>
//             {typeof e.value === "number" && e.value >= 1000 ? e.value.toLocaleString() : e.value}
//           </span>
//           {e.name && e.name !== e.dataKey && <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>{e.name}</span>}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default function ChartRenderer({ type, data, columns, size = "small" }: ChartRendererProps) {
//   const height = size === "large" ? 380 : size === "pie" ? 280 : 260
//   const xKey = columns?.[0] || "name"
//   const yKey = columns?.[1] || "value"

//   if (!data || data.length === 0) {
//     return (
//       <div style={{ height: `${height}px`, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", fontSize: "13px", border: "1px dashed rgba(255,255,255,0.06)", borderRadius: "10px" }}>
//         No data available
//       </div>
//     )
//   }

//   // ── BAR ──────────────────────────────────────────
//   if (type === "bar") {
//     return (
//       <ResponsiveContainer width="100%" height={height}>
//         <BarChart data={data} barCategoryGap="35%" margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
//           <defs>
//             {PALETTE.map((c, i) => (
//               <linearGradient key={i} id={`bar${i}`} x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stopColor={c} stopOpacity="1"/>
//                 <stop offset="100%" stopColor={c} stopOpacity="0.4"/>
//               </linearGradient>
//             ))}
//           </defs>
//           <CartesianGrid vertical={false} {...GRID} />
//           <XAxis dataKey={xKey} {...AXIS} />
//           <YAxis {...AXIS} width={48} tickFormatter={v => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
//           <Tooltip content={<Tip />} cursor={{ fill: "rgba(225,50,90,0.06)" }} />
//           {/* Multi-series support */}
//           {columns.slice(1).map((col, i) => (
//             <Bar key={col} dataKey={col} fill={`url(#bar${i})`} radius={[5, 5, 0, 0]} maxBarSize={48} />
//           ))}
//         </BarChart>
//       </ResponsiveContainer>
//     )
//   }

//   // ── LINE ─────────────────────────────────────────
//   if (type === "line") {
//     return (
//       <ResponsiveContainer width="100%" height={height}>
//         <LineChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
//           <defs>
//             <linearGradient id="lineG" x1="0" y1="0" x2="1" y2="0">
//               <stop offset="0%" stopColor="#e1325a"/>
//               <stop offset="50%" stopColor="#f0c060"/>
//               <stop offset="100%" stopColor="#a78bfa"/>
//             </linearGradient>
//           </defs>
//           <CartesianGrid {...GRID} />
//           <XAxis dataKey={xKey} {...AXIS} />
//           <YAxis {...AXIS} width={48} tickFormatter={v => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
//           <Tooltip content={<Tip />} />
//           {columns.slice(1).map((col, i) => (
//             <Line key={col} type="monotone" dataKey={col}
//               stroke={i === 0 ? "url(#lineG)" : PALETTE[i + 1]}
//               strokeWidth={2.5}
//               dot={{ fill: PALETTE[i] || "#e1325a", stroke: "#1a0d12", strokeWidth: 2, r: 4 }}
//               activeDot={{ r: 6, fill: PALETTE[i] || "#e1325a", stroke: "#1a0d12", strokeWidth: 2 }}
//             />
//           ))}
//         </LineChart>
//       </ResponsiveContainer>
//     )
//   }

//   // ── AREA ─────────────────────────────────────────
//   if (type === "area") {
//     return (
//       <ResponsiveContainer width="100%" height={height}>
//         <AreaChart data={data} margin={{ top: 4, right: 4, bottom: 0, left: 0 }}>
//           <defs>
//             <linearGradient id="areaFill0" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#e1325a" stopOpacity="0.35"/>
//               <stop offset="95%" stopColor="#e1325a" stopOpacity="0"/>
//             </linearGradient>
//             <linearGradient id="areaFill1" x1="0" y1="0" x2="0" y2="1">
//               <stop offset="5%" stopColor="#a78bfa" stopOpacity="0.25"/>
//               <stop offset="95%" stopColor="#a78bfa" stopOpacity="0"/>
//             </linearGradient>
//           </defs>
//           <CartesianGrid {...GRID} />
//           <XAxis dataKey={xKey} {...AXIS} />
//           <YAxis {...AXIS} width={48} tickFormatter={v => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
//           <Tooltip content={<Tip />} />
//           {columns.slice(1).map((col, i) => (
//             <Area key={col} type="monotone" dataKey={col}
//               stroke={PALETTE[i] || "#e1325a"} strokeWidth={2.5}
//               fill={`url(#areaFill${i})`}
//               dot={false}
//               activeDot={{ r: 5, fill: PALETTE[i] || "#e1325a", stroke: "#1a0d12", strokeWidth: 2 }}
//             />
//           ))}
//         </AreaChart>
//       </ResponsiveContainer>
//     )
//   }

//   // ── PIE ──────────────────────────────────────────
//   if (type === "pie") {
//     return (
//       <ResponsiveContainer width="100%" height={height}>
//         <PieChart>
//           <defs>
//             {PALETTE.map((c, i) => (
//               <radialGradient key={i} id={`pieG${i}`} cx="50%" cy="50%" r="50%">
//                 <stop offset="0%" stopColor={c} stopOpacity="1"/>
//                 <stop offset="100%" stopColor={c} stopOpacity="0.7"/>
//               </radialGradient>
//             ))}
//           </defs>
//           <Pie data={data} dataKey={yKey} nameKey={xKey} cx="50%" cy="45%"
//             outerRadius="70%" paddingAngle={3} strokeWidth={0}
//           >
//             {data.map((_: any, i: number) => (
//               <Cell key={i} fill={`url(#pieG${i % PALETTE.length})`} />
//             ))}
//           </Pie>
//           <Tooltip content={<Tip />} />
//           <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: "11px", color: "var(--text-secondary)", fontFamily: "var(--font-body)", paddingTop: "8px" }} />
//         </PieChart>
//       </ResponsiveContainer>
//     )
//   }

//   // ── DONUT ────────────────────────────────────────
//   if (type === "donut") {
//     const total = data.reduce((s: number, d: any) => s + (Number(d[yKey]) || 0), 0)
//     return (
//       <div style={{ position: "relative" }}>
//         <ResponsiveContainer width="100%" height={height}>
//           <PieChart>
//             <defs>
//               {PALETTE.map((c, i) => (
//                 <linearGradient key={i} id={`donutG${i}`} x1="0" y1="0" x2="1" y2="1">
//                   <stop offset="0%" stopColor={c} stopOpacity="1"/>
//                   <stop offset="100%" stopColor={c} stopOpacity="0.6"/>
//                 </linearGradient>
//               ))}
//             </defs>
//             <Pie data={data} dataKey={yKey} nameKey={xKey}
//               cx="50%" cy="45%" innerRadius="50%" outerRadius="72%"
//               paddingAngle={3} strokeWidth={0}
//             >
//               {data.map((_: any, i: number) => (
//                 <Cell key={i} fill={`url(#donutG${i % PALETTE.length})`} />
//               ))}
//             </Pie>
//             <Tooltip content={<Tip />} />
//             <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: "11px", color: "var(--text-secondary)", fontFamily: "var(--font-body)", paddingTop: "4px" }} />
//           </PieChart>
//         </ResponsiveContainer>
//         {/* Center label */}
//         <div style={{ position: "absolute", top: "42%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", pointerEvents: "none" }}>
//           <p style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 800, color: "#fdf0f3", letterSpacing: "-0.02em" }}>
//             {total >= 1000000 ? `${(total/1000000).toFixed(1)}M` : total >= 1000 ? `${(total/1000).toFixed(0)}k` : total}
//           </p>
//           <p style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.08em", marginTop: "2px" }}>TOTAL</p>
//         </div>
//       </div>
//     )
//   }

//   // ── TABLE fallback ────────────────────────────────
//   if (data.length > 0) {
//     const cols = Object.keys(data[0])
//     return (
//       <div style={{ overflowX: "auto" }}>
//         <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
//           <thead>
//             <tr>
//               {cols.map((col, i) => (
//                 <th key={col} style={{ padding: "10px 14px", textAlign: "left", color: "var(--text-muted)", fontWeight: 500, fontSize: "10px", letterSpacing: "0.1em", borderBottom: "1px solid rgba(255,255,255,0.06)", fontFamily: "var(--font-display)", background: i === 0 ? "rgba(225,50,90,0.04)" : "transparent" }}>
//                   {col.toUpperCase().replace(/_/g, " ")}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {data.slice(0, 25).map((row: any, i: number) => (
//               <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.04)", transition: "background 0.15s" }}
//                 onMouseOver={e => (e.currentTarget.style.background = "rgba(225,50,90,0.04)")}
//                 onMouseOut={e => (e.currentTarget.style.background = "transparent")}
//               >
//                 {cols.map((col, j) => (
//                   <td key={col} style={{ padding: "10px 14px", color: j === 0 ? "#fdf0f3" : "var(--text-secondary)", fontWeight: j === 0 ? 400 : 300 }}>
//                     {row[col] !== null && row[col] !== undefined ? String(row[col]) : "—"}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {data.length > 25 && (
//           <p style={{ textAlign: "center", color: "var(--text-muted)", fontSize: "11px", padding: "14px", letterSpacing: "0.06em" }}>
//             +{data.length - 25} MORE ROWS
//           </p>
//         )}
//       </div>
//     )
//   }

//   return null
// }
"use client"

import { useState, useCallback } from "react"
import {
  BarChart, Bar, LineChart, Line, AreaChart, Area,
  PieChart, Pie, Cell, XAxis, YAxis, Tooltip,
  CartesianGrid, ResponsiveContainer, Legend,
  TooltipProps,
} from "recharts"

interface ChartRendererProps {
  type: string
  data: any[]
  columns: string[]
  size?: "large" | "small" | "pie"
  accent?: string
}

const PALETTE = [
  "#e1325a", "#a78bfa", "#2dd4bf", "#f0c060",
  "#fb923c", "#34d399", "#38bdf8", "#f472b6",
  "#818cf8", "#a3e635",
]

const mkAxis = (accent = "#e1325a") => ({
  tick: { fontSize: 11, fill: "#55445a", fontFamily: "'DM Sans',sans-serif", fontWeight: 400 },
  axisLine: { stroke: "rgba(255,255,255,0.04)" },
  tickLine: false as any,
})

const GRID = { stroke: "rgba(255,255,255,0.04)", strokeDasharray: "0" }

// ── Custom Tooltip ────────────────────────────────────────────────────
function Tip({ active, payload, label }: TooltipProps<any, any>) {
  if (!active || !payload?.length) return null
  return (
    <div style={{
      background: "linear-gradient(145deg, #1e0e16, #160c12)",
      border: "1px solid rgba(225,50,90,0.35)",
      borderRadius: "14px", padding: "14px 18px",
      boxShadow: "0 24px 56px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04)",
      minWidth: "140px", backdropFilter: "blur(12px)",
    }}>
      {label !== undefined && label !== null && (
        <p style={{ fontSize: "10px", color: "#55445a", marginBottom: "10px", letterSpacing: "0.08em", borderBottom: "1px solid rgba(255,255,255,0.06)", paddingBottom: "8px" }}>
          {String(label)}
        </p>
      )}
      {payload.map((e: any, i: number) => {
        const val = typeof e.value === "number" && e.value >= 1000 ? e.value.toLocaleString() : e.value
        return (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", marginTop: i > 0 ? "6px" : 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
              <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: e.color || PALETTE[0], boxShadow: `0 0 8px ${e.color || PALETTE[0]}88`, flexShrink: 0 }} />
              {e.name && <span style={{ fontSize: "11px", color: "#7a6a88" }}>{e.name}</span>}
            </div>
            <span style={{ fontSize: "14px", color: "#fdf0f3", fontWeight: 600, fontFamily: "var(--font-display)" }}>{val}</span>
          </div>
        )
      })}
    </div>
  )
}

// ── Custom Bar Shape with hover glow ─────────────────────────────────
function GlowBar(props: any) {
  const { x, y, width, height, fill, index } = props
  const [hovered, setHovered] = useState(false)
  if (!height || height <= 0) return null
  const color = PALETTE[index % PALETTE.length]
  return (
    <g>
      {/* Glow shadow */}
      {hovered && (
        <rect x={x - 2} y={y - 2} width={width + 4} height={height + 4}
          rx={6} fill={color} opacity={0.15} filter="url(#glow)" />
      )}
      <rect
        x={x} y={y} width={width} height={height}
        rx={5} ry={5}
        fill={fill}
        style={{ cursor: "pointer", transition: "opacity 0.2s" }}
        opacity={hovered ? 1 : 0.85}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      />
      {/* Top highlight */}
      <rect x={x + 1} y={y + 1} width={width - 2} height={3} rx={4} fill="rgba(255,255,255,0.2)" />
    </g>
  )
}

// ── Custom Active Dot ─────────────────────────────────────────────────
function ActiveDot(props: any) {
  const { cx, cy, fill } = props
  return (
    <g>
      <circle cx={cx} cy={cy} r={10} fill={fill} opacity={0.15} />
      <circle cx={cx} cy={cy} r={6} fill={fill} opacity={0.3} />
      <circle cx={cx} cy={cy} r={4} fill={fill} stroke="#1a0d12" strokeWidth={2} />
    </g>
  )
}

// ── Custom Legend ─────────────────────────────────────────────────────
function CustomLegend({ payload }: any) {
  if (!payload?.length) return null
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px", paddingTop: "12px" }}>
      {payload.map((entry: any, i: number) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: entry.color, boxShadow: `0 0 6px ${entry.color}88` }} />
          <span style={{ fontSize: "11px", color: "#8888aa", fontFamily: "var(--font-body)" }}>{entry.value}</span>
        </div>
      ))}
    </div>
  )
}

// ── Custom Pie Label ──────────────────────────────────────────────────
function PieLabel({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) {
  if (percent < 0.05) return null
  const RADIAN = Math.PI / 180
  const r = innerRadius + (outerRadius - innerRadius) * 0.55
  const x = cx + r * Math.cos(-midAngle * RADIAN)
  const y = cy + r * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y} fill="rgba(255,255,255,0.85)" textAnchor="middle" dominantBaseline="central"
      style={{ fontSize: "11px", fontFamily: "var(--font-display)", fontWeight: 600 }}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

// ── Main Component ────────────────────────────────────────────────────
export default function ChartRenderer({ type, data, columns, size = "small", accent = "#e1325a" }: ChartRendererProps) {
  const height = size === "large" ? 390 : size === "pie" ? 290 : 270
  const xKey = columns?.[0] || "name"
  const yKey = columns?.[1] || "value"

  if (!data || data.length === 0) {
    return (
      <div style={{ height: `${height}px`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px", border: "1px dashed rgba(255,255,255,0.07)", borderRadius: "12px" }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M4 20l6-6 4 4 7-9 3 3" stroke="#55445a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="2" y="2" width="24" height="24" rx="4" stroke="#33334a" strokeWidth="1"/>
        </svg>
        <p style={{ color: "var(--text-muted)", fontSize: "12px", letterSpacing: "0.06em" }}>NO DATA AVAILABLE</p>
      </div>
    )
  }

  const AXIS = mkAxis(accent)

  // ── BAR ────────────────────────────────────────────────────────────
  if (type === "bar") {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} barCategoryGap="36%" barGap={4} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="blur"/>
              <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            {PALETTE.map((c, i) => (
              <linearGradient key={i} id={`barG${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={c} stopOpacity="1"/>
                <stop offset="100%" stopColor={c} stopOpacity="0.35"/>
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid vertical={false} {...GRID} />
          <XAxis dataKey={xKey} {...AXIS} />
          <YAxis {...AXIS} width={50} tickFormatter={v => v >= 1000000 ? `${(v/1000000).toFixed(1)}M` : v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
          <Tooltip content={<Tip />} cursor={{ fill: `${accent}08`, rx: 6 }} />
          {columns.slice(1).map((col, i) => (
            <Bar key={col} dataKey={col} fill={`url(#barG${i})`} maxBarSize={52} shape={<GlowBar />} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    )
  }

  // ── LINE ──────────────────────────────────────────────────────────
  if (type === "line") {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e1325a"/>
              <stop offset="50%" stopColor="#f0c060"/>
              <stop offset="100%" stopColor="#a78bfa"/>
            </linearGradient>
          </defs>
          <CartesianGrid {...GRID} />
          <XAxis dataKey={xKey} {...AXIS} />
          <YAxis {...AXIS} width={50} tickFormatter={v => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
          <Tooltip content={<Tip />} />
          {columns.slice(1).map((col, i) => (
            <Line key={col} type="monotone" dataKey={col}
              stroke={i === 0 ? "url(#lineGrad)" : PALETTE[i + 1]}
              strokeWidth={2.5}
              dot={{ fill: PALETTE[i] || "#e1325a", stroke: "#180e13", strokeWidth: 2.5, r: 4 }}
              activeDot={<ActiveDot fill={PALETTE[i] || "#e1325a"} />}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    )
  }

  // ── AREA ──────────────────────────────────────────────────────────
  if (type === "area") {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <AreaChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
          <defs>
            {columns.slice(1).map((col, i) => (
              <linearGradient key={i} id={`areaG${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={PALETTE[i]} stopOpacity="0.4"/>
                <stop offset="60%" stopColor={PALETTE[i]} stopOpacity="0.08"/>
                <stop offset="100%" stopColor={PALETTE[i]} stopOpacity="0"/>
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid {...GRID} />
          <XAxis dataKey={xKey} {...AXIS} />
          <YAxis {...AXIS} width={50} tickFormatter={v => v >= 1000 ? `${(v/1000).toFixed(0)}k` : v} />
          <Tooltip content={<Tip />} />
          {columns.slice(1).map((col, i) => (
            <Area key={col} type="monotone" dataKey={col}
              stroke={PALETTE[i]} strokeWidth={2.5}
              fill={`url(#areaG${i})`} dot={false}
              activeDot={<ActiveDot fill={PALETTE[i]} />}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    )
  }

  // ── PIE ──────────────────────────────────────────────────────────
  if (type === "pie") {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <PieChart>
          <defs>
            {PALETTE.map((c, i) => (
              <radialGradient key={i} id={`pieG${i}`} cx="50%" cy="30%" r="70%">
                <stop offset="0%" stopColor={c} stopOpacity="1"/>
                <stop offset="100%" stopColor={c} stopOpacity="0.65"/>
              </radialGradient>
            ))}
            <filter id="pieShadow">
              <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.4"/>
            </filter>
          </defs>
          <Pie
            data={data} dataKey={yKey} nameKey={xKey}
            cx="50%" cy="44%" outerRadius="68%"
            paddingAngle={3} strokeWidth={0}
            labelLine={false}
            label={<PieLabel />}
            isAnimationActive={true}
            animationBegin={100}
            animationDuration={900}
          >
            {data.map((_: any, i: number) => (
              <Cell key={i} fill={`url(#pieG${i % PALETTE.length})`} filter="url(#pieShadow)" />
            ))}
          </Pie>
          <Tooltip content={<Tip />} />
          <Legend content={<CustomLegend />} />
        </PieChart>
      </ResponsiveContainer>
    )
  }

  // ── DONUT ────────────────────────────────────────────────────────
  if (type === "donut") {
    const total = data.reduce((s: number, d: any) => s + (Number(d[yKey]) || 0), 0)
    const fmtTotal = total >= 1000000
      ? `${(total / 1000000).toFixed(1)}M`
      : total >= 1000 ? `${(total / 1000).toFixed(0)}k` : String(total)

    return (
      <div style={{ position: "relative" }}>
        <ResponsiveContainer width="100%" height={height}>
          <PieChart>
            <defs>
              {PALETTE.map((c, i) => (
                <linearGradient key={i} id={`donutG${i}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={c} stopOpacity="1"/>
                  <stop offset="100%" stopColor={c} stopOpacity="0.55"/>
                </linearGradient>
              ))}
            </defs>
            <Pie
              data={data} dataKey={yKey} nameKey={xKey}
              cx="50%" cy="44%" innerRadius="46%" outerRadius="70%"
              paddingAngle={3} strokeWidth={0}
              isAnimationActive={true} animationBegin={100} animationDuration={1000}
            >
              {data.map((_: any, i: number) => (
                <Cell key={i} fill={`url(#donutG${i % PALETTE.length})`} />
              ))}
            </Pie>
            <Tooltip content={<Tip />} />
            <Legend content={<CustomLegend />} />
          </PieChart>
        </ResponsiveContainer>

        {/* Center label */}
        <div style={{
          position: "absolute", top: size === "pie" ? "41%" : "42%",
          left: "50%", transform: "translate(-50%, -50%)",
          textAlign: "center", pointerEvents: "none",
        }}>
          <p style={{ fontFamily: "var(--font-display)", fontSize: size === "pie" ? "22px" : "26px", fontWeight: 800, color: "#fdf0f3", letterSpacing: "-0.03em", lineHeight: 1 }}>
            {fmtTotal}
          </p>
          <p style={{ fontSize: "9px", color: "var(--text-muted)", letterSpacing: "0.12em", marginTop: "4px" }}>TOTAL</p>
        </div>
      </div>
    )
  }

  // ── TABLE fallback ────────────────────────────────────────────────
  if (data.length > 0) {
    const cols = Object.keys(data[0])
    return (
      <div style={{ overflowX: "auto", borderRadius: "10px", overflow: "hidden" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
          <thead>
            <tr style={{ background: "rgba(225,50,90,0.05)" }}>
              {cols.map((col) => (
                <th key={col} style={{
                  padding: "11px 16px", textAlign: "left",
                  color: "var(--text-muted)", fontWeight: 500,
                  fontSize: "10px", letterSpacing: "0.1em",
                  borderBottom: "1px solid rgba(225,50,90,0.15)",
                  fontFamily: "var(--font-display)",
                }}>
                  {col.toUpperCase().replace(/_/g, " ")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 25).map((row: any, i: number) => (
              <TableRow key={i} row={row} cols={cols} even={i % 2 === 0} />
            ))}
          </tbody>
        </table>
        {data.length > 25 && (
          <div style={{ textAlign: "center", padding: "14px", borderTop: "1px solid rgba(255,255,255,0.04)", background: "rgba(255,255,255,0.01)" }}>
            <p style={{ color: "var(--text-muted)", fontSize: "11px", letterSpacing: "0.08em" }}>
              +{data.length - 25} MORE ROWS
            </p>
          </div>
        )}
      </div>
    )
  }

  return null
}

function TableRow({ row, cols, even }: { row: any; cols: string[]; even: boolean }) {
  const [hovered, setHovered] = useState(false)
  return (
    <tr
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderBottom: "1px solid rgba(255,255,255,0.04)",
        background: hovered ? "rgba(225,50,90,0.05)" : even ? "rgba(255,255,255,0.01)" : "transparent",
        transition: "background 0.15s ease",
      }}
    >
      {cols.map((col, j) => (
        <td key={col} style={{
          padding: "11px 16px",
          color: j === 0 ? "#fdf0f3" : "var(--text-secondary)",
          fontWeight: j === 0 ? 400 : 300,
          fontSize: "13px",
          borderLeft: j === 0 && hovered ? "2px solid #e1325a" : "2px solid transparent",
          transition: "border-color 0.2s",
        }}>
          {row[col] !== null && row[col] !== undefined ? String(row[col]) : "—"}
        </td>
      ))}
    </tr>
  )
}