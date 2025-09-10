// Lightweight analytics placeholder
window.dataLayer = window.dataLayer || [];
function trackEvent(event, detail = {}) {
  window.dataLayer.push({ event, ...detail, ts: Date.now() });
  if (window.location.search.includes('debug')) {
    console.debug('[track]', event, detail);
  }
}

// Data sources (placeholders)
const events = [
  { id: 'e1', name: 'Career Pathways in Tech', date: '2025-09-12 • Helsinki', image: 'https://picsum.photos/seed/tech/1200/700', url: '#', featured: true },
  { id: 'e2', name: 'Leadership Roundtable', date: '2025-10-03 • Espoo', image: 'https://picsum.photos/seed/leadership/1200/700', url: '#'},
  { id: 'e3', name: 'Mentorship Kickoff Night', date: '2025-10-21 • Helsinki', image: 'https://picsum.photos/seed/mentorship/1200/700', url: '#'},
  { id: 'e4', name: 'Personal Finance Workshop', date: '2025-11-02 • Vantaa', image: 'https://picsum.photos/seed/finance/1200/700', url: '#'},
  { id: 'e5', name: 'Entrepreneurship Stories', date: '2025-11-18 • Tampere', image: 'https://picsum.photos/seed/startup/1200/700', url: '#'},
  { id: 'e6', name: 'Public Speaking Lab', date: '2025-12-05 • Helsinki', image: 'https://picsum.photos/seed/speaking/1200/700', url: '#'}
];

const speakers = [
  { id: 's1', name: 'Aisha Khan', title: 'Product Leader, TechCo', image: 'images/avatar-placeholder.jpg', url: '#' },
  { id: 's2', name: 'Omar Lehtinen', title: 'Founder, NorthLabs', image: 'images/avatar-placeholder.jpg', url: '#' },
  { id: 's3', name: 'Fatima Rahman', title: 'Policy Analyst', image: 'images/avatar-placeholder.jpg', url: '#' }
];

const feedback = [
  'Great energy and welcoming community. Felt seen and supported.',
  'Actionable advice I used the next day — thank you!',
  'Mentorship program matched me with an amazing role model.',
  'Loved the diversity of speakers and topics.',
  'Best networking I’ve had in years.',
  'Events are well-organized and accessible.',
  'Inspiring to see Muslim professionals thriving.',
  'The finance session helped me build a plan.',
  'Appreciated the safe and respectful space.',
  'I met my current team here.'
];

const translations = {
  fi: {
    'hero.title': 'Vahvistamme muslimiammattilaisia Suomessa.',
    'hero.sub': 'Yhteisö oppimista, mentorointia ja verkostoitumista varten — rakennamme yhdessä myönteistä vaikutusta.',
    'cta.support': 'Tue meitä',
    
    'principles.title': 'Periaatteemme',
    'principles.sub': 'Kolme peruspilaria ohjaa toimintaamme.',
    'principles.learning.title': 'Oppiminen',
    'principles.learning.text': 'Työpajat, uratarinat ja avoimet resurssit jatkuvaan kasvuun.',
    'principles.networking.title': 'Verkostoituminen',
    'principles.networking.text': 'Tilaisuuksia tavata, jakaa ja rakentaa yhteistyötä.',
    'principles.empowering.title': 'Voimaannuttaminen',
    'principles.empowering.text': 'Nostamme esiin esikuvia ja tuemme toisiamme.',
    'vision.title': 'Visio',
    'vision.text': 'Vahva verkosto, jossa muslimiammattilaiset Suomessa tukevat toisiaan ja yhteiskuntaa.',
    'mission.title': 'Missio',
    'mission.text': 'Mahdollistamme oppimisen, mentoroinnin ja yhteistyön sekä rakennamme siltoja.',
    'events.title': 'Tapahtumat',
    'events.sub': 'Nostoja ja tulevia tilaisuuksia.',
    'feedback.title': 'Saamamme palaute',
    'feedback.sub': 'Anonyymejä huomioita osallistujilta ja jäseniltä.',
    'speakers.title': 'Puhujamme',
    'speakers.sub': 'Otanta johtajista ja asiantuntijoista, jotka ovat vierailleet.',
    'speakers.showMore': 'Näytä lisää',
    'contact.title': 'Yhteystiedot',
    'contact.text': 'Ota yhteyttä some-kanavissa tai lähetä sähköpostia osoitteeseen <a href="mailto:hello@mpn.fi">hello@mpn.fi</a>.',
  },
  en: {
    'hero.title': 'Empowering Muslim professionals in Finland.',
    'hero.sub': 'We are a community of Muslim professionals fostering growth, mentorship, and positive impact through learning and networking. Join us in shaping a stronger, supportive ecosystem.',
    'cta.support': 'Support Us',
    
    'principles.title': 'Our principles',
    'principles.sub': 'Three pillars guide everything we do.',
    'principles.learning.title': 'Learning',
    'principles.learning.text': 'Workshops, career stories, and open resources for continuous growth.',
    'principles.networking.title': 'Networking',
    'principles.networking.text': 'Spaces to meet, share, and build collaborations.',
    'principles.empowering.title': 'Empowering',
    'principles.empowering.text': 'We elevate role models and support one another.',
    'vision.title': 'Our Vision',
    'vision.text': 'A thriving network where Muslim professionals in Finland connect, elevate one another, and contribute to a just, prosperous society.',
    'mission.title': 'Our Mission',
    'mission.text': 'Create opportunities for learning, mentorship, and collaboration; celebrate role models; and build bridges across communities and industries.',
    'events.title': 'Events',
    'events.sub': 'Featured and upcoming gatherings, workshops, and talks.',
    'feedback.title': 'Feedback we’ve received',
    'feedback.sub': 'Anonymous notes from attendees and members.',
    'speakers.title': 'Speakers we’ve hosted',
    'speakers.sub': 'A glimpse of leaders and experts who joined us.',
    'speakers.showMore': 'Show more',
    'contact.title': 'Contact',
    'contact.text': 'Reach us via social channels or send an email to <a href="mailto:hello@mpn.fi">hello@mpn.fi</a>.',
  }
};

