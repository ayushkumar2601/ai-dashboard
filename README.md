# AI Business Intelligence Dashboard

A conversational AI-powered business intelligence dashboard that transforms natural language queries into comprehensive data visualizations and insights.

## ✨ New Features

### 🎯 Multi-Chart Dashboards
- **Primary Chart**: Main visualization based on your query
- **Contextual Charts**: 2 additional relevant charts automatically generated
- **Smart Context**: Additional charts adapt based on your query focus (revenue, region, products, etc.)

### 🤖 AI-Generated Insights
- **Business Intelligence**: AI analyzes your data and provides 2-3 key actionable insights
- **Pattern Recognition**: Identifies trends, opportunities, and notable findings
- **Contextual Analysis**: Insights tailored to your specific query and data

### 🎨 Enhanced UI/UX
- **Premium Design**: Modern gradient backgrounds and clean card layouts
- **Loading States**: Smooth loading experience with progress indicators
- **Responsive Charts**: Charts adapt to different screen sizes
- **Consistent Colors**: Professional color palette across all visualizations

### 💡 Smart Query Suggestions
- **Dynamic Examples**: Example queries fetched from backend
- **One-Click Input**: Click any example to populate the input field
- **Contextual Suggestions**: Examples cover different analysis types

### 🔧 Technical Improvements
- **Better Error Handling**: Graceful error states with user-friendly messages
- **Type Safety**: Full TypeScript support across frontend components
- **Modular Architecture**: Clean separation of concerns in backend

## 🚀 Quick Start

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## 📊 Example Queries

Try these natural language queries:
- "Show revenue by region"
- "Top 5 product categories by revenue"
- "Monthly revenue trend for 2023"
- "Average rating by product category"
- "Payment method distribution"

## 🏗️ Architecture

```
User Query → FastAPI → Gemini LLM → Multi-Chart Generation → Dashboard UI
                   ↓
            AI Insights Generation
```

## 🎯 Key Components

- **Dashboard Generator**: Creates multi-chart dashboards with contextual relevance
- **Chart Renderer**: Responsive charts with consistent styling
- **Insight Engine**: AI-powered business intelligence analysis
- **Smart UI**: Modern interface with loading states and examples

## 🔮 Future Enhancements

- CSV upload support for custom datasets
- More chart types (pie, scatter, heatmap)
- Export functionality (PDF, PNG)
- Real-time data connections
- Advanced filtering and drill-down capabilities

---

Transform your data into actionable insights with natural language! 🚀