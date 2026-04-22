// FilterBar.jsx — platform + neighborhood filter pills
const FilterBar = ({ platforms, hoods, activePlatform, activeHoods, onPlatform, onHood }) => {
  const pill = (label, isActive, color, onClick) => {
    const base = {
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10, letterSpacing: 1, textTransform: 'uppercase',
      padding: '8px 16px', borderRadius: 999, cursor: 'pointer',
      background: isActive && color ? `${color}26` : isActive ? AC.accentDim : 'transparent',
      border: `1px solid ${isActive ? (color || AC.accent) : AC.border}`,
      color: isActive ? (color || AC.accent) : AC.textDim,
      transition: 'all 0.2s ease',
    };
    return <button key={label} onClick={onClick} style={base}>{label}</button>;
  };

  const sep = <span style={{ width: 1, height: 20, background: AC.border, alignSelf: 'center', display: 'inline-block' }} />;

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
      {['all', 'instagram', 'airbnb'].map(p =>
        pill(p === 'all' ? 'All platforms' : p, activePlatform === p, null, () => onPlatform(p))
      )}
      {sep}
      {hoods.map(h =>
        pill(AC.hoodLabels[h] || h, activeHoods.has(h), AC.hoods[h], () => onHood(h))
      )}
    </div>
  );
};

Object.assign(window, { FilterBar });
