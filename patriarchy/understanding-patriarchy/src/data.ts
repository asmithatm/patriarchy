/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  PromptBubble,
  SystemLayer,
  GearStep,
  WomenExperienceItem,
  CorporateLevel,
  PrivilegeNode,
  MisconceptionCard,
  HistoryTimelineNode,
  ArmorPiece,
  PerspectiveBlock
} from './types';

export const INTRO_BUBBLES: PromptBubble[] = [
  { id: '1', text: 'Men in power', type: 'system', weight: 1.4, description: 'Authority and leadership positions dominated by men historically. This distribution ensures that the voices shaping policy, law, and corporate direction hold predominantly male bias.' },
  { id: '2', text: 'Gender inequality', type: 'personal', weight: 1.5, description: 'Disparities in pay, opportunity, and domestic distribution. Unseen default duties of home care continue to create a silent drag on women’s career progress.' },
  { id: '3', text: 'Family traditions', type: 'neutral', weight: 1.2, description: 'Inherited roles of leadership, parenting, and family lines. These silent beliefs teach us from childhood what behaviors are expected of different genders, setting up lifelong patterns.' },
  { id: '4', text: 'Corporate culture', type: 'system', weight: 1.3, description: 'Traits coded as professional, such as assertiveness or toughness. This forces women into a narrow tightrope—being direct is labeled aggressive, while being collaborative is seen as weak.' },
  { id: '5', text: 'Historical systems', type: 'neutral', weight: 1.2, description: 'Legal restrictions on women owning property, voting, or working. These ancient laws built the foundations of our economic system, leaving wealth patterns that still require active effort to balance.' },
  { id: '6', text: 'Oppression', type: 'effect', weight: 1.6, description: 'The systemic constraints placed upon women’s autonomy. It acts not as a single visible barrier, but as a series of small, daily limitations that collectively restrict personal choices.' },
  { id: '7', text: 'Protection', type: 'neutral', weight: 1.1, description: 'The traditional framing of the male breadwinner as protector. While sounding positive, this well-meaning duty historically traded a woman’s independent legal standing for economic security.' },
  { id: '8', text: 'Masculinity', type: 'personal', weight: 1.4, description: 'The cultural definition of what it means to be a "real man". By declaring vulnerability off-limits, it forces boys to bottle up natural emotions, turning pain into isolation or aggression.' }
];

export const SYSTEM_LAYERS: SystemLayer[] = [
  {
    id: 'layer-workplace',
    name: 'Workplace & Economy',
    description: 'Promotions based on potential vs. proven criteria.',
    realWorldExample: '"A male software developer is seen as dedicated working late; a female counterpart is asked "who takes care of family?""',
    influenceLevel: 100,
    details: [
      'The Motherhood Penalty assuming pregnant women lose career commitment.',
      'Networking exclusion from late-night gatherings, drinks, and casual outings.',
      'Double standards for competence versus likability.'
    ]
  },
  {
    id: 'layer-culture',
    name: 'Culture & Media',
    description: 'Norms that code leadership as masculine and care as feminine.',
    realWorldExample: '"A strong woman displayed on screen as toxic or arrogant."',
    influenceLevel: 130,
    details: [
      'Media representing power exclusively as aggressive and commanding.',
      'Reinforcing submissiveness as the natural form of feminine grace.',
      'Normalizing the domestic "Double Shift" as an act of maternal love.'
    ]
  },
  {
    id: 'layer-religion',
    name: 'Religious Institutions',
    description: 'Deed of final authority and clergy ranks given to men.',
    realWorldExample: '"Literal readings naming the father/husband as spiritual guide."',
    influenceLevel: 160,
    details: [
      'Inherited customs designating senior males as moral guardians.',
      'Historically restricted leadership paths for women in faith congregations.',
      'Moral framing of female sacrifice as high virtue.'
    ]
  },
  {
    id: 'layer-politics',
    name: 'Politics & Law',
    description: 'Historical denial of voting, property, and civil rights.',
    realWorldExample: '"Legal structures that consolidated status onto husband’s identity."',
    influenceLevel: 190,
    details: [
      'Late arrival of universal voting rights globally.',
      'Legal assumptions around marital wealth and asset registration.',
      'Underrepresentation in legislative cabinets and heads of state.'
    ]
  },
  {
    id: 'layer-family',
    name: 'Family Structures',
    description: 'Subtle expectations of who leads and who accommodates.',
    realWorldExample: '"Expecting a daughter to support her career but relocate after marriage."',
    influenceLevel: 220,
    details: [
      'Lineage tracking through sons to carry the family legacy.',
      'Automatic designation of household management to women.',
      'Unequal distribution of the cognitive and domestic mental load.'
    ]
  }
];

