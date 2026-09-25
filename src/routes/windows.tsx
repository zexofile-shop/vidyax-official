import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, ShieldAlert, ShieldCheck, LifeBuoy, PlayCircle } from "lucide-react";
import sacPopup from "../assets/smart-app-control-popup.jpg.asset.json";
import {
  WINDOWS_DOWNLOAD_URL,
  WINDOWS_UPDATED_AT,
  WINDOWS_VERSION,
  WINDOWS_VIRUSTOTAL_URL,
} from "../lib/release-info";

const ASSET_BASE = "https://vidyax.lovable.app";
const SAC_IMG = sacPopup.url.startsWith("http") ? sacPopup.url : `${ASSET_BASE}${sacPopup.url}`;
const supportUrl =
  "https://t.me/Edusparkcontactbot?text=" +
  encodeURIComponent("Hi Eduspark Team, I need help installing VidyaX for Windows v2.1.0.");

export const Route = createFileRoute("/windows")({
  head: () => ({
    meta: [
      { title: "Download VidyaX for Windows v2.1.0 — Eduspark" },
      {
        name: "description",
        content:
          "Official VidyaX Windows v2.1.0 installer with install guide, Smart App Control help and VirusTotal safety report.",
      },
      { property: "og:title", content: "VidyaX for Windows v2.1.0" },
      { property: "og:description", content: "Download, install guide and VirusTotal safety report." },
    ],
    links: [{ rel: "canonical", href: "https://vidyax.site/windows" }],
  }),
  component: WindowsPage,
});

function Card({ icon: Icon, title, children }: { icon: typeof Download; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-card">
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-5 w-5" />
        </span>
        <h2 className="text-base font-black sm:text-lg">{title}</h2>
      </div>
      <div className="mt-3 text-sm font-semibold leading-6 text-muted-foreground">{children}</div>
    </div>
  );
}

function WindowsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="text-2xl font-black text-brand-gradient">VidyaX</Link>
        <Link to="/download" className="text-sm font-extrabold text-muted-foreground hover:text-primary">Downloads</Link>
      </nav>

      <section className="mx-auto w-full max-w-3xl space-y-4 px-5 pb-16 pt-2 sm:px-8">
        <div className="overflow-hidden rounded-2xl bg-hero-gradient p-6 text-primary-foreground sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] opacity-85">
            Windows · v{WINDOWS_VERSION} · Updated {WINDOWS_UPDATED_AT}
          </p>
          <h1 className="mt-2 text-2xl font-black sm:text-3xl">VidyaX for Windows</h1>
          <p className="mt-2 text-xs font-semibold leading-6 opacity-90 sm:text-sm">
            Official installer for Windows 10 / 11 (64-bit). Neeche diye steps follow karo — 2 minute me install ho jayega.
          </p>
          <a
            href={WINDOWS_DOWNLOAD_URL}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-card px-5 py-3 text-sm font-black text-primary shadow-lg transition hover:-translate-y-0.5"
          >
            <Download className="h-4 w-4" /> Download VidyaX_Setup_v{WINDOWS_VERSION}.exe
          </a>
        </div>

        <Card icon={ShieldCheck} title="100% safe — VirusTotal report">
          <p>
            Humne installer ko VirusTotal pe scan kiya hai — 70+ antivirus engines se check hota hai. Aap khud report dekh kar confirm kar sakte ho ki file me koi virus / malware nahi hai.
          </p>
          <a
            href={WINDOWS_VIRUSTOTAL_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-lg border border-primary/40 px-4 py-2 text-xs font-black text-primary hover:bg-primary/10"
          >
            <ShieldCheck className="h-4 w-4" /> View VirusTotal report
          </a>
        </Card>

        <Card icon={Download} title="Step 1 — Download properly">
          <ol className="list-decimal space-y-1.5 pl-5">
            <li>Upar “Download” button dabao (sirf isi official page se).</li>
            <li>Browser download complete hone do — beech me tab band mat karna.</li>
            <li>Agar browser “not commonly downloaded” bole to ⋯ → Keep / Keep anyway select karo.</li>
          </ol>
        </Card>

        <Card icon={PlayCircle} title="Step 2 — Install & run">
          <ol className="list-decimal space-y-1.5 pl-5">
            <li>Downloads folder kholo aur <b>VidyaX_Setup_v{WINDOWS_VERSION}.exe</b> pe double-click karo.</li>
            <li>“Do you want to allow this app…” pe <b>Yes</b> dabao.</li>
            <li>Agar “Windows protected your PC” aaye to <b>More info → Run anyway</b>.</li>
            <li>Setup steps follow karke Install / Finish dabao.</li>
            <li>Start menu ya desktop shortcut se VidyaX open karo aur sign in karo.</li>
          </ol>
        </Card>

        <div className="rounded-2xl border border-warning/40 bg-warning/10 p-5">
          <div className="flex items-center gap-3">
            <ShieldAlert className="h-5 w-5 shrink-0 text-foreground" />
            <h2 className="text-base font-black sm:text-lg">Agar ye popup aaye — Smart App Control</h2>
          </div>
          <img
            src={SAC_IMG}
            alt="Smart App Control blocked an app that may be unsafe popup"
            className="mt-4 w-full rounded-xl border shadow-card"
            loading="lazy"
          />
          <p className="mt-3 text-sm font-semibold leading-6 text-muted-foreground">
            Ghabrao mat — naya app hone ki wajah se Windows publisher verify nahi kar pata. App safe hai (VirusTotal report upar dekho). Sirf ~5 minute ke liye Smart App Control off karke install kar lo:
          </p>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm font-semibold text-muted-foreground">
            <li>Popup pe “Okay” dabao.</li>
            <li>Start menu me “Windows Security” search karke open karo.</li>
            <li>App &amp; browser control → Smart App Control settings pe jao.</li>
            <li>“Off” select karo (confirm pooche to Yes).</li>
            <li>Setup .exe dobara open karke install complete karo.</li>
            <li>Install ke baad chaho to Smart App Control wapas “On” kar sakte ho.</li>
          </ol>
          <p className="mt-2 text-xs font-bold text-muted-foreground">
            Note: Kuch Windows versions me off karne ke baad dobara on karne ke liye Windows reset lagta hai.
          </p>
        </div>

        <Card icon={LifeBuoy} title="Koi problem aa rahi hai?">
          <p>Download ya install me koi bhi trouble ho to hamari support team se contact karo — hum jaldi help karenge.</p>
          <a
            href={supportUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-xs font-black text-primary-foreground"
          >
            Contact Support on Telegram
          </a>
        </Card>

        <div className="pt-4 text-center">
          <Link to="/" className="text-xs font-black text-muted-foreground hover:text-primary">← Back to home</Link>
        </div>
      </section>
    </main>
  );
}
