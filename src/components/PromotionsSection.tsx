import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Megaphone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { promotionContactUrl, promotions } from "@/lib/promotions";

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
    return () => { carousel.off("select", syncSlide).off("reInit", syncSlide); };
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
    <section aria-labelledby="promotions-heading" className="mx-auto w-full max-w-6xl px-5 pb-3 pt-2 sm:px-8">
      <h2 id="promotions-heading" className="mb-3 flex items-center gap-2 text-base font-bold text-foreground sm:text-lg">
        <span className="relative mr-1 inline-flex h-6 w-8 items-center text-primary" aria-hidden="true">
          <Megaphone className="h-5 w-5" />
          <svg viewBox="0 0 12 24" className="absolute right-0 h-6 w-3 fill-none stroke-current" strokeWidth="1.8" strokeLinecap="round">
            <path d="M3 8 6 5 M4 12h5 M3 16l3 3" />
          </svg>
        </span>
        Promotions
      </h2>

      <div role="region" aria-roledescription="carousel" aria-label="Promotional banners"
        onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") { event.preventDefault(); carousel?.scrollNext(); }
          if (event.key === "ArrowLeft") { event.preventDefault(); carousel?.scrollPrev(); }
        }}>
        <div ref={viewportRef} className="overflow-hidden rounded-lg border bg-card">
          <div className="flex touch-pan-y">
            {promotions.map((promotion, index) => (
              <a key={promotion.id} href={promotion.href} target="_blank" rel="noopener noreferrer"
                aria-label={promotion.alt} tabIndex={index === activeIndex ? 0 : -1}
                className="block min-w-0 flex-[0_0_100%]">
                <img src={promotion.image} alt={promotion.alt} width={1366} height={768}
                  className="block aspect-[1366/768] w-full select-none object-contain"
                  draggable={false} fetchPriority={index === 0 ? "high" : "auto"} />
              </a>
            ))}
          </div>
        </div>
        <div aria-label="Promotion navigation" className="flex h-7 items-center justify-center gap-1">
          {promotions.map((promotion, index) => (
            <Button key={promotion.id} type="button" variant="ghost" size="icon"
              aria-label={`Show promotion ${index + 1}`} aria-pressed={index === activeIndex}
              onClick={() => carousel?.scrollTo(index)} className="h-7 w-8 rounded-full p-0">
              <span className={`block h-1.5 rounded-full transition-[width,background-color] duration-500 ease-in-out motion-reduce:transition-none ${index === activeIndex ? "w-5 bg-primary" : "w-1.5 bg-muted-foreground/40"}`} />
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 rounded-lg border bg-card px-3 py-2 sm:flex-nowrap sm:px-4">
        <div className="flex w-full min-w-0 items-center gap-2 sm:w-auto">
          <MessageCircle aria-hidden="true" className="hidden h-4 w-4 shrink-0 text-primary sm:block" />
          <p className="whitespace-nowrap text-xs font-normal leading-5 text-muted-foreground sm:text-sm">Want to promote your content or application?</p>
        </div>
        <Button asChild size="sm" className="ml-auto h-8 shrink-0 gap-1.5 px-3 text-xs">
          <a href={promotionContactUrl} target="_blank" rel="noopener noreferrer"><Send aria-hidden="true" className="!h-3.5 !w-3.5" />Contact</a>
        </Button>
      </div>
    </section>
  );
}
