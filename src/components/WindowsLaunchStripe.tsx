import { useState } from "react";
import { Download, X } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";

export default function WindowsLaunchStripe() {
  const [visible, setVisible] = useState(true);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  if (!visible) return null;

  const goToWindows = () => {
    if (pathname === "/") {
      document.getElementById("download")?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    window.location.assign("/download#windows-download");
  };

  return (
    <div className="fixed inset-x-0 bottom-3 z-[9998] flex justify-center px-3 sm:bottom-5">
      <div className="flex w-full max-w-lg items-center gap-3 rounded-xl border bg-card/95 p-2.5 shadow-2xl backdrop-blur">
        <button
          type="button"
          onClick={goToWindows}
          className="flex min-w-0 flex-1 items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="Go to the Windows download"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
            <Download className="h-4 w-4" strokeWidth={2.6} />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-xs font-black sm:text-sm">VidyaX for Windows is live</span>
            <span className="block truncate text-[10px] font-bold text-muted-foreground sm:text-xs">v2.1.0 · Tap to download</span>
          </span>
        </button>
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Dismiss Windows announcement"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-muted-foreground transition hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" strokeWidth={2.6} />
        </button>
      </div>
    </div>
  );
}