import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import ownerPhoto from "../assets/about-nitesh.jpg";
import developerPhoto from "../assets/about-bhavishy.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { name: "google-site-verification", content: "DEJFR5l2Bgd1ltRMs0yaGFgZOlqzBfjn3u40t2TyEvk" },
      { title: "About Us — VidyaX by Eduspark" },
      {
        name: "description",
        content:
          "Meet the people behind VidyaX (Vidya X) — Nitesh Prakash, Founder & CEO, and Bhavishy Gurjar, Developer. Learn the vision and story of Eduspark's free learning platform.",
      },
      { property: "og:title", content: "About Us — VidyaX" },
      {
        property: "og:description",
        content:
          "The story, vision and team behind VidyaX (Eduspark) — free quality education for every student.",
      },
      // Disable pinch/page zoom on this page only (user request)
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
      },
    ],
    links: [{ rel: "canonical", href: "https://vidyax.site/about" }],
  }),
  component: AboutPage,
});

const NITESH_QUOTE =
  '"When it\'s your turn to be the hammer, hit hard — because when you were the nail, no one had mercy on you."';

function CopyQuoteButton() {
  const [copied, setCopied] = useState(false);

  const copyQuote = async () => {
    try {
      await navigator.clipboard.writeText(NITESH_QUOTE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — silently ignore
    }
  };

  return (
    <button
      type="button"
      onClick={copyQuote}
      className="shrink-0 rounded-lg border border-primary/30 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-primary transition-colors hover:bg-primary/10"
    >
      {copied ? "Copied ✓" : "Copy"}
    </button>
  );
}

function PersonHeader({
  photo,
  alt,
  initials,
  name,
  role,
  highlight,
}: {
  photo: string;
  alt: string;
  initials: string;
  name: string;
  role: string;
  highlight?: string;
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5">
      <div className="relative mx-auto h-32 w-32 shrink-0 overflow-hidden rounded-2xl ring-2 ring-primary/25 sm:mx-0 sm:h-36 sm:w-36 lg:h-40 lg:w-40">
        <img src={photo} alt={alt} className="h-full w-full object-cover" loading="lazy" />
        <span className="absolute bottom-1.5 left-1.5 rounded-md bg-background/85 px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wide text-primary backdrop-blur">
          {initials}
        </span>
      </div>
      <div className="text-center sm:text-left">
        <h2 className="text-lg font-black sm:text-xl">{name}</h2>
        <p className="mt-0.5 text-[11px] font-bold text-muted-foreground">{role}</p>
        {highlight && (
          <p className="mt-2 inline-block rounded-md bg-primary/10 px-2 py-1 text-[10px] font-black uppercase tracking-wider text-primary">
            {highlight}
          </p>
        )}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-4xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="text-2xl font-black text-brand-gradient">
          VidyaX
        </Link>
        <Link to="/" className="text-sm font-extrabold text-muted-foreground hover:text-primary">
          Home
        </Link>
      </nav>

      <article className="mx-auto w-full max-w-4xl px-5 pb-16 sm:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">About Us</p>
        <h1 className="mt-2 text-3xl font-black sm:text-4xl">The People Behind VidyaX</h1>
        <p className="mt-2 max-w-2xl text-xs font-bold text-muted-foreground">
          VidyaX is built by a small team at Eduspark with one goal — free, quality education for
          every student.
        </p>

        <div className="mt-10 space-y-12">
          {/* Owner */}
          <section className="border-t border-border pt-10">
            <PersonHeader
              photo={ownerPhoto}
              alt="Nitesh Prakash, Founder & CEO of VidyaX"
              initials="NP"
              name="Nitesh Prakash"
              role="Founder & CEO, VidyaX — Eduspark · Bihar, India"
              highlight="Founder & CEO"
            />

            <div className="mt-6 space-y-4 text-[13px] leading-6 text-foreground/90">
              <p>
                I'm Nitesh Prakash, Founder &amp; CEO of VidyaX, from Bihar, India. I come from a
                PCB background and am currently pursuing my journey as a medical student, but{" "}
                <span className="font-bold text-primary">
                  technology has always been one of my strongest interests
                </span>
                . I started exploring programming seriously in Class 9, and since then, I have kept
                learning, experimenting, failing, improving, and building. Over time, I learned
                HTML, CSS and JavaScript, moved into TypeScript and Next.js, and developed a deep
                interest in Artificial Intelligence, research, and emerging technologies.{" "}
                <span className="font-bold text-primary">
                  I still consider myself a learner, because I believe the day you stop learning is
                  the day you stop growing.
                </span>
              </p>
              <p>
                My vision behind VidyaX is simple:{" "}
                <span className="font-bold text-primary">
                  quality education should not become a privilege only for those who can afford
                  expensive courses and batches.
                </span>{" "}
                There are thousands of talented students who have the ability to achieve something
                extraordinary but are held back simply because they cannot afford the right
                resources. I want VidyaX to help bridge that gap by making useful educational
                resources, guidance, and learning opportunities accessible to as many students as
                possible — while continuously working toward responsible and sustainable ways of
                doing so.
              </p>
              <p>
                I believe intentions matter, but so does the path we choose. My ambition is to
                build something that genuinely helps students and creates an impact larger than
                myself.
              </p>
              <p>
                Beyond technology and ambition, I strongly believe in{" "}
                <span className="font-bold text-primary">
                  love, faith, loyalty, respect, and character
                </span>
                . To me, being a gentleman is not about appearance — it is about the choices you
                make when nobody is watching.{" "}
                <span className="font-bold text-primary">
                  A true gentleman chooses love over lust, loyalty over temporary pleasure, and
                  respect over ego.
                </span>
              </p>

              <blockquote className="flex flex-wrap items-start justify-between gap-3 border-l-4 border-primary/50 py-2 pl-4 sm:items-center">
                <p className="text-[13px] font-semibold italic leading-6 text-foreground">
                  "When it's your turn to be the hammer, hit hard — because when you were the nail,
                  no one had mercy on you."
                </p>
                <CopyQuoteButton />
              </blockquote>
              <p className="text-[11px] font-bold text-muted-foreground">
                — One thing my father once told me that has stayed with me ·{" "}
                <span className="font-black uppercase tracking-wider text-primary">
                  Nitesh Prakash
                </span>
              </p>
            </div>
          </section>

          {/* Developer — same pattern */}
          <section className="border-t border-border pt-10">
            <PersonHeader
              photo={developerPhoto}
              alt="Bhavishy Gurjar, Developer at VidyaX"
              initials="BG"
              name="Bhavishy Gurjar"
              role="Developer, VidyaX — Eduspark · Madhya Pradesh, India"
              highlight="Developer"
            />

            <div className="mt-6 space-y-4 text-[13px] leading-6 text-foreground/90">
              <p>
                I'm Bhavishy Gurjar, a Developer at VidyaX, from Madhya Pradesh, India. I come from
                a PCM background, with a strong interest in{" "}
                <span className="font-bold text-primary">
                  technology, logical thinking, and building digital solutions
                </span>
                . At VidyaX, I contribute to the development and improvement of the platform,
                working alongside the team to make the learning experience more reliable,
                accessible, and user-friendly.
              </p>
              <p>
                For me, development is not just about writing code —{" "}
                <span className="font-bold text-primary">
                  it is about solving real problems, learning continuously, and turning ideas into
                  something people can actually use.
                </span>{" "}
                As a student and developer, I'm constantly improving my skills and exploring new
                technologies while contributing to the long-term vision of VidyaX.
              </p>
            </div>
          </section>
        </div>

        <p className="mt-12 rounded-xl border border-border bg-muted/40 p-4 text-[11px] font-semibold text-muted-foreground">
          Have questions, feedback, or want to collaborate? Reach out through the support contacts
          listed on the homepage — or write to{" "}
          <a className="font-black text-primary underline" href="mailto:edusparkkoficial@gmail.com">
            edusparkkoficial@gmail.com
          </a>
          .
        </p>

        <div className="mt-10 text-center">
          <Link to="/" className="text-xs font-black text-primary hover:underline">
            Back to home
          </Link>
        </div>
      </article>
    </main>
  );
}
