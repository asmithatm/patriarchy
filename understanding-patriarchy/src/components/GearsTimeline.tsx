/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GEAR_STEPS } from '../data';
import { Cog, SlidersHorizontal, RefreshCcw, Activity } from 'lucide-react';

export default function GearsTimeline() {
  const [activeStepId, setActiveStepId] = useState<number>(1);

  const activeStep = GEAR_STEPS.find(s => s.id === activeStepId) || GEAR_STEPS[0];

  return (
    <div id="gears-storytelling-timeline" className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-3 py-1 rounded-full">
          Metaphoric Engine
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-[#3a322d] mt-4 mb-2 tracking-tight">
          How the Cycle Keeps Going
        </h3>
        <p className="text-sm font-sans text-gray-500 max-w-xl mx-auto">
          Think of patriarchy as invisible software, or interlocking machinery operating quietly behind society. Select each phase to inspect how gears feed into one another.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#faf8f5] border border-[#e8dfc4] rounded-3xl p-6 md:p-10 shadow-xs overflow-hidden relative">
        
        {/* Background grid accents */}
        <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#8c7851_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

        {/* Left Column: Interactive animated gears scene */}
        <div className="col-span-1 lg:col-span-6 flex flex-col items-center justify-center relative min-h-[320px]">
          
          {/* Main Gear SVG layout */}
          <div className="w-full max-w-[340px] aspect-square relative flex items-center justify-center">
            
            {/* Gear 1: Big Driver (Beliefs - Top Left) */}
            <div className="absolute top-[10%] left-[10%] w-[150px] h-[150px] flex items-center justify-center">
              <motion.div
                id="gear-beliefs"
                className="w-full h-full text-amber-500/10 dark:text-amber-400/5 relative flex items-center justify-center"
                animate={{
                  rotate: activeStepId === 1 ? 360 : activeStepId === 2 ? 240 : 120
                }}
                transition={{
                  duration: 2.2,
                  ease: 'easeInOut'
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-1">
                  <circle cx="50" cy="50" r="40" className="stroke-amber-600/30" />
                  <circle cx="50" cy="50" r="28" className="stroke-amber-600/10" strokeDasharray="3, 2" />
                  {/* Teeth */}
                  {Array.from({ length: 12 }).map((_, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="5"
                      x2="50"
                      y2="15"
                      className="stroke-amber-600/40"
                      strokeWidth="3.5"
                      transform={`rotate(${i * 30} 50 50)`}
                    />
                  ))}
                </svg>
                <div className="absolute text-center">
                  <Cog size={28} className="text-[#8c7851] mx-auto animate-spin-slow" />
                  <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 block mt-1">BELIEFS</span>
                </div>
              </motion.div>
            </div>

            {/* Gear 2: Middle Interlocking (Expectations/Behaviors - Center Right) */}
            <div className="absolute top-[35%] right-[5%] w-[130px] h-[130px] flex items-center justify-center">
              <motion.div
                id="gear-institutions"
                className="w-full h-full text-slate-500/10 relative flex items-center justify-center"
                animate={{
                  rotate: activeStepId === 3 ? -360 : activeStepId === 4 ? -240 : -120
                }}
                transition={{
                  duration: 1.8,
                  ease: 'easeInOut'
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-1">
                  <circle cx="50" cy="50" r="40" className="stroke-slate-600/30" />
                  <circle cx="50" cy="50" r="24" className="stroke-slate-600/10" strokeDasharray="4, 4" />
                  {/* Teeth */}
                  {Array.from({ length: 10 }).map((_, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="5"
                      x2="50"
                      y2="15"
                      className="stroke-slate-600/40"
                      strokeWidth="4"
                      transform={`rotate(${i * 36 + 18} 50 50)`}
                    />
                  ))}
                </svg>
                <div className="absolute text-center">
                  <SlidersHorizontal size={22} className="text-slate-600 mx-auto" />
                  <span className="font-mono text-[8px] uppercase tracking-wider text-gray-400 block mt-1">SYSTEMS</span>
                </div>
              </motion.div>
            </div>

            {/* Gear 3: Small Output Gear (Outcomes - Bottom Left) */}
            <div className="absolute bottom-[10%] left-[18%] w-[110px] h-[110px] flex items-center justify-center">
              <motion.div
                id="gear-outcomes"
                className="w-full h-full text-[#3a322d]/10 relative flex items-center justify-center"
                animate={{
                  rotate: activeStepId === 5 ? 360 : activeStepId === 4 ? 180 : 0
                }}
                transition={{
                  duration: 1.5,
                  ease: 'easeInOut'
                }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-1">
                  <circle cx="50" cy="50" r="40" className="stroke-stone-600/30" />
                  {/* Teeth */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line
                      key={i}
                      x1="50"
                      y1="5"
                      x2="50"
                      y2="15"
                      className="stroke-stone-600/40"
                      strokeWidth="5"
                      transform={`rotate(${i * 45} 50 50)`}
                    />
                  ))}
                </svg>
                <div className="absolute text-center">
                  <Activity size={18} className="text-stone-800 mx-auto" />
                  <span className="font-mono text-[8px] uppercase tracking-wider text-gray-500 block mt-0.5">OUTCOMES</span>
                </div>
              </motion.div>
            </div>

          </div>

          <div className="mt-4 text-center">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-400 bg-white border border-gray-200 rounded-full py-1 px-3">
              <RefreshCcw size={10} className="animate-spin-slow text-[#8c7851]" />
              <span>Interplay active: gear sequence connects</span>
            </span>
          </div>

        </div>

        {/* Right Column: Narrative timelines */}
        <div className="col-span-1 lg:col-span-6 space-y-6">
          <div className="flex flex-col gap-2">
            
            {/* Horizontal Timeline Steps */}
            <div className="flex justify-between border-b border-gray-200 pb-1.5 overflow-x-auto hide-scrollbar whitespace-nowrap">
              {GEAR_STEPS.map((step) => {
                const isActive = step.id === activeStepId;
                return (
                  <button
                    key={step.id}
                    id={`gate-step-${step.id}`}
                    onClick={() => setActiveStepId(step.id)}
                    className={`pb-3 px-3 relative font-display text-sm font-semibold transition-all cursor-pointer ${
                      isActive ? 'text-[#3a322d]' : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    <span>{step.title}</span>
                    {isActive && (
                      <motion.div
                        layoutId="gear-timeline-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8c7851]"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Step Explanations Content */}
            <div className="min-h-[220px] pt-4 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded">
                      Step 0{activeStep.id} — {activeStep.subtitle}
                    </span>
                    <h4 className="font-serif text-2xl font-semibold text-[#2c2a29] mt-2 leading-tight">
                      {activeStep.title} Drive
                    </h4>
                  </div>
                  
                  <p className="text-sm font-sans text-gray-600 leading-relaxed">
                    {activeStep.description}
                  </p>

                  <div className="p-4 bg-white border border-gray-100 rounded-xl">
                    <span className="font-display text-xs font-semibold text-gray-500 uppercase tracking-widest block">
                      How It Feeds the Cycle:
                    </span>
                    <p className="text-xs text-gray-500 font-sans mt-1 leading-relaxed">
                      {activeStep.connectingConcept}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation button rows */}
              <div className="flex gap-2.5 mt-6 pt-4 border-t border-gray-100">
                <button
                  id="gear-prev-btn"
                  disabled={activeStepId === 1}
                  onClick={() => setActiveStepId(p => p - 1)}
                  className="px-4 py-2 bg-white border border-gray-200 text-[#3a322d] text-xs font-semibold rounded-lg hover:bg-gray-50 transition duration-200 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  ← Previous
                </button>
                <button
                  id="gear-next-btn"
                  disabled={activeStepId === GEAR_STEPS.length}
                  onClick={() => setActiveStepId(p => p + 1)}
                  className="px-4 py-2 bg-[#3a322d] hover:bg-[#2c2a29] text-white text-xs font-semibold rounded-lg transition duration-200 disabled:opacity-40 disabled:cursor-not-allowed flex-1 flex justify-center items-center gap-1.5 cursor-pointer"
                >
                  <span>{activeStepId === GEAR_STEPS.length ? 'System Complete' : 'Trigger Next Gear →'}</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
