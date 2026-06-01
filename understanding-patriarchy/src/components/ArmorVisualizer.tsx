/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ARMOR_PIECES } from '../data';
import { AlertCircle, HelpCircle, ShieldAlert, HeartOff, Orbit, Sparkles } from 'lucide-react';

export default function ArmorVisualizer() {
  const [equippedPieces, setEquippedPieces] = useState<string[]>(['helmet']);
  const [activePieceId, setActivePieceId] = useState<string>('helmet');

  const togglePiece = (id: string) => {
    if (equippedPieces.includes(id)) {
      if (equippedPieces.length > 1) { // keep at least 1 for display
        setEquippedPieces(equippedPieces.filter(p => p !== id));
        if (activePieceId === id) {
          const remaining = equippedPieces.filter(p => p !== id);
          setActivePieceId(remaining[0]);
        }
      }
    } else {
      setEquippedPieces([...equippedPieces, id]);
      setActivePieceId(id);
    }
  };

  const activePiece = ARMOR_PIECES.find(p => p.id === activePieceId) || ARMOR_PIECES[0];

  // Calculate total weight based on equipped components
  const calculateTotalWeight = () => {
    let total = 0;
    if (equippedPieces.includes('helmet')) total += 25;
    if (equippedPieces.includes('pauldron')) total += 40;
    if (equippedPieces.includes('cuirass')) total += 35;
    if (equippedPieces.includes('gauntlet')) total += 20;
    return total;
  };

  const totalWeight = calculateTotalWeight();
  const maxWeight = 120;
  const isCracked = totalWeight >= 100;

  return (
    <div id="male-armor-visualizer" className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-3 py-1 rounded-full">
          Identity Armor
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-[#3a322d] mt-4 mb-2 tracking-tight">
          How Men Suffer Under Patriarchy
        </h3>
        <p className="text-sm font-sans text-gray-500 max-w-xl mx-auto">
          In exchange for nominal societal authority, patriarchy bundles rigid survival obligations. Interact below to equip the armor and analyze the cumulative psychological burden.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Interactive SVG Armor Assembly Render */}
        <div className="col-span-1 lg:col-span-5 bg-gradient-to-br from-stone-700 to-stone-800 text-[#faf9f6] rounded-3xl p-6 flex flex-col justify-between min-h-[380px] sm:min-h-[460px] relative border border-[#8c7851]/50 shadow-md">
          
          {/* Systems grid backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(rgba(212,175,55,0.08)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none rounded-3xl" />

          {/* Armor graphic representation */}
          <div className="flex-1 flex flex-col items-center justify-start py-4 relative">
            
            {/* Burden Stress Meter */}
            <div className="text-center mb-4 z-10 bg-black/10 px-4 py-2 rounded-xl border border-stone-600/30 w-full max-w-[220px]">
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#d4c39e] block leading-none mb-1">
                Burden Stress Meter
              </span>
              <span className={`font-display text-lg font-bold tracking-wider block ${isCracked ? 'text-red-400 animate-pulse' : 'text-[#faf9f6]'}`}>
                {totalWeight} kg / {maxWeight} kg
              </span>
            </div>

            <div className="relative w-full max-w-[170px] sm:max-w-[210px] aspect-square flex items-center justify-center">
              
              {/* Dynamic outline base */}
              <svg viewBox="0 0 100 100" className="w-full h-full fill-none">
                {/* Underlay glowing nodes */}
                <circle cx="50" cy="50" r="30" className="stroke-stone-800/80 stroke-1" />
                
                {/* Ground shadows */}
                <ellipse cx="50" cy="90" rx="20" ry="3" className="fill-black/40" />

                {/* Cracks Overlay when heavy weights are accumulated */}
                {isCracked && (
                  <g className="stroke-[#d4c39e] stroke-[1.5px] opacity-80 animate-pulse pointer-events-none">
                    <path d="M48 20l4 8-3 6 4 4" />
                    <path d="M52 45h-6l-3 4" />
                    <path d="M45 70l10-4" />
                  </g>
                )}

                {/* HELMET (Stoicism) */}
                <g className={`transition-all duration-700 ${equippedPieces.includes('helmet') ? 'stroke-amber-400 fill-amber-500/5' : 'stroke-stone-800 fill-none opacity-20'}`}>
                  {/* Visor shield representing helmet */}
                  <path d="M50 12c-8 0-14 4-14 10v14l14 6 14-6V22c0-6-6-10-14-10z" strokeWidth="2" />
                  <line x1="36" y1="26" x2="64" y2="26" strokeWidth="1.5" />
                  <line x1="42" y1="32" x2="58" y2="32" strokeWidth="1" strokeDasharray="1,1" />
                </g>

                {/* CUIRASS (Chest of Expendability) */}
                <g className={`transition-all duration-700 ${equippedPieces.includes('cuirass') ? 'stroke-[#8c7851] fill-[#8c7851]/5' : 'stroke-stone-800 fill-none opacity-20'}`}>
                  <path d="M36 38c-2 4-4 8-4 12s2 16 6 22h24c4-6 6-18 6-22s-2-8-4-12L50 42 36 38z" strokeWidth="2" />
                  <circle cx="50" cy="55" r="4" className="stroke-stone-600 fill-none" />
                </g>

                {/* PAULDRONS (Utility workload shoulders) */}
                <g className={`transition-all duration-700 ${equippedPieces.includes('pauldron') ? 'stroke-stone-400 fill-stone-500/5' : 'stroke-stone-800 fill-none opacity-20'}`}>
                  <path d="M36 38c-4-1-8 2-10 6s2 10 4 11l6-17zm28 0c4-1 8 2 10 6s-2 10-4 11l-6-17z" strokeWidth="1.8" />
                </g>

                {/* GAUNTLETS (Isolation/Dominance fists) */}
                <g className={`transition-all duration-700 ${equippedPieces.includes('gauntlet') ? 'stroke-slate-300 fill-slate-300/5' : 'stroke-stone-800 fill-none opacity-20'}`}>
                  <path d="M22 65s-4 4-4 8v10h8V73l-4-8zm56 0s4 4 4 8v10h-8V73l4-8z" strokeWidth="1.8" />
                </g>
              </svg>
            </div>
          </div>

          {/* Stress Cracks indicator card */}
          <div className="border-t border-stone-800 pt-4 mt-2">
            <AnimatePresence mode="wait">
              {isCracked ? (
                <motion.div
                  key="cracked-warn"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-3 p-3 bg-red-950/40 border border-red-900/50 rounded-xl"
                >
                  <AlertCircle size={16} className="text-red-400 shrink-0" />
                  <p className="text-[10px] text-red-300 leading-snug">
                    <strong>Critical Stress:</strong> The emotional armor becomes too rigid. Heavy provider focus combined with emotional restriction triggers deep internal fragmentation and cracks.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="normal-state"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-3 p-3 bg-stone-800/80 border border-stone-600 rounded-xl text-stone-100"
                >
                  <HelpCircle size={16} className="text-stone-500 shrink-0" />
                  <p className="text-[10px] leading-snug">
                    Toggle individual checkboxes on the right to examine how different layers of social conditioning compound masculine isolation.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Right Column: Narrative Interactivity Checks & Details */}
        <div className="col-span-1 lg:col-span-7 flex flex-col justify-between">
          <div className="space-y-6">
            
            {/* Interactive checklist buttons */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {ARMOR_PIECES.map((piece) => {
                const isSelected = equippedPieces.includes(piece.id);
                return (
                  <button
                    key={piece.id}
                    id={`armor-toggle-${piece.id}`}
                    onClick={() => togglePiece(piece.id)}
                    className={`p-3 rounded-xl border text-left cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[90px] ${
                      isSelected 
                        ? 'bg-[#3a322d] border-[#3a322d] text-white shadow-xs' 
                        : 'bg-white hover:bg-stone-50 border-stone-200 text-stone-600'
                    }`}
                  >
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#8c7851] block mb-1">
                      {piece.weightText.split(' ')[0]}
                    </span>
                    <h5 className="font-serif text-xs font-bold leading-tight">
                      {piece.name.replace('The ', '')}
                    </h5>
                  </button>
                );
              })}
            </div>

            {/* Selector panel displaying information */}
            <div className="bg-[#faf8f5] border border-stone-200/80 rounded-2xl p-6 min-h-[220px]">
              
              {/* Quick tabs representation */}
              <div className="flex gap-2.5 border-b border-stone-200/50 pb-3 mb-4">
                {equippedPieces.map((pId) => {
                  const pNode = ARMOR_PIECES.find(node => node.id === pId);
                  if (!pNode) return null;
                  const isActive = pId === activePieceId;
                  return (
                    <button
                      key={`${pId}-tab`}
                      id={`piece-tab-${pId}`}
                      onClick={() => setActivePieceId(pId)}
                      className={`px-2.5 py-1 rounded text-[10px] font-display font-medium tracking-wide transition-all cursor-pointer ${
                        isActive 
                          ? 'bg-[#8c7851] text-white' 
                          : 'bg-white text-gray-500 border border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {pNode.name.split(' ').pop()}
                    </button>
                  );
                })}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activePiece.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div>
                    <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] font-semibold">
                      {activePiece.weightText}
                    </span>
                    <h4 className="font-serif text-xl font-bold text-[#2c2a29] mt-1">
                      {activePiece.name}
                    </h4>
                  </div>

                  <div className="p-3.5 bg-red-100/10 border-l-2 border-red-500/30 rounded-r-xl space-y-1">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-red-700 font-semibold block uppercase">
                      Mandated Expectation
                    </span>
                    <p className="text-xs text-[#2c2a29] font-sans italic leading-relaxed">
                      {activePiece.expectation}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div className="space-y-1">
                      <span className="font-display text-[11px] font-bold text-gray-400 uppercase tracking-widest block">
                        Psychological Cost
                      </span>
                      <p className="text-xs text-gray-650 font-sans leading-relaxed">
                        {activePiece.emotionalCost}
                      </p>
                    </div>

                    <div className="space-y-1">
                      <span className="font-display text-[11px] font-bold text-red-450 uppercase tracking-widest block">
                        Societal Symptom
                      </span>
                      <p className="text-xs text-red-900 font-sans leading-relaxed">
                        {activePiece.symptom}
                      </p>
                    </div>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

          </div>

          <div className="mt-6 pt-4 border-t border-stone-200/60 flex items-center gap-2 text-xs text-gray-400 font-mono">
            <span>"Your worth equals your usefulness." — A message built to drive authority while demanding crushing sacrifices.</span>
          </div>

        </div>

      </div>
    </div>
  );
}
