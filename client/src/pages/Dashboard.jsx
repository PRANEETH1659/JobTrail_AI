const DashBoard = () => {
  const stats = [
    { label: "Total Applications", value: 12, color: "var(--primary)" },
    { label: "Interviews", value: 3, color: "#8b5cf6" },
    { label: "Offers", value: 1, color: "#10b981" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <h1 style={{ fontSize: "28px", color: "var(--text-main)", margin: 0 }}>
        DashBoard
      </h1>

      <div style={{ display: "flex", gap: "16px" }}>
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              flex: 1,
              backgroundColor: "var(--surface)",
              padding: "24px",
              borderRadius: "var(--radius-md)",
              borderTop: `4px solid ${stat.color}`,
            }}
          >
            <h3
              style={{
                color: "var(--text-muted)",
                margin: "0 0 8px 0",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              {stat.label}
            </h3>
            <p style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}>
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      {/*  Placeholder for Kanban Board*/}

      <div
        style={{
          backgroundColor: "var(--surface)",
          padding: "24px",
          borderRadius: "var(--radius-md)",
          minHeight: "400px",
        }}
      >
        <h2 style={{ fontSize: "18px", marginTop: "0" }}>
          Application PipeLine Coming SOON!!!
        </h2>
      </div>
    </div>
  );
};

export default DashBoard;
