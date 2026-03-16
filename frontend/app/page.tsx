// // "use client"

// // import axios from "axios"
// // import { useState } from "react"

// // import PromptBox from "../components/PromptBox"
// // import DashboardGrid from "../components/DashboardGrid"

// // export default function Page() {

// //   const [result, setResult] = useState(null)
// //   const [loading, setLoading] = useState(false)

// //   async function runQuery(query: string) {
// //     setLoading(true)
    
// //     try {
// //       const res = await axios.post(
// //         "http://localhost:8000/query",
// //         { query }
// //       )
// //       setResult(res.data)
// //     } catch (error) {
// //       setResult({ error: "Failed to generate dashboard" })
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   return (

// //     <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>

// //       <h1 style={{ 
// //         fontSize: "32px", 
// //         marginBottom: "30px",
// //         background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
// //         WebkitBackgroundClip: "text",
// //         WebkitTextFillColor: "transparent",
// //         fontWeight: "bold"
// //       }}>
// //         Conversational AI Dashboard
// //       </h1>

// //       <PromptBox onSubmit={runQuery} />

// //       {loading && (
// //         <div style={{ 
// //           textAlign: "center", 
// //           padding: "40px",
// //           color: "#6366f1",
// //           fontSize: "18px"
// //         }}>
// //           🤖 Generating your dashboard...
// //         </div>
// //       )}

// //       {result && !result.error && !loading && (
// //         <DashboardGrid result={result} />
// //       )}

// //       {result?.error && !loading && (
// //         <div style={{ 
// //           padding: "20px", 
// //           background: "#fee2e2", 
// //           borderRadius: "8px",
// //           color: "#dc2626"
// //         }}>
// //           Error: {result.error}
// //         </div>
// //       )}

// //     </div>
// //   )
// // }
// "use client"

// import axios from "axios"
// import { useState } from "react"
// import PromptBox from "../components/PromptBox"
// import DashboardGrid from "../components/DashboardGrid"

// export default function Page() {
//   const [result, setResult] = useState<any>(null)
//   const [loading, setLoading] = useState(false)

//   async function runQuery(query: string) {
//     setLoading(true)
//     setResult(null)
//     try {
//       const res = await axios.post("http://localhost:8000/query", { query })
//       setResult(res.data)
//     } catch (error) {
//       setResult({ error: "Failed to generate dashboard" })
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div style={{ position: "relative", zIndex: 1, minHeight: "100vh" }}>

//       {/* Top bar */}
//       <header style={{
//         position: "fixed",
//         top: 0, left: 0, right: 0,
//         height: "56px",
//         borderBottom: "1px solid var(--border-subtle)",
//         background: "rgba(5,5,8,0.8)",
//         backdropFilter: "blur(20px)",
//         display: "flex",
//         alignItems: "center",
//         padding: "0 32px",
//         justifyContent: "space-between",
//         zIndex: 100,
//       }}>
//         <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
//           <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
//             <polygon points="10,1 13,8 20,8 14.5,13 16.5,20 10,16 3.5,20 5.5,13 0,8 7,8" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.2"/>
//           </svg>
//           <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "15px", letterSpacing: "0.15em", color: "var(--text-primary)" }}>AXIOM</span>
//           <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em", marginLeft: "4px" }}>INTELLIGENCE</span>
//         </div>
//         <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
//           <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }}></div>
//           <span style={{ fontSize: "12px", color: "var(--text-secondary)" }}>Live</span>
//         </div>
//       </header>

//       {/* Main content */}
//       <main style={{ paddingTop: "56px" }}>

//         {/* Hero / Prompt area */}
//         {!result && !loading && (
//           <div style={{
//             minHeight: "calc(100vh - 56px)",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: "40px 24px",
//             animation: "fadeUp 0.6s ease both",
//           }}>
//             {/* Headline */}
//             <div style={{ textAlign: "center", marginBottom: "52px" }}>
//               <div style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: "8px",
//                 background: "rgba(99,218,255,0.07)",
//                 border: "1px solid rgba(99,218,255,0.15)",
//                 borderRadius: "100px",
//                 padding: "6px 14px",
//                 marginBottom: "28px",
//               }}>
//                 <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--accent-cyan)", animation: "blink 2s ease infinite" }}></div>
//                 <span style={{ fontSize: "11px", color: "var(--accent-cyan)", letterSpacing: "0.12em", fontFamily: "var(--font-display)" }}>AI-POWERED ANALYTICS</span>
//               </div>
//               <h1 style={{
//                 fontFamily: "var(--font-display)",
//                 fontSize: "clamp(40px, 6vw, 72px)",
//                 fontWeight: 800,
//                 lineHeight: 1.05,
//                 letterSpacing: "-0.02em",
//                 marginBottom: "20px",
//                 background: "linear-gradient(135deg, var(--text-primary) 40%, var(--text-secondary) 100%)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//               }}>
//                 Ask anything.<br/>See everything.
//               </h1>
//               <p style={{ fontSize: "16px", color: "var(--text-secondary)", fontWeight: 300, maxWidth: "420px", lineHeight: 1.7 }}>
//                 Transform your data into instant insights with conversational AI. No SQL. No setup. Just answers.
//               </p>
//             </div>

//             <PromptBox onSubmit={runQuery} />
//           </div>
//         )}

//         {/* Loading state */}
//         {loading && (
//           <div style={{
//             minHeight: "calc(100vh - 56px)",
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             justifyContent: "center",
//             gap: "24px",
//             animation: "fadeUp 0.4s ease both",
//           }}>
//             <div style={{ position: "relative", width: "64px", height: "64px" }}>
//               <div style={{
//                 position: "absolute", inset: 0,
//                 border: "1px solid rgba(99,218,255,0.15)",
//                 borderRadius: "50%",
//                 animation: "pulse-ring 2s ease infinite",
//               }}></div>
//               <div style={{
//                 position: "absolute", inset: "8px",
//                 border: "1px solid transparent",
//                 borderTopColor: "var(--accent-cyan)",
//                 borderRadius: "50%",
//                 animation: "spin-slow 1s linear infinite",
//               }}></div>
//               <div style={{
//                 position: "absolute", inset: "16px",
//                 border: "1px solid transparent",
//                 borderTopColor: "var(--accent-violet)",
//                 borderRadius: "50%",
//                 animation: "spin-slow 1.5s linear infinite reverse",
//               }}></div>
//               <div style={{
//                 position: "absolute",
//                 top: "50%", left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 width: "8px", height: "8px",
//                 borderRadius: "50%",
//                 background: "var(--accent-cyan)",
//                 boxShadow: "0 0 12px var(--accent-cyan)",
//               }}></div>
//             </div>
//             <div style={{ textAlign: "center" }}>
//               <p style={{ fontFamily: "var(--font-display)", fontSize: "14px", letterSpacing: "0.1em", color: "var(--text-secondary)" }}>GENERATING INSIGHTS</p>
//               <p style={{ fontSize: "12px", color: "var(--text-muted)", marginTop: "6px" }}>Analyzing your data...</p>
//             </div>
//           </div>
//         )}

//         {/* Result */}
//         {result && !result.error && !loading && (
//           <div style={{ padding: "32px 32px 80px", animation: "fadeUp 0.5s ease both" }}>
//             <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

//               {/* New query bar at top */}
//               <div style={{ marginBottom: "40px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px" }}>
//                 <div>
//                   <p style={{ fontFamily: "var(--font-display)", fontSize: "11px", letterSpacing: "0.12em", color: "var(--text-muted)", marginBottom: "6px" }}>DASHBOARD GENERATED</p>
//                   <h2 style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 700, color: "var(--text-primary)" }}>Results Overview</h2>
//                 </div>
//                 <button
//                   onClick={() => { setResult(null) }}
//                   style={{
//                     display: "flex", alignItems: "center", gap: "8px",
//                     padding: "10px 20px",
//                     background: "var(--bg-card)",
//                     border: "1px solid var(--border-subtle)",
//                     borderRadius: "10px",
//                     color: "var(--text-secondary)",
//                     fontSize: "13px",
//                     cursor: "pointer",
//                     fontFamily: "var(--font-body)",
//                     transition: "all 0.2s",
//                   }}
//                   onMouseOver={e => { e.currentTarget.style.borderColor = "var(--border-glow)"; e.currentTarget.style.color = "var(--accent-cyan)"; }}
//                   onMouseOut={e => { e.currentTarget.style.borderColor = "var(--border-subtle)"; e.currentTarget.style.color = "var(--text-secondary)"; }}
//                 >
//                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//                     <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                   New Query
//                 </button>
//               </div>

//               <DashboardGrid result={result} />
//             </div>
//           </div>
//         )}

//         {/* Error */}
//         {result?.error && !loading && (
//           <div style={{
//             minHeight: "calc(100vh - 56px)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             padding: "40px",
//           }}>
//             <div style={{
//               padding: "32px 40px",
//               background: "rgba(239,68,68,0.06)",
//               border: "1px solid rgba(239,68,68,0.15)",
//               borderRadius: "16px",
//               textAlign: "center",
//               maxWidth: "480px",
//             }}>
//               <div style={{ fontSize: "32px", marginBottom: "16px" }}>⚠</div>
//               <p style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 600, color: "#f87171", marginBottom: "8px" }}>Query Failed</p>
//               <p style={{ fontSize: "14px", color: "var(--text-secondary)" }}>{result.error}</p>
//               <button
//                 onClick={() => setResult(null)}
//                 style={{
//                   marginTop: "24px",
//                   padding: "10px 24px",
//                   background: "rgba(239,68,68,0.1)",
//                   border: "1px solid rgba(239,68,68,0.2)",
//                   borderRadius: "8px",
//                   color: "#f87171",
//                   fontSize: "13px",
//                   cursor: "pointer",
//                   fontFamily: "var(--font-body)",
//                 }}
//               >
//                 Try Again
//               </button>
//             </div>
//           </div>
//         )}

//       </main>
//     </div>
//   )
// }
"use client"

import axios from "axios"
import { useState } from "react"
import PromptBox from "../components/PromptBox"
import DashboardGrid from "../components/DashboardGrid"

export default function Page() {
  const [result, setResult] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [lastQuery, setLastQuery] = useState("")

  async function runQuery(query: string) {
    setLoading(true)
    setResult(null)
    setLastQuery(query)
    try {
      const res = await axios.post("http://localhost:8000/query", { query })
      setResult(res.data)
    } catch (error: any) {
      setResult({ error: error?.response?.data?.detail || "Failed to generate dashboard" })
    } finally {
      setLoading(false)
    }
  }

  const isHome = !result && !loading

  return (
    <div style={{ minHeight: "100vh", background: "#0a0608", position: "relative" }}>

      {/* Ambient background glows */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-10%", left: "20%", width: "600px", height: "600px", background: "radial-gradient(circle, rgba(225,50,90,0.06) 0%, transparent 65%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: "0", right: "10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(167,139,250,0.04) 0%, transparent 65%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "40%", left: "-5%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(45,212,191,0.03) 0%, transparent 65%)", borderRadius: "50%" }} />
      </div>

      {/* Header */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, height: "58px", zIndex: 100,
        background: "rgba(10,6,8,0.85)", backdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(225,50,90,0.12)",
        display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 28px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Logo mark */}
          <div style={{ position: "relative", width: "28px", height: "28px" }}>
            <div style={{ position: "absolute", inset: 0, border: "1.5px solid rgba(225,50,90,0.5)", borderRadius: "6px", transform: "rotate(45deg)" }} />
            <div style={{ position: "absolute", inset: "5px", background: "var(--rose-vivid)", borderRadius: "2px", transform: "rotate(45deg)" }} />
          </div>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "16px", letterSpacing: "0.18em", color: "#fdf0f3" }}>AXIOM</span>
          <div style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.1)" }} />
          <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.12em" }}>INTELLIGENCE</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {result && !result.error && (
            <button onClick={() => setResult(null)} style={{
              padding: "7px 16px", background: "rgba(225,50,90,0.1)", border: "1px solid rgba(225,50,90,0.25)",
              borderRadius: "8px", color: "var(--rose-bright)", fontSize: "12px", cursor: "pointer",
              fontFamily: "var(--font-body)", letterSpacing: "0.05em", transition: "all 0.2s",
            }}
              onMouseOver={e => { e.currentTarget.style.background = "rgba(225,50,90,0.18)"; e.currentTarget.style.borderColor = "rgba(225,50,90,0.4)"; }}
              onMouseOut={e => { e.currentTarget.style.background = "rgba(225,50,90,0.1)"; e.currentTarget.style.borderColor = "rgba(225,50,90,0.25)"; }}
            >
              + New Query
            </button>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e", animation: "blink 3s ease infinite" }} />
            <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.08em" }}>LIVE</span>
          </div>
        </div>
      </header>

      {/* Main */}
      <main style={{ paddingTop: "58px", position: "relative", zIndex: 1 }}>

        {/* Hero / Home */}
        {isHome && (
          <div style={{ minHeight: "calc(100vh - 58px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 24px", animation: "fadeUp 0.6s ease both" }}>

            {/* Decorative ring */}
            {/* <div style={{ position: "relative", marginBottom: "52px" }}>
              <div style={{ width: "120px", height: "120px", borderRadius: "50%", border: "1px solid rgba(225,50,90,0.15)", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "pulse-ring 4s ease infinite" }} />
              <div style={{ width: "80px", height: "80px", borderRadius: "50%", border: "1px solid rgba(225,50,90,0.25)", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "pulse-ring 4s ease infinite 0.5s" }} />
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "rgba(225,50,90,0.08)", border: "1px solid rgba(225,50,90,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M3 16l5-5 4 4 7-9" stroke="var(--rose-vivid)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div> */}

            {/* Badge */}
            {/* <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(225,50,90,0.08)", border: "1px solid rgba(225,50,90,0.2)", borderRadius: "100px", padding: "6px 16px", marginBottom: "28px" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--rose-vivid)", animation: "blink 2s ease infinite" }} />
              <span style={{ fontSize: "11px", color: "var(--rose-bright)", letterSpacing: "0.14em", fontFamily: "var(--font-display)" }}>AI-POWERED ANALYTICS</span>
            </div> */}

            <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(42px,6vw,76px)", fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.025em", textAlign: "center", marginBottom: "22px", maxWidth: "700px" }}>
              <span style={{ color: "#fdf0f3" }}>Ask anything.</span>
              <br />
              <span style={{ background: "linear-gradient(135deg, var(--rose-vivid), var(--rose-bright), var(--gold))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundSize: "200%", animation: "shimmer 4s linear infinite" }}>
                See everything.
              </span>
            </h1>

            <p style={{ fontSize: "16px", color: "var(--text-secondary)", fontWeight: 300, maxWidth: "420px", lineHeight: 1.8, textAlign: "center", marginBottom: "52px" }}>
              Transform raw data into stunning Power BI-grade dashboards with a single sentence.
            </p>

            <PromptBox onSubmit={runQuery} />
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div style={{ minHeight: "calc(100vh - 58px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "28px", animation: "fadeIn 0.3s ease both" }}>
            <div style={{ position: "relative", width: "72px", height: "72px" }}>
              <div style={{ position: "absolute", inset: 0, border: "1px solid rgba(225,50,90,0.1)", borderRadius: "50%", animation: "pulse-ring 2s ease infinite" }} />
              <div style={{ position: "absolute", inset: "8px", border: "1.5px solid transparent", borderTopColor: "var(--rose-vivid)", borderRadius: "50%", animation: "spin-slow 0.9s linear infinite" }} />
              <div style={{ position: "absolute", inset: "16px", border: "1.5px solid transparent", borderTopColor: "var(--gold)", borderRadius: "50%", animation: "spin-rev 1.3s linear infinite" }} />
              <div style={{ position: "absolute", inset: "24px", border: "1.5px solid transparent", borderTopColor: "var(--violet)", borderRadius: "50%", animation: "spin-slow 1.7s linear infinite" }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "8px", height: "8px", borderRadius: "50%", background: "var(--rose-vivid)", boxShadow: "0 0 16px var(--rose-vivid)" }} />
            </div>
            <div style={{ textAlign: "center" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "13px", letterSpacing: "0.15em", color: "var(--text-secondary)", marginBottom: "8px" }}>GENERATING DASHBOARD</p>
              <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>Analyzing · Visualizing · "{lastQuery}"</p>
            </div>
          </div>
        )}

        {/* Dashboard result */}
        {result && !result.error && !loading && (
          <div style={{ padding: "28px 28px 80px", animation: "fadeUp 0.5s ease both" }}>
            <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
              {/* Query echo */}
              <div style={{ marginBottom: "28px", display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "3px", height: "36px", background: "linear-gradient(180deg, var(--rose-vivid), var(--gold))", borderRadius: "2px" }} />
                <div>
                  <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em", marginBottom: "4px" }}>QUERY RESULT</p>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, color: "#fdf0f3" }}>"{lastQuery}"</p>
                </div>
              </div>
              <DashboardGrid result={result} />
            </div>
          </div>
        )}

        {/* Error */}
        {result?.error && !loading && (
          <div style={{ minHeight: "calc(100vh - 58px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px" }}>
            <div style={{ padding: "36px 44px", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)", borderRadius: "20px", textAlign: "center", maxWidth: "520px" }}>
              <div style={{ fontSize: "36px", marginBottom: "16px" }}>⚠</div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "16px", fontWeight: 600, color: "#f87171", marginBottom: "10px" }}>Query Failed</p>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", lineHeight: 1.7 }}>{result.error}</p>
              <button onClick={() => setResult(null)} style={{ marginTop: "24px", padding: "10px 28px", background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: "10px", color: "#f87171", fontSize: "13px", cursor: "pointer", fontFamily: "var(--font-body)" }}>
                Try Again
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}