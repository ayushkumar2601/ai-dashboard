// // // export const metadata = {
// // //   title: "AI Business Intelligence Dashboard",
// // //   description: "Conversational AI for instant business intelligence dashboards"
// // // }

// // // export default function RootLayout({
// // //   children,
// // // }: {
// // //   children: React.ReactNode
// // // }) {
// // //   return (
// // //     <html>
// // //       <body
// // //         style={{
// // //           margin: 0,
// // //           padding: 0,
// // //           fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
// // //           background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
// // //           minHeight: "100vh"
// // //         }}
// // //       >
// // //         <div style={{
// // //           background: "rgba(255, 255, 255, 0.95)",
// // //           minHeight: "100vh",
// // //           backdropFilter: "blur(10px)"
// // //         }}>
// // //           {children}
// // //         </div>
// // //       </body>
// // //     </html>
// // //   )
// // // }
// // export const metadata = {
// //   title: "AXIOM · AI Intelligence",
// //   description: "Conversational AI for instant business intelligence dashboards"
// // }

// // export default function RootLayout({
// //   children,
// // }: {
// //   children: React.ReactNode
// // }) {
// //   return (
// //     <html lang="en">
// //       <head>
// //         <link rel="preconnect" href="https://fonts.googleapis.com" />
// //         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
// //         <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap" rel="stylesheet" />
// //         <style>{`
// //           *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

// //           :root {
// //             --bg-void: #050508;
// //             --bg-surface: #0c0c14;
// //             --bg-card: #111118;
// //             --bg-card-hover: #161621;
// //             --border-subtle: rgba(255,255,255,0.06);
// //             --border-glow: rgba(99,218,255,0.2);
// //             --accent-cyan: #63daff;
// //             --accent-gold: #f0c060;
// //             --accent-violet: #9b6fff;
// //             --text-primary: #f0f0f8;
// //             --text-secondary: #8888aa;
// //             --text-muted: #44445a;
// //             --font-display: 'Syne', sans-serif;
// //             --font-body: 'DM Sans', sans-serif;
// //             --glow-cyan: 0 0 40px rgba(99,218,255,0.08);
// //             --glow-gold: 0 0 40px rgba(240,192,96,0.08);
// //           }

// //           html, body { height: 100%; }

// //           body {
// //             background-color: var(--bg-void);
// //             color: var(--text-primary);
// //             font-family: var(--font-body);
// //             font-weight: 300;
// //             -webkit-font-smoothing: antialiased;
// //             overflow-x: hidden;
// //           }

// //           /* Noise texture overlay */
// //           body::before {
// //             content: '';
// //             position: fixed;
// //             inset: 0;
// //             background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
// //             pointer-events: none;
// //             z-index: 1000;
// //             opacity: 0.4;
// //           }

// //           /* Ambient glow orbs */
// //           body::after {
// //             content: '';
// //             position: fixed;
// //             top: -20%;
// //             left: 50%;
// //             transform: translateX(-50%);
// //             width: 800px;
// //             height: 400px;
// //             background: radial-gradient(ellipse, rgba(99,218,255,0.04) 0%, transparent 70%);
// //             pointer-events: none;
// //             z-index: 0;
// //           }

// //           ::-webkit-scrollbar { width: 4px; }
// //           ::-webkit-scrollbar-track { background: var(--bg-void); }
// //           ::-webkit-scrollbar-thumb { background: var(--text-muted); border-radius: 2px; }

// //           @keyframes fadeUp {
// //             from { opacity: 0; transform: translateY(16px); }
// //             to { opacity: 1; transform: translateY(0); }
// //           }
// //           @keyframes shimmer {
// //             0% { background-position: -200% center; }
// //             100% { background-position: 200% center; }
// //           }
// //           @keyframes pulse-ring {
// //             0%, 100% { opacity: 0.4; transform: scale(1); }
// //             50% { opacity: 0.8; transform: scale(1.02); }
// //           }
// //           @keyframes spin-slow {
// //             from { transform: rotate(0deg); }
// //             to { transform: rotate(360deg); }
// //           }
// //           @keyframes blink {
// //             0%, 100% { opacity: 1; }
// //             50% { opacity: 0; }
// //           }
// //         `}</style>
// //       </head>
// //       <body>
// //         {children}
// //       </body>
// //     </html>
// //   )
// // }
// import type { Metadata } from "next"
// import "./global.css"

// export const metadata: Metadata = {
//   title: "AXIOM · AI Intelligence",
//   description: "Conversational AI for instant business intelligence dashboards",
// }

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <head>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//       </head>
//       <body>{children}</body>
//     </html>
//   )
// }
import type { Metadata } from "next"
import "./global.css"

export const metadata: Metadata = {
  title: "AXIOM · AI Intelligence",
  description: "Conversational AI for instant business intelligence dashboards",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ background: "#0a0608" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap" rel="stylesheet" />
      </head>
      <body style={{ background: "#0a0608", color: "#fdf0f3", margin: 0 }}>
        {children}
      </body>
    </html>
  )
}