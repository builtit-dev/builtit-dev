# Debugging Summary: Next.js Image Loading Issues for GitHub Pages Deployment

**Date:** 2025-06-01
**Project:** builtit-template (targeting builtit-dev.github.io/builtit-dev/)

## 1. Primary Objective

Successfully deploy a Next.js application to GitHub Pages under the repository `builtit-dev/builtit-dev`. This requires:
1.  Correctly configured `basePath` and `assetPrefix` in `next.config.js` for GitHub Pages (subpath `/builtit-dev`).
2.  All static assets (images, icons, manifests, etc.) loading correctly in both local development (`npm run dev`) and the production build (GitHub Pages).
3.  Navigation working seamlessly in both environments.

## 2. Current Status

*   **Navigation & Routing:** Appears to be working correctly. Pages are accessible under `http://localhost:3002/builtit-dev/` in local development, respecting the `basePath`.
*   **Image Loading:** This is the primary unresolved issue. Images consistently fail to load (404 errors) in local development under specific, and now perplexing, circumstances, even when URLs seem correctly formed.

## 3. `next.config.js` Configuration

The target configuration is:
```javascript
const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: '/builtit-dev',
  assetPrefix: isProd ? '/builtit-dev' : undefined,
};

module.exports = nextConfig;
```
This configuration intends for:
*   **Local Development:** `basePath` is `/builtit-dev`, `assetPrefix` is `undefined`. Pages load at `localhost:3002/builtit-dev/...`, images *should* load from `localhost:3002/images/...`.
*   **Production (GitHub Pages):** `basePath` is `/builtit-dev`, `assetPrefix` is `/builtit-dev`. URLs in exported files should be prefixed.

## 4. Detailed Debugging Attempts & Findings

### 4.1. Initial State & Hardcoded Path Removal
*   **Issue:** The codebase initially had numerous hardcoded instances of a previous base path, `/builtit-template/`, in image `src` attributes, `<Link>` hrefs, and even in component-local `basePath` variables.
*   **Actions & Results:**
    *   Systematically removed `/builtit-template/` from `HeroSection.tsx`, `PricingSection.tsx`, `Header.tsx`, `MeetTheFounder.tsx`, `Footer.tsx`, `ProcessSection.tsx`.
    *   Corrected a local `const basePath = '/builtit-template'` in `app/portfolio/debtcat/page.tsx` and updated its image/link paths.
    *   Corrected a local `const basePath = '/builtit-template'` in `app/page.tsx` and updated its link paths.
    *   These changes fixed many broken links and some image paths that were incorrectly double-prefixed or pointing to the old base path.

### 4.2. Asset Filename Normalization
*   **Issue:** Some icon filenames had mixed casing or inconsistent naming.
*   **Actions & Results:** Ensured icon filenames in `public/images/icons/` were lowercase and hyphenated, and updated references in `ProcessSection.tsx`. This resolved 404s for those specific icons.

### 4.3. Focus on Specific Image: `full logo.svg`
This image, primarily used in the Header and Footer, became a focal point for debugging.
*   **Observation:** The actual filename is `public/images/full logo.svg` (with a space).
*   **Attempt 1 (Matching Code to File with Space):**
    *   Ensured `src` attributes in `Header.tsx` and `Footer.tsx` were `"/images/full logo.svg"`.
    *   **Result:** Still 404s locally. The browser requests `http://localhost:3002/images/full%20logo.svg` (correctly URL-encoded), but the Next.js dev server returns a 404.
*   **Attempt 2 (Renaming File to Hyphenated and Updating Code):**
    *   Hypothesis: The space in the filename, when `basePath` is active, might be an issue for the dev server.
    *   Action: Renamed file (manually by USER) to `full-logo.svg` and updated code references to `"/images/full-logo.svg"`.
    *   **Result:** Still 404s. `find_by_name` tool later indicated `full-logo.svg` was not found, suggesting the rename might not have been effective or was reverted. The USER later confirmed the file on disk remained `full logo.svg`.
*   **Attempt 3 (Reverting Code to Match File with Space - Current State):**
    *   Code references set back to `"/images/full logo.svg"`.
    *   **Result:** Still 404s for `http://localhost:3002/images/full%20logo.svg`.

### 4.4. `next.config.js` Simplification Test
*   **Hypothesis:** `basePath` or the conditional `assetPrefix` might be interfering with static file serving in dev mode.
*   **Action:**
    1.  Temporarily modified `next.config.js`: commented out `basePath`, set `assetPrefix: undefined` explicitly.
    2.  Deleted `.next` and `out`.
    3.  Restarted dev server. Site served from `http://localhost:3002/`.
    4.  Added a test image directly to `app/page.tsx`: `<Image src="/images/icons/glowing-neural-network-connection.png" ... />`.
*   **Result (Significant Finding):**
    *   The test image `glowing-neural-network-connection.png` **LOADED SUCCESSFULLY** from `http://localhost:3002/images/icons/glowing-neural-network-connection.png`.
    *   This indicated that the Next.js dev server *can* serve files from `public` correctly when `basePath` is not active.

