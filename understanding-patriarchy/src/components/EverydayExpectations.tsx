/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Home, Briefcase, ArrowRight, Sparkles, Check, Hourglass, ShieldAlert } from 'lucide-react';

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

export default function EverydayExpectations() {
  const [activeTab, setActiveTab] = useState<string>('marriage');

  const expectations: ExpectationItem[] = [
    {
      id: 'marriage',
      context: 'Marriage',
      themeColor: 'border-rose-300 text-rose-800 bg-rose-50/80',
      bgLight: 'bg-rose-50/30',
      emoji: '💍',
      icon: <Heart size={20} className="text-rose-600" />,
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
      icon: <Home size={20} className="text-amber-700" />,
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
      themeColor: 'border-emerald-300 text-emerald-800 bg-emerald-50/80',
      bgLight: 'bg-emerald-50/30',
      emoji: '💼',
      icon: <Briefcase size={20} className="text-emerald-700" />,
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

  const activeData = expectations.find(e => e.id === activeTab) || expectations[0];

  return (
    <div id="everyday-expectations-panel" className="w-full max-w-5xl mx-auto px-4 py-8 mt-4">
      {/* Title Header */}
      <div className="text-center mb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-amber-700 bg-amber-50 px-3.5 py-1.5 rounded-full font-semibold border border-amber-200/60 inline-flex items-center gap-1.5">
          <Sparkles size={11} className="text-amber-600 animate-pulse" />
          <span>Everyday Realities</span>
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-[#3a322d] mt-4 mb-2 tracking-tight">
          How Society Expects Things from Women
        </h3>
        <p className="text-sm font-sans text-[#8c7851] max-w-2xl mx-auto">
          Beyond general laws, the quiet software of society runs on everyday scenarios. Select a context below to examine the specific dual expectations holding these patterns in place.
        </p>
      </div>

      {/* Grid Content Main wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Side Navigation (Tabs as stacked modern cards) */}
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-3 justify-center">
          {expectations.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`tab-expectations-${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`p-4 rounded-2xl border text-left transition-all duration-300 flex items-start gap-4 cursor-pointer relative overflow-hidden ${
                  isActive 
                    ? 'border-amber-500 bg-white shadow-md ring-2 ring-amber-500/10 scale-[1.01]' 
                    : 'border-stone-200 bg-white/70 hover:bg-stone-50 hover:border-stone-300 text-stone-700'
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-amber-500" />
                )}
                
                <span className="text-2xl pt-0.5 select-none shrink-0" role="img" aria-label={item.context}>
                  {item.emoji}
                </span>

                <div className="space-y-1">
                  <span className={`font-serif text-lg font-bold block ${isActive ? 'text-[#3a322d]' : 'text-stone-600'}`}>
                    {item.context}
                  </span>
                  <p className="text-xs text-stone-500 leading-normal font-sans line-clamp-2">
                    {item.shortDescription}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side Details Display Panel */}
        <div className="col-span-1 lg:col-span-8 bg-white rounded-3xl border border-[#8c7851]/30 p-6 md:p-8 shadow-sm flex flex-col justify-between relative overflow-hidden">
          
          {/* Decorative faint background shape */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-100/20 rounded-full blur-xl pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="space-y-6"
            >
              {/* Header inside details with custom accent background */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-stone-100 pb-4">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#8c7851]">
                    Everyday Social Context
                  </span>
                  <h4 className="font-serif text-2xl font-semibold text-[#2c2a29] flex items-center gap-2">
                    <span>{activeData.emoji}</span>
                    <span>The Expectation Grid of {activeData.context}</span>
                  </h4>
                </div>
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold ${activeData.themeColor}`}>
                  {activeData.icon}
                  <span>{activeData.context} Structure</span>
                </span>
              </div>

              {/* Core Narrative Text (Large font size for emphasis) */}
              <div className="bg-amber-50/40 p-4 rounded-xl border border-amber-200/40">
                <p className="font-serif text-sm md:text-[#3a322d] leading-relaxed italic text-[#3a322d]">
                  "{activeData.fullNarrative}"
                </p>
              </div>

              {/* Detailed Real Everyday Examples */}
              <div className="space-y-3">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#8c7851] font-bold block">
                  How This Quietly Shows Up in Everyday Life
                </span>
                
                <div className="space-y-3">
                  {activeData.everydayScenarios.map((scenario, idx) => (
                    <div 
                      key={idx}
                      className="flex items-start gap-3.5 p-3.5 rounded-xl border border-stone-100 bg-[#faf9f6]/40 hover:bg-white hover:shadow-sm transition duration-250"
                    >
                      <span className="mt-0.5 w-6 h-6 rounded-full bg-amber-50 text-amber-900 border border-amber-200/50 flex items-center justify-center font-mono text-xs font-bold shrink-0 shadow-2xs">
                        0{idx + 1}
                      </span>
                      <div className="space-y-1 flex-1">
                        <h5 className="font-sans font-bold text-xs text-stone-900">
                          {scenario.title}
                        </h5>
                        <p className="text-xs text-stone-650 leading-relaxed font-sans">
                          {scenario.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Editorial takeaway warning note */}
              <div className="pt-4 border-t border-stone-100 flex items-start gap-2.5">
                <ShieldAlert size={14} className="text-amber-600 mt-0.5 shrink-0" />
                <p className="text-[11px] text-stone-500 font-sans leading-relaxed">
                  <span className="font-semibold text-stone-700">Takeaway:</span> {activeData.subtleTakeaway}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </div>
  );
}
