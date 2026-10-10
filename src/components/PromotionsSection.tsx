import { useState } from "react";
import { ArrowUpRight, Mail, Megaphone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { promotionContacts, promotions } from "@/lib/promotions";

export default function PromotionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activePromotion = promotions[activeIndex] ?? promotions[0];

  if (!activePromotion) return null;

  return (
    <section aria-labelledby="promotions-heading" className="mx-auto w-full max-w-7xl px-5 pb-6 pt-4 sm:px-8 lg:pb-10">
      <h2 id="promotions-heading" className="mb-5 flex items-center gap-3 border-l-4 border-primary pl-4 text-xl font-black text-foreground sm:mb-7 sm:text-2xl">
        <Megaphone aria-hidden="true" className="h-5 w-5 text-primary sm:h-6 sm:w-6" />
        Promotions
      </h2>

      <div className="overflow-hidden rounded-2xl border bg-card">
        <img key={activePromotion.id} src={activePromotion.image} alt={activePromotion.alt} width={1366} height={768} className="block aspect-[1366/768] w-full object-contain" fetchPriority="high" />
      </div>

      <div aria-label="Promotion banners" className="flex h-12 items-center justify-center gap-2 sm:h-14">
        {promotions.map((promotion, index) => (
          <Button key={promotion.id} type="button" variant="ghost" size="icon" aria-label={`Show promotion ${index + 1}`} aria-pressed={index === activeIndex} onClick={() => setActiveIndex(index)} className="h-8 w-10 rounded-full p-0">
            <span className={`block h-2.5 rounded-full transition-all motion-reduce:transition-none ${index === activeIndex ? "w-8 bg-primary" : "w-2.5 bg-muted"}`} />
          </Button>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3 rounded-2xl border bg-card px-4 py-4 sm:gap-6 sm:px-6 sm:py-5">
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">
          <Megaphone aria-hidden="true" className="h-5 w-5 shrink-0 text-primary sm:h-6 sm:w-6" />
          <p className="text-xs font-bold leading-5 text-muted-foreground sm:text-base">Want to promote your content or application?</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="h-10 shrink-0 rounded-xl px-4 text-xs font-extrabold sm:h-12 sm:px-6 sm:text-sm">Contact</Button>
          </DialogTrigger>
          <DialogContent className="w-[calc(100%-2rem)] max-w-md rounded-xl p-5 sm:p-6">
            <DialogHeader>
              <DialogTitle>Promotion enquiries</DialogTitle>
              <DialogDescription>Contact our team</DialogDescription>
            </DialogHeader>
            <div className="grid gap-3">
              {promotionContacts.map((contact) => (
                <Button key={contact.channel} asChild variant="outline" className="h-auto justify-start gap-3 whitespace-normal rounded-lg p-4 text-left">
                  <a href={contact.href} target={contact.channel === "Telegram" ? "_blank" : undefined} rel={contact.channel === "Telegram" ? "noopener noreferrer" : undefined}>
                    {contact.channel === "Telegram" ? <Send className="text-primary" /> : <Mail className="text-primary" />}
                    <span className="min-w-0 flex-1"><span className="block font-bold">{contact.title}</span><span className="mt-1 block text-xs text-muted-foreground">{contact.responseTime} · {contact.channel}</span></span>
                    <ArrowUpRight aria-hidden="true" className="text-muted-foreground" />
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