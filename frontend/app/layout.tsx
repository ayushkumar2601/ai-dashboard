export const metadata = {
  title: "AI Business Intelligence Dashboard",
  description: "Conversational AI for instant business intelligence dashboards"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          minHeight: "100vh"
        }}
      >
        <div style={{
          background: "rgba(255, 255, 255, 0.95)",
          minHeight: "100vh",
          backdropFilter: "blur(10px)"
        }}>
          {children}
        </div>
      </body>
    </html>
  )
}