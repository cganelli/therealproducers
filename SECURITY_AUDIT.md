# Security Audit

Date: 2026-01-12  
Command: `npm audit --omit=dev` (with `package-lock.json` present)  
Scope: Production dependencies

## Latest result
- Status: **0 vulnerabilities** after remediation.

## Remediation performed
1) Upgraded `react-router-dom` to latest 7.x (pulls patched `react-router`).  
2) Ran `npm audit fix --omit=dev` to pull patched `glob/minimatch/brace-expansion`.  
3) Confirmed clean audit: `npm audit --omit=dev` → 0 vulnerabilities.

## How to rerun
1) Ensure lockfile (`package-lock.json` or `bun.lock`) is present.  
2) Run `npm audit --omit=dev` (or Bun equivalent once supported).  
3) Apply fixes with `npm audit fix --omit=dev` when advisories appear.  
4) Rebuild (`bun run build`) and rerun the audit after any dependency changes.

## Notes
- No runtime secrets were scanned; this covers dependency advisories only.  
- Keep the lockfile in version control to preserve the audited dependency graph.