### 4.5. Restoring `next.config.js` and Cache Clearing
*   **Action:** Restored `next.config.js` to its original state (with `basePath: '/builtit-dev'` and conditional `assetPrefix`).
*   **Consistent Practice:** Throughout debugging, meticulous cache clearing was attempted: deleting `.next` and `out` folders, restarting the dev server, and clearing browser cache before testing.
*   **Result:** After restoring `next.config.js`, images (including `full logo.svg` and the test image `glowing-neural-network-connection.png`) resumed 404-ing. The requested URLs were `http://localhost:3002/images/...` (correct for dev mode with `assetPrefix: undefined`), but the server couldn't find them.

### 4.6. File Existence Verification
*   `find_by_name` tool confirmed `public/images/full logo.svg` and `public/site.webmanifest` exist at their respective paths.

## 5. Key Conclusions & Current State of Mystery

1.  **Core Problem:** The Next.js development server fails to serve static files from the `public` directory when `basePath` is active in `next.config.js`, even if `assetPrefix` is `undefined` and the requested URLs (`http://localhost:3002/images/...`) are theoretically correct for this setup.
2.  **Contradictory Evidence:** The server *can* serve these files correctly if `basePath` is temporarily removed from the config. This points to an issue specifically with how `basePath` (or its interaction with other parts of the dev server) affects static file serving from `public`.
3.  **Filename Spaces:** While initially a strong suspect for `full logo.svg`, the issue persists even when trying to load other images with no spaces in their names (e.g., `glowing-neural-network-connection.png`) once `basePath` is reinstated.
4.  **Cache Clearing:** Extensive cache clearing has been performed repeatedly. While crucial, it hasn't resolved this underlying issue.
5.  **URL Formation:** The browser *is* requesting images from the correct root path (`http://localhost:3002/images/...`) in development, not from under `/builtit-dev/images/...`. This implies `assetPrefix: undefined` is working as intended for URL construction.

## 6. Instructions for Next Developer

The immediate goal is to get *any* image to load reliably from the `public` directory in the local development environment (`npm run dev`) with the target `next.config.js` (including `basePath: '/builtit-dev'` and `assetPrefix: isProd ? '/builtit-dev' : undefined`).

**Suggested Investigation Steps:**

1.  **Simplify to the Extreme:**
    *   Ensure the file `public/images/full-logo.svg` (note: space, not hyphen, as per latest user confirmation of filename) exists.
    *   In `app/page.tsx`, add the simplest possible image tag: `<img src="/images/full logo.svg" alt="Test Logo" width="100" />` (using a plain `<img>` tag to bypass Next.js `<Image>` component initially).
    *   Perform rigorous cache clearing: stop server, delete `.next` & `out`, restart server, clear browser cache.
    *   Test `http://localhost:3002/builtit-dev/`. Check network tab for `http://localhost:3002/images/full%20logo.svg`. If it 404s, this is the core issue.

2.  **Test with a Known-Good, Simple Filename:**
    *   Place a simple, unambiguously named file, e.g., `public/test-image.png`, into the project.
    *   Reference it in `app/page.tsx` with `<img src="/test-image.png" alt="Test" />`.
    *   Repeat rigorous cache clearing and testing. Does `http://localhost:3002/test-image.png` load?

3.  **Inspect Next.js Internals (If Necessary):**
    *   If simple cases fail, there might be a deeper issue. Consider if any custom server configurations, middleware (though less likely for `next export`), or other non-standard Next.js features are active that could interfere with static asset serving when `basePath` is used.
    *   Review the `NODE_ENV` to ensure it's correctly set to `development` when running `npm run dev`.

4.  **File System Permissions:**
    *   Verify read permissions for the `public` directory and its contents for the user running the Next.js dev server.

5.  **Minimal Reproducible Example:**
    *   If the issue remains intractable, try creating a brand-new, minimal Next.js project (`npx create-next-app@latest`).
    *   Implement *only* the `basePath: '/builtit-dev'` and `assetPrefix: isProd ? '/builtit-dev' : undefined` configuration.
    *   Add a single image to `public/images/` and try to display it.
    *   If this minimal example *works*, compare its setup meticulously against the `builtit-template` project. If it *fails*, it might indicate a bug or a misunderstanding of Next.js behavior with `basePath` in recent versions for local dev static serving.

6.  **Consider `next.config.js` Alternatives (If All Else Fails):**
    *   While the current `assetPrefix: isProd ? '/builtit-dev' : undefined` is standard, if images absolutely refuse to load from root in dev with `basePath` active, one could *experimentally* try setting `assetPrefix: isProd ? '/builtit-dev' : '/builtit-dev'` (i.e., use `basePath` as `assetPrefix` in dev too). This would mean images in dev would be expected at `localhost:3002/builtit-dev/images/...`. This isn't ideal as it deviates from typical Next.js behavior where `public` is served from root, but could be a diagnostic step or a temporary workaround if the root cause is too obscure.

**The core mystery is why the dev server, which correctly serves from `public` when `basePath` is absent, fails to do so when `basePath` is present, even if `assetPrefix` is `undefined`.**

Good luck!