// Principles content
const principlesData = [
  { key: 'learning', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 7l9-4 9 4-9 4-9-4Z" stroke="#143474" stroke-width="1.6"/><path d="M6 10v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" stroke="#143474" stroke-width="1.6"/></svg>' },
  { key: 'networking', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="5" r="3" stroke="#143474" stroke-width="1.6"/><circle cx="5" cy="19" r="3" stroke="#143474" stroke-width="1.6"/><circle cx="19" cy="19" r="3" stroke="#143474" stroke-width="1.6"/><path d="M12 8v4m-2 2-3 3m8-3 3 3" stroke="#143474" stroke-width="1.6" stroke-linecap="round"/></svg>' },
  { key: 'empowering', icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3l2.8 5.6L21 9.3l-4.5 4.3L17.6 20 12 17.1 6.4 20l1.1-6.4L3 9.3l6.2-.7L12 3Z" stroke="#143474" stroke-width="1.6" stroke-linejoin="round"/></svg>' },
];

// DOM helpers
const $ = (sel, root=document) => root.querySelector(sel);
const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

// Render Principles
function renderPrinciples(lang='en') {
        const wrap = $('#principles-grid');
        if (!wrap) return;
        wrap.innerHTML = '';
  principlesData.forEach(p => {
    const titleKey = `principles.${p.key}.title`;
    const textKey = `principles.${p.key}.text`;
    const card = document.createElement('article');
    card.className = 'card principle';
    card.innerHTML = `
      <div class="principle__icon" aria-hidden="true">${p.icon}</div>
      <h3 class="card__title" data-i18n="${titleKey}">${translations[lang][titleKey]}</h3>
      <p class="card__text" data-i18n="${textKey}">${translations[lang][textKey]}</p>
      <a href="#impact" class="card__cta" data-track="principle_learn_more_click" aria-label="Learn more about ${translations[lang][titleKey]}">
        <span>Learn more</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </a>`;
    wrap.appendChild(card);
  });
}

// Render Featured Event and Carousel (Custom slider)
function renderEvents() {
  const featuredEl = $('#featured-event');
  const hasFeatured = !!featuredEl;
  if (hasFeatured) {
    const featured = events.find(e => e.featured) || events[0];
    featuredEl.href = featured.url;
    const fImg = $('.featured__img', featuredEl);
    if (fImg) fImg.dataset.bg = featured.image; // lazy background
    const ft = $('.featured__title', featuredEl);
    const fm = $('.featured__meta', featuredEl);
    if (ft) ft.textContent = featured.name;
    if (fm) fm.textContent = featured.date;
    featuredEl.setAttribute('aria-describedby', 'featured-label');
    featuredEl.addEventListener('click', () => trackEvent('event_card_click', { id: featured.id, name: featured.name }));
  }

  // Build custom slider (transparent background)
  const list = hasFeatured ? events.filter(e => !e.featured) : events.slice();
  const track = document.getElementById('events-track');
  const prev = document.getElementById('events-prev');
  const next = document.getElementById('events-next');
  const dotsBox = document.getElementById('events-dots');
  if (!track || !prev || !next || !dotsBox) return;
  track.innerHTML = '';
  dotsBox.innerHTML = '';

  const cards = [];
  list.forEach((e, i) => {
    const article = document.createElement('article');
    article.className = 'event-card';
    article.setAttribute('role', 'listitem');
    if (i === 0) article.setAttribute('active', '');
    article.innerHTML = `
      <img class="event-card__bg" src="${e.image}" alt="${e.name}" loading="lazy" />
      <div class="event-card__content">
        <h3 class="event-card__title">${e.name}</h3>
        <div>
          <p class="event-card__meta">${e.date}</p>
          <button class="event-card__btn" type="button">Details</button>
        </div>
      </div>`;
    article.addEventListener('click', (evt) => {
      trackEvent('event_card_click', { id: e.id, name: e.name });
      const onMobile = typeof matchMedia === 'function' && matchMedia('(max-width:767px)').matches;
      if (onMobile) {
        // First tap expands; subsequent taps on card do not navigate.
        if (!article.hasAttribute('active')) {
          activate(i, true);
        }
        evt.preventDefault();
        return;
      }
      if (e.url) window.open(e.url, '_blank', 'noopener');
    });

    // Button: allow navigation; on mobile require card to be active first
    const btnEl = article.querySelector('.event-card__btn');
    if (btnEl) {
      btnEl.addEventListener('click', (ev) => {
        ev.stopPropagation();
        const onMobile = typeof matchMedia === 'function' && matchMedia('(max-width:767px)').matches;
        if (onMobile && !article.hasAttribute('active')) {
          activate(i, true);
          ev.preventDefault();
          return;
        }
        trackEvent('event_card_click', { id: e.id, name: e.name, action: 'details' });
        if (e.url) window.open(e.url, '_blank', 'noopener');
      });
    }
    track.appendChild(article);
    cards.push(article);

    const dot = document.createElement('span');
    dot.className = 'dot';
    dot.addEventListener('click', () => activate(i, true));
    dotsBox.appendChild(dot);
  });

  const dots = Array.from(dotsBox.children);
  let current = 0;
  const isMobile = () => matchMedia('(max-width:767px)').matches;
  const wrap = track.parentElement;

  function center(i) {
    const card = cards[i];
    const axis = isMobile() ? 'top' : 'left';
    const size = isMobile() ? 'clientHeight' : 'clientWidth';
    const start = isMobile() ? card.offsetTop : card.offsetLeft;
    wrap.scrollTo({ [axis]: start - (wrap[size] / 2 - card[size] / 2), behavior: 'smooth' });
  }
  function toggleUI(i) {
    cards.forEach((c, k) => c.toggleAttribute('active', k === i));
    dots.forEach((d, k) => d.classList.toggle('active', k === i));
    prev.disabled = i === 0;
    next.disabled = i === cards.length - 1;
  }
  function activate(i, scroll) {
    if (i === current) return;
    current = Math.max(0, Math.min(i, cards.length - 1));
    toggleUI(current);
    if (scroll) center(current);
  }
  function go(step) { activate(current + step, true); }
  prev.onclick = () => go(-1);
  next.onclick = () => go(1);

  document.addEventListener('keydown', (e) => {
    if ([ 'ArrowRight', 'ArrowDown' ].includes(e.key)) go(1);
    if ([ 'ArrowLeft', 'ArrowUp' ].includes(e.key)) go(-1);
  }, { passive: true });

  cards.forEach((card, i) => {
    card.addEventListener('mouseenter', () => matchMedia('(hover:hover)').matches && activate(i, true));
    card.addEventListener('click', () => activate(i, true));
  });

  // Touch support
  let sx = 0, sy = 0;
  track.addEventListener('touchstart', (e) => { sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive: true });
  track.addEventListener('touchend', (e) => {
    const dx = e.changedTouches[0].clientX - sx;
    const dy = e.changedTouches[0].clientY - sy;
    if (isMobile() ? Math.abs(dy) > 60 : Math.abs(dx) > 60) go((isMobile() ? dy : dx) > 0 ? -1 : 1);
  }, { passive: true });

  if (window.matchMedia('(max-width:767px)').matches) dotsBox.hidden = true;
  addEventListener('resize', () => center(current));

  toggleUI(0);
  center(0);
}

// legacy carousel helpers removed

// Render Feedback as sticky/torn notes with random rotation
function renderFeedback() {
  const wrap = $('#feedback-notes');
  if (!wrap) return;
  wrap.innerHTML = '';
  const noteImage = 'images/note1.svg';
  const isMobile = matchMedia('(max-width: 759px)').matches;
  const initial = isMobile ? 5 : feedback.length;

  const notesEls = [];
  feedback.forEach((q, i) => {
    const note = document.createElement('figure');
    note.className = 'note';
    const rot = (Math.random() * 20 - 10).toFixed(1); // subtle tilt
    note.style.setProperty('--r', rot + 'deg');
    note.style.setProperty('--delay', `${i * 120}ms`);
    note.style.backgroundImage = `url('${noteImage}')`;
    note.innerHTML = `<blockquote class="note__text">${q}</blockquote>`;
    note.setAttribute('aria-label', `Anonymous feedback: ${q}`);
    note.title = q;
    if (i >= initial && isMobile) note.hidden = true;
    wrap.appendChild(note);
    notesEls.push(note);
  });
  // reveal on scroll, each with its own delay
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });
  notesEls.slice(0, initial).forEach(n => io.observe(n));

  // Show more button on mobile, placed inside the grid after visible notes
  if (isMobile && initial < notesEls.length) {
    const btn = document.createElement('button');
    btn.id = 'feedback-more-btn';
    btn.type = 'button';
    btn.className = 'btn btn--outline feedback__btn';
    btn.textContent = 'Show more';
    // Place the button directly after the last visible note
    const anchor = notesEls[initial]; // first hidden note
    if (anchor) {
      wrap.insertBefore(btn, anchor);
    } else {
      wrap.appendChild(btn);
    }

    let shown = initial;
    btn.onclick = () => {
      const next = Math.min(shown + 5, notesEls.length);
      for (let i = shown; i < next; i++) {
        const el = notesEls[i];
        el.hidden = false;
        io.observe(el);
      }
      shown = next;
      if (shown >= notesEls.length) {
        btn.remove();
      } else {
        // Move the button to sit right before the next hidden note
        const nextAnchor = notesEls[shown];
        if (nextAnchor) wrap.insertBefore(btn, nextAnchor);
      }
    };
  }
}

// Render Speakers
function renderSpeakers() {
  const wrap = $('#speakers-grid');
  wrap.innerHTML = '';
  speakers.forEach(s => {
    const a = document.createElement('a');
    a.href = s.url; a.className = 'speaker'; a.target = '_blank'; a.rel = 'noopener';
    a.innerHTML = `
      <img class="speaker__img" src="${s.image}" alt="Headshot of ${s.name}" loading="lazy" width="72" height="72" />
      <div>
        <h3 class="speaker__name">${s.name}</h3>
        <p class="speaker__title">${s.title}</p>
      </div>`;
    a.addEventListener('click', () => trackEvent('speaker_card_click', { id: s.id, name: s.name }));
    wrap.appendChild(a);
  });
}

// Language toggle
function setLanguage(lang) {
  const map = translations[lang] || translations.en;
  $$('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (map[k]) {
      if (el.tagName === 'A' || el.tagName === 'BUTTON') el.innerHTML = map[k];
      else el.innerHTML = map[k];
    }
  });
  document.documentElement.lang = lang;
  const tgl = document.getElementById('lang-tgl');
  if (tgl && tgl.type === 'checkbox') {
    tgl.checked = (lang === 'en');
  } else {
    const btn = $('.lang-toggle');
    if (btn) btn.textContent = lang.toUpperCase();
  }
  const fiL = document.querySelector('.lang-label--fi');
  const enL = document.querySelector('.lang-label--en');
  if (fiL && enL) {
    fiL.classList.toggle('is-active', lang === 'fi');
    enL.classList.toggle('is-active', lang === 'en');
  }
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Header scroll behavior
function setupHeader() {
  const header = $('.header');
  const onScroll = () => {
    const solid = window.scrollY > 6;
    header.classList.toggle('header--solid', solid);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
}

// Ticker render
// ticker removed

// Mobile drawer
function setupDrawer() {
  const drawer = $('#mobile-drawer');
  const toggles = $$('.menu-toggle');
  function setOpen(open) {
    drawer.classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    toggles.forEach(t => t.setAttribute('aria-expanded', String(open)));
    document.body.style.overflow = open ? 'hidden' : '';
  }
  toggles.forEach(t => t.addEventListener('click', () => setOpen(!drawer.classList.contains('open'))));
  $$('#mobile-drawer a').forEach(a => a.addEventListener('click', () => setOpen(false)));
}

// Global tracking hooks
function bindTracking() {
  document.addEventListener('click', (e) => {
    const a = e.target.closest('[data-track]');
    if (!a) return;
    const type = a.getAttribute('data-track');
    if (type === 'nav_click') trackEvent(type, { nav: a.getAttribute('data-nav') || a.textContent.trim() });
    else if (type === 'support_cta_click') trackEvent(type, {});
    else if (type === 'lang_toggle_click') trackEvent(type, { lang: document.documentElement.lang || 'en' });
    else if (type === 'principle_learn_more_click') trackEvent(type, { label: a.getAttribute('aria-label') });
    else if (type === 'speakers_show_more_click') trackEvent(type, {});
  }, { passive: true });
}

// Lazy-load background images (events)
function lazyLoadBackgrounds() {
  const els = $$('[data-bg]');
  const apply = (el) => {
    if (el.dataset.bgGradient === '1') {
      el.style.background = `linear-gradient(to top, rgba(15,32,39,0.6), rgba(32,58,67,0.15), rgba(44,83,100,0)), url('${el.dataset.bg}') no-repeat 50% 50% / cover`;
    } else {
      el.style.backgroundImage = `url('${el.dataset.bg}')`;
    }
    el.removeAttribute('data-bg');
    el.removeAttribute('data-bg-gradient');
  };
  if (!('IntersectionObserver' in window)) {
    els.forEach(apply);
    return;
  }
  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        apply(en.target);
        obs.unobserve(en.target);
      }
    })
  }, { rootMargin: '200px 0px' });
  els.forEach(el => io.observe(el));
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  setupHeader();
  setupDrawer();
  bindTracking();
  renderPrinciples('en');
  renderEvents();
  renderFeedback();
  renderSpeakers();
  // ticker removed
  lazyLoadBackgrounds();
  initTeamScroll();

  // Language toggle
        const langBtn = document.getElementById('lang-tgl') || $('.lang-toggle');
        langBtn.addEventListener('click', () => {
          const current = document.documentElement.lang || 'en';
          const next = current === 'en' ? 'fi' : 'en';
          setLanguage(next);
          trackEvent('lang_toggle_click', { lang: next });
        });
  setLanguage('en');
});

