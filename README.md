# Tabaka Fitness website, v2

Static site on the approved dark design. No build step: upload the folder and deploy.

## Pages

| Page | URL |
|---|---|
| Home | `/` |
| Services | `/services/` |
| Face-to-face PT | `/personal-training-bristol/` |
| About Jan | `/personal-trainer-bristol/` |
| Online coaching | `/online-personal-training-nutrition/` |
| Body composition | `/nutritional-consultation-body-composition-assesment/` |
| Thai yoga massage | `/thai-yoga-massage/` |
| Acro yoga (paused) | `/acro-yoga/` |
| Bristol Bachata | `/bristol-bachata/` (links to bristolbachata.co.uk) |
| Testimonials | `/testimonials/` |
| Contact | `/contact/` |
| Not found | `404.html` |

## Before going live

1. **Add Jan's photo** at `assets/images/jan-tabaka.jpg`. Pages use it on the homepage and About page. Without it, those spots show a broken image.
2. **Check these items** against the live business:
   - Address: the pages use "LA Gym, 20 Easton Road, BS5 0BY" from a directory listing. Confirm it. The contact card just says "LA Gym, Bristol BS5 0BY".
   - Qualification: "BSc Sports and Exercise Science". The current site has a typo, and listings differ.
   - Personal training: £65 per one-hour session. Packages are discussed at the first session.
   - Body composition: £30 for 30 minutes, £60 for the one-hour nutritional analysis.
   - Online coaching: prices are "get in touch", as agreed. The package names and inclusions come from your draft.
   - Testimonials: confirm each client has agreed to their quote being published. Remove any you cannot confirm.
   - Bachata: "featured on BBC One and BBC Four" and "13+ years" come from bristolbachata content. Confirm.
   - Phone, email and WhatsApp number.
3. **Remove** any draft claims you no longer want: none are left in the copy except the items above.

## Deploy (GitHub and Cloudflare Pages)

1. Create a new repo for this site only (for example `tabakafitness`) and push the folder.
2. Cloudflare: Workers & Pages → Create → Pages → Connect to Git. Select the repo.
3. Framework preset: None. Build command: empty. Output directory: `/`.
4. Test on the `*.pages.dev` address, then add `tabakafitness.com` under Custom domains.
5. Submit `https://tabakafitness.com/sitemap.xml` in Google Search Console.
