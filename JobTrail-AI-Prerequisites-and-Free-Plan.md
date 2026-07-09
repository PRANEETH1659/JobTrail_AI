# JobTrail AI — Prerequisites, Environment & 100% Free Resource Plan
*(Companion doc to JobTrail-AI-Project-Doc.md — read that first for the project itself)*

Verified against current sources as of **July 2026**. Free tiers do change, so if any link below looks different when you visit it, that's normal — the core "free forever, no card" nature of each has held for years and is unlikely to change mid-project.

---

## 1. Knowledge You Need Before/While Starting

You already have enough to *start*. Here's the honest breakdown of what's solid vs. what you'll learn on the job:

| Area | Your current level | What's enough to start | Learn during Week |
|---|---|---|---|
| React (hooks, Context) | Intermediate ✅ | Ready | — |
| Node/Express | Intermediate ✅ | Ready | — |
| MongoDB/Mongoose | Light | Enough to start | Schemas, refs, basic queries — Week 1 |
| JWT Auth | Slight | Enough to start | bcrypt + JWT middleware pattern — Week 1 |
| REST API design | Slight | Enough to start | You'll solidify this naturally by building it |
| LLM API calls (Gemini) | New | Not required yet | Prompt engineering for structured JSON output — Week 3 |
| Agent orchestration | New | Not required yet | Sequential pipeline pattern — Week 3–4 (this doc's project doc explains the pattern; you don't need a course) |

**You do not need to "finish learning" anything before you start.** Learn each piece the week you need it — that's a better story for interviews anyway ("I learned prompt engineering for structured outputs while building this").

---

## 2. Environment / Tools to Install (All Free)

| Tool | Purpose | Cost |
|---|---|---|
| Node.js (LTS) | Runtime for backend + React tooling | Free |
| VS Code | Code editor | Free |
| Git + GitHub account | Version control, and your portfolio proof | Free |
| Postman or Thunder Client (VS Code extension) | Testing your API endpoints | Free |
| MongoDB Compass (optional) | GUI to view your Atlas database | Free |

No paid IDE, no paid OS requirement — works on Windows/Linux/Mac.

---

## 3. Free Resources — Verified List

### Database
**MongoDB Atlas — Free Tier (M0)**
- 512 MB storage, shared RAM, up to 100 operations/sec, **free forever, no credit card, no time limit**.
- This has been Atlas's standing free offer for years and remains unchanged.
- Sign up: cloud.mongodb.com → create an M0 cluster → get your connection string.
- Good enough for this entire project — you won't come close to 512 MB with application-tracking data.

