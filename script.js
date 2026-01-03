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
  { id: 'e1', name: 'MPN & Karamah initiative', date: '2026-02-07 • Helsinki', image: 'https://picsum.photos/seed/tech/1200/700', url: '#', featured: true, isoDate: '2026-02-07' },
  { id: 'e2', name: 'Islamic Psychology', date: '03.08.2025 • Helsinki', image: 'images/islamic-psychology-bg.JPG', url: '#', isoDate: '2025-08-03' },
  { id: 'e3', name: 'Your Mind Matters', date: '2025-07-19 • Vantaa', image: 'images/mental-health-bg.JPG', url: '#', isoDate: '2025-07-19' },
  { id: 'e4', name: 'Startups & Founders', date: '29.05.2025 • Espoo', image: 'images/startups-and-founders.jpg', url: '#', isoDate: '2025-05-29' },
  { id: 'e5', name: 'Mid-Ramadan Reflections', date: '2025-03-12 • Helsinki', image: 'images/Mid-Ramadan Reflections.JPG', url: '#', isoDate: '2025-03-12' },
  { id: 'e6', name: 'Deconstructing AI', date: '2025-02-23 • Helsinki', image: 'images/Deconstructing AI.JPG', url: '#', isoDate: '2025-02-23' }
];

const impactStats = {
  events: 14,
  speakers: 26,
  participants: 550,
};

const speakers = [
  { id: 's1', name: 'Aisha Khan', title: 'Product Leader, TechCo', image: 'images/avatar-placeholder.jpg', url: '#' },
  { id: 's2', name: 'Omar Lehtinen', title: 'Founder, NorthLabs', image: 'images/avatar-placeholder.jpg', url: '#' },
  { id: 's3', name: 'Fatima Rahman', title: 'Policy Analyst', image: 'images/avatar-placeholder.jpg', url: '#' }
];

// Event-specific speakers (used on events.html)
const eventSpeakers = {
  'islamic-psychology': [
    { name: 'Dr. Rothman', role: 'Head of Islamic Psychology, Cambridge Muslim College', image: 'images/avatar-placeholder.jpg' },
  ],
  'startups-founders-journey': [
    { name: 'Fadumo Ali', role: 'Entrepreneur, Mentor and CEO of Hoiwa', image: 'images/avatar-placeholder.jpg' },
    { name: 'Sami Abuzarifa', role: 'CEO & Founder, Klu Technologies', image: 'images/avatar-placeholder.jpg' },
    { name: 'Guleed Ahmed', role: 'CEO & Co-founder, RecorDr', image: 'images/avatar-placeholder.jpg' },
    { name: 'Moyeen Ahmad', role: 'Founder, Vitacom; Quality & Regulatory Advisor, Evondos', image: 'images/avatar-placeholder.jpg' },
  ],
  'your-mind-matters': [
    { name: 'Dr. Hibo', role: 'Medical Doctor', image: 'images/avatar-placeholder.jpg' },
    { name: 'Dr. Ibrahim', role: 'Medical Doctor', image: 'images/avatar-placeholder.jpg' },
  ],
  'deconstructing-ai-workshop': [
    { name: 'Adan Mohamed', role: 'Co-founder, Sykli Intelligence & Neogrant', image: 'images/avatar-placeholder.jpg' },
    { name: 'Hussein Ismail', role: 'Co-founder Neogrant Oy & Sykli Intelligence', image: 'images/avatar-placeholder.jpg' },
  ],
  'entrepreneurship-meetup': [
    { name: 'Hunderra Assefa', role: 'Co-founder, HHA International FZCO', image: 'images/avatar-placeholder.jpg' },
    { name: 'Dr. Muhammad Zeeshan', role: 'President, Akhuwat NGO', image: 'images/avatar-placeholder.jpg' },
    { name: 'Shabana Ahmadzai', role: 'Innovative Service Director', image: 'images/avatar-placeholder.jpg' },
    { name: 'Ilkhom Khalimzoda', role: 'Postdoctoral Researcher, University of Jyväskylä', image: 'images/avatar-placeholder.jpg' },
  ],
  'iftar-zakat-discussion': [
    { name: 'Sheikh Mujeeb Callagher', role: 'Speaker', image: 'images/avatar-placeholder.jpg' },
  ],
  'personal-branding': [
    { name: 'Aicha Manai', role: 'CEO, Startup Refugees', image: 'images/avatar-placeholder.jpg' },
    { name: 'Amin Hassan', role: 'Worklife Influencer of the Year 2023', image: 'images/avatar-placeholder.jpg' },
  ],
  'muslim-professionals-network': [
    { name: 'Idil Hussein', role: 'Researcher, Finnish Institute for Health and Welfare (THL)', image: 'images/avatar-placeholder.jpg' },
    { name: 'Hunderra Assefa', role: 'Co-founder, HHA International FZCO', image: 'images/avatar-placeholder.jpg' },
  ],
  'picnic-for-palestine': [
    { name: 'Mohammad Khlouf', role: 'BDS Movement', image: 'images/avatar-placeholder.jpg' },
    { name: 'Kazyna Turdibayeva', role: 'Marketing Specialist', image: 'images/avatar-placeholder.jpg' },
  ],
};

