# Agrosetra Resource Website

Static single-page website for **Agrosetra Resource** — a Nigerian agricultural enterprise committed to sustainable farming, post-harvest storage, and rural community empowerment.

## Live Site

Deployed via GitHub Pages: `https://<username>.github.io/agrosetraresource.info`

## Project Structure

```
.
├── index.html          # Single-page HTML
├── style.css           # All styles (responsive, mobile-first)
├── main.js             # Interactions: navbar, animations, form
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Pages auto-deploy on push to main
```

## Sections

- **Hero** — Tagline, statistics, CTA
- **About** — Mission and company overview
- **Services** — Commodity Trading, Storage Infrastructure, Capacity Building
- **Our Journey** — Timeline from 2019 to present
- **Challenges** — Honest account of obstacles
- **Success Factors** — What is needed for viability
- **Contact** — Enquiry form and contact details

## Deployment

The site deploys automatically via GitHub Actions on every push to `main`.

To deploy manually:
```bash
git add .
git commit -m "Update site"
git push origin main
```

Then go to **Settings → Pages** in your GitHub repo and set the source to **GitHub Actions**.
# Agrosetraresource.info
