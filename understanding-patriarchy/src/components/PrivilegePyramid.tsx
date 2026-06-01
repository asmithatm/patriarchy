/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRIVILEGE_SPECTRUM, MISCONCEPTIONS } from '../data';
import { ShieldAlert, HelpCircle, Layers, Fingerprint, Zap, Award } from 'lucide-react';

export default function PrivilegePyramid() {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>('elite-men');
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const activeNode = PRIVILEGE_SPECTRUM.find(n => n.id === hoveredNodeId) || PRIVILEGE_SPECTRUM[0];

  const handleCardClick = (id: string) => {
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  return (
    <div id="privilege-hierarchy-spectrum" className="w-full max-w-5xl mx-auto px-4 py-8 space-y-12">
      
      {/* SECTION 6: Privilege Pyramid */}
      <div className="bg-white border border-[#e8dfc4] rounded-3xl p-6 md:p-10 shadow-xs">
        <div className="text-center mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-3 py-1 rounded-full">
            Power Mapping
          </span>
          <h3 className="font-serif text-3xl md:text-4xl text-[#3a322d] mt-4 mb-2 tracking-tight">
            Who Benefits From Patriarchy?
          </h3>
          <p className="text-sm font-sans text-gray-500 max-w-xl mx-auto">
            A common oversimplification suggests all men profit from patriarchy identically. In reality, benefits distribute along a strict hierarchy. Tap different levels to analyze the spectrum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Privilege Pyramid Diagram (Left) */}
          <div className="col-span-1 lg:col-span-6 flex flex-col items-center justify-center space-y-4">
            <div className="w-full max-w-[360px] flex flex-col gap-3">
              {PRIVILEGE_SPECTRUM.map((node, index) => {
                const isActive = node.id === hoveredNodeId;
                const widthClasses = index === 0 ? 'w-full max-w-[140px] mx-auto' : index === 1 ? 'w-full max-w-[240px] mx-auto' : 'w-full';
                const colorClasses = index === 0 
                  ? 'bg-amber-100 hover:bg-amber-200 text-amber-900 border-amber-400' 
                  : index === 1 
                  ? 'bg-[#f4eedc] hover:bg-[#e8dfc4] text-[#3a322d] border-[#8c7851]/30' 
                  : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200';

                return (
                  <motion.div
                    key={node.id}
                    id={`pyramid-tier-${node.id}`}
                    onMouseEnter={() => setHoveredNodeId(node.id)}
                    onClick={() => setHoveredNodeId(node.id)}
                    className={`p-4 rounded-xl border-1.5 text-center cursor-pointer transition-all duration-300 shadow-xs ${widthClasses} ${colorClasses} ${
                      isActive ? 'ring-2 ring-amber-500 scale-[1.03]' : ''
                    }`}
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="font-mono text-[9px] uppercase tracking-widest text-slate-500 block mb-0.5">
                      Tier 0{3 - index} — {node.advantageLevel} Advantage
                    </span>
                    <h4 className="font-serif text-md font-bold leading-tight">
                      {node.category}
                    </h4>
                  </motion.div>
                );
              })}
            </div>

            <div className="text-center font-mono text-[10px] text-gray-400">
              ◄ Top: Concentrated Power &nbsp;|&nbsp; Bottom: Generalized Structures ►
            </div>
          </div>

          {/* Details Box (Right) */}
          <div className="col-span-1 lg:col-span-6">
            <div className="bg-[#faf8f5] border border-stone-200/80 rounded-2xl p-6 min-h-[280px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeNode.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[#8c7851] font-semibold">
                      Hierarchical Stratum: {activeNode.advantageLevel}
                    </span>
                    <h4 className="font-serif text-2xl font-bold text-[#2c2a29] mt-1">
                      {activeNode.category}
                    </h4>
                    <p className="text-stone-500 font-sans text-xs mt-1.5 leading-relaxed">
                      <strong>Core constituency:</strong> {activeNode.who}
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 font-sans leading-relaxed">
                    {activeNode.details}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-stone-200/40">
                    <span className="font-display text-xs font-semibold text-stone-700 uppercase tracking-wider block">
                      Underlying Advantage Lines:
                    </span>
                    {activeNode.mechanisms.map((mech, index) => (
                      <div key={index} className="flex gap-2 text-xs font-sans text-gray-600 leading-relaxed items-start">
                        <span className="text-amber-500 flex items-center justify-center shrink-0 mt-0.5 font-bold">•</span>
                        <span>{mech}</span>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 7: Flippable Nuance Comparison Cards */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851]">Nuanced Realities</span>
          <h3 className="font-serif text-2xl md:text-3xl text-[#3a322d] tracking-tight">
            Deconstructing The Oversimplification
          </h3>
          <p className="text-sm font-sans text-stone-605">
            Simplistic models block collective growth. Tap each card below to flip and expand details revealing real-world vulnerability variances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          {MISCONCEPTIONS.map((card) => {
            const isFlipped = flippedCardId === card.id;
            return (
              <div
                key={card.id}
                id={`nuance-card-${card.id}`}
                onClick={() => handleCardClick(card.id)}
                className="w-full min-h-[460px] md:min-h-[400px] perspective-1000 cursor-pointer"
              >
                <motion.div
                  className="w-full h-full relative transform-style-3d transition-transform duration-700 ease-out"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                >
                  {/* Card Front: Misconception */}
                  <div className="absolute inset-0 backface-hidden bg-white border-1.5 border-stone-200 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xs">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="font-mono text-[9px] uppercase tracking-widest font-semibold px-2.5 py-1 text-red-700 bg-red-50 rounded-full">
                          Common Belief
                        </span>
                        <HelpCircle size={16} className="text-gray-300" />
                      </div>
                      <h4 className="font-serif text-xl md:text-2xl font-bold text-gray-800 leading-snug mt-2">
                        {card.misconception}
                      </h4>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-amber-700 font-mono font-medium pt-4 border-t border-gray-100">
                      <span>Tap to flip and dissect reality</span>
                      <motion.span animate={{ x: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                        →
                      </motion.span>
                    </div>
                  </div>

                  {/* Card Back: Detailed Reality */}
                  <div className="absolute inset-0 backface-hidden bg-[#faf6eb] border-2 border-[#8c7851]/80 rounded-2xl p-6 md:p-8 flex flex-col justify-between rotate-y-180 text-[#3a322d] shadow-lg shadow-[#8c7851]/10">
                    <div className="space-y-4 flex-1 flex flex-col justify-start">
                      <div className="flex justify-between items-start">
                        <span className="font-mono text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 text-amber-900 bg-amber-100 rounded-full">
                          Structural Insight
                        </span>
                        <Zap size={16} className="text-amber-700 animate-pulse" />
                      </div>
                      
                      <h4 className="font-serif text-lg font-bold text-[#2a2522] leading-snug">
                        {card.realityTitle}
                      </h4>
                      <p className="text-xs text-stone-650 font-sans leading-relaxed">
                        {card.differentRealities}
                      </p>

                      <div className="p-3 bg-white border border-[#e8dfc4] rounded-xl space-y-1 shadow-2xs mt-auto">
                        <span className="font-display font-semibold text-[10px] text-amber-800 block uppercase tracking-wider">
                          Case Study Context: {card.exampleName}
                        </span>
                        <p className="text-[11px] text-stone-600 font-sans leading-relaxed italic">
                          "{card.exampleContext}"
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-[#e8dfc4] flex justify-between items-center text-[10px] text-[#8c7851] font-mono">
                      <span>Swipe/Tap to read more</span>
                      <span>Tap card to return</span>
                    </div>
                  </div>

                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
