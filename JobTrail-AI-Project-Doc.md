# JobTrail AI — Agentic Job Application Copilot
### Full Project Documentation & Continuation Guide

> **Owner:** Praneeth (B.Tech CSE, VIT-AP, 2027, targeting full-stack/backend roles)
> **Stack level:** Intermediate React.js (hooks, Context), Intermediate Node.js, Light MongoDB, Slight API/JWT auth knowledge
> **Timeline:** 4 weeks
> **Status:** Not yet started — this doc is the source of truth for planning

---

## 1. The Problem (Your Pitch to Interviewers)

During placement season, job seekers apply to 30–100+ companies. This creates two real pains:

1. **Tracking chaos** — spreadsheets or memory to track application status, deadlines, rounds.
2. **Resume/cover-letter fatigue** — manually re-tailoring your resume bullets and writing a cover letter for every single JD is repetitive and most people just skip it (which hurts ATS match rate).

**JobTrail AI** solves both: a tracker (full-stack CRUD) + an AI agent pipeline that reads any JD, scores your fit, finds gaps, and drafts tailored content — so you apply faster *and* smarter.

This is a problem you are personally experiencing right now, which is exactly what makes it credible in an interview.

---

## 2. Unique Value Proposition

- Not "yet another AI wrapper" — it's a **multi-step agent pipeline** with distinct reasoning stages (parse → match → generate), which is far more impressive than a single prompt-in/prompt-out chatbot.
- Combines a genuinely useful full-stack product (Kanban tracker + analytics) with an agentic layer, so you can demo BOTH halves independently in an interview.
- You can build it in phases: Phase 1 (full-stack) is a complete, demoable product on its own. Phase 2 (agentic) is additive, not a rewrite — matches your stated preference to do full-stack first, then agentic (or in parallel once Phase 1's data model exists).

---

## 3. Core Features

### Phase 1 — Full-Stack MVP (Weeks 1–2)
- JWT-based auth (signup/login/protected routes)
- Application tracker: CRUD for job applications with fields (company, role, JD text/link, status, applied date, notes)
- Kanban board UI: Wishlist → Applied → OA → Interview → Offer → Rejected (drag/drop or simple status dropdown to start)
- Resume profile: user uploads/pastes resume text + skill list (stored in Mongo)
- Dashboard analytics: applications per week, status breakdown (use Recharts)

### Phase 2 — Agentic Pipeline (Weeks 3–4)
- **Agent 1 – JD Parser:** extracts role, required skills, experience level, keywords from pasted JD text
- **Agent 2 – Match Scorer:** compares parsed JD against your stored resume/skills, returns a match % and a gap list ("missing: Docker, GraphQL")
- **Agent 3 – Content Generator:** drafts 3–4 tailored resume bullet points + a short cover letter paragraph, using your real project history as grounding
- **Agent 4 (stretch, optional):** Company Research Agent — web-searches the company and summarizes recent news/culture notes for interview prep

**Orchestration approach:** You don't need LangChain/LangGraph to start — you can hand-roll a simple sequential pipeline in Node (call Agent 1 → pass output to Agent 2 → pass output to Agent 3), storing each step's output in an `AgentLogs` collection. This is actually a *better* interview story because you can explain the orchestration logic yourself line by line, instead of saying "the framework did it." You can mention LangGraph as a "future improvement" if asked.

---

## 4. Tech Stack

| Layer | Choice | Notes |
|---|---|---|
| Frontend | React + Context API + Hooks + Tailwind CSS | Recharts for analytics charts |
| Backend | Node.js + Express | REST API |
| Auth | JWT + bcrypt | Matches your existing API/auth knowledge |
| Database | MongoDB + Mongoose | Collections below |
| AI Layer | Anthropic Claude API or Gemini API (function calling / structured JSON output) | You already have Gemini API experience from your Diet Advisor project |
| File upload | Multer (for resume PDF, or just paste-as-text to keep it simple) | Simpler = paste resume text, parse later |
| Deployment | Frontend → Vercel, Backend → Render/Railway, DB → MongoDB Atlas | All free tier |

---

## 5. Database Schema (MongoDB Collections)

```
User {
  _id, name, email, passwordHash,
  resumeText: String,
  skills: [String],
  createdAt
}

Application {
  _id, userId (ref User),
  company, role, jdText, jdLink,
  status: enum [wishlist, applied, oa, interview, offer, rejected],
  appliedDate, notes,
  matchScore: Number,        // filled by Agent 2
  missingSkills: [String],   // filled by Agent 2
  createdAt, updatedAt
}

AgentLog {
  _id, applicationId (ref Application),
  stage: enum [parse, match, generate],
  input: String,
  output: String,
  createdAt
}

GeneratedContent {
  _id, applicationId (ref Application),
  tailoredBullets: [String],
  coverLetterDraft: String,
  createdAt
}
```

---

## 6. API Endpoints (Draft)

```
POST   /api/auth/signup
POST   /api/auth/login
GET    /api/users/me
PUT    /api/users/me/resume        // update resume text + skills

GET    /api/applications
POST   /api/applications
PUT    /api/applications/:id
DELETE /api/applications/:id

POST   /api/applications/:id/agent/parse      // Agent 1
POST   /api/applications/:id/agent/match      // Agent 2
POST   /api/applications/:id/agent/generate   // Agent 3

GET    /api/analytics/summary       // for dashboard charts
```

---

## 7. Architecture (Text Diagram)

```
[React Frontend]
   |  (Context API for auth state + applications state)
   |  Axios calls
   v
[Express Backend] -- JWT middleware --> [Route Controllers]
   |                                          |
   |                                          v
   |                                   [Agent Pipeline Service]
   |                                     Agent1 -> Agent2 -> Agent3
   |                                          |
   |                                          v
   |                                   [Claude/Gemini API]
   v
[MongoDB Atlas] <-- Mongoose ODM
```

---

## 8. 4-Week Roadmap

**Week 1 — Foundation**
- Project setup (React + Vite, Express, Mongoose)
- Auth: signup/login, JWT middleware, protected routes
- Application CRUD (backend + basic frontend forms)
- Deploy skeleton early (Vercel + Render) so deployment isn't a Week-4 fire drill

**Week 2 — Full-Stack Polish**
- Kanban board UI (status columns, update on drag or dropdown)
- Resume profile page (paste resume text + skills list)
- Dashboard analytics page (Recharts: applications/week, status pie chart)
- Full Phase 1 MVP is now demoable on its own

**Week 3 — Agentic Pipeline Part 1**
- Integrate Claude/Gemini API in backend
- Build Agent 1 (JD Parser) — prompt engineering for structured JSON output
- Build Agent 2 (Match Scorer) — compare parsed JD vs resume/skills, compute score + gap list
- Store results in `AgentLog` + update `Application.matchScore`

**Week 4 — Agentic Pipeline Part 2 + Ship**
- Build Agent 3 (Content Generator) — tailored bullets + cover letter draft
- Frontend: show match score, gaps, and generated content on the application detail page
- Bug fixes, UI polish, README with screenshots
- Final deploy + write resume bullet points + rehearse your explanation

---

## 9. How to Explain This in an Interview (Talking Points)

1. **The problem:** "During placements I was tracking 50+ applications manually and re-tailoring my resume for each JD took too long, so most people just skip it and send a generic resume."
2. **The full-stack part:** Explain your auth flow (JWT, protected routes), your data model, and why you chose a Kanban-style status flow.
3. **The agentic part — this is the differentiator:** Walk through the 3-stage pipeline. Emphasize that it's not one prompt — it's sequential reasoning steps, each with its own responsibility (parsing → scoring → generation), and each step's output is logged for debuggability (`AgentLog` collection — mention this shows you thought about observability, a real production concern).
4. **What you'd improve with more time:** mention LangGraph/agent frameworks, a proper ATS-style resume parser, or a browser extension to auto-fill applications — shows growth mindset.

---

## 10. Draft Resume Bullet Points

- Built a full-stack job application tracker (React, Node.js, MongoDB) with JWT auth and a Kanban-style workflow supporting 6 application states.
- Designed and implemented a 3-stage agentic AI pipeline (JD parsing → resume match scoring → tailored content generation) using the Claude/Gemini API, reducing manual resume-tailoring time.
- Built an analytics dashboard (Recharts) surfacing application velocity and status breakdown to support user decision-making.

*(Refine numbers/impact once you have real usage data — e.g., "processed X applications," "reduced tailoring time by Y%" if you can measure it on yourself.)*

---

## 11. Context Primer — Paste This Into a New Conversation

If you run out of tokens or start a new chat (with Claude or any other AI), paste this block first:

```
I'm building "JobTrail AI" — a full-stack agentic job application copilot.
Stack: React (hooks + Context), Node/Express, MongoDB/Mongoose, JWT auth,
Claude/Gemini API for a 3-agent pipeline (JD Parser -> Match Scorer -> Content Generator).
Full spec: [paste relevant section of this doc, or summarize below]

Current status: Phase 1 Week 2 - Application CRUD backend (models, controllers, routes) is complete. Ready to proceed with the frontend Kanban board UI and application state management.
What I need help with now: [your specific question/task]
```

---

## 12. Learning Resources (as you go)

- MongoDB: focus only on what you need — Mongoose schemas, refs/population, basic aggregation for the analytics endpoint. You don't need deep MongoDB knowledge for this project.
- JWT auth: you already have the basics; this project reinforces it with real protected routes.
- Prompt engineering for structured JSON output: this is the main new skill — look at Anthropic's docs on getting reliable structured output (ask for JSON-only responses, validate/parse on the backend).
- Recharts: minimal — a bar chart and pie chart cover the whole dashboard.

---

*End of document. Update the "Current status" section as you progress so this stays a living project brief.*
