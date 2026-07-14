import React, { useContext, useState } from 'react';
import { ApplicationContext } from '../context/ApplicationContext';

const STATUS_OPTIONS = [
  { value: 'wishlist',  label: 'Wishlist'    },
  { value: 'applied',   label: 'Applied'     },
  { value: 'oa',        label: 'Assessment'  },
  { value: 'interview', label: 'Interview'   },
  { value: 'offer',     label: 'Offer'       },
  { value: 'rejected',  label: 'Rejected'    },
];

const formatDate = (dateString) => {
  if (!dateString) return null;
  return new Date(dateString).toLocaleDateString(undefined, { month: 'short', day: 'numeric' });
};

const ApplicationCard = ({ application, statusColor = '#6366f1' }) => {
  const { updateApplicationStatus, deleteApplication } = useContext(ApplicationContext);
  const [hovered, setHovered] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const handleStatusChange = (e) => {
    updateApplicationStatus(application._id, e.target.value);
  };

  const handleDelete = async (e) => {
    e.stopPropagation();
    setDeleting(true);
    await deleteApplication(application._id);
  };

  const appliedDate = formatDate(application.appliedDate || application.createdAt);

  return (
    <div
      className="glass-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: '14px',
        padding: '14px',
        position: 'relative',
        opacity: deleting ? 0.4 : 1,
        borderLeft: `3px solid ${statusColor}`,
        cursor: 'grab',
        userSelect: 'none',
      }}
    >
      {/* Delete button */}
      <button
        onClick={handleDelete}
        style={{
          position: 'absolute', top: '10px', right: '10px',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.2s ease',
          background: 'rgba(244,63,94,0.15)',
          border: '1px solid rgba(244,63,94,0.25)',
          color: '#f43f5e',
          borderRadius: '6px',
          width: '24px', height: '24px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', fontSize: '14px', lineHeight: 1,
        }}
        title="Delete"
      >
        ×
      </button>

      {/* Role */}
      <div style={{
        fontSize: '14px', fontWeight: '700', color: '#e8e8f8',
        marginBottom: '6px', paddingRight: '28px',
        letterSpacing: '-0.2px', lineHeight: '1.4',
      }}>
        {application.role}
      </div>

      {/* Company */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '6px',
        fontSize: '12px', color: '#6666888', marginBottom: '12px',
        fontWeight: '500',
      }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9,22 9,12 15,12 15,22" />
        </svg>
        <span style={{ color: '#7777aa' }}>{application.company}</span>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Date badge */}
        {appliedDate && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '5px',
            fontSize: '11px', color: '#44445a', fontWeight: '500',
          }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {appliedDate}
          </div>
        )}

        {/* Status select */}
        <select
          className="status-select"
          value={application.status}
          onChange={handleStatusChange}
          onClick={(e) => e.stopPropagation()}
        >
          {STATUS_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ApplicationCard;
