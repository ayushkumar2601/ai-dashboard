export const metadata = {
  title: "Conversational BI Dashboard",
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
          background: "#0f172a",
          color: "white",
          fontFamily: "sans-serif",
          padding: "40px",
        }}
      >
        {children}
      </body>
    </html>
  )
}