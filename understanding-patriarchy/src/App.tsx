/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Compass, 
  HelpCircle, 
  ChevronDown, 
  Eye, 
  Sparkles, 
  Quote, 
  Moon, 
  Sun, 
  Volume2, 
  VolumeX, 
  CheckCircle,
  Hash,
  Scale,
  ArrowRight,
  Info,
  Menu,
  X
} from 'lucide-react';

/* Children visualizers */
import IntroductionBubbleQuiz from './components/IntroductionBubbleQuiz';
import SystemDiagram from './components/SystemDiagram';
import GearsTimeline from './components/GearsTimeline';
import WomenExperienceSplit from './components/WomenExperienceSplit';
import CorporatePyramid from './components/CorporatePyramid';
import PrivilegePyramid from './components/PrivilegePyramid';
import TimelineHistory from './components/TimelineHistory';
import ArmorVisualizer from './components/ArmorVisualizer';
import PerspectiveExplorer from './components/PerspectiveExplorer';
import NetworkBg from './components/NetworkBg';
import DeeperRealityMap from './components/DeeperRealityMap';

interface Section {
  id: string;
  label: string;
  subLabel: string;
  theme: 'beige' | 'slate' | 'navy' | 'dark' | 'gold';
}

const SECTIONS: Section[] = [
  { id: 'hero', label: 'Welcome', subLabel: 'Where It All Begins', theme: 'beige' },
  { id: 'section-1', label: 'First Thoughts', subLabel: 'Testing Our Assumptions', theme: 'beige' },
  { id: 'section-2', label: 'System Rules', subLabel: 'How Inside Software Runs', theme: 'beige' },
  { id: 'section-3', label: 'Cultural Gears', subLabel: 'Invisible Power in Motion', theme: 'beige' },
  { id: 'section-4', label: 'City Spaces', subLabel: 'Hidden Norms in Plain Sight', theme: 'slate' },
  { id: 'section-5', label: 'Workplace Walls', subLabel: 'Unseen Systemic Limits', theme: 'slate' },
  { id: 'section-6-7', label: 'Unpacking Privilege', subLabel: 'Beyond the Surface', theme: 'navy' },
  { id: 'section-8', label: 'Legal Archives', subLabel: 'Tracing the Roots of Power', theme: 'navy' },
  { id: 'section-9', label: 'Cost of Armor', subLabel: 'How Patriarchy Hurts Men', theme: 'dark' },
  { id: 'section-10-11', label: 'Three Perspectives', subLabel: 'Angles on Structural Shift', theme: 'dark' },
  { id: 'section-12', label: 'Interactive Web', subLabel: 'Mapping the Whole System', theme: 'gold' },
  { id: 'section-13', label: 'Reflection', subLabel: 'Framing the Path Forward', theme: 'beige' }
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [hasReducedMotion, setHasReducedMotion] = useState<boolean>(false);
  const [readingProgress, setReadingProgress] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
  // Track scroll positions of elements
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      // 1. Calculate reading scroll progress strictly
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setReadingProgress(scrolled);

      // 2. Identify currently active visible section
      let currentSection = 'hero';
      const scrollBuffer = window.innerHeight * 0.45; // trigger halfway

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

  const scrollToSection = (id: string) => {
    const el = sectionRefs.current[id];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Map section themes to elegant tailwind inline background transitions
  const getThemeBackground = () => {
    const currentTheme = SECTIONS.find(s => s.id === activeSection)?.theme || 'beige';
    switch (currentTheme) {
      case 'slate':
        return 'bg-gradient-to-b from-[#f5f1e8] via-[#e2e8f0] to-[#cbd5e1] text-[#1e293b]';
      case 'navy':
        return 'bg-gradient-to-b from-[#cbd5e1] via-[#f1f5f9] to-[#ffffff] text-[#2c2a29]';
      case 'dark':
        return 'bg-gradient-to-b from-[#ffffff] via-[#fafaf9] to-[#f4f4f5] text-[#2c2a29]';
      case 'gold':
        return 'bg-gradient-to-b from-[#faf6e8] via-[#fdfbf6] to-[#f4eedc] text-stone-900';
      default:
        // 'beige' or beginning warmtones
        return 'bg-[#faf8f5] text-[#2c2a29]';
    }
  };

  const getSidebarNumColor = (sectionId: string, isActive: boolean) => {
    if (isActive) return 'bg-[#8c7851] text-white';
    return 'bg-stone-200/80 text-stone-600 group-hover:bg-stone-300';
  };

  const getSidebarLabelColor = (isActive: boolean) => {
    if (isActive) return 'text-[#8c7851] font-bold';
    return 'text-stone-500 group-hover:text-stone-850';
  };

  return (
    <div className={`min-h-screen transition-all duration-1000 ${getThemeBackground()} selection:bg-amber-500/30 selection:text-inherit`}>
      
      {/* 1. Header Navigation HUD / Reading Progress Line */}
      <nav id="nyt-head-hud" className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-stone-200/50 flex flex-col pt-3 pb-2.5 px-4 md:px-8 text-[#2c2a29]">
        <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="font-serif font-bold tracking-tight text-lg leading-none border-r border-stone-300 pr-3.5 text-stone-800 whitespace-nowrap">
              Asmitha T M
            </span>
            <span className="font-display font-medium text-[10px] tracking-widest text-[#8c7851] uppercase hidden sm:inline">
              Sociological Inquiries
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-stone-400 uppercase hidden md:inline mr-1">
              Est. Reading time: 14 mins
            </span>

            {/* Quick-navigation Menu Button */}
            <div className="relative">
              <button
                id="menu-toggle-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-mono font-medium transition-all cursor-pointer shadow-xs"
              >
                {isMenuOpen ? <X size={13} /> : <Menu size={13} />}
                <span>Chapters</span>
                <ChevronDown size={11} className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-64 bg-white border border-[#e8dfc4] rounded-xl shadow-xl py-2 z-55 max-h-[80vh] overflow-y-auto"
                  >
                    <div className="px-4 py-1.5 border-b border-stone-100 mb-1">
                      <span className="font-mono text-[9px] uppercase tracking-wider text-[#8c7851] font-bold">
                        Navigate Chapters
                      </span>
                    </div>
                    {SECTIONS.map((sect, idx) => {
                      const isActive = activeSection === sect.id;
                      return (
                        <button
                          key={sect.id}
                          id={`menu-nav-${sect.id}`}
                          onClick={() => {
                            scrollToSection(sect.id);
                            setIsMenuOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 hover:bg-stone-50 transition-colors flex items-start gap-2.5 cursor-pointer ${
                            isActive ? 'bg-[#f4eedc]/40 text-[#8c7851]' : 'text-[#3a322d]'
                          }`}
                        >
                          <span className={`font-mono text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shrink-0 ${
                            isActive ? 'bg-[#8c7851] text-white' : 'bg-stone-100 text-stone-500'
                          }`}>
                            {idx + 1}
                          </span>
                          <div className="flex flex-col min-w-0">
                            <span className={`text-[11px] font-semibold leading-tight ${isActive ? 'text-[#8c7851]' : 'text-stone-800'}`}>
                              {sect.label}
                            </span>
                            <span className="text-[9px] text-stone-400 mt-0.5 truncate leading-none">
                              {sect.subLabel}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Dynamic scroll progress level line */}
        <div className="w-full bg-stone-150 h-0.5 mt-2.5">
          <motion.div 
            id="scrolled-hud-indicator"
            className="h-full bg-amber-500"
            style={{ width: `${readingProgress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>
      </nav>

      {/* 3. Hero Section (Layer 1 - Dynamic network expansion) */}
      <header
        ref={(el) => { sectionRefs.current['hero'] = el; }}
        id="hero-section"
        className="min-h-screen relative flex flex-col justify-center items-center text-center px-4 md:px-8 py-24 bg-[#faf8f5] text-[#2c2a29] overflow-hidden"
      >
        {/* Dynamic network visualizer backdrop */}
        <NetworkBg interactive={true} highlightCategory="all" expansionFactor={readingProgress / 100} className="opacity-40" />

        <div className="max-w-3xl space-y-8 relative z-25">
          <div className="space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-700 bg-amber-50 px-3.5 py-1.5 rounded-full font-semibold border border-amber-100">
              Interactive Sociological Documentary
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold tracking-tighter text-[#2a2522] mt-4 leading-[1.08] max-w-2xl mx-auto">
              Understanding Patriarchy
            </h1>
            <p className="font-serif text-xl md:text-2xl text-[#8c7851] italic mt-2">
              What It Is, How It Affects Women & Men, and Who Benefits From It
            </p>
          </div>

          {/* New York Times decorative dividing line */}
          <div className="w-16 h-1 bg-[#8c7851] mx-auto rounded" />

          <p className="font-sans text-stone-600 text-sm md:text-md max-w-xl mx-auto leading-relaxed">
            A system. A history. A debate. A reality far more complex than most people realize. Scroll downward to disassemble the concentric gears of one of humanity's oldest social operating systems.
          </p>

          <div className="pt-6 animate-bounce">
            <button
              id="scroll-lead-btn"
              onClick={() => scrollToSection('section-1')}
              className="p-3.5 rounded-full border border-stone-200 hover:border-stone-400 bg-white shadow-xs cursor-pointer text-stone-500 hover:text-stone-800 transition duration-300"
            >
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* SECTION 1: Introduction (PDF page 1) */}
      <section
        ref={(el) => { sectionRefs.current['section-1'] = el; }}
        id="section-1"
        className="min-h-screen py-20 bg-[#faf8f5] flex items-center relative"
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="col-span-1 lg:col-span-5 space-y-6">
            <div className="inline-flex gap-2 items-center">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-stone-400">Chapter I — Introduction</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-5.5xl text-[#2c2a29] font-semibold leading-tight tracking-tight">
              A System Under Audit
            </h2>

            <p className="font-sans text-sm md:text-md text-stone-600 leading-relaxed">
              Patriarchy is one of the most discussed and misunderstood social systems in the modern world. Some people view it as a system that oppresses women. Others argue that men suffer under it too.
            </p>

            <blockquote className="border-l-3 border-[#8c7851] pl-5 italic font-serif text-md text-stone-700">
              "If patriarchy hurts both women and men, why has it survived for so long? And who actually benefits from it?"
            </blockquote>

            <p className="font-sans text-sm text-stone-500 leading-relaxed">
              To answer these questions properly, we must bypass defensive social-media noise and look strictly at systemic software.
            </p>
          </div>

          <div className="col-span-1 lg:col-span-7">
            {/* Perception bubble map */}
            <IntroductionBubbleQuiz onProgress={() => scrollToSection('section-2')} />
          </div>
        </div>
      </section>

      {/* SECTION 2: What is Patriarchy & Concentric circles (PDF page 1, 2) */}
      <section
        ref={(el) => { sectionRefs.current['section-2'] = el; }}
        id="section-2"
        className="min-h-screen py-20 bg-[#faf8f5] border-t border-[#e8dfc4]/40 flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center mb-12 space-y-3">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851]">Chapter II — Definition</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-5.5xl text-stone-900 tracking-tight font-semibold leading-tight">
              What Is Patriarchy Really?
            </h2>
            <p className="font-sans text-sm text-stone-600">
              Patriarchy is a social system in which men, masculinity, and traditionally male roles are given greater authority, status, and legitimacy than women and femininity.
            </p>
          </div>

          {/* Concentric rings systems dashboard */}
          <SystemDiagram />

          <div className="max-w-2xl mx-auto mt-12 p-6 bg-white border border-[#e8dfc4] rounded-2xl md:p-8 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#2c2a29] flex items-center gap-2">
              <Info size={18} className="text-[#8c7851]" />
              Belief Matrices in the Background
            </h4>
            <p className="text-sm text-stone-500 font-sans leading-relaxed">
              The important thing to understand is that patriarchy is not simply "men being bad to women." It is a much larger system of beliefs, expectations, habits, institutions, and social conditioning that influences both men and women. These expectations run quietly, even when nobody consciously intends harm.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-3 border-t border-stone-100">
              <div className="text-xs text-stone-600 font-sans italic">
                • "A man should lead the family."<br />
                • "A woman should adjust more."<br />
                • "A successful woman is intimidating."
              </div>
              <div className="text-xs text-stone-600 font-sans italic">
                • "A good mother sacrifices her career."<br />
                • "A son carries the family legacy."<br />
                • "A husband helping with chores is exceptional."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: How Patriarchy Works & Gears Timeline (PDF page 1, 2) */}
      <section
        ref={(el) => { sectionRefs.current['section-3'] = el; }}
        id="section-3"
        className="min-h-screen py-20 bg-[#faf8f5] border-t border-[#e8dfc4]/40 flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10 space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851]">Chapter III — Operational software</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-5.5xl text-stone-900 tracking-tight font-semibold leading-tight">
              The Self-Reproducing Gearbox
            </h2>
            <p className="font-sans text-sm text-stone-500">
              Think of patriarchy as invisible software running in society. People may genuinely believe they are modern and progressive, yet still operate according to old assumptions.
            </p>
          </div>

          <GearsTimeline />

          <div className="max-w-2xl mx-auto text-center mt-10 p-5 border border-stone-200/80 rounded-xl bg-white/50 text-xs text-stone-500 font-sans leading-relaxed">
            "A father may educate his daughter and support her career but still expect her to relocate after marriage. A husband may support his wife's promotion but unconsciously assume childcare is primarily her responsibility. A female manager may judge younger women more harshly because she herself was forced to survive under patriarchal standards."
          </div>
        </div>
      </section>

      {/* MIDWAY COLOR PROGRESSION SHIFTS INTRODUCTIONS */}
      {/* SECTION 4: How women experience patriarchy (PDF page 2, 3, 4) */}
      <section
        ref={(el) => { sectionRefs.current['section-4'] = el; }}
        id="section-4"
        className="min-h-screen py-24 transition-colors duration-1000 flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl mb-8 space-y-2 text-center md:text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-2.5 py-0.5 rounded">Chapter IV — The Urban Metre</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-5.5xl tracking-tight font-semibold mt-3 leading-tight text-stone-900">
              Expectation Grids in Urban Life
            </h2>
          </div>

          <WomenExperienceSplit />
        </div>
      </section>

      {/* SECTION 5: Patriarchy in Corporate Spaces (PDF page 5, 6, 7) */}
      <section
        ref={(el) => { sectionRefs.current['section-5'] = el; }}
        id="section-5"
        className="min-h-screen py-24 transition-colors duration-1000 flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl mb-8 text-center md:text-left space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-2.5 py-0.5 rounded">Chapter V — Corporate Spaces</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-5.5xl tracking-tight font-semibold mt-3 leading-tight text-stone-900">
              The Institutionalized Glass Corridor
            </h2>
          </div>

          <CorporatePyramid />
        </div>
      </section>

      {/* SECTION 6 & 7: Who benefits & Misconceptions cards (PDF page 8, 9) */}
      <section
        ref={(el) => { sectionRefs.current['section-6-7'] = el; }}
        id="section-6-7"
        className="min-h-screen py-24 transition-colors duration-1000 flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl mb-8 text-center md:text-left space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-2 py-0.5 rounded">Chapter VI & VII — Privilege & Allocation</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-5.5xl tracking-tight font-semibold mt-3 text-[#2a2522] leading-tight">
              The Layers of Advantage
            </h2>
          </div>

          <PrivilegePyramid />
        </div>
      </section>

      {/* SECTION 8: Historical advantages given (PDF page 9, 10) */}
      <section
        ref={(el) => { sectionRefs.current['section-8'] = el; }}
        id="section-8"
        className="min-h-screen py-24 transition-colors duration-1000 flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl mb-8 text-center md:text-left space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-700 bg-amber-500/10 px-2.5 py-0.5 rounded font-medium font-semibold">Chapter VIII — Vintage Precedence</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-5.5xl tracking-tight font-semibold mt-3 text-[#2a2522] leading-tight">
              The History of Legal Bias
            </h2>
          </div>

          <TimelineHistory />
        </div>
      </section>

      {/* SECTION 9: How Men Suffer (PDF page 10, 11, 12) */}
      <section
        ref={(el) => { sectionRefs.current['section-9'] = el; }}
        id="section-9"
        className="min-h-screen py-24 transition-colors duration-1000 flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl mb-8 text-center md:text-left space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-700 bg-amber-500/10 px-2.5 py-0.5 rounded font-medium font-semibold">Chapter IX — Masculine Conditioning</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-5.5xl tracking-tight font-semibold mt-3 text-[#2a2522] leading-tight">
              The Burden of Forced Strength
            </h2>
          </div>

          <ArmorVisualizer />
        </div>
      </section>

      {/* SECTION 10 & 11: Perspective branches defense vs critique (PDF page 12, 13) */}
      <section
        ref={(el) => { sectionRefs.current['section-10-11'] = el; }}
        id="section-10-11"
        className="min-h-screen py-24 transition-colors duration-1000 flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl mb-8 text-center md:text-left space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-2 py-0.5 rounded font-medium">Chapter X & XI — Structural Inquiries</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-5.5xl tracking-tight font-semibold mt-3 text-[#2a2522] leading-tight">
              Branches of Sociological Thought
            </h2>
          </div>

          <PerspectiveExplorer />
        </div>
      </section>

      {/* SECTION 12: The Deeper Reality (Climax map) (PDF page 14) */}
      <section
        ref={(el) => { sectionRefs.current['section-12'] = el; }}
        id="section-12"
        className="min-h-screen py-24 transition-colors duration-1000 flex items-center"
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          <div className="max-w-2xl mb-8 text-center md:text-left space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-800 bg-amber-500/10 px-2.5 py-0.5 rounded font-medium">Chapter XII — Climax Core</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-5.5xl tracking-tight font-semibold mt-3 text-amber-950 leading-tight">
              The Interconnected System Map
            </h2>
          </div>

          <DeeperRealityMap />
        </div>
      </section>

      {/* SECTION 13: Conclusion Summary with low motion & ample space (PDF page 14) */}
      <section
        ref={(el) => { sectionRefs.current['section-13'] = el; }}
        id="section-13"
        className="min-h-screen py-24 bg-[#faf8f5] text-[#2c2a29] flex items-center"
      >
        <div className="w-full max-w-3xl mx-auto px-4 py-8 space-y-16">
          
          {/* Refined editorial quote block */}
          <div className="text-center space-y-5">
            <span className="font-mono text-xs uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full font-semibold">
              Silent Reflection
            </span>
            <h3 className="font-serif text-3xl md:text-5xl font-italic italic text-stone-850 mt-4 leading-snug">
              "Understanding a system is not the same as blaming individuals."
            </h3>
            <div className="w-12 h-0.5 bg-stone-300 mx-auto my-4" />
            <p className="font-sans text-sm text-stone-500 tracking-wide uppercase">
              Complex problems require nuanced conversations.
            </p>
          </div>

          <div className="space-y-6 text-stone-605 text-sm font-sans leading-relaxed">
            <p>
              The deepest form of patriarchy is not when someone openly says: <span className="font-serif italic">"Women are inferior."</span> It is when assumptions become so normalized that nobody notices them anymore.
            </p>
            <p>
              When a woman feels guilty for prioritizing her career, or a man feels guilty for prioritizing caregiving, even though neither choice harms anyone—that is often where the invisible influence of patriarchy becomes most powerful.
            </p>

            <div className="p-6 bg-[#f4eedc] border border-[#e8dfc4] rounded-2xl space-y-3.5 my-8">
              <span className="font-display font-medium text-xs text-[#3a322d] tracking-wider uppercase block">
                The Question Modern Societies Wrestle With
              </span>
              <p className="font-serif italic text-md text-stone-900 leading-relaxed">
                "How do we preserve responsibility, commitment, family stability, and social cohesion without unnecessarily restricting either men or women?"
              </p>
            </div>

            <p>
              That is a much deeper and more difficult question than simply being for or against patriarchy. It is an opportunity to design human pathways together without artificial, rigid limits.
            </p>
          </div>

          <div className="pt-8 border-t border-stone-200 text-center space-y-4">
            <h4 className="font-serif text-2xl text-stone-800">
              What kind of society do we want to build together?
            </h4>
            <p className="text-xs text-[#8c7851] font-mono uppercase tracking-widest font-semibold">
              Sociological Blog & Portfolio — Authored by Asmitha T M
            </p>
          </div>

        </div>
      </section>

      {/* Footer credits info bar */}
      <footer className="bg-stone-900 text-stone-400 border-t border-stone-800 py-10 px-4 text-center text-xs font-mono">
        <p>© 2026 Asmitha T M · Crafted with curiosity and care.</p>
        <p className="text-[10px] text-stone-500 mt-1.5">A compilation of sociological research and personal reflections on systemic structures.</p>
      </footer>

    </div>
  );
}
