import { useState } from "react";
import {
  Check,
  Copy,
  FileText,
  Globe,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  QrCode,
  Share2,
  UserPlus,
  X,
} from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { useToast } from "@/hooks/use-toast";
import { contact, CARD_URL } from "@/data/contact";

const VCARD_URL = "/talia-berler.vcf";
const QR_URL = "/qr/card-qr.svg";

/** One tappable row in the link list. */
const LinkRow = ({ href, icon, label, value, onCopy }) => (
  <div className="flex items-center gap-4 border-t border-line py-3.5">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex min-w-0 flex-1 items-center gap-4 text-left"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-wash text-green">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block font-sans text-xs uppercase tracking-[0.14em] text-ink-faint">
          {label}
        </span>
        <span className="block truncate text-[0.9375rem] text-ink">{value}</span>
      </span>
    </a>

    {onCopy && (
      <button
        onClick={onCopy.handler}
        aria-label={`Copy ${label.toLowerCase()}`}
        className="shrink-0 rounded-full p-2 text-ink-faint transition-colors hover:bg-green-wash hover:text-green"
      >
        {onCopy.copied ? <Check className="h-4 w-4 text-green" /> : <Copy className="h-4 w-4" />}
      </button>
    )}
  </div>
);

export const Card = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(null);
  const [showQr, setShowQr] = useState(false);

  const copy = (key, text, label) => async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      setTimeout(() => setCopied((c) => (c === key ? null : c)), 2000);
      toast({ title: `${label} copied`, description: text });
    } catch {
      toast({ title: "Couldn't copy", description: `Long-press to copy: ${text}` });
    }
  };

  const share = async () => {
    const data = {
      title: `${contact.fullName} — ${contact.title}`,
      text: `${contact.fullName}'s contact card`,
      url: CARD_URL,
    };
    if (navigator.share) {
      // A cancelled share sheet rejects; that isn't an error worth surfacing.
      try {
        await navigator.share(data);
      } catch {
        /* dismissed */
      }
    } else {
      copy("card", CARD_URL, "Card link")();
    }
  };

  return (
    <div className="min-h-screen bg-paper">
      <main className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-14">
        <header className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green font-display text-2xl font-semibold text-paper">
            TB
          </div>

          <h1 className="mt-6 font-display text-3xl font-semibold tracking-tight">
            {contact.fullName}
          </h1>
          <p className="eyebrow mt-3">{contact.title}</p>
          <p className="mx-auto mt-4 max-w-xs text-[0.9375rem] leading-relaxed text-ink-soft">
            {contact.tagline}
          </p>
          <p className="mt-4 flex items-center justify-center gap-1.5 text-sm text-ink-faint">
            <MapPin className="h-4 w-4 text-green" />
            {contact.location}
          </p>
        </header>

        {/* Primary action: one tap to land in their phone's address book.
            No `download` attribute — iOS then files it away in Downloads
            instead of offering the Add to Contacts sheet. */}
        <a href={VCARD_URL} type="text/vcard" className="btn mt-9 w-full">
          <UserPlus className="h-4 w-4" />
          Save to Contacts
        </a>

        <div className="mt-8">
          <LinkRow
            href={`mailto:${contact.email}`}
            icon={<Mail className="h-4 w-4" />}
            label="Email"
            value={contact.email}
            onCopy={{ copied: copied === "email", handler: copy("email", contact.email, "Email") }}
          />
          <LinkRow
            href={`tel:${contact.phone}`}
            icon={<Phone className="h-4 w-4" />}
            label="Call"
            value={contact.phoneDisplay}
            onCopy={{
              copied: copied === "phone",
              handler: copy("phone", contact.phoneDisplay, "Number"),
            }}
          />
          <LinkRow
            href={`sms:${contact.phone}`}
            icon={<MessageSquare className="h-4 w-4" />}
            label="Text"
            value={contact.phoneDisplay}
          />
          <LinkRow
            href={contact.linkedin}
            icon={<span className="font-display text-sm font-bold">in</span>}
            label="LinkedIn"
            value="in/talia-berler"
          />
          <LinkRow
            href={contact.github}
            icon={<SiGithub className="h-4 w-4" />}
            label="GitHub"
            value="@taliakberler"
          />
          <LinkRow
            href={contact.resume}
            icon={<FileText className="h-4 w-4" />}
            label="Résumé"
            value="One page (PDF)"
          />
          <LinkRow
            href={contact.website}
            icon={<Globe className="h-4 w-4" />}
            label="Portfolio"
            value="taliakberler.github.io"
          />
        </div>

        <div className="mt-8 flex gap-3">
          <button onClick={share} className="btn-ghost flex-1 px-4 py-2.5">
            <Share2 className="h-4 w-4" />
            Share
          </button>
          <button onClick={() => setShowQr(true)} className="btn-ghost flex-1 px-4 py-2.5">
            <QrCode className="h-4 w-4" />
            Show QR
          </button>
        </div>

        <footer className="mt-auto pt-12 text-center text-xs text-ink-faint">
          &copy; {new Date().getFullYear()} {contact.fullName}
        </footer>
      </main>

      {/* Full-screen QR — for handing the card on to someone else */}
      {showQr && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-forest/95 px-8"
          onClick={() => setShowQr(false)}
        >
          <button
            aria-label="Close QR code"
            className="absolute right-5 top-5 rounded-full p-2 text-paper/70 transition-colors hover:text-paper"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={QR_URL}
            alt={`QR code linking to ${CARD_URL}`}
            className="w-full max-w-xs rounded-2xl bg-paper p-4"
          />
          <p className="mt-7 font-sans text-xs uppercase tracking-[0.2em] text-paper/70">
            Scan to connect
          </p>
        </div>
      )}
    </div>
  );
};
