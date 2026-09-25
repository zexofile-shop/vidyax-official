# Windows v2.1.0 launch update

## What will change
- Remove the Earn Now section, footer link, dedicated reward page, and reward stripe notification.
- Mark AdhyayX as **Under maintenance** everywhere it appears, with a polished status treatment and no misleading “Live Now” action.
- Make Windows v2.1.0 live across the home page, download page, sharing text, metadata, structured search data, and FAQs. iOS will remain the only “Coming soon” platform.
- Add the Windows installer URL supplied by you and show a direct **Download for Windows** action.
- Add a compact, dismissible “Windows version is live” stripe. Tapping it will move the visitor to the download section; on other pages it will open the download page at that section.
- Add the supplied Windows launch artwork near the beginning of the home page. It will be uploaded through the site’s permanent asset delivery flow so it also loads on the hosted domain.
- Add clear Windows installation steps on the download page, including browser download, opening the `.exe`, completing setup, and what to do when Windows shows a Smart App Control warning.
- Keep the safety guidance accurate: Smart App Control cannot reliably be switched off for only five minutes. The page will explain the warning, recommend verifying the official GitHub release link, and point users to Windows Security without claiming a temporary-off option exists.
- Update English and Hinglish FAQs for Windows availability, installation, Smart App Control, Android builds, and iOS status.

## Technical details
- Use the supplied launch banner as a CDN-backed asset pointer rather than a local-only preview path.
- Remove obsolete reward imports/components/routes and let the generated route tree refresh naturally.
- Add a reusable Windows release constants module so the installer link and version stay consistent across pages.
- Preserve the existing visual system and mobile horizontal layouts; avoid overlays and text overflow.
- Verify the home and download pages at mobile and desktop widths, then check the latest build diagnostics.
