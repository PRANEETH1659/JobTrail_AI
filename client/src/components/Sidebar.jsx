import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    label: 'Board',
    path: '/dashboard',
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    label: 'Profile',
    path: '/profile',
  },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside
      style={{
        width: '220px',
        minWidth: '220px',
        borderRight: '1px solid rgba(255,255,255,0.05)',
        background: 'rgba(7,7,15,0.85)',
        backdropFilter: 'blur(20px)',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 12px',
        gap: '4px',
        zIndex: 10,
      }}
    >
      {/* Logo */}
      <div style={{ padding: '8px 14px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px', height: '32px', borderRadius: '10px',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(99,102,241,0.5)',
            fontSize: '16px', fontWeight: '900', color: 'white',
          }}>J</div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#f0f0ff', letterSpacing: '-0.3px' }}>JobTrail</div>
            <div style={{ fontSize: '11px', color: '#6366f1', fontWeight: '600', letterSpacing: '1px' }}>AI</div>
          </div>
        </div>
      </div>

      {/* Nav items */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`sidebar-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
      </div>

      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Footer hint */}
      <div style={{
        padding: '12px 14px',
        borderRadius: '12px',
        background: 'rgba(99,102,241,0.07)',
        border: '1px solid rgba(99,102,241,0.15)',
      }}>
        <div style={{ fontSize: '12px', fontWeight: '600', color: '#6366f1', marginBottom: '4px' }}>
          Phase 1 Complete
        </div>
        <div style={{ fontSize: '11px', color: '#55557a', lineHeight: '1.5' }}>
          AI features coming in Phase 2 🚀
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
