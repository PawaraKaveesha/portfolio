export interface CuriosityPillar {
  title: string;
  theme: string;
  icon: string;
  accent: 'blue' | 'orange' | 'cyan';
  statement: string;
  details: string;
}

export const beyondCodePillars: CuriosityPillar[] = [
  {
    title: 'Technology & Innovation',
    theme: 'Systems Thinking',
    icon: 'Cpu',
    accent: 'blue',
    statement: 'Deconstructing complex network topologies and software systems down to first principles.',
    details:
      'I am fascinated by how distributed systems communicate reliably across hostile environments, from packet transmission to high-level microservices.',
  },
  {
    title: 'Cybersecurity Research',
    theme: 'Defensive Architecture',
    icon: 'Shield',
    accent: 'blue',
    statement: 'Understanding offensive vectors to architect more resilient and automated defenses.',
    details:
      'Security is not a checkbox; it is a mindset. Exploring how cryptography, automated audits, and proactive telemetry protect critical digital assets.',
  },
  {
    title: 'Media & Storytelling',
    theme: 'Creative Expression',
    icon: 'Film',
    accent: 'orange',
    statement: 'Transforming technical concepts into visually compelling stories and high-impact digital media.',
    details:
      'Technical excellence is only half the journey—communicating ideas effectively through video editing, motion design, and pacing captivates audiences.',
  },
  {
    title: 'Digital Entrepreneurship',
    theme: 'Value Creation',
    icon: 'Rocket',
    accent: 'orange',
    statement: 'Connecting code with real-world business needs to produce tangible digital products.',
    details:
      'Through initiatives like Simpleclix, I explore how software craftsmanship and digital branding empower small businesses and emerging organizations.',
  },
  {
    title: 'Leadership & Event Production',
    theme: 'Community Impact',
    icon: 'Users',
    accent: 'cyan',
    statement: 'Bringing multidisciplinary teams together to turn ambitious plans into successful events.',
    details:
      'Whether managing hackathon finances for Duothan 6.0 or editing trailers for PROFILE 2026, I thrive in collaborative, high-energy team settings.',
  },
  {
    title: 'Creative Problem Solving',
    theme: 'Cross-Disciplinary Synthesis',
    icon: 'Compass',
    accent: 'orange',
    statement: 'Applying the rigor of computer networks to the flexibility of creative visual production.',
    details:
      'Operating at the crossroads allows me to approach problems with an analytical mindset while maintaining an eye for aesthetics and user experience.',
  },
];
