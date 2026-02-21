const express = require("express");
const { WebSocketServer } = require("ws");
const http = require("http");
const fetch = require("node-fetch");
const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });
const { DEEPGRAM_API_KEY, OPENAI_API_KEY, ELEVENLABS_API_KEY, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, DEFAULT_VOICE_ID = "nPczCjzI2devNBz1zQrb" } = process.env;
const callSessions = new Map();
app.get("/health", (req, res) => res.json({ status: "ok" }));
// Full server code from flyio-server/server.js
