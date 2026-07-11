# Asia Group of Companies — Website Infrastructure
## Complete File Structure & Media Injection Guide

---

## DIRECTORY STRUCTURE

```
asia-group-website/
│
├── index.html                          ← MAIN HOMEPAGE (complete)
├── README.md                           ← This file
│
├── subsidiaries/
│   ├── wholesale.html                  ← Wholesale & Distribution (complete)
│   ├── pharmaceuticals.html            ← Asia Pharmacy (template — clone wholesale.html)
│   ├── beverages.html                  ← Asia Beverages (template — clone wholesale.html)
│   ├── automobiles.html                ← Asia Automobiles (template — clone wholesale.html)
│   ├── cosmetics.html                  ← Asia Cosmetics (template — clone wholesale.html)
│   └── phones.html                     ← Asia Phones & Accessories (template — clone)
│
├── leadership/
│   ├── index.html                      ← Full leadership team page (complete)
│   ├── chairman.html                   ← Founder/Chairman profile (clone from leadership)
│   ├── [exec-name].html                ← Individual executive profiles (1 per exec)
│   └── careers.html                    ← Careers page (build when ready)
│
├── news/
│   ├── index.html                      ← News & Media hub (complete)
│   ├── article-1.html                  ← Individual article template
│   ├── article-[n].html                ← Additional articles
│   └── press/
│       ├── expansion-2025.html
│       ├── manufacturing-2025.html
│       └── [press-release-slug].html
│
├── investor-relations/
│   └── index.html                      ← Investor Relations page (complete)
│
├── legal/
│   ├── privacy.html                    ← Privacy Policy (fill with legal team)
│   ├── terms.html                      ← Terms of Use
│   └── cookies.html                    ← Cookie Policy
│
└── media/                              ← ALL MEDIA ASSETS GO HERE
    ├── hero-drone.mp4                  ← Homepage hero background video
    ├── about-hero.jpg                  ← About section main image
    ├── ceo-thumb.jpg                   ← CEO avatar thumbnail (circle, ~120px)
    │
    ├── warehouses/
    │   ├── kano-main.jpg               ← Kano Central Hub exterior/aerial
    │   ├── niger-hq.jpg                ← Niger State HQ exterior
    │   └── regional.jpg                ← Cross-border facilities
    │
    ├── leadership/
    │   ├── ceo-sani-isah.jpg           ← *** PRIORITY *** Full CEO portrait (3:4)
    │   ├── group-md.jpg
    │   ├── pharmacy-md.jpg
    │   ├── automobiles-md.jpg
    │   ├── beverages-md.jpg
    │   ├── cosmetics-md.jpg
    │   ├── phones-md.jpg
    │   └── board-[name].jpg            ← Board members (circular crops, ~200px)
    │
    ├── logistics/
    │   ├── fleet.jpg                   ← Truck fleet lineup
    │   ├── convoy.jpg                  ← Highway convoy
    │   └── loading-bay.jpg             ← Warehouse loading operations
    │
    ├── csr/
    │   ├── meal-distribution.jpg       ← Daily feeding programme (tall portrait)
    │   ├── community.jpg               ← Community programme photography
    │   └── education.jpg               ← Education/scholarship recipients
    │
    ├── news/
    │   ├── featured-1.jpg              ← Featured article hero
    │   ├── article-[n].jpg             ← Individual article thumbnails (16:9)
    │   └── press-conference.jpg
    │
    ├── subsidiaries/
    │   ├── wholesale-hero.jpg          ← Wholesale page hero (full-bleed)
    │   ├── pharmacy-hero.jpg
    │   ├── automobiles-hero.jpg
    │   ├── beverages-hero.jpg
    │   ├── cosmetics-hero.jpg
    │   └── phones-hero.jpg
    │
    └── logos/
        ├── asia-group-logo.png         ← Main logo (already available)
        ├── asia-group-logo-white.svg   ← White variant for dark backgrounds
        ├── asia-group-logo-dark.svg    ← Dark variant for light backgrounds
        ├── partner-pz-cussons.svg      ← Partner logos (collect from partners)
        ├── partner-nestle.svg
        ├── partner-cadbury.svg
        ├── partner-dangote.svg
        ├── partner-bua.svg
        ├── partner-olam.svg
        ├── partner-sinотruck.svg
        ├── partner-7up.svg
        └── [partner-name].svg          ← Add all 30+ partners
```

---

## MEDIA INJECTION GUIDE

Every placeholder in the codebase is marked with:
```
<!-- MEDIA: Description of what goes here
     File: media/path/filename.ext
     Recommended: Specifications -->
```

### Priority Media Assets (Collect First)

