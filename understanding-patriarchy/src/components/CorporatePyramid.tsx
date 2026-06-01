/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Briefcase, 
  Layers, 
  TrendingDown, 
  TrendingUp, 
  Coins, 
  MapPin, 
  Building2, 
  Sparkles, 
  Award, 
  Lock, 
  Users, 
  Info, 
  ChevronRight,
  ChevronLeft,
  ShieldAlert,
  ArrowUpRight,
  ExternalLink,
  X
} from 'lucide-react';

interface ReferenceLink {
  text: string;
  url: string;
}

interface ReferenceCategory {
  title: string;
  links: ReferenceLink[];
}

const referenceData: ReferenceCategory[] = [
  {
    title: "Workforce Representation & Leadership Gap",
    links: [
      {
        text: "Women's Hiring in India Holds at 33%, But Gaps Remain",
        url: "https://www.changeincontent.com/womens-hiring-in-india-33-percent-report/"
      },
      {
        text: "Women remain under-represented at India Inc: Prime Database study",
        url: "https://www.business-standard.com/industry/news/women-still-under-represented-in-top-corporate-roles-prime-database-report-126030700308_1.html"
      },
      {
        text: "India Inc's Women Leadership Gains Slow Despite Strong Ambition",
        url: "https://economictimes.indiatimes.com/news/company/corporate-trends/india-incs-women-leadership-gains-slow-despite-strong-ambition-report/articleshow/128705403.cms"
      },
      {
        text: "Women Are 23% of Workforce, But Only 119 of 2,285 Listed Firms Have Women CEOs",
        url: "https://www.fortuneindia.com/business-news/women-are-23-of-workforce-but-only-119-of-2285-listed-firms-have-women-ceos/131040"
      }
    ]
  },
  {
    title: "Promotion Gap & Workplace Advancement",
    links: [
      {
        text: "Gender Disparity in Promotions Apparent in India",
        url: "https://www.womenentrepreneursreview.com/viewpoint/gender-disparity-in-promotions-apparent-in-india-here-s-what-statistics-say-nwid-4781.html"
      },
      {
        text: "New Study Uncovers Hidden Gender Bias in Workplace Leadership Programs",
        url: "https://www.informs.org/News-Room/INFORMS-Releases/News-Releases/New-Study-Uncovers-Hidden-Gender-Bias-in-Workplace-Leadership-Programs"
      }
    ]
  },
  {
    title: "Motherhood Penalty & Career Breaks",
    links: [
      {
        text: "Maternity Penalty: 75% Mothers Face Career Hurdles After Leave",
        url: "https://www.business-standard.com/india-news/maternity-penalty-75-mothers-face-career-hurdles-after-leave-report-124081000274_1.html"
      },
      {
        text: "Motherhood, Childcare and Wages in India",
        url: "https://www.ideasforindia.in/topics/social-identity/motherhood-childcare-and-wages-in-india"
      },
      {
        text: "Workplace Maternity Benefits Elude 94% Working Indian Women",
        url: "https://www.indiaspend.com/womenwork/workplace-maternity-benefits-elude-94-working-indian-women-919567"
      },
      {
        text: "Restart: Women, Career Breaks and Employer Response",
        url: "https://www.isid.ac.in/~acegd/acegd2024/papers/NandhiniS.pdf"
      }
    ]
  },
  {
    title: "Assertiveness Penalty & Workplace Bias",
    links: [
      {
        text: "The Double Standard of Women's Expression at Work",
        url: "https://newuniversity.org/2026/02/07/the-double-standard-of-womens-expression-at-work/"
      },
      {
        text: "Women & Workplace Bias: Overcoming the 'Too Much' and 'Not Enough' Trap",
        url: "https://globalcoachinglab.com/women-workplace-bias-overcoming-too-much-not-enough-trap/"
      },
      {
        text: "Breaking the Glass Ceiling: Women's Struggle for Leadership in Indian Workplaces",
        url: "https://socio.health/gender-and-society/glass-ceiling-women-leadership-india/"
      },
      {
        text: "Around 42% of Women Surveyed Face Bias at Work",
        url: "https://hr.economictimes.indiatimes.com/news/workplace-4-0/around-42-of-women-surveyed-face-bias-at-work-says-study/112190047"
      }
    ]
  },
  {
    title: "Old Boys' Club & Leadership Networks",
    links: [
      {
        text: "Aon Study Finds Systemic Barriers Limit Women's Progress to Senior Leadership Roles in Corporate India",
        url: "https://www.aon.com/apac/in-the-press/asia-newsroom/2026/aon-study-finds-systemic-barriers-limit-womens-progress-to-senior-leadership-roles-in-corporate-india"
      },
      {
        text: "The Old Boys' Club",
        url: "https://www.theorgplumber.com/papers/old-boys-club/"
      },
      {
        text: "The Old Boys' Club: Schmoozing and the Gender Gap",
        url: "https://anderson-review.ucla.edu/wp-content/uploads/2021/03/Cullen-Perez-Truglia_GenderGap_2019SSRN-id3493478.pdf"
      }
    ]
  },
  {
    title: "Technology Sector & Women in Leadership",
    links: [
      {
        text: "Women Fuel India's Tech Surge, Yet Leadership Gap Persists",
        url: "https://www.peoplematters.in/news/business/women-fuel-indias-tech-surge-yet-leadership-gap-persists-40951"
      },
      {
        text: "Corporate India's Growth Surge Leaves Women Behind",
        url: "https://timesofindia.indiatimes.com/education/careers/news/corporate-indias-growth-surge-leaves-women-behind-as-hiring-leadership-and-pay-gaps-widen/articleshow/129545916.cms"
      },
      {
        text: "Female Participation in Contractual Tech Roles Rises to 27% in 2024",
        url: "https://www.fortuneindia.com/business-news/female-participation-in-contractual-tech-roles-rises-to-27-in-2024/121411"
      },
      {
        text: "Equal Titles, Unequal Pay: Gender Pay Gap Widens in India's Tech Nerve Centers",
        url: "https://timesofindia.indiatimes.com/education/news/equal-titles-unequal-pay-gender-pay-gap-widens-in-indias-tech-nerve-centers/articleshow/120794594.cms"
      }
    ]
  },
  {
    title: "BFSI, Manufacturing & Corporate Sector Analysis",
    links: [
      {
        text: "CareEdge ESG Research: Gender Diversity in BFSI Sector in India",
        url: "https://www.careedgeesg.com/upload/CareEdge-ESG%20article%20on%20Gender%20Diversity%20in%20BFSI.pdf"
      },
      {
        text: "Women Pay Gap High at 35–40% in Key Sectors",
        url: "https://timesofindia.indiatimes.com/city/hyderabad/women-pay-gap-high-at-35-40-in-key-sectors/articleshow/116546585.cms"
      },
      {
        text: "Closing the Gender Pay Gap in India: An Analysis",
        url: "https://www.researchgate.net/publication/392112976_Closing_The_Gender_Pay_Gap_in_India_An_Analysis"
      }
    ]
  },
  {
    title: "Boardrooms, Leadership & Corporate Governance",
    links: [
      {
        text: "Women Directors & Board Diversity: Legal Framework & Role of Company Secretary",
        url: "https://www.icsi.edu/media/webmodules/CSJ/April-2025/21.pdf"
      },
      {
        text: "Shaking Up (and Keeping Intact) the Old Boys' Network: Gender Quotas on Indian Boards",
        url: "https://ideas.repec.org/a/kap/jbuset/v177y2022i4d10.1007_s10551-022-05099-w.html"
      }
    ]
  },
  {
    title: "Cities, Geography & Workplace Inclusivity",
    links: [
      {
        text: "Top Cities for Women in India (TCWI)",
        url: "https://www.avtarcc.com/tcwi/"
      },
      {
        text: "Avtar BCWI Study 2025: Best Companies for Women in India",
        url: "https://www.changeincontent.com/avtar-bcwi-study-2025-best-companies-for-women-in-india/"
      }
    ]
  },
  {
    title: "Additional Broad Workplace Gender Studies",
    links: [
      {
        text: "Gender Bias at Workplace: Beyond the Wage Gap",
        url: "https://ppf.org.in/opinion/gender-bias-at-workplace-beyond-the-wage-gap"
      },
      {
        text: "AIMA–KPMG Study Reveals Increase in Women Leaders in Indian Companies",
        url: "https://dailypioneer.com/news/aima-kpmg-study-reveals-sharp-increase-in-women-leaders-in-indian-companies"
      },
      {
        text: "Women Leadership in Corporate India 2026 – KPMG",
        url: "https://kpmg.com/in/en/insights/2026/02/women-leadership-in-corporate-india-2026.html"
      }
    ]
  }
];

