import { ArrowRight, FileText, Linkedin, Mail } from "lucide-react";
import { hero } from "@/data/site";
import { contact } from "@/data/contact";

export const Hero = () => (
  <section id="top" className="relative overflow-hidden border-b border-line">
    {/* A soft wash rather than an image — keeps the page fast and the type dominant. */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(60rem_32rem_at_15%_-10%,var(--color-green-wash),transparent_70%)]"
    />

    <div className="shell relative py-20 md:py-32">
      <p className="eyebrow animate-rise opacity-0">{hero.eyebrow}</p>

      <h1
        className="mt-5 animate-rise text-5xl font-semibold leading-[0.95] tracking-tight opacity-0 md:text-7xl"
        style={{ animationDelay: "60ms" }}
      >
        {hero.name}
      </h1>


      <p
        className="mt-6 animate-rise text-sm text-ink-faint opacity-0"
        style={{ animationDelay: "180ms" }}
      >
        {hero.meta}
      </p>

      <p
        className="mt-1.5 animate-rise text-sm text-ink-faint opacity-0"
        style={{ animationDelay: "180ms" }}
      >
        {hero.location}
      </p>

      <div
        className="mt-10 flex animate-rise flex-wrap items-center gap-3 opacity-0"
        style={{ animationDelay: "240ms" }}
      >
        <a href="#work" className="btn">
          See selected work
          <ArrowRight className="h-4 w-4" />
        </a>
        <a href={contact.resume} target="_blank" rel="noopener noreferrer" className="btn-ghost">
          <FileText className="h-4 w-4" />
          Resume
        </a>
        <a href={`mailto:${contact.email}`} className="btn-ghost">
          <Mail className="h-4 w-4" />
          Email
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="rounded-full border border-line p-3 text-ink-soft transition-colors hover:border-green/40 hover:text-green"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);
