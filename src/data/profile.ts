export interface ProfileData {
  name: string;
  shortName: string;
  monogram: string;
  positioning: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  heroDescription: string;
  aboutHeadline: string;
  aboutIntro: string;
  bioParagraphs: string[];
  dimensions: {
    title: string;
    description: string;
    icon: string;
    tags: string[];
    color: 'blue' | 'orange' | 'cyan' | 'purple';
  }[];
  currentlyExploring: string[];
  availability: {
    status: 'available' | 'busy';
    text: string;
  };
  image: {
    src: string;
    alt: string;
    caption: string;
  };
}

export const profile: ProfileData = {
  name: 'Pawara Kaveesha',
  shortName: 'Pawara',
  monogram: 'PK',
  positioning: 'Software Developer | Network & Cybersecurity Enthusiast | Digital Creator',
  tagline: 'Building technology. Creating experiences. Connecting ideas.',
  heroHeadline: 'Building at the intersection of Technology & Creativity.',
  heroSubheadline: 'Where Technology Meets Creativity.',
  heroDescription:
    "I'm Pawara Kaveesha — a Computer Networks undergraduate, software developer, and digital creator interested in building technology-driven solutions and producing meaningful digital experiences.",
  aboutHeadline: 'More than just technology.',
  aboutIntro:
    "I'm Pawara Kaveesha, a final-year Computer Networks undergraduate, software developer, technology enthusiast, and digital creator.",
  bioParagraphs: [
    'My interests extend across software engineering, network infrastructure, cybersecurity, network automation, media production, and creative direction.',
    'I enjoy exploring how technology and creativity can work together to solve problems, develop digital products, and create meaningful experiences.',
    'Beyond technical development, I have practical exposure to media production, university leadership, event management, and collaborative projects.',
    "I'm continuously learning, experimenting, and building as an ambitious emerging professional.",
  ],
  dimensions: [
    {
      title: 'TECHNOLOGY',
      description:
        'My academic foundation is in Computer Networks at University of Plymouth / NSBM. I focus on software engineering, network infrastructure, cybersecurity, Linux environments, and automation.',
      icon: 'Network',
      tags: ['Software Dev', 'Computer Networks', 'Cybersecurity', 'Automation', 'Linux'],
      color: 'blue',
    },
    {
      title: 'CREATIVITY',
      description:
        'Practical exposure across professional video production, post-production editing, motion design, digital media workflows, and creative direction for high-engagement platforms.',
      icon: 'Film',
      tags: ['Video Production', 'Post-Production', 'Content Creation', 'Visual Direction'],
      color: 'orange',
    },
    {
      title: 'LEADERSHIP',
      description:
        'Active leadership and committee involvement in IEEE student chapters, technical competitions (Duothan, StudPro), university societies, finance management, and event operations.',
      icon: 'Users',
      tags: ['IEEE NSBM', 'Duothan 6.0', 'Event Operations', 'Team Collaboration'],
      color: 'blue',
    },
    {
      title: 'GROWTH',
      description:
        'Continuously expanding capabilities through rigorous academic curricula, hands-on repository development, real-world IT support, and independent technological exploration.',
      icon: 'TrendingUp',
      tags: ['Continuous Learning', 'Hands-on Labs', 'Independent Research', 'Prototyping'],
      color: 'orange',
    },
  ],
  currentlyExploring: [
    'Network Security Automation',
    'Python Development',
    'Cybersecurity',
    'Linux Networking',
    'Cloud & DevOps',
    'Software Engineering',
  ],
  availability: {
    status: 'available',
    text: 'Available for technical collaboration & creative projects',
  },
  image: {
    src: '/images/profile/pawara-avatar.svg',
    alt: 'Pawara Kaveesha — Multidisciplinary Portfolio Avatar',
    caption: 'Easily replaceable image asset: replace with your high-res headshot in public/images/profile/',
  },
};
