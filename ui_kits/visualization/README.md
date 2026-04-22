# Visualization UI Kit

Interactive prototype of the Aesthetic Cartography single-page visualization.

## Components

| File | Description |
|------|-------------|
| `tokens.jsx` | Shared color/label constants (`AC` global) |
| `Hero.jsx` | Full-viewport hero: eyebrow, display headline, stats |
| `Nav.jsx` | Sticky nav tabs with active accent underline |
| `FilterBar.jsx` | Platform + neighborhood filter pills with all states |
| `Footer.jsx` | Site footer with data attribution |
| `index.html` | Full interactive prototype — galaxy + network views |

## Usage

Open `index.html` directly in a browser. No build step required.

Uses synthetic data that mirrors the structure of the real `galaxy_data.json` and `network_data.json` files. To use real data, replace the `makeGalaxyPoints()` and `makeNetworkData()` functions with `fetch()` calls to your actual JSON.

## Design width

Responsive — designed for full viewport. The viz containers run at `calc(100vh - 200px)` so they fill the screen below the header.
