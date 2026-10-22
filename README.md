# Tabaka Fitness website

A fast, static, accessible website. No build step, no WordPress, no database. Upload this folder to GitHub and Cloudflare Pages.

## Structure

| Page | URL |
|---|---|
| Home | `/` |
| Services hub | `/services/` |
| Personal training | `/personal-training-bristol/` |
| About Jan | `/personal-trainer-bristol/` |
| Online training and nutrition | `/online-personal-training-nutrition/` |
| Body composition and nutrition | `/nutritional-consultation-body-composition-assesment/` |
| Thai yoga massage | `/thai-yoga-massage/` |
| Acro yoga (not running) | `/acro-yoga/` |
| Bristol Bachata (links out to bristolbachata.co.uk) | `/bristol-bachata/` |
| Testimonials | `/testimonials/` |
| Contact | `/contact/` |

The URLs match the original site, so existing links and Google results keep working.

## 1. Add the photo (one-off)

The About and homepage use `assets/images/jan-tabaka.jpg`. Copy it from the current site:

```bash
mkdir -p assets/images
curl -L -o assets/images/jan-tabaka.jpg \
  https://tabakafitness.com/wp-content/uploads/2018/07/jan-31-07-2017-1085compressed.jpg
```

Use a recent photo if you have one. Keep the file name the same, or update the references.

## 2. Publish on GitHub

```bash
cd tabaka-fitness-site
git init
git add .
git commit -m "Rebuild Tabaka Fitness site"
git branch -M main
git remote add origin https://github.com/YOUR-USER/tabaka-fitness.git
git push -u origin main
```

## 3. Deploy on Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**, and select the repo.
2. Build settings:
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: `/` (root)
3. Deploy. Cloudflare gives you a `*.pages.dev` address to check first.
4. **Custom domain:** Pages project → **Custom domains** → add `tabakafitness.com` (and `www` if you use it). If the domain is already on Cloudflare DNS, remove the old A/CNAME records that point at the WordPress host first.
5. Cloudflare reads `_redirects` and `_headers` automatically. They handle the acro yoga redirect and security and caching headers.

## 4. After going live

- **Google Search Console:** add the property, verify it, then submit `https://tabakafitness.com/sitemap.xml`.
- **Google Business Profile:** check the website link, categories, hours and address match the site (see the checklist below).
- **Bing Webmaster Tools:** import from Search Console. Bing also feeds some AI search results.
- Test on a phone and in a text-only browser, then run Google PageSpeed Insights and aim for green scores.

## 5. Please check before publishing

These items came from the existing site, directories or booking listings that conflict or are unclear. I haven't guessed them:

- [ ] **Qualification wording.** The site says "BSc Spots and Exercise Science" (typo). Booking listings say "BSc Sports Science". Pages use "degree in sports and exercise science". Confirm the exact title.
- [ ] **Years of experience.** The site says 12 years. One listing says 9 years as athlete and coach. Pages say "over 12 years" as per the homepage.
- [ ] **Personal training price.** The site says "£60 per 1hr session regardless and £55 thereafter". Pages say £60 for a one-hour session and £55 per session after that. Confirm the meaning.
- [ ] **Training address.** Listings show LA Gym, 20 Easton Rd (BS5), Pithay Studios (BS1) and the bachata venue at Totos By The River. Pages say "a well-equipped gym close to Bristol city centre". Add the exact address to `contact/index.html` and to the schema if you want it shown.
- [ ] **Opening hours.** Listings disagree. They are left out of the pages and schema. Add them once confirmed, then add `"openingHours"` to the `LocalBusiness` block on the homepage.
- [ ] **Online pricing.** The site says "discounted for a limited time" with no price or end date. Add the price and any end date, or remove the banner when the offer ends.
- [ ] **Thai yoga massage details.** The site didn't show session length or prices, so the page asks people to get in touch. Add lengths and prices if you want them shown.
- [ ] **Acro yoga.** The page says classes are not running and invites people to register interest. Add a sign-up method or remove the page when it's no longer relevant.
- [ ] **Bachata postcode.** The original page had a typo in the postcode. The bachata page doesn't include a postcode.
- [ ] **Testimonials.** The Alana quote is kept word for word. The old headline "stunning 5 stones weight loss in less than 6 months" was removed. In the UK, weight-loss and before-and-after claims have to be substantiated and not misleading, so confirm you have written permission to publish each testimonial and check the wording.
- [ ] **Phone and email.** Confirm `07951 514058` and `jantabaka@gmail.com` are the ones to publish.
- [ ] **Privacy.** The contact page uses an email link, not a form, so no data is stored by the site. Add a short privacy notice if you collect enquiries or use analytics.
- [ ] **Google reviews.** Two Google reviews are quoted from the existing site. Add more recent reviews as they come in.

## 6. Editing the site

All content is plain HTML. To change a price, open the page, edit the text, save, commit and push. Cloudflare redeploys within about a minute.

Keep these in sync when you change content:
- the price table on the homepage and the service page
- the `offers` and `FAQPage` blocks in the JSON-LD on the service page
- the footer, which is repeated on every page

## Files

```
index.html               homepage
404.html                 error page
robots.txt               crawler rules and sitemap link
sitemap.xml              list of URLs for search engines
_redirects               Cloudflare redirects
_headers                 Cloudflare security and caching headers
assets/css/styles.css    all styles (no external fonts, for speed)
assets/js/main.js        mobile menu (the site works without it)
assets/images/           photos (add jan-tabaka.jpg here)
*/index.html             one folder per page, so URLs end in /
```