// Team section scroll animation (About page)
function initTeamScroll() {
  const slides = Array.from(document.querySelectorAll('.team .person'));
  if (!slides.length) return;
  function processScroll() {
    const scrt = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    const win_h = window.innerHeight;
    const win_w = window.innerWidth;
    for (let i = 0; i < slides.length; i++) {
      const p = slides[i];
      // Use layout position (not affected by CSS transforms)
      let el = p, top = 0;
      while (el) { top += el.offsetTop || 0; el = el.offsetParent; }
      const h = p.clientHeight || p.offsetHeight || p.scrollHeight;
      let x = (i % 2) ? '-8%' : '8%';
      const startY = top;
      const stopY = top + h + 50;
      const totalY = stopY - startY;
      const bio = p.querySelector('div.meta');
      const img = p.querySelector('div.image');
      const links = p.querySelector('div.links');
      // Apply only static horizontal offset to the card (no vertical movement)
      if (win_w < 1200) x = '0px';
      p.style.transform = 'translate3d(' + x + ',0,0)';
      if ((scrt + win_h) >= startY && (scrt + win_h) <= stopY) {
        const percentage = (scrt + win_h - startY) / totalY;
        if (img) {
          const imgTop = -200 * (1 - percentage);
          const bioTop = 240 * (1 - percentage);
          const bioOpacity = percentage + 0.1;
          const imgTranslation = 'translate3d(0,' + imgTop + 'px,0)';
          const bioTranslation = 'translate3d(0,' + bioTop + 'px,0)';
          if (img) img.style.transform = imgTranslation;
          if (bio) { bio.style.transform = bioTranslation; bio.style.opacity = String(bioOpacity); }
          if (links) links.style.opacity = String(bioOpacity);
        } else {
          // No vertical translation for the card when no image present
        }
      } else if (img) {
        img.style.transform = 'translate3d(0,0,0)';
        if (bio) { bio.style.transform = 'translate3d(0,0,0)'; bio.style.opacity = '1'; }
        if (links) links.style.opacity = '1';
      }
      // Do not move the entire card vertically; keep other parallax only
    }
  }
  window.addEventListener('scroll', processScroll, { passive: true });
  window.addEventListener('resize', processScroll);
  processScroll();
}
