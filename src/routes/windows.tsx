import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, ShieldAlert, ShieldCheck, LifeBuoy, PlayCircle } from "lucide-react";
import sacPopup from "../assets/smart-app-control-popup.jpg";
import {
  WINDOWS_DOWNLOAD_URL,
  WINDOWS_UPDATED_AT,
  WINDOWS_VERSION,
  WINDOWS_VIRUSTOTAL_URL,
} from "../lib/release-info";

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
    <div className="rounded-xl border bg-card p-4 shadow-card">
      <div className="flex items-center gap-2.5">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
          <Icon className="h-4 w-4" />
        </span>
        <h2 className="text-sm font-black sm:text-base">{title}</h2>
      </div>
      <div className="mt-2.5 text-xs font-semibold leading-5 text-muted-foreground sm:text-[13px] sm:leading-6">{children}</div>
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
        <div className="overflow-hidden rounded-2xl bg-hero-gradient p-5 text-primary-foreground sm:p-6">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] opacity-85">
            Windows · v{WINDOWS_VERSION} · Updated {WINDOWS_UPDATED_AT}
          </p>
          <h1 className="mt-1.5 text-xl font-black sm:text-2xl">VidyaX for Windows</h1>
          <p className="mt-1.5 text-xs font-semibold leading-5 opacity-90 sm:text-[13px] sm:leading-6">
            Official installer for Windows 10 and 11 (64-bit). Follow the steps below to install it in a few minutes.
          </p>
          <a
            href={WINDOWS_DOWNLOAD_URL}
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-card px-4 py-2.5 text-xs font-black text-primary shadow-lg transition hover:-translate-y-0.5 sm:text-sm"
          >
            <Download className="h-4 w-4" /> Download VidyaX_Setup_v{WINDOWS_VERSION}.exe
          </a>
        </div>

        <Card icon={ShieldCheck} title="Safety check — VirusTotal report">
          <p>
            We scanned the installer with VirusTotal, which checks files using more than 70 security engines. Open the report to review the results before downloading.
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
            <li>Select the Download button above and download only from this official page.</li>
            <li>Wait for the browser to finish the download. Do not close the tab while it is downloading.</li>
            <li>If the browser says “not commonly downloaded,” select ⋯ → Keep or Keep anyway.</li>
          </ol>
        </Card>

        <Card icon={PlayCircle} title="Step 2 — Install & run">
          <ol className="list-decimal space-y-1.5 pl-5">
            <li>Open your Downloads folder and double-click <b>VidyaX_Setup_v{WINDOWS_VERSION}.exe</b>.</li>
            <li>When Windows asks “Do you want to allow this app…,” select <b>Yes</b>.</li>
            <li>If “Windows protected your PC” appears, select <b>More info → Run anyway</b>.</li>
            <li>Follow the setup instructions, then select Install and Finish.</li>
            <li>Open VidyaX from the Start menu or desktop shortcut and sign in.</li>
          </ol>
        </Card>

        <div className="rounded-xl border border-warning/40 bg-warning/10 p-4">
          <div className="flex items-center gap-2.5">
            <ShieldAlert className="h-4 w-4 shrink-0 text-foreground" />
            <h2 className="text-sm font-black sm:text-base">If this popup appears — Smart App Control</h2>
          </div>
          <img
            src={sacPopup}
            alt="Smart App Control blocked an app that may be unsafe popup"
            className="mt-3 w-full rounded-lg border shadow-card"
            loading="lazy"
          />
          <p className="mt-2.5 text-xs font-semibold leading-5 text-muted-foreground sm:text-[13px] sm:leading-6">
            This can appear when Windows does not yet recognize a new app publisher. Review the VirusTotal report above first. If you decide to continue, follow these steps:
          </p>
          <ol className="mt-2 list-decimal space-y-1 pl-5 text-xs font-semibold text-muted-foreground sm:text-[13px]">
            <li>Select “Okay” on the popup.</li>
            <li>Search for and open “Windows Security” from the Start menu.</li>
            <li>Go to App & browser control → Smart App Control settings.</li>
            <li>Read the warning carefully. Turning Smart App Control off can be permanent without resetting Windows.</li>
            <li>If you accept that limitation, select “Off,” confirm, and run the installer again.</li>
            <li>Complete the setup, then open VidyaX from the Start menu.</li>
          </ol>
          <p className="mt-1.5 text-[11px] font-bold text-muted-foreground">
            Important: Microsoft may require you to reset or reinstall Windows before Smart App Control can be turned on again.
          </p>
        </div>

        <Card icon={LifeBuoy} title="Need help?">
          <p>If you have trouble downloading or installing VidyaX, contact our support team for assistance.</p>
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
