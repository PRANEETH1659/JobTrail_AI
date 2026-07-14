import React, { useContext } from 'react';
import { ApplicationContext } from '../context/ApplicationContext';
import ApplicationCard from './ApplicationCard';

const COLUMNS = [
  { id: 'wishlist',  title: 'Wishlist',           color: '#94a3b8', dot: '#94a3b8', accent: 'rgba(148,163,184,0.1)' },
  { id: 'applied',   title: 'Applied',             color: '#06b6d4', dot: '#06b6d4', accent: 'rgba(6,182,212,0.1)'   },
  { id: 'oa',        title: 'Assessment',          color: '#f59e0b', dot: '#f59e0b', accent: 'rgba(245,158,11,0.1)'  },
  { id: 'interview', title: 'Interview',           color: '#8b5cf6', dot: '#8b5cf6', accent: 'rgba(139,92,246,0.1)'  },
  { id: 'offer',     title: 'Offer',               color: '#10b981', dot: '#10b981', accent: 'rgba(16,185,129,0.1)'  },
  { id: 'rejected',  title: 'Rejected',            color: '#f43f5e', dot: '#f43f5e', accent: 'rgba(244,63,94,0.1)'   },
];

const SkeletonCard = () => (
  <div style={{ borderRadius: '12px', padding: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', marginBottom: '12px' }}>
    <div className="skeleton" style={{ height: '16px', width: '70%', marginBottom: '10px' }} />
    <div className="skeleton" style={{ height: '12px', width: '50%', marginBottom: '8px' }} />
    <div className="skeleton" style={{ height: '10px', width: '35%' }} />
  </div>
);

const KanbanBoard = () => {
  const { applications, loading } = useContext(ApplicationContext);

  if (loading) {
    return (
      <div style={{ display: 'flex', gap: '16px', height: '100%', overflow: 'hidden' }}>
        {COLUMNS.map((col) => (
          <div key={col.id} style={{ minWidth: '270px', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', padding: '16px', flex: '0 0 270px' }}>
            <div className="skeleton" style={{ height: '20px', width: '60%', marginBottom: '16px' }} />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: '14px', height: '100%', overflowX: 'auto', overflowY: 'hidden', paddingBottom: '16px' }}>
      {COLUMNS.map((col) => {
        const columnApps = (applications || []).filter((app) => app.status === col.id);

        return (
          <div
            key={col.id}
            style={{
              minWidth: '270px',
              flex: '0 0 270px',
              borderRadius: '16px',
              background: 'rgba(255,255,255,0.025)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.06)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              transition: 'border-color 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = `${col.color}30`; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
          >
            {/* Column Header */}
            <div style={{
              padding: '14px 16px',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              background: col.accent,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  className="status-dot"
                  style={{ background: col.dot, color: col.dot }}
                />
                <span style={{ fontSize: '13px', fontWeight: '700', color: col.color, letterSpacing: '0.3px' }}>
                  {col.title}
                </span>
              </div>
              <div style={{
                background: `${col.color}22`,
                border: `1px solid ${col.color}44`,
                color: col.color,
                borderRadius: '999px',
                padding: '2px 10px',
                fontSize: '12px',
                fontWeight: '700',
              }}>
                {columnApps.length}
              </div>
            </div>

            {/* Cards */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {columnApps.map((app) => (
                <ApplicationCard key={app._id} application={app} statusColor={col.color} />
              ))}

              {columnApps.length === 0 && (
                <div style={{
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                  height: '100px', borderRadius: '12px',
                  border: `1px dashed ${col.color}25`,
                  color: '#33334a', fontSize: '13px', fontWeight: '500',
                  background: `${col.color}06`,
                }}>
                  <span style={{ fontSize: '24px', marginBottom: '6px', opacity: 0.4 }}>+</span>
                  No applications
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KanbanBoard;
