# JobTrail AI — Agentic Job Application Copilot

> An intelligent full-stack job application tracker paired with a multi-step AI agent pipeline that parses job descriptions, evaluates skill match scores, identifies gaps, and generates tailored resume bullet points and cover letters.

---

## 📌 Overview & Problem Statement

During placement season, candidates often apply to dozens of roles weekly. This leads to two major bottlenecks:
1. **Application Tracking Chaos:** Managing deadlines, interview rounds, and statuses across spreadsheets or memory.
2. **Personalization Fatigue:** Manually tailoring resume bullets and cover letters for every single Job Description (JD) is tedious, resulting in generic applications and lower ATS match rates.

**JobTrail AI** solves both issues by offering a **Full-Stack Application Tracker (Kanban & Analytics)** coupled with a **Multi-Step Agentic AI Pipeline** that evaluates match quality and crafts tailored content grounded in the applicant's real project history.

---

## ✨ Key Features

### 📊 Full-Stack Application Management
- **Kanban Board:** Drag/update status across `Wishlist` ➔ `Applied` ➔ `OA` ➔ `Interview` ➔ `Offer` ➔ `Rejected`.
- **Analytics Dashboard:** Visual representation of application frequency, status ratios, and job hunt progress.
- **User Authentication:** Secure JWT-based authentication with encrypted user profiles.

### 🤖 Multi-Stage Agentic AI Pipeline
- **Agent 1 — JD Parser:** Extracts key technical skills, experience requirements, and core keywords from pasted job descriptions.
- **Agent 2 — Match Scorer:** Compares parsed JDs with stored user profile/skills to generate a fit score (%) and flag missing technical skills.
- **Agent 3 — Tailored Content Generator:** Drafts targeted resume bullet points and tailored cover letter paragraphs using user project context.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js, Context API, Tailwind CSS, Recharts |
| **Backend** | Node.js, Express.js (REST API Architecture) |
| **Database** | MongoDB Atlas, Mongoose ORM |
| **AI Engine** | Google Gemini API (Structured JSON Outputs) |
| **Auth & Security** | JWT (JSON Web Tokens), bcryptjs |

---

## 📐 Architecture Flow

```
[ User Input / Raw JD ] 
         │
         ▼
 ┌───────────────┐      ┌───────────────────────────┐
 │   React UI    │ ───► │ Node.js / Express Backend │
 └───────────────┘      └─────────────┬─────────────┘
                                      │
                                      ▼
                        ┌───────────────────────────┐
                        │ Multi-Step Agent Pipeline │
                        │  (Gemini API Execution)   │
                        └─────────────┬─────────────┘
                                      │
               ┌──────────────────────┼──────────────────────┐
               ▼                      ▼                      ▼
       [ Stage 1: Parse ]     [ Stage 2: Match ]     [ Stage 3: Draft ]
               │                      │                      │
               └──────────────────────┼──────────────────────┘
                                      │
                                      ▼
                        ┌───────────────────────────┐
                        │   MongoDB Persistence     │
                        └───────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v18 or higher)
* **MongoDB** (Local or MongoDB Atlas Cluster)
* **Google Gemini API Key**

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/PRANEETH1659/JobTrail_AI.git
   cd JobTrail_AI
   ```

2. **Configure Backend Environment:**
   Navigate into the `server` folder and create a `.env` file:
   ```bash
   cd server
   npm install
   ```
   Add the following variables to `server/.env`:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://<your_credentials>@cluster.mongodb.net/jobtrail
   JWT_SECRET=your_jwt_secret_key
   GEMINI_API_KEY=your_gemini_api_key
   ```

3. **Run Backend Server:**
   ```bash
   npm start
   ```

4. **Configure Frontend:**
   Open a new terminal window, navigate to the `client` folder, install dependencies, and launch:
   ```bash
   cd client
   npm install
   npm run dev
   ```

---

## 📂 Project Structure

```
JobTrail-AI/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # UI Components (Kanban, Dashboard, Forms)
│   │   ├── context/        # React Context (Auth, Application State)
│   │   └── pages/          # Application Views
├── server/                 # Node.js Express Backend
│   ├── config/             # DB & API Configuration
│   ├── controllers/        # Route Handlers & Controller Logic
│   ├── middleware/         # Auth & Validation Middlewares
│   ├── models/             # Mongoose Schemas (User, Application, AgentLog)
│   └── routes/             # REST Endpoints
├── JobTrail-AI-Project-Doc.md
└── README.md
```

---

## 👤 Author

* **Praneeth** — B.Tech Computer Science & Engineering (VIT-AP)
* GitHub: [@PRANEETH1659](https://github.com/PRANEETH1659)
