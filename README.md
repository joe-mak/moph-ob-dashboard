# MOPH OB Dashboard

ระบบเฝ้าระวังห้องคลอดระดับจังหวัด — Provincial Labor Room Monitoring System

**Live:** https://joe-mak.github.io/moph-ob-dashboard/

---

## Tech Stack

| Layer | Library |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS v4 |
| Routing | React Router (HashRouter) |
| Charts | Recharts |
| UI Components | HeroUI, MUI, Radix UI |
| Icons | Lucide React |
| Deployment | GitHub Pages via GitHub Actions |

---

## Pages

| Route | Description |
|---|---|
| `/` | Dashboard — provincial overview, charts, hospital network |
| `/labor-room` | Labor Room — province → hospital → patient drill-down |
| `/high-risk` | High Risk — filtered list of high/moderate risk pregnancies |
| `/hospital-summary` | Hospital Summary — full hospital stats table |
| `/patient/:cid` | Patient Detail |
| `/anc/:cid` | ANC History |

---

## Getting Started

```bash
cd react-starter
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---

## Deployment

Pushes to `main` automatically trigger GitHub Actions to build and deploy to GitHub Pages.

The Vite `base` is set to `/moph-ob-dashboard/` in `vite.config.ts`.
HashRouter is used so all routes resolve correctly on static hosting.

---

## Changelog

### [0.3.0] — 2026-03-12

#### Added
- **Logo** — replaced Baby icon with `Logo_MOPHOB_1.png` in sidebar and browser favicon
- **Animation system** — CSS keyframe animations in `index.css`:
  - `fadeInUp`, `fadeIn`, `slideInLeft`, `scaleIn`, `pulseDot`
  - Delay utility classes `.delay-50` through `.delay-500`
- **Page transitions** — every route change triggers a smooth `fadeInUp` via `key={location.pathname}`
- **Staggered entrance** — sidebar nav items, Dashboard stat cards, and hospital cards animate in sequence

#### Changed
- **Sidebar redesign** — light pink background (`#FFF0F5`) with rose borders; active nav item uses white card with pink text and drop shadow
- **Header alignment** — sidebar logo section and top header both fixed at `h-16` for perfect horizontal alignment
- **Stat cards** — `hover:-translate-y-0.5` lift effect on hover
- **Online status** — Wifi icon pulses continuously for online hospitals

---

### [0.2.1] — 2026-03-12

#### Changed
- Browser tab title updated to **MOPH OB Dashboard**

#### Fixed
- White page on GitHub Pages — switched from `BrowserRouter` to `HashRouter`

---

### [0.2.0] — 2026-03-12

#### Added
- GitHub Actions workflow (`.github/workflows/deploy.yml`) — auto-deploys to GitHub Pages on push to `main`
- Vite `base` config set to `/moph-ob-dashboard/`

#### Fixed
- Workflow file moved to repo root `.github/` so GitHub picks it up
- `cache-dependency-path` and `working-directory` set for monorepo structure

---

### [0.1.0] — 2026-03-10

#### Added
- Initial MOPH OB Dashboard scaffold
- Pages: Dashboard, Labor Room, High Risk, Hospital Summary, Patient Detail, ANC History
- Sticky sidebar with Thai navigation labels
- Sidebar fixed at `100vh`, page content scrolls independently
- Scrollbar hidden at rest, reveals pink on hover
- Thailand province map with drill-down interaction
- Mock data for provinces, hospitals, and patients
- Google Sans + Noto Sans Thai font stack
- MUI, HeroUI, and Radix UI providers

---

## License

Internal — Ministry of Public Health Thailand
