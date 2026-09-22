/**
 * Generates every static asset the digital business card needs:
 *   public/talia-berler.vcf        - contact file (tap = "Add to Contacts" on iOS/Android)
 *   public/qr/card-qr.svg          - clean QR of the card URL (print, slides, badges)
 *   public/qr/card-qr.png          - same, 1200px raster
 *   public/qr/wallpaper-lock.png   - phone wallpaper, QR below the lock-screen clock
 *   public/qr/wallpaper-plain.png  - phone wallpaper, QR dead center
 *
 * Run with: npm run assets
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";
import sharp from "sharp";
import { contact, CARD_URL } from "../src/data/contact.js";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const out = (p) => resolve(root, p);
mkdirSync(out("public/qr"), { recursive: true });

/* ---------------------------------------------------------------- vCard -- */

// vCard 3.0: the version Apple Contacts, Google Contacts and Outlook all agree on.
// item{n}.URL + item{n}.X-ABLabel is Apple's way of labeling links; other apps
// safely ignore the prefix and still show the URL.
const vcard = () => {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${contact.lastName};${contact.firstName};;;`,
    `FN:${contact.fullName}`,
    contact.organization ? `ORG:${contact.organization}` : null,
    `TITLE:${contact.vcardTitle || contact.title}`,
    `EMAIL;TYPE=INTERNET,PREF:${contact.email}`,
    `TEL;TYPE=CELL,VOICE,PREF:${contact.phone}`,
    `ADR;TYPE=WORK:;;;New York;NY;;USA`,
    `URL;TYPE=PREF:${contact.website}`,
    `item1.URL:${contact.linkedin}`,
    "item1.X-ABLabel:LinkedIn",
    `item2.URL:${contact.github}`,
    "item2.X-ABLabel:GitHub",
    `item3.URL:${contact.resume}`,
    "item3.X-ABLabel:Resume",
    `item4.URL:${CARD_URL}`,
    "item4.X-ABLabel:Digital card",
    `X-SOCIALPROFILE;TYPE=linkedin:${contact.linkedin}`,
    `NOTE:${contact.tagline} All my links: ${CARD_URL}`,
    `REV:${new Date().toISOString().replace(/\.\d+Z$/, "Z")}`,
    "END:VCARD",
  ].filter(Boolean);
  // RFC 6350 requires CRLF; iOS is lenient but Outlook is not.
  return lines.join("\r\n") + "\r\n";
};

writeFileSync(out("public/talia-berler.vcf"), vcard(), "utf8");

/** Escape text destined for SVG markup (names and titles can contain & or '). */
const xml = (str) =>
  String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/* ------------------------------------------------------------------- QR -- */

// Error-correction level Q (~25% recoverable) so the code still scans from a
// phone screen at an angle, or with a logo-sized chunk obscured by glare.
const qr = QRCode.create(CARD_URL, { errorCorrectionLevel: "Q" });
const size = qr.modules.size;
const bits = qr.modules.data;
const isDark = (row, col) => bits[row * size + col] === 1;

/** QR as a single SVG <path>, one module = one unit, origin at 0,0. */
const qrPath = () => {
  let d = "";
  for (let row = 0; row < size; row++) {
    for (let col = 0; col < size; col++) {
      if (isDark(row, col)) d += `M${col} ${row}h1v1h-1z`;
    }
  }
  return d;
};

const QUIET = 4; // modules of mandatory white border
const span = size + QUIET * 2;

const standaloneSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${span} ${span}" width="1200" height="1200" shape-rendering="crispEdges" role="img" aria-label="QR code linking to ${xml(CARD_URL)}">
  <rect width="${span}" height="${span}" fill="#ffffff"/>
  <g transform="translate(${QUIET} ${QUIET})" fill="#17241e"><path d="${qrPath()}"/></g>
</svg>
`;
writeFileSync(out("public/qr/card-qr.svg"), standaloneSvg, "utf8");
await sharp(Buffer.from(standaloneSvg)).png().toFile(out("public/qr/card-qr.png"));

/* ----------------------------------------------------------------- icons -- */

// A "TB" monogram matching the avatar on /card: paper serif on forest green.
// Rendered to PNG here rather than shipped as an SVG with a <text> node, so the
// letterforms don't depend on which serif the viewer's browser happens to have.
const monogram = ({ size, bleed }) => {
  const r = bleed ? 0 : Math.round(size * 0.22);
  const fontSize = size * 0.545;
  // Georgia's cap height is ~0.692em; center the caps rather than the em box.
  const baseline = size / 2 + (fontSize * 0.692) / 2;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${r}" fill="#2e5e4e"/>
  <text x="${size / 2}" y="${baseline}" text-anchor="middle"
        font-family="Georgia, Times New Roman, serif" font-weight="700"
        font-size="${fontSize}" letter-spacing="${size * 0.008}" fill="#faf8f3">TB</text>
</svg>`;
};

const iconTargets = [
  { file: "favicon-16.png", size: 16 },
  { file: "favicon-32.png", size: 32 },
  { file: "favicon-180.png", size: 180, bleed: true }, // iOS applies its own mask
  { file: "favicon-512.png", size: 512 },
];

for (const { file, size, bleed } of iconTargets) {
  // Rasterize from a large master so the small sizes stay sharp.
  await sharp(Buffer.from(monogram({ size: 512, bleed: Boolean(bleed) })))
    .resize(size, size)
    .png()
    .toFile(out(`public/${file}`));
}

/* ------------------------------------------------------------ wallpapers -- */

const W = 1290;
const H = 2796; // iPhone 15/16 Pro pixels; iOS scales this down to any device.

/** @param {number} panelTop y-pixel of the top of the white QR panel */
const wallpaperSvg = (panelTop) => {
  const panelW = 900;
  const panelX = (W - panelW) / 2;
  const pad = 70;
  const qrPx = panelW - pad * 2;
  const unit = qrPx / size;
  const qrTop = panelTop + pad;
  const panelH = pad + qrPx + 180;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0%" stop-color="#0b1610"/>
      <stop offset="55%" stop-color="#17241e"/>
      <stop offset="100%" stop-color="#25402f"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0%" stop-color="#6e9c88" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#6e9c88" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#sky)"/>
  <ellipse cx="${W / 2}" cy="${panelTop + panelH / 2}" rx="${W * 0.75}" ry="${panelH * 0.85}" fill="url(#glow)"/>

  <g font-family="Georgia, Times New Roman, serif" text-anchor="middle">
    <text x="${W / 2}" y="${panelTop - 150}" font-size="78" font-weight="700" fill="#ffffff" letter-spacing="1">${xml(contact.fullName)}</text>
    <text x="${W / 2}" y="${panelTop - 72}" font-size="40" font-weight="500" fill="#9dbfae" letter-spacing="3">${xml(contact.title.toUpperCase())}</text>
  </g>

  <rect x="${panelX}" y="${panelTop}" width="${panelW}" height="${panelH}" rx="64" fill="#faf8f3"/>
  <g transform="translate(${panelX + pad} ${qrTop}) scale(${unit})" shape-rendering="crispEdges" fill="#17241e">
    <path d="${qrPath()}"/>
  </g>
  <text x="${W / 2}" y="${qrTop + qrPx + 105}" font-family="Georgia, Times New Roman, serif" text-anchor="middle" font-size="42" font-weight="700" fill="#2e5e4e" letter-spacing="6">SCAN TO CONNECT</text>
  <text x="${W / 2}" y="${panelTop + panelH + 90}" font-family="Georgia, Times New Roman, serif" text-anchor="middle" font-size="38" fill="#9dbfae" opacity="0.9">${xml(CARD_URL.replace(/^https:\/\//, ""))}</text>
</svg>
`;
};

// Lock screen: sits below the clock, above the flashlight/camera row.
await sharp(Buffer.from(wallpaperSvg(1080))).png().toFile(out("public/qr/wallpaper-lock.png"));
// Plain: centered, for the Home Screen or for sending as an image.
await sharp(Buffer.from(wallpaperSvg(Math.round(H / 2 - 560)))).png().toFile(out("public/qr/wallpaper-plain.png"));

console.log(`QR encodes: ${CARD_URL}`);
console.log(`QR version: ${qr.version} (${size}x${size} modules, ECC Q)`);
console.log("Wrote public/favicon-{16,32,180,512}.png");
console.log("Wrote public/talia-berler.vcf, public/qr/card-qr.{svg,png}, public/qr/wallpaper-{lock,plain}.png");
