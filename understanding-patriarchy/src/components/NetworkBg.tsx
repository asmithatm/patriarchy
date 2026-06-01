/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useMemo } from 'react';
import { motion } from 'motion/react';

interface Node {
  id: number;
  x: number;
  y: number;
  r: number;
  label: string;
  category: 'women' | 'men' | 'family' | 'institution' | 'norm';
}

interface Edge {
  from: number;
  to: number;
  bold: boolean;
}

interface NetworkBgProps {
  interactive?: boolean;
  highlightCategory?: 'women' | 'men' | 'family' | 'institution' | 'norm' | 'all' | 'none';
  expansionFactor?: number; // 0 to 1
  className?: string;
}

export default function NetworkBg({
  interactive = true,
  highlightCategory = 'all',
  expansionFactor = 0.5,
  className = ''
}: NetworkBgProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!interactive) return;
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setMousePos({
        x: (clientX / window.innerWidth - 0.5) * 40,
        y: (clientY / window.innerHeight - 0.5) * 40
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [interactive]);

  // Generate static positions during mount so they don't shift during state changes
  const nodes: Node[] = useMemo(() => [
    { id: 1, x: 34, y: 28, r: 8, label: 'Workplace', category: 'institution' },
    { id: 2, x: 70, y: 32, r: 9, label: 'Family Lineage', category: 'family' },
    { id: 3, x: 50, y: 48, r: 12, label: 'Core Expectations', category: 'norm' },
    { id: 4, x: 31, y: 64, r: 7, label: 'Women’s Double Shift', category: 'women' },
    { id: 5, x: 74, y: 65, r: 7, label: 'Men’s Provider Burden', category: 'men' },
    { id: 6, x: 39, y: 72, r: 6, label: 'Cognitive Load', category: 'women' },
    { id: 7, x: 64, y: 70, r: 6, label: 'Emotional Silence', category: 'men' },
    { id: 8, x: 45, y: 22, r: 8, label: 'Political Offices', category: 'institution' },
    { id: 9, x: 78, y: 20, r: 5, label: 'Legal Codes', category: 'institution' },
    { id: 10, x: 28, y: 40, r: 6, label: 'Safety Checks', category: 'women' }
  ], []);

  const edges: Edge[] = useMemo(() => [
    { from: 1, to: 3, bold: true },
    { from: 2, to: 3, bold: true },
    { from: 3, to: 4, bold: false },
    { from: 3, to: 5, bold: false },
    { from: 4, to: 6, bold: true },
    { from: 5, to: 7, bold: true },
    { from: 1, to: 8, bold: false },
    { from: 8, to: 9, bold: false },
    { from: 2, to: 9, bold: true },
    { from: 4, to: 10, bold: true },
    { from: 1, to: 4, bold: false },
    { from: 2, to: 5, bold: false }
  ], []);

  const getCategoryColor = (category: string) => {
    if (highlightCategory !== 'all' && highlightCategory !== 'none' && highlightCategory !== category) {
      return 'stroke-stone-605 fill-stone-700/40 opacity-20';
    }
    switch (category) {
      case 'women': return 'stroke-amber-400 fill-amber-400/20';
      case 'men': return 'stroke-teal-400 fill-teal-400/20';
      case 'family': return 'stroke-[#cbbb9c] fill-[#cbbb9c]/20';
      case 'institution': return 'stroke-slate-300 fill-slate-300/20';
      default: return 'stroke-[#d4c5a1] fill-[#d4c5a1]/20';
    }
  };

  const getNodeTextColor = (category: string) => {
    if (highlightCategory !== 'all' && highlightCategory !== 'none' && highlightCategory !== category) {
      return 'fill-stone-500 opacity-30';
    }
    return 'fill-stone-200 font-bold';
  };

  return (
    <svg
      id="systems-network-bg"
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-visible select-none ${className}`}
      style={{ minHeight: '400px' }}
    >
      <g style={{
        transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        transition: 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)'
      }}>
        {/* Connection paths */}
        {edges.map((edge, idx) => {
          const fromNode = nodes.find(n => n.id === edge.from);
          const toNode = nodes.find(n => n.id === edge.to);
          if (!fromNode || !toNode) return null;

          // Scale expansion outward from center (50, 50)
          const fx = 50 + (fromNode.x - 50) * (1 + expansionFactor * 0.3);
          const fy = 50 + (fromNode.y - 50) * (1 + expansionFactor * 0.3);
          const tx = 50 + (toNode.x - 50) * (1 + expansionFactor * 0.3);
          const ty = 50 + (toNode.y - 50) * (1 + expansionFactor * 0.3);

          const isHighlighted = highlightCategory === 'all' || 
            (highlightCategory !== 'none' && (fromNode.category === highlightCategory || toNode.category === highlightCategory));

          return (
            <motion.line
              key={`edge-${idx}`}
              x1={`${fx}%`}
              y1={`${fy}%`}
              x2={`${tx}%`}
              y2={`${ty}%`}
              className={`${
                isHighlighted 
                  ? 'stroke-amber-500/30 dark:stroke-amber-400/20' 
                  : 'stroke-gray-300/20 dark:stroke-slate-800/20'
              }`}
              strokeWidth={edge.bold && isHighlighted ? 2 : 1}
              initial={{ strokeDashoffset: 100, strokeDasharray: 4 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ repeat: Infinity, duration: 25, ease: 'linear' }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const nx = 50 + (node.x - 50) * (1 + expansionFactor * 0.3);
          const ny = 50 + (node.y - 50) * (1 + expansionFactor * 0.3);
          const isHighlighted = highlightCategory === 'all' || highlightCategory === node.category;

          return (
            <g key={`node-${node.id}`}>
              {/* Radial glow */}
              {isHighlighted && (
                <circle
                  cx={`${nx}%`}
                  cy={`${ny}%`}
                  r={node.r + 14}
                  className="fill-amber-500/5 animate-pulse-slow pointer-events-none"
                />
              )}
              {/* Core circle */}
              <circle
                cx={`${nx}%`}
                cy={`${ny}%`}
                r={node.r}
                className={`stroke-1 transition-all duration-700 ${getCategoryColor(node.category)}`}
                strokeDasharray={node.category === 'norm' ? '3, 2' : undefined}
              />
              <circle
                cx={`${nx}%`}
                cy={`${ny}%`}
                r={2}
                className={isHighlighted ? 'fill-amber-500' : 'fill-gray-400'}
              />
              {/* Text label */}
              <text
                x={`${nx}%`}
                y={`${ny + node.r + 5}%`}
                textAnchor="middle"
                className={`font-display text-[10px] tracking-wider select-none font-medium transition-all duration-700 ${getNodeTextColor(node.category)}`}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
