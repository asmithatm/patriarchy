/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DEFEND_PERSPECTIVES, CRITIC_PERSPECTIVES } from '../data';
import { Scale, ShieldQuestion, AlertCircle, BookOpen, HelpCircle } from 'lucide-react';

export default function PerspectiveExplorer() {
  const [activeSide, setActiveSide] = useState<'defend' | 'critic'>('critic');
  const [activeDefId, setActiveDefId] = useState<string>('def-1');
  const [activeCritId, setActiveCritId] = useState<string>('crit-1');

  const selectedDef = DEFEND_PERSPECTIVES.find(p => p.id === activeDefId) || DEFEND_PERSPECTIVES[0];
  const selectedCrit = CRITIC_PERSPECTIVES.find(p => p.id === activeCritId) || CRITIC_PERSPECTIVES[0];

  return (
    <div id="perspective-branch-explorer" className="w-full max-w-5xl mx-auto px-4 py-8">
      
      <div className="text-center mb-10">
        <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-3 py-1 rounded-full">
          Dual Perspectives
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-[#3a322d] mt-4 mb-2 tracking-tight">
          The Intellectual Debate
        </h3>
        <p className="text-sm font-sans text-gray-500 max-w-xl mx-auto">
          Modern societies have gained unprecedented individual freedom but occasionally debate lost clarity. Explore the primary philosophical arguments around this system fairly and objectively.
        </p>
      </div>

      {/* Axis Switcher Panel (NYT Style) */}
      <div className="flex border border-stone-250 rounded-2xl overflow-hidden bg-white mb-8 p-1 shadow-xs max-w-md mx-auto">
        <button
          id="side-critic-btn"
          onClick={() => setActiveSide('critic')}
          className={`flex-1 py-3 text-xs font-display font-medium tracking-wide rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all ${
            activeSide === 'critic' 
              ? 'bg-amber-100 text-amber-900 border-1 border-amber-300' 
              : 'hover:bg-gray-50 text-gray-600'
          }`}
        >
          <AlertCircle size={14} className="text-amber-700" />
          <span>Why Many Criticize It Today</span>
        </button>

        <button
          id="side-defend-btn"
          onClick={() => setActiveSide('defend')}
          className={`flex-1 py-3 text-xs font-display font-medium tracking-wide rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all ${
            activeSide === 'defend' 
              ? 'bg-stone-100 text-stone-900 border-1 border-stone-300' 
              : 'hover:bg-gray-50 text-gray-500'
          }`}
        >
          <ShieldQuestion size={14} className="text-stone-700" />
          <span>Why Some Still Defend It</span>
        </button>
      </div>

      <div className="bg-white border border-[#e8dfc4] rounded-3xl p-6 md:p-8 min-h-[420px] flex flex-col justify-between shadow-xs">
        <AnimatePresence mode="wait">
          {activeSide === 'critic' ? (
            <motion.div
              key="critic-screen"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left sidebar triggers */}
              <div className="col-span-1 lg:col-span-5 space-y-3">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#8c7851] block mb-2 font-bold select-none">
                  Criticism Sub-branches (Modern Economy)
                </span>
                
                {CRITIC_PERSPECTIVES.map((item) => {
                  const isActive = item.id === activeCritId;
                  return (
                    <button
                      key={item.id}
                      id={`crit-btn-${item.id}`}
                      onClick={() => setActiveCritId(item.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        isActive 
                          ? 'bg-amber-50/50 border-amber-300 text-amber-950 font-semibold' 
                          : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                      }`}
                    >
                      <h4 className="font-serif text-sm tracking-tight">{item.title}</h4>
                    </button>
                  );
                })}
              </div>

              {/* Right content panel */}
              <div className="col-span-1 lg:col-span-7 space-y-5">
                <div>
                  <span className="font-mono text-[10px] text-amber-700 uppercase tracking-widest font-semibold bg-amber-50 px-2 py-0.5 rounded">
                    Core Argument
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-gray-800 mt-2">
                    {selectedCrit.title}
                  </h4>
                  <p className="font-mono text-xs text-[#8c7851] mt-1 italic">
                    Core Principle: {selectedCrit.keyAxiom}
                  </p>
                </div>

                <p className="text-sm font-sans text-gray-650 leading-relaxed">
                  {selectedCrit.argumentSummary}
                </p>

                <div className="p-4 bg-[#faf8f5] border-l-2 border-amber-500 rounded-r-xl space-y-1.5">
                  <span className="font-display text-xs text-amber-900 font-bold block uppercase tracking-wide flex items-center gap-1.5">
                    <BookOpen size={12} className="text-amber-700" /> Sociological Quote
                  </span>
                  <p className="text-xs text-stone-600 font-serif leading-relaxed italic">
                    {selectedCrit.fairQuote}
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="defend-screen"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left sidebar triggers */}
              <div className="col-span-1 lg:col-span-5 space-y-3">
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#8c7851] block mb-2 font-bold select-none">
                  Defense Sub-branches (Historical Stabilizers)
                </span>
                
                {DEFEND_PERSPECTIVES.map((item) => {
                  const isActive = item.id === activeDefId;
                  return (
                    <button
                      key={item.id}
                      id={`def-btn-${item.id}`}
                      onClick={() => setActiveDefId(item.id)}
                      className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer ${
                        isActive 
                          ? 'bg-neutral-100 border-neutral-400 text-stone-950 font-semibold' 
                          : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-700'
                      }`}
                    >
                      <h4 className="font-serif text-sm tracking-tight">{item.title}</h4>
                    </button>
                  );
                })}
              </div>

              {/* Right content panel */}
              <div className="col-span-1 lg:col-span-7 space-y-5">
                <div>
                  <span className="font-mono text-[10px] text-stone-700 uppercase tracking-widest font-semibold bg-stone-100 px-2.5 py-0.5 rounded">
                    Core Security Thesis
                  </span>
                  <h4 className="font-serif text-2xl font-bold text-stone-900 mt-2">
                    {selectedDef.title}
                  </h4>
                  <p className="font-mono text-xs text-[#8c7851] mt-1 italic">
                    Core Principle: {selectedDef.keyAxiom}
                  </p>
                </div>

                <p className="text-sm font-sans text-gray-650 leading-relaxed">
                  {selectedDef.argumentSummary}
                </p>

                <div className="p-4 bg-[#faf8f5] border-l-2 border-[#8c7851] rounded-r-xl space-y-1.5">
                  <span className="font-display text-xs text-[#3a322d] font-bold block uppercase tracking-wide flex items-center gap-1.5">
                    <BookOpen size={12} className="text-[#8c7851]" /> Historical Record
                  </span>
                  <p className="text-xs text-stone-600 font-serif leading-relaxed italic">
                    {selectedDef.fairQuote}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="border-t border-stone-200/50 pt-4 mt-6 flex gap-2 items-center text-[10px] text-gray-400 font-sans">
          <Scale size={14} className="text-stone-400 shrink-0" />
          <span>This guide seeks to unpack sociological realities rather than supply polemic mandates. Our goal is understanding over conflict.</span>
        </div>
      </div>

    </div>
  );
}
