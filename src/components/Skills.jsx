import { skills } from "@/data/site";

export const Skills = () => (
  <section id="skills" className="border-b border-line py-14 md:py-16">
    <div className="shell grid gap-8 sm:grid-cols-3">
      {skills.map((group) => (
        <div key={group.title}>
          <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-green">
            {group.title}
          </h2>
          <ul className="mt-4 space-y-1.5">
            {group.items.map((item) => (
              <li key={item} className="text-[0.9375rem] text-ink-soft">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);
