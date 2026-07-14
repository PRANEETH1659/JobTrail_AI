# Phase 1 Week 2: Frontend Implementation Plan

This phase focuses on building the frontend for JobTrail AI, specifically the Kanban board UI, Resume Profile page, and Dashboard Analytics, as outlined in Week 2 of the project documentation.

## User Review Required

> [!IMPORTANT]
> The current `client` directory contains a basic Vite Vanilla TypeScript setup. It does not have React installed. We will need to re-initialize the frontend with React + Vite, or manually install React and its dependencies into the existing `client` directory.

## Open Questions

> [!WARNING]
> Since the current `client` folder is just a vanilla Vite project, should I delete the `client` folder and recreate it using `npm create vite@latest client -- --template react-ts` (or `react` for JS), or should I just install React into the existing folder? I recommend recreating it with the React template for a clean start.

## Proposed Changes

---

### Project Setup

#### [MODIFY] [client/](file:///d:/personal%20codes/JOBTRAIL-AI/client)
- Re-initialize the `client` directory with a React template.
- Install necessary dependencies: `react-router-dom` (for routing), `axios` (for API calls), `tailwindcss` (for styling), `lucide-react` (for icons), `recharts` (for analytics).

### Context & State Management

#### [NEW] [AuthContext.js](file:///d:/personal%20codes/JOBTRAIL-AI/client/src/context/AuthContext.js)
Create an AuthContext to manage user login state (JWT token) and user profile data globally.

#### [NEW] [ApplicationContext.js](file:///d:/personal%20codes/JOBTRAIL-AI/client/src/context/ApplicationContext.js)
Create an ApplicationContext to fetch, store, and update the list of job applications.

### Components

#### [NEW] [KanbanBoard.jsx](file:///d:/personal%20codes/JOBTRAIL-AI/client/src/components/KanbanBoard.jsx)
Build the drag-and-drop or column-based Kanban UI. It will display applications grouped by status (wishlist, applied, oa, interview, offer, rejected).

#### [NEW] [ApplicationCard.jsx](file:///d:/personal%20codes/JOBTRAIL-AI/client/src/components/ApplicationCard.jsx)
A reusable card component for each job application, displaying company, role, and quick actions.

### Pages

#### [NEW] [Dashboard.jsx](file:///d:/personal%20codes/JOBTRAIL-AI/client/src/pages/Dashboard.jsx)
Create the main dashboard page featuring Recharts analytics (applications per week, status breakdown).

#### [NEW] [Profile.jsx](file:///d:/personal%20codes/JOBTRAIL-AI/client/src/pages/Profile.jsx)
Create a page for users to paste their resume text and skills list, which will be saved to the database.

## Verification Plan

### Manual Verification
- We will start the frontend development server and verify that the routing works.
- We will test the Kanban board by adding a mock application and changing its status.
- We will test the Profile page by updating a user's resume text and verifying it persists to the backend.
