import { useEffect, useState } from "react";
import { ArrowUpRight, Clock3, Mail, Megaphone, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { promotionContacts, promotions } from "@/lib/promotions";

export default function PromotionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const activePromotion = promotions[activeIndex] ?? promotions[0];

  useEffect(() => {
    if (paused || contactOpen || promotions.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % promotions.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [paused, contactOpen]);

  if (!activePromotion) return null;

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

      <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className="overflow-hidden rounded-lg border bg-card">
        <img key={activePromotion.id} src={activePromotion.image} alt={activePromotion.alt} width={1366} height={768} className="block aspect-[1366/768] w-full object-contain" fetchPriority="high" />
      </div>

      <div aria-label="Promotion banners" onFocusCapture={() => setPaused(true)} onBlurCapture={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }} className="flex h-7 items-center justify-center gap-1">
        {promotions.map((promotion, index) => (
          <Button key={promotion.id} type="button" variant="ghost" size="icon" aria-label={`Show promotion ${index + 1}`} aria-pressed={index === activeIndex} onClick={() => setActiveIndex(index)} className="h-7 w-8 rounded-full p-0">
            <span className={`block h-1.5 rounded-full transition-all motion-reduce:transition-none ${index === activeIndex ? "w-5 bg-primary" : "w-1.5 bg-muted-foreground/40"}`} />
          </Button>
        ))}
      </div>

      <div className="flex items-center justify-between gap-2 rounded-lg border bg-card px-3 py-2 sm:px-4">
        <div className="flex min-w-0 items-center gap-2">
          <MessageCircle aria-hidden="true" className="h-4 w-4 shrink-0 text-primary" />
          <p className="text-[11px] font-medium leading-4 text-muted-foreground sm:text-xs">Want to promote your content or application?</p>
        </div>
        <Dialog open={contactOpen} onOpenChange={setContactOpen}>
          <DialogTrigger asChild>
            <Button size="sm" className="h-8 shrink-0 gap-1.5 px-3 text-[11px]"><Send aria-hidden="true" className="!h-3 !w-3" />Contact</Button>
          </DialogTrigger>
          <DialogContent className="w-[calc(100%-2rem)] max-w-sm gap-3 rounded-lg p-4">
            <DialogHeader className="text-left">
              <DialogTitle className="flex items-center gap-2 text-sm"><MessageCircle aria-hidden="true" className="h-4 w-4 text-primary" />Promotion enquiries</DialogTitle>
              <DialogDescription className="text-xs">Contact our team</DialogDescription>
            </DialogHeader>
            <div className="grid gap-2">
              {promotionContacts.map((contact) => (
                <Button key={contact.channel} asChild variant="outline" className="h-auto justify-start gap-3 whitespace-normal rounded-lg border-border bg-muted/20 p-3 text-left shadow-none hover:border-primary/40">
                  <a href={contact.href} target={contact.channel === "Telegram" ? "_blank" : undefined} rel={contact.channel === "Telegram" ? "noopener noreferrer" : undefined}>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">{contact.channel === "Telegram" ? <Send aria-hidden="true" /> : <Mail aria-hidden="true" />}</span>
                    <span className="min-w-0 flex-1"><span className="block text-xs font-semibold">{contact.title}<span className="ml-1.5 text-[10px] font-normal text-muted-foreground">{contact.channel}</span></span><span className="mt-1 flex items-center gap-1 text-[10px] text-muted-foreground"><Clock3 aria-hidden="true" className="!h-3 !w-3" />{contact.responseTime}</span></span>
                    <ArrowUpRight aria-hidden="true" className="!h-3.5 !w-3.5 text-muted-foreground" />
                  </a>
                </Button>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}