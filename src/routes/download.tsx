import { createFileRoute, Link } from "@tanstack/react-router";
import { Download, } from "lucide-react";
import { ShareCard } from "./index";
import {
  ANDROID_UPDATED_AT,
  ANDROID_VERSION,
  WINDOWS_UPDATED_AT,
  WINDOWS_VERSION,
} from "../lib/release-info";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { name: "google-site-verification", content: "DEJFR5l2Bgd1ltRMs0yaGFgZOlqzBfjn3u40t2TyEvk" },
      { title: "Download VidyaX for Android & Windows — Eduspark" },
      {
        name: "description",
        content:
          "Download VidyaX for Android or Windows. Get the official Android APK and Windows v2.1.0 installer from Eduspark. iOS coming soon.",
      },
      { property: "og:title", content: "Download VidyaX for Android & Windows" },
      {
        property: "og:description",
        content: "Get the official VidyaX Android APK and Windows v2.1.0 installer.",
      },
    ],
    links: [{ rel: "canonical", href: "https://vidyax.site/download" }],
  }),
  component: DownloadPage,
});

const defaultApkUrl = "https://github.com/Bhavishy-dev/Vidya-X-versions/releases/download/1.2.7/VidyaX_1.2.7_64Bit.apk";
const telegramCommunityUrl = "https://t.me/+J_bKwBOe70czNjI1";
const notifyIosUrl =
  "https://t.me/Edusparkcontactbot?text=" +
  encodeURIComponent(
    "Hi Eduspark Team,\n\nPlease notify me as soon as the VidyaX iOS version is released. I want to be among the first users to install it on my iPhone/iPad.\n\nThank you!",
  );
function DownloadPage() {
  const version = ANDROID_VERSION;
  const apkUrl = defaultApkUrl;
  const updatedAt = ANDROID_UPDATED_AT;

  const platforms = [
    { name: "Android", status: `v${version} · Updated ${updatedAt}`, href: apkUrl, active: true, cta: "Download APK" },
    { name: "iOS", status: "Coming soon", href: notifyIosUrl, active: false, cta: "Notify me" },
    { name: "Windows", status: `v${WINDOWS_VERSION} · Updated ${WINDOWS_UPDATED_AT}`, href: WINDOWS_DOWNLOAD_URL, active: true, cta: "Download for Windows" },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="text-2xl font-black text-brand-gradient">
          VidyaX
        </Link>
        <Link to="/faq" className="text-sm font-extrabold text-muted-foreground hover:text-primary">
          FAQ
        </Link>
      </nav>

      <section className="mx-auto w-full max-w-5xl px-5 py-8 sm:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">Download</p>
        <h1 className="mt-2 text-3xl font-black tracking-normal sm:text-4xl">
          Install VidyaX — start learning today.
        </h1>
        <p className="mt-3 max-w-2xl text-sm font-semibold text-muted-foreground sm:text-base">
          Official Android and Windows downloads from Eduspark. iOS is coming soon.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {platforms.map((p) => {
            const isAndroid = p.name === "Android";
            const cls = `rounded-2xl border bg-card p-5 shadow-card transition text-left ${
              p.active ? "hover:-translate-y-1 hover:border-primary" : "opacity-70"
            }`;
            const inner = (
              <>
                <h3 className="text-base font-black">{p.name}</h3>
                <p className="mt-1 text-xs font-bold text-muted-foreground">{p.status}</p>
                <p className="mt-4 text-sm font-black text-primary">{p.cta}</p>
              </>
            );
            if (isAndroid || p.name === "Windows") {
              return (
                <Link key={p.name} to={isAndroid ? "/android" : "/windows"} className={cls}>
                  {inner}
                </Link>
              );
            }
            return (
              <a key={p.name} href={p.href || "#"} target="_blank" rel="noreferrer" className={cls}>
                {inner}
              </a>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-2">
          <div className="rounded-2xl border bg-card p-5 shadow-card">
            <h2 className="text-lg font-black">Install on Android</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm font-semibold text-muted-foreground">
              <li>Tap the Android card and choose the recommended 64-bit build.</li>
              <li>Allow “Install unknown apps” for your browser if Android asks.</li>
              <li>Open the downloaded APK and tap Install.</li>
              <li>For a Play Protect warning, tap “More details” → “Install anyway”.</li>
              <li>Open VidyaX and sign in.</li>
            </ol>
          </div>

          <Link to="/windows" id="windows-download" className="block scroll-mt-6 rounded-2xl border border-primary/25 bg-card p-5 shadow-card transition hover:border-primary">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Download className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[10px] font-black uppercase text-primary">Windows · v{WINDOWS_VERSION}</p>
                <h2 className="text-lg font-black">Install on your PC</h2>
              </div>
            </div>
            <p className="mt-4 text-sm font-semibold text-muted-foreground">
              Download, install steps, Smart App Control help aur VirusTotal safety report — sab Windows page pe.
            </p>
            <p className="mt-3 text-sm font-black text-primary">Open Windows page →</p>
          </Link>
        </div>

        <ShareCard version={version} androidUrl={apkUrl} updatedAt={updatedAt} />

        <div className="mt-8 text-center">
          <a
            href={telegramCommunityUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-black text-primary hover:underline"
          >
            Get the next version first — Join Telegram →
          </a>
        </div>
        <div className="mt-3 text-center">
          <Link to="/" className="text-xs font-black text-muted-foreground hover:text-primary">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
