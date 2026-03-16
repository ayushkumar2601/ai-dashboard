// // "use client"

// // import { useState, useEffect } from "react"
// // import axios from "axios"

// // interface PromptBoxProps {
// //   onSubmit: (query: string) => void
// // }

// // export default function PromptBox({ onSubmit }: PromptBoxProps) {

// //   const [query, setQuery] = useState("")
// //   const [examples, setExamples] = useState([
// //     "Show revenue by region",
// //     "Top 5 product categories by revenue", 
// //     "Monthly revenue trend",
// //     "Average rating by product category"
// //   ])

// //   useEffect(() => {
// //     // Fetch dynamic examples from backend
// //     const fetchExamples = async () => {
// //       try {
// //         const response = await axios.get("http://localhost:8000/examples")
// //         setExamples(response.data.examples.slice(0, 5)) // Limit to 5 examples
// //       } catch (error) {
// //         // Keep default examples if fetch fails
// //         console.log("Using default examples")
// //       }
// //     }
    
// //     fetchExamples()
// //   }, [])

// //   const handleSubmit = () => {
// //     if (query.trim()) {
// //       onSubmit(query)
// //       setQuery("")
// //     }
// //   }

// //   const handleKeyPress = (e: React.KeyboardEvent) => {
// //     if (e.key === 'Enter') {
// //       handleSubmit()
// //     }
// //   }

// //   return (
// //     <div style={{ marginBottom: "30px" }}>
      
// //       {/* Input Section */}
// //       <div style={{ 
// //         display: "flex", 
// //         gap: "12px", 
// //         marginBottom: "20px",
// //         alignItems: "center"
// //       }}>
        
// //         <input
// //           style={{
// //             padding: "16px 20px",
// //             width: "500px",
// //             borderRadius: "12px",
// //             border: "2px solid #e2e8f0",
// //             fontSize: "16px",
// //             outline: "none",
// //             transition: "border-color 0.2s",
// //             background: "white"
// //           }}
// //           placeholder="Ask your data anything..."
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           onKeyPress={handleKeyPress}
// //           onFocus={(e) => e.target.style.borderColor = "#6366f1"}
// //           onBlur={(e) => e.target.style.borderColor = "#e2e8f0"}
// //         />

// //         <button
// //           style={{
// //             padding: "16px 24px",
// //             background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
// //             borderRadius: "12px",
// //             border: "none",
// //             color: "white",
// //             fontSize: "16px",
// //             fontWeight: "600",
// //             cursor: "pointer",
// //             transition: "transform 0.2s",
// //             boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
// //           }}
// //           onClick={handleSubmit}
// //           onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-1px)"}
// //           onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
// //         >
// //           Generate Dashboard
// //         </button>

// //       </div>

// //       {/* Example Queries */}
// //       <div>
// //         <p style={{ 
// //           fontSize: "14px", 
// //           color: "#6b7280", 
// //           marginBottom: "12px",
// //           fontWeight: "500"
// //         }}>
// //           💡 Try these examples:
// //         </p>
        
// //         <div style={{ 
// //           display: "flex", 
// //           flexWrap: "wrap", 
// //           gap: "8px" 
// //         }}>
// //           {examples.map((example, index) => (
// //             <button
// //               key={index}
// //               style={{
// //                 padding: "8px 16px",
// //                 background: "#f8fafc",
// //                 border: "1px solid #e2e8f0",
// //                 borderRadius: "20px",
// //                 fontSize: "13px",
// //                 color: "#475569",
// //                 cursor: "pointer",
// //                 transition: "all 0.2s",
// //                 fontWeight: "500"
// //               }}
// //               onClick={() => setQuery(example)}
// //               onMouseOver={(e) => {
// //                 e.currentTarget.style.background = "#6366f1"
// //                 e.currentTarget.style.color = "white"
// //                 e.currentTarget.style.borderColor = "#6366f1"
// //               }}
// //               onMouseOut={(e) => {
// //                 e.currentTarget.style.background = "#f8fafc"
// //                 e.currentTarget.style.color = "#475569"
// //                 e.currentTarget.style.borderColor = "#e2e8f0"
// //               }}
// //             >
// //               {example}
// //             </button>
// //           ))}
// //         </div>
// //       </div>

// //     </div>
// //   )
// // }
// "use client"

// import { useState, useEffect, useRef } from "react"
// import axios from "axios"

// interface PromptBoxProps {
//   onSubmit: (query: string) => void
// }

// const DEFAULT_EXAMPLES = [
//   "Show revenue by region",
//   "Top 5 products by revenue",
//   "Monthly revenue trend",
//   "Avg rating by category",
//   "Sales vs target comparison",
// ]

// export default function PromptBox({ onSubmit }: PromptBoxProps) {
//   const [query, setQuery] = useState("")
//   const [examples, setExamples] = useState(DEFAULT_EXAMPLES)
//   const [focused, setFocused] = useState(false)
//   const inputRef = useRef<HTMLInputElement>(null)

//   useEffect(() => {
//     const fetchExamples = async () => {
//       try {
//         const response = await axios.get("http://localhost:8000/examples")
//         setExamples(response.data.examples.slice(0, 5))
//       } catch {}
//     }
//     fetchExamples()
//   }, [])

