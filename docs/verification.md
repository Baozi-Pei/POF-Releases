# Website verification — 2026-11-05

- 4 release-selection unit tests pass: stable installer and portable selection; draft / prerelease / missing handling; malicious or off-repository URLs rejected; incomplete and portable-only assets handled.
- Browser checks pass at widths 375, 768, 1100, 1440 and 1920px: no horizontal overflow or missing images.
- Product tabs, arrow-key tab navigation, screenshot enlargement and Escape dismissal pass.
- English / Chinese switching persists across page reloads.
- Mobile menu and navigation dismiss correctly.
- Download panel tested against a mocked stable release, 404 (no release) and aborted connection. These are test states, not proof that a release has been published.
- Illustrated Chinese and English manual readers, all 15 chapters and all referenced images load correctly.
- No uncaught JavaScript exceptions during the checked flows.
- Desktop hero, product, workflow, imagery and download screenshots, plus mobile screenshots, were visually inspected. A narrow-screen Chinese headline wrap was corrected.
- Reduced-motion behavior verified; normal scroll-reveal and entry animation receive a separate browser smoke check.

## Deployment status — 2026-11-06

- Public website: https://baozi-pei.github.io/POF-Releases/
- Online Chinese manual: https://baozi-pei.github.io/POF-Releases/manual/index.html
- Online English manual: https://baozi-pei.github.io/POF-Releases/manual/en.html
- Stable application release: https://github.com/Baozi-Pei/POF-Releases/releases/tag/v0.2.0
- Pages is enabled with the GitHub Actions deployment source. The first workflow completed successfully.
- Live browser checks passed for responsive widths 375–1920px, product tabs, screenshot dialog, saved language and every manual image. The manual reader was checked at desktop and mobile widths, with chapter navigation, dark appearance, print layout and both PDF downloads.
- The live download panel resolves v0.2.0 and its exact installer and portable asset URLs.
- All three release binaries/archives were streamed in full from public unauthenticated download URLs and checked against local SHA-256 values:

| Asset | Bytes | SHA-256 |
| --- | ---: | --- |
| POF-Workbench-Setup.exe | 432545985 | 1a6a77e0b3ee43424a2c97a23e664de75d3b6adcb03b724b4c183105ce2de4e7 |
| POF-Workbench-Portable.zip | 483687033 | c378a5a3091d2a49ac6099aac211b00d1f593caece4245e1554490632ff90e2e |
| POF-Workbench-Manual.zip | 7427744 | 0126ccff07f420b478540f9c1899b10ba82c932df82a86274e64497728601897 |

The actual application updater parser accepts the live stable release for an older version (0.1.9), including its GitHub-provided digest, and returns no update for the current version (0.2.0). Installer execution, replacing an installed copy and exit-time handoff were not performed by this website/publication verification.

## Manual update — 2026-11-06

- Added an English reader at `/manual/en.html`, with the same 15 functional chapters as the Chinese reader.
- Added responsive reading layouts, a chapter rail, mobile collapsible contents, language links, reading progress and print/PDF controls.
- The website's language preference routes manual links and the download panel to the matching English or Chinese PDF.
- The v0.2.0 manual package now contains both online readers, both PDFs and the illustrated manual assets; the application binaries were not changed.

## Sources

- [NASA Psyche Mars south pole, PIA26772](https://science.nasa.gov/photojournal/nasas-psyche-mission-sees-mars-south-pole-after-flyby/) — addition date May 19, 2026; acquisition May 15, 2026.
- [NASA Martian Dawn](https://www.nasa.gov/image-article/martian-dawn/) — publication October 19, 2026; acquisition August 11, 2026.
- [NASA image/media guidelines](https://www.nasa.gov/nasa-brand-center/images-and-media/).
- [GitHub Pages API](https://docs.github.com/en/rest/pages/pages#create-a-github-pages-site).

## Motion verification — 2026-11-06

- Seven unit tests cover release selection and bounded scene/reading progress geometry.
- Added a ridge-occluded wordmark entrance, matched photo/foreground scroll depth, planet drift, a reading-progress line, highlighted workflow steps and decoded screenshot transitions.
- Browser regression checks cover widths 375–1920px, keyboard navigation, saved language, manual images, release/network states and normal motion.
- Motion-specific checks cover matched image/clip transforms, rapid tab changes and live reduced-motion changes.
- Motion never intercepts scrolling, delays navigation or changes the imagery provenance. No animation dependency or video payload was added.
