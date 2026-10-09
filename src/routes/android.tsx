import { createFileRoute, Link } from "@tanstack/react-router";
import { ANDROID_VARIANTS } from "../components/AndroidDownloadDialog";
import { ANDROID_VERSION, WINDOWS_VERSION } from "../lib/release-info";

export const Route = createFileRoute("/android")({
  head: () => ({
    meta: [
      { title: "Download VidyaX for Android — 64-bit APK" },
      {
        name: "description",
        content:
          "Download the VidyaX Android 64-bit APK — the build that works on almost every modern phone. Direct download from Eduspark.",
      },
      { property: "og:title", content: "Download VidyaX for Android" },
      {
        property: "og:description",
        content: "The VidyaX 64-bit Android APK, ready to install on almost any phone.",
      },
    ],
  }),
  component: AndroidPage,
});

function AndroidPage() {
  const version = ANDROID_VERSION;
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="text-2xl font-black text-brand-gradient">
          VidyaX
        </Link>
        <Link
          to="/download"
          className="text-sm font-extrabold text-muted-foreground hover:text-primary"
        >
          Downloads
        </Link>
      </nav>

      <section className="mx-auto w-full max-w-3xl px-5 pb-16 pt-2 sm:px-8">
        <div className="overflow-hidden rounded-2xl bg-hero-gradient p-6 text-primary-foreground sm:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.22em] opacity-85">
            Android · v{version}
          </p>
          <h1 className="mt-2 text-2xl font-black sm:text-3xl">Download for Android</h1>
          <p className="mt-2 text-xs font-semibold leading-6 opacity-90 sm:text-sm">
            One build covers almost every phone — the <span className="font-black">64-bit</span> APK installs on nearly all Android devices from 2018 onwards. For a normal PC installation, use the official Windows v{WINDOWS_VERSION} setup on the Downloads page.
          </p>
        </div>

        <div className="mt-5 space-y-3 sm:mt-7">
          {ANDROID_VARIANTS.map((v) => (
            <a
              key={v.id}
              href={v.url}
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border bg-card p-4 shadow-card transition hover:-translate-y-0.5 hover:border-primary focus:outline-none focus:ring-4 focus:ring-ring/30 sm:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <h2 className="text-base font-black sm:text-lg">{v.label}</h2>
                    {v.recommended && (
                      <span className="rounded-full bg-primary px-2 py-0.5 text-[9px] font-black uppercase tracking-wider text-primary-foreground">
                        Recommended
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-[11px] font-bold text-primary sm:text-xs">
                    {v.subtitle}
                  </p>
                  <p className="mt-1.5 text-[11px] font-semibold leading-5 text-muted-foreground sm:text-xs">
                    {v.devices}
                  </p>
                </div>
                <span className="shrink-0 text-xs font-black text-primary">Download</span>
              </div>
            </a>
          ))}
        </div>

        <p className="mt-6 text-center text-[11px] font-bold text-muted-foreground">
          Trouble installing? Write to <span className="text-primary">support</span> — we’ll help you through it.
        </p>

        <div className="mt-8 text-center">
          <Link to="/" className="text-xs font-black text-muted-foreground hover:text-primary">
            ← Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
