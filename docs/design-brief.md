# POF / From orbit to annotation

Purpose: a public product and release website for the Windows POF Workbench. GitHub Pages hosts the website; GitHub Releases hosts installers. Desktop application source is outside this repository.

## Direction

An editorial, cinematic product launch. Authentic NASA imagery, vast black space, oversized but restrained typography, warm red-orange accents, precise instrument-like captions. Alternate a dark planetary opening with a quiet porcelain product section. Avoid generic feature-card grids, artificial stars, invented accuracy claims, excessive glass panels and oversized colored buttons.

NASA supplies the atmosphere; actual POF screenshots explain the software. The 2026 Psyche crescent opens the page, and the NASA October 19, 2026 Martian Dawn publication introduces the image-source section. Publication dates and acquisition dates remain distinct. No NASA endorsement is implied.

## Structure

1. Immersive Mars crescent / POF identity / clear Windows download route.
2. Full-width product view and selectable annotation, training and inference screenshots.
3. Active-learning process, integrated with an image-led composition.
4. Recent NASA imagery, captions and original sources.
5. Honest download state resolved from the latest stable GitHub Release; manual and release archive remain usable when no installer is published.
6. FAQ, laboratory attribution and image credits.

## Interaction

EN / 中文 switch with saved preference. Sticky navigation, subtle scroll reveals, responsive menu, screenshot tabs with accessible keyboard controls, image enlargement, reduced-motion support. Downloads report checking / available / unpublished / connection failure explicitly. No fake progress or fabricated download count.

## Implementation and verification

Use static HTML, CSS and small ES modules, with all critical imagery and fonts served locally. Keep relative paths compatible with /POF-Releases/. Test release selection and URL trust boundaries using Node tests; verify desktop, tablet and phone with Playwright, including keyboard use, reduced motion, offline release API and document links. Upload only this site and public documentation.

The supplied skill refers to a design-search database that is absent from its installed package. Research instead uses the user references, current official NASA and Apple websites, and NASA media-use guidance. No other agent or paid design generation is needed.

## User-directed visual revision

The initial dark crescent / abstract slogan was rejected. The current opening instead uses Curiosity's October 2026 Martian Dawn publication as a full-frame background. A large POF wordmark sits behind a foreground ridge extracted as a code-native SVG clip path; the Workbench name, functional description and download actions stay legible in front. Headlines now state annotation, training, segmentation and active learning directly. Warm chalk, graphite and restrained mission-orange replace the initial pure-black / cold-white emphasis. The Psyche south-pole photograph remains a separate scientific imagery chapter.