export const GEAR_STEPS: GearStep[] = [
  {
    id: 1,
    title: 'Beliefs',
    subtitle: 'The Core Assumptions',
    description: 'Deeply ingrained social beliefs such as "A man must lead" or "A mother must sacrifice her career". These assumptions run background processes before we think.',
    connectingConcept: 'Beliefs create the foundation of what is perceived as normal, acceptable, or natural.',
    color: '#D4AF37' // Warm Gold
  },
  {
    id: 2,
    title: 'Expectations',
    subtitle: 'Social Pressure Maps',
    description: 'These core beliefs translate into daily expectations: men must be strong and provider-oriented, while women must be double-shifting caretakers. People operate under these maps unconsciously.',
    connectingConcept: 'Expectations guide how we judge individual actions and set the limits of what is approved.',
    color: '#AA7C11'
  },
  {
    id: 3,
    title: 'Behaviors',
    subtitle: 'The Double Standards',
    description: 'Assertiveness in a man yields "strong leader" feedback; identical assertiveness in a woman earns "aggressive" or "bossy" remarks. We modify behaviors to survive these responses.',
    connectingConcept: 'Repeated behaviors harden into social habits and corporate guidelines.',
    color: '#475569' // Cool Slate
  },
  {
    id: 4,
    title: 'Institutions',
    subtitle: 'Locked-in Habits',
    description: 'Schools, corporations, courtrooms, and family trees formalize these behaviors. Promoters reward traditional dedication, legal codes inherit historic property biases, and structures lock in inequality.',
    connectingConcept: 'When institutions protect these expectations, they shape lifetimes of career and home trajectories.',
    color: '#1E293B' // Deep Navy
  },
  {
    id: 5,
    title: 'Outcomes',
    subtitle: 'Systemic Realities',
    description: 'The final outcome is representation gaps, silent mental loads, emotional suppression in men, the Have-It-All burden in women, and relationships isolated from genuine emotional intimacy.',
    connectingConcept: 'These visible gaps feed back into the core Beliefs, making them seem natural and perpetuating the loop.',
    color: '#0F172A' // Charcoal Night
  }
];

export const WOMEN_EXPERIENCE: WomenExperienceItem[] = [
  {
    id: 'have-it-all',
    title: 'The "Have It All" Burden',
    subtitle: 'Dimension Overload',
    scenario: 'A male software architect working late is perceived as extremely dedicated to his craft.',
    fact: 'A female software architect working late faces the question: "Who is taking care of your family?"',
    calculationPrompt: 'Modern urban women are evaluated across multiple complex dimensions simultaneously — blending high corporate success with complete domestic, relational, and emotional availability.'
  },
  {
    id: 'mental-load',
    title: 'The Mental Load',
    subtitle: 'Cognitive Responsibility',
    scenario: 'The husband helps out enthusiastically by doing chores when asked.',
    fact: 'The wife remains the "project manager," mapping school forms, doctor appointments, groceries, and domestic schedules.',
    calculationPrompt: 'The physical work of the household may be shared. However, the cognitive responsibility of keeping the family floating often remains entirely on the woman.'
  },
  {
    id: 'competence-trap',
    title: 'Competence-Likability Trap',
    subtitle: 'The Double Bind',
    scenario: 'A man says: "This proposal is weak." He is viewed as confident and direct.',
    fact: 'A woman says: "This proposal is weak." She is labeled aggressive, arrogant, or bossy.',
    calculationPrompt: 'This creates a double bind: Be soft and be perceived as weak. Or be strong and be perceived as unlikeable, leading to high social and corporate penalties.'
  },
  {
    id: 'safety-calcs',
    title: 'Safety Calculations',
    subtitle: 'Mental Energy Drifts',
    scenario: 'Men book late-night cabs, walk dark roads, or interact with colleagues without micro-apprehension.',
    fact: 'Women perform continuous risk assessments: Is this path lit? Should I share my location? Is it safe after dark?',
    calculationPrompt: 'These constant safety calculations consume immense daily mental energy and restricted personal liberty that go entirely unnoticed by men.'
  },
  {
    id: 'marriage-pressure',
    title: 'Marriage Pressure',
    subtitle: 'Altered Life Trajectories',
    scenario: 'An educated man is asked of his career, goals, and technical ambitions.',
    fact: 'An educated woman of equal skill is asked: "When are you getting married?" or "Will your husband handle your salary?"',
    calculationPrompt: 'The underlying structural assumption remains: a woman’s entire life trajectory, education, and career should eventually bend and adapt to suit marriage.'
  }
];

