import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import { normalizeCurrencyData } from "./transform";

const app = express();
const PORT = Number(process.env.PORT) || 3000;
app.use(cors());

app.get("/api/convert", (_, res) => {
  const dataPath = path.resolve(__dirname, "..", "..", "data", "sample_fx.json");
  const raw = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  const normalized = normalizeCurrencyData(raw);
  res.json({ data: normalized, updatedAt: new Date().toISOString() });
});

app.listen(PORT, () => console.log(`🚀  Server running on http://localhost:${PORT}`));
