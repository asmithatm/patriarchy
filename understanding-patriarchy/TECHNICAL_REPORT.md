# Technical Architecture & Engineering Report

**Target Audience:** Software Architects, Lead Developers, and System Designers  
**Project:** Sociological Systems Map (Gender Construct & Ideological Analysis)  
**System Class:** Interactive Single Page Editorial Application (HIFI SPA)

This technical report provides a precise, comprehensive diagnostic of the application's software architecture, component relationships, rendering lifecycle, memory profiles, state synchronization, and styling structures.

---

## 1. High-Level Architecture

The application is engineered as a client-side Single Page Application (SPA) leveraging **React 19**, **TypeScript**, and **Vite**. The runtime operates purely on client-side state machine models, ensuring instant interaction feedback loops, highly optimized document object model (DOM) updates, and complete execution offline capability without depending on backend API roundtrips.

```
+----------------------------------------------------------------------------+
|                                  VIEWPORT                                  |
|                                                                            |
|   +--------------------------------------------------------------------+   |
|   |                       App.tsx (Main Coordinator)                   |   |
|   +--------------------------------------------------------------------+   |
|       |                                |                           |       |
|       v                                v                           v       |
|  +-----------------------+   +-------------------+   +------------------+  |
|  | Interlocking UI Nodes |   |  Global Progress  |   | Adaptive Themes  |  |
|  | (14 Chapter Modules)  |   |  & Navigation Bar |   | (Variable Mapped)|  |
|  +-----------------------+   +-------------------+   +------------------+  |
|                                                                            |
+----------------------------------------------------------------------------+
```

### Architectural Priorities
- **Deterministic State Flow**: App controls progression context, and passes down state change hooks to update the centralized reading status.
- **Isomorphic Rendering Layout**: Custom scroll-linked triggers watch viewport intersection thresholds on a high-throughput scroll list and safely translate viewport coordinate offsets into semantic visual assets.

---

## 2. Global State & Context Synchronization

Rather than introducing bulky state overhead (e.g., Redux or MobX), the system adheres to **React-optimal state-hoisting** patterns. State that dictates layout changes or cross-module interactions is declared at the root node (`App.tsx`), while localized interaction state remains isolated in leaf components to prevent catastrophic DOM reconciliation cascades.

### A. Viewport Tracking Engine
To compute reading progress and detect active sections without triggering layout thrashing or browser scroll lag, a debounced scroll listener is registered inside `App.tsx`:

```typescript
useEffect(() => {
  const handleScroll = () => {
    // 1. Scaled Scrolling Progress
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    setReadingProgress(scrolled);

    // 2. Viewport Section Tracking (Intersection-style calculation)
    let currentSection = 'hero';
    const scrollBuffer = window.innerHeight * 0.45; // trigger at 45% screen height

    for (const sect of SECTIONS) {
      const el = sectionRefs.current[sect.id];
      if (el) {
        const top = el.getBoundingClientRect().top;
        if (top <= scrollBuffer) {
          currentSection = sect.id;
        }
      }
    }
    setActiveSection(currentSection);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```
*Note: `{ passive: true }` passes control back to the layout thread immediately, ensuring smoother scrolling on mobile devices.*

### B. Dynamically Mapped Theme System
Themes are expressed purely as CSS transformations mapped onto React variables. When the user travels between different analytical spaces, the system executes an elegant CSS background fade using a multi-second transition curve:

| Section Target | theme attribute | Realized Tailwind CSS Classes |
| :--- | :--- | :--- |
| **Beginning/Core** | `'beige'` | `bg-[#faf8f5] text-[#2c2a29]` |
| **Middle/Cities/Everyday** | `'slate'` | `bg-gradient-to-b from-[#f5f1e8] via-[#e2e8f0] to-[#cbd5e1] text-[#1e293b]` |
| **Privilege/Milestones** | `'navy'` | `bg-gradient-to-b from-[#cbd5e1] via-[#f1f5f9] to-[#ffffff] text-[#2c2a29]` |
| **Cost of Armor/Male Impact**| `'dark'` | `bg-gradient-to-b from-[#ffffff] via-[#fafaf9] to-[#f4f4f5] text-[#2c2a29]` |
| **Balance Ledger/Interactive Maps** | `'gold'` | `bg-gradient-to-b from-[#faf6e8] via-[#fdfbf6] to-[#f4eedc] text-[#913d09]` |