export const CORPORATE_LADDER: CorporateLevel[] = [
  {
    id: 'intern',
    title: 'The Entry Cohort',
    gapText: 'Balanced entry representation (approx. 48% women, 52% men).',
    percentWomen: 48,
    percentMen: 52,
    leadershipExpectations: 'Eager, technical execution, supportive energy, high responsiveness.',
    doubleStandard: {
      man: 'Seen as "high potential" and given developmental stretch assignments early.',
      woman: 'Assumed to require "hands-on proof" before she is trusted with core client lines.'
    },
    barrierName: 'The Proof Gap',
    barrierDescription: 'Men are frequently promoted on raw potential, women must supply mountains of proven performance.'
  },
  {
    id: 'manager',
    title: 'Middle Management',
    gapText: 'The gap begins to widen (approx. 35% women, 65% men).',
    percentWomen: 35,
    percentMen: 65,
    leadershipExpectations: 'Decisiveness, team alignment, client command, project mastery.',
    doubleStandard: {
      man: 'Direct feedback is seen as confident leadership. Highly valued for taking charge.',
      woman: 'Direct feedback is labeled as "opinionated" or having "too much attitude."'
    },
    barrierName: 'The Assertiveness Penalty',
    barrierDescription: 'Coded leadership traits mismatch traditional expectations around female speech, forcing women to walk a relational tightrope.'
  },
  {
    id: 'director',
    title: 'The Director Rank',
    gapText: 'Significant divergence (approx. 22% women, 78% men).',
    percentWomen: 22,
    percentMen: 78,
    leadershipExpectations: 'Strategic risk-taking, round-the-clock availability, travel.',
    doubleStandard: {
      man: 'Commended for travel; assumed he has solid stability and family backing.',
      woman: 'Sidelined for travel; managers unconsciously assume she won’t write off bedtime or family care.'
    },
    barrierName: 'The Motherhood Penalty',
    barrierDescription: 'Fathers experience zero professional penalty. For mothers, opportunities vanish before they are even asked if they want them.'
  },
  {
    id: 'executive',
    title: 'Executive Suite',
    gapText: 'Severe visual divergence (approx. 12% women, 88% men).',
    percentWomen: 12,
    percentMen: 88,
    leadershipExpectations: 'Board presence, capital stewardship, command of the room.',
    doubleStandard: {
      man: 'His authority is naturalized. Tough negotiations are seen as fiduciary responsibility.',
      woman: 'Her authority is continuously audited. Her tone is scrutinized for pitch, warmth, and grace.'
    },
    barrierName: 'The Trust Monopoly',
    barrierDescription: 'Crucial relationships form in informal networks (golf, drinks, late night) from which women are often subtley excluded.'
  },
  {
    id: 'board',
    title: 'Board of Directors',
    gapText: 'Minimal female footprint (approx. 8% women, 92% men).',
    percentWomen: 8,
    percentMen: 92,
    leadershipExpectations: 'Ultimate oversight, historical prestige, protection of legacy.',
    doubleStandard: {
      man: 'Part of the traditional ecosystem. Peer validation is immediate and seamless.',
      woman: 'Often seen as a symbolic placeholder; ideas must be echoed by men to gain traction.'
    },
    barrierName: 'The Legacy Circle',
    barrierDescription: 'An interlocking web of executive relationships and board directories dominated historically by senior gentlemen.'
  }
];

