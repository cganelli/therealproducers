# WCAG 2.2 Level AA Audit

Date: 2026-01-12  
Tool: `@axe-core/cli` 4.11.1 (Chrome headless)  
URL tested: `http://127.0.0.1:5174` (local `bun run preview` build)  
Scope: Home page (root path)  
Report file: `axe-report.json`

## Summary
- Latest axe-core scan: **0 violations detected** (automated).
- Note: Automated tools cover ~20–50% of issues; manual checks still required.

## 2026-01-13 — Page: /privacy
- Tool: `@axe-core/cli` 4.11.1 (Chrome headless)
- URL: `http://127.0.0.1:5175/privacy` (local preview)
- Result: **0 violations detected**
- Saved report: `axe-report-privacy.json`

## How to rerun
1. Build and preview locally:  
   - `bun run build`  
   - `bun run preview -- --host 127.0.0.1 --port 5173` (or any open port)
2. In another terminal, run axe-core against the preview URL:  
   - `npx @axe-core/cli http://127.0.0.1:5173 --exit --save ./axe-report.json`
3. Log date, tool version, URL, and findings here after each run.

## Next recommended steps
- Perform manual keyboard-only testing and screen-reader spot checks.  
- Re-run after any UI changes and record results in this file.
