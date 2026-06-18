# FRK Professional Site

Portfolio website for Francine Roche Kay, a senior medical writer focused on oncology, medical communications, regulatory documentation, and scientific writing.

Live site: https://jim-kay.github.io/frk-professional-site/

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS
- Radix UI components
- GitHub Pages
- GitHub Actions

## Local Development

Install dependencies:

```bash
npm ci
```

Run the development server:

```bash
PORT=4173 BASE_PATH=/ npm run dev
```

On Windows PowerShell:

```powershell
$env:PORT = "4173"
$env:BASE_PATH = "/"
npm run dev
```

## Build

For a local production build:

```bash
PORT=4173 BASE_PATH=/frk-professional-site/ npm run build
```

On Windows PowerShell:

```powershell
$env:PORT = "4173"
$env:BASE_PATH = "/frk-professional-site/"
npm run build
```

The build output is written to:

```text
dist/public
```

## Type Checking

```bash
npm run typecheck
```

## Deployment

The site deploys to GitHub Pages through the workflow at:

```text
.github/workflows/deploy.yml
```

Deployments run automatically on pushes to `main`. The workflow:

1. Installs dependencies with `npm ci`
2. Builds the Vite app with `BASE_PATH=/frk-professional-site/`
3. Uploads `dist/public` as the GitHub Pages artifact
4. Publishes the site to GitHub Pages

## Content Updates

Most page copy and structured portfolio content lives in:

```text
src/data/content.ts
```

The main page component is:

```text
src/pages/Home.tsx
```

Static public assets live in:

```text
public/
```

The downloadable resume PDF is served from:

```text
public/resume/francine-kay-resume.pdf
```

Source-controlled component assets live in:

```text
src/assets/
```
