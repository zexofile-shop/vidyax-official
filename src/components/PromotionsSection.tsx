import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Megaphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { promotionContactUrl, promotions } from "@/lib/promotions";

/* Megaphone icon with the little "sound lines" – reused in heading and contact card */
function MegaphoneIcon({ className = "" }: { className?: string }) {
  return (
    <span
      className={`relative inline-flex h-6 w-8 shrink-0 items-center text-primary ${className}`}
      aria-hidden="true"
    >
      <Megaphone className="h-5 w-5" />
      <svg
        viewBox="0 0 12 24"
        className="absolute right-0 h-6 w-3 fill-none stroke-current"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <path d="M3 8 6 5 M4 12h5 M3 16l3 3" />
      </svg>
    </span>
  );
}

export default function PromotionsSection() {
  const [viewportRef, carousel] = useEmblaCarousel({ loop: true, duration: 35 });
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const syncSlide = useCallback(() => {
    if (carousel) setActiveIndex(carousel.selectedScrollSnap());
  }, [carousel]);

  useEffect(() => {
    if (!carousel) return;
    syncSlide();
    carousel.on("select", syncSlide).on("reInit", syncSlide);
    return () => {
      carousel.off("select", syncSlide).off("reInit", syncSlide);
    };
  }, [carousel, syncSlide]);

  useEffect(() => {
    if (!carousel || paused || promotions.length < 2) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) carousel.scrollNext();
    }, 5000);
    return () => window.clearInterval(timer);
  }, [carousel, paused, activeIndex]);

  if (!promotions.length) return null;

  return (
    <section
      aria-labelledby="promotions-heading"
      className="mx-auto w-full max-w-6xl px-5 pb-3 pt-2 sm:px-8"
    >
      <h2
        id="promotions-heading"
        className="mb-3 flex items-center gap-2 text-base font-bold text-foreground sm:text-lg"
      >
        <MegaphoneIcon className="mr-1" />
        Promotions
      </h2>

      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="Promotional banners"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            carousel?.scrollNext();
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            carousel?.scrollPrev();
          }
        }}
      >
        <div ref={viewportRef} className="overflow-hidden rounded-xl border bg-card">
          <div className="flex touch-pan-y">
            {promotions.map((promotion, index) => (
              <a
                key={promotion.id}
                href={promotion.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={promotion.alt}
                tabIndex={index === activeIndex ? 0 : -1}
                className="block min-w-0 flex-[0_0_100%]"
              >
                <img
                  src={promotion.image}
                  alt={promotion.alt}
                  width={1366}
                  height={768}
                  className="block aspect-[1366/768] w-full select-none object-contain"
                  draggable={false}
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
              </a>
            ))}
          </div>
        </div>

        <div
          aria-label="Promotion navigation"
          className="flex h-7 items-center justify-center gap-1"
        >
          {promotions.map((promotion, index) => (
            <Button
              key={promotion.id}
              type="button"
              variant="ghost"
              size="icon"
              aria-label={`Show promotion ${index + 1}`}
              aria-pressed={index === activeIndex}
              onClick={() => carousel?.scrollTo(index)}
              className="h-7 w-8 rounded-full p-0"
            >
              <span
                className={`block h-1.5 rounded-full transition-[width,background-color] duration-500 ease-in-out motion-reduce:transition-none ${
                  index === activeIndex ? "w-5 bg-primary" : "w-1.5 bg-muted-foreground/40"
                }`}
              />
            </Button>
          ))}
        </div>
      </div>

      {/* Contact card – always ONE row (icon | text | button), mobile + desktop */}
      <div className="mt-2 flex items-center gap-3 rounded-2xl border bg-card px-3 py-2.5 shadow-sm sm:gap-4 sm:px-5 sm:py-3">
        <MegaphoneIcon />

        <p className="min-w-0 flex-1 text-[13px] font-semibold leading-snug text-muted-foreground sm:text-base">
          Want to promote your content or application?
        </p>

        <Button
          asChild
          className="h-10 shrink-0 rounded-xl px-5 text-sm font-bold shadow-sm sm:h-11 sm:px-7 sm:text-base"
        >
          <a href={promotionContactUrl} target="_blank" rel="noopener noreferrer">
            Contact
          </a>
        </Button>
      </div>
    </section>
  );
}
