/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Home, Briefcase, ArrowRight, Sparkles, Check, Hourglass, ShieldAlert, ChevronDown } from 'lucide-react';

interface ScenarioItem {
  title: string;
  desc: string;
}

interface ExpectationItem {
  id: string;
  context: string;
  themeColor: string;
  bgLight: string;
  icon: React.ReactNode;
  emoji: string;
  shortDescription: string;
  everydayScenarios: ScenarioItem[];
  fullNarrative: string;
  subtleTakeaway: string;
}

const EVERYDAY_TEXT = {
  badge: "Everyday Realities",
  title: "How Society Expects Things from Women",
  desc: "Beyond general laws, the quiet software of society runs on everyday scenarios. Select a context below to examine the specific dual expectations holding these patterns in place.",
  contextGridTitle: "The Expectation Grid of",
  contextPrefix: "Everyday Social Context",
  contextSuffix: "Structure",
  scenarioHeader: "How This Quietly Shows Up in Everyday Life",
  takeawayLabel: "Takeaway:"
};

const EXPECTATIONS_DATA: ExpectationItem[] = [
  {
    id: 'marriage',
    context: 'Marriage',
    themeColor: 'border-rose-300 text-rose-850 bg-rose-50/80',
    bgLight: 'bg-rose-50/30',
    emoji: '💍',
    icon: <Heart size={18} className="text-rose-600" />,
    shortDescription: 'Unbalanced expectations of adaptivity, geographical compromise, and domestic ownership.',
    fullNarrative: "A newly married woman is often expected to adjust to her husband's family, routines, and traditions, while very little adjustment is expected in return. If a couple receives job opportunities in different cities, the default assumption is often that the wife will relocate. Even when both partners work full-time, cooking, planning family events, remembering birthdays, and managing household responsibilities frequently become her responsibility.",
    everydayScenarios: [
      {
        title: "The Adjustment Expectation",
        desc: "After marriage, women are often expected to adapt to their spouse's family culture, traditions, and way of doing things. Their own habits, preferences, and routines may receive less consideration."
      },
      {
        title: "Career Compromises",
        desc: "When career opportunities require difficult choices, many couples still assume the woman's career should be the one to bend. Her ambitions may be viewed as important—but not as important."
      },
      {
        title: "The Mental Load",
        desc: "Even when household chores are shared, women often become the default planners. They remember birthdays, doctor's appointments, grocery needs, family events, bills, and dozens of small tasks that keep daily life running smoothly."
      }
    ],
    subtleTakeaway: "The issue is rarely whether a woman is allowed to work. The deeper question is whether her career, time, ambitions, and identity are valued as much as her partner's within the relationship."
  },
  {
    id: 'family',
    context: 'Family',
    themeColor: 'border-amber-300 text-amber-850 bg-amber-50/80',
    bgLight: 'bg-amber-50/30',
    emoji: '🏠',
    icon: <Home size={18} className="text-amber-700" />,
    shortDescription: 'Asymmetrical double standards regarding curfew safety, physical serving, and ultimate veto power.',
    fullNarrative: "A son returning home late may be seen as hardworking or independent, while a daughter returning at the same time may face questions about safety, reputation, or propriety. During family gatherings, women often serve food while men sit and socialize. Important family decisions may be discussed with women, but the final approval is often expected from a father, husband, or senior male relative.",
    everydayScenarios: [
      {
        title: "Different Rules for Sons and Daughters",
        desc: "Parents may worry about both children, but daughters are often monitored more closely. The same behavior that signals independence in a son can be viewed as risky or inappropriate in a daughter."
      },
      {
        title: "Invisible Care Work",
        desc: "At family functions, women are often the first to enter the kitchen and the last to leave it. Preparing food, serving guests, cleaning up, and ensuring everyone is comfortable frequently fall to them by default."
      },
      {
        title: "Who Gets the Final Say",
        desc: "Women may be consulted and their opinions valued, yet major decisions are often expected to receive approval from a father, husband, grandfather, or another senior male family member."
      }
    ],
    subtleTakeaway: "These patterns quietly reinforce the idea that women are responsible for maintaining the home and relationships, while men are expected to lead, decide, and represent the family in the outside world."
  },
  {
    id: 'workplace',
    context: 'Workplace',
    themeColor: 'border-emerald-300 text-emerald-855 bg-emerald-50/80',
    bgLight: 'bg-emerald-50/30',
    emoji: '💼',
    icon: <Briefcase size={18} className="text-emerald-700" />,
    shortDescription: 'The double-bind of assertiveness ratings, the motherhood penalty, and informal networking barriers.',
    fullNarrative: "A man who speaks confidently in meetings may be described as decisive, while a woman displaying the same behavior may be called aggressive or difficult. When a woman becomes a mother, colleagues may assume she wants fewer responsibilities, whereas a new father is rarely asked whether family duties will affect his commitment to work. Informal networking opportunities often revolve around male-dominated circles where important relationships and opportunities are formed.",
    everydayScenarios: [
      {
        title: "The Confidence Double Standard",
        desc: "A man who is direct is often seen as confident and leadership material. A woman who communicates the same way may be viewed as intimidating, difficult, or less approachable."
      },
      {
        title: "The Motherhood Penalty",
        desc: "After becoming a mother, women are often assumed to be less available, less ambitious, or less committed to their careers. Fathers rarely face the same assumptions and may even be viewed as more responsible after having children."
      },
      {
        title: "The Networking Gap",
        desc: "Career opportunities are not built only in meetings. They often emerge through informal conversations, social gatherings, and trusted networks. When these spaces are dominated by men, women can find themselves excluded from valuable connections and opportunities."
      }
    ],
    subtleTakeaway: "Many workplaces were originally designed around the idea of an employee who has someone else managing family and caregiving responsibilities at home. As a result, people with active caregiving roles, most often women, can face challenges that are rarely reflected in formal policies."
  }
];

