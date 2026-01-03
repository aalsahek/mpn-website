# Muslim Professionals Network (MPN) Website

**Live URL:** https://aalsahek.github.io/mpn-website/  
**Project Type:** Static website hosted on GitHub Pages  
**Audience:** Future developers, contributors, maintainers, and non-technical stakeholders

---

## 1. Project Overview
- **Purpose:** Present the Muslim Professionals Network (MPN) community, its mission, events, impact, and contact avenues.
- **Target audience:** Muslim professionals in Finland, partners, sponsors, volunteers, and stakeholders interested in community engagement.
- **Core objectives:**  
  - Community building and storytelling (About, Impact, team profiles)  
  - Events promotion and recaps with speaker listings and galleries  
  - Partnerships and sponsorship visibility  
  - Contact and intent capture via Google Forms (volunteer, speaker, sponsorship, partnership, membership placeholder)
- **Nature:** Non-profit, community-driven platform emphasizing faith-aligned professional growth.

---

## 2. Technology Stack
- **Frontend:** HTML, CSS, vanilla JavaScript (no frontend framework).
- **Hosting:** GitHub Pages (static hosting).
- **External integrations:** Google Forms for submissions (Volunteer, Speaker, Sponsorship, Partnership). External image assets and social links.
- **Fonts & icons:** Uses locally referenced assets (e.g., PNG/SVG icons) and web-safe fonts; no external font library detected.
- **Assets:** Static images under `images/` (including event photo folders), CSS (`style.css`), JavaScript (`script.js`).

---

## 3. Project Structure
Top-level (indicative):
```
/
├── index.html          # Home
├── about.html          # About Us
├── events.html         # Events listing and galleries
├── our-impact.html     # Impact metrics and stories
├── contact.html        # Contact options and forms
├── blogs.html          # (Present but currently hidden from nav)
├── style.css           # Global styles
├── script.js           # Shared behaviors, translations, filters
├── sitemap.xml         # Sitemap for search engines
├── robots.txt          # Robots configuration
└── images/             # Logos, icons, page assets, event galleries
    ├── events/         # Event-specific folders (e.g., AI, Psychology, Leadership, Nuuksio, Palestine, startups-and-founders, etc.)
    └── ...             # Misc images (logos, placeholders)
```
- **Naming conventions:**  
  - Pages use lowercase with hyphens (e.g., `our-impact.html`).  
  - Event folders use lowercase with hyphens (e.g., `startups-and-founders`, `personal-branding`, `iftar-zakat`, `palestine`, `nuuksio`).  
  - JS translation keys and event slugs use dot notation and kebab-case identifiers.

---

## 4. Page-by-Page Breakdown
### Home (`index.html`)
- **Purpose:** Landing overview with hero, who-we-are, vision/mission, achievements, events slider, feedback.
- **Key sections:** Hero, Who We Are (English only active), Vision/Mission, Achievements counters, Events carousel, Feedback notes.
- **Dynamic elements:** Language toggle exists but currently forced to English and visually hidden; event filters and counters initialized by `script.js`.

### About Us (`about.html`)
- **Purpose:** Organization story, principles, vision/mission cards, team profiles.
- **Key sections:** Hero, Our Story (multi-paragraph), Vision/Mission cards, Principles cards, Team cards with photos, roles, bios, LinkedIn links.
- **Content:** Static text with optional translation hooks (English primary; Finnish keys present but toggle hidden).

### Events (`events.html`)
- **Purpose:** List past/upcoming events with filters by year and speaker callouts per event.
- **Key sections:** Filter buttons (All/2024/2025/2023), event blocks (intro + gallery), optional speaker blocks injected by `script.js` via `data-event` slug mapping.
- **Dynamic elements:** Filter logic and speaker insertion handled in `script.js`. Galleries use static images per event folder.

### Our Impact (`our-impact.html`)
- **Purpose:** Impact metrics, stories, and partner call-to-action.
- **Key sections:** Hero, What We Achieved (counters), Impact cards, Partner with MPN CTA.
- **Content:** Static; translation keys present.

