import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Sparkles, 
  ShieldAlert, 
  Scale, 
  HelpCircle, 
  ArrowRight, 
  TrendingUp, 
  Crown, 
  Coins, 
  Heart, 
  Briefcase, 
  HeartOff,
  UserCheck,
  Building,
  AlertTriangle,
  Lightbulb,
  Lock,
  Compass
} from 'lucide-react';

type TabId = 'core' | 'beneficiaries' | 'visible-benefits' | 'protection' | 'male-ledger' | 'synthesis';

interface TabConfig {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

export default function SystemicLedger() {
  const [activeTab, setActiveTab] = useState<TabId>('core');

  const tabs: TabConfig[] = [
    { id: 'core', label: 'Core Model & Origins', icon: Compass },
    { id: 'beneficiaries', label: 'Who Benefits Most?', icon: Crown },
    { id: 'visible-benefits', label: 'Visible Benefits', icon: Users },
    { id: 'protection', label: 'Protection & Control', icon: Lock },
    { id: 'male-ledger', label: 'Advantages & Costs for Men', icon: Scale },
    { id: 'synthesis', label: 'The Deepest Truth', icon: Lightbulb },
  ];

  return (
    <div id="systemic-ledger" className="w-full max-w-5xl mx-auto px-4 py-12 bg-white rounded-3xl border border-stone-200 shadow-sm overflow-hidden text-stone-800 my-16">
      
      {/* Header and Context details */}
      <div className="border-b border-stone-100 pb-8 mb-8 text-center flex flex-col items-center justify-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f4eedc] text-[#8c7851] rounded-full border border-[#8c7851]/10 mb-4 font-sans font-medium">
          <Sparkles size={12} className="shrink-0 animate-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
            Chapter XI — Beyond Men vs Women
          </span>
        </div>
        <h3 className="font-serif text-3xl md:text-3.5xl font-bold tracking-tight text-stone-900 leading-tight">
          The Real Winners, Losers, and Trade-Offs of Patriarchy
        </h3>
        <p className="text-stone-500 font-sans text-sm mt-3 max-w-3xl leading-relaxed text-center">
          Patriarchy is not simply "men controlling women." <strong className="text-[#8c7851] font-semibold">Patriarchy primarily serves the preservation of social order, inheritance, lineage, and concentrated power. Certain men benefit greatly from it, some men benefit partially from it, and many men are also harmed by it.</strong> Use this simple, interactive guide to explore how these costs and benefits are distributed.
        </p>
      </div>

      {/* Responsive interactive tabs navigation */}
      <div className="flex flex-wrap md:flex-nowrap gap-1 bg-stone-50/80 p-1.5 rounded-2xl border border-stone-100 mb-8 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-medium transition-all duration-300 font-sans whitespace-nowrap grow text-center cursor-pointer ${
                isSelected
                  ? 'bg-[#8c7851] text-white shadow-xs font-bold'
                  : 'text-stone-500 hover:text-stone-850 hover:bg-stone-100/50'
              }`}
            >
              <Icon size={14} className="shrink-0" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Main interactive cards container */}
      <div className="min-h-[380px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="space-y-6"
          >
            
            {/* TAB 1: WHAT IS PATRIARCHY & ORIGINS */}
            {activeTab === 'core' && (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                <div className="md:col-span-6 bg-[#faf8f5]/60 p-6 rounded-2xl border border-stone-100/80 flex flex-col justify-between text-left">
                  <div className="space-y-4">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#8c7851] font-bold">
                      The Core Framework
                    </span>
                    <h4 className="font-serif text-lg font-bold text-stone-900 leading-snug">
                      Foundational Assumptions Of Patriarchy
                    </h4>
                    <p className="text-stone-605 text-xs font-sans leading-relaxed font-semibold">
                      Patriarchal societies were historically organized around a set of beliefs about authority, responsibility, family, and social order.
                    </p>
                    <p className="text-stone-600 text-xs font-sans leading-relaxed">
                       These assumptions shaped how communities distributed power, assigned roles, and structured family life:
                    </p>
                    
                    <ul className="space-y-2 mt-4 text-xs font-sans text-stone-750">
                      {[
                        'Men should occupy most positions of authority.',
                        'Men should protect and provide.',
                        'Women should nurture and support.',
                        'Family lineage should pass through the male line.',
                        'Social stability is more important than individual freedom.'
                      ].map((item, id) => (
                        <li key={id} className="flex gap-2.5 items-start">
                          <span className="text-[#8c7851] shrink-0 font-bold font-mono">0{id + 1}.</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="md:col-span-6 bg-amber-50/15 p-6 rounded-2xl border border-amber-100/40 flex flex-col justify-between text-left">
                  <div className="space-y-4">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-amber-800 font-bold">
                      Ancient Context
                    </span>
                    <h4 className="font-serif text-md font-bold text-stone-900">
                      Why Did Patriarchy Last So Long?
                    </h4>
                    <p className="text-stone-600 text-xs leading-relaxed font-sans mt-1">
                      Historically this made sense in many societies because:
                    </p>
                    <ul className="space-y-2 text-xs text-stone-600 font-sans mt-3">
                      <li className="flex items-start gap-2"><span>💪</span> <span className="leading-tight">Physical strength mattered more.</span></li>
                      <li className="flex items-start gap-2"><span>⚔️</span> <span className="leading-tight">Warfare was constant.</span></li>
                      <li className="flex items-start gap-2"><span>🏠</span> <span className="leading-tight">Property had to be defended.</span></li>
                      <li className="flex items-start gap-2"><span>👨‍👩‍👧</span> <span className="leading-tight">Paternity certainty mattered for inheritance.</span></li>
                    </ul>
                    <p className="text-stone-600 text-xs leading-relaxed font-sans pt-1">
                      Patriarchy emerged partly as an adaptation to ancient conditions.
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-amber-200/30 text-[11px] font-sans text-amber-900 bg-amber-50/40 p-3 rounded-xl border border-[#8c7851]/10 font-medium">
                    The problem is that societies changed much faster than the underlying assumptions.
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: BENEFICIARIES */}
            {activeTab === 'beneficiaries' && (
              <div className="space-y-4 text-left">
                <p className="text-[#8c7851] font-mono text-[10px] uppercase font-bold tracking-widest text-center md:text-left mb-2">
                  Distribution of Payoffs — Who gains the most?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Powerful Men */}
                  <div className="bg-white p-5 rounded-2xl border border-stone-200/70 hover:border-amber-200 transition duration-200 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#8c7851] flex items-center justify-center font-bold mb-3.5 border border-amber-100/50">
                        <Crown size={15} />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-stone-850 mb-1.5">
                        1. Powerful Men
                      </h4>
                      <p className="text-[11px] text-stone-500 font-sans leading-relaxed">
                        Political leaders, wealthy corporate elites, kings, and religious figureheads. Patriarchy concentrates privilege upward rather than sideways.
                      </p>
                    </div>
                    <div className="border-t border-stone-100/80 pt-3.5 mt-4 text-[10px] text-stone-400 font-mono italic leading-tight">
                      "A billionaire CEO gains far more from patriarchy than a village laborer or delivery driver."
                    </div>
                  </div>

                  {/* Established Families */}
                  <div className="bg-white p-5 rounded-2xl border border-stone-200/70 hover:border-stone-350 transition duration-200 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-stone-50 text-stone-700 flex items-center justify-center font-bold mb-3.5 border border-stone-100">
                        <Building size={15} />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-stone-855 mb-1.5">
                        2. Established Families
                      </h4>
                      <p className="text-[11px] text-stone-500 font-sans leading-relaxed">
                        Traditional lineages benefit from protected asset pools, inheritability controls, and social status conservation.
                      </p>
                    </div>
                    <div className="border-t border-stone-100/80 pt-3.5 mt-4 text-[10px] text-stone-400 font-mono italic leading-tight">
                      "This is why the system historically obsessed over women’s sexuality to guarantee legitimate inheritance."
                    </div>
                  </div>

                  {/* Some Women */}
                  <div className="bg-white p-5 rounded-2xl border border-stone-200/70 hover:border-amber-200 transition duration-200 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-stone-50 text-stone-700 flex items-center justify-center font-bold mb-3.5 border border-stone-100">
                        <UserCheck size={15} />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-stone-850 mb-1.5">
                        3. Certain Women
                      </h4>
                      <p className="text-[11px] text-stone-500 font-sans leading-relaxed">
                        Stay-at-home wives supported financially, mothers covered by family safeguards, or daughters of powerful dynasties gaining proxy sway.
                      </p>
                    </div>
                    <div className="border-t border-stone-100/80 pt-3.5 mt-4 text-[10px] text-stone-400 font-mono italic leading-tight">
                      "Support is often a logical strategy in a dangerous environment to trade certain freedoms for security."
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TAB 3: VISIBLE BENEFITS OFFERED */}
            {activeTab === 'visible-benefits' && (
              <div className="space-y-4 text-left">
                <p className="text-center md:text-left text-xs font-mono uppercase text-[#8c7851] tracking-wider font-bold mb-1">
                  What Visible Benefits Does Patriarchy Offer?
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  
                  {/* Clear Gender Roles */}
                  <div className="bg-white p-5 rounded-2xl border border-stone-200/70 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-[#faf8f5] text-[#8c7851] flex items-center justify-center font-bold mb-3.5 border border-stone-150">
                        <Users size={15} />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-stone-850 mb-1.5 uppercase tracking-wide">
                        Clear Gender Roles
                      </h4>
                      <p className="text-[11px] text-stone-500 font-sans leading-relaxed">
                        Historically, everyone knew their role:
                      </p>
                      <ul className="space-y-1.5 text-[11px] text-stone-605 font-sans mt-2">
                        <li className="flex items-center gap-1.5"><span>👨</span> <span><strong>Man:</strong> Protect, provide, lead</span></li>
                        <li className="flex items-center gap-1.5"><span>👩</span> <span><strong>Woman:</strong> Nurture, maintain family</span></li>
                      </ul>
                      <p className="text-[11px] text-stone-500 font-sans leading-relaxed mt-2.5">
                        This reduces uncertainty. Some people genuinely prefer this structure.
                      </p>
                    </div>
                  </div>

                  {/* Family Stability */}
                  <div className="bg-white p-5 rounded-2xl border border-stone-200/70 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-[#faf8f5] text-[#8c7851] flex items-center justify-center font-bold mb-3.5 border border-stone-150">
                        <Building size={15} />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-stone-850 mb-1.5 uppercase tracking-wide">
                        Family Stability
                      </h4>
                      <p className="text-[11px] text-stone-500 font-sans leading-relaxed">
                        Historically, traditional societies often produced:
                      </p>
                      <ul className="space-y-1 text-[11px] text-stone-605 font-sans mt-2 list-disc list-inside">
                        <li>Stable family units</li>
                        <li>Strong kinship networks</li>
                        <li>Clear inheritance structures</li>
                      </ul>
                      <p className="text-[11px] text-stone-505 font-sans leading-relaxed mt-2.5">
                        Whether that stability was fair is another question, but it often was stable.
                      </p>
                    </div>
                  </div>

                  {/* Protection Framework */}
                  <div className="bg-white p-5 rounded-2xl border border-stone-200/70 flex flex-col justify-between">
                    <div>
                      <div className="w-8 h-8 rounded-xl bg-[#faf8f5] text-[#8c7851] flex items-center justify-center font-bold mb-3.5 border border-stone-150">
                        <Compass size={15} />
                      </div>
                      <h4 className="font-serif text-sm font-bold text-stone-850 mb-1.5 uppercase tracking-wide">
                        Protection Framework
                      </h4>
                      <p className="text-[11px] text-stone-500 font-sans leading-relaxed">
                        Traditionally, men owe women protection. This is real. Many cultures hold strong expectations that:
                      </p>
                      <ul className="space-y-1 text-[11px] text-[#5c554e] font-sans mt-2 list-disc list-inside">
                        <li>Men protect wives</li>
                        <li>Fathers protect daughters</li>
                        <li>Brothers protect sisters</li>
                      </ul>
                    </div>
                    <div className="border-t border-stone-100 pt-3.5 mt-3 text-[10px] text-stone-400 font-mono italic leading-tight">
                      "I obey certain restrictions, but I receive protection." It wasn't experienced only as oppression.
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TAB 3: PROTECTION & CONTROL */}
            {activeTab === 'protection' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 text-left">
                {/* Visualizing the equation: Protection = Control */}
                <div className="lg:col-span-5 bg-stone-50 p-6 rounded-2xl border border-stone-100 flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="font-mono text-[9px] uppercase tracking-wider text-stone-500 font-bold">
                      The Traditional Agreement
                    </span>
                    <h4 className="font-serif text-md font-bold text-stone-850 leading-snug">
                      The Intertwined Software of Safety
                    </h4>
                    <p className="text-stone-500 text-xs leading-relaxed font-sans">
                      Historically, the trade-off of patriarchy survived because it wasn’t perceived solely as simple tyranny, but rather as an explicit, high-stake protective contract.
                    </p>
                  </div>

                  <div className="border-l-2 border-[#8c7851] pl-4 pr-6 py-2.5 text-xs italic font-serif text-stone-700 space-y-2 my-4 bg-white rounded-r-xl border border-stone-100 w-fit max-w-full shadow-2xs">
                    <div>“If I protect you, I decide where you go.”</div>
                    <div>“If I provide for you, I decide how money is spent.”</div>
                    <div>“If I am responsible for your safety, I limit your liberties.”</div>
                  </div>

                  <p className="text-[10px] text-stone-400 font-sans">
                    Once safety became directly conditioned on personal subordination, protection organically folded into authority.
                  </p>
                </div>

                {/* Subsections */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    <div className="p-4 rounded-xl border border-stone-100 bg-white space-y-2">
                      <h5 className="font-serif text-xs font-bold text-stone-800 uppercase tracking-wide">
                        🛡️ Failure of the Protector
                      </h5>
                      <p className="text-[11px] text-stone-500 font-sans leading-relaxed">
                        The fatal bug of historical family protection was when the protector became the active domestic threat himself. Women had zero legal exit routes or fallback safety nets when domestic abuse occurred.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-stone-100 bg-white space-y-2">
                      <h5 className="font-serif text-xs font-bold text-stone-800 uppercase tracking-wide">
                        ⚖️ Modern Re-Codings
                      </h5>
                      <p className="text-[11px] text-stone-500 font-sans leading-relaxed">
                        Modern structures aim to replace the absolute dependence on family males (Father, Husband, Brother) with public protections: laws, judicial systems, education, and equal career access.
                      </p>
                    </div>

                  </div>
                  
                  <div className="p-4 bg-amber-50/10 border border-amber-200/20 rounded-xl">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-[#8c7851] font-bold block mb-1">
                      Architectural Paradigm Shift
                    </span>
                    <p className="text-[11px] text-stone-605 font-sans leading-relaxed">
                      The ultimate goal of social reform isn't to take away protection, but to transition from <strong>dependence-based protection</strong> to <strong>democratic rights & financial self-sufficiency</strong>.
                    </p>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 4: MALE BALANCE SHEET */}
            {activeTab === 'male-ledger' && (
              <div className="space-y-4 text-left">
                <p className="text-center md:text-left text-xs font-mono uppercase text-[#8c7851] tracking-wider font-bold mb-1">
                  Advantages & Costs for Men
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Advantages Panel */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/50 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3 border-b border-stone-200/40 pb-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                        <h4 className="font-serif text-sm font-bold text-stone-850 uppercase tracking-wider">
                          Advantages for Men
                        </h4>
                      </div>
                      
                      <ul className="space-y-3.5 mt-4 text-xs font-sans text-[#5c554e]">
                        <li>
                          <strong className="text-stone-850 font-serif block text-xs font-semibold mb-0.5">Assumed Authority</strong>
                          Default social and organizational credit that places men in decision-making and leadership roles.
                        </li>
                        <li>
                          <strong className="text-stone-855 font-serif block text-xs font-semibold mb-0.5">Professional Priority</strong>
                          Workplace lifespans and corporate ladders historically designed around male availability, free from biological career gaps.
                        </li>
                        <li>
                          <strong className="text-stone-850 font-serif block text-xs font-semibold mb-0.5">Domestic Autonomy</strong>
                          Reduced societal expectation to bear primary responsibility for daily home care, cooking, and child-rearing.
                        </li>
                        <li>
                          <strong className="text-stone-850 font-serif block text-xs font-semibold mb-0.5">Public Safety Margin</strong>
                          Significantly greater freedom of movement and lower vulnerability to structural sexual violence in public environments.
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Costs Panel */}
                  <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200/50 shadow-xs flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-3 border-b border-stone-200/40 pb-3">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500 shrink-0" />
                        <h4 className="font-serif text-sm font-bold text-stone-850 uppercase tracking-wider">
                          Costs for Men
                        </h4>
                      </div>
                      
                      <ul className="space-y-3.5 mt-4 text-xs font-sans text-[#5c554e]">
                        <li>
                          <strong className="text-stone-850 font-serif block text-xs font-semibold mb-0.5">Hard Provider Obligation</strong>
                          Societal worth and family respect strictly anchored to earning power. Financial insecurity leads to immediate status loss.
                        </li>
                        <li>
                          <strong className="text-stone-850 font-serif block text-xs font-semibold mb-0.5">Emotional Suppression</strong>
                          Conditioned from childhood to bury vulnerability, anxiety, and sadness, leading to psychological isolation and communication gaps.
                        </li>
                        <li>
                          <strong className="text-stone-850 font-serif block text-xs font-semibold mb-0.5">Physical Hazard Exposure</strong>
                          Extreme high-risk responsibilities, concentrating male labor in combat, mining, complex construction, and industrial hazards.
                        </li>
                        <li>
                          <strong className="text-stone-850 font-serif block text-xs font-semibold mb-0.5">Identity Breakdown & Burnout</strong>
                          Acute performance pressure with minimal space for failure. This contributes significantly to high male suicide and distress rates.
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* TAB 5: SYNTHESIS */}
            {activeTab === 'synthesis' && (
              <div className="bg-[#faf8f5] p-6 rounded-2xl border border-stone-200/80 text-left space-y-6">
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#8c7851] font-bold">
                    The Synthesis
                  </span>
                  <h4 className="font-serif text-xl font-bold text-stone-900 mt-1">
                    Moving Beyond Shouted Binaries
                  </h4>
                  <p className="text-stone-500 text-xs font-sans mt-2 leading-relaxed">
                    The reason debates about patriarchy become extremely heated is that different participants concentrate exclusively on one side of a compound reality:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl border border-stone-100 flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400 shrink-0 mt-1.5" />
                    <div>
                      <strong className="font-serif text-xs font-bold text-stone-800 block">The Critic's View</strong>
                      <p className="text-[11px] text-stone-500 font-sans mt-1 leading-relaxed">
                        Sees clear exclusion, legal control, unequal status, and unfair limits put on female human potential.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-xl border border-stone-100 flex items-start gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                    <div>
                      <strong className="font-serif text-xs font-bold text-stone-800 block">The Defender's View</strong>
                      <p className="text-[11px] text-stone-500 font-sans mt-1 leading-relaxed">
                        Sees stable family cells, predictable expectations, protection structures, clear division of duty, and localized safety.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-5 space-y-3.5 bg-white p-5 rounded-xl border border-stone-100">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-[#8c7851] font-bold block">
                    The Golden Question
                  </span>
                  <p className="font-serif text-xs md:text-sm text-stone-800 leading-relaxed font-bold italic">
                    "The deeper discussion is not: 'Is patriarchy entirely good or entirely bad?' The deeper question is: 'Which parts of these traditions foster authentic human flourishing, and which parts unnecessarily stunt human potential?'"
                  </p>
                  <p className="text-stone-550 text-[11px] font-sans leading-relaxed">
                    That is a far weightier and more constructive riddle to solve than simply scoring teams in an artificial tribal war.
                  </p>
                </div>
              </div>
            )}

            {/* Pagination navigation controls */}
            <div className="pt-6 border-t border-stone-100 flex flex-col sm:flex-row gap-4 justify-between items-center text-xs font-sans text-stone-500">
              <div className="flex items-center gap-2.5 bg-stone-50 py-1.5 px-3 rounded-full border border-stone-200/40 shadow-2xs">
                <div className="flex gap-1 justify-center">
                  {tabs.map((tab, i) => (
                    <span 
                      key={tab.id} 
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        tab.id === activeTab ? 'bg-[#8c7851] w-3.5' : 'bg-stone-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-[11px] text-stone-500 font-medium">
                  Part {tabs.findIndex(t => t.id === activeTab) + 1} of {tabs.length}: <span className="text-stone-800 font-semibold">{tabs.find(t => t.id === activeTab)?.label}</span>
                </span>
              </div>
              <button
                onClick={() => {
                  const currentIndex = tabs.findIndex(t => t.id === activeTab);
                  const nextIndex = (currentIndex + 1) % tabs.length;
                  setActiveTab(tabs[nextIndex].id);
                }}
                className="flex items-center gap-2 bg-[#8c7851] hover:bg-[#736342] text-white px-4 py-2 rounded-xl text-xs font-semibold shadow-xs transition duration-200 cursor-pointer select-none"
              >
                <span>Next Subject</span>
                <ArrowRight size={14} />
              </button>
            </div>

          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
