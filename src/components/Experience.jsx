import { education, experience } from "@/data/experience";

export const Experience = () => (
  <section id="experience" className="border-b border-line bg-paper-alt py-20 md:py-28">
    <div className="shell">
      <p className="eyebrow">Experience</p>
      <h2 className="section-title mt-4 max-w-2xl">Where the work has happened</h2>

      <div className="mt-12">
        {experience.map((role) => (
          <article
            key={role.org}
            className="border-t border-line py-9 md:grid md:grid-cols-[14rem_1fr] md:gap-16"
          >
            <div className="md:pt-1">
              <p className="font-sans text-xs uppercase tracking-[0.14em] text-ink-faint">
                {role.period}
              </p>
              {role.current && (
                <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-green">
                  <span className="h-1.5 w-1.5 rounded-full bg-green" />
                  Current
                </span>
              )}
            </div>

            <div className="mt-3 md:mt-0">
              <h3 className="font-display text-xl font-semibold">{role.org}</h3>
              <p className="mt-1 text-sm text-ink-soft">
                {role.role} <span className="mx-1 text-line">·</span> {role.place}
              </p>

              <ul className="mt-4 space-y-2.5">
                {role.points.map((point) => (
                  <li key={point} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-soft">
                    <span aria-hidden="true" className="mt-2.5 h-px w-3 shrink-0 bg-green/40" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-14 border-t border-line pt-10 md:grid md:grid-cols-[14rem_1fr] md:gap-16">
        <p className="eyebrow">Education</p>
        <dl className="mt-4 space-y-5 md:mt-0">
          {education.map((item) => (
            <div key={item.degree} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <div>
                <dt className="font-display text-lg font-semibold">{item.degree}</dt>
                <dd className="text-sm text-ink-soft">
                  {item.school} <span className="mx-1 text-line">·</span> {item.detail}
                </dd>
              </div>
              <span className="font-sans text-xs uppercase tracking-[0.14em] text-ink-faint">
                {item.year}
              </span>
            </div>
          ))}
        </dl>
      </div>
    </div>
  </section>
);
