import { FileText, Mail, MapPin, Phone, QrCode } from "lucide-react";
import { Link } from "react-router-dom";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { contact } from "@/data/contact";
import { contactCopy } from "@/data/site";

/** Sits on the dark band, so every colour here is paper-on-forest. */
const Row = ({ href, icon, label, value, external }) => (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className="group flex items-center gap-4 border-t border-paper/15 py-4"
  >
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-paper/20 text-green-light transition-colors group-hover:border-green-light/60 group-hover:bg-paper/10">
      {icon}
    </span>
    <span className="min-w-0">
      <span className="block font-sans text-xs uppercase tracking-[0.14em] text-paper/50">
        {label}
      </span>
      <span className="block truncate text-[0.9375rem] text-paper transition-colors group-hover:text-green-light">
        {value}
      </span>
    </span>
  </a>
);

export const Contact = () => (
  <section id="contact" className="bg-forest py-20 text-paper md:py-28">
    <div className="shell grid gap-14 md:grid-cols-2 md:gap-20">
      <div>
        <h2 className="font-display text-3xl font-semibold leading-tight text-paper md:text-4xl">
          {contactCopy.title}
        </h2>
        <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-paper/70">
          {contactCopy.body}
        </p>

        <p className="mt-8 flex items-center gap-2 text-sm text-paper/60">
          <MapPin className="h-4 w-4 text-green-light" />
          {contact.location}
        </p>

        <Link
          to="/card"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-paper/25 px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:border-paper/60 hover:bg-paper/10"
        >
          <QrCode className="h-4 w-4" />
          Digital business card
        </Link>
      </div>

      <div>
        <Row
          href={`mailto:${contact.email}`}
          icon={<Mail className="h-4 w-4" />}
          label="Email"
          value={contact.email}
        />
        <Row
          href={`tel:${contact.phone}`}
          icon={<Phone className="h-4 w-4" />}
          label="Phone"
          value={contact.phoneDisplay}
        />
        <Row
          href={contact.linkedin}
          external
          icon={<span className="font-display text-sm font-bold">in</span>}
          label="LinkedIn"
          value="in/talia-berler"
        />
        <Row
          href={contact.github}
          external
          icon={<SiGithub className="h-4 w-4" />}
          label="GitHub"
          value="github.com/taliakberler"
        />
        {contact.hasResume && (
          <Row
            href={contact.resume}
            external
            icon={<FileText className="h-4 w-4" />}
            label="Résumé"
            value="One page (PDF)"
          />
        )}
        <Row
          href={contact.cv}
          external
          icon={<FileText className="h-4 w-4" />}
          label="Full CV"
          value="Publications & detail (PDF)"
        />
      </div>
    </div>
  </section>
);
