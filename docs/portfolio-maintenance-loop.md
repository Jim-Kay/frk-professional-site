# FRK Site Periodic Maintenance Loop

This document is intended for a scheduled Codex automation pointed at this repository.
It adapts the Loop Library patterns that fit a small public portfolio site:

- Docs sweep: keep README and runbooks aligned with implementation.
- SEO/GEO visibility loop: keep the public page crawlable, answer-ready, and technically sound.
- Fresh-clone loop: make sure a clean checkout can build from documented instructions.
- Full product evaluation loop: verify the main user journeys on desktop and mobile.
- Post-release baseline loop: record build, deployment, and performance evidence after meaningful changes.
- Production error sweep: check GitHub Actions and public site health; stop cleanly when there is nothing actionable.

Source reviewed: https://signals.forwardfuture.ai/loop-library/

## Purpose

Keep https://jim-kay.github.io/frk-professional-site/ healthy, current, searchable, and easy to maintain without creating churn.

## Recommended Cadence

Run weekly for health checks and monthly for SEO/GEO and fresh-clone checks. Also run after any resume, content, design, dependency, or deployment change.

## Scope

In scope:

- Public site health and deploy status.
- Resume download availability.
- Contact links and professional links.
- README and maintenance documentation drift.
- Build and typecheck health.
- Basic SEO/GEO signals for the single-page portfolio.
- Desktop and mobile smoke checks.
- Fresh-clone setup verification when time and environment allow.

Out of scope unless the user explicitly asks:

- Large visual redesigns.
- Broad dependency upgrades unrelated to a detected issue.
- Architecture refactors.
- Changing resume claims, dates, titles, publications, patents, or contact details without a source from the user.
- Publishing private addresses, private phone numbers, or non-public email addresses.

## Run Instructions

1. Start by recording:

   - Date and timezone.
   - Current branch and commit.
   - Git working tree status.
   - Live site URL.
   - Whether this is a weekly, monthly, or post-change run.

2. Protect local work:

   - Run `git status --short`.
   - Do not revert or overwrite uncommitted user changes.
   - If unrelated user changes exist, leave them alone.

3. Run baseline repository checks:

   ```powershell
   npm run typecheck
   $env:PORT = "4173"
   $env:BASE_PATH = "/frk-professional-site/"
   npm run build
   ```

4. Verify live deployment health:

   - Check the latest GitHub Actions Pages workflow for the repository.
   - Confirm the live site returns HTTP 200.
   - Confirm the resume PDF returns HTTP 200 and `Content-Type: application/pdf`.
   - Confirm the live page does not expose `prydein@comcast.net`.
   - Confirm the expected public contact address appears: `frk@francinerochekay.com`.

5. Run a user-journey smoke test:

   - Desktop width around 1440 px.
   - Mobile width around 390 px.
   - Confirm the page renders without blank sections.
   - Confirm top navigation reaches the major sections.
   - Confirm "Download Resume" points to `resume/francine-kay-resume.pdf`.
   - Confirm LinkedIn points to `https://www.linkedin.com/in/francine-kay/`.
   - Confirm the professional website points to `https://www.francinerochekay.com/`.
   - Confirm the contact form produces a `mailto:` flow to `frk@francinerochekay.com`.

6. Run the documentation sweep:

   - Compare `README.md` against `package.json`, `vite.config.ts`, `.github/workflows/`, and the actual public assets.
   - Update docs only when they are stale or missing important operational information.
   - Do not rewrite accurate docs just to create activity.

7. Run the SEO/GEO visibility pass:

   Check the public page and built output for:

   - Clear page title and meta description.
   - Open Graph image availability.
   - Canonical public URL if one is present.
   - Crawlability of the root page and resume PDF.
   - Answer-ready content for these target queries:
     - `Francine Roche Kay medical writer`
     - `Francine Kay oncology medical writer`
     - `Francine Roche Kay resume`
     - `Francine Kay patents`
     - `Francine Kay publications`
   - Structured, visible sections for expertise, experience, patents, publications, resume, and contact.

   If a high-impact gap is found, fix the smallest clear issue and rerun the same checks.

8. Monthly, run the fresh-clone check when a disposable directory is available:

   - Clone the repository into a clean temporary directory.
   - Follow only `README.md`.
   - Run `npm ci`, `npm run typecheck`, and the GitHub Pages build command from the README.
   - If a step fails because documentation is incomplete, fix the docs or setup, discard the clone, and rerun once.

9. Make changes only when there is an actionable issue:

   - Keep each fix small and directly tied to evidence.
   - Prefer content/data updates in `src/data/content.ts`.
   - Prefer README/runbook updates for documentation drift.
   - Run `npm run typecheck` and the GitHub Pages build after code or content changes.

10. Stop conditions:

   Stop without changes when:

   - Typecheck and build pass.
   - Live site and resume PDF are reachable.
   - Public contact/privacy checks pass.
   - Documentation is current.
   - No high-impact SEO/GEO or user-journey issue is found.

   Stop as blocked when:

   - GitHub or the network is unavailable after a retry.
   - A needed source of truth is missing for biography, resume, patent, publication, or contact changes.
   - The working tree contains conflicting user changes that make a safe edit impossible.

## Required Final Report

End each run with:

- Run type: weekly, monthly, post-change, or manual.
- Commit checked.
- Checks run and results.
- Any files changed.
- Deployment or live-site evidence.
- Open questions or blockers.
- Whether a follow-up run is needed.

If changes were made and committed, include the commit hash and push result.
