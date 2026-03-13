# Changelog

All notable changes to **MOPH OB Dashboard** are documented here.

---

## [Unreleased]

---

## [0.3.0] — 2026-03-12

### Added
- **Logo** — replaced Baby icon with `Logo_MOPHOB_1.png` in sidebar and browser favicon
- **Animations** — CSS keyframe animation system added to `index.css`:
  - `fadeInUp`, `fadeIn`, `slideInLeft`, `scaleIn`, `pulseDot`
  - Delay utility classes: `.delay-50` through `.delay-500`
- **Page transitions** — every route change triggers a smooth `fadeInUp` via `key={location.pathname}`
- **Staggered entrance** — sidebar nav items, Dashboard stat cards, and hospital network cards each animate in sequence

### Changed
- **Sidebar redesign** — background changed to light pink (`#FFF0F5`) with rose borders (`#FADADD`); active nav item uses white card with pink text and drop shadow
- **Header alignment** — sidebar logo section and top header both set to `h-16` so they align on the same horizontal band
- **Stat cards** — added `hover:-translate-y-0.5` lift effect on hover
- **Online status** — Wifi icon pulses continuously for online hospitals

---

## [0.2.1] — 2026-03-12

### Changed
- Browser tab title updated to **MOPH OB Dashboard**

### Fixed
- White page on GitHub Pages — switched from `BrowserRouter` to `HashRouter` so route paths resolve correctly on static hosting

---

## [0.2.0] — 2026-03-12

### Added
- **GitHub Actions workflow** (`.github/workflows/deploy.yml`) — auto-builds and deploys to GitHub Pages on every push to `main`
- Vite `base` config set to `/moph-ob-dashboard/` for subdirectory deployment

### Fixed
- Workflow file moved from `react-starter/.github/` to repo root `.github/` so GitHub Actions picks it up correctly
- `cache-dependency-path` and `working-directory` set to `react-starter/` for monorepo structure

---

## [0.1.0] — 2026-03-10

### Added
- Initial MOPH OB Dashboard scaffold — React + Vite + Tailwind CSS
- **Pages:** Dashboard, Labor Room (province → hospital → patient drill-down), High Risk, Hospital Summary, Patient Detail, ANC History
- **Layout** — sticky sidebar with Thai navigation labels (แดชบอร์ด, ห้องคลอด, ความเสี่ยงสูง, สรุปรายโรงพยาบาล)
- **Sidebar** — fixed at `100vh`, does not scroll with page content
- **Scroll behavior** — page content uses `absolute inset-0 overflow-auto` so the viewport never scrolls; only inner list cards scroll
- **Scrollbar styling** — hidden at rest, reveals as pink (`#F8BBD0`) on hover
- Thailand province map with click-to-drill interaction
- Mock data for provinces, hospitals, and patients
- Google Sans + Noto Sans Thai font stack
- MUI, HeroUI, and Radix UI theme providers wired up

---

[Unreleased]: https://github.com/joe-mak/moph-ob-dashboard/compare/HEAD...HEAD
[0.3.0]: https://github.com/joe-mak/moph-ob-dashboard/compare/b51c240...2d88d2d
[0.2.1]: https://github.com/joe-mak/moph-ob-dashboard/compare/2282f86...b51c240
[0.2.0]: https://github.com/joe-mak/moph-ob-dashboard/compare/ee323c6...2282f86
[0.1.0]: https://github.com/joe-mak/moph-ob-dashboard/commits/ee323c6
