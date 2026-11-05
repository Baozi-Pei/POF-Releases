# Design system

## Identity

POF's original transparent orbital mark, white on dark surfaces. No substitute P-letter monogram, NASA badge or institutional endorsement badge.

## Palette

Primitive values are declared in `styles.css`. Semantic roles: `--black` for space, `--white` for text, `--paper` for the product chapter, `--charcoal` for the download surface, `--orange` for a small number of key actions and instrument marks. Orange is `#ed6240`; large surfaces stay neutral.

## Typography

Space Grotesk supplies display headings and concise metadata; Manrope supplies reading text. Both are local variable fonts. Chinese uses platform-appropriate sans-serif fallbacks. Large headings scale with viewport width; body copy remains separate from fine source captions. Chinese headline wording is deliberately short to avoid orphaned characters on phones.

## Components

Pill primary actions have a restrained orange fill, black text and a small directional arrow. Screenshots sit in a dark presentation frame; the page uses editorial sections rather than uniform feature cards. Tabs distinguish current selection through both color and `aria-selected`. Important controls have visible keyboard focus states. The download panel exposes checking, ready, unpublished and connection-error states.

## Motion

One slow image entrance, stagger-free scroll reveals, a short contour trace and subtle hover movement. Motion uses transforms and opacity, never scroll hijacking. Reduced motion disables the entrance and reveals all content immediately. Every link and button remains usable without animation.

## Responsive composition

Desktop uses asymmetric text / visual arrangements and a two-column download composition. At 767px the chapters stack, navigation becomes a menu and images retain their aspect ratios. Image previews fit rather than crop the application screenshots. Background NASA photographs may crop responsively; source descriptions disclose this.

The current primary action has a 5px radius, following the NASA editorial revision rather than the earlier pill style. Hero depth comes from a source-aligned SVG foreground ridge, not colored glows.
