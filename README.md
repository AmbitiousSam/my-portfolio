# Siva Kumar — Portfolio

Personal portfolio site for Siva Kumar Kurnool Veera Sai, Platform & Full-Stack Engineer.

**Stack:** Next.js 16 · Tailwind CSS v4 · TypeScript · Vercel

## Run locally

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Deploy to Vercel

1. Push this repo to GitHub (already done at [AmbitiousSam/my-portfolio](https://github.com/AmbitiousSam/my-portfolio))
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the `my-portfolio` repo
4. Framework: **Next.js** (auto-detected)
5. Click **Deploy** — no env vars required for the base build

## TODO — owner action items

- [ ] **Resume PDF** — add `resume.pdf` to `public/` so the Download Resume button works
- [ ] **Formspree endpoint** — sign up at [formspree.io](https://formspree.io), create a form, then replace the `action="mailto:..."` in `components/Contact.tsx` with `action="https://formspree.io/f/YOUR_FORM_ID"` and set `method="POST"` (remove `encType`)
- [ ] **Project screenshots** — add screenshots to `public/` and display them in `components/Projects.tsx` cards for visual richness
- [ ] **OG image** — add `public/og-image.png` (1200×630) and reference it in `app/layout.tsx` metadata for social previews
- [ ] **Domain** — point a custom domain via Vercel dashboard → Settings → Domains
