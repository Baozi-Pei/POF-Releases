# Website verification — 2026-11-05

- 4 release-selection unit tests pass: stable installer and portable selection; draft / prerelease / missing handling; malicious or off-repository URLs rejected; incomplete and portable-only assets handled.
- Browser checks pass at widths 375, 768, 1100, 1440 and 1920px: no horizontal overflow or missing images.
- Product tabs, arrow-key tab navigation, screenshot enlargement and Escape dismissal pass.
- English / Chinese switching persists across page reloads.
- Mobile menu and navigation dismiss correctly.
- Download panel tested against a mocked stable release, 404 (no release) and aborted connection. These are test states, not proof that a release has been published.
- Illustrated manual page and all its referenced images load correctly.
- No uncaught JavaScript exceptions during the checked flows.
- Desktop hero, product, workflow, imagery and download screenshots, plus mobile screenshots, were visually inspected. A narrow-screen Chinese headline wrap was corrected.
- Reduced-motion behavior verified; normal scroll-reveal and entry animation receive a separate browser smoke check.

## Deployment status

The public repository is readable. An authenticated write connection is not currently available in this session. Website files and the Pages workflow are ready locally; no successful remote push or public Pages deployment is claimed.

GitHub Pages must use the GitHub Actions source. First-time enablement is a repository setting; the normal `GITHUB_TOKEN` in the workflow does not grant repository-administration permission to turn Pages on by itself.

## Sources

- [NASA Psyche Mars south pole, PIA26772](https://science.nasa.gov/photojournal/nasas-psyche-mission-sees-mars-south-pole-after-flyby/) — addition date May 19, 2026; acquisition May 15, 2026.
- [NASA Martian Dawn](https://www.nasa.gov/image-article/martian-dawn/) — publication October 19, 2026; acquisition August 11, 2026.
- [NASA image/media guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/).
- [GitHub Pages API](https://docs.github.com/en/rest/pages/pages#create-a-github-pages-site).
