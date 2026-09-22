// Single source of truth for contact details across the site, the /card page,
// the vCard and the QR wallpapers.
// Edit here, then run `npm run assets` to regenerate the vCard + QR images.

export const SITE_URL = "https://taliakberler.github.io";
export const CARD_URL = `${SITE_URL}/card`;

export const contact = {
  firstName: "Talia",
  lastName: "Berler",
  fullName: "Talia Berler",
  title: "Climate Resilience · Geospatial Data Science",
  // Contacts apps render this one; keep it plain ASCII so every client agrees.
  vcardTitle: "Research Associate, Resilience Finance Lab",
  tagline: "Building the evidence behind climate resilience decisions.",
  location: "New York, NY",
  organization: "Climate Resilience Institute",
  email: "taliakberler@gmail.com",
  phone: "+13057102434",
  phoneDisplay: "+1 (305) 710-2434",
  linkedin: "https://www.linkedin.com/in/talia-berler",
  github: "https://github.com/taliakberler",
  hasResume: true,
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
