/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WOMEN_EXPERIENCE } from '../data';
import { Compass, ShieldCheck, ClipboardCheck, BookOpen, UserCheck, AlertTriangle } from 'lucide-react';

export default function WomenExperienceSplit() {
  const [activeItemId, setActiveItemId] = useState<string>('have-it-all');

  const activeItem = WOMEN_EXPERIENCE.find(i => i.id === activeItemId) || WOMEN_EXPERIENCE[0];

  const renderLeftIllustration = (id: string) => {
    switch (id) {
      case 'have-it-all':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center p-6 space-y-4">
            <svg viewBox="0 0 120 120" className="w-48 h-48 text-[#8c7851]">
              <circle cx="60" cy="65" r="30" className="stroke-current stroke-1 fill-amber-50/10" />
              <line x1="60" y1="35" x2="60" y2="15" className="stroke-amber-600/60 stroke-2" />
              <line x1="60" y1="95" x2="60" y2="105" className="stroke-amber-600/40" />
              <line x1="30" y1="65" x2="15" y2="65" className="stroke-amber-600/40" />
              <line x1="90" y1="65" x2="105" y2="65" className="stroke-amber-600/40" />
              {/* Outer floating icons representation of several expectations */}
              <circle cx="60" cy="15" r="4" className="fill-amber-600 animate-bounce" />
              <circle cx="15" cy="65" r="4" className="fill-stone-600" />
              <circle cx="105" cy="65" r="4" className="fill-slate-600 animate-pulse" />
              <circle cx="60" cy="105" r="4" className="fill-amber-750" />
              <text x="60" y="70" textAnchor="middle" className="font-display text-[8px] font-medium fill-[#3a322d]">CAREER</text>
              <text x="60" y="60" textAnchor="middle" className="font-display text-[8px] font-medium fill-[#8c7851]">HOME</text>
            </svg>
            <div className="text-center">
              <span className="font-serif text-xs font-semibold text-[#8c7851] uppercase tracking-wide">Dimension Balancing Act</span>
              <p className="text-[11px] text-gray-500 font-sans max-w-xs mt-1">
                Modern urban women are evaluated on domestic success and global corporate benchmarks simultaneously.
              </p>
            </div>
          </div>
        );
      case 'mental-load':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center p-6 space-y-4">
            <svg viewBox="0 0 120 120" className="w-48 h-48 text-[#8c7851]">
              <rect x="25" y="25" width="70" height="70" rx="6" className="stroke-stone-300 stroke-1 fill-none" />
              <line x1="35" y1="40" x2="85" y2="40" className="stroke-amber-600/50 stroke-2" strokeDasharray="1, 2" />
              <line x1="35" y1="55" x2="65" y2="55" className="stroke-[#8c7851]/70 stroke-1.5" />
              <circle cx="80" cy="55" r="2.5" className="fill-amber-500" />
              <line x1="35" y1="70" x2="70" y2="70" className="stroke-stone-400 stroke-1" strokeDasharray="4, 2" />
              <circle cx="80" cy="70" r="2.5" className="fill-stone-300" />
              <line x1="35" y1="85" x2="55" y2="85" className="stroke-stone-400 stroke-1" />
              <circle cx="80" cy="85" r="2.5" className="fill-amber-500 animate-pulse" />
              <path d="M90 20l5 5-10 10" className="stroke-amber-600 fill-none stroke-2" />
            </svg>
            <div className="text-center">
              <span className="font-serif text-xs font-semibold text-[#8c7851] uppercase tracking-wide">The Family Agenda Ledger</span>
              <p className="text-[11px] text-gray-500 font-sans max-w-xs mt-1">
                Physical chores are often divided. The supreme cognitive task of remembering appointments and relative plans remains asymmetrical.
              </p>
            </div>
          </div>
        );
      case 'competence-trap':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center p-6 space-y-4">
            <svg viewBox="0 0 120 120" className="w-48 h-48 text-[#8c7851]">
              {/* Balance scale representing double standard */}
              <line x1="60" y1="30" x2="60" y2="90" className="stroke-[#3a322d] stroke-2" />
              <line x1="30" y1="90" x2="90" y2="90" className="stroke-[#3a322d] stroke-2" />
              {/* Beam tilting to represents unequal punishment scale */}
              <motion.g
                animate={{ rotate: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
                style={{ transformOrigin: '60px 45px' }}
              >
                <line x1="20" y1="45" x2="100" y2="45" className="stroke-amber-600 stroke-2" />
                {/* Left Pan: Assertive label */}
                <line x1="20" y1="45" x2="20" y2="65" className="stroke-stone-400" />
                <path d="M10 65h20L20 80z" className="stroke-amber-600/80 fill-amber-500/10" />
                {/* Right Pan: Passive label */}
                <line x1="100" y1="45" x2="100" y2="65" className="stroke-stone-400" />
                <path d="M90 65h20l-10 15z" className="stroke-stone-500/80 fill-stone-500/10" />
              </motion.g>
            </svg>
            <div className="text-center">
              <span className="font-serif text-xs font-semibold text-[#8c7851] uppercase tracking-wide">The Double-Bind Scale</span>
              <p className="text-[11px] text-gray-500 font-sans max-w-xs mt-1">
                Be strong and risk being perceived as arrogant and bossy. Be soft and risk being brushed off as unqualified.
              </p>
            </div>
          </div>
        );
      case 'safety-calcs':
        return (
          <div className="w-full h-full flex flex-col justify-center items-center p-6 space-y-4">
            <svg viewBox="0 0 120 120" className="w-48 h-48">
              {/* Concentric rings represent concentric zones of threat calculations */}
              <circle cx="60" cy="60" r="45" className="stroke-red-200 fill-none stroke-1" strokeDasharray="4, 4" />
              <circle cx="60" cy="60" r="30" className="stroke-pink-300 fill-none stroke-1" />
              <circle cx="60" cy="60" r="15" className="stroke-amber-400 fill-none stroke-2 animate-pulse" />
              <circle cx="60" cy="60" r="3" className="fill-red-600" />
              {/* Radar sweeps */}
              <motion.line
                x1="60"
                y1="60"
                x2="100"
                y2="40"
                className="stroke-amber-500 stroke-1.5"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
                style={{ transformOrigin: '60px 60px' }}
              />
            </svg>
            <div className="text-center">
              <span className="font-serif text-xs font-semibold text-[#8c7851] uppercase tracking-wide">The Safety Cognitive Radar</span>
              <p className="text-[11px] text-gray-500 font-sans max-w-xs mt-1">
                A non-stop calculation loop assessing lit streets, safe transits, shareable locations, and conversational distances.
              </p>
            </div>
          </div>
        );
      default:
        // Marriage pressure
        return (
          <div className="w-full h-full flex flex-col justify-center items-center p-6 space-y-4">
            <svg viewBox="0 0 120 120" className="w-48 h-48 text-[#8c7851]">
              <circle cx="60" cy="40" r="12" className="stroke-[#3a322d] fill-none stroke-1.5" />
              <path d="M38 75c0-10 8-15 22-15s22 5 22 15v18H38V75z" className="stroke-[#3a322d] fill-none stroke-1.5" />
              <ellipse cx="60" cy="85" rx="8" ry="4" className="stroke-amber-500 fill-amber-400/10 stroke-[2px] animate-pulse" />
              <line x1="60" y1="52" x2="60" y2="60" className="stroke-stone-400" />
            </svg>
            <div className="text-center">
              <span className="font-serif text-xs font-semibold text-[#8c7851] uppercase tracking-wide">The Traditional Funnel</span>
              <p className="text-[11px] text-gray-500 font-sans max-w-xs mt-1">
                Despite high education and earnings equal to peers, women find their entire trajectories funneling back to marital adjustment.
              </p>
            </div>
          </div>
        );
    }
  };

  const getSubMenuIcon = (id: string) => {
    switch (id) {
      case 'have-it-all': return <Compass size={14} />;
      case 'mental-load': return <ClipboardCheck size={14} />;
      case 'competence-trap': return <UserCheck size={14} />;
      case 'safety-calcs': return <ShieldCheck size={14} />;
      default: return <BookOpen size={14} />;
    }
  };

  return (
    <div id="urban-women-split-view" className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <span className="font-mono text-xs uppercase tracking-widest text-amber-700 bg-amber-50 px-3 py-1 rounded-full">
          Urban Realities
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-[#3a322d] mt-4 mb-2 tracking-tight">
          How Patriarchy Affects Women in Urban India
        </h3>
        <p className="text-sm font-sans text-gray-500 max-w-xl mx-auto">
          In metropolitan settings, the constraints are rarely mobility blockades. Instead, they operate as subtle, non-stop mental drafts on expectations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch border border-stone-200/80 rounded-3xl overflow-hidden bg-white shadow-xs min-h-[480px]">
        
        {/* Left Column: Illustrated Scene Container */}
        <div id="experience-left-illustration" className="col-span-1 md:col-span-12 lg:col-span-5 bg-gradient-to-br from-[#faf8f5] to-[#f5f1e8] border-b lg:border-b-0 lg:border-r border-stone-200/80 flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full h-full"
            >
              {renderLeftIllustration(activeItem.id)}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Dynamic Narrative Explainer */}
        <div className="col-span-1 md:col-span-12 lg:col-span-7 p-6 md:p-8 flex flex-col justify-between">
          <div>
            
            {/* Horizontal tab selection */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-stone-100 pb-4">
              {WOMEN_EXPERIENCE.map((item) => {
                const isActive = item.id === activeItemId;
                return (
                  <button
                    key={item.id}
                    id={`women-tab-${item.id}`}
                    onClick={() => setActiveItemId(item.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-display font-medium tracking-wide transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                      isActive 
                        ? 'bg-[#3a322d] text-white shadow-xs' 
                        : 'bg-stone-50 hover:bg-stone-100 text-stone-600'
                    }`}
                  >
                    {getSubMenuIcon(item.id)}
                    <span>{item.title.split(' ')[0]} {item.id === 'have-it-all' ? 'All' : item.id === 'mental-load' ? 'Load' : ''}</span>
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] font-semibold">
                    Scenario Analysis — {activeItem.subtitle}
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-[#2c2a29] mt-1.5">
                    {activeItem.title}
                  </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-stone-50 rounded-xl border border-stone-100">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 block mb-1">
                      Male Reference Point
                    </span>
                    <p className="text-xs text-gray-600 font-sans leading-relaxed">
                      {activeItem.scenario}
                    </p>
                  </div>
                  <div className="p-4 bg-amber-50/50 border border-amber-100 rounded-xl">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-amber-700 block mb-1 font-semibold">
                      Female Counterpoint
                    </span>
                    <p className="text-xs text-amber-900 font-sans leading-relaxed">
                      {activeItem.fact}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 space-y-2">
                  <span className="font-display text-xs font-semibold text-[#8c7851] uppercase tracking-widest block">
                    The Invisible Mechanics
                  </span>
                  <p className="text-sm text-gray-600 font-sans leading-relaxed">
                    {activeItem.calculationPrompt}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>

          <div className="mt-8 pt-4 border-t border-stone-100 flex items-center gap-3">
            <AlertTriangle size={16} className="text-amber-600 shrink-0" />
            <span className="text-[11px] text-gray-500 font-sans leading-snug">
              Note: The primary demand among modern urban women is rarely permission to work. It is the equal distribution of mental and physical labor after work hours.
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
