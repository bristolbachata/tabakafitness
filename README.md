# Tabaka Fitness – rebuilt website

Static, no-framework site (one tiny optional script, `assets/site.js`, for the mobile menu, scroll progress bar and scroll-reveal effects; everything works without it). All 11 original URLs are unchanged (each lives in its own folder as `index.html`):

/ · /services/ · /personal-training-bristol/ · /acro-yoga/ · /thai-yoga-massage/ ·
/nutritional-consultation-body-composition-assesment/ · /online-personal-training-nutrition/ ·
/bristol-bachata/ · /testimonials/ · /personal-trainer-bristol/ · /contact/

New pages: /privacy-policy/ and /cookie-policy/ (linked in the footer only).

Also included: `assets/styles.css`, `assets/site.js`, `assets/consent.js`, `assets/favicon.svg`, `sitemap.xml`, `robots.txt`, `404.html`, `_redirects`, `_headers`.

## Design (v2)
Dark, bold look inspired by bristolbachata.co.uk: full-bleed hero, orange-on-black theme (gradient from deep orange to amber), sticky glass header with progress bar, scrolling ticker, pricing cards, masonry testimonials and a mobile Call / WhatsApp / Book bar. Sections fade in as you scroll; this is switched off automatically for visitors who prefer reduced motion, and content is fully visible if JavaScript is off.
Colours and sizes live at the top of `assets/styles.css` (`--a1`, `--a2`, `--a3` are the gradient colours).

## Cookies and legal pages
- A consent banner (Accept all / Reject non-essential / Customise) appears on first visit; the choice is remembered for 12 months and can be changed from **Cookie settings** in the footer or on the cookie policy page.
- **Analytics is off until you add your ID.** Open `assets/consent.js` and paste your GA4 Measurement ID (looks like `G-XXXXXXXXXX`) into `GA_ID`. Google Analytics then loads only after someone accepts, and is switched off and its cookies removed if they withdraw. With `GA_ID` empty, no analytics code is ever loaded.
- The privacy and cookie policies are sensible templates written from what this site does. Please read them, correct anything that does not match how you work (for example providers you use or how long you keep client records), and consider getting them checked. Also check whether you need to pay the ICO data protection fee.
- The site itself sets no cookies other than your consent choice (stored in the browser).

## Please confirm before going live
0. **Initial consultation price** – the homepage card says "60 min" with no price because none was given. The Nutrition page still lists a 60-minute nutritional consultation + body composition at £60; if that is the same session, tell me and I will add the price to the homepage and align the pages. (conflicts found on the old site)
1. **Address** – used `LA Gym, 20 Easton Rd, Bristol BS5 0BY`. Old about page mentions "Synergi Training Space"; directories show other addresses.
2. **Email** – used `jantabaka@gmail.com` (homepage/contact). The old About page lists `jan@tabakafitness.com`.
3. **Prices** – personal training is £65 per session, with packages tailored at the consultation (as you confirmed). Other prices are unchanged from the old site and still need confirming: body composition assessment £30, nutritional consultation + assessment £60, the online prices (discounted figures from the old online page, "lockdown" wording removed), Thai massage £40/£55.
4. **Experience** – 15+ years and "hundreds of clients trained", as you confirmed. "5,000+ hours of one-to-one training" is carried over from the old About page; check it still fits.
5. **Acro yoga** – page says classes are paused (as on the old page).
6. **Bachata venue/prices/events** – taken from the current homepage (Totos By The River, Mon & Wed). Update the events list as dates pass. Third-party listings (MoveGB etc.) still show older venues.
7. **Image alt text** – written without being able to view the photos. Please check each one describes its image.
8. **Photos** are hot-linked from `tabakafitness.com/wp-content/uploads/...` so they work once this is hosted on that domain.

## Content decisions
- Thai massage precautions rewritten more cautiously ("speak to your GP"); removed the unrelated "Sydney plastic surgeons" text and some absolute medical claims.
- Removed the long acroyoga essay (appeared to be reproduced from elsewhere) and replaced it with original wording.
- Removed Calum's testimonial (Type 1 diabetes / insulin claim) as a health claim that shouldn't be made on a marketing page. Other testimonials are verbatim with spelling lightly corrected.
- Online training video is a link rather than an embedded player (faster page).

## Deploying
- **Static hosting / replacing WordPress:** upload the folder contents to the site root.
- **Keeping WordPress:** use these files as the design/content reference; keep Yoast's sitemap and robots, and copy the JSON-LD blocks and titles/descriptions into your SEO plugin.
- Add 301 redirects: `/services/acro-yoga/` → `/acro-yoga/`, and `/home/personal-training/` → `/personal-training-bristol/`.

## Still to do (not possible from here)
- Claim/complete the Google Business Profile and keep name/address/phone identical everywhere.
- Add a privacy/cookie notice if you use analytics (UK GDPR/PECR).
- Validate the structured data at https://search.google.com/test/rich-results and run PageSpeed Insights after launch.

## GitHub + Cloudflare Pages
1. Create a GitHub repo and upload the *contents* of this folder (so `index.html` is at the repo root).
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Framework preset: None. Build command: leave empty. Build output directory: `/` (root).
4. Add the custom domain `tabakafitness.com` in Pages, then point DNS as Cloudflare instructs.
5. `_redirects` and `_headers` are Cloudflare Pages files and are already included.

**Before switching DNS:** download your photos from the WordPress server (`wp-content/uploads`), put them in an `assets/img/` folder and update the image paths – otherwise the images disappear when WordPress is switched off.
**Search Console:** the Google verification tag is included; resubmit `https://tabakafitness.com/sitemap.xml`.
**Analytics:** the old Google Site Kit tracking is not included – add your analytics tag if you want it (plus a cookie notice).
