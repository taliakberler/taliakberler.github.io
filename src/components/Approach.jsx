import { about, capabilities } from "@/data/site";

export const Approach = () => (
  <section id="approach" className="border-b border-line py-20 md:py-28">
    <div className="shell">
      <div className="grid gap-12 md:grid-cols-[14rem_1fr] md:gap-16">
        <div>
          <p className="eyebrow">{about.eyebrow}</p>
        </div>

        <div>
          <h2 className="section-title max-w-2xl">{about.title}</h2>

          <div className="mt-8 space-y-6 text-[1.0625rem] leading-relaxed text-ink-soft">
            {about.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:mt-20 md:grid-cols-3">
        {capabilities.map((cap) => (
          <div key={cap.title} className="bg-paper p-7">
            <h3 className="font-display text-xl font-semibold leading-snug">{cap.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{cap.body}</p>
            <ul className="mt-5 space-y-1.5">
              {cap.detail.map((d) => (
                <li key={d} className="text-xs text-ink-faint">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);
