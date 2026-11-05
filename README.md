# POF Workbench

Public product website, installers, updates and release notes. This repository does **not** contain the POF desktop application's source code.

## Website

Visit **https://baozi-pei.github.io/POF-Releases/** for the product website and online manual. Download Windows packages from [the latest stable release](https://github.com/Baozi-Pei/POF-Releases/releases/latest).

- Cinematic Mars imagery with original NASA credits and publication dates.
- Actual POF interface previews for annotation, training and batch inference.
- English / Chinese language switch with saved preference.
- Responsive layouts, keyboard navigation and reduced-motion support.
- The download panel reads the newest stable public GitHub Release. Drafts and prereleases are not advertised. When no installer exists, the page says so and links to the release archive.
- A locally hosted illustrated Chinese user manual.

## Deploy to GitHub Pages

1. Push this repository to `main`.
2. In **Settings → Pages → Build and deployment → Source**, select **GitHub Actions**.
3. Run **Actions → Publish POF website**, or push a commit to `main`.

The workflow tests release selection, stages only public website files and deploys to Pages. It does not upload the application source, test fixtures, local configuration or credentials.

## Publish an application version

Create a stable GitHub Release and attach the signed/verified Windows installer and, optionally, a portable ZIP. Recommended names:

- `POF-Workbench-Setup.exe`
- `POF-Workbench-Portable.zip`

The website resolves the release's asset URLs automatically. The desktop updater requires the exact installer filename `POF-Workbench-Setup.exe`, a tag such as `v0.2.1`, a version newer than the installed application, and the SHA-256 digest supplied by GitHub for the fully uploaded asset. No separate update JSON manifest is currently required. If GitHub has not supplied the digest yet, the application postpones the update.

See [the release guide](docs/releasing.md) for the complete publishing checklist and the difference between application releases and website/manual updates.

## Local preview and checks

```shell
python -m http.server 4173
node --test release.test.mjs motion.test.mjs
```

Open `http://localhost:4173/`. A local HTTP server is required for browser ES modules.

`qa.cjs` is an optional Playwright browser check. Install Playwright in your own development environment and set `POF_BROWSER_PATH` if necessary. Public deployments require no npm install or frontend build.

## Credits

See [image credits](credits.html), [design brief](docs/design-brief.md), [design system](docs/design-system.md) and [verification](docs/verification.md). NASA imagery is used with source attribution; its use does not imply NASA endorsement. Fonts and accompanying licenses are in `assets/`.

POF Workbench is developed by **南方科技大学行星与人工智能实验室**.
