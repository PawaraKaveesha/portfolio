export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  category: 'primary' | 'media' | 'social';
  description?: string;
}

export const socialLinks = {
  // Primary professional links
  github: 'https://github.com/PawaraKaveesha',
  linkedin: 'https://www.linkedin.com/in/pawara-kaveesha-86b4b121b/',
  
  // Contact placeholders (replace with your personal details)
  email: 'contact@pawarakaveesha.com', // Replace with your email address
  whatsapp: '+94700000000', // Replace with your WhatsApp number
  instagram: 'https://instagram.com/your-handle', // Replace with your Instagram URL
  
  // Verified platform and project references
  orendaLive: 'https://orenda-final-prod.onrender.com/',
  computerage: 'https://www.computerage.lk/',
  
  // Media channels & platforms
  youtube: {
    channel19: 'https://www.youtube.com/@Channel19lk',
    rundownPodcast: 'https://www.youtube.com/channel/UCJEBTDn3yornnqi7ii0v6_Q',
    medanMethana: 'https://www.youtube.com/@medanmethana',
    mediaLkTalks: 'https://www.youtube.com/channel/UCxE1rQZ4Kjb3u1S_aCpp6Uw',
    mediaLk: 'https://www.youtube.com/@medialksrilanka',
  },
  tiktok: {
    techHttpLk: 'https://www.tiktok.com/@techhttp_lk?lang=en',
  },
  facebook: {
    liveAndLetLive: 'https://www.facebook.com/liveandletlivefoundation',
    gihanMangalaMedura: 'https://www.facebook.com/gihanmangalamedura.lk',
  },
};
