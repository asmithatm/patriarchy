/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import NetworkBg from './NetworkBg';
import { Group, Heart, Building, Users, HelpCircle, Activity, Sparkles, Shield, Compass, ChevronRight, Check } from 'lucide-react';

interface AffectedDomain {
  id: 'women' | 'men' | 'family' | 'institution';
  title: string;
  subtitle: string;
  narrative: string;
  feedbackRole: string;
}

const DOMAINS: AffectedDomain[] = [
  {
    id: 'women',
    title: 'Women’s Experience',
    subtitle: 'The Double Shift & Expectation Trap',
    narrative: 'Constrained by safety overhead, the Have-it-All burden, and the mental load of home management, while facing double binds in promotions.',
    feedbackRole: 'Must navigate dual metrics (competence vs. likability) daily.'
  },
  {
    id: 'men',
    title: 'Men’s Burden',
    subtitle: 'Stoicism & Provider Strains',
    narrative: 'Forced into intense emotional suppression, relationship isolation, constant performance benchmarks, and high physical expendability.',
    feedbackRole: 'Expected to anchor output blindly while suppressing vulnerabilities.'
  },
  {
    id: 'family',
    title: 'Family Structures',
    subtitle: 'Lineage & Prescribed Roles',
    narrative: 'Tethered to traditional rules where mothers automatically sacrifice careers, daughters relocate, and fathers act as sole vertical decision makers.',
    feedbackRole: 'Helps keep traditional family lines and household tasks going automatically.'
  },
  {
    id: 'institution',
    title: 'Institutions & Systems',
    subtitle: 'Outdated Regulations',
    narrative: 'Workplaces, legal codes, and cultural industries continue historical biases because they reward traits historically coded as masculine.',
    feedbackRole: 'Enforces compliance by gatekeeping visibility, titles, and capital.'
  }
];

const DEEPER_REALITY_TEXT = {
  climaxBadge: "The Climax Hub",
  climaxTitle: "The Deeper Interconnected Reality",
  climaxDesc: "Patriarchy is not a simple \"men vs. women\" conspiracy. It is an ancient social operating system—outdated software that harms almost everyone in separate, interlocking slots.",
  systemLabel: "Outdated Operating System",
  dissectHeader: "Dissect Interlocking Nodes",
  visualizerTitle: "Systems visualizer",
  visualizerDesc: "Hover over or tap categories below to trace nodes and pathways in the map.",
  showAllConnectionsBtn: "Show All Connections",
  matrixHeader: "Structural Strain Matrix",
  placeholderTitle: "The Interlocking System",
  placeholderDesc: "Select any individual category above. Witness how patriarchy operates as a mutual ecosystem.",
  choiceBadge: "The Perspective of Choice",
  liberationTitle: "Liberation Over Blame",
  grandQuote: {
    part1: "Understanding patriarchy is not about assigning ",
    span1: "blame to individuals",
    part2: ". It is about recognizing an ",
    span2: "inherited social operating system",
    part3: " that quietly shapes how women and men are expected to think, behave, and live. The goal is not to find villains, but to understand these patterns, question inherited assumptions, and ",
    span3: "consciously choose",
    part4: " what to keep, what to change, and what to leave behind, creating ",
    span4: "greater freedom of choice for everyone",
    part5: "."
  },
  actionPlanHeader: "Interactive Action Plan",
  actionPlanDesc: "Click any category button below to inspect active, measurable ways to foster choice:",
  selectedFocusBadge: "Selected Focus",
  stepsBadge: "3 Real-World Steps to Practice",
  stepPrefix: "Step"
};

