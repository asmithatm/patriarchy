/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SYSTEM_LAYERS } from '../data';
import { HelpCircle, Sparkles, Orbit } from 'lucide-react';

export default function SystemDiagram() {
  const [activeLayerId, setActiveLayerId] = useState<string>('layer-workplace');

  const activeLayer = SYSTEM_LAYERS.find(l => l.id === activeLayerId) || SYSTEM_LAYERS[0];

  return (
    <div id="systemic-layers-diagram" className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-3 py-1 rounded-full">
          Concentric Dynamics
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-[#3a322d] mt-4 mb-2 tracking-tight">
          The Anatomy of an Operating System
        </h3>
        <p className="text-sm font-sans text-gray-500 max-w-xl mx-auto">
          Hover over or tap a systemic ring to watch how power, expectations, and cultural codes radiate outwards from the patriarchal core.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Interactive concentric radial SVG */}
        <div className="col-span-1 lg:col-span-6 flex justify-center py-6 relative">
          <div className="w-full max-w-[380px] h-[380px] relative flex items-center justify-center p-2">
            
            {/* Center Core: Patriarchy */}
            <motion.div
              id="diagram-core"
              className="absolute w-24 h-24 z-30 rounded-full flex flex-col justify-center items-center text-center p-3 shadow-md border bg-[#2c2a29] border-[#d4c39e]"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeIn' }}
            >
              <Orbit size={16} className="text-[#d4c39e] mb-1 animate-spin-slow" />
              <span className="font-display font-medium text-[11px] tracking-widest uppercase text-[#faf8f5]">Core</span>
              <span className="font-serif font-bold text-xs text-[#d4c39e] uppercase">Patriarchy</span>
            </motion.div>

            {/* Concentric rings mapped automatically */}
            {SYSTEM_LAYERS.map((layer, index) => {
              const isActive = layer.id === activeLayerId;
              const ringRadius = 55 + index * 32; // concentric expansion radii

              return (
                <div
                  key={layer.id}
                  id={`ring-wrapper-${layer.id}`}
                  className="absolute inset-0 flex items-center justify-center pointer-events-none"
                >
                  {/* Floating marker button */}
                  <motion.button
                    id={`ring-select-${layer.id}`}
                    onClick={() => setActiveLayerId(layer.id)}
                    className={`absolute z-40 rounded-full flex items-center justify-center pointer-events-auto cursor-pointer focus:outline-none transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#8c7851] text-white shadow-lg w-7 h-7' 
                        : 'bg-white hover:bg-[#faf8f5] text-[#3a322d] border border-gray-300 w-6 h-6 hover:scale-110'
                    }`}
                    style={{
                      transform: `rotate(${index * 56 + 120}deg) translate(${ringRadius}px) rotate(${-index * 56 - 120}deg)`
                    }}
                    whileHover={{ scale: 1.15 }}
                  >
                    <span className="font-mono text-[9px] font-bold">{index + 1}</span>
                  </motion.button>

                  {/* Concentric ring paths */}
                  <svg className="absolute w-full h-full inset-0 overflow-visible">
                    <circle
                      cx="50%"
                      cy="50%"
                      r={ringRadius}
                      className={`fill-none stroke-1 transition-all duration-700 ${
                        isActive 
                          ? 'stroke-[#8c7851] stroke-[2px]' 
                          : 'stroke-gray-200 hover:stroke-gray-300'
                      }`}
                      style={{ strokeDasharray: isActive ? 'none' : '4, 4' }}
                    />
                    {/* Pulsing overlay ring strictly for active hover state */}
                    {isActive && (
                      <circle
                        cx="50%"
                        cy="50%"
                        r={ringRadius}
                        className="fill-none stroke-amber-500/20 stroke-[4px] animate-ping opacity-30 pointer-events-none"
                      />
                    )}
                  </svg>
                </div>
              );
            })}

            {/* Decorative connection lines radiating to labels */}
            <svg className="absolute w-full h-full inset-0 pointer-events-none">
              <line x1="50%" y1="50%" x2="5%" y2="5%" className="stroke-gray-100" strokeWidth={1} />
              <line x1="50%" y1="50%" x2="95%" y2="5%" className="stroke-gray-100" strokeWidth={1} />
              <line x1="50%" y1="50%" x2="5%" y2="95%" className="stroke-gray-100" strokeWidth={1} />
              <line x1="50%" y1="50%" x2="95%" y2="95%" className="stroke-gray-100" strokeWidth={1} />
            </svg>
          </div>
        </div>

        {/* Right column: Concentric information layer display */}
        <div className="col-span-1 lg:col-span-6">
          <div className="bg-[#faf8f5] border border-[#e8dfc4] rounded-2xl p-6 md:p-8 shadow-xs">
            
            {/* Quick switcher buttons to bypass radial click */}
            <div className="flex flex-wrap gap-2 mb-6 border-b border-[#e8dfc4] pb-4">
              {SYSTEM_LAYERS.map((layer, index) => {
                const isActive = layer.id === activeLayerId;
                return (
                  <button
                    key={`${layer.id}-btn`}
                    id={`layer-tab-${layer.id}`}
                    onClick={() => setActiveLayerId(layer.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-display font-medium tracking-wide transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-[#3a322d] text-white' 
                        : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-200'
                    }`}
                  >
                    {index + 1}. {layer.name.split(' ')[0]}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayer.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="space-y-6"
              >
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] font-semibold">
                      Layer Ring
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8c7851]" />
                    <span className="text-xs text-gray-400 font-sans">
                      Impact Magnitude: {10 - SYSTEM_LAYERS.indexOf(activeLayer)}/10
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#2c2a29]">
                    {activeLayer.name}
                  </h4>
                  <p className="text-sm font-sans italic text-[#8c7851] mt-1">
                    {activeLayer.description}
                  </p>
                </div>

                <div className="p-4 bg-white border border-[#e8dfc4] rounded-xl space-y-1.5">
                  <div className="flex items-center gap-2 text-amber-700">
                    <Sparkles size={14} />
                    <span className="font-display text-xs font-semibold uppercase tracking-wider">
                      Daily Reality Vignette
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 font-sans font-medium leading-relaxed italic">
                    {activeLayer.realWorldExample}
                  </p>
                </div>

                <div className="space-y-3">
                  <span className="font-display text-xs font-semibold text-gray-600 uppercase tracking-widest block">
                    Underlying Feedback Channels:
                  </span>
                  <ul className="space-y-2.5">
                    {activeLayer.details.map((detail, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-gray-600 font-sans leading-relaxed items-start">
                        <span className="w-5 h-5 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center font-mono text-[10px] shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>
    </div>
  );
}
