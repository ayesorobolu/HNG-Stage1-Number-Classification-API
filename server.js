import express from "express";
import cors from "cors";
import classifyNumber from "./function.js";

const app = express();

app.use(cors());

app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;

  if (!number || isNaN(number)) {
    return res.status(400).json({ number: "alphabet", error: true });
  }

  const num = parseInt(number, 10);
  const result = await classifyNumber(num);
  res.json(result);
});

app.listen(4000, () => {
  console.log("Server running on port 4000");
});