export const PRIVILEGE_SPECTRUM: PrivilegeNode[] = [
  {
    id: 'elite-men',
    category: 'Elite & Wealthy Men',
    advantageLevel: 'Extreme',
    who: 'Powerful executives, legacy heirs, political leaders, landowners',
    details: 'This small cohort holds the highest concentration of decision-making authority, leveraging assets and systemic backing to dictate policy.',
    mechanisms: [
      'Property & corporate inheritance networks',
      'Unchecked decision-making power in financial capitals',
      'Exemptions from standard safety or material calculations'
    ]
  },
  {
    id: 'ordinary-men',
    category: 'Ordinary & Working Men',
    advantageLevel: 'High',
    who: 'Standard wage earners, middle-class fathers, office workers',
    details: 'While they hold structural social legitimacy and career prioritization, they carry heavy burdens of provider strain and relationship isolation.',
    mechanisms: [
      'Presumed professional competence compared to female peers',
      'Freedom from safety calculations in public and evening spaces',
      'Exemption from being the automatic primary domestic lead'
    ]
  },
  {
    id: 'struggling-sectors',
    category: 'Marginalized & Struggling Men',
    advantageLevel: 'Partial',
    who: 'Working-class laborers, unemployed men, minority sectors',
    details: 'Despite living in a patriarchal society, economic deprivation leaves them with very little actual power, exposing them to high physical risks.',
    mechanisms: [
      'Retained baseline social legitimacy over women in their cohort',
      'But lack the capital, rights, or status of elite tiers',
      'Often targeted for Expendable Labor (manual labor, military service)'
    ]
  }
];

export const MISCONCEPTIONS: MisconceptionCard[] = [
  {
    id: 'mc-1',
    misconception: '"All men benefit equally from the system."',
    realityTitle: 'The Power Dispersal reality',
    differentRealities: 'Patriarchy is a hierarchy that places elite men at the absolute top, ordinary men in the middle, and women/children below. Economic status, race, and physical vulnerability deeply affect who holds actual power.',
    exampleName: 'The Poor Laborer',
    exampleContext: 'A manual construction laborer has virtually zero authority in society, is treated as expendable, and endures crushing physical risks, despite breathing in a patriarchal social system.'
  },
  {
    id: 'mc-2',
    misconception: '"Men’s struggles mean patriarchy isn’t real."',
    realityTitle: 'The Dual Burden structure',
    differentRealities: 'The existence of men’s suffering is not evidence against patriarchy; it is direct proof of it. Power privileges are strictly bundled with heavy sacrifices: mandatory provider duties, dangerous risk-taking, and severe emotional starvation.',
    exampleName: 'The Exhausted Provider',
    exampleContext: 'A man undergoing severe mental health crises who hides it entirely out of guilt, because the system tells him his worth is strictly equal to his utility/earnings.'
  }
];

export const HISTORICAL_TIMELINE: HistoryTimelineNode[] = [
  {
    id: 'hist-1',
    year: 'Ancient Agricultural Era',
    title: 'The Origin of Surpluses',
    region: 'Mesopotamia / Global',
    description: 'Humanity transitions from hunting-gathering to fixed agricultural farming. For the first time, crop surpluses and physical property emerge.',
    impact: 'To secure property transfer and certify lineage, men restrict women’s mobility, establishing the first controlled family lines.'
  },
  {
    id: 'hist-2',
    year: '18th to 19th Century',
    title: 'Lost Legal Identity',
    region: 'Europe / North America',
    description: 'Under standard coverture law, a woman’s legal existence is completely folded into her husband’s upon marriage.',
    impact: 'She could not own property, keep her own wages, sign legal contracts, or obtain an independent education. Men holds absolute veto power.'
  },
  {
    id: 'hist-3',
    year: 'Early 20th Century',
    title: 'Winning the Right to Vote',
    region: 'Global',
    description: 'A global movement erupts as women demand the basic right to vote, legalizing their say in political and socio-economic systems.',
    impact: 'The first major crack in modern institutional patriarchy. Women gain access to legislative influence, though social execution remains restricted.'
  },
  {
    id: 'hist-4',
    year: 'Post-War Mid 20s',
    title: 'The Dual Shift Emergence',
    region: 'Urban Centers',
    description: 'Industrial expansion draws women into office environments and factories en masse to earn independent salaries.',
    impact: 'While economic doors open, corresponding domestic and emotional labor remains unshared. The Double Shift is officially born.'
  }
];

