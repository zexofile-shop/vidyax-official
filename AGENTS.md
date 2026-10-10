# Project Architecture

- Bundle site-critical promotional and instructional images through direct source imports so published pages never depend on preview-only asset URLs.
- Keep promotion artwork and contact entries in a dedicated configuration module so replacing image URLs never requires changing the page layout.
- Use Embla for promotion carousel motion and swipe handling, with navigation derived from its selected slide so dots and banners stay synchronized.
- Use mobile-first layouts that expand into multi-column desktop grids at large breakpoints, avoiding narrow phone-width content on Windows screens.