const feedback = [
  'Interesting topic and discussions',
  'All speakers came with lovely perspectives',
  'I was satisfied overall',
  'You guys are doing amazing',
  'More time for networking and for the speekers',
  'I think this was my favorite event so far',
  'More events like this please!',
  'It was fun and very interactive!',
  'Nice love atmosphere, nice people and talented',
  'Great event',
  'Informative and interactive! God bless',
  'It was nice and fruitful',
  'Important topic, fun atmosphere, and great food!',
  'MPN events bring like-minded together ❤️',
  'Nice event. Would like to visit more'
];

const translations = {
  fi: {
    'hero.title': 'Vahvistamme muslimiammattilaisia Suomessa.',
    'hero.sub': 'Yhteisö oppimista, mentorointia ja verkostoitumista varten — rakennamme yhdessä myönteistä vaikutusta.',
    'cta.support': 'JOIN US',
    'who.title': 'Kuka olemme',
    'who.desc': 'Muslim Professionals Network (MPN) on yhteisö muslimiammattilaisille Suomessa, joka tarjoaa tiloja, joissa voi verkostoitua, oppia ja vahvistaa toisiaan. Alkujaan Nuuksiossa järjestetty kokoontuminen elokuussa 2023 kasvoi nopeasti liikkeeksi, joka perustuu palveluun, mentorointiin ja arvoihin, jotka pohjautuvat uskoon.\n\nTänään MPN yhdistää muslimeja monenlaisista taustoista ja elämäntarinoista eri puolilta Suomea. Yhdessä kumppaneiden, sponsoreiden, vapaaehtoisten ja tukevien yhteisöjen kanssa järjestämme merkityksellisiä tapahtumia, tuemme mentorointia ja vahvistamme ääniä, jotta yksilöiden potentiaali voi toteutua ja uskonnollisesti suuntautunut johtajuus kasvaa tulevaisuudessa.',
    
    'principles.title': 'Periaatteemme',
    'principles.sub': 'Kolme peruspilaria ohjaavat kaikkea tekemistämme.',
    'principles.headline': 'Kokemuksemme ydin',
    'principles.learning.title': 'Oppiminen',
    'principles.learning.text': 'Luomme merkityksellisiä oppimiskokemuksia, jotka inspiroivat kasvua, uteliaisuutta ja itsevarmuutta. Työpajojen, keskustelujen ja yhteisen tiedonjakamisen kautta annamme muslimiammattilaisille valmiuksia menestyä henkilökohtaisesti, ammatillisesti ja henkisesti.',
    'principles.networking.title': 'Verkostoitua',
    'principles.networking.text': 'Rakennamme luotettavia tiloja, joissa aidot yhteydet voivat syntyä. Tuomalla ihmisiä yhteen eri aloilta, taustoista ja kokemuksista edistämme yhteistyötä, jaettuja mahdollisuuksia ja vahvaa yhteisöllisyyttä.',
    'principles.empowering.title': 'Vahvistuminen',
    'principles.empowering.text': 'Vahvistamme ääniä, juhlistamme lahjakkuutta ja tuemme identiteettiä. Kumppaneiden, sponsoreiden, vapaaehtoisten ja tukevien yhteisöjen kanssa muutamme kunnianhimon teoiksi – avaamme ovia, rakennamme johtajuutta ja autamme muslimeja Suomessa menestymään itsevarmasti ja arvojensa mukaisesti.',
    'vision.title': 'Visiomme',
    'vision.text': 'Menestyvä verkosto, jossa Suomen muslimiammattilaiset yhdistyvät, tukevat toisiaan ja luovat positiivista vaikutusta yhteiskunnassa.',
    'mission.title': 'Missiomme',
    'mission.text': 'Luomme oppimismahdollisuuksia, tarjoamme mentorointia, edistämme yhteistyötä, juhlistamme roolimalleja ja rakennamme siltoja eri yhteisöjen ja alojen välille.',
    'story.title': 'Tarinaamme',
    'story.p1': 'Muslim Professionals Network sai alkunsa yksinkertaisesta, mutta merkityksellisestä ajatuksesta: luoda tiloja, joissa muslimiammattilaiset Suomessa voivat tuntea olonsa nähdyiksi, arvostetuiksi ja tuetuiksi. Se alkoi elokuussa 2023 Nuuksiossa järjestetystä lämpimästä kokoontumisesta – luonnon keskellä, tutun uskon ilmapiirissä, ja rehellisten keskustelujen äärellä. Siitä tuli enemmän kuin tapahtuma. Siitä tuli oivallus: jaamme samanlaisia matkoja, haasteita, toiveita ja tavoitteita.',
    'story.p2': 'Näistä hetkistä MPN on kasvanut yhteisöksi, jota ohjaavat välittäminen, luottamus ja tarkoitus. Kuuntelemalla toisiamme, oppimalla yhdessä ja tukemalla toisiamme olemme rakentaneet siteitä, jotka menevät verkostoitumista syvemmälle. Olemme luoneet tiloja, joissa lahjakkuudet tulevat näkyviksi ja kokemukset jaetuiksi.',
    'story.p3': 'Tänä päivänä MPN yhdistää muslimeja erilaisista taustoista, elämänpoluista ja kokemuksista eri puolilta Suomea. Yhdessä kumppaneiden, sponsoreiden, vapaaehtoisten ja tukevien yhteisöjen kanssa suunnittelemme merkityksellisiä kohtaamisia, rohkaisemme mentorointiin ja vahvistamme ääniä, jotka ansaitsevat tulla kuulluiksi. Yhdessä muutamme aikomukset teoiksi – rakennamme yhteyksiä, avaamme ovia, vahvistamme identiteettiä ja inspiroimme uskolle uskollista johtajuutta tulevaisuutta varten.',
    'team.title': 'Tiimimme',
    'team.sub': 'Vapaaehtoiset ja järjestäjät MPN Finlandin taustalla',
    'achieved.title': 'Mitä saavutimme',
    'achieved.events': 'Järjestetyt tapahtumat',
    'achieved.speakers': 'Puhujien isännöimät',
    'achieved.participants': 'Osallistujat liittyivät',
    'achieved.satisfaction': 'Tyytyväisyysaste',
    'impact.achieved.title': 'Mitä olemme saavuttaneet',
    'impact.achieved.desc': 'Mittamme menestykselle on ihmisissä, joita voimaannutamme, yhteistyössä, jonka käynnistämme, ja yhteisöissä, jotka vahvistuvat yhteisen työn ansiosta.',
    'impact.cards.gatherings.title': 'Yhteisölliset kokoontumiset',
    'impact.cards.gatherings.desc': 'Tuomme muslimiammattilaiset yhteen lämpimiin, arvojemme mukaisiin tiloihin, joissa he voivat kohdata, jakaa kokemuksia ja tuntea vahvaa yhteenkuuluvuutta. Tapahtumamme luovat merkityksellisiä hetkiä, jotka vahvistavat yhteishenkeä ja keskinäistä tukea.',
    'impact.cards.conversations.title': 'Inspiroivat keskustelut',
    'impact.cards.conversations.desc': 'Huolellisesti suunnitellut tilaisuudet mahdollistavat rehellisen vuoropuhelun, oppimisen ja yhteisen pohdinnan. Nämä kohtaamiset herättävät ideoita, laajentavat näkökulmia ja rohkaisevat yksilöitä kasvamaan itsevarmuudella ja tarkoituksella.',
    'impact.cards.ecosystem.title': 'Tukea rakentava ekosysteemi',
    'impact.cards.ecosystem.desc': 'Kumppaneiden, sponsoreiden, vapaaehtoisten ja yhteisön tukijoiden avulla rakennamme vähitellen alustaa, joka edistää yhteistyötä ja uusia mahdollisuuksia. Jokainen tapahtuma vahvistaa suhteita, luottamusta ja tulevien mentorointi- sekä johtajuusaloitteiden perustaa.',
    'impact.partner.title': 'Yhteistyöhön MPN:n kanssa',
    'impact.partner.desc': 'Auta meitä ylläpitämään ohjelmia, rahoittamaan stipendejä ja rakentamaan yhdessä yhteisöaloitteita, jotka avaavat ovia muslimiammattilaisille eri puolilla Suomea.',
    'impact.partner.cta': 'Tee yhteistyötä kanssamme',
    'events.title': 'Tapahtumat',
    'events.sub': 'Nostoja ja tulevia tilaisuuksia.',
    'feedback.title': 'Saamamme palaute',
    'feedback.sub': 'Anonyymejä huomioita osallistujilta ja jäseniltä.',
    'speakers.title': 'Puhujamme',
    'speakers.sub': 'Otanta johtajista ja asiantuntijoista, jotka ovat vierailleet.',
    'speakers.showMore': 'Näytä lisää',
    'contact.title': 'Yhteystiedot',
    'contact.text': 'Ota yhteyttä some-kanavissa tai lähetä sähköpostia osoitteeseen <a href="mailto:hello@mpn.fi">hello@mpn.fi</a>.',
    'contact.headline': 'Ota Yhteyttä',
    'contact.headline_markup': '<span>Ota</span><span>Yhteyttä</span>',
    'contact.intro': 'Haluamme kuulla sinusta. Haluammepa tehdä vapaaehtoistyötä, tutkia sponsorointimahdollisuuksia, rakentaa kumppanuuksia tai kutsua meidät puhumaan tapahtumaasi, ota yhteyttä seuraavalla tavalla. Jos haluat mieluummin käyttää muita viestintätapoja, pysy kuulolla. Löydät meidät alla olevista sosiaalisen median alustoista.',
    'contact.heroSub': 'Kysymyksiä, kumppanuuksia, vapaaehtoistyötä tai mediaa? Kuulemme sinusta mielellämme.',
    'contact.send': 'Lähetä',
    'contact.ph.name': 'Nimi',
    'contact.ph.email': 'sina@esimerkki.fi',
    'contact.ph.message': 'Kirjoita viestisi…',
    'contact.ph.support': 'Valitse vaihtoehto',
    'contact.lbl.name': 'Nimi:',
    'contact.lbl.email': 'Sähköposti:',
    'contact.lbl.message': 'Viesti:',
    'contact.lbl.support': 'Miten voit tukea meitä?',
  },
  en: {
    'hero.title': 'Empowering Muslim professionals in Finland.',
    'hero.sub': 'We are a community of Muslim professionals fostering growth, mentorship, and positive impact through learning and networking. Join us in shaping a stronger, supportive ecosystem.',
    'cta.support': 'JOIN US',
    'who.title': 'Who We Are',
    'who.desc': 'Muslim Professionals Network (MPN) is a non-profit, non-political community of Muslim professionals in Finland. We create spaces for networking, mentorship, and professional development, while staying rooted in Islamic values. Our work supports career growth, representation in Finnish working life, and honest dialogue between Muslims and the wider society.',
    
    'principles.title': 'Our principles',
    'principles.sub': 'Three pillars guide everything we do.',
    'principles.headline': 'The Core of Our Experience',
    'principles.learning.title': 'Learning',
    'principles.learning.text': 'We create meaningful learning experiences that inspire growth, curiosity, and confidence. Through workshops, conversations, and shared knowledge, we equip Muslim professionals with the tools to thrive personally, professionally, and spiritually.',
    'principles.networking.title': 'Networking',
    'principles.networking.text': 'We build trusted spaces where genuine connections flourish. By bringing people together across industries, backgrounds, and experiences, we foster collaboration, shared opportunities, and a strong sense of belonging.',
    'principles.empowering.title': 'Empowering',
    'principles.empowering.text': 'We elevate voices, celebrate talent, and strengthen identity. With partners, sponsors, volunteers, and supportive communities, we turn ambition into action, opening doors, building leadership, and enabling Muslims in Finland to succeed with confidence and integrity.',
    'vision.title': 'Our Vision',
    'vision.text': 'A Finland where Muslim professionals are seen, respected, and included in every level of working life, and where Islamic values and professional excellence are not in conflict but openly coexist.',
    'mission.title': 'Our Mission',
    'mission.text': 'Create spaces, knowledge, and opportunities for Muslim professionals in Finland. We host events, build connections across industries, share practical guidance for navigating working life, and open doors for collaboration between Muslims and the wider society.',
    'story.title': 'Our Story',
    'story.p1': 'Muslim Professionals Network began with an idea: to create spaces where Muslim professionals in Finland could truly feel seen, valued, and uplifted. What started in August 2023 as a warm gathering in Nuuksio filled with nature, shared faith, and honest conversations quickly became a powerful moment of recognition, as we realized how deeply our journeys, challenges, hopes, and ambitions connected us.',
    'story.p2': 'From those beginnings, MPN has grown into a compassionate and purpose-driven community shaped by care, trust, and intent. By listening, learning together, and supporting one another, we have built bonds that go beyond networking and created spaces where talents are seen and experiences are shared.',
    'story.p3': 'Today, we bring together Muslims from diverse backgrounds across Finland, nurturing trust, mentorship, belonging, and meaningful collaboration. With partners, sponsors, volunteers, and supportive communities by our side, we design impactful gatherings, empower voices, and turn intention into impact, opening doors, strengthening identity, and inspiring faith-aligned leadership for the future.',
    'team.title': 'Our Team',
    'team.sub': 'Volunteers and organizers powering MPN Finland',
    'achieved.title': 'What We Achieved',
    'achieved.events': 'Events organised',
    'achieved.speakers': 'Speakers hosted',
    'achieved.participants': 'Participants joined',
    'achieved.satisfaction': 'Satisfaction rate',
    'impact.achieved.title': 'What We Achieved',
    'impact.achieved.desc': 'We measure success by the people we empower, the collaborations we spark, and the communities that flourish because of shared effort.',
    'impact.cards.gatherings.title': 'Community Gatherings',
    'impact.cards.gatherings.desc': 'We bring Muslim professionals together in welcoming, faith-aligned spaces where they can connect, share experiences, and feel a strong sense of belonging. Our events create meaningful moments that strengthen community spirit and mutual support.',
    'impact.cards.conversations.title': 'Inspiring Conversations',
    'impact.cards.conversations.desc': 'Through thoughtfully curated sessions, we facilitate honest dialogue, learning, and collective reflection. These engagements help spark ideas, broaden perspectives, and empower individuals to grow with confidence and purpose.',
    'impact.cards.ecosystem.title': 'Building a Supportive Ecosystem',
    'impact.cards.ecosystem.desc': 'With the support of partners, sponsors, volunteers, and community allies, we are steadily shaping a platform that nurtures collaboration and opportunity. Each event strengthens relationships, trust, and the foundations for future mentorship and leadership initiatives.',
    'impact.partner.title': 'Partner with MPN',
    'impact.partner.desc': 'Help us sustain programmes, fund scholarships, or co-create community initiatives that open doors for Muslim professionals across Finland.',
    'impact.partner.cta': 'Partner With Us',
    'events.title': 'Our Events',
    'feedback.title': 'Feedback we’ve received',
    'feedback.sub': 'Anonymous notes from attendees and members.',
    'speakers.title': 'Speakers we’ve hosted',
    'speakers.sub': 'A glimpse of leaders and experts who joined us.',
    'speakers.showMore': 'Show more',
    'contact.title': 'Contact',
    'contact.text': 'Reach us via social channels or send an email to <a href="mailto:hello@mpn.fi">hello@mpn.fi</a>.',
    'contact.headline': 'Get in Touch',
    'contact.headline_markup': '<span>Get</span><span>in Touch</span>',
    'contact.intro': 'We would love to hear from you. Whether you want to volunteer, explore sponsorship opportunities, build partnerships, or invite us to speak at your event, please reach out using the next form of if you prefer other means of communication and stay tuned, you can find us on the social media platforms below',
    'contact.heroSub': 'Questions, partnerships, volunteering, or media? We’d love to hear from you.',
    'contact.send': 'Send',
    'contact.ph.name': 'Your name',
    'contact.ph.email': 'you@example.com',
    'contact.ph.message': 'Write your message...',
    'contact.ph.support': 'Select an option',
    'contact.lbl.name': 'Name:',
    'contact.lbl.email': 'Email:',
    'contact.lbl.message': 'Message:',
    'contact.lbl.support': 'How can you support us?',
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
  const wraps = $$('.principles-grid');
  if (!wraps.length) return;
  wraps.forEach(wrap => {
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
  });
}

// Render Featured Event and Carousel (Custom slider)
function renderEvents() {
  const featuredEl = $('#featured-event');
  const hasFeatured = !!featuredEl;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  events.forEach(ev => {
    if (!ev.isoDate) {
      ev.isUpcoming = false;
      return;
    }
    const evDate = new Date(ev.isoDate);
    ev.isUpcoming = !Number.isNaN(evDate.valueOf()) && evDate >= today;
  });

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
        ${e.isUpcoming ? '<span class="event-card__tag">Upcoming</span>' : ''}
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

function initStatisticsCounters() {
  const counters = Array.from(document.querySelectorAll('.statistics-card h3[data-count]'));
  if (!counters.length) return;

  const progressCircle = document.querySelector('.progress-circle__value');
  const progressLabel = document.querySelector('.progress-circle__percent');
  const progressTarget = 93;
  const circumference = 427;
  const targetOffset = circumference * (1 - progressTarget / 100);

  if (progressCircle) {
    progressCircle.style.strokeDashoffset = `${circumference}`;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.5) {
        if (entry.target === progressLabel) {
          const delay = counters.length * 200;
          setTimeout(() => startCounter(progressLabel), delay);
          observer.unobserve(entry.target);
          return;
        }
        const index = counters.indexOf(entry.target);
        const delay = index * 200;
        setTimeout(() => startCounter(entry.target), delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((el) => observer.observe(el));
  if (progressLabel) observer.observe(progressLabel);

  function startCounter(el) {
    if (el.classList.contains('progress-circle__percent')) {
      return animateProgress();
    }

    const target = parseInt(el.getAttribute('data-count'), 10) || 0;
    const suffix = el.getAttribute('data-suffix') || '';
    const totalFrames = 120;
    let frame = 0;

    function easeOut(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    }

    function update() {
      if (frame >= totalFrames) {
        el.textContent = `${target}${suffix}`;
        return;
      }
      frame += 1;
      const value = Math.floor(easeOut(frame, 0, target, totalFrames));
      el.textContent = `${value}${suffix}`;
      requestAnimationFrame(update);
    }

    update();
  }

  function animateProgress() {
    if (!progressCircle || !progressLabel) return;
    progressCircle.style.strokeDashoffset = `${circumference}`;
    let frame = 0;
    const frames = 120;

    function easeOut(t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    }

    function update() {
      if (frame >= frames) {
        progressLabel.textContent = `${progressTarget}%`;
        progressCircle.style.strokeDashoffset = `${targetOffset}`;
        return;
      }
      frame += 1;
      const val = easeOut(frame, 0, progressTarget, frames);
      const offset = easeOut(frame, circumference, targetOffset - circumference, frames);
      progressLabel.textContent = `${Math.round(val)}%`;
      progressCircle.style.strokeDashoffset = `${offset}`;
      requestAnimationFrame(update);
    }

    update();
  }
}

// Render Speakers
function renderSpeakers() {
  const wrap = $('#speakers-grid');
  if (!wrap) return;
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

// Inject speakers blocks on events page based on data attributes
function renderEventSpeakers() {
  const sections = $$('section.event[data-event]');
  if (!sections.length) return;
  sections.forEach(sec => {
    const key = sec.getAttribute('data-event');
    const list = eventSpeakers[key];
    if (!list || !list.length) return;
    const intro = $('.event__intro', sec);
    if (!intro || intro.querySelector('.story__speakers')) return; // prevent duplication
    const titleEl = $('.section__title', intro);
    const wrap = document.createElement('div');
    wrap.className = 'story__speakers';
    wrap.setAttribute('aria-label', `Speakers for ${titleEl ? titleEl.textContent : 'this event'}`);
    const h = document.createElement('h3');
    h.className = 'story__speakers-title';
    h.textContent = 'Speakers';
    const grid = document.createElement('div');
    grid.className = 'story-speakers__grid';
    list.forEach(s => {
      const item = document.createElement('div');
      item.className = 'story-speaker';
      const imgSrc = s.image || 'images/avatar-placeholder.jpg';
      const alt = s.alt || `${s.name}${s.role ? ', ' + s.role : ''}`;
      item.innerHTML = `
        <img class="story-speaker__img" src="${imgSrc}" alt="${alt}" loading="lazy" />
        <div class="story-speaker__name">${s.name}</div>
        <div class="story-speaker__role">${s.role || ''}</div>`;
      grid.appendChild(item);
    });
    wrap.appendChild(h);
    wrap.appendChild(grid);
    intro.appendChild(wrap);
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
  // Placeholder translations
  $$('[data-i18n-placeholder]').forEach(el => {
    const k = el.getAttribute('data-i18n-placeholder');
    if (map[k]) el.setAttribute('placeholder', map[k]);
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
  if (!header) return;
  const onScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const solid = scrollTop > 6;
    const nextState = solid ? 'true' : 'false';
    if (header.dataset.solidState === nextState) return;
    header.dataset.solidState = nextState;
    header.classList.toggle('header--solid', solid);
    document.body.classList.toggle('has-scrolled', solid);
    if (solid) {
      header.style.background = 'linear-gradient(to right, #0f476a 0%, #1c698c 100%)';
      header.style.backgroundColor = '#0f476a';
    } else {
      header.style.background = 'transparent';
      header.style.backgroundColor = 'transparent';
    }
    header.style.boxShadow = solid ? '0 2px 16px rgba(0,0,0,.15)' : 'none';
  };
  const watch = () => {
    onScroll();
    requestAnimationFrame(watch);
  };
  watch();
}

// Ticker render
// ticker removed

// Mobile drawer
function setupDrawer() {
  const drawer = $('#mobile-drawer');
  const toggles = $$('.menu-toggle');
  if (!drawer || !toggles.length) return;
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


function initBurgerMenu() {
  const body = document.body;
  const burgerContainer = document.querySelector('.b-container');
  const burgerMenu = burgerContainer ? burgerContainer.querySelector('.b-menu') : null;
  const burgerBrand = burgerContainer ? burgerContainer.querySelector('.b-brand') : null;
  const burgerNav = document.querySelector('.b-nav');
  const navList = burgerNav ? burgerNav.querySelector('ul') : null;
  const langToggle = document.querySelector('.lang-toggle-wrap');
  const langOriginalParent = langToggle ? langToggle.parentElement : null;
  const langSlot = langToggle ? document.createElement('li') : null;
  const mediaQuery = window.matchMedia('(max-width: 900px)');

  if (!burgerContainer || !burgerMenu || !burgerNav || !navList) return;
  if (langSlot) langSlot.className = 'b-lang';

  const placeLangInNav = () => {
    if (!langToggle || !langSlot) return;
    if (!langSlot.contains(langToggle)) {
      langSlot.appendChild(langToggle);
    }
    if (!navList.contains(langSlot)) {
      navList.insertBefore(langSlot, navList.firstChild);
    }
  };

  const restoreLang = () => {
    if (!langToggle || !langSlot || !langOriginalParent) return;
    if (langSlot.contains(langToggle)) {
      langOriginalParent.insertBefore(langToggle, langOriginalParent.firstChild || null);
    }
    if (langSlot.parentNode) {
      langSlot.parentNode.removeChild(langSlot);
    }
  };

  const applyLangPlacement = () => {
    if (!langToggle) return;
    if (mediaQuery.matches) {
      placeLangInNav();
    } else {
      restoreLang();
    }
  };

  const toggle = (force) => {
    const shouldOpen = typeof force === 'boolean' ? force : !burgerContainer.classList.contains('open');
    burgerContainer.classList.toggle('open', shouldOpen);
    burgerNav.classList.toggle('open', shouldOpen);
    body.classList.toggle('open', shouldOpen);
    burgerMenu.setAttribute('aria-expanded', String(shouldOpen));

    applyLangPlacement();
  };

  const handleKey = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggle();
    }
  };

  burgerMenu.addEventListener('click', () => toggle());
  burgerMenu.addEventListener('keydown', handleKey);

  if (burgerBrand) {
    burgerBrand.addEventListener('click', () => toggle());
    burgerBrand.addEventListener('keydown', handleKey);
  }

  const links = Array.from(burgerNav.querySelectorAll('a'));
  links.forEach((link) => link.addEventListener('click', () => {
    if (burgerContainer.classList.contains('open')) {
      toggle(false);
    }
  }));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && burgerContainer.classList.contains('open')) {
      toggle(false);
    }
  });

  const handleMediaChange = (event) => {
    if (!langToggle) return;
    if (event.matches) {
      placeLangInNav();
    } else {
      restoreLang();
    }
  };

  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', handleMediaChange);
  } else if (typeof mediaQuery.addListener === 'function') {
    mediaQuery.addListener(handleMediaChange);
  }

  applyLangPlacement();
}


function initEventGalleryFilters() {
  const filterWrap = document.querySelector('.event-filter__controls');
  if (!filterWrap) return;
  const buttons = Array.from(filterWrap.querySelectorAll('[data-filter]'));
  const items = Array.from(document.querySelectorAll('section.event'));
  if (!items.length) return;

  const showItem = (item) => {
    if (item.dataset.filterState === 'hiding') {
      delete item.dataset.filterState;
    }
    if (!item.hasAttribute('hidden')) {
      requestAnimationFrame(() => item.classList.remove('event--hiding'));
      return;
    }
    item.removeAttribute('hidden');
    item.classList.add('event--hiding');
    requestAnimationFrame(() => {
      item.classList.remove('event--hiding');
    });
  };

  const hideItem = (item) => {
    if (item.hasAttribute('hidden') || item.dataset.filterState === 'hiding') return;
    item.dataset.filterState = 'hiding';
    item.classList.add('event--hiding');
    const onTransitionEnd = (event) => {
      if (event.propertyName !== 'opacity') return;
      if (item.dataset.filterState !== 'hiding') {
        item.removeEventListener('transitionend', onTransitionEnd);
        return;
      }
      item.setAttribute('hidden', '');
      item.classList.remove('event--hiding');
      delete item.dataset.filterState;
      item.removeEventListener('transitionend', onTransitionEnd);
    };
    item.addEventListener('transitionend', onTransitionEnd);
  };

  const applyFilter = (filter) => {
    items.forEach((item) => {
      const match = filter === 'all' || item.classList.contains(filter);
      if (match) {
        showItem(item);
      } else {
        hideItem(item);
      }
    });
  };

  filterWrap.addEventListener('click', (event) => {
    const button = event.target.closest('[data-filter]');
    if (!button || !filterWrap.contains(button)) return;

    const filterValue = button.dataset.filter;
    if (!filterValue) return;

    buttons.forEach((btn) => {
      const isActive = btn === button;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });

    applyFilter(filterValue);
    trackEvent('event_filter_click', { filter: filterValue });
  });
}

function initFloatingSocial() {
  const floating = document.querySelector('.floating-social');
  const hero = document.querySelector('.hero');
  if (!floating || !hero) return;

  const observer = new IntersectionObserver(([entry]) => {
    if (entry && entry.isIntersecting) {
      floating.classList.remove('-visible');
    } else {
      floating.classList.add('-visible');
    }
  }, { threshold: 0.1 });

  observer.observe(hero);
}

function applyImpactStats() {
  const statEls = document.querySelectorAll('[data-stat]');
  if (!statEls.length) return;
  statEls.forEach((el) => {
    const key = el.getAttribute('data-stat');
    if (!key || !(key in impactStats)) return;
    const value = impactStats[key];
    el.setAttribute('data-count', value);
    if (!el.classList.contains('progress-circle__percent')) {
      el.textContent = '0';
    }
  });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  setupHeader();
  setupDrawer();
  bindTracking();
  // Force English while Finnish is hidden (re-enable stored language when FI returns)
  const savedLang = 'en';
  renderPrinciples(savedLang);
  renderEvents();
  renderFeedback();
  renderSpeakers();
  renderEventSpeakers();
  initEventGalleryFilters();
  initBurgerMenu();
  initFloatingSocial();
  // ticker removed
  lazyLoadBackgrounds();
  initTeamScroll();
  applyImpactStats();
  initStatisticsCounters();

  // Language toggle
        // Language toggle hidden for now; re-enable this block when Finnish is live again.
        // const langBtn = document.getElementById('lang-tgl') || $('.lang-toggle');
        // langBtn.addEventListener('click', () => {
        //   const current = document.documentElement.lang || 'en';
        //   const next = current === 'en' ? 'fi' : 'en';
        //   setLanguage(next);
        //   localStorage.setItem('mpn-lang', next);
        //   trackEvent('lang_toggle_click', { lang: next });
        // });
  setLanguage(savedLang);
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
