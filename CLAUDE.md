# CLAUDE.md — Governance & Testing Context for Agentic Integration Hub

## Project Purpose
This repository demonstrates safe AI-assisted development workflows. Agents may plan, edit, and test code autonomously **within these guardrails**.

## Tech Stack
- Language: TypeScript (Node.js + React)
- Backend: Express (port 3000)
- Frontend: Vite + React + Tailwind
- Testing: Jest for backend (no frontend tests yet)
- Commands (run from package dirs):
  - Backend: `cd backend && npm run dev` (API), `cd backend && npm test` (Jest)
  - Frontend: `cd frontend && npm run dev` (Vite dev server)

## Testing Guidelines
- Use **Jest** for backend tests under `/backend/tests/`.
- Prefer TDD: write/adjust a failing test before implementation.
- Do **not** delete or skip existing tests.
- After code changes, run all relevant tests and summarize the output.
- If adding dependencies, run `npm audit` in that package and record findings.

## Planning & Reasoning
- Begin significant work with a brief plan: list target files, expected outputs, risks, and test impact.
- For risky edits, include a rollback strategy (e.g., backups or reversible patches).
- Refer to `/docs/STRUCTURE.md` for layout and intent of intentional bugs.

## Permissions
- Allowed: Read, Edit, Bash within the repo (tests, builds), Git commits.
- Disallowed: External network/API calls or installing global tools.

## Code Style & Conventions
- ES Modules (`import/export`) across backend and frontend.
- Keep formatting minimal and consistent (2-space indent, single quotes where practical).
- Use `logger.info()` / `logger.error()` from `backend/src/utils/logger.ts` when adding backend logging.
- Keep branch names descriptive (e.g., `feature/<task>`).

## Review Protocol
- After edits, run the applicable test suite (`cd backend && npm test`).
- Summarize: what changed, why, and test results (pass/fail with key output).
- If coverage is added later, target ≥80% and note gaps.

## Troubleshooting
- If tests fail, rerun with `npm test -- --runInBand --verbose` for clearer stacks.
- When uncertain about structure or intentional defects, read `/docs/STRUCTURE.md`.

## Example Prompts
- `/plan "Fix rounding bug, add missing tests"`
- `/test "Run backend Jest and summarize"`
- `/review "List potential maintainability issues"`
