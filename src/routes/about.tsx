import { createFileRoute, Link } from "@tanstack/react-router";

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
    ],
    links: [{ rel: "canonical", href: "https://vidyax.site/about" }],
  }),
  component: AboutPage,
});

function PersonAvatar({ initials }: { initials: string }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-soft text-sm font-black text-primary ring-1 ring-primary/20">
      {initials}
    </div>
  );
}

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" className="text-2xl font-black text-brand-gradient">
          VidyaX
        </Link>
        <Link to="/" className="text-sm font-extrabold text-muted-foreground hover:text-primary">
          Home
        </Link>
      </nav>

      <article className="mx-auto w-full max-w-3xl px-5 pb-16 sm:px-8">
        <p className="text-xs font-black uppercase tracking-[0.2em] text-primary">About Us</p>
        <h1 className="mt-2 text-3xl font-black sm:text-4xl">The People Behind VidyaX</h1>
        <p className="mt-2 text-xs font-bold text-muted-foreground">
          VidyaX is built by a small team at Eduspark with one goal — free, quality education for
          every student.
        </p>

        <div className="prose prose-sm mt-8 max-w-none space-y-8 text-sm font-medium leading-7 text-foreground">
          {/* Owner */}
          <section className="rounded-2xl border border-primary/20 bg-brand-soft p-5">
            <div className="flex items-center gap-4">
              <PersonAvatar initials="NP" />
              <div>
                <h2 className="text-lg font-black text-primary">Nitesh Prakash</h2>
                <p className="text-xs font-bold text-muted-foreground">
                  Founder &amp; CEO, VidyaX — Eduspark · Bihar, India
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <p>
                I'm Nitesh Prakash, Founder &amp; CEO of VidyaX, from Bihar, India. I come from a
                PCB background and am currently pursuing my journey as a medical student, but
                technology has always been one of my strongest interests. I started exploring
                programming seriously in Class 9, and since then, I have kept learning,
                experimenting, failing, improving, and building. Over time, I learned HTML, CSS and
                JavaScript, moved into TypeScript and Next.js, and developed a deep interest in
                Artificial Intelligence, research, and emerging technologies. I still consider
                myself a learner, because I believe the day you stop learning is the day you stop
                growing.
              </p>
              <p>
                My vision behind VidyaX is simple: quality education should not become a privilege
                only for those who can afford expensive courses and batches. There are thousands of
                talented students who have the ability to achieve something extraordinary but are
                held back simply because they cannot afford the right resources. I want VidyaX to
                help bridge that gap by making useful educational resources, guidance, and learning
                opportunities accessible to as many students as possible — while continuously
                working toward responsible and sustainable ways of doing so.
              </p>
              <p>
                I believe intentions matter, but so does the path we choose. My ambition is to
                build something that genuinely helps students and creates an impact larger than
                myself.
              </p>
              <p>
                Beyond technology and ambition, I strongly believe in love, faith, loyalty,
                respect, and character. To me, being a gentleman is not about appearance — it is
                about the choices you make when nobody is watching. A true gentleman chooses love
                over lust, loyalty over temporary pleasure, and respect over ego.
              </p>
              <blockquote className="rounded-xl border-l-4 border-primary/40 bg-background/60 p-4 text-sm italic">
                "When it's your turn to be the hammer, hit hard — because when you were the nail,
                no one had mercy on you."
                <footer className="mt-2 text-xs font-bold not-italic text-muted-foreground">
                  — One thing my father once told me that has stayed with me
                </footer>
              </blockquote>
              <p className="text-right text-xs font-black uppercase tracking-[0.15em] text-primary">
                — Nitesh Prakash
              </p>
            </div>
          </section>

          {/* Developer */}
          <section className="rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center gap-4">
              <PersonAvatar initials="BG" />
              <div>
                <h2 className="text-lg font-black">Bhavishy Gurjar</h2>
                <p className="text-xs font-bold text-muted-foreground">
                  Developer, VidyaX — Eduspark · Madhya Pradesh, India
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-4">
              <p>
                I'm Bhavishy Gurjar, a Developer at VidyaX, from Madhya Pradesh, India. I come from
                a PCM background, with a strong interest in technology, logical thinking, and
                building digital solutions. At VidyaX, I contribute to the development and
                improvement of the platform, working alongside the team to make the learning
                experience more reliable, accessible, and user-friendly.
              </p>
              <p>
                For me, development is not just about writing code — it is about solving real
                problems, learning continuously, and turning ideas into something people can
                actually use. As a student and developer, I'm constantly improving my skills and
                exploring new technologies while contributing to the long-term vision of VidyaX.
              </p>
            </div>
          </section>

          <p className="rounded-xl border border-border bg-muted/40 p-4 text-xs font-semibold text-muted-foreground">
            Have questions, feedback, or want to collaborate? Reach out through the support contacts
            listed on the homepage — or write to{" "}
            <a
              className="font-black text-primary underline"
              href="mailto:edusparkkoficial@gmail.com"
            >
              edusparkkoficial@gmail.com
            </a>
            .
          </p>
        </div>

        <div className="mt-10 text-center">
          <Link to="/" className="text-xs font-black text-primary hover:underline">
            Back to home
          </Link>
        </div>
      </article>
    </main>
  );
}