### AI / Agent API
**Google Gemini API — Free Tier**
- Flash and Flash-Lite models are free with **no credit card required**.
- As of mid-2026: roughly 10–15 requests/minute and several hundred to 1,000+ requests/day depending on model, resetting daily. This is more than enough for a personal project — you're not running production traffic.
- ⚠️ One important catch: **Google may use free-tier prompts/outputs to improve their models.** Don't feed it anyone's real sensitive data — since you're using your own resume/dummy JDs for a portfolio project, this is not a concern for you, but mention this awareness if an interviewer asks about data privacy — it shows maturity.
- ⚠️ Second catch: if you ever enable billing on the same Google Cloud project (e.g., to test something else), the free tier disappears entirely for that project. Keep this project on a fresh, billing-disabled project.
- Get a key free at aistudio.google.com — no card needed.
- Use `gemini-2.5-flash` or `gemini-2.5-flash-lite` (not Pro — Pro's free quota is very limited).

*(Alternative if you want to compare: Anthropic's Claude API and OpenAI's API both offer limited free credits on signup, not indefinite free tiers like Gemini. Gemini is the better fit for a month-long free build.)*

### Backend Hosting
**Render — Free Web Service**
- Still free, no card required for the free tier.
- Real caveat: your backend "spins down" after ~15 minutes of no traffic, and the next request takes 30–60 seconds to wake up. For a portfolio project this is completely fine — just mention it if you demo live ("cold start" is a normal, explainable real-world concept, and knowing about it is actually a plus in interviews).
- Alternative if you want zero cold starts: **Railway** (usage-based free credits) or simply keep the backend running locally during your interview demo and show a recorded video/GIF as backup.

### Frontend Hosting
**Vercel — Free Hobby Tier**
- Static hosting + serverless functions, 100 GB bandwidth/month, no card required.
- Perfect for your React app. Auto-deploys from GitHub on every push (great to show interviewers your CI/CD-like workflow).

### Everything Else
- **GitHub** — free public repos, this is also your portfolio proof (put the link on your resume).
- **JWT (jsonwebtoken npm package) + bcrypt** — free, open-source npm packages, no external service needed.
- **Recharts** — free open-source charting library for your analytics dashboard.

**Total monthly cost for this entire project: ₹0 / $0.** Everything above has been free-forever (not trial) for years, and none require a credit card to sign up — so there's no risk of accidental charges.

---

## 4. Starting Phase — Exact Procedure

**Day 0 — Setup (before Week 1 coding begins)**
1. Create GitHub repo: `jobtrail-ai` (or your preferred name)
2. Set up MongoDB Atlas free cluster, save your connection string somewhere safe (never commit it — use `.env`)
3. Create a Google AI Studio account, generate a Gemini API key, save it in `.env` (never commit it)
4. Scaffold two folders in your repo: `/client` (React, via Vite) and `/server` (Node/Express)
5. Push an empty "hello world" version of both to GitHub, connect `/client` to Vercel and `/server` to Render right away — so deployment is solved on Day 0, not Week 4

**Then follow the Week 1–4 roadmap in `JobTrail-AI-Project-Doc.md`.**

---

## 5. A Note on "Using Fewer Credits" With Me Going Forward

Since you mentioned wanting to be efficient with conversation length:
- Come back with **specific, scoped questions** ("help me write the Mongoose schema for Application" or "why is my JWT middleware throwing 401") rather than "help me build week 1" — narrow questions get faster, cheaper answers.
- Use the **Context Primer** block from the project doc at the start of any new conversation so you don't have to re-explain the whole project.
- If you're using Claude Code or the Claude desktop/CLI tools for the actual coding (not just chat), a `CLAUDE.md` file in your repo root with a short project summary + conventions saves you from re-explaining context every session — you already know this pattern from your other work.

---

## 6. Multi-AI Tool Workflow

You're combining several AI tools for this build. Access levels (as of starting the project):
- **Claude** — chat interface
- **Google AI Pro (Gemini Pro)** — paid subscription, ~18 months
- **Codex** — free/trial tier
- **Manus** — free/trial tier

Free/trial credits on Codex and Manus are one-time and limited, so they're best used as **burst tools for single high-value tasks**, not daily drivers. Paid Gemini Pro is your only tool with real day-to-day headroom for iterative coding.

**Suggested allocation:**

| Tool | Role | When |
|---|---|---|
| Claude (me) | Architecture decisions, code review, debugging, explaining *why* — the thread that keeps the project coherent across sessions | Throughout, especially whenever you need to understand something deeply |
| Gemini Pro (Code Assist in VS Code) | Daily coding driver — CRUD boilerplate, React components, Mongoose schemas | Weeks 1–4, ongoing |
| Codex (trial) | One big scaffolding burst — full repo structure, base configs, base models, in a single prompt | Day 0 / early Week 1 only |
| Manus (trial) | One autonomous multi-step task — e.g. researching and drafting the first version of the agent prompts for the JD Parser | Week 3, when you start the agentic pipeline |

**Golden rule:** whichever tool writes a piece of code, re-explain it back to yourself in your own words before moving on. Code you can't defend in an interview is worse than no project — this is the whole point of doing it yourself rather than just accepting output.

---

*End of document. Pair this with JobTrail-AI-Project-Doc.md before starting Week 1.*
