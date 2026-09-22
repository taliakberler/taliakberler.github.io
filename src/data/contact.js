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
  tagline: "Geospatial analysis and climate resilience finance.",
  location: "New York, NY",
  organization: "Climate Resilience Institute",
  email: "taliakberler@gmail.com",
  phone: "+13057102434",
  phoneDisplay: "+1 (305) 710-2434",
  linkedin: "https://www.linkedin.com/in/talia-berler",
  github: "https://github.com/taliakberler",
  resume: `${SITE_URL}/TaliaBerlerResume.pdf`,
  website: SITE_URL,
};
