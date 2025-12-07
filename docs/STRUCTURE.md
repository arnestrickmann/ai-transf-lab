# Agentic Integration Hub – Repo Structure

```
agentic-integration-hub/
├── backend/
│   ├── src/
│   │   ├── server.ts
│   │   ├── transform.ts
│   │   ├── db_schema.sql
│   │   ├── models.ts
│   │   └── utils/logger.ts
│   ├── tests/
│   │   ├── transform.test.ts
│   │   └── models.test.ts
│   ├── tsconfig.json
│   ├── jest.config.cjs
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── index.css
│   │   └── components/CurrencyTable.tsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   ├── vite.config.ts
│   └── package.json
│
├── data/sample_fx.json
├── docs/STRUCTURE.md
├── README.md
├── .gitignore
└── LICENSE
```

Notes:
- Backend intentionally contains a rounding precision bug in `src/transform.ts` and a data-model mismatch in `src/models.ts` for workshop fixes.
- Frontend fetches from the backend API and renders a simple Tailwind-styled table.
