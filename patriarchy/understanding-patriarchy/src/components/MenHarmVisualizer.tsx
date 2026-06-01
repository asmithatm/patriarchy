import React from 'react';
import { motion } from 'motion/react';
import { Brain, HeartPulse, ShieldAlert, Heart, Users, Activity } from 'lucide-react';

export default function MenHarmVisualizer() {
  const stats = [
    {
      value: '77%',
      label: 'Workplace Stress',
      desc: 'Of working men report significant professional stress, driven by default provider expectations.',
      icon: Brain,
      color: 'from-amber-600 to-amber-700',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-100',
      iconColor: 'text-amber-700',
      percentage: 77,
    },
    {
      value: '71%',
      label: 'Gender and Suicide',
      desc: 'Of suicides in India are male, highlighting extreme silent pressure and isolation.',
      icon: ShieldAlert,
      color: 'from-red-600 to-red-700',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-100',
      iconColor: 'text-red-700',
      percentage: 71,
    },
    {
      value: '50%',
      label: 'Emotions & Help-Seeking',
      desc: 'Of men feel comfortable seeking mental health support, indicating a heavy stigma on vulnerability.',
      icon: Heart,
      color: 'from-stone-600 to-stone-700',
      bgColor: 'bg-stone-50',
      borderColor: 'border-stone-100',
      iconColor: 'text-stone-700',
      percentage: 50,
    },
    {
      value: '< 10%',
      label: 'Supportive Infrastructure',
      desc: 'Of workplaces offer structured mental health support tailored for gender-specific corporate pressures.',
      icon: Activity,
      color: 'from-amber-800 to-amber-900',
      bgColor: 'bg-stone-50',
      borderColor: 'border-stone-150',
      iconColor: 'text-amber-900',
      percentage: 10,
    },
  ];

  return (
    <div id="men-harm-visualizer" className="w-full max-w-5xl mx-auto px-4 py-12 border-t border-stone-200/60 mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Column: Conceptual Overview */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f4eedc] text-[#8c7851] rounded-full border border-[#8c7851]/10">
            <Users size={12} className="shrink-0" />
            <span className="font-mono text-[10px] uppercase tracking-widest font-bold">
              Patriarchy Also Harms Men
            </span>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif text-3xl md:text-3.5xl tracking-tight text-stone-900 font-bold leading-tight">
              The Other Side of the System
            </h3>
            <p className="font-sans text-stone-700 font-medium leading-relaxed">
              Patriarchy does not only limit women.
            </p>
            <p className="text-stone-550 font-sans text-sm leading-relaxed">
              It also pressures men to become providers, suppress emotions, and tie their entire identity and self-worth to career success.
            </p>
          </div>

          <div className="border-l-3 border-amber-600/50 pl-4 py-0.5 mt-8 bg-amber-50/20 rounded-r-xl">
            <p className="text-[11px] font-mono uppercase tracking-wider text-amber-800 font-bold mb-1">
              Dual System Audit
            </p>
            <p className="text-xs text-stone-500 font-sans leading-relaxed">
              Traditional expectations lock men into rigid roles, punishing deviation from the "unshakable provider" ideal.
            </p>
          </div>
        </div>

        {/* Right Column: Visualizer Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={idx}
                className="p-5 rounded-2xl border border-stone-200/80 bg-white hover:border-[#8c7851]/40 hover:shadow-xs transition duration-200 flex flex-col justify-between text-left animate-fade-in"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-serif text-xs font-bold text-stone-800 uppercase tracking-wider">
                      {stat.label}
                    </h4>
                    <div className={`p-2 rounded-xl ${stat.bgColor} ${stat.iconColor} shrink-0`}>
                      <IconComponent size={16} />
                    </div>
                  </div>
                  <div>
                    <span className="font-serif text-3.5xl font-black text-stone-800 tracking-tight block">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-500 leading-relaxed font-sans">
                    {stat.desc}
                  </p>
                </div>

                {/* Progress bar representer */}
                <div className="w-full bg-stone-100 h-1.5 rounded-full mt-4 overflow-hidden">
                  <div 
                    className={`h-full rounded-full bg-gradient-to-r ${stat.color}`} 
                    style={{ width: `${stat.percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Closing Callout Block */}
      <div className="mt-12 p-6 rounded-2xl border border-[#8c7851]/20 bg-[#faf8f5]/80 text-left">
        <span className="font-mono text-[9px] uppercase tracking-widest text-[#8c7851] font-bold block mb-2">
          Conclusion
        </span>
        <p className="font-serif text-sm text-stone-850 leading-relaxed italic">
          "Patriarchy is not simply a system that advantages all men and disadvantages all women. It distributes power unevenly, while also imposing restrictive expectations on both. The result is a workplace culture that limits opportunity, leadership diversity and human wellbeing."
        </p>
      </div>

    </div>
  );
}
