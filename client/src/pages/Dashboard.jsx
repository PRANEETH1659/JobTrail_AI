import React, { useContext } from 'react';
import KanbanBoard from '../components/KanbanBoard';
import { ApplicationContext } from '../context/ApplicationContext';

const STATS = (apps) => {
  const all = apps || [];
  return [
    { label: 'Total', value: all.length, color: '#6366f1', icon: '📋' },
    { label: 'Applied', value: all.filter(a => a.status === 'applied').length, color: '#06b6d4', icon: '📨' },
    { label: 'Interview', value: all.filter(a => a.status === 'interview').length, color: '#8b5cf6', icon: '🎤' },
    { label: 'Offers', value: all.filter(a => a.status === 'offer').length, color: '#10b981', icon: '🎉' },
  ];
};

const Dashboard = () => {
  const { applications } = useContext(ApplicationContext);
  const stats = STATS(applications);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: '28px 32px', gap: '24px' }}>

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{
            fontSize: '26px', fontWeight: '800', letterSpacing: '-0.5px',
            background: 'linear-gradient(135deg, #f0f0ff 30%, #8b5cf6)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            marginBottom: '4px',
          }}>
            Job Board
          </h1>
          <p style={{ fontSize: '14px', color: '#55557a', fontWeight: '500' }}>
            Track every application. Land your dream role.
          </p>
        </div>

        <button className="btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          New Application
        </button>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {stats.map((s) => (
          <div key={s.label} className="stat-card" style={{ borderTop: `2px solid ${s.color}30` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <div style={{ fontSize: '11px', color: '#55557a', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '8px' }}>
                  {s.label}
                </div>
                <div style={{ fontSize: '32px', fontWeight: '800', color: '#f0f0ff', lineHeight: 1 }}>
                  {s.value}
                </div>
              </div>
              <div style={{
                width: '38px', height: '38px', borderRadius: '10px',
                background: `${s.color}18`,
                border: `1px solid ${s.color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '18px',
              }}>
                {s.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Kanban Board */}
      <div style={{ flex: 1, overflow: 'hidden' }}>
        <KanbanBoard />
      </div>
    </div>
  );
};

export default Dashboard;
