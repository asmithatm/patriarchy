/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CORPORATE_LADDER } from '../data';
import { ChevronRight, TrendingDown, Target, HelpCircle, Briefcase, Eye } from 'lucide-react';

export default function CorporatePyramid() {
  const [activeLevelId, setActiveLevelId] = useState<string>('manager');

  const activeLevel = CORPORATE_LADDER.find(l => l.id === activeLevelId) || CORPORATE_LADDER[1];

  return (
    <div id="corporate-spaces-ecosystem" className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-3 py-1 rounded-full">
          Organizational Flows
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-[#3a322d] mt-4 mb-2 tracking-tight">
          Patriarchy in Corporate Spaces
        </h3>
        <p className="text-sm font-sans text-gray-500 max-w-xl mx-auto">
          On paper, modern corporate grids are pure meritocracies. In practice, cultural conditioning leaks into promotional funnels, creating asymmetrical glass corridors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Organizational Chart Vertical Tracks */}
        <div className="col-span-1 lg:col-span-5 space-y-3">
          <span className="font-display text-xs font-semibold text-gray-400 uppercase tracking-widest block mb-1">
            Choose Corporate Orbit
          </span>

          {CORPORATE_LADDER.map((level, index) => {
            const isActive = level.id === activeLevelId;
            return (
              <button
                key={level.id}
                id={`corp-level-btn-${level.id}`}
                onClick={() => setActiveLevelId(level.id)}
                className={`w-full text-left p-4.5 rounded-2xl border transition-all duration-300 flex justify-between items-center cursor-pointer ${
                  isActive 
                    ? 'bg-[#3a322d] border-[#3a322d] text-white shadow-md translate-x-2' 
                    : 'bg-white hover:bg-[#faf8f5] border-stone-200 text-stone-700'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-xs w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-[#8c7851] text-white' : 'bg-stone-100 text-stone-500'
                  }`}>
                    0{CORPORATE_LADDER.length - index}
                  </span>
                  <div>
                    <h4 className="font-serif text-md font-semibold font-medium tracking-tight">
                      {level.title}
                    </h4>
                    <p className={`text-[11px] font-sans ${isActive ? 'text-stone-300' : 'text-gray-400'}`}>
                      Women: {level.percentWomen}% / Men: {level.percentMen}%
                    </p>
                  </div>
                </div>
                <ChevronRight size={16} className={`transition-transform duration-300 ${isActive ? 'rotate-90 text-[#d4c39e]' : 'text-gray-300'}`} />
              </button>
            );
          })}
        </div>

        {/* Right Column: Visualization & Double Standards Details */}
        <div id="corporate-details-panel" className="col-span-1 lg:col-span-7 bg-white border border-[#e8dfc4] rounded-3xl p-6 md:p-8 shadow-xs">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeLevel.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="space-y-6"
            >
              {/* Animated Representation bar */}
              <div>
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#8c7851] font-semibold bg-[#faf8f5] px-2.5 py-1 rounded">
                  Cohort Leakage Index
                </span>
                <h4 className="font-serif text-xl font-bold text-[#2c2a29] mt-3 mb-1">
                  Demographic Composition Ratio
                </h4>
                <p className="text-[11px] font-sans text-gray-500">
                  {activeLevel.gapText}
                </p>

                {/* Graphic bar chart mapping percentages */}
                <div className="w-full h-8 bg-stone-100 rounded-lg overflow-hidden flex mt-4 relative">
                  <motion.div
                    className="h-full bg-amber-500/80 hover:bg-amber-500 flex items-center justify-center text-white font-mono text-xs font-semibold relative transition-colors"
                    initial={{ width: 0 }}
                    animate={{ width: `${activeLevel.percentWomen}%` }}
                    transition={{ type: 'spring', stiffness: 50, damping: 15 }}
                  >
                    <span>{activeLevel.percentWomen}% W</span>
                  </motion.div>
                  <motion.div
                    className="h-full bg-[#3a322d]/80 hover:bg-[#3a322d] flex-1 flex items-center justify-center text-stone-200 font-mono text-xs font-semibold relative transition-colors"
                    initial={{ width: 0 }}
                    animate={{ width: `${activeLevel.percentMen}%` }}
                    transition={{ type: 'spring', stiffness: 50, damping: 15, delay: 0.1 }}
                  >
                    <span>{activeLevel.percentMen}% M</span>
                  </motion.div>
                </div>
              </div>

              {/* Expectations & Coding Standard */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-stone-100 pt-5">
                <div className="p-4 bg-stone-50 rounded-xl space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 block font-semibold flex items-center gap-1">
                    <Target size={10} /> Coded Leadership Expectation
                  </span>
                  <p className="text-xs text-gray-700 font-sans leading-relaxed">
                    {activeLevel.leadershipExpectations}
                  </p>
                </div>

                <div className="p-4 bg-amber-50/40 border border-amber-100 rounded-xl space-y-1">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-amber-700 block font-semibold flex items-center gap-1">
                    <TrendingDown size={10} className="text-amber-600 animate-bounce" /> Core Funnel Barrier
                  </span>
                  <p className="text-xs text-amber-900 font-sans font-medium leading-relaxed">
                    <strong>{activeLevel.barrierName}:</strong> {activeLevel.barrierDescription}
                  </p>
                </div>
              </div>

              {/* Comparative Double Standards details box */}
              <div className="border-t border-stone-100 pt-5 space-y-3.5">
                <span className="font-display text-xs font-semibold text-gray-500 uppercase tracking-widest block">
                  Cultural Coding double Standard
                </span>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border border-stone-100 rounded-xl space-y-1 bg-[#faf8f5]/50">
                    <span className="font-sans text-xs font-semibold text-stone-800 block">
                      When a male colleague displays this:
                    </span>
                    <p className="text-xs text-stone-600 font-sans italic leading-relaxed">
                      "{activeLevel.doubleStandard.man}"
                    </p>
                  </div>

                  <div className="p-4 border border-amber-100 rounded-xl space-y-1 bg-amber-50/20">
                    <span className="font-sans text-xs font-semibold text-amber-950 block">
                      When a female colleague displays this:
                    </span>
                    <p className="text-xs text-amber-800 font-sans italic leading-relaxed">
                      "{activeLevel.doubleStandard.woman}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Study footnote */}
              <div className="space-y-2.5">
                <div className="flex gap-2 items-center text-[10px] text-gray-400 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                  <Eye size={12} className="text-[#8c7851]" />
                  <span>Source tracking indicates these promotion discrepancies are almost entirely unintentional, driven by deep cultural habits.</span>
                </div>
                <div className="text-[10px] text-[#8c7851] pl-2 flex items-center flex-wrap gap-1.5 font-sans">
                  <span className="w-1 h-1 rounded-full bg-amber-500" />
                  <span>Statistical Reference:</span>
                  <a 
                    href="https://www.mckinsey.com/featured-insights/diversity-and-inclusion/women-in-the-workplace" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="underline hover:text-amber-700 transition font-medium inline-flex items-center gap-0.5"
                  >
                    McKinsey & Company: Women in the Workplace report
                    <span className="text-[9px]">↗</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
