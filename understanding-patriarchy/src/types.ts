/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface PromptBubble {
  id: string;
  text: string;
  type: 'neutral' | 'system' | 'effect' | 'personal';
  weight: number; // For visualization positioning/sizing
  description: string;
}

export interface SystemLayer {
  id: string;
  name: string;
  description: string;
  realWorldExample: string;
  influenceLevel: number; // Radii offset
  details: string[];
}

export interface GearStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  connectingConcept: string;
  color: string;
}

export interface WomenExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  scenario: string;
  fact: string;
  calculationPrompt: string;
}

export interface CorporateLevel {
  id: string;
  title: string;
  gapText: string;
  percentWomen: number;
  percentMen: number;
  leadershipExpectations: string;
  doubleStandard: {
    man: string;
    woman: string;
  };
  barrierName: string;
  barrierDescription: string;
}

export interface PrivilegeNode {
  id: string;
  category: string;
  advantageLevel: 'Extreme' | 'High' | 'Partial' | 'Variable';
  who: string;
  details: string;
  mechanisms: string[];
}

export interface MisconceptionCard {
  id: string;
  misconception: string;
  realityTitle: string;
  differentRealities: string;
  exampleName: string;
  exampleContext: string;
}

export interface HistoryTimelineNode {
  id: string;
  year: string;
  title: string;
  region: string;
  description: string;
  impact: string;
}

export interface ArmorPiece {
  id: string;
  name: string;
  expectation: string;
  emotionalCost: string;
  symptom: string;
  illustrationClass: string;
  weightText: string;
}

export interface PerspectiveBlock {
  id: string;
  title: string;
  argumentSummary: string;
  keyAxiom: string;
  fairQuote: string;
}