export default function EverydayExpectations() {
  const [activeTab, setActiveTab] = useState<string | null>('marriage');

  const handleToggle = (id: string) => {
    setActiveTab(prev => prev === id ? null : id);
  };

  return (
    <div id="everyday-expectations-panel" className="w-full max-w-4xl mx-auto px-4 py-8 mt-4">
      {/* Title Header */}
      <div className="text-center mb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-3.5 py-1.5 rounded-full font-semibold border border-[#8c7851]/20 inline-flex items-center gap-1.5">
          <Sparkles size={11} className="text-amber-700 animate-pulse" />
          <span>{EVERYDAY_TEXT.badge}</span>
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-[#3a322d] mt-4 mb-2 tracking-tight">
          {EVERYDAY_TEXT.title}
        </h3>
        <p className="text-sm font-sans text-[#8c7851] max-w-2xl mx-auto leading-relaxed">
          {EVERYDAY_TEXT.desc}
        </p>
      </div>

      {/* Accordion List Container */}
      <div className="space-y-4 max-w-3xl mx-auto">
        {EXPECTATIONS_DATA.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <div
              key={item.id}
              className={`rounded-2xl border transition-all duration-300 bg-white overflow-hidden ${
                isActive
                  ? 'border-[#8c7851] shadow-md ring-1 ring-[#8c7851]/10'
                  : 'border-stone-200 hover:border-stone-300 text-stone-750 shadow-xs'
              }`}
            >
              {/* Header Toggle Row */}
              <button
                type="button"
                onClick={() => handleToggle(item.id)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer select-none transition-colors hover:bg-stone-50/50"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl pt-0.5 select-none shrink-0" role="img" aria-label={item.context}>
                    {item.emoji}
                  </span>
                  <div className="space-y-1">
                    <span className="font-serif text-lg font-bold text-stone-900 flex items-center gap-2">
                      {item.context}
                    </span>
                    <p className="text-xs text-stone-500 leading-normal font-sans">
                      {item.shortDescription}
                    </p>
                  </div>
                </div>
                
                {/* Chevron Expansion Indicator */}
                <div className={`p-1.5 rounded-full bg-stone-100 text-stone-600 transition-all duration-300 ml-4 shrink-0 ${isActive ? 'rotate-180 bg-[#f4eedc] text-[#8c7851]' : ''}`}>
                  <ChevronDown size={16} />
                </div>
              </button>

              {/* Collapsible Content Area */}
              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="border-t border-stone-100 p-5 md:p-6 bg-[#faf9f6]/30 space-y-6">
                      
                      {/* Top banner / Category indicator */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-200/50 pb-4">
                        <div className="space-y-1">
                          <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-[#8c7851]">
                            {EVERYDAY_TEXT.contextPrefix}
                          </span>
                          <h4 className="font-serif text-xl font-bold text-[#2c2a29] flex items-center gap-2">
                            <span>{EVERYDAY_TEXT.contextGridTitle} {item.context}</span>
                          </h4>
                        </div>
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${item.themeColor}`}>
                          {item.icon}
                          <span>{item.context} {EVERYDAY_TEXT.contextSuffix}</span>
                        </span>
                      </div>

                      {/* Full Narrative Box */}
                      <div className="bg-amber-50/30 p-4 rounded-xl border border-amber-200/30">
                        <p className="font-serif text-xs md:text-sm leading-relaxed italic text-stone-850">
                          "{item.fullNarrative}"
                        </p>
                      </div>

                      {/* Everyday Scenarios details */}
                      <div className="space-y-3">
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#8c7851] font-bold block">
                          {EVERYDAY_TEXT.scenarioHeader}
                        </span>
                        
                        <div className="grid grid-cols-1 gap-3">
                          {item.everydayScenarios.map((scenario, idx) => (
                            <div 
                              key={idx}
                              className="flex items-start gap-3.5 p-4 rounded-xl border border-stone-150/70 bg-white hover:shadow-xs transition duration-200"
                            >
                              <span className="mt-0.5 w-6 h-6 rounded-full bg-stone-100 text-stone-700 border border-stone-250 flex items-center justify-center font-mono text-[10px] font-bold shrink-0 shadow-2xs">
                                0{idx + 1}
                              </span>
                              <div className="space-y-1 flex-1">
                                <h5 className="font-sans font-bold text-xs text-stone-900">
                                  {scenario.title}
                                </h5>
                                <p className="text-xs text-stone-600 leading-relaxed font-sans">
                                  {scenario.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Subtle takeaway caution line */}
                      <div className="pt-4 border-t border-stone-200/50 flex items-start gap-2.5">
                        <ShieldAlert size={14} className="text-[#8c7851] mt-0.5 shrink-0" />
                        <p className="text-xs text-stone-500 font-sans leading-relaxed">
                          <span className="font-semibold text-stone-700">{EVERYDAY_TEXT.takeawayLabel}</span> {item.subtleTakeaway}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