export const ARMOR_PIECES: ArmorPiece[] = [
  {
    id: 'helmet',
    name: 'The Visor of Stoicism',
    expectation: '"Be strong. Don’t cry. Man up."',
    emotionalCost: 'Forces complete emotional suppression from childhood. Tears are treated as weakness; vulnerability is branded as danger.',
    symptom: 'Adult men struggle to identify internal trauma or seek therapy, misdirecting sadness and fear exclusively as authorized anger.',
    illustrationClass: 'M12 2L3 7v6c0 5.52 4.48 10 9 10s9-4.48 9-10V7l-9-5z', // Helmet/Shield SVG Path representation
    weightText: '25kg of Emotional Insulation'
  },
  {
    id: 'pauldron',
    name: 'The Pauldron of Utility',
    expectation: '"Your worth equals your usefulness and earnings."',
    emotionalCost: 'Ties a man’s identity exclusively to material output. Loss of employment or status feels like complete loss of worth and self.',
    symptom: 'High burnout rates, deep guilt when resting, and complete neglect of personal physical and psychological well-being.',
    illustrationClass: 'M20 7h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2z', // Briefcase path representing utility
    weightText: '40kg of Provider Burden'
  },
  {
    id: 'cuirass',
    name: 'The Cuirass of Expendability',
    expectation: '"You are the protector and risk-taker."',
    emotionalCost: 'Societally accepted that men should expect heavy physical risk, perform high-risk manual work, and shield others.',
    symptom: 'Men face disproportionate battlefield deaths and hazardous workplace accidents due to societal expectations.',
    illustrationClass: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z', // Shield detail/badge representing protection
    weightText: '35kg of Physical Sacrifice'
  },
  {
    id: 'gauntlet',
    name: 'The Gauntlets of Authority',
    expectation: '"Lead, initiate, and stay dominant."',
    emotionalCost: 'Bans men from seeking emotional support, sharing doubts, or expressing relationship needs. They must always maintain complete command.',
    symptom: 'Relationship Isolation — many men have spouses and peers but lack close friends with whom they share deep emotional lives.',
    illustrationClass: 'M12 4v16m8-8H4', // Crosshairs/Command representation
    weightText: '20kg of Guarded Isolation'
  }
];

export const DEFEND_PERSPECTIVES: PerspectiveBlock[] = [
  {
    id: 'def-1',
    title: 'Stable & Structured Families',
    argumentSummary: 'Proponents state that fixed family hierarchies reduce conflict by designating clear, non-overlapping channels of authority, ensuring kids grow with highly stable roles.',
    keyAxiom: 'Clear structures are easier than endless personal choices.',
    fairQuote: '"Traditional structures survived because they solved local division of labor challenges under extreme material poverty."'
  },
  {
    id: 'def-2',
    title: 'Clear Expectations & Order',
    argumentSummary: 'They argue that modern fluid roles yield deep identity anxiety and role confusion. Preset behaviors, though limiting, offer immediate societal alignment and clarity.',
    keyAxiom: 'Clear roles reduce the stress of having to decide everything.',
    fairQuote: '"When roles are predefined, there is less friction over daily negotiations; everyone knows their duty to the unit."'
  }
];

export const CRITIC_PERSPECTIVES: PerspectiveBlock[] = [
  {
    id: 'crit-1',
    title: 'Concentration of Supreme Power',
    argumentSummary: 'Critics point out that denying representation silences crucial human experiences in government, resources, and corporate pathways, leaving elite men with complete monopoly.',
    keyAxiom: 'Fairness requires that everyone has a say in their own life.',
    fairQuote: '"A system that excludes half of humanity from defining its rules inevitably serves to optimize the comfort of those who hold the pen."'
  },
  {
    id: 'crit-2',
    title: 'Severe Human Potential Restrictions',
    argumentSummary: 'By forcing people into binary tracks (career-builder or home-builder), the system deprives women of creative expression and deprives men of emotional depth and caregiving.',
    keyAxiom: 'Human talents are too unique to fit into simple gender boxes.',
    fairQuote: '"Both women and men are constrained: one forced out of the boardroom, the other prohibited from the emotional playground of the home."'
  }
];
