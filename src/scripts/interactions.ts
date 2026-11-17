// Interactive client scripts for Pawara Kaveesha Portfolio

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initNavbar();
  initHeroCanvas();
  initScrollAnimations();
  initProjectFiltering();
  initProjectModals();
  initMediaFiltering();
  initMediaModals();
  initContactForm();
  initBackToTop();
});

/* ----------------------------------------------------
 * 1. Scroll Progress Bar
 * ---------------------------------------------------- */
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (totalHeight > 0) {
      const progress = (window.scrollY / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    }
  }, { passive: true });
}

/* ----------------------------------------------------
 * 2. Sticky Navbar & Mobile Menu
 * ---------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('main-navbar');
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Background blur on scroll
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('bg-brand-bg/85', 'backdrop-blur-xl', 'border-white/10', 'shadow-2xl');
        navbar.classList.remove('bg-transparent', 'border-transparent');
      } else {
        navbar.classList.remove('bg-brand-bg/85', 'backdrop-blur-xl', 'border-white/10', 'shadow-2xl');
        navbar.classList.add('bg-transparent', 'border-transparent');
      }
    }, { passive: true });
  }

  // Mobile menu toggle
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', String(!isExpanded));
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden', !isExpanded);
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('overflow-hidden');
      });
    });
  }

  // Active section indicator using IntersectionObserver
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window && sections.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${id}`) {
              link.classList.add('text-brand-blue', 'font-semibold');
              link.classList.remove('text-brand-muted');
            } else if (href && href.startsWith('#')) {
              link.classList.remove('text-brand-blue', 'font-semibold');
              link.classList.add('text-brand-muted');
            }
          });
        }
      });
    }, { threshold: 0.25, rootMargin: '-80px 0px -40% 0px' });

    sections.forEach(sec => observer.observe(sec));
  }
}

/* ----------------------------------------------------
 * 3. Interactive Hero Network Topology Visual
 * ---------------------------------------------------- */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement | null;
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let width = 0;
  let height = 0;

  function resize() {
    if (!canvas || !ctx) return;
    const rect = canvas.getBoundingClientRect();
    width = rect.width;
    height = rect.height;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  interface Node {
    x: number;
    y: number;
    vx: number;
    vy: number;
    baseRadius: number;
    type: 'tech' | 'creative' | 'hybrid';
    pulse: number;
    pulseSpeed: number;
  }

  interface Packet {
    from: Node;
    to: Node;
    progress: number;
    speed: number;
    color: string;
    size: number;
  }

  const nodes: Node[] = [];
  const nodeCount = Math.min(42, Math.max(22, Math.floor(width / 32)));

  for (let i = 0; i < nodeCount; i++) {
    const typeRoll = Math.random();
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      baseRadius: Math.random() * 2 + 1.8,
      type: typeRoll < 0.48 ? 'tech' : typeRoll < 0.85 ? 'creative' : 'hybrid',
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.02 + Math.random() * 0.02,
    });
  }

  const packets: Packet[] = [];
  function spawnPacket() {
    if (nodes.length < 2 || packets.length > 12) return;
    const a = nodes[Math.floor(Math.random() * nodes.length)];
    const b = nodes[Math.floor(Math.random() * nodes.length)];
    if (a !== b) {
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (dist < 170) {
        let color = '#4285FF';
        if (a.type === 'creative') color = '#FF8A35';
        else if (a.type === 'hybrid') color = '#00D4FF';
        packets.push({
          from: a,
          to: b,
          progress: 0,
          speed: 0.01 + Math.random() * 0.012,
          color,
          size: Math.random() * 1.5 + 2,
        });
      }
    }
  }

  // Mouse interaction
  let mouse = { x: -2000, y: -2000 };
  window.addEventListener('mousemove', (e) => {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    mouse = { x: -2000, y: -2000 };
  });

  let animationFrameId: number;

  function render() {
    if (!ctx) return;
    ctx.clearRect(0, 0, width, height);

    if (Math.random() < 0.06) spawnPacket();

    const maxDist = 155;

    // Draw connection lines
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < maxDist) {
          const alpha = (1 - dist / maxDist) * 0.25;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);

          if (nodes[i].type === 'tech' && nodes[j].type === 'tech') {
            ctx.strokeStyle = `rgba(66, 133, 255, ${alpha})`;
          } else if (nodes[i].type === 'creative' && nodes[j].type === 'creative') {
            ctx.strokeStyle = `rgba(255, 138, 53, ${alpha})`;
          } else {
            const grad = ctx.createLinearGradient(nodes[i].x, nodes[i].y, nodes[j].x, nodes[j].y);
            grad.addColorStop(0, `rgba(66, 133, 255, ${alpha})`);
            grad.addColorStop(1, `rgba(255, 138, 53, ${alpha})`);
            ctx.strokeStyle = grad;
          }
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    // Update and draw packets
    for (let p = packets.length - 1; p >= 0; p--) {
      const pkt = packets[p];
      pkt.progress += pkt.speed;
      if (pkt.progress >= 1) {
        packets.splice(p, 1);
        continue;
      }
      const curX = pkt.from.x + (pkt.to.x - pkt.from.x) * pkt.progress;
      const curY = pkt.from.y + (pkt.to.y - pkt.from.y) * pkt.progress;

      ctx.beginPath();
      ctx.arc(curX, curY, pkt.size, 0, Math.PI * 2);
      ctx.fillStyle = pkt.color;
      ctx.shadowColor = pkt.color;
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    // Update and draw nodes
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      // Subtle mouse interaction (soft magnetic pull/repel)
      const mdx = node.x - mouse.x;
      const mdy = node.y - mouse.y;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < 140 && mdist > 0) {
        const force = ((140 - mdist) / 140) * 0.9;
        node.x += (mdx / mdist) * force;
        node.y += (mdy / mdist) * force;

        // Draw dynamic tether to mouse
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.strokeStyle = node.type === 'creative' 
          ? `rgba(255, 138, 53, ${(1 - mdist / 140) * 0.3})`
          : `rgba(66, 133, 255, ${(1 - mdist / 140) * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Drift physics
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      node.pulse += node.pulseSpeed;
      const pulseSize = Math.sin(node.pulse) * 1.2;
      const r = Math.max(1, node.baseRadius + pulseSize);

      ctx.beginPath();
      ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
      if (node.type === 'tech') {
        ctx.fillStyle = '#4285FF';
        ctx.shadowColor = 'rgba(66, 133, 255, 0.8)';
      } else if (node.type === 'creative') {
        ctx.fillStyle = '#FF8A35';
        ctx.shadowColor = 'rgba(255, 138, 53, 0.8)';
      } else {
        ctx.fillStyle = '#00D4FF';
        ctx.shadowColor = 'rgba(0, 212, 255, 0.8)';
      }
      ctx.shadowBlur = 8;
      ctx.fill();
      ctx.shadowBlur = 0;
    }

    animationFrameId = requestAnimationFrame(render);
  }

  // Check prefers-reduced-motion
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    render();
  }
}

/* ----------------------------------------------------
 * 4. Scroll Reveal Animations
 * ---------------------------------------------------- */
function initScrollAnimations() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (elements.length === 0) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add('is-revealed'));
  }
}

/* ----------------------------------------------------
 * 5. Project Category Filtering
 * ---------------------------------------------------- */
function initProjectFiltering() {
  const filterButtons = document.querySelectorAll<HTMLButtonElement>('[data-project-filter]');
  const projectCards = document.querySelectorAll<HTMLElement>('[data-project-category]');

  if (filterButtons.length === 0 || projectCards.length === 0) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-project-filter');

      // Update button active states
      filterButtons.forEach(b => {
        b.classList.remove('bg-brand-blue', 'text-white', 'shadow-glow-blue');
        b.classList.add('bg-brand-card', 'text-brand-muted', 'border-white/10');
      });
      btn.classList.add('bg-brand-blue', 'text-white', 'shadow-glow-blue');
      btn.classList.remove('bg-brand-card', 'text-brand-muted', 'border-white/10');

      // Filter cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-project-category');
        if (filter === 'All' || category === filter) {
          card.classList.remove('hidden');
          setTimeout(() => card.classList.remove('opacity-0', 'scale-95'), 10);
        } else {
          card.classList.add('opacity-0', 'scale-95');
          setTimeout(() => card.classList.add('hidden'), 200);
        }
      });
    });
  });
}

/* ----------------------------------------------------
 * 6. Project Case Study Modal
 * ---------------------------------------------------- */
function initProjectModals() {
  const modal = document.getElementById('project-modal');
  const modalClose = document.getElementById('modal-close');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const openButtons = document.querySelectorAll<HTMLButtonElement>('[data-open-project]');

  if (!modal) return;

  const titleEl = document.getElementById('modal-title');
  const subtitleEl = document.getElementById('modal-subtitle');
  const badgeEl = document.getElementById('modal-badge');
  const overviewEl = document.getElementById('modal-overview');
  const featuresListEl = document.getElementById('modal-features');
  const techListEl = document.getElementById('modal-tech');
  const roleEl = document.getElementById('modal-role');
  const githubLinkEl = document.getElementById('modal-github') as HTMLAnchorElement | null;
  const liveLinkEl = document.getElementById('modal-live') as HTMLAnchorElement | null;
  const imageEl = document.getElementById('modal-image') as HTMLImageElement | null;

  function closeModal() {
    modal?.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  modalClose?.addEventListener('click', closeModal);
  modalBackdrop?.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  openButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const dataStr = btn.getAttribute('data-project-data');
      if (!dataStr) return;
      try {
        const data = JSON.parse(dataStr);
        if (titleEl) titleEl.textContent = data.name;
        if (subtitleEl) subtitleEl.textContent = data.subtitle;
        if (badgeEl) badgeEl.textContent = data.statusBadge;
        if (overviewEl) overviewEl.textContent = data.fullOverview;
        if (roleEl) roleEl.textContent = data.role;

        if (imageEl && data.image) {
          imageEl.src = data.image;
          imageEl.alt = data.name;
        }

        if (featuresListEl && Array.isArray(data.keyFeatures)) {
          featuresListEl.innerHTML = data.keyFeatures
            .map((feat: string) => `<li class="flex items-start gap-2 text-sm text-brand-muted"><span class="text-brand-blue font-bold">✓</span> <span>${feat}</span></li>`)
            .join('');
        }

        if (techListEl && Array.isArray(data.technologies)) {
          techListEl.innerHTML = data.technologies
            .map((tech: string) => `<span class="px-2.5 py-1 text-xs rounded-md bg-brand-surface border border-white/10 text-brand-muted">${tech}</span>`)
            .join('');
        }

        if (githubLinkEl) {
          if (data.githubUrl) {
            githubLinkEl.href = data.githubUrl;
            githubLinkEl.classList.remove('hidden');
          } else {
            githubLinkEl.classList.add('hidden');
          }
        }

        if (liveLinkEl) {
          if (data.liveUrl) {
            liveLinkEl.href = data.liveUrl;
            liveLinkEl.classList.remove('hidden');
          } else {
            liveLinkEl.classList.add('hidden');
          }
        }

        modal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      } catch (e) {
        console.error('Error parsing project data', e);
      }
    });
  });
}

/* ----------------------------------------------------
 * 7. Media Gallery Filtering
 * ---------------------------------------------------- */
function initMediaFiltering() {
  const filterButtons = document.querySelectorAll<HTMLButtonElement>('[data-media-filter]');
  const mediaCards = document.querySelectorAll<HTMLElement>('[data-media-category]');

  if (filterButtons.length === 0 || mediaCards.length === 0) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-media-filter');

      // Update button active state
      filterButtons.forEach(b => {
        b.classList.remove('bg-brand-orange', 'text-brand-bg', 'font-semibold', 'shadow-glow-orange');
        b.classList.add('bg-brand-card', 'text-brand-muted', 'border-white/10');
      });
      btn.classList.add('bg-brand-orange', 'text-brand-bg', 'font-semibold', 'shadow-glow-orange');
      btn.classList.remove('bg-brand-card', 'text-brand-muted', 'border-white/10');

      // Filter cards
      mediaCards.forEach(card => {
        const category = card.getAttribute('data-media-category');
        if (filter === 'All' || category === filter) {
          card.classList.remove('hidden');
          setTimeout(() => card.classList.remove('opacity-0', 'scale-95'), 10);
        } else {
          card.classList.add('opacity-0', 'scale-95');
          setTimeout(() => card.classList.add('hidden'), 200);
        }
      });
    });
  });
}

/* ----------------------------------------------------
 * 8. Media Video Lightbox / Preview Modal
 * ---------------------------------------------------- */
function initMediaModals() {
  const videoModal = document.getElementById('video-modal');
  const videoClose = document.getElementById('video-modal-close');
  const videoBackdrop = document.getElementById('video-modal-backdrop');
  const videoFrame = document.getElementById('video-frame') as HTMLIFrameElement | null;
  const videoTitleEl = document.getElementById('video-modal-title');
  const playButtons = document.querySelectorAll<HTMLButtonElement>('[data-play-video]');

  if (!videoModal) return;

  function closeVideo() {
    videoModal?.classList.add('hidden');
    if (videoFrame) videoFrame.src = '';
    document.body.classList.remove('overflow-hidden');
  }

  videoClose?.addEventListener('click', closeVideo);
  videoBackdrop?.addEventListener('click', closeVideo);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !videoModal.classList.contains('hidden')) {
      closeVideo();
    }
  });

  playButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const videoId = btn.getAttribute('data-video-id');
      const title = btn.getAttribute('data-video-title');
      if (videoId && videoFrame) {
        videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        if (videoTitleEl) videoTitleEl.textContent = title || 'Video Preview';
        videoModal.classList.remove('hidden');
        document.body.classList.add('overflow-hidden');
      }
    });
  });
}

/* ----------------------------------------------------
 * 9. Contact Form Validation & Handler
 * ---------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  const statusEl = document.getElementById('form-status');
  if (!form || !statusEl) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = form.querySelector<HTMLInputElement>('#name');
    const emailInput = form.querySelector<HTMLInputElement>('#email');
    const subjectInput = form.querySelector<HTMLInputElement>('#subject');
    const messageInput = form.querySelector<HTMLTextAreaElement>('#message');

    const name = nameInput?.value.trim() || '';
    const email = emailInput?.value.trim() || '';
    const subject = subjectInput?.value.trim() || '';
    const message = messageInput?.value.trim() || '';

    // Validation
    if (!name || !email || !subject || !message) {
      statusEl.className = 'mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm';
      statusEl.textContent = 'Please fill out all required fields before proceeding.';
      statusEl.classList.remove('hidden');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      statusEl.className = 'mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm';
      statusEl.textContent = 'Please provide a valid email address.';
      statusEl.classList.remove('hidden');
      return;
    }

    // Prepare mailto link fallback
    const recipient = 'contact@pawarakaveesha.com';
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject} - from ${name}`);
    const mailtoBody = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:${recipient}?subject=${mailtoSubject}&body=${mailtoBody}`;

    statusEl.className = 'mt-4 p-4 rounded-lg bg-brand-surface border border-brand-blue/40 text-brand-text text-sm space-y-2';
    statusEl.innerHTML = `
      <div class="flex items-center gap-2 text-brand-blue font-semibold">
        <span>✓</span> <span>Message prepared successfully</span>
      </div>
      <p class="text-xs text-brand-muted">
        Opening your default email client to send this message directly to Pawara. If your email application did not launch automatically, click the button below:
      </p>
      <a href="${mailtoUrl}" class="inline-block mt-2 px-4 py-2 rounded-md bg-brand-blue text-white text-xs font-semibold hover:bg-blue-600 transition-colors">
        Open Email Client (${recipient})
      </a>
    `;
    statusEl.classList.remove('hidden');

    // Trigger mailto
    window.location.href = mailtoUrl;
  });
}

/* ----------------------------------------------------
 * 10. Back to Top Button
 * ---------------------------------------------------- */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.add('opacity-100', 'translate-y-0');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.remove('opacity-100', 'translate-y-0');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