//   const handleSubmit = () => {
//     if (query.trim()) {
//       onSubmit(query.trim())
//       setQuery("")
//     }
//   }

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") handleSubmit()
//   }

//   return (
//     <div style={{ width: "100%", maxWidth: "680px" }}>

//       {/* Main input */}
//       <div style={{
//         position: "relative",
//         borderRadius: "16px",
//         background: "var(--bg-card)",
//         border: `1px solid ${focused ? "rgba(99,218,255,0.3)" : "var(--border-subtle)"}`,
//         boxShadow: focused
//           ? "0 0 0 3px rgba(99,218,255,0.06), 0 20px 60px rgba(0,0,0,0.4)"
//           : "0 20px 60px rgba(0,0,0,0.3)",
//         transition: "border-color 0.25s, box-shadow 0.25s",
//         overflow: "hidden",
//       }}>
//         {/* Glow line at top */}
//         <div style={{
//           position: "absolute",
//           top: 0, left: "20%", right: "20%",
//           height: "1px",
//           background: "linear-gradient(90deg, transparent, rgba(99,218,255,0.4), transparent)",
//           opacity: focused ? 1 : 0,
//           transition: "opacity 0.3s",
//         }} />

//         <div style={{ display: "flex", alignItems: "center", padding: "6px 6px 6px 20px" }}>

//           {/* Search icon */}
//           <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginRight: "12px", color: focused ? "var(--accent-cyan)" : "var(--text-muted)", transition: "color 0.2s" }}>
//             <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.3"/>
//             <path d="M10 10l3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
//           </svg>

//           <input
//             ref={inputRef}
//             style={{
//               flex: 1,
//               background: "transparent",
//               border: "none",
//               outline: "none",
//               fontSize: "15px",
//               color: "var(--text-primary)",
//               fontFamily: "var(--font-body)",
//               fontWeight: 300,
//               letterSpacing: "0.01em",
//               caretColor: "var(--accent-cyan)",
//             }}
//             placeholder="Ask your data anything..."
//             value={query}
//             onChange={e => setQuery(e.target.value)}
//             onKeyDown={handleKeyDown}
//             onFocus={() => setFocused(true)}
//             onBlur={() => setFocused(false)}
//           />

//           <button
//             onClick={handleSubmit}
//             disabled={!query.trim()}
//             style={{
//               flexShrink: 0,
//               width: "40px",
//               height: "40px",
//               borderRadius: "10px",
//               background: query.trim()
//                 ? "linear-gradient(135deg, rgba(99,218,255,0.15), rgba(155,111,255,0.15))"
//                 : "transparent",
//               border: `1px solid ${query.trim() ? "rgba(99,218,255,0.25)" : "var(--border-subtle)"}`,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               cursor: query.trim() ? "pointer" : "default",
//               transition: "all 0.2s",
//             }}
//             onMouseOver={e => { if (query.trim()) { e.currentTarget.style.background = "linear-gradient(135deg, rgba(99,218,255,0.25), rgba(155,111,255,0.25))"; e.currentTarget.style.borderColor = "rgba(99,218,255,0.4)"; }}}
//             onMouseOut={e => { if (query.trim()) { e.currentTarget.style.background = "linear-gradient(135deg, rgba(99,218,255,0.15), rgba(155,111,255,0.15))"; e.currentTarget.style.borderColor = "rgba(99,218,255,0.25)"; }}}
//           >
//             <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
//               <path d="M7 12V2M2 7l5-5 5 5" stroke={query.trim() ? "var(--accent-cyan)" : "var(--text-muted)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//           </button>
//         </div>

//         {/* Character counter hint */}
//         <div style={{
//           padding: "0 20px 10px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}>
//           <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
//             {query.trim() ? "Press Enter to generate" : "Natural language · No SQL required"}
//           </span>
//           {query.length > 0 && (
//             <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>{query.length}</span>
//           )}
//         </div>
//       </div>

//       {/* Example pills */}
//       <div style={{ marginTop: "24px" }}>
//         <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em", marginBottom: "12px", textAlign: "center" }}>
//           SUGGESTED QUERIES
//         </p>
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
//           {examples.map((ex, i) => (
//             <ExamplePill key={i} label={ex} onClick={() => { setQuery(ex); inputRef.current?.focus(); }} />
//           ))}
//         </div>
//       </div>

//     </div>
//   )
// }

// function ExamplePill({ label, onClick }: { label: string; onClick: () => void }) {
//   const [hovered, setHovered] = useState(false)
//   return (
//     <button
//       onClick={onClick}
//       onMouseOver={() => setHovered(true)}
//       onMouseOut={() => setHovered(false)}
//       style={{
//         padding: "7px 14px",
//         background: hovered ? "rgba(99,218,255,0.07)" : "rgba(255,255,255,0.03)",
//         border: `1px solid ${hovered ? "rgba(99,218,255,0.2)" : "var(--border-subtle)"}`,
//         borderRadius: "100px",
//         fontSize: "12px",
//         color: hovered ? "var(--accent-cyan)" : "var(--text-secondary)",
//         cursor: "pointer",
//         fontFamily: "var(--font-body)",
//         fontWeight: 400,
//         letterSpacing: "0.01em",
//         transition: "all 0.18s",
//       }}
//     >
//       {label}
//     </button>
//   )
// }
"use client"

