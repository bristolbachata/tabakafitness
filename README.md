# Tabaka Fitness – rebuilt website

Static, no-JavaScript, no-framework site. All 11 original URLs are unchanged (each lives in its own folder as `index.html`):

/ · /services/ · /personal-training-bristol/ · /acro-yoga/ · /thai-yoga-massage/ ·
/nutritional-consultation-body-composition-assesment/ · /online-personal-training-nutrition/ ·
/bristol-bachata/ · /testimonials/ · /personal-trainer-bristol/ · /contact/

Also included: `assets/styles.css`, `sitemap.xml`, `robots.txt`, `404.html`.

## Please confirm before going live (conflicts found on the old site)
1. **Address** – used `LA Gym, 20 Easton Rd, Bristol BS5 0BY`. Old about page mentions "Synergi Training Space"; directories show other addresses.
2. **Email** – used `jantabaka@gmail.com` (homepage/contact). The old About page lists `jan@tabakafitness.com`.
3. **Prices** – used the homepage prices (PT £60/hr, assessment £30, nutrition + assessment £60). Old nutrition page said £20/£45 and PT £45. "£55 thereafter" wording interpreted as a lower repeat/package rate. Online prices are the discounted figures from the old online page (old "lockdown" wording removed).
4. **Years of experience** – old site said 9, 12 and 13 in different places; new copy says "10+".
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
- Add a favicon.
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
