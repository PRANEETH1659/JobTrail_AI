import { createContext, useState } from "react";

export const ApplicationContext = createContext();

export const ApplicationProvider = ({ children }) => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      company: "Google",
      role: "Frontend Engineer",
      status: "interview",
      date: "2026-07-10",
    },
    {
      id: 2,
      company: "Microsoft",
      role: "Full Stack Dev",
      status: "applied",
      date: "2026-07-12",
    },
    {
      id: 3,
      company: "Amazon",
      role: "Software Engineer",
      status: "offer",
      date: "2026-07-05",
    },
    {
      id: 4,
      company: "Netflix",
      role: "UI Engineer",
      status: "applied",
      date: "2026-07-14",
    },
    {
      id: 5,
      company: "Meta",
      role: "React Developer",
      status: "interview",
      date: "2026-07-15",
    },
  ]);

  return (
    <ApplicationContext.Provider value={{ applications, setApplications }}>
      {children}
    </ApplicationContext.Provider>
  );
};
