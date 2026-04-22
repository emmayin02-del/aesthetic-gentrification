// Hero.jsx — Aesthetic Cartography hero section
const Hero = ({ stats }) => {
  const heroStyles = {
    container: {
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '0 8vw', position: 'relative', overflow: 'hidden',
    },
    glow: {
      position: 'absolute', top: '-20%', right: '-10%',
      width: '60vw', height: '60vw',
      background: 'radial-gradient(ellipse, rgba(200,168,130,0.06) 0%, transparent 70%)',
      pointerEvents: 'none',
    },
    eyebrow: {
      fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
      letterSpacing: 4, textTransform: 'uppercase', color: AC.accent,
      marginBottom: 24,
    },
    h1: {
      fontFamily: "'Playfair Display', serif", fontWeight: 400,
      fontSize: 'clamp(2.8rem, 6vw, 5.5rem)', lineHeight: 1.08, color: AC.text,
      maxWidth: '14ch',
    },
    em: { fontStyle: 'italic', color: AC.accent },
    sub: {
      fontFamily: "'DM Sans', sans-serif", fontSize: '1.05rem',
      color: AC.textDim, maxWidth: '52ch', marginTop: 28, lineHeight: 1.65,
    },
    statsRow: { display: 'flex', gap: 48, marginTop: 56, flexWrap: 'wrap' },
    statVal: { fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', color: AC.accent },
    statLbl: {
      fontFamily: "'DM Sans', sans-serif", fontSize: 12,
      color: AC.textMuted, letterSpacing: 1, textTransform: 'uppercase', marginTop: 4,
    },
    scroll: {
      position: 'absolute', bottom: 36, left: '50%', transform: 'translateX(-50%)',
      fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
      letterSpacing: 3, textTransform: 'uppercase', color: AC.textMuted,
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
    },
    scrollLine: {
      width: 1, height: 40, background: AC.border,
    },
  };

  return (
    <section style={heroStyles.container}>
      <div style={heroStyles.glow} />
      <div style={heroStyles.eyebrow}>Media Studies × Computational Analysis</div>
      <h1 style={heroStyles.h1}>
        Aesthetic <em style={heroStyles.em}>Cartography</em>
      </h1>
      <p style={heroStyles.sub}>
        Mapping the visual language of gentrification across Amsterdam, London, and Tokyo — through {stats.images.toLocaleString()} Airbnb and Instagram images, annotated by vision-language models and projected into shared aesthetic space.
      </p>
      <div style={heroStyles.statsRow}>
        {[
          { val: stats.images.toLocaleString(), lbl: 'Images analysed' },
          { val: stats.hoods, lbl: 'Neighborhoods' },
          { val: stats.markers, lbl: 'Visual markers' },
          { val: '3', lbl: 'Cities' },
        ].map(s => (
          <div key={s.lbl}>
            <div style={heroStyles.statVal}>{s.val}</div>
            <div style={heroStyles.statLbl}>{s.lbl}</div>
          </div>
        ))}
      </div>
      <div style={heroStyles.scroll}>
        Scroll to explore
        <div style={heroStyles.scrollLine} />
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
