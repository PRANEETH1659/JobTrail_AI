import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <aside
      style={{
        width: "250px",
        backgroundColor: "var(--surface)",
        borderRight: "1px solid var(--border)",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      <h2 style={{ color: "var(--primary)", margin: 0, fontSize: "24px" }}>
        JobTrail AI
      </h2>
      <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Link
          to="/dashboard"
          style={{
            padding: "8px",
            borderRadius: "var(--radius-md)",
            backgroundColor: "var(--bg-color)",
            fontWeight: "500",
          }}
        >
          DashBoard{" "}
        </Link>

        <Link
          to="/profile"
          style={{
            padding: "8px",

            fontWeight: "500",
            color: "var(--text-muted)",
          }}
        >
          Profile
        </Link>
      </nav>
    </aside>
  );
};

export default SideBar;
