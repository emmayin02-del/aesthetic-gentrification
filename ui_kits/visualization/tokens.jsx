// Aesthetic Cartography — Shared tokens & utilities
// Import in each component: <script type="text/babel" src="tokens.jsx">

const AC = {
  bg: '#0a0a0f',
  surface: '#13131a',
  surface2: '#1a1a24',
  border: '#2a2a3a',
  text: '#e8e6e3',
  textDim: '#8a8898',
  textMuted: '#5a5868',
  accent: '#c8a882',
  accentDim: 'rgba(200,168,130,0.15)',
  hoods: {
    de_pijp:            '#d4886a',
    jordaan:            '#d4a76a',
    shoreditch:         '#7aa3c8',
    hackney:            '#6a98b8',
    shimokitazawa:      '#a8c87a',
    kiyosumi_shirakawa: '#7ac896',
  },
  hoodLabels: {
    de_pijp:            'De Pijp',
    jordaan:            'Jordaan',
    shoreditch:         'Shoreditch',
    hackney:            'Hackney',
    shimokitazawa:      'Shimokitazawa',
    kiyosumi_shirakawa: 'Kiyosumi-Shirakawa',
  },
};

Object.assign(window, { AC });
