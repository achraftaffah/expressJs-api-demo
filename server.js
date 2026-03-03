// server.js
import express from "express";

const app = express();

app.get("/api/date", (req, res) => {
  res.json({ currentDate: new Date().toISOString() });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
