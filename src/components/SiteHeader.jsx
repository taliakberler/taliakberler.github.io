import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work", },
  { label: "Experience", href: "#experience" },
  { label: "Writing", href: "#writing" },
];

export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors duration-300",
        scrolled ? "border-b border-line bg-paper/90 backdrop-blur-sm" : "border-b border-transparent"
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-ink">
          Talia Berler
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-green"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="rounded-full border border-green/35 px-4 py-1.5 text-sm font-medium text-green transition-colors hover:border-green hover:bg-green-wash"
          >
            Get in touch
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