export default function CorporatePyramid() {
  const [activeTab, setActiveTab] = useState<'pipeline' | 'barriers' | 'sectors' | 'pay' | 'cities'>('pipeline');
  const [isReferencesOpen, setIsReferencesOpen] = useState<boolean>(false);

  const tabOrder = ['pipeline', 'barriers', 'sectors', 'pay', 'cities'] as const;
  const currentIndex = tabOrder.indexOf(activeTab);

  // Key visual facts requested to be displayed as eye-catching items at the top
  const eyeCatchingStats = [
    { label: 'Leadership Pipeline', value: '33% → 18% → 10%', detail: 'Entry to Senior drop', color: 'border-amber-200 text-amber-900 bg-amber-50/50' },
    { label: 'Promotion Disparity', value: '1 in 9 vs 1 in 6', detail: 'Women vs Men promoted', color: 'border-rose-200 text-rose-950 bg-rose-50/40' },
    { label: 'Maternity Setback', value: '75%', detail: 'Of mothers face career drops', color: 'border-amber-200 text-amber-950 bg-amber-50/30' },
    { label: 'Promotional Pay Gap', value: '₹88 vs ₹100', detail: 'Received by women vs men', color: 'border-emerald-200 text-emerald-900 bg-emerald-50/30' }
  ];

  const tabs = [
    { id: 'pipeline', label: '1. Leaky Pipeline', icon: <Layers size={14} /> },
    { id: 'barriers', label: '2. Five Barriers', icon: <Lock size={14} /> },
    { id: 'sectors', label: '3. Tech vs Sectors', icon: <Building2 size={14} /> },
    { id: 'pay', label: '4. Pay & Gaps', icon: <Coins size={14} /> },
    { id: 'cities', label: '5. Thriving Cities', icon: <MapPin size={14} /> }
  ] as const;

  return (
    <div id="corporate-spaces-ecosystem" className="w-full max-w-5xl mx-auto px-4 py-6">
      
      {/* Title & Rich Subtitle Header */}
      <div className="text-center mb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 font-semibold">
          <Briefcase size={12} className="text-amber-600 animate-pulse" />
          <span>Chapter V — Corporate Spaces</span>
        </span>
        <h3 className="font-serif text-3xl md:text-3.5xl text-[#3a322d] mt-4 mb-3 tracking-tight font-bold">
          Patriarchy Beyond the Home: How It Shapes Careers, Leadership and Opportunity
        </h3>
        <p className="text-sm font-sans text-stone-650 max-w-3xl mx-auto leading-relaxed">
          Modern companies are often described as meritocracies. Yet across India, women enter corporate careers in significant numbers but disappear from leadership positions as they move up the ladder. The reasons are rarely explicit discrimination. They are often hidden inside workplace culture, promotion systems, caregiving expectations and informal networks.
        </p>
      </div>

      {/* Grid of Shocking Impact Statistics at a Glance */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        {eyeCatchingStats.map((stat, i) => (
          <div 
            key={i} 
            className={`p-4 rounded-2xl border text-center flex flex-col justify-between hover:shadow-xs transition duration-200 ${stat.color}`}
          >
            <span className="text-[10px] uppercase tracking-wider font-mono text-stone-500 font-bold block mb-1">
              {stat.label}
            </span>
            <span className="text-lg md:text-xl font-serif font-black tracking-tight text-stone-900 block my-1">
              {stat.value}
            </span>
            <span className="text-[10px] font-sans text-stone-600">
              {stat.detail}
            </span>
          </div>
        ))}
      </div>

      {/* Main Tabbed Interactive Panel */}
      <div className="bg-white rounded-3xl border border-[#8c7851]/30 overflow-hidden shadow-sm flex flex-col">
        
        {/* Navigation Tab bar */}
        <div className="flex border-b border-stone-100 bg-stone-50/50 p-2 overflow-x-auto scrollbar-none gap-1.5">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`corporate-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-sans text-xs font-semibold whitespace-nowrap transition cursor-pointer shrink-0 ${
                  isActive 
                    ? 'bg-[#3a322d] text-white shadow-xs' 
                    : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Canvas */}
        <div className="p-6 md:p-8 min-h-[380px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 flex-1"
            >
              
              {/* SECTION 1: THE LEAKY PIPELINE */}
              {activeTab === 'pipeline' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  {/* Left: Beautiful funnel representation */}
                  <div className="md:col-span-6 space-y-4">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#8c7851] font-bold block">
                      Visual: Career Ladder Funnel
                    </span>
                    
                    <div className="flex flex-col gap-2 max-w-sm mx-auto">
                      
                      {/* Entry -> Board seats funnel blocks */}
                      <div className="space-y-1.5">
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] font-mono font-bold text-amber-800">Board Seats • 21%</span>
                          <div className="w-[30%] h-6 bg-amber-600 hover:bg-amber-700 transition rounded flex items-center justify-center text-white font-mono text-[10px] font-bold shadow-xs">
                            21%
                          </div>
                          <span className="text-[8px] font-mono text-stone-400">Mostly non-executive</span>
                        </div>
                        
                        <div className="flex flex-col items-center">
                          <span className="text-[10px] font-mono font-bold text-amber-700">Executive Leadership • 12-14%</span>
                          <div className="w-[45%] h-6 bg-amber-500 hover:bg-amber-600 transition rounded flex items-center justify-center text-white font-mono text-[10px] font-bold shadow-xs">
                            12-14%
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <span className="text-[10px] font-mono font-bold text-stone-500">Senior Directors • 10%</span>
                          <div className="w-[60%] h-6 bg-[#8c7851]/80 hover:bg-[#8c7851] transition rounded flex items-center justify-center text-white font-mono text-[10px] font-bold shadow-xs">
                            10%
                          </div>
                          <span className="text-[8px] font-mono text-rose-500 font-bold">⚠️ Drop point peaks here</span>
                        </div>

                        <div className="flex flex-col items-center">
                          <span className="text-[10px] font-mono font-bold text-stone-700">Middle Management • 18-20%</span>
                          <div className="w-[75%] h-6 bg-[#3a322d] hover:bg-[#2c2a29] transition rounded flex items-center justify-center text-white font-mono text-[10px] font-bold shadow-xs">
                            18-20%
                          </div>
                        </div>

                        <div className="flex flex-col items-center">
                          <span className="text-[10px] font-mono font-semibold text-stone-600">Entry Level • 33-36%</span>
                          <div className="w-full h-6 bg-stone-200 rounded flex items-center justify-center text-stone-800 font-mono text-[10px] font-bold">
                            33-36%
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Right: Text descriptions & condensed info */}
                  <div className="md:col-span-6 space-y-4">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200 text-[10px] font-mono uppercase font-bold">
                      The Leakage Point
                    </div>
                    <h4 className="font-serif text-xl font-bold text-[#3a322d]">
                      Women Do Not Disappear Because Ambition Vanishes
                    </h4>
                    
                    <p className="text-xs text-stone-650 leading-relaxed font-sans">
                      At entry level, women make up roughly one-third of hires in Corporate India. Yet representation shrinks dramatically with every promotion cycle. 
                    </p>
                    <p className="text-xs text-stone-650 leading-relaxed font-sans font-semibold text-amber-900 bg-amber-50/50 p-3 rounded-xl border border-amber-100/50">
                      💡 The biggest drop occurs during the middle-management years — precisely when marriage, motherhood and caregiving responsibilities often intensify. This is known as the Leaky Pipeline.
                    </p>

                    <div className="p-3.5 bg-stone-50 rounded-xl border border-stone-100 flex items-center gap-3">
                      <span className="text-xs font-mono font-bold bg-[#3a322d] text-white w-6 h-6 rounded-full flex items-center justify-center">?</span>
                      <p className="text-[11px] text-stone-500 font-sans leading-tight">
                        <strong>Pipeline Stats:</strong> Representation plummets from 33% at entry down to 10% in director roles before recovering non-executive seats.
                      </p>
                    </div>
                  </div>
                </div>
              )}


              {/* SECTION 2: FIVE INVISIBLE BARRIERS */}
              {activeTab === 'barriers' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                    <div className="space-y-0.5">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#8c7851] font-bold block">
                        Double Standards & Subtle Limits
                      </span>
                      <h4 className="font-serif text-lg font-bold text-[#3a322d]">
                        The Five Invisible Barriers Shapes
                      </h4>
                    </div>
                    <span className="text-[10px] text-stone-400 font-sans hidden sm:block">Scroll through cards to study the metrics</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
                    
                    {/* card 1 */}
                    <div className="p-4 rounded-xl border border-[#e8dfc4] hover:border-amber-400 bg-amber-50/10 hover:bg-white transition duration-200 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-stone-400 font-bold">01 • Proof Gap</span>
                        <h5 className="font-serif font-bold text-xs text-stone-900 border-b border-stone-100 pb-1.5">The Proof Gap</h5>
                        <p className="text-[11px] text-stone-600 leading-normal font-sans">
                          Women are evaluated on past achievements while men are hired on future potential, meaning women must prove capability repeatedly.
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-dashed border-stone-100 text-center">
                        <span className="text-stone-500 text-[9px] font-mono uppercase block">Promotion Rate</span>
                        <span className="text-amber-850 font-serif font-bold text-xs">1 in 9 women vs 1 in 6 men</span>
                      </div>
                    </div>

                    {/* card 2 */}
                    <div className="p-4 rounded-xl border border-[#e8dfc4] hover:border-amber-400 bg-amber-50/10 hover:bg-white transition duration-200 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-stone-400 font-bold">02 • Maternity</span>
                        <h5 className="font-serif font-bold text-xs text-stone-900 border-b border-stone-100 pb-1.5">Motherhood Penalty</h5>
                        <p className="text-[11px] text-stone-600 leading-normal font-sans">
                          Career speed halts after maternity. Mothers experience delayed opportunities, post-maternity compensation setbacks and sudden reassignment.
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-dashed border-stone-100 text-center">
                        <span className="text-stone-500 text-[9px] font-mono uppercase block">Setback Metric</span>
                        <span className="text-amber-850 font-serif font-bold text-xs">75% of Mother Careers</span>
                      </div>
                    </div>

                    {/* card 3 */}
                    <div className="p-4 rounded-xl border border-[#e8dfc4] hover:border-amber-400 bg-amber-50/10 hover:bg-white transition duration-200 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-stone-400 font-bold">03 • Tone Gap</span>
                        <h5 className="font-serif font-bold text-xs text-stone-900 border-b border-stone-100 pb-1.5">Assertiveness Penalty</h5>
                        <p className="text-[11px] text-stone-600 leading-normal font-sans">
                          Leadership qualities in men are penalized in women. Assertive men are decisive; assertive women are called "aggressive" or difficult.
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-dashed border-stone-100 text-center">
                        <span className="text-stone-500 text-[9px] font-mono uppercase block">Called "Bossy"</span>
                        <span className="text-amber-850 font-serif font-bold text-xs">2x more likely</span>
                      </div>
                    </div>

                    {/* card 4 */}
                    <div className="p-4 rounded-xl border border-[#e8dfc4] hover:border-amber-400 bg-amber-50/10 hover:bg-white transition duration-200 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-stone-400 font-bold">04 • Gossip Loop</span>
                        <h5 className="font-serif font-bold text-xs text-stone-900 border-b border-stone-100 pb-1.5">The Old Boys' Club</h5>
                        <p className="text-[11px] text-stone-600 leading-normal font-sans">
                          A significant proportion of sponsorship and key career advice happens in informal networks built outside office bounds that exclude women.
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-dashed border-stone-100 text-center">
                        <span className="text-stone-500 text-[9px] font-mono uppercase block">Network Gap</span>
                        <span className="text-amber-850 font-serif font-bold text-xs">28% Less Access</span>
                      </div>
                    </div>

                    {/* card 5 */}
                    <div className="p-4 rounded-xl border border-[#e8dfc4] hover:border-amber-400 bg-amber-50/10 hover:bg-white transition duration-200 flex flex-col justify-between">
                      <div className="space-y-1.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-stone-400 font-bold">05 • System Trust</span>
                        <h5 className="font-serif font-bold text-xs text-stone-900 border-b border-stone-100 pb-1.5">The Trust Gap</h5>
                        <p className="text-[11px] text-stone-600 leading-normal font-sans">
                          Unstructured criteria and opaque evaluations leave massive gaps. Most people feel system advancement is simply biased.
                        </p>
                      </div>
                      <div className="mt-3 pt-2 border-t border-dashed border-stone-100 text-center">
                        <span className="text-stone-500 text-[9px] font-mono uppercase block">Fairness Trust</span>
                        <span className="text-amber-850 font-serif font-bold text-xs">Only 28% believe fair</span>
                      </div>
                    </div>

                  </div>
                </div>
              )}


              {/* SECTION 3: TECH VS NON-TECH */}
              {activeTab === 'sectors' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  
                  {/* Left: Sectors Horizontal Bar Progress comparisons */}
                  <div className="md:col-span-8 space-y-4">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#8c7851] font-bold block mb-1">
                      Horizontal Comparison: Workforce vs Leadership Ratio
                    </span>

                    <div className="space-y-3.5">
                      
                      {/* Sector Tech */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-serif font-bold text-stone-900">💻 Technology (Tech)</span>
                          <span className="text-[10px] font-mono text-stone-500">Workforce: 29-34% | Leadership: 7-8%</span>
                        </div>
                        <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden flex relative border border-stone-100">
                          <div className="h-full bg-amber-400 text-transparent" style={{ width: '31.5%' }} />
                          <div className="h-full bg-[#3a322d] text-transparent" style={{ width: '7.5%' }} />
                        </div>
                      </div>

                      {/* Sector GCCs */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-serif font-bold text-stone-900">🏢 GCCs (Global Capability Centers)</span>
                          <span className="text-[10px] font-mono text-stone-500">Workforce: 38.3% | Leadership: 13.6%</span>
                        </div>
                        <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden flex relative border border-stone-100">
                          <div className="h-full bg-amber-400 text-transparent" style={{ width: '38.3%' }} />
                          <div className="h-full bg-[#3a322d] text-transparent" style={{ width: '13.6%' }} />
                        </div>
                      </div>

                      {/* Sector BFSI */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-serif font-bold text-stone-900">🏦 BFSI (Finance & Banking)</span>
                          <span className="text-[10px] font-mono text-stone-500">Workforce: 22% | Leadership: 10%</span>
                        </div>
                        <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden flex relative border border-stone-100">
                          <div className="h-full bg-amber-400 text-transparent" style={{ width: '22%' }} />
                          <div className="h-full bg-[#3a322d] text-transparent" style={{ width: '10%' }} />
                        </div>
                      </div>

                      {/* Sector Pharmaceuticals */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-serif font-bold text-stone-900">🧪 Pharmaceuticals</span>
                          <span className="text-[10px] font-mono text-emerald-800 font-bold">Workforce: 25% | Leadership: 24.8% (Balanced!)</span>
                        </div>
                        <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden flex relative border border-stone-100">
                          <div className="h-full bg-amber-400 text-transparent" style={{ width: '25%' }} />
                          <div className="h-full bg-[#3a322d] text-transparent" style={{ width: '24.8%' }} />
                        </div>
                      </div>

                      {/* Sector Manufacturing */}
                      <div className="space-y-1">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-serif font-bold text-stone-900">⚙️ Manufacturing</span>
                          <span className="text-[10px] font-mono text-rose-600">Workforce: 4-12% | Leadership: &lt;5% (Extremely low)</span>
                        </div>
                        <div className="w-full h-3 bg-stone-100 rounded-full overflow-hidden flex relative border border-stone-100">
                          <div className="h-full bg-amber-400 text-transparent" style={{ width: '8%' }} />
                          <div className="h-full bg-[#3a322d] text-transparent" style={{ width: '4%' }} />
                        </div>
                      </div>

                    </div>

                    {/* Chart Legend */}
                    <div className="flex gap-4 items-center justify-center text-[10px] font-mono border-t border-stone-50 pt-2 text-stone-500">
                      <span className="flex items-center gap-1.5"><span className="w-3 h-2 bg-amber-400 rounded-xs" /> Workforce Intake %</span>
                      <span className="flex items-center gap-1.5"><span className="w-3 h-2 bg-[#3a322d] rounded-xs" /> Executive Leadership %</span>
                    </div>

                  </div>

                  {/* Right: Insight summary boxes */}
                  <div className="md:col-span-4 bg-amber-50/20 p-5 rounded-2xl border border-amber-500/10 space-y-3">
                    <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#8c7851] block border-b border-amber-200/40 pb-1">
                      Sector Analysis
                    </span>
                    <ul className="space-y-2.5 text-xs text-stone-700 font-sans leading-relaxed list-inside list-disc">
                      <li><strong>Technology</strong> successfully hires many women, but the core leadership remains overwhelmingly male.</li>
                      <li><strong>Manufacturing</strong> remains one of the most male-dominated sectors in India.</li>
                      <li><strong>Pharmaceuticals</strong> currently shows some of the strongest leadership representation among women.</li>
                    </ul>
                  </div>

                </div>
              )}


              {/* SECTION 4: THE PAY GAP */}
              {activeTab === 'pay' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  {/* Left: ₹88 vs ₹100 highlight graphic */}
                  <div className="md:col-span-6 space-y-5">
                    <div className="bg-emerald-50/40 p-5 rounded-2xl border border-emerald-500/15 text-center relative overflow-hidden">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-emerald-800 font-extrabold block">
                        Hero Promotional Salary Metric
                      </span>
                      <p className="text-sm font-sans mt-2 mb-2 text-stone-650">
                        Women receive:
                      </p>
                      <h4 className="font-serif text-4.5xl font-black text-emerald-900 tracking-tight my-1">
                        ₹88
                      </h4>
                      <p className="text-xs text-stone-500 leading-normal">
                        for every <strong className="text-stone-850">₹100</strong> of promotional pay increases received by men.
                      </p>

                      {/* Visual comparative horizontal scale */}
                      <div className="mt-4 space-y-1">
                        <div className="flex justify-between text-[10px] font-mono text-stone-500">
                          <span>Women's promotional bump</span>
                          <span>₹88</span>
                        </div>
                        <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-600 rounded-full" style={{ width: '88%' }} />
                        </div>
                        
                        <div className="flex justify-between text-[10px] font-mono text-stone-500 pt-1.5">
                          <span>Men's promotional bump</span>
                          <span>₹100</span>
                        </div>
                        <div className="w-full h-2.5 bg-stone-100 rounded-full overflow-hidden">
                          <div className="h-full bg-stone-500 rounded-full" style={{ width: '100%' }} />
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Right: Executive Gaps table & text */}
                  <div className="md:col-span-6 space-y-4">
                    <div className="space-y-1">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#8c7851] font-bold block">
                        C-Suite Realities
                      </span>
                      <h4 className="font-serif text-lg font-bold text-[#3a322d]">
                        Executive Leadership Gap
                      </h4>
                    </div>

                    <div className="border border-stone-150 rounded-xl overflow-hidden text-xs">
                      <div className="grid grid-cols-12 bg-stone-50 font-bold p-2.5 border-b border-stone-200">
                        <div className="col-span-8">Executive Role</div>
                        <div className="col-span-4 text-right">Gender Pay Gap</div>
                      </div>
                      
                      <div className="grid grid-cols-12 p-2.5 border-b border-stone-100 hover:bg-stone-50/40">
                        <div className="col-span-8 font-sans font-semibold">Key Managerial Personnel (KMP)</div>
                        <div className="col-span-4 text-right font-mono font-bold text-rose-600">43%</div>
                      </div>

                      <div className="grid grid-cols-12 p-2.5 hover:bg-stone-50/40">
                        <div className="col-span-8 font-sans font-semibold">Executive Directors (ED)</div>
                        <div className="col-span-4 text-right font-mono font-bold text-rose-600">58.6%</div>
                      </div>
                    </div>

                    <p className="text-[11px] text-stone-500 font-sans leading-relaxed">
                      💡 <strong>Short Explanation:</strong> The pay gap is not only about unequal salaries. It also reflects unequal access to promotions, revenue-generating roles, sponsorship opportunities and leadership pipelines.
                    </p>
                  </div>

                </div>
              )}


              {/* SECTION 5: WHERE WOMEN THRIVE */}
              {activeTab === 'cities' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  
                  {/* Left: Ranking list */}
                  <div className="md:col-span-6 space-y-4">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#8c7851] font-bold block">
                      Best Cities for Women's Corporate Participation
                    </span>

                    <div className="space-y-2">
                      {[
                        { city: 'Bengaluru', score: '1st Rank', desc: 'Leading tech environments, high professional density', badge: '🏆 Top Hub' },
                        { city: 'Chennai', score: '2nd Rank', desc: 'Secure local infrastructure and commuter safety', badge: '🛡️ Safe Transit' },
                        { city: 'Pune', score: '3rd Rank', desc: 'Strong educational anchors, active corporate ecosystems', badge: '🏗️ Strong Infra' },
                        { city: 'Hyderabad', score: '4th Rank', desc: 'Accelerating tech corridors & sponsorship options', badge: '💻 Tech Corridor' },
                        { city: 'Mumbai', score: '5th Rank', desc: 'Excellent street safety, though long spatial commutes', badge: '💼 Financial Hub' }
                      ].map((item, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center justify-between gap-4 p-3 rounded-xl border border-stone-100 bg-stone-50/50 hover:bg-white transition duration-150 text-left"
                        >
                          <div className="flex items-center gap-3 min-w-0 flex-1">
                            <span className="w-6 h-6 rounded-full bg-amber-50 text-[#8c7851] border border-amber-200/50 text-[10px] font-bold flex items-center justify-center font-mono shrink-0">
                              0{idx + 1}
                            </span>
                            <div className="space-y-0.5 min-w-0">
                              <span className="font-serif font-bold text-xs text-stone-800 block">{item.city}</span>
                              <p className="text-[10px] text-stone-400 font-sans leading-tight block">{item.desc}</p>
                            </div>
                          </div>
                          <div className="shrink-0">
                            <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md font-bold border border-amber-100 inline-block text-center whitespace-nowrap">
                              {item.badge}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>

                  </div>

                  {/* Right: Key Insight Box */}
                  <div className="md:col-span-6 bg-amber-50/30 p-6 rounded-2xl border border-amber-300/30 space-y-4">
                    <h5 className="font-serif font-bold text-sm text-[#3a322d] flex items-center gap-2">
                      <MapPin size={16} className="text-amber-700" />
                      <span>Regional Infrastructure Matters</span>
                    </h5>
                    <p className="text-xs text-stone-650 leading-relaxed font-sans font-medium">
                      Southern cities consistently perform better because workplace opportunities are supported by stronger social infrastructure, mobility, safety and healthcare access.
                    </p>
                    <div className="p-3 bg-white rounded-lg border border-stone-100 text-[10px] font-sans text-stone-500 leading-normal">
                      🛡️ In absence of active public safety, commuter corridors and support systems, female talent pools decline organically due to extreme personal friction, regardless of intent.
                    </div>
                  </div>

                </div>
              )}

            </motion.div>
          </AnimatePresence>

          {/* Section Navigator for seamless back-and-forth traversal across all form factors */}
          <div className="bg-[#fcfbfa] border border-[#e8dfc4]/60 rounded-2.5xl p-4.5 mt-8 mb-2 shadow-3xs flex flex-col sm:flex-row items-center justify-between gap-4.5">
            {/* Left Column: Previous Section button */}
            <div className="w-full sm:w-auto flex justify-start">
              {currentIndex > 0 ? (
                <button
                  onClick={() => setActiveTab(tabOrder[currentIndex - 1])}
                  className="group w-full sm:w-auto flex items-center gap-3 px-4.5 py-3 rounded-2xl border border-stone-200/80 hover:border-[#8c7851]/60 bg-white hover:bg-[#faf8f5] text-stone-700 hover:text-[#8c7851] text-xs font-semibold shadow-3xs transition-all duration-200 cursor-pointer select-none text-left"
                >
                  <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-0.5 text-stone-500 group-hover:text-[#8c7851] shrink-0" />
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-stone-400 font-mono font-bold leading-none mb-1">Previous</span>
                    <span className="block font-serif text-[11.5px] font-bold text-stone-800 group-hover:text-stone-900 leading-none">
                      {tabs[currentIndex - 1].label.replace(/^\d+\.\s*/, '')}
                    </span>
                  </div>
                </button>
              ) : (
                <div className="w-full sm:w-auto opacity-45 flex items-center gap-3 px-4.5 py-3 rounded-2xl border border-stone-200 bg-stone-50/50 select-none">
                  <ChevronLeft size={16} className="text-stone-300 shrink-0" />
                  <div>
                    <span className="block text-[9px] uppercase tracking-wider text-stone-400 font-mono font-bold leading-none mb-1">Start</span>
                    <span className="block font-serif text-[11.5px] font-bold text-stone-400 leading-none">First Section</span>
                  </div>
                </div>
              )}
            </div>

            {/* Middle Column: Step Progress Indicators */}
            <div className="flex flex-col items-center gap-2 shrink-0">
              <div className="flex items-center gap-1.5 pt-1">
                {tabOrder.map((stepId, idx) => {
                  const isCompleted = idx < currentIndex;
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={stepId}
                      onClick={() => setActiveTab(stepId)}
                      className="group relative flex items-center justify-center p-1.5 cursor-pointer transition focus:outline-none"
                      title={`Jump to ${tabs[idx].label}`}
                    >
                      <div className={`h-1.5 rounded-full transition-all duration-350 ${
                        isActive 
                          ? 'w-7.5 bg-[#3a322d]' 
                          : isCompleted 
                            ? 'w-2 bg-[#8c7851]/75 hover:bg-[#8c7851]' 
                            : 'w-2 bg-stone-200 hover:bg-stone-300'
                      }`} />
                      
                      {/* Interactive Tooltip label */}
                      <span className="absolute bottom-full mb-2 bg-[#3a322d] text-white font-sans font-semibold text-[10.5px] py-1 px-3 rounded-xl shadow-md whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-30 border border-stone-700">
                        {tabs[idx].label}
                      </span>
                    </button>
                  );
                })}
              </div>
              <span className="font-mono text-[9px] uppercase tracking-wider text-stone-450 font-bold">
                Chapter V • Section {currentIndex + 1} of 5
              </span>
            </div>

            {/* Right Column: Next Section button or loopback restart */}
            <div className="w-full sm:w-auto flex justify-end">
              {currentIndex < tabOrder.length - 1 ? (
                <button
                  onClick={() => setActiveTab(tabOrder[currentIndex + 1])}
                  className="group w-full sm:w-auto flex items-center justify-between sm:justify-start gap-4 px-4.5 py-3 rounded-2xl border border-[#8c7851]/30 hover:border-[#8c7851] bg-[#3a322d] hover:bg-[#2c2a29] text-white text-xs font-semibold shadow-2xs transition-all duration-200 cursor-pointer select-none text-right"
                >
                  <div className="text-left sm:text-right flex-1 sm:flex-initial">
                    <span className="block text-[9px] uppercase tracking-wider text-stone-300 font-mono font-bold leading-none mb-1">Next</span>
                    <span className="block font-serif text-[11.5px] font-bold text-white leading-none">
                      {tabs[currentIndex + 1].label.replace(/^\d+\.\s*/, '')}
                    </span>
                  </div>
                  <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5 text-stone-300 group-hover:text-white shrink-0" />
                </button>
              ) : (
                <button
                  onClick={() => setActiveTab(tabOrder[0])}
                  className="group w-full sm:w-auto flex items-center justify-between sm:justify-start gap-4 px-4.5 py-3 rounded-2xl border border-amber-200 hover:border-amber-300 bg-amber-50 hover:bg-amber-100 text-amber-900 text-xs font-semibold shadow-3xs transition-all duration-200 cursor-pointer select-none text-right"
                >
                  <div className="text-left sm:text-right flex-1 sm:flex-initial">
                    <span className="block text-[9px] uppercase tracking-wider text-amber-800 font-mono font-bold leading-none mb-1">End of Chapter</span>
                    <span className="block font-serif text-[11.5px] font-bold text-amber-950 leading-none">Return to Start</span>
                  </div>
                  <Sparkles size={14} className="text-amber-700 animate-pulse shrink-0" />
                </button>
              )}
            </div>
          </div>

          {/* Clean footer showing referenced literature popup instead of plain statement */}
          <div className="border-t border-stone-100 pt-4 mt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-3">
            <button
              onClick={() => setIsReferencesOpen(true)}
              className="flex items-center gap-1.5 text-amber-850 hover:text-amber-950 font-bold font-sans transition cursor-pointer bg-amber-50/50 hover:bg-amber-100/60 border border-amber-200/50 shadow-2xs rounded-xl px-3.5 py-2 leading-none"
            >
              <ExternalLink size={12} className="text-[#8c7851]" />
              <span>Explore References & Referred Source Articles</span>
            </button>
            <span className="font-mono text-[9px] uppercase">
              Select other tabs to inspect parameters
            </span>
          </div>

        </div>

      </div>

      {/* References Modal Overlay */}
      <AnimatePresence>
        {isReferencesOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop with elegant blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsReferencesOpen(false)}
              className="absolute inset-0 bg-stone-950/70 backdrop-blur-sm"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.45 }}
              className="relative w-full max-w-4xl bg-white rounded-3xl border border-[#8c7851]/30 p-6 md:p-8 shadow-2xl flex flex-col z-[101] max-h-[85vh] overflow-hidden"
            >
              {/* Close Button top-right */}
              <button
                type="button"
                onClick={() => setIsReferencesOpen(false)}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full hover:bg-stone-100 text-stone-400 hover:text-stone-700 transition cursor-pointer z-10"
                aria-label="Close references modal"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="border-b border-stone-155 pb-4 mb-5 shrink-0 pr-8">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-2.5 py-1 rounded-md font-bold">
                    Official Reference Index
                  </span>
                </div>
                <h4 className="font-serif text-xl md:text-2xl font-bold text-[#3a322d]">
                  Articles, Reports & Sources Referred
                </h4>
                <p className="text-xs font-sans text-stone-500 mt-1 leading-relaxed">
                  Select and click on any individual reference card to open the original research article or official report publication directly.
                </p>
              </div>

              {/* Scrollable References Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-y-auto pr-1 pb-4 flex-1 scrollbar-thin">
                {referenceData.map((category, idx) => (
                  <div 
                    key={idx}
                    className="p-4 rounded-2xl border border-stone-200/50 bg-[#faf9f6]/50 hover:bg-white hover:shadow-xs hover:border-[#8c7851]/40 transition duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#8c7851] bg-[#f4eedc]/60 px-2 py-0.5 rounded font-bold mb-2.5 inline-block">
                        {category.title === "Workforce Representation & Leadership Gap" ? "01. Workforce Intake" :
                         category.title === "Promotion Gap & Workplace Advancement" ? "02. Promotions Loop" :
                         category.title === "Motherhood Penalty & Career Breaks" ? "03. Maternity Barriers" :
                         category.title === "Assertiveness Penalty & Workplace Bias" ? "04. Evaluative Double Standard" :
                         category.title === "Old Boys' Club & Leadership Networks" ? "05. Informal Alliance Gap" :
                         category.title === "Technology Sector & Women in Leadership" ? "06. Technology Sector" :
                         category.title === "BFSI, Manufacturing & Corporate Sector Analysis" ? "07. Industry Gaps" :
                         category.title === "Boardrooms, Leadership & Corporate Governance" ? "08. Corporate Governance" :
                         category.title === "Cities, Geography & Workplace Inclusivity" ? "09. Social Infrastructure" :
                         category.title === "Patriarchy, Masculinity & Men's Mental Health" ? "10. Socialized Demands" : "11. Corporate Diagnostics"}
                      </span>
                      <h5 className="font-serif font-bold text-xs text-stone-900 mb-3 leading-snug">
                        {category.title}
                      </h5>
                      
                      <div className="space-y-2">
                        {category.links.map((linkItem, linkIdx) => (
                          <a
                            key={linkIdx}
                            href={linkItem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-start gap-1.5 text-[11px] font-sans text-stone-600 hover:text-amber-850 hover:underline leading-relaxed transition text-left group"
                          >
                            <span className="mt-1.5 w-1 h-1 rounded-full bg-amber-500 shrink-0 group-hover:scale-125 transition" />
                            <span className="flex-1 font-medium leading-normal">{linkItem.text}</span>
                            <ExternalLink size={9} className="mt-1 text-stone-400 group-hover:text-amber-700 shrink-0 opacity-70" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="border-t border-stone-100 pt-4 mt-2 flex justify-end shrink-0">
                <button
                  type="button"
                  onClick={() => setIsReferencesOpen(false)}
                  className="px-5 py-2.5 bg-[#3a322d] text-white font-sans text-xs font-semibold rounded-xl hover:bg-stone-800 transition cursor-pointer"
                >
                  Close Reference Center
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
