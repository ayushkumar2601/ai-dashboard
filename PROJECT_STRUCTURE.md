# AI Business Intelligence Dashboard - Project Structure

```
ai-business-intelligence-dashboard/
│
├── README.md                          # Project overview and setup instructions
├── PROJECT_STRUCTURE.md               # This file - complete folder structure
├── .gitignore                         # Git ignore patterns
│
├── backend/                           # Python FastAPI Backend
│   ├── .env                          # Environment variables (API keys)
│   ├── requirements.txt              # Python dependencies
│   ├── main.py                       # FastAPI application entry point
│   ├── load_data.py                  # Data loading script for SQLite
│   ├── sales.db                      # SQLite database file
│   │
│   ├── database/                     # Database layer
│   │   ├── __init__.py
│   │   ├── db.py                     # Database connection and query execution
│   │   └── __pycache__/              # Python cache files
│   │
│   ├── llm/                          # AI/LLM integration layer
│   │   ├── __init__.py
│   │   ├── gemini_client.py          # Google Gemini API client
│   │   ├── sql_generator.py          # Natural language to SQL conversion
│   │   ├── chart_selector.py         # Chart type selection logic
│   │   ├── dashboard_generator.py    # Multi-chart dashboard generation
│   │   └── __pycache__/              # Python cache files
│   │
│   ├── prompts/                      # AI prompt templates
│   │   ├── system_prompt.txt         # Main system prompt for SQL generation
│   │   └── schema.txt                # Database schema documentation
│   │
│   └── __pycache__/                  # Python cache files
│
├── frontend/                         # Next.js React Frontend
│   ├── package.json                  # Node.js dependencies and scripts
│   ├── package-lock.json             # Dependency lock file
│   ├── next.config.js                # Next.js configuration
│   ├── tsconfig.json                 # TypeScript configuration
│   ├── next-env.d.ts                 # Next.js TypeScript declarations
│   │
│   ├── app/                          # Next.js App Router
│   │   ├── layout.tsx                # Root layout component
│   │   ├── page.tsx                  # Main dashboard page
│   │   └── global.css                # Global styles
│   │
│   ├── components/                   # React components
│   │   ├── PromptBox.tsx             # User input component with examples
│   │   ├── DashboardGrid.tsx         # Multi-chart layout component
│   │   └── ChartRenderer.tsx         # Chart visualization component
│   │
│   ├── .next/                        # Next.js build output (auto-generated)
│   │   ├── cache/
│   │   ├── server/
│   │   ├── static/
│   │   └── types/
│   │
│   └── node_modules/                 # Node.js dependencies (auto-generated)
│       ├── axios/
│       ├── next/
│       ├── react/
│       ├── recharts/
│       └── [other dependencies]/
│
└── data/                             # Raw data files
    └── amazon_sales.csv              # Sample e-commerce dataset
```

## 📁 Directory Descriptions

### Root Level
- **README.md**: Project documentation, setup instructions, and feature overview
- **PROJECT_STRUCTURE.md**: Complete folder structure documentation
- **.gitignore**: Specifies files and folders to ignore in version control

### Backend (`/backend/`)
**Core Files:**
- **main.py**: FastAPI application with CORS, API endpoints, and error handling
- **requirements.txt**: Python dependencies (fastapi, uvicorn, pandas, google-generativeai)
- **load_data.py**: Script to load CSV data into SQLite database
- **.env**: Environment variables including Gemini API key
- **sales.db**: SQLite database containing the sales data

**Database Layer (`/backend/database/`):**
- **db.py**: Database connection management and SQL query execution functions

**AI/LLM Layer (`/backend/llm/`):**
- **gemini_client.py**: Google Gemini API integration and configuration
- **sql_generator.py**: Converts natural language queries to SQL using AI
- **chart_selector.py**: Intelligent chart type selection based on data characteristics
- **dashboard_generator.py**: Multi-chart dashboard generation with contextual analysis

**Prompts (`/backend/prompts/`):**
- **system_prompt.txt**: Carefully crafted prompt for SQL generation with rules and examples
- **schema.txt**: Database schema documentation for AI context

### Frontend (`/frontend/`)
**Configuration Files:**
- **package.json**: Node.js dependencies and npm scripts
- **next.config.js**: Next.js framework configuration
- **tsconfig.json**: TypeScript compiler configuration
- **next-env.d.ts**: Next.js TypeScript type definitions

**App Router (`/frontend/app/`):**
- **layout.tsx**: Root layout with global styling and metadata
- **page.tsx**: Main dashboard page with state management and API integration
- **global.css**: Global CSS styles and design system

**Components (`/frontend/components/`):**
- **PromptBox.tsx**: Input component with dynamic example suggestions and styling
- **DashboardGrid.tsx**: Responsive layout for multi-chart dashboard display
- **ChartRenderer.tsx**: Configurable chart component with consistent styling

### Data (`/data/`)
- **amazon_sales.csv**: Sample e-commerce dataset with sales, product, and customer data

## 🔧 Key File Relationships

### Data Flow Architecture
```
data/amazon_sales.csv 
    ↓ (loaded by)
backend/load_data.py 
    ↓ (creates)
backend/sales.db 
    ↓ (queried by)
backend/database/db.py 
    ↓ (used by)
backend/llm/dashboard_generator.py 
    ↓ (serves)
backend/main.py 
    ↓ (API calls)
frontend/app/page.tsx 
    ↓ (renders)
frontend/components/DashboardGrid.tsx
```

### Component Dependencies
```
frontend/app/page.tsx
├── imports: PromptBox, DashboardGrid
├── manages: API calls, loading states, error handling
└── state: result data, loading status

frontend/components/DashboardGrid.tsx
├── imports: ChartRenderer
├── renders: insights panel, primary chart, additional charts
└── props: dashboard result data

frontend/components/ChartRenderer.tsx
├── imports: recharts components
├── renders: bar charts, line charts, data tables
└── props: chart type, data, columns, size
```

### Backend Module Structure
```
backend/main.py
├── imports: dashboard_generator
├── endpoints: /query, /examples, /
└── middleware: CORS, error handling

backend/llm/dashboard_generator.py
├── imports: sql_generator, chart_selector, gemini_client, db
├── functions: generate_dashboard, generate_insights
└── logic: multi-chart generation, contextual analysis

backend/llm/sql_generator.py
├── imports: gemini_client
├── uses: prompts/system_prompt.txt
└── function: generate_sql
```

## 🚀 Development Workflow

### Backend Development
1. Modify Python files in `/backend/`
2. Test API endpoints at `http://localhost:8000/docs`
3. Database changes require running `load_data.py`
4. AI prompt modifications in `/backend/prompts/`

### Frontend Development
1. Modify React components in `/frontend/components/`
2. Update pages in `/frontend/app/`
3. Test at `http://localhost:3000`
4. TypeScript ensures type safety across components

### Full Stack Integration
1. Backend serves API at port 8000
2. Frontend consumes API at port 3000
3. CORS configured for cross-origin requests
4. Error handling at both API and UI levels

This structure provides clear separation of concerns, scalable architecture, and maintainable codebase for the AI Business Intelligence Dashboard.