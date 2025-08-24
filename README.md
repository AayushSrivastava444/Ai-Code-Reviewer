AI Code Reviewer
A lightweight full‑stack app that reviews code snippets with an AI model and returns actionable feedback on correctness, style, performance, and best practices.

Frontend: React + Vite

Backend: Node.js + Express

AI Provider: Google Gemini via server SDK

Deployment: Vercel (separate projects for frontend and backend)

Features
Paste code and get a concise, structured review

Highlights issues and suggests fixes with examples

Markdown rendering with syntax highlighting

Environment‑aware configuration (local vs. deployed)

CORS-enabled API for cross‑domain frontend/backend

Simple, extensible service layer for AI providers

Project Structure
text
Ai-Code-Reviewer/
├─ Frontend/                 # Vite React app
│  ├─ src/
│  │  ├─ App.jsx
│  │  └─ main.jsx
│  ├─ index.html
│  ├─ .env                   # VITE_BACKEND_URL=...
│  └─ vite.config.js
│
├─ Backend/                  # Express API
│  ├─ src/
│  │  ├─ App.js              # express app (cors, json, routes)
│  │  ├─ Routes/ai.routes.js # POST /ai/get-review
│  │  ├─ controllers/ai.controllers.js
│  │  └─ services/ai.service.js
│  ├─ Server.js              # server entry (reads PORT)
│  ├─ .env                   # GOOGLE_GEMINI_KEY=..., PORT=3000
│  └─ vercel.json            # routes/builds for Vercel functions
└─ README.md