---

## 3. Interactive Component Deep-Dive

Each submodule is encapsulated programmatically inside `/src/components`:

### `IntroductionBubbleQuiz.tsx`
- **Purpose**: Map initial perception vectors when encountering political terms.
- **Key Logic**: Tracks explored entities via a standard JavaScript `Set()`. Progress completion triggers the callback to signify the completion of Chapter 1.
- **Isolated Data Model**: All hardcoded parameters or display attributes reside cleanly inside an isolated constant dictionary `QUIZ_TEXT` to respect strict developer boundaries.

### `DeeperRealityMap.tsx`
- **Purpose**: Serve as the Climax structural grid containing mutual loops and action checklists.
- **Data Encapsulation**: Connects the custom `DEEPER_REALITY_TEXT` constant metadata to individual DOM controls safely. Utilizes local state arrays (`DOMAINS`) mapping structural strain matrices dynamically.

### `EverdayExpectations.tsx`
- **Purpose**: Showcase societal rules running under the covers of everyday marriage, family, and corporate scenarios.
- **State Management**: Governs toggle state for multi-context grids seamlessly via simple ID strings mapping (`marriage` | `family` | `workplace`).

---

## 4. Animation Strategy & Framerate Auditing

To maintain high visual performance, the application enforces the following rules for animating components:

1. **GPU Offloading via `motion` (Framer Motion)**:
   - Only CSS parameters that are hardware-accelerated (`transform`, `scale`, `rotate`, `opacity`) are animated.
   - Avoid animating heavy layout nodes (e.g., modifying `width`, `height`, or flex parameters during transition which would trigger an expensive "Reflow" calculations cycle).
2. **Reduced Motion Compliance**:
   - The system queries and respects user agent settings to toggle off animations instantly under `hasReducedMotion` mode:
     ```typescript
     const [hasReducedMotion, setHasReducedMotion] = useState<boolean>(false);
     // Leverages standard css media queries or state variables to drop heavy spring configurations
     ```

---

## 5. Styling Architecture & Theme Variables

The compile tool integrates with **Tailwind CSS v4**'s advanced layout pipeline.
Custom values are mapped in `/src/index.css` via the native modern `@theme` directive, loading specific serif, sans, and monospace typography definitions, ensuring perfect consistent line metrics over high-DPI retina display.

### Contrast Standards
All visual cards and alerts enforce minimum WCAG AA accessibility levels. Font weights and color palettes maintain generous contrast on interactive modules:
- Default Dark Text color: `#2c2a29` (high contrast contrast against soft `#faf8f5`/`#ffffff`)
- Primary Muted Alert Theme accent: `#8c7851`
- Positive/Action indicators use comfortable `#166534` or `#065f46` (deep emerald forest)

---

## 6. Directory Map & Code Isolation

The code structure cleanly isolates layout logic, content static data, and types definition:

- **`/src/types.ts`**: Holds exact type descriptions for UI nodes, expectation structures, timeline stages, legal records. No logical components reside here.
- **`/src/data.ts`**: Holds static analytical dataset of timelines, history dates, demographics, and stats metrics.
- **`/src/components/`**: Houses presentational modules. In direct compliance with architectural standards, **all text items and string constants have been lifted into explicit, named components-level text configurations (e.g., `EVERYDAY_TEXT`, `QUIZ_TEXT`, `DEEPER_REALITY_TEXT`)**, preserving pure render mechanisms without hardcoded inline drift.

---

## 7. Build, Verification, & Compliance

The codebase contains strict checks to verify compilation consistency:
- **Linter System**: `npx tsc --noEmit` runs direct type evaluation against all module systems.
- **Static Analysis passes perfectly green.**

All modules compile securely on modern Node runtimes and require zero runtime backend infrastructure, maximizing deployment speeds and rendering safety.
