import { ArrowUp } from "lucide-react";
import { contact } from "@/data/contact";

export const SiteFooter = () => (
  <footer className="bg-forest pb-12 text-on-forest/50">
    <div className="shell flex flex-wrap items-center justify-between gap-4 border-t border-on-forest/10 pt-8">
      <p className="text-xs">
        &copy; {new Date().getFullYear()} {contact.fullName}
      </p>
      <a
        href="#top"
        className="inline-flex items-center gap-2 text-xs transition-colors hover:text-on-forest"
      >
        Back to top
        <ArrowUp className="h-3.5 w-3.5" />
      </a>
    </div>
  </footer>
);
