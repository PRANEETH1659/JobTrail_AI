import React, { useState } from 'react';

const Profile = () => {
  const [skills, setSkills] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    await new Promise((res) => setTimeout(res, 800));
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div style={{ padding: '28px 32px', maxWidth: '860px' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '26px', fontWeight: '800', letterSpacing: '-0.5px',
          background: 'linear-gradient(135deg, #f0f0ff 30%, #8b5cf6)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
          marginBottom: '4px',
        }}>
          Your Profile
        </h1>
        <p style={{ fontSize: '14px', color: '#55557a', fontWeight: '500' }}>
          The AI will use this to match and tailor your cover letters.
        </p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

        {/* Skills */}
        <div style={{
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(12px)',
          overflow: 'hidden',
        }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#6366f1', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Skills
            </div>
          </div>
          <div style={{ padding: '20px' }}>
            <p style={{ fontSize: '13px', color: '#55557a', marginBottom: '12px', lineHeight: '1.6' }}>
              List your top skills, technologies, and tools. Separate with commas.
            </p>
            <input
              type="text"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="e.g. React, Node.js, MongoDB, Python, AWS..."
              style={{
                width: '100%', background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px', padding: '12px 16px',
                color: '#e8e8f8', fontSize: '14px', outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => { e.target.style.borderColor = 'rgba(99,102,241,0.5)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            />
          </div>
        </div>

        {/* Resume */}
        <div style={{
          borderRadius: '16px',
          border: '1px solid rgba(255,255,255,0.06)',
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(12px)',
          overflow: 'hidden',
        }}>
          <div style={{ padding: '16px 20px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#8b5cf6', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
              Resume Text
            </div>
          </div>
          <div style={{ padding: '20px' }}>
            <p style={{ fontSize: '13px', color: '#55557a', marginBottom: '12px', lineHeight: '1.6' }}>
              Paste your raw resume text. The AI uses this as context for match scoring and cover letter generation.
            </p>
            <textarea
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              rows={14}
              placeholder="Paste your full resume here...

Example:
John Doe — Software Engineer
john@email.com | github.com/johndoe

EXPERIENCE
- Frontend Engineer at XYZ Corp (2022–Present)
  Built scalable React dashboards serving 50K+ users..."
              style={{
                width: '100%', background: 'rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '10px', padding: '14px 16px',
                color: '#e8e8f8', fontSize: '13px',
                fontFamily: '"Fira Code", "Cascadia Code", monospace',
                lineHeight: '1.7', outline: 'none', resize: 'vertical',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => { e.target.style.borderColor = 'rgba(139,92,246,0.5)'; }}
              onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            />
          </div>
        </div>

        {/* Save button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button
            type="submit"
            disabled={saving}
            className="btn-primary"
            style={{ minWidth: '160px', justifyContent: 'center' }}
          >
            {saving ? (
              <>
                <span style={{ display: 'inline-block', width: '14px', height: '14px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: 'white', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                Saving...
              </>
            ) : (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                  <polyline points="17,21 17,13 7,13 7,21" />
                  <polyline points="7,3 7,8 15,8" />
                </svg>
                Save Profile
              </>
            )}
          </button>

          {saved && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              fontSize: '13px', color: '#10b981', fontWeight: '600',
              animation: 'fadeIn 0.3s ease',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20,6 9,17 4,12" />
              </svg>
              Profile saved!
            </div>
          )}
        </div>
      </form>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
      `}</style>
    </div>
  );
};

export default Profile;
