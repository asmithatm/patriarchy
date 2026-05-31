/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INTRO_BUBBLES } from '../data';
import { MessageSquare, ArrowRight, Layers, Shuffle } from 'lucide-react';

interface IntroductionBubbleQuizProps {
  onProgress: () => void;
}

export default function IntroductionBubbleQuiz({ onProgress }: IntroductionBubbleQuizProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [choicesCount, setChoicesCount] = useState<Set<string>>(new Set());

  const handleBubbleClick = (id: string) => {
    setSelectedId(id);
    const newChoices = new Set(choicesCount);
    newChoices.add(id);
    setChoicesCount(newChoices);
  };

  const selectedBubble = INTRO_BUBBLES.find(b => b.id === selectedId);

  const getBubbleStyle = (type: string, isSelected: boolean) => {
    if (isSelected) {
      return 'bg-amber-100/80 dark:bg-amber-950/40 border-amber-500 text-amber-900 dark:text-amber-300 shadow-md scale-105';
    }
    switch (type) {
      case 'system':
        return 'bg-[#f4eedc] border-[#8c7851]/30 hover:border-[#8c7851] text-[#3a322d]';
      case 'personal':
        return 'bg-slate-100 border-slate-300 hover:border-slate-500 text-slate-800';
      case 'effect':
        return 'bg-amber-50/50 border-amber-200 hover:border-amber-400 text-amber-800';
      default:
        return 'bg-white border-gray-200 hover:border-gray-400 text-gray-700';
    }
  };

  return (
    <div id="intro-bubble-quiz" className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-3 py-1 rounded-full">
          Perception Mapping
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-[#3a322d] mt-4 mb-2 tracking-tight">
          "When you hear the word patriarchy, what comes to mind?"
        </h3>
        <p className="text-xs font-sans text-gray-500 tracking-wide">
          Select floating concepts to begin analyzing how they interconnect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start min-h-[460px]">
        {/* Left column: Floating bubble canvas */}
        <div className="col-span-1 lg:col-span-7 relative bg-gradient-to-br from-[#faf8f5] to-[#f5f1e8] border border-[#e8dfc4] rounded-2xl p-6 md:p-8 overflow-hidden flex flex-wrap lg:flex-col lg:items-stretch justify-center lg:justify-start gap-3 items-center lg:items-stretch min-h-[380px]">
          
          {/* Grid of beautifully staggered bubbles */}
          {INTRO_BUBBLES.map((bubble, index) => {
            const isSelected = selectedId === bubble.id;
            const alreadySelected = choicesCount.has(bubble.id);
            return (
              <motion.button
                key={bubble.id}
                id={`bubble-btn-${bubble.id}`}
                onClick={() => handleBubbleClick(bubble.id)}
                className={`px-5 py-3 rounded-full lg:rounded-xl hover:cursor-pointer border text-sm font-display font-medium tracking-wide transition-all duration-300 text-left md:text-center lg:text-left ${getBubbleStyle(bubble.type, isSelected)}`}
                whileHover={{ scale: 1.02, y: -1 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: 'spring' }}
              >
                <div className="flex items-center gap-3 w-full">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${alreadySelected ? 'bg-amber-600' : 'bg-gray-300'}`} />
                  <span className="flex-1">{bubble.text}</span>
                </div>
              </motion.button>
            );
          })}

          {/* Prompt to engage */}
          {choicesCount.size === 0 && (
            <motion.div 
              className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 text-xs font-mono text-[#8c7851] bg-[#f4eedc]/80 backdrop-blur-xs py-2 px-4 rounded-full mx-auto w-fit"
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              <Shuffle size={12} className="text-amber-600 animate-spin-slow" />
              <span>Select any concept to dissect the system</span>
            </motion.div>
          )}
        </div>

        {/* Right column: Systemic dissection card */}
        <div className="col-span-1 lg:col-span-12 xl:col-span-5 h-full flex flex-col justify-between">
          <div className="bg-white border border-[#e8dfc4] rounded-2xl p-6 md:p-8 flex-1 flex flex-col justify-between shadow-xs">
            <AnimatePresence mode="wait">
              {selectedBubble ? (
                <motion.div
                  key={selectedBubble.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                    <div className="p-2 rounded-lg bg-amber-50 text-amber-700">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] uppercase tracking-wider text-amber-600">{selectedBubble.type} element</span>
                      <h4 className="font-serif text-xl font-semibold text-[#2c2a29]">{selectedBubble.text}</h4>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed font-sans">
                    {selectedBubble.description}
                  </p>

                  <div className="mt-4 p-4 bg-amber-50/40 border border-amber-100 rounded-xl">
                    <span className="font-display text-xs font-semibold text-amber-900 block mb-1">
                      Systemic Interconnection
                    </span>
                    <p className="text-xs text-amber-800 font-sans leading-relaxed">
                      This is not an isolated occurrence. In a patriarchal framework, historical systems is bound directly to underlying belief patterns support lines. Single events build the complete structure.
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div id="intro-bubble-placeholder" className="h-full flex flex-col justify-center items-center text-center py-10 space-y-4">
                  <div className="w-12 h-12 rounded-full border border-[#8c7851]/20 flex items-center justify-center text-[#8c7851] bg-[#faf8f5]">
                    <Layers size={20} className="animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-[#3a322d]">Analyzing Perception Layers</h4>
                    <p className="text-xs text-gray-400 font-sans max-w-xs mx-auto mt-1 leading-relaxed">
                      Click the options on the left to reveal the underlying mechanisms of each item in real time.
                    </p>
                  </div>
                </div>
              )}
            </AnimatePresence>

            {choicesCount.size > 0 && (
              <div className="mt-8 border-t border-gray-100 pt-6">
                <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                  <span>Explored association:</span>
                  <span className="text-amber-700 font-semibold">{choicesCount.size} / {INTRO_BUBBLES.length}</span>
                </div>
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mt-2">
                  <motion.div 
                    className="h-full bg-amber-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(choicesCount.size / INTRO_BUBBLES.length) * 100}%` }}
                    transition={{ type: 'spring', stiffness: 60 }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Call to action within the section to progress downward */}
          <AnimatePresence>
            {choicesCount.size >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="mt-4"
              >
                <button
                  id="skip-to-diagram-btn"
                  onClick={onProgress}
                  className="w-full py-4 bg-[#2c2a29] hover:bg-[#3a322d] text-white rounded-xl text-sm font-display font-medium tracking-wide flex items-center justify-center gap-3 transition-colors shadow-sm duration-300 cursor-pointer"
                >
                  <span>Animate Perceptions Into System Map</span>
                  <ArrowRight size={16} />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
