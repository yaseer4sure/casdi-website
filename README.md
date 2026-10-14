# CASDI website

The website for Climate Alaramma Sustainable Development Initiative, built with React and Vite.

## Local development

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
npm run preview
```

Vite writes the production website to `dist/`. Dependencies and build output are excluded from Git.

## Deploy with GitHub and Vercel

1. Push this repository to the intended GitHub account or organisation.
2. Import that GitHub repository into the intended Vercel team.
3. Use the Vite framework preset, root directory `.`, build command `npm run build`, and output directory `dist`.
4. Deploy and check the home page and direct page URLs such as `/projects`, `/about`, and `/contact`.
5. Add `climateasdi.org` and `www.climateasdi.org` in the project's Domains settings. Use `climateasdi.org` as the primary domain and redirect `www` to it.
6. At the domain's DNS provider, set the website records to the exact values shown by Vercel. Keep existing mail and verification records.
7. Wait for Vercel to verify DNS and HTTPS, then check both hostnames and direct page URLs.

The committed `vercel.json` configures the build and the React Router fallback needed for direct URLs and page refreshes. Pushes to the linked production branch trigger deployments after Git integration is connected.

No environment variables are required by the current website. Do not commit `.env` files or Vercel account state.

## Contact form

The contact form prepares a message in the visitor's email application; it does not send through a backend. The current contact address is `info@casdi.org`. Confirm the intended public mailbox before launch; the website domain alone does not configure email delivery.

## Deployment references

- [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite)
- [Vercel custom domains](https://vercel.com/docs/domains/set-up-custom-domain)
