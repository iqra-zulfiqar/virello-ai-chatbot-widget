import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import chatbotAI from "./chatbotAI.js";

dotenv.config();

const app = express();

// ── Middleware ──────────────────────────────────
app.use(cors({
  origin: process.env.FRONTEND_URL || "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express.json({ limit: "2mb" }));

// ── Routes ──────────────────────────────────────
app.get("/", (req, res) => res.send("API is running..."));

// All chatbot routes: /api/chat  /api/leads  /api/handover
app.use("/api", chatbotAI);

// ── DB + Server ─────────────────────────────────
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
