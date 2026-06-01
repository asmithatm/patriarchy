/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { HISTORICAL_TIMELINE } from '../data';
import { Calendar, History, MapPin, Landmark } from 'lucide-react';

export default function TimelineHistory() {
  return (
    <div id="historical-museum-timeline" className="w-full max-w-5xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <span className="font-mono text-xs uppercase tracking-widest text-[#8c7851] bg-[#f4eedc] px-3 py-1 rounded-full">
          Historical Milestones
        </span>
        <h3 className="font-serif text-3xl md:text-4xl text-[#3a322d] mt-4 mb-2 tracking-tight">
          Socio-Legal Advantages Given to Men
        </h3>
        <p className="text-sm font-sans text-gray-500 max-w-xl mx-auto">
          The rights and authority enjoyed by modern men emerged from historical structural designs intended to secure property lineage and administrative cohesion over centuries.
        </p>
      </div>

      <div className="relative border-l-2 border-[#e8dfc4] ml-6 md:ml-32 space-y-12 py-4">
        {HISTORICAL_TIMELINE.map((node, index) => {
          return (
            <motion.div
              key={node.id}
              id={`timeline-node-${node.id}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Vertical timeline connector dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 border-amber-500 bg-white group-hover:bg-amber-500 transition-all duration-300 shadow-sm" />
              
              {/* Year flag in gutter for desktop */}
              <div className="absolute left-[-15px] md:left-[-170px] top-0 hidden md:block w-36 text-right">
                <span className="font-serif text-[#8c7851] font-bold text-lg leading-none block">
                  {node.year}
                </span>
                <span className="font-mono text-[9px] uppercase tracking-wider text-gray-400 block mt-0.5">
                  Historical Era
                </span>
              </div>

              {/* Card component */}
              <div className="bg-white border border-stone-200/80 rounded-2xl p-6 md:p-8 hover:border-[#8c7851] transition-all duration-300 shadow-xs relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(#8c7851_1px,transparent_1px)] [background-size:8px_8px] opacity-[0.05] pointer-events-none" />

                {/* Mobile Year Badge */}
                <div className="md:hidden inline-block bg-[#f4eedc] rounded-md px-2.5 py-1 text-xs font-serif font-bold text-[#8c7851] mb-3">
                  {node.year}
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest flex items-center gap-1">
                    <MapPin size={10} className="text-amber-500" /> {node.region}
                  </span>
                  <span className="text-gray-200 hidden sm:inline">|</span>
                  <span className="font-mono text-[10px] text-gray-400 uppercase tracking-widest flex items-center gap-1">
                    <Landmark size={10} className="text-stone-500" /> Institutional construct
                  </span>
                </div>

                <h4 className="font-serif text-xl font-bold text-[#2c2a29] tracking-tight group-hover:text-amber-800 transition-colors">
                  {node.title}
                </h4>

                <p className="text-sm text-gray-600 font-sans mt-3.5 leading-relaxed">
                  {node.description}
                </p>

                <div className="mt-5 p-4.5 bg-[#faf8f5] border-l-2 border-[#8c7851] rounded-r-xl">
                  <span className="font-display font-bold text-xs uppercase tracking-wider text-[#3a322d] block">
                    Underlying System Impact:
                  </span>
                  <p className="text-xs text-gray-500 font-sans mt-1 leading-relaxed">
                    {node.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8c7851] bg-[#f4eedc] py-1 px-4 rounded-full">
          <History size={11} />
          <span>Note: While the physical necessity for these restrictions has faded, the social rules still linger today.</span>
        </span>
      </div>
    </div>
  );
}
