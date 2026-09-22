// Single source of truth for contact details across the site, the /card page,
// the vCard and the QR wallpapers.
// Edit here, then run `npm run assets` to regenerate the vCard + QR images.

export const SITE_URL = "https://taliakberler.github.io";
export const CARD_URL = `${SITE_URL}/card`;

export const contact = {
  firstName: "Talia",
  lastName: "Berler",
  fullName: "Talia Berler",
  title: "Data Scientist · Climate Resilience",
  // Contacts apps render this one; keep it plain ASCII so every client agrees.
  vcardTitle: "Data Scientist, Climate Resilience",
  tagline: "Turning technical evidence into decisions people can act on.",
  location: "New York, NY",
  organization: "",
  email: "taliakberler@gmail.com",
  phone: "+13057102434",
  phoneDisplay: "+1 (305) 710-2434",
  linkedin: "https://www.linkedin.com/in/talia-berler",
  github: "https://github.com/taliakberler",
  // Drop the one-page résumé into public/ as TaliaBerlerResume.pdf, then flip
  // hasResume to true — the site and the vCard pick it up automatically.
  hasResume: false,
  resume: `${SITE_URL}/TaliaBerlerResume.pdf`,
  cv: `${SITE_URL}/TaliaBerlerCV.pdf`,
  website: SITE_URL,
};

/**
 * Which document to link where. Until a one-page résumé exists in public/,
 * every "Résumé" affordance quietly points at the full CV instead of 404ing.
 */
export const resumeLink = contact.hasResume
  ? { href: contact.resume, label: "Résumé", note: "One page (PDF)" }
  : { href: contact.cv, label: "CV", note: "Full CV (PDF)" };
