
<img width="938" height="436" alt="Screenshot 2025-12-07 at 14 21 49" src="https://github.com/user-attachments/assets/e67b8460-bb63-4aab-8c92-a0c830bdebe9" />

# Agentic Integration Hub (TypeScript + Tailwind)
_A lightweight demonstration project for agentic coding workflows_

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

### Demo Prompts
```bash
claude plan "Find where rounding precision and data-model mismatch occur, list affected files, generate step-by-step plan."
claude edit "Fix rounding to 3 decimals"
npm test
```

---

## Key Workshop Demo Moments
| Step | Outcome |
|-------|----------|
| Run tests (1 fail) | Establish baseline |
| Claude plans fixes | Shows Plan Mode |
| Claude edits transform.ts + tests green | Shows execution loop |
| Claude aligns models to schema | Shows real “data model misalignment” problem |
| Frontend renders new values with Tailwind styling | “Instant result” wow moment |
| Claude writes README docs | Shows self-documenting workflow |
