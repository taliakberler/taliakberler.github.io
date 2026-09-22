import { ArrowUpRight } from "lucide-react";
import { certifications, publications, recognition } from "@/data/publications";

/**
 * A recognition or certification. Entries carrying an `href` link to the
 * certificate itself, so the claim is checkable rather than just asserted.
 * The year stays on its own column and the arrow rides the label, so a long
 * title wraps without either one orphaning.
 */
const Credential = ({ item, sub }) => (
  <li className="flex items-baseline justify-between gap-x-4">
    <span className="min-w-0 flex-1 text-[0.9375rem]">
      {item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink underline decoration-green/30 underline-offset-[3px] transition-colors hover:text-green hover:decoration-green"
        >
          {item.label}
          <ArrowUpRight className="ml-1 inline h-3 w-3 shrink-0 align-[-1px] text-green" />
        </a>
      ) : (
        <span className="text-ink">{item.label}</span>
      )}
      {sub && <span className="text-ink-faint"> · {sub}</span>}
    </span>

    {item.year && (
      <span className="shrink-0 font-sans text-xs tracking-wide text-ink-faint">{item.year}</span>
    )}
  </li>
);

export const Writing = () => (
  <section id="writing" className="border-b border-line py-20 md:py-28">
    <div className="shell">
      <p className="eyebrow">Publications</p>
      <h2 className="section-title mt-4 max-w-2xl">Peer-reviewed and preprint work</h2>

      <ol className="mt-12">
        {publications.map((pub) => (
          <li key={pub.href} className="border-t border-line py-7 md:grid md:grid-cols-[14rem_1fr] md:gap-16">
            <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink-faint">
              {pub.year}
              {pub.lead && <span className="ml-2 text-green">First author</span>}
            </p>

            <div className="mt-2 md:mt-0">
              <a
                href={pub.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-start gap-1.5"
              >
                <span className="font-display text-lg font-semibold leading-snug text-ink underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-green/40">
                  {pub.title}
                </span>
                <ArrowUpRight className="mt-1.5 h-3.5 w-3.5 shrink-0 text-green" />
              </a>
              <p className="mt-2 text-sm text-ink-soft">{pub.authors}</p>
              <p className="text-sm italic text-ink-faint">{pub.venue}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-16 grid gap-12 border-t border-line pt-12 md:grid-cols-2">
        <div>
          <p className="eyebrow">Recognition</p>
          <ul className="mt-5 space-y-3">
            {recognition.map((item) => (
              <Credential key={item.label} item={item} sub={item.detail} />
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Certifications</p>
          <ul className="mt-5 space-y-3">
            {certifications.map((item) => (
              <Credential key={item.label} item={item} sub={item.issuer} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);
