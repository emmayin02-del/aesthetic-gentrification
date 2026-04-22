// Nav.jsx — sticky section navigation tabs
const Nav = ({ tabs, active, onSelect }) => {
  const navStyles = {
    nav: {
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(10,10,15,0.92)', backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${AC.border}`,
      display: 'flex', justifyContent: 'center',
    },
  };

  return (
    <nav style={navStyles.nav}>
      {tabs.map(t => {
        const isActive = t.id === active;
        return (
          <button
            key={t.id}
            onClick={() => onSelect(t.id)}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, letterSpacing: 2, textTransform: 'uppercase',
              color: isActive ? AC.accent : AC.textMuted,
              padding: '18px 32px', cursor: 'pointer', background: 'none',
              border: 'none',
              borderBottom: isActive ? `2px solid ${AC.accent}` : '2px solid transparent',
              transition: 'all 0.3s ease',
            }}
          >
            {t.label}
          </button>
        );
      })}
    </nav>
  );
};

Object.assign(window, { Nav });
