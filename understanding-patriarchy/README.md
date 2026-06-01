# Sociological Systems Map: Exploring Patriarchy & Ideology

A highly polished, interactive, modern React-based educational application that functions as a single-page immersive sociological analysis. The app provides a high-fidelity visual and analytical dive into the systemic layers, cultural expectations, historical roots, and economic ledger of patriarchy and gender role structures, crafted with premium editorial typography and responsive fluid interactions.

## 🌟 Overview

This application serves as an interactive editorial documentary that leads the reader through **14 Chapters** of sociological paradigms. By using dynamic widgets, responsive visualization layers, a complete step-by-step progress framework, and high-fidelity physics or structural simulations, it turns academic theories into a tangible, self-paced exploration.

The project is built on the philosophy of **Liberation Over Blame**: understanding patriarchy as an inherited, outdated social operating system that constrains and shapes opportunities, behaviors, and behaviors across *all* genders.

---

## 🛠️ Key Educational Modules

The application is modularly split into specialized interactive components:

1. **Perception Mapping (`IntroductionBubbleQuiz`)**: An analytical cloud where users click on common concepts associated with systemic gender issues to dissect their specific "Critical Question," "Underlying Phenomenon," and "Cycle-Fueling Mechanism."
2. **Everyday Expectations Grid (`EverydayExpectations`)**: Focuses on daily scenarios across Marriage, Family, and the Workplace, highlighting the invisible dual standards.
3. **Corporate Leadership Pipeline (`CorporatePyramid`)**: Shows the "pipeline leak" from Entry Level to Senior Leadership alongside active barriers and regional city metrics.
4. **Cultural Gears (`GearsTimeline`)**: A custom timeline showcasing how socialization, institutional leverage, and cultural narratives interlink like gears.
5. **System Rules & Structural Map (`SystemDiagram`)**: A clean node-link flowchart visualizing how inputs, feedback loops, and outcomes construct the social matrix.
6. **Legislation Archives (`TimelineHistory`)**: An interactive legal history tracing gender equity milestones and historical acts.
7. **Cost of Armor (`ArmorVisualizer` & `MenHarmVisualizer`)**: Exploration of patriarchy's harmful side-effects on men, illustrating the physiological/social weight of the "man box" rules.
8. **Interconnected Deeper Reality (`DeeperRealityMap`)**: The climax visualizer showing mutual ecosystems and actionable personal changes.

---

## 🚀 Technical Stack & Architecture

- **Core Framework**: React 19 (Single-Page App) + TypeScript
- **State & Animation**: `motion` (Framer Motion) for staggered transitions, page flows, and layout animations
- **Styling**: Tailwind CSS v4 utilizing custom modern typography variables (Inter & serif-display pairings)
- **Icons**: Lucide React
- **Build System**: Vite v6 with ES Module resolution and type checking (`tsc --noEmit` linter)

---

## 📁 Project Directory Structure

```text
/
├── .env.example              # Environment variables template
├── index.html                # HTML document entry point
├── package.json              # Dependency configurations and build scripts
├── tsconfig.json             # TypeScript settings
├── vite.config.ts            # Vite config coupled with Tailwind CSS plugin
├── TECHNICAL_REPORT.md       # Comprehensive Architecture/Software Architect details
└── src/
    ├── App.tsx               # Main viewport, scroll triggers, HUD & navigation drawer
    ├── types.ts              # Shared Type definitions, records, and constants
    ├── index.css             # Tailwind setup, custom themes, and font loaders
    ├── main.tsx              # React mounting root
    └── components/           # Extracted interactive visualizers & metrics cards
        ├── IntroductionBubbleQuiz.tsx
        ├── EverydayExpectations.tsx
        ├── CorporatePyramid.tsx
        ├── DeeperRealityMap.tsx
        ├── SystemDiagram.tsx
        ├── GearsTimeline.tsx
        ├── WomenExperienceSplit.tsx
        ├── PrivilegePyramid.tsx
        ├── TimelineHistory.tsx
        ├── ArmorVisualizer.tsx
        ├── MenHarmVisualizer.tsx
        ├── PerspectiveExplorer.tsx
        ├── SystemicLedger.tsx
        └── NetworkBg.tsx
```

---

## ⚙️ Getting Started

To run this application locally, ensure you have **Node.js (v18+)** and **npm** installed, then complete the following steps:

### 1. Clone & Navigate
```bash
git clone <repository-url>
cd <project-directory>
```

### 2. Install Project Dependencies
```bash
npm install
```

### 3. Run Development Server
Spins up the local Vite development server with hot module replacement (HMR), bound to port `3000` (required by the sandboxed hosting layers):
```bash
npm run dev
```
Open **`http://localhost:3000`** in your browser to inspect the application.

### 4. Create Production Build
Bundles the assets into the `/dist` output directory using high-performance assets optimization:
```bash
npm run build
```

### 5. Check Code & Types Safety (Linting)
Runs TypeScript validation against the whole code structure:
```bash
npm run lint
```

---

## 🧩 Architectural Design Philosophy

- **Zero-Accidental-State-Re-renders**: All hooks and state transitions are decoupled or primitive-bound to prevent heavy repaint cost during parallax scrolling.
- **Semantic Color Coding**: Theme states use warm muted tones (`beige`, `slate`, `navy`, `dark`, `gold`) passing through gradients dynamically according to viewport reading progress.
- **Deep Accessibility**: The application uses robust contrast levels on interactive panels, keyboard-friendly triggers, and respects native accessibility setups.

---

## 📝 Editorial Documentation & Credits

For an exhaustive architectural, software engineering, and technical design breakdown, please refer inline to [TECHNICAL_REPORT.md](./TECHNICAL_REPORT.md).
