export interface LeadershipItem {
  id: string;
  role: string;
  organization: string;
  eventOrContext: string;
  category: 'Competition' | 'Community' | 'Creative' | 'University';
  accent: 'blue' | 'orange' | 'cyan';
  description: string;
  contributions: string[];
  tags: string[];
}

export const leadershipItems: LeadershipItem[] = [
  {
    id: 'duothan-6',
    role: 'Finance Director',
    organization: 'IEEE Student Branch of NSBM',
    eventOrContext: 'Duothan 6.0 — Islandwide Hackathon / DevOps Competition',
    category: 'Competition',
    accent: 'blue',
    description:
      'Served as Finance Director for Duothan 6.0, the flagship hackathon organized by the IEEE Student Branch of NSBM focusing on DevOps, software development, and technical problem-solving.',
    contributions: [
      'Managed event budget allocation, expenditure tracking, and procurement workflows',
      'Coordinated financial records and sponsorship balance sheets with organizing chairs',
      'Ensured transparent financial reporting throughout competition planning and execution',
    ],
    tags: ['Duothan 6.0', 'IEEE NSBM', 'Finance Leadership', 'DevOps Hackathon'],
  },
  {
    id: 'profile-2026',
    role: 'Official Video Editor & Creative Team',
    organization: 'University Flagship Event',
    eventOrContext: 'PROFILE 2026',
    category: 'Creative',
    accent: 'orange',
    description:
      'Led video editing and creative media production for PROFILE 2026, delivering promotional trailers, speaker spotlights, and stage visual assets.',
    contributions: [
      'Edited official event teasers, recap videos, and high-impact digital promotional collateral',
      'Ensured dynamic storytelling, consistent color grading, and accurate audio synchronization',
      'Collaborated closely with organizing committees to meet tight event broadcast deadlines',
    ],
    tags: ['PROFILE 2026', 'Official Video Editor', 'Creative Media', 'Event Teaser'],
  },
  {
    id: 'studpro-9',
    role: 'Kickoff Committee Member',
    organization: 'IEEE NSBM Student Branch',
    eventOrContext: 'StudPro 9.0 — Career & Professional Development Program',
    category: 'Community',
    accent: 'blue',
    description:
      'Active member of the organizing kickoff committee for StudPro 9.0, focused on student professional development and industry readiness.',
    contributions: [
      'Assisted in early-phase planning, schedule structuring, and committee coordination',
      'Supported student outreach campaigns and registration logistics',
      'Collaborated with committee peers to ensure seamless launch sessions',
    ],
    tags: ['StudPro 9.0', 'Professional Development', 'Event Kickoff', 'IEEE'],
  },
  {
    id: 'ieee-nsbm',
    role: 'Active Member & Volunteer',
    organization: 'IEEE Student Branch of NSBM',
    eventOrContext: 'Technical Community Initiatives & Workshops',
    category: 'Community',
    accent: 'blue',
    description:
      'Sustained engagement with the IEEE Student Branch community at NSBM Green University, supporting technical seminars, tech talks, and collaborative hackathons.',
    contributions: [
      'Participated in organizing technical knowledge-sharing sessions for undergraduates',
      'Collaborated with fellow engineering students across networking and computing tracks',
    ],
    tags: ['IEEE Community', 'Technical Seminars', 'Volunteering'],
  },
  {
    id: 'ieee-yp-sl',
    role: 'Community Participant',
    organization: 'IEEE Young Professionals Sri Lanka',
    eventOrContext: 'Professional & Technical Community Gatherings',
    category: 'Community',
    accent: 'cyan',
    description:
      'Engaged with IEEE Young Professionals Sri Lanka programs, connecting with industry leaders, young engineers, and technical pioneers.',
    contributions: [
      'Attended technical conferences and industry networking sessions',
      'Broadened perspective on emerging technology trends and engineering careers in Sri Lanka',
    ],
    tags: ['IEEE YP Sri Lanka', 'Networking', 'Professional Community'],
  },
  {
    id: 'nsbm-buddhist-society',
    role: 'Committee Member',
    organization: 'NSBM Buddhist Society',
    eventOrContext: 'Cultural, Community & Leadership Responsibilities',
    category: 'University',
    accent: 'orange',
    description:
      'Participated in university cultural and community events, taking on organizing and coordination duties for society initiatives.',
    contributions: [
      'Supported cultural event planning, volunteer coordination, and logistics management',
      'Demonstrated collaborative teamwork and responsibility across non-technical community initiatives',
    ],
    tags: ['Buddhist Society', 'Community Leadership', 'Cultural Coordination'],
  },
  {
    id: 'career-fair',
    role: 'Committee Member',
    organization: 'NSBM Career Fair',
    eventOrContext: 'University Annual Career Fair Operations',
    category: 'University',
    accent: 'blue',
    description:
      'Contributed as an active committee member facilitating company liaison and booth logistics during the university annual career fair.',
    contributions: [
      'Assisted visiting corporate delegates and tech company representatives with venue setup',
      'Guided fellow undergraduates through interview queues and hall operations',
    ],
    tags: ['Career Fair', 'Corporate Liaison', 'Logistics'],
  },
  {
    id: 'nforce-nspire',
    role: 'Participant & Volunteer',
    organization: 'NFORCE',
    eventOrContext: 'NFORCE NSPIRE Employability & Career Initiative',
    category: 'University',
    accent: 'cyan',
    description:
      'Participated in university career development and industrial readiness workshops orchestrated by NFORCE.',
    contributions: [
      'Attended career orientation modules and industry networking roundtables',
    ],
    tags: ['NFORCE NSPIRE', 'Employability', 'Campus Initiative'],
  },
  {
    id: 'ceylon-cash',
    role: 'Workshop Initiative Volunteer',
    organization: 'Ceylon Cash',
    eventOrContext: 'Web3 & Financial Technology Workshop Initiative',
    category: 'Community',
    accent: 'blue',
    description:
      'Involvement in a specialized Web3 and decentralized technology workshop initiative.',
    contributions: [
      'Assisted with workshop coordination, participant registration, and technical support',
      'Explored practical concepts of Web3 infrastructure and tokenomics fundamentals',
    ],
    tags: ['Ceylon Cash', 'Web3 Workshop', 'Fintech Learning'],
  },
];
