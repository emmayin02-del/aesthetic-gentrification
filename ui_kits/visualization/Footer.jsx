// Footer.jsx
const Footer = () => (
  <footer style={{
    textAlign: 'center', padding: '48px 8vw',
    borderTop: `1px solid ${AC.border}`,
    color: AC.textMuted, fontSize: 12, lineHeight: 1.8,
    fontFamily: "'DM Sans', sans-serif",
  }}>
    Aesthetic Cartography — Master Thesis Visualization<br />
    Media Studies, University of Amsterdam, 2026<br />
    Data: <a href="https://insideairbnb.com" target="_blank" style={{ color: AC.accent }}>InsideAirbnb</a>
    {' '}+ Instagram via Zeeschuimer
  </footer>
);

Object.assign(window, { Footer });
