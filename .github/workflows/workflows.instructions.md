---
name: workflows
description: "Guidance for editing GitHub Actions workflow files in .github/workflows."
applyTo: ".github/workflows/**"
---

# GitHub Actions Workflow Instructions

- Keep workflow changes focused on this repository's React and npm build/test/deploy pipeline.
- Preserve the existing separation between validation and deployment; deployment must wait for successful checks and run only for the intended production event.
- Use `npm ci` for reproducible dependency installation and keep Node.js versions consistent with the project's declared support.
- Grant workflows and jobs only the minimum GitHub token permissions they need.
- Do not expose secrets in logs, command output, or workflow files; pass deployment credentials through GitHub Actions secrets.
- Prefer maintained, version-pinned actions and avoid introducing unnecessary workflow dependencies.
- When changing CI steps, verify that referenced npm scripts exist in `package.json` and that the workflow YAML remains valid.