import { useState, useEffect, useRef } from "react"
import axios from "axios"

interface PromptBoxProps {
  onSubmit: (query: string) => void
}

const DEFAULT_EXAMPLES = [
  "Show revenue by region",
  "Top 5 products by revenue",
  "Monthly revenue trend",
  "Avg rating by category",
  "Sales vs target comparison",
  "Payment method distribution",
]

export default function PromptBox({ onSubmit }: PromptBoxProps) {
  const [query, setQuery] = useState("")
  const [examples, setExamples] = useState(DEFAULT_EXAMPLES)
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    axios.get("http://localhost:8000/examples")
      .then(r => setExamples(r.data.examples.slice(0, 6)))
      .catch(() => {})
  }, [])

  const handleSubmit = () => { if (query.trim()) { onSubmit(query.trim()); setQuery("") } }
  const handleKeyDown = (e: React.KeyboardEvent) => { if (e.key === "Enter") handleSubmit() }

  return (
    <div style={{ width: "100%", maxWidth: "700px" }}>

      {/* Input card */}
      <div style={{
        position: "relative", borderRadius: "18px",
        background: "linear-gradient(135deg, #1a0d12, #150a0e)",
        border: `1px solid ${focused ? "rgba(225,50,90,0.45)" : "rgba(225,50,90,0.15)"}`,
        boxShadow: focused
          ? "0 0 0 3px rgba(225,50,90,0.08), 0 24px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)"
          : "0 24px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)",
        transition: "all 0.25s",
        overflow: "hidden",
      }}>

        {/* Top glow line */}
        <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: "1px", background: "linear-gradient(90deg, transparent, rgba(225,50,90,0.6), rgba(240,192,96,0.4), transparent)", opacity: focused ? 1 : 0.3, transition: "opacity 0.3s" }} />

        <div style={{ display: "flex", alignItems: "center", padding: "8px 8px 8px 22px", gap: "12px" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, color: focused ? "var(--rose-bright)" : "var(--text-muted)", transition: "color 0.2s" }}>
            <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M10 10l3.5 3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>

          <input
            ref={inputRef}
            style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: "15px", color: "#fdf0f3", fontFamily: "var(--font-body)", fontWeight: 300, letterSpacing: "0.01em", caretColor: "var(--rose-bright)" }}
            placeholder="Ask your data anything..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
          />

          <button
            onClick={handleSubmit}
            disabled={!query.trim()}
            style={{
              flexShrink: 0, width: "42px", height: "42px", borderRadius: "12px",
              background: query.trim() ? "linear-gradient(135deg, var(--rose-vivid), #c01040)" : "rgba(255,255,255,0.04)",
              border: `1px solid ${query.trim() ? "transparent" : "rgba(255,255,255,0.08)"}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: query.trim() ? "pointer" : "default",
              boxShadow: query.trim() ? "0 4px 20px rgba(225,50,90,0.4)" : "none",
              transition: "all 0.2s",
            }}
            onMouseOver={e => { if (query.trim()) e.currentTarget.style.transform = "translateY(-1px)" }}
            onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 12V2M2 7l5-5 5 5" stroke={query.trim() ? "white" : "var(--text-muted)"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div style={{ padding: "0 22px 12px", display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.04em" }}>
            {query.trim() ? "↵ Press Enter to generate" : "Natural language · No SQL required"}
          </span>
          {query.length > 0 && <span style={{ fontSize: "11px", color: "var(--text-muted)" }}>{query.length}</span>}
        </div>
      </div>

      {/* Example pills */}
      <div style={{ marginTop: "28px", textAlign: "center" }}>
        <p style={{ fontSize: "10px", color: "var(--text-muted)", letterSpacing: "0.14em", marginBottom: "14px", fontFamily: "var(--font-display)" }}>SUGGESTED QUERIES</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
          {examples.map((ex, i) => <Pill key={i} label={ex} onClick={() => { setQuery(ex); inputRef.current?.focus() }} />)}
        </div>
      </div>
    </div>
  )
}

function Pill({ label, onClick }: { label: string; onClick: () => void }) {
  const [h, setH] = useState(false)
  return (
    <button
      onClick={onClick}
      onMouseOver={() => setH(true)}
      onMouseOut={() => setH(false)}
      style={{
        padding: "7px 15px",
        background: h ? "rgba(225,50,90,0.1)" : "rgba(255,255,255,0.03)",
        border: `1px solid ${h ? "rgba(225,50,90,0.3)" : "rgba(255,255,255,0.07)"}`,
        borderRadius: "100px", fontSize: "12px",
        color: h ? "var(--rose-bright)" : "var(--text-secondary)",
        cursor: "pointer", fontFamily: "var(--font-body)",
        transition: "all 0.18s", letterSpacing: "0.01em",
      }}
    >{label}</button>
  )
}