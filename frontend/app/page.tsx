"use client"

import axios from "axios"
import { useState } from "react"
import PromptBox from "../components/PromptBox"
import DashboardGrid from "../components/DashboardGrid"

// ── Quick Answer summary card ─────────────────────────────────────────
function QuickAnswer({ query, insights }: { query: string; insights: string }) {
  const [expanded, setExpanded] = useState(false)

  const getSummary = (raw: string): string => {
    if (!raw) return ""
    const cleaned = raw.replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1").trim()
    const sentences = cleaned
      .split(/(?<=[.!?])\s+/)
      .map(s => s.replace(/^[-•·*\d.]+\s*/, "").trim())
      .filter(s => s.length > 20)
    const scored = sentences.map(s => ({
      text: s,
      score: (s.match(/\d/g)?.length || 0) * 2 + (s.length > 60 ? 1 : 0),
    }))
    scored.sort((a, b) => b.score - a.score)
    return scored.slice(0, 3).map(s => s.text).join(" ")
  }

  const summary = getSummary(insights)
  if (!summary) return null

  const words = summary.split(" ")
  const shortSummary = words.slice(0, 32).join(" ") + (words.length > 32 ? "…" : "")
  const displayText = expanded ? summary : shortSummary

  return (
    <div style={{
      marginBottom: "20px",
      padding: "18px 22px",
      background: "rgba(255,255,255,0.04)",
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.09)",
      borderRadius: "16px",
      display: "flex",
      alignItems: "flex-start",
      gap: "14px",
      animation: "fadeUp 0.4s ease 0.1s both",
      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
      position: "relative",
      overflow: "hidden",
    }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: "linear-gradient(180deg, #ff6b9d, #c084fc, #22d3ee)", borderRadius: "3px 0 0 3px" }} />
      <div style={{ flexShrink: 0, width: "34px", height: "34px", borderRadius: "10px", background: "rgba(255,107,157,0.12)", border: "1px solid rgba(255,107,157,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginLeft: "6px" }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="6" stroke="#ff6b9d" strokeWidth="1.3"/>
          <path d="M5.5 8h5M8 5.5v5" stroke="#ff6b9d" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{ fontSize: "10px", color: "rgba(255,107,157,0.8)", letterSpacing: "0.14em", fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: "6px" }}>
          AI SUMMARY
        </p>
        <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.82)", lineHeight: 1.7, fontWeight: 300, fontFamily: "var(--font-body)", margin: 0 }}>
          {displayText}
        </p>
        {words.length > 32 && (
          <button onClick={() => setExpanded(v => !v)} style={{ marginTop: "8px", background: "none", border: "none", color: "rgba(255,107,157,0.7)", fontSize: "12px", cursor: "pointer", fontFamily: "var(--font-body)", fontWeight: 500, padding: 0, letterSpacing: "0.04em" }}>
            {expanded ? "Show less ↑" : "Read more ↓"}
          </button>
        )}
      </div>
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────
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
              onMouseOver={e => { e.currentTarget.style.background = "rgba(225,50,90,0.18)"; e.currentTarget.style.borderColor = "rgba(225,50,90,0.4)" }}
              onMouseOut={e => { e.currentTarget.style.background = "rgba(225,50,90,0.1)"; e.currentTarget.style.borderColor = "rgba(225,50,90,0.25)" }}
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

        {/* Hero */}
        {!result && !loading && (
          <div style={{ minHeight: "calc(100vh - 58px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "60px 24px", animation: "fadeUp 0.6s ease both" }}>
            <div style={{ position: "relative", marginBottom: "52px" }}>
              <div style={{ width: "120px", height: "120px", borderRadius: "50%", border: "1px solid rgba(225,50,90,0.15)", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "pulse-ring 4s ease infinite" }} />
              <div style={{ width: "80px", height: "80px", borderRadius: "50%", border: "1px solid rgba(225,50,90,0.25)", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "pulse-ring 4s ease infinite 0.5s" }} />
              <div style={{ width: "52px", height: "52px", borderRadius: "50%", background: "rgba(225,50,90,0.08)", border: "1px solid rgba(225,50,90,0.35)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M3 16l5-5 4 4 7-9" stroke="var(--rose-vivid)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "rgba(225,50,90,0.08)", border: "1px solid rgba(225,50,90,0.2)", borderRadius: "100px", padding: "6px 16px", marginBottom: "28px" }}>
              <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "var(--rose-vivid)", animation: "blink 2s ease infinite" }} />
              <span style={{ fontSize: "11px", color: "var(--rose-bright)", letterSpacing: "0.14em", fontFamily: "var(--font-display)" }}>AI-POWERED ANALYTICS</span>
            </div>
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
              <div style={{ marginBottom: "20px", display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "3px", height: "36px", background: "linear-gradient(180deg, var(--rose-vivid), var(--gold))", borderRadius: "2px" }} />
                <div>
                  <p style={{ fontSize: "11px", color: "var(--text-muted)", letterSpacing: "0.1em", marginBottom: "4px" }}>QUERY RESULT</p>
                  <p style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 700, color: "#fdf0f3" }}>"{lastQuery}"</p>
                </div>
              </div>

              {/* Quick answer */}
              <QuickAnswer query={lastQuery} insights={result.insights} />

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