export default function DeeperRealityMap() {
  const [highlightedCategory, setHighlightedCategory] = useState<'women' | 'men' | 'family' | 'institution' | 'all' | 'none'>('all');
  const [activeChoiceAction, setActiveChoiceAction] = useState<'keep' | 'change' | 'leave'>('keep');

  const activeCategoryDetail = DOMAINS.find(d => d.id === highlightedCategory);

  const choiceContent = {
    keep: {
      title: 'What to Keep',
      icon: <Shield className="text-emerald-700" size={20} />,
      colorClass: 'border-emerald-200 bg-emerald-50/80 text-emerald-950',
      description: 'Strong family bonds, mutual support, caring for one another, and taking responsibility for the people we love. These are valuable parts of human relationships that deserve to be preserved. The goal is not to abandon care and commitment, but to separate them from rigid ideas about who must lead, provide, or sacrifice.',
      actions: [
        'Listen with empathy and create safe spaces where people feel heard and understood.',
        'Encourage shared caregiving and appreciate partners, family members, and colleagues who contribute to caring responsibilities.',
        'Treat vulnerability as a strength that helps build trust, connection, and deeper relationships.'
      ]
    },
    change: {
      title: 'What to Change',
      icon: <Sparkles className="text-amber-700" size={20} />,
      colorClass: 'border-amber-200 bg-amber-50/80 text-amber-950',
      description: "The unspoken rules and expectations that limit people's choices, assign different standards to men and women, or punish those who take on caregiving responsibilities.",
      actions: [
        'Have open conversations about household responsibilities and share both the visible work and the hidden planning behind it.',
        'Support workplace cultures that value results and contribution rather than long hours or constant physical presence.',
        'Challenge assumptions about who is naturally suited for leadership, caregiving, or certain career paths.'
      ]
    },
    leave: {
      title: 'What to Leave Behind',
      icon: <Compass className="text-rose-700" size={20} />,
      colorClass: 'border-rose-200 bg-rose-50/80 text-rose-950',
      description: 'The habit of looking for simple villains, creating unnecessary divisions, and forcing people into narrow gender roles. Progress becomes possible when we allow people to be fully human rather than expecting them to fit predefined molds.',
      actions: [
        'Stop labeling women as "bossy" or men as "weak" for expressing qualities that are simply human.',
        'Let go of the belief that a person\'s worth depends entirely on what they provide, achieve, or sacrifice.',
        'Move beyond the idea that one group\'s progress comes at another group\'s expense, and instead focus on growth that benefits everyone.'
      ]
    }
  };

  return (
    <div id="climax-deeper-reality-hub" className="w-full max-w-6xl mx-auto px-4 py-8">
      
      <div className="text-center mb-8">
        <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-3 py-1 rounded-full">
          {DEEPER_REALITY_TEXT.climaxBadge}
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-[#3a322d] mt-4 mb-2 tracking-tight">
          {DEEPER_REALITY_TEXT.climaxTitle}
        </h3>
        <p className="text-sm font-sans text-gray-500 max-w-xl mx-auto">
          {DEEPER_REALITY_TEXT.climaxDesc}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#3a322d] text-white rounded-3xl overflow-hidden min-h-[500px] border border-amber-500/30 shadow-xl relative">
        
        {/* Left Hand: Stunning Animated Systems Map (incorporating NetworkBg) */}
        <div className="col-span-1 lg:col-span-7 relative bg-gradient-to-b from-[#2e2925] to-[#3a322d] border-r border-[#8c7851]/20 flex items-center justify-center overflow-hidden min-h-[350px]">
          
          {/* Re-using our premium NetworkBg with high interactive dynamic category overlays */}
          <NetworkBg
            interactive={true}
            highlightCategory={highlightedCategory}
            expansionFactor={0.35}
            className="opacity-90"
          />

          {/* Core System Label inside */}
          <div className="absolute bottom-4 right-4 z-40 flex items-center gap-1.5 bg-amber-500/10 border border-amber-400/25 px-2.5 py-1 rounded-full text-amber-300 font-mono text-[10px]">
            <Activity size={10} className="animate-pulse" />
            <span>{DEEPER_REALITY_TEXT.systemLabel}</span>
          </div>
        </div>

        {/* Right Hand: Interactive Categories & Narratives */}
        <div id="deeper-reality-navigator" className="col-span-1 lg:col-span-5 p-6 md:p-8 flex flex-col justify-between relative z-40">
          
          <div className="space-y-6">
            <span className="font-display text-xs font-semibold text-[#8c7851] uppercase tracking-widest block">
              {DEEPER_REALITY_TEXT.dissectHeader}
            </span>

            {/* Systems visualizer micro-tip box */}
            <div className="bg-stone-900/60 border border-stone-800 rounded-xl p-3">
              <span className="font-mono text-[9px] text-[#d4c5a1] block uppercase tracking-wider font-semibold">
                {DEEPER_REALITY_TEXT.visualizerTitle}
              </span>
              <p className="text-[10px] text-gray-300 font-sans leading-relaxed mt-0.5">
                {DEEPER_REALITY_TEXT.visualizerDesc}
              </p>
            </div>

            {/* Selector Categories buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                id="reality-all-btn"
                onClick={() => setHighlightedCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-display font-medium tracking-wide transition-all cursor-pointer ${
                  highlightedCategory === 'all' 
                    ? 'bg-amber-500 text-[#2c2a29] font-bold' 
                    : 'bg-stone-900 hover:bg-stone-850 text-gray-400 border border-stone-800'
                }`}
              >
                {DEEPER_REALITY_TEXT.showAllConnectionsBtn}
              </button>
              {DOMAINS.map((domain) => {
                const isActive = highlightedCategory === domain.id;
                return (
                  <button
                    key={domain.id}
                    id={`reality-btn-${domain.id}`}
                    onClick={() => setHighlightedCategory(domain.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-display font-medium tracking-wide transition-all cursor-pointer ${
                      isActive 
                        ? 'bg-stone-100 text-stone-950 font-bold' 
                        : 'bg-stone-900 hover:bg-stone-850 text-gray-400 border border-stone-800'
                    }`}
                  >
                    {domain.title.split(' ')[0]}
                  </button>
                );
              })}
            </div>

            {/* Displaying corresponding details */}
            <div className="bg-white/5 border border-stone-850 rounded-2xl p-5 min-h-[190px] flex flex-col justify-between">
              <AnimatePresence mode="wait">
                {activeCategoryDetail ? (
                  <motion.div
                    key={activeCategoryDetail.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3.5"
                  >
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-[#8c7851] font-semibold">
                        {DEEPER_REALITY_TEXT.matrixHeader}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-amber-200 mt-1 leading-tight">
                        {activeCategoryDetail.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-sans mt-0.5">
                        {activeCategoryDetail.subtitle}
                      </p>
                    </div>

                    <p className="text-xs text-stone-300 font-sans leading-relaxed">
                      {activeCategoryDetail.narrative}
                    </p>

                    <div className="pt-2 border-t border-stone-800 flex items-start gap-1 text-[11px] text-amber-100 font-mono">
                      <span className="text-[#8c7851] font-semibold">Reinforcing Cycle:</span>
                      <span className="text-gray-400">{activeCategoryDetail.feedbackRole}</span>
                    </div>
                  </motion.div>
                ) : (
                  <div id="deeper-reality-placeholder" className="h-full flex flex-col justify-center items-center text-center py-6 space-y-3">
                    <Users size={20} className="text-[#8c7851]" />
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-gray-300">{DEEPER_REALITY_TEXT.placeholderTitle}</h4>
                      <p className="text-[11px] text-gray-400 font-sans max-w-xs mx-auto mt-0.5 leading-normal">
                        {DEEPER_REALITY_TEXT.placeholderDesc}
                      </p>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>

      {/* Majestic, High-Polished Concluding Card in Light Warm Premium Theme */}
      <motion.div 
        id="concluding-panoramic-card"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mt-12 bg-[#faf8f5] rounded-3xl border-2 border-[#8c7851]/40 p-8 md:p-12 relative overflow-hidden shadow-xl space-y-8 text-[#2c2a29]"
      >
        {/* Subtle glowing ambient accent in background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-amber-100/30 blur-[130px] rounded-full pointer-events-none" />
        
        {/* Top Header Label */}
        <div className="text-center space-y-1.5 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-[#8c7851] border border-amber-200 text-stone-700 font-mono text-[10px] uppercase tracking-widest font-semibold">
            <Sparkles size={11} className="text-amber-600 animate-pulse" />
            <span>{DEEPER_REALITY_TEXT.choiceBadge}</span>
          </div>
          <h4 className="font-serif text-2xl md:text-3.5xl text-[#3a322d] font-bold tracking-tight">
            {DEEPER_REALITY_TEXT.liberationTitle}
          </h4>
        </div>

        {/* The Beautiful Grand Quote Box in Warm High-Contrast Container */}
        <div className="max-w-4xl mx-auto relative z-10 p-6 md:p-8 bg-white rounded-2xl border border-[#8c7851]/25 shadow-sm">
          <p className="font-serif text-base sm:text-lg md:text-xl text-stone-800 font-normal leading-relaxed text-center sm:px-4">
            "{DEEPER_REALITY_TEXT.grandQuote.part1}<span className="text-rose-700 font-semibold bg-rose-50 px-1.5 py-0.5 rounded border border-rose-100">{DEEPER_REALITY_TEXT.grandQuote.span1}</span>{DEEPER_REALITY_TEXT.grandQuote.part2}<span className="text-amber-900 font-semibold bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">{DEEPER_REALITY_TEXT.grandQuote.span2}</span>{DEEPER_REALITY_TEXT.grandQuote.part3}<span className="text-emerald-800 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 font-medium">{DEEPER_REALITY_TEXT.grandQuote.span3}</span>{DEEPER_REALITY_TEXT.grandQuote.part4}<span className="underline underline-offset-4 decoration-amber-500/50 text-[#120f0e] font-bold">{DEEPER_REALITY_TEXT.grandQuote.span4}</span>{DEEPER_REALITY_TEXT.grandQuote.part5}"
          </p>
        </div>

        {/* Interactive Action Hub "What to Keep, Change, Leave Behind" */}
        <div className="max-w-4xl mx-auto space-y-6 relative z-10 border-t border-stone-200/80 pt-6">
          <div className="text-center bg-amber-50/60 py-2.5 px-4 rounded-xl border border-amber-200/50 max-w-lg mx-auto mb-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#8c7851] font-bold block">
              {DEEPER_REALITY_TEXT.actionPlanHeader}
            </span>
            <p className="text-xs text-stone-700 font-sans mt-1">
              👇 {DEEPER_REALITY_TEXT.actionPlanDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {(['keep', 'change', 'leave'] as const).map((choiceKey) => {
              const active = activeChoiceAction === choiceKey;
              const content = choiceContent[choiceKey];
              return (
                <button
                  key={choiceKey}
                  id={`btn-conclude-${choiceKey}`}
                  onClick={() => setActiveChoiceAction(choiceKey)}
                  className={`p-4 rounded-xl border-2 text-left transition-all duration-300 cursor-pointer ${
                    active 
                      ? 'border-amber-600 bg-white shadow-md scale-[1.02] ring-2 ring-amber-500/10' 
                      : 'border-stone-200 bg-white/70 hover:bg-white hover:border-stone-400 text-stone-700 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    {content.icon}
                    <span className={`font-display font-semibold text-sm ${active ? 'text-amber-950 font-bold' : 'text-stone-700'}`}>
                      {content.title}
                    </span>
                    {active && (
                      <span className="ml-auto w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    )}
                  </div>
                  <p className="text-xs text-stone-500 line-clamp-2 leading-relaxed">
                    {content.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Expanded active selection block */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChoiceAction}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className={`p-6 md:p-8 rounded-2xl border border-stone-200 bg-white shadow-sm space-y-6`}
            >
              {/* Part 1: Selected Focus Details */}
              <div className="space-y-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-stone-100 text-[#8c7851] font-mono text-[10px] uppercase font-bold tracking-widest">
                  {DEEPER_REALITY_TEXT.selectedFocusBadge}
                </span>
                <p className="text-stone-850 text-sm leading-relaxed font-sans first-letter:text-2.5xl first-letter:font-serif first-letter:font-bold first-letter:mr-1">
                  {choiceContent[activeChoiceAction].description}
                </p>
              </div>

              {/* Part 2: 3 Real-World Steps to Practice (Prisinte Bullet Lists) */}
              <div className="border-t border-stone-100 pt-5 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 font-mono text-[10px] uppercase font-bold tracking-widest border border-amber-100">
                  {DEEPER_REALITY_TEXT.stepsBadge}
                </span>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {choiceContent[activeChoiceAction].actions.map((action, idx) => (
                    <div 
                      key={idx} 
                      className="p-4 rounded-xl border border-stone-100 bg-stone-50/50 flex flex-col justify-between hover:bg-stone-50 hover:shadow-xs transition duration-200"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                          {idx + 1}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-wider text-stone-400">{DEEPER_REALITY_TEXT.stepPrefix}</span>
                      </div>
                      <p className="text-xs text-stone-700 leading-relaxed font-sans">
                        {action}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </motion.div>

    </div>
  );
}
