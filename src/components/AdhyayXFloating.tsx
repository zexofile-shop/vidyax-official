import waLogo from "../assets/whatsapp-logo.png.asset.json";

const ASSET_BASE = "https://vidyax.lovable.app";
const WA_LOGO = waLogo.url.startsWith("http") ? waLogo.url : `${ASSET_BASE}${waLogo.url}`;

export default function AdhyayXFloating() {
  return (
    <div className="fixed bottom-6 right-4 z-[60] sm:bottom-8 sm:right-6">
      <a
        href="https://whatsapp.com/channel/0029VaoeKYx3mFYErON0tj0P"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join VidyaX WhatsApp Channel"
        className="block h-14 w-14 overflow-hidden rounded-full shadow-lg ring-1 ring-border transition-transform hover:scale-105 sm:h-16 sm:w-16"
      >
        <img src={WA_LOGO} alt="WhatsApp" className="h-full w-full object-cover" loading="lazy" />
      </a>
    </div>
  );
}
