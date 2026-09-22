# Digital business card

Everything that powers `https://taliakberler.github.io/card` — the page someone
lands on after scanning your QR code or tapping your shared contact.

## What ships

| File | What it's for |
| --- | --- |
| `src/data/contact.js` | **Single source of truth.** Name, title, email, phone, links. |
| `src/pages/Card.jsx` | The card page itself (`/card`). |
| `public/talia-berler.vcf` | Contact file — tapping "Save to Contacts" opens the phone's add-contact sheet. |
| `public/qr/card-qr.svg` / `.png` | Plain QR of the card URL, for slides, print, email signatures, conference badges. |
| `public/qr/wallpaper-lock.png` | Phone wallpaper, QR positioned below the lock-screen clock. |
| `public/qr/wallpaper-plain.png` | Phone wallpaper, QR dead centre. |
| `public/favicon-{16,32,180,512}.png` | The TB monogram — browser tab, iOS home screen, bookmarks. |

All generated files come from one script:

```bash
npm run assets
```

Edit `src/data/contact.js`, re-run that, commit. The QR, the vCard and both
wallpapers stay in sync automatically.

The vCard only advertises a résumé once `hasResume` is `true` in
`src/data/contact.js` — see the "Adding your files" section of the README.

## Setting it up on your phone (one time)

### 1. The wallpaper QR

1. Open `https://taliakberler.github.io/qr/wallpaper-lock.png` on your phone.
2. Long-press the image → **Add to Photos**.
3. Settings → Wallpaper → **Add New Wallpaper** → Photos → pick it.
   - Set it as the **Lock Screen**. The QR sits in the lower third, clear of the
     clock and of the flashlight/camera buttons.
   - Turn **off** Depth Effect if iOS offers it — it can crop the QR.
4. Test it: point another phone's camera at your locked screen. It should offer
   `taliakberler.github.io/card`.

Use `wallpaper-plain.png` instead if you'd rather have it centred (better for a
Home Screen with few icons, or for just sending the image to someone).

### 2. AirDrop / NameDrop (hold phones together)

NameDrop shares **your own contact card** from the Contacts app, so the links
have to live there:

1. Open your `/card` page on your phone and tap **Save to Contacts**, or open
   `https://taliakberler.github.io/talia-berler.vcf` directly.
2. iOS offers to create a contact with every link already attached — save it.
3. Contacts app → your card at the top → **Edit** → make sure it's set as
   **My Card** (Contacts → tap your name → "My Card" should already be marked;
   if not, long-press the contact → **Make This My Card**).
4. Optional but nice: Contacts → your card → **Contact Photo & Poster** → set up
   a poster. That's what the other person sees during the NameDrop animation.

Now holding your phone near someone else's sends your name, number, email and
all four links (LinkedIn, GitHub, Resume, Digital card) in one tap.

### 3. Backup for anyone without either

The card page has a **Show QR** button that fills the screen with the QR — handy
if your wallpaper is something else that day, or if the person you just met
wants to pass your card to a colleague.

## Notes

- `/card` is a client-side route. GitHub Pages can't rewrite URLs, so the build
  copies `index.html` to `404.html` (see `vite.config.js`) — that's what makes a
  direct link to `/card` resolve instead of 404ing.
- The QR encodes the URL, not the contact data. That means you can change your
  phone number or add a link later without reprinting anything; only re-run
  `npm run assets` if the card **URL** itself changes.
- Error correction is level Q (~25%), so the code still scans from a phone
  screen at an angle or with glare across part of it.