### Contact (`contact.html`)
- **Purpose:** Provide contact avenues and intent capture.
- **Key sections:** Hero, contact options/buttons linking to Google Forms (Volunteer, Speaker, Sponsorship, Partnership), plus a disabled Membership glassmorphism button (“MEMBERSHIP / Opening Soon”).
- **Dynamic elements:** None beyond static links.

### Blogs (`blogs.html`)
- **Purpose:** Placeholder blog page; currently hidden from nav/SEO (noindex).  
- **Content:** Static; not linked in primary nav.

---

## 5. Forms Architecture
- **Mechanism:** All submissions handled via **Google Forms** links; no backend on this site.
- **Forms:**
  - **Volunteer:** `https://forms.gle/oeaE1qAUTJUHVfQR6`
  - **Speaker:** `https://forms.gle/d8vkM6GPEneSwkEf6`
  - **Sponsorship:** `https://forms.gle/Nei92kJDmisDuHh69`
  - **Partnership:** `https://forms.gle/e1WLPdLfH6fphHUW6`
  - **Membership:** Disabled placeholder button (no form yet)
- **Data flow:** Users are taken to Google Forms; data is stored in the linked Google account (assumed organization-controlled). The static site does not process or store submissions.
- **Limitations:** No inline validation or analytics; relies on Google Forms UI/permissions. Benefits: zero backend maintenance, low cost, quick updates via Google Forms.

---

## 6. Content Management Approach
- **Updates:** Manual edits to HTML/CSS/JS; no CMS.
- **Events:** Add/update event sections in `events.html` with `data-event` slug; map speakers in `eventSpeakers` in `script.js`; add images to `images/events/<slug>/`.
- **Translations:** Keys exist in `script.js` (English and Finnish). Language toggle is currently hidden/forced to English; to re-enable, restore toggle logic in `script.js` and CSS.
- **Version control:** Git with main branch; deployed via GitHub Pages from repository root.

---

## 7. Deployment & Hosting
- **Hosting:** GitHub Pages (static).
- **Branch strategy:** `main` assumed as deploy branch (live at `https://aalsahek.github.io/mpn-website/`).
- **Go-live:** Push to `main` triggers Pages rebuild; assets served from repo root.
- **Custom domain:** Currently using GitHub Pages URL; can map to `mpnsuomi.fi` (meta tags updated) if DNS/CNAME is configured.

---

## 8. Accessibility & Responsiveness
- **Responsive behavior:** CSS grids/flex; mobile nav via burger menu; event grids collapse to single-column on small screens.
- **Accessibility considerations:** Semantic sections and headings; alt text on images; buttons/links with labels. Language toggle hidden; ensure focus order remains logical.
- **Known limitations:** Heavy imagery; dynamic filters rely on JS; hidden overlay removed for mobile nav (no dimming).

---

## 9. Security & Privacy Considerations
- **Static model:** No server-side processing; minimal attack surface.
- **Third-party services:** Google Forms for data capture; data owned/stored by the Google account holders.
- **What’s not stored:** No cookies/local storage for user data beyond (currently disabled) language preference; no authentication; no PII handled on-site.

---

## 10. Contribution Guidelines (Proposed)
- **How to help:** Improve content, fix layout, add events/galleries, enhance accessibility, refine translations, or implement form/backend improvements.
- **Coding standards:** HTML5 semantic structure; CSS in `style.css`; JS in `script.js` (vanilla); kebab-case for slugs/paths; avoid spaces in filenames.
- **Content workflow:**  
  1) Update page HTML and corresponding assets.  
  2) For events: add section + images + speaker mapping.  
  3) Run basic lint/format checks if available; test filters and nav.  
  4) Open PR to `main` with concise summary.
- **Future improvements to consider:** Re-enable language toggle with persistence; optimize images; add linting/formatting tools; add tests for JS behaviors (filters/speakers).

---

## 11. Roadmap & Future Enhancements (Suggested)
- Internal form handling with lightweight backend or serverless functions.
- Mentorship directory or matching platform.
- Event management system (submissions, RSVPs, calendar).
- Analytics (privacy-conscious) for engagement tracking.
- CMS migration (e.g., headless CMS) for non-technical updates.
- Accessibility audit and performance optimization (image compression, lazy loading refinements).
- Multi-language UI toggle reactivation with persisted preference.

---
