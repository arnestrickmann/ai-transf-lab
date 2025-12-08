
<img width="750" height="206" alt="Screenshot 2025-12-07 at 18 14 55" src="https://github.com/user-attachments/assets/54335617-2620-4219-8c1c-cf46ab9b1647" />

# Currency Normalizer (TypeScript + Tailwind)
_A lightweight FX demo for agentic coding workflows_

What this app does: the backend reads mock FX rates from `data/sample_fx.json`, normalizes them, and serves them via `/api/convert`; the frontend fetches that payload and renders a simple Tailwind-styled table. The repo is seeded with an intentional rounding bug and a model/schema mismatch to find and fix using AI-assisted workflows.

## Features
- Node/Express API (no external keys)
- React + Tailwind frontend
- Jest testing of transformations
- Agentic-ready structure (Claude/Cursor compatible)

## Setup
1. Clone and install
```bash
git clone https://github.com/.../agentic-integration-hub
cd agentic-integration-hub
```

### Run backend
```bash
cd backend
npm install
 npm run dev
```

### Run frontend
```bash
cd ../frontend
npm install
npm run dev
```

Open http://localhost:5173

### Install Claude Code 
https://code.claude.com/docs/#get-started-in-30-seconds

### Demo Prompts
```bash
claude plan "Find where rounding precision and data-model mismatch occur, list affected files, generate step-by-step plan."
claude edit "Fix rounding to 3 decimals"
npm test
```

### Additional Prompts
- Plan:  
  `"Find the rounding precision and model/schema mismatch issues in this repo. List the files to touch, expected fixes, and impacted tests."`
- Fix rounding:  
  `"Update backend/src/transform.ts so normalizeCurrencyData rounds to 3 decimals. Keep the output shape { currency, normalizedRate }. Then rerun backend npm test."`
- Align model/schema:  
  `"Align FxRate with db_schema.sql naming (iso_code, rate, updated_at) or adjust the test accordingly. Update backend/src/models.ts and backend/tests/models.test.ts so tests pass."`

### More Agentic Prompts
- Repo Q&A:  
  `/ask "Summarize how the backend loads data and normalizes FX rates. Point to files and endpoints."`
- Test-first:  
  `/edit "Add/adjust a test for the rounding behavior in backend/tests/transform.test.ts to enforce 3-decimal output before implementation."`
- Commit helper:  
  `/ask "Draft a concise commit message based on the current git diff. Keep it under 60 chars for the subject."`
- UI iteration:  
  `/edit "In frontend/src/components/CurrencyTable.tsx, show updatedAt and a currency symbol column while keeping Tailwind styling."`

## Dependencies & Components
- Backend: express, cors; dev: typescript, ts-node, jest, ts-jest, @types/express, @types/jest
- Frontend: react, react-dom; dev: vite, @vitejs/plugin-react, tailwindcss, postcss, autoprefixer, typescript

```
[Frontend (Vite + React + Tailwind)]
    |
    | fetch GET http://localhost:3000/api/convert
    v
[Backend (Express server.ts)]
    |-- uses normalizeCurrencyData (transform.ts)
    |-- references FxRate interface (models.ts)
    |-- optional logger (utils/logger.ts)
    v
[data/sample_fx.json]
```
