# Abhinai Maddela — Developer Portfolio

A responsive React + Vite portfolio designed for free static hosting.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL printed by Vite.

## Build

Run `npm run build`. The deployable site is generated in `dist/`.

## Deploy to GitHub Pages

1. Create a GitHub repository named `my-portfolio` under `Abhinai1864`.
2. Push this project to the repository's `main` branch.
3. In `vite.config.js`, `base: '/my-portfolio/'` matches that repository name. If you use a different repository name, update the base path. For a GitHub user site repository named `Abhinai1864.github.io`, change it to `base: '/'`.
4. In GitHub, open Settings → Pages and select GitHub Actions as the build and deployment source.
5. Add a workflow to build with Node and publish `dist/` (instructions can be provided step-by-step).

## Update resume

Replace `public/resume.pdf` with the latest PDF, keeping the same filename, then commit and push. The portfolio's resume link stays the same.

## Profile links

Edit the `links` object near the top of `src/main.jsx`. Naukri and Codeforces are intentionally shown as “Coming soon” until their profile URLs are supplied.

## Notes

This is a static frontend. It does not need a backend server or database. A custom `.com` domain is optional and normally has a renewal fee; the free GitHub Pages address can be used instead.