| Priority | Asset | Location in Code | File Path |
|----------|-------|-----------------|-----------|
| 🔴 P1 | CEO/Founder Portrait (full) | About section, Leadership page | media/leadership/ceo-sani-isah.jpg |
| 🔴 P1 | Homepage Hero (drone video or image) | index.html hero section | media/hero-drone.mp4 or .jpg |
| 🔴 P1 | Warehouse exterior (Kano) | Operations section, Wholesale page | media/warehouses/kano-main.jpg |
| 🟡 P2 | Logistics/fleet photography | Operations section | media/logistics/fleet.jpg |
| 🟡 P2 | Daily meal distribution photography | CSR section | media/csr/meal-distribution.jpg |
| 🟡 P2 | All executive portraits | Leadership page | media/leadership/[name].jpg |
| 🟢 P3 | Partner logos (all 30+) | Partners section | media/logos/partner-[name].svg |
| 🟢 P3 | Drone/cinematic operations footage | Throughout | media/logistics/operations.mp4 |
| 🟢 P3 | CSR programme photography | CSR section | media/csr/*.jpg |
| 🟢 P3 | News article photography | News pages | media/news/article-[n].jpg |

---

## DATA INJECTION GUIDE

Items still requiring data from CEO/executive sessions:

### From CEO Interview (Group Chairman)
- [ ] Annual distribution volumes: sugar, rice, seasoning, soap, pommades
- [ ] Fleet size (number of trucks)
- [ ] Total number of employees / group headcount
- [ ] Number of stockists / retail points served
- [ ] Number of locations in Abubakar Rimi Market
- [ ] Full company registration details (CAC number, registered address)
- [ ] Corporate email addresses and phone numbers
- [ ] Social media handles
- [ ] Website domain (confirm: asiagroup.com.ng or similar)
- [ ] Full philanthropic programme details beyond meal programme
- [ ] Other CSR activities (education, healthcare, etc.)
- [ ] Exact founding dates for each subsidiary
- [ ] Annual revenue figures (if shareable)

### From Each Subsidiary MD
- [ ] MD full name, title, and brief bio
- [ ] Key products/brands distributed by their subsidiary
- [ ] Number of clients/accounts
- [ ] Annual volume figures
- [ ] Notable partnerships or contracts

### From Finance/Legal Team
- [ ] Formal company address (registered)
- [ ] CAC filing details
- [ ] Subsidiary legal names and registration numbers
- [ ] Group structure chart
- [ ] Audited financial highlights (for investor relations)

### From HR/Admin Team
- [ ] Open job listings for Careers page
- [ ] Benefits and employee programme details
- [ ] Head office address(es) confirmation

### From Operations Team
- [ ] Warehouse floor area (square metres)
- [ ] Storage capacity (tonnes) per facility
- [ ] Number of loading bays, cold storage details
- [ ] Daily/weekly order volumes

---

## PAGES STILL TO BUILD

Clone `subsidiaries/wholesale.html` and customise for each:

| Page | Hero Image | Key Products | Key Stats |
|------|------------|-------------|-----------|
| Asia Pharmacy | Pharmacy/healthcare environment | Pharma products, OTC meds | Clients, products, coverage |
| Asia Beverages | Beverages/bottling imagery | 7UP range, Mamuda products | Volume, routes, accounts |
| Asia Automobiles | Vehicle fleet/showroom | SinoTruck range, Mikano | Units sold, fleet clients |
| Asia Cosmetics | Beauty/retail environment | Pommades, soaps, creams | SKUs, distribution reach |
| Asia Phones | Electronics/retail environment | Phone brands, accessories | Stockists, volume |

Also to build:
- `leadership/careers.html` — Job listings page
- `legal/privacy.html` — Privacy Policy
- `legal/terms.html` — Terms of Use  
- Individual article pages (`news/article-[n].html`)
- Individual press release pages
- Individual executive profile pages (`leadership/[name].html`)

---

## TECHNICAL NOTES

- All pages use **Google Fonts**: Cormorant Garamond (display), Barlow (body), Barlow Condensed (UI)
- Color system: CSS variables defined in `:root` — update once to change everywhere
- All pages are **mobile responsive** with breakpoints at 900px and 600px
- All forms currently use a simple button click handler — connect to backend (Formspree, Netlify Forms, or custom API) before launch
- **No external JS dependencies** — all animations and interactions are vanilla JS + CSS
- Partner logos in Partners section: currently text placeholders — replace with `<img>` tags when logos are collected, keeping `style="max-height:40px; opacity:0.6; filter:grayscale(1);"` with `:hover` removing filter
- Map section: currently a placeholder box — recommended replacement: custom Google Maps embed or Mapbox with custom styling (dark theme, green markers)

---

## BRAND GUIDELINES (Working)

| Element | Specification |
|---------|--------------|
| Primary Green | `#1B5E20` (dark), `#388E3C` (mid), `#4CAF50` (light) |
| Gold/Accent | `#D4AC0D` (light), `#B8860B` (dark) |
| Background Dark | `#111111` primary, `#1A1A1A` secondary |
| Display Font | Cormorant Garamond — italic for emphasis |
| Body Font | Barlow — weight 300 for body, 600 for labels |
| UI Font | Barlow Condensed — ALL CAPS for labels, uppercase headings |
| Key Differentiator in Copy | **Trust and Integrity** — use in all brand communications |
| Tag Line | *"Building a legacy that will stand the test of time"* |

---

*Last updated: Infrastructure build — data sessions and media shoots pending*
*Built by: Website infrastructure team*
*Status: Ready for content and media injection*
