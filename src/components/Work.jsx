import { ArrowUpRight } from "lucide-react";
import { work } from "@/data/work";

/** Inline for the featured banner; stacked in the narrow sidebar column. */
const Meta = ({ item, stacked }) =>
  stacked ? (
    <dl className="font-sans text-xs uppercase tracking-[0.14em] text-ink-faint">
      <dd className="text-green">{item.kind}</dd>
      <dd className="mt-1.5 normal-case tracking-normal text-[0.8125rem]">{item.org}</dd>
      <dd className="mt-1.5">{item.year}</dd>
    </dl>
  ) : (
    <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink-faint">
      {item.kind} <span className="mx-1.5 text-line">/</span> {item.org}
      <span className="mx-1.5 text-line">/</span> {item.year}
    </p>
  );

/** Project thumbnail. Entries without an `image` simply render without one. */
const Figure = ({ item, className = "" }) =>
  !item.image ? null : (
    <a
      href={item.links[0]?.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`block overflow-hidden rounded-xl border border-line bg-paper-alt ${className}`}
    >
      <img
        src={item.image}
        alt={item.imageAlt || item.title}
        loading="lazy"
        decoding="async"
        className="w-full transition-transform duration-500 hover:scale-[1.02]"
      />
    </a>
  );

const Tags = ({ tags }) => (
  <ul className="mt-6 flex flex-wrap gap-2">
    {tags.map((tag) => (
      <li key={tag} className="tag">
        {tag}
      </li>
    ))}
  </ul>
);

const Links = ({ links }) =>
  links.length === 0 ? null : (
    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-green"
        >
          <span className="underline decoration-green/30 underline-offset-[3px] transition-colors group-hover:decoration-green">
            {link.label}
          </span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
        </a>
      ))}
    </div>
  );

/** The lead project gets its own band and a larger measure. */
const Featured = ({ item }) => (
  <article className="rounded-3xl border border-green/15 bg-green-wash/50 p-8 md:p-12">
    <div className="flex flex-wrap items-center gap-3">
      <span className="rounded-full bg-green px-3 py-1 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-paper">
        Featured
      </span>
      <Meta item={item} />
    </div>

    <h3 className="mt-6 font-display text-3xl font-semibold leading-tight md:text-4xl">
      {item.title}
    </h3>

    <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-ink-soft">{item.summary}</p>

    {item.note && (
      <p className="mt-5 max-w-2xl border-l-2 border-green/30 pl-4 text-[0.9375rem] italic leading-relaxed text-ink-soft">
        {item.note}
      </p>
    )}

    <Figure item={item} className="mt-8" />

    <Tags tags={item.tags} />
    <Links links={item.links} />
  </article>
);

const Standard = ({ item }) => (
  <article className="border-t border-line py-10 md:grid md:grid-cols-[14rem_1fr] md:gap-16">
    <div className="md:pt-1.5">
      <Meta item={item} stacked />
    </div>

    <div className="mt-4 md:mt-0">
      <h3 className="font-display text-2xl font-semibold leading-snug">{item.title}</h3>
      <p className="mt-4 max-w-2xl leading-relaxed text-ink-soft">{item.summary}</p>

      {item.note && (
        <p className="mt-4 max-w-2xl border-l-2 border-line pl-4 text-[0.9375rem] italic leading-relaxed text-ink-faint">
          {item.note}
        </p>
      )}

      <Figure item={item} className="mt-6 max-w-2xl" />

      <Tags tags={item.tags} />
      <Links links={item.links} />
    </div>
  </article>
);

export const Work = () => {
  const featured = work.filter((w) => w.featured);
  const rest = work.filter((w) => !w.featured);

  return (
    <section id="work" className="border-b border-line py-20 md:py-28">
      <div className="shell">
        <p className="eyebrow">Selected work</p>
        <h2 className="section-title mt-4 max-w-2xl">
          Analysis built to be used, not just delivered
        </h2>

        <div className="mt-12 space-y-12">
          {featured.map((item) => (
            <Featured key={item.slug} item={item} />
          ))}
        </div>

        <div className="mt-6">
          {rest.map((item) => (
            <Standard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
