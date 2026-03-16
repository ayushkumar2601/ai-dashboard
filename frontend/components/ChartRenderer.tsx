"use client"

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer
} from "recharts"

interface ChartRendererProps {
  type: string
  data: any[]
  columns: string[]
  size?: "normal" | "small"
}

const COLORS = {
  primary: "#6366f1",
  secondary: "#8b5cf6", 
  accent: "#06b6d4",
  success: "#10b981",
  warning: "#f59e0b"
}

export default function ChartRenderer({ type, data, columns, size = "normal" }: ChartRendererProps) {

  const width = size === "small" ? 450 : 600
  const height = size === "small" ? 250 : 350

  if (type === "bar") {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0"/>
          <XAxis 
            dataKey={columns[0]}
            tick={{ fontSize: 12, fill: "#64748b" }}
            axisLine={{ stroke: "#e2e8f0" }}
          />
          <YAxis 
            tick={{ fontSize: 12, fill: "#64748b" }}
            axisLine={{ stroke: "#e2e8f0" }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
            }}
          />
          <Bar 
            dataKey={columns[1]} 
            fill={COLORS.primary}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    )
  }

  if (type === "line") {
    return (
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0"/>
          <XAxis 
            dataKey={columns[0]}
            tick={{ fontSize: 12, fill: "#64748b" }}
            axisLine={{ stroke: "#e2e8f0" }}
          />
          <YAxis 
            tick={{ fontSize: 12, fill: "#64748b" }}
            axisLine={{ stroke: "#e2e8f0" }}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: "white",
              border: "1px solid #e2e8f0",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
            }}
          />
          <Line 
            type="monotone" 
            dataKey={columns[1]} 
            stroke={COLORS.primary}
            strokeWidth={3}
            dot={{ fill: COLORS.primary, strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    )
  }

  return (
    <div style={{
      background: "#f8fafc",
      padding: "20px",
      borderRadius: "8px",
      border: "1px solid #e2e8f0"
    }}>
      <pre style={{ 
        fontSize: "12px",
        color: "#374151",
        margin: 0,
        overflow: "auto"
      }}>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}