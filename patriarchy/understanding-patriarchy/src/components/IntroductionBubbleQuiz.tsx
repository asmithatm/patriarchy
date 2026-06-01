/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { INTRO_BUBBLES } from '../data';
import { 
  MessageSquare, 
  ArrowRight, 
  Layers, 
  Shuffle, 
  Plus, 
  Minus, 
  HelpCircle, 
  Sparkles, 
  CheckCircle2, 
  Compass, 
  Eye, 
  BookOpen 
} from 'lucide-react';

interface IntroductionBubbleQuizProps {
  onProgress: () => void;
}

const BUBBLE_METADATA: Record<string, { question: string; insight: string; icon: React.ReactNode }> = {
  '1': {
    question: "Who designs the unwritten rules of the game we all play?",
    insight: "When decision rooms lack diverse representation, social guardrails and corporate systems are optimized for a single default perspective.",
    icon: <Compass className="text-amber-700 w-4 h-4" />
  },
  '2': {
    question: "Why does the unequal division of labor feel so 'natural'?",
    insight: "Invisibly, the cognitive and domestic workload acting as a buffer allows others to compete in the public sphere fully unburdened.",
    icon: <Eye className="text-[#8c7851] w-4 h-4" />
  },
  '3': {
    question: "Where do we learn our first definitions of power and duty?",
    insight: "Traditional roles are handed down as simple acts of love, embedding patriarchal expectations before we have the words to question them.",
    icon: <BookOpen className="text-amber-800 w-4 h-4" />
  },
  '4': {
    question: "Who truly benefits from the dynamic of the 'ideal worker'?",
    insight: "The unwritten metrics for professional commitment were drafted around a historic model: a worker with zero domestic or child-rearing responsibilities.",
    icon: <Sparkles className="text-amber-600 w-4 h-4" />
  },
  '5': {
    question: "Do historical systems truly reset when we rewrite the laws?",
    insight: "Formal rights are only half the battle. Decades of accumulated resources and cultural momentum continue to shape lives everyday.",
    icon: <Layers className="text-[#8c7851] w-4 h-4" />
  },
  '6': {
    question: "Is social control always loud, visible, and obvious?",
    insight: "The most effective systems do not rule through force. Instead, they shape quiet pathways that make compliance feel like voluntary choice.",
    icon: <HelpCircle className="text-amber-700 w-4 h-4" />
  },
  '7': {
    question: "What is the hidden compromise behind being 'protected'?",
    insight: "Traditional security dynamics historically traded a partner's independent legal standing and financial freedom for physical protection.",
    icon: <Compass className="text-amber-800 w-4 h-4" />
  },
  '8': {
    question: "Why is human vulnerability treated as a direct systemic threat?",
    insight: "By declaring deep emotion off-limits, boys are conditioned to bottle up pain, which is then redirected outward as aggression or isolated performance.",
    icon: <Eye className="text-amber-600 w-4 h-4" />
  }
};

const QUIZ_TEXT = {
  badge: "Perception Mapping",
  title: '"When you hear the word patriarchy, what comes to mind?"',
  subtitle: "The system operates unseen through multiple layers. Tap any concept to reveal its role.",
  mobileTip: "Select any concept tile below to unlock its hidden story:",
  unfoldStory: "Unfold Story",
  progressLabel: "Exploration progress:",
  exploredSuffix: "Explored",
  perceptionCloudHeader: "SOCIOLOGICAL PERCEPTION CLOUD",
  clickHint: "Click any element below to inspect:",
  activeDissection: "ACTIVE DISSECTION",
  tapToDissect: "TAP TO DISSECT",
  cueText: "Select any concept bubble to inspect the underlying framework",
  selectedTitle: "SELECTED NODE",
  questionHeader: "The Critical Question",
  phenomenonHeader: "The Phenomenon",
  loopHeader: "How this invisibly fuels the cycle:",
  placeholderTitle: "Analyzing Perception Layers",
  placeholderDesc: "Click the options on the left to reveal the underlying mechanisms of each item in real time.",
  categoryTags: {
    system: "Systemic Core",
    personal: "Personal Reality",
    effect: "Impact & Cost",
    neutral: "Cultural Heritage"
  }
};

export default function IntroductionBubbleQuiz({ onProgress }: IntroductionBubbleQuizProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [choicesCount, setChoicesCount] = useState<Set<string>>(new Set());

  const handleBubbleClick = (id: string) => {
    if (selectedId === id) {
      setSelectedId(null);
    } else {
      setSelectedId(id);
      const newChoices = new Set(choicesCount);
      newChoices.add(id);
      setChoicesCount(newChoices);
    }
  };

  const selectedBubble = INTRO_BUBBLES.find(b => b.id === selectedId);

  const getBubbleStyle = (type: string, isSelected: boolean) => {
    if (isSelected) {
      return 'bg-amber-100/90 border-[#8c7851] text-[#8c7851] shadow-md ring-1 ring-[#8c7851]/10 scale-[1.02]';
    }
    switch (type) {
      case 'system':
        return 'bg-[#f4eedc]/60 border-[#8c7851]/20 hover:border-[#8c7851]/40 text-[#3a322d] hover:bg-[#f4eedc]/85';
      case 'personal':
        return 'bg-slate-50 border-slate-200/80 hover:border-slate-350 text-slate-800 hover:bg-slate-100/60';
      case 'effect':
        return 'bg-amber-50/30 border-amber-200/45 hover:border-amber-300/65 text-amber-850 hover:bg-amber-50/50';
      default:
        return 'bg-white border-zinc-200 hover:border-zinc-300 text-zinc-700';
    }
  };

  return (
    <div id="intro-bubble-quiz" className="w-full max-w-5xl mx-auto px-4 py-8">
      {/* Editorial Header Section */}
      <div className="text-center mb-6 md:mb-10">
        <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-3.5 py-1.5 rounded-full font-bold border border-[#8c7851]/15 inline-flex items-center gap-1.5">
          <Layers size={11} className="text-amber-700" />
          <span>{QUIZ_TEXT.badge}</span>
        </span>
        <h3 className="font-serif text-2.5xl md:text-3.5xl lg:text-4xl text-[#3a322d] mt-4 mb-2.5 tracking-tight px-1 font-bold leading-tight">
          {QUIZ_TEXT.title}
        </h3>
        <p className="text-xs md:text-sm font-sans text-gray-500 tracking-wide max-w-xl mx-auto leading-relaxed">
          {QUIZ_TEXT.subtitle}
        </p>
      </div>

      {/* 1. MOBILE VIEW LAYOUT (Inline Accordions beneath elements) */}
      <div className="block lg:hidden w-full space-y-4">
        {/* Helper Alert guidance for mobile */}
        <div className="bg-[#f5f1e8]/70 border border-[#e8dfc4]/80 rounded-xl p-3.5 text-center flex items-center justify-center gap-2 text-xs text-[#8c7851]">
          <Sparkles size={13} className="text-amber-600 animate-pulse shrink-0" />
          <span className="font-medium">{QUIZ_TEXT.mobileTip}</span>
        </div>

        <div className="space-y-3">
          {INTRO_BUBBLES.map((bubble, index) => {
            const isSelected = selectedId === bubble.id;
            const alreadyExplored = choicesCount.has(bubble.id);

            // Left border accents and titles based on categories
            let borderAccent = 'border-l-4 border-l-[#8c7851]';
            let categoryTag = QUIZ_TEXT.categoryTags.system;
            if (bubble.type === 'personal') {
              borderAccent = 'border-l-4 border-l-slate-400';
              categoryTag = QUIZ_TEXT.categoryTags.personal;
            } else if (bubble.type === 'effect') {
              borderAccent = 'border-l-4 border-l-amber-400';
              categoryTag = QUIZ_TEXT.categoryTags.effect;
            } else if (bubble.type === 'neutral') {
              borderAccent = 'border-l-4 border-l-stone-300';
              categoryTag = QUIZ_TEXT.categoryTags.neutral;
            }

            return (
              <div 
                key={bubble.id}
                className={`rounded-xl border transition-all duration-300 bg-white overflow-hidden ${
                  isSelected 
                    ? 'border-[#8c7851] shadow-md ring-1 ring-[#8c7851]/10' 
                    : 'border-[#e8dfc4]/60 hover:border-stone-300 shadow-2xs'
                }`}
              >
                {/* Tile Header Button */}
                <button
                  type="button"
                  onClick={() => handleBubbleClick(bubble.id)}
                  className={`w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer ${borderAccent} select-none`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors ${alreadyExplored ? 'bg-amber-600' : 'bg-stone-300'}`} />
                    <span className={`font-serif text-[13.5px] font-bold ${isSelected ? 'text-[#8c7851]' : 'text-stone-850'}`}>
                      {bubble.text}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {!alreadyExplored && !isSelected && (
                      <span className="font-mono text-[8.5px] uppercase tracking-wider text-amber-700 bg-[#f4eedc] px-2.5 py-0.5 rounded-full font-bold animate-pulse">
                        Unfold Story
                      </span>
                    )}
                    {alreadyExplored && !isSelected && (
                      <CheckCircle2 size={12} className="text-amber-600 shrink-0" />
                    )}
                    <div className={`p-1.5 rounded-full transition-all duration-300 ${isSelected ? 'bg-[#f4eedc] text-[#8c7851] rotate-180' : 'bg-stone-100 text-stone-500'}`}>
                      {isSelected ? <Minus size={11} /> : <Plus size={11} />}
                    </div>
                  </div>
                </button>

                {/* Animated Drawer Block representing "open right beneath them" */}
                <AnimatePresence initial={false}>
                  {isSelected && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: 'easeInOut' }}
                    >
                      <div className="p-5 border-t border-stone-150/60 space-y-4 bg-gradient-to-b from-amber-50/5 to-amber-50/30">
                        {/* Dynamic Curiosity Question block */}
                        <div className="space-y-1">
                          <div className="flex items-center gap-1.5 text-[#8c7851]">
                            {BUBBLE_METADATA[bubble.id]?.icon || <HelpCircle size={14} />}
                            <span className="font-mono text-[9px] font-bold uppercase tracking-wider">{QUIZ_TEXT.questionHeader}</span>
                          </div>
                          <h4 className="font-serif text-[14.5px] font-black italic text-[#3a322d] leading-tight">
                            "{BUBBLE_METADATA[bubble.id]?.question}"
                          </h4>
                        </div>

                        {/* Plain core description */}
                        <div className="space-y-0.5">
                          <span className="font-mono text-[8.5px] font-bold uppercase text-stone-400 tracking-wider">{QUIZ_TEXT.phenomenonHeader}</span>
                          <p className="text-xs text-stone-704 leading-relaxed font-sans font-medium">
                            {bubble.description}
                          </p>
                        </div>

                        {/* Connection text */}
                        <div className="p-3.5 bg-[#fcfbfa] border border-[#e8dfc4]/80 rounded-xl shadow-2xs relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-20 h-20 bg-amber-250/10 rounded-full blur-xl pointer-events-none" />
                          <span className="font-mono text-[8.5px] font-bold text-[#8c7851] uppercase tracking-widest block mb-1">
                            {QUIZ_TEXT.loopHeader}
                          </span>
                          <p className="text-[11.5px] text-[#3a322d] font-sans leading-relaxed">
                            {BUBBLE_METADATA[bubble.id]?.insight}
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

        {/* Mobile progress tracker */}
        {choicesCount.size > 0 && (
          <div className="pt-4 pb-2">
            <div className="bg-white p-4 rounded-xl border border-stone-200">
              <div className="flex justify-between items-center text-xs text-[#8c7851] font-mono">
                <span className="font-bold uppercase tracking-wider">{QUIZ_TEXT.progressLabel}</span>
                <span className="font-black text-amber-700">{choicesCount.size} / {INTRO_BUBBLES.length} {QUIZ_TEXT.exploredSuffix}</span>
              </div>
              <div className="w-full bg-stone-100 h-1.5 rounded-full overflow-hidden mt-2 border border-stone-200/50">
                <motion.div 
                  className="h-full bg-amber-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(choicesCount.size / INTRO_BUBBLES.length) * 100}%` }}
                  transition={{ type: 'spring', stiffness: 60 }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* 2. DESKTOP VIEW LAYOUT (Side-by-Side Floating Canvas & Rich Dissection Card) */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start min-h-[460px]">
        {/* Left column: Floating bubble canvas with clear interactivity signals */}
        <div className="col-span-1 lg:col-span-12 xl:col-span-7 relative bg-gradient-to-br from-[#faf8f5] to-[#f5f1e8] border border-[#e8dfc4] rounded-2xl p-6 md:p-8 overflow-hidden flex flex-col justify-between gap-4 min-h-[400px]">
          
          <div className="flex items-center justify-between border-b border-[#e8dfc4]/60 pb-3 mb-1">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#8c7851] font-bold inline-flex items-center gap-1.5">
              <Shuffle size={10} className="text-amber-600 animate-spin-slow" />
              <span>{QUIZ_TEXT.perceptionCloudHeader}</span>
            </span>
            <span className="text-[10px] font-sans text-stone-400 italic font-medium">
              {QUIZ_TEXT.clickHint}
            </span>
          </div>

          {/* Grid of beautifully staggered bubbles */}
          <div className="flex flex-col gap-2.5 w-full">
            {INTRO_BUBBLES.map((bubble, index) => {
              const isSelected = selectedId === bubble.id;
              const alreadySelected = choicesCount.has(bubble.id);
              return (
                <motion.button
                  key={bubble.id}
                  id={`bubble-btn-${bubble.id}`}
                  onClick={() => handleBubbleClick(bubble.id)}
                  className={`group w-full px-5 py-3.5 rounded-xl hover:cursor-pointer border text-sm font-display font-medium tracking-wide transition-all duration-300 text-left ${getBubbleStyle(bubble.type, isSelected)}`}
                  whileHover={{ scale: 1.015, x: 3 }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, type: 'spring', stiffness: 120 }}
                >
                  <div className="flex items-center justify-between gap-3 w-full">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className={`w-2.5 h-2.5 rounded-full shrink-0 transition-colors duration-300 ${alreadySelected ? 'bg-amber-600 animate-pulse' : 'bg-stone-300 group-hover:bg-amber-700/50'}`} />
                      <span className="font-serif text-[14px] font-bold leading-tight text-stone-850 group-hover:text-stone-900">{bubble.text}</span>
                    </div>
                    
                    <span className={`text-[8.5px] font-mono uppercase bg-black/5 px-2.5 py-0.5 rounded-full transition-all duration-200 tracking-wider font-bold ${
                      isSelected 
                        ? 'opacity-100 bg-amber-500/10 text-amber-900 border border-amber-200/30' 
                        : 'opacity-0 group-hover:opacity-100 text-stone-500 border border-stone-200'
                    }`}>
                      {isSelected ? QUIZ_TEXT.activeDissection : QUIZ_TEXT.tapToDissect}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Engagement visual cue centered at card base */}
          {choicesCount.size === 0 && (
            <motion.div 
              className="mt-3 flex justify-center items-center gap-2 text-[11px] font-mono text-[#8c7851] bg-[#f4eedc]/80 backdrop-blur-xs py-2 px-4 rounded-full mx-auto w-fit border border-amber-200/40 shadow-2xs"
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              <Shuffle size={12} className="text-amber-600 animate-spin-slow" />
              <span>{QUIZ_TEXT.cueText}</span>
            </motion.div>
          )}
        </div>

        {/* Right column: Dynamic Systemic dissection card with rich curiosity presentation */}
        <div className="col-span-1 lg:col-span-12 xl:col-span-5 h-full flex flex-col justify-between">
          <div className="bg-white border border-[#e8dfc4] rounded-2xl p-6 xl:p-8 flex-1 flex flex-col justify-between shadow-xs relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-50/20 rounded-full blur-2xl pointer-events-none" />

            <AnimatePresence mode="wait">
              {selectedId && selectedBubble ? (
                <motion.div
                  key={selectedBubble.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="space-y-6"
                >
                  {/* Category header */}
                  <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-2.5 py-1 rounded-md font-bold inline-flex items-center gap-1.5 border border-[#8c7851]/10">
                      {BUBBLE_METADATA[selectedBubble.id]?.icon || <Layers size={11} />}
                      <span>{selectedBubble.type.toUpperCase()} COMPONENT</span>
                    </span>
                    <span className="text-[10px] text-stone-400 font-mono font-medium">
                      Ref: 0{selectedBubble.id}
                    </span>
                  </div>

                  {/* Concept title */}
                  <div>
                    <span className="text-[9px] font-mono tracking-wider text-amber-700 font-bold uppercase block mb-1">{QUIZ_TEXT.selectedTitle}</span>
                    <h4 className="font-serif text-[21px] font-bold text-[#2c2a29] leading-tight block">
                      {selectedBubble.text}
                    </h4>
                  </div>

                  {/* Highlight curiosity section */}
                  <div className="bg-[#faf8f3]/95 border-l-2 border-[#8c7851]/75 p-4 rounded-r-xl space-y-1 shadow-2xs">
                    <span className="font-mono text-[8.5px] uppercase tracking-wider text-[#8c7851] font-bold block">{QUIZ_TEXT.questionHeader}</span>
                    <p className="font-serif text-[15.5px] font-black italic text-[#3a322d] leading-relaxed">
                      "{BUBBLE_METADATA[selectedBubble.id]?.question}"
                    </p>
                  </div>

                  {/* Plain translation of the block */}
                  <div className="space-y-1">
                    <span className="font-mono text-[8.5px] font-bold text-stone-400 uppercase tracking-wider block">{QUIZ_TEXT.phenomenonHeader}</span>
                    <p className="text-[13px] text-stone-700 leading-relaxed font-sans font-medium">
                      {selectedBubble.description}
                    </p>
                  </div>

                  {/* Loop explanation */}
                  <div className="p-4 bg-gradient-to-br from-amber-50 to-amber-100/40 border border-amber-200/50 rounded-xl space-y-1.5 relative overflow-hidden shadow-xs">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-200/20 rounded-full blur-2xl pointer-events-none" />
                    <span className="font-mono text-[9px] font-bold text-[#8c7851] uppercase tracking-widest block">
                      {QUIZ_TEXT.loopHeader}
                    </span>
                    <p className="text-[12.2px] text-stone-800 font-sans leading-relaxed">
                      {BUBBLE_METADATA[selectedBubble.id]?.insight}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div id="intro-bubble-placeholder" className="h-full flex flex-col justify-center items-center text-center py-12 space-y-4">
                  <div className="w-14 h-14 rounded-full border border-[#8c7851]/20 flex items-center justify-center text-[#8c7851] bg-[#faf8f5] shadow-2xs">
                    <HelpCircle size={22} className="animate-pulse text-amber-700" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-[15px] font-bold text-[#3a322d]">{QUIZ_TEXT.placeholderTitle}</h4>
                    <p className="text-xs text-stone-400 font-sans max-w-xs mx-auto leading-relaxed">
                      {QUIZ_TEXT.placeholderDesc}
                    </p>
                  </div>
                </div>
              )}
            </AnimatePresence>

            {choicesCount.size > 0 && (
              <div className="mt-8 border-t border-gray-100 pt-6">
                <div className="flex justify-between items-center text-xs text-gray-400 font-mono">
                  <span>Explored association:</span>
                  <span className="text-amber-700 font-bold">{choicesCount.size} / {INTRO_BUBBLES.length}</span>
                </div>
                <div className="w-full bg-gray-105/80 h-1.5 rounded-full overflow-hidden mt-2">
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


        </div>
      </div>
    </div>
  );
}

