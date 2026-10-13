# Blessing Leopa | Digital business card

A personal, viewport-fitted business card using Leopa Supply's existing logo and a restrained charcoal, gold and warm-paper palette. The name and direct contact details take priority. There is no navigation, service section, portrait hero, analytics, external font, runtime dependency or JavaScript.

Public address: https://nyaps-tech.github.io/leopa-supply-card/

## Publish

The existing GitHub Pages configuration publishes `main`, root `/`. Commit the reviewed files to that branch and wait for Pages to finish. Keep `.nojekyll` and relative file paths. No build command or workflow change is required. The rebuild is not public until those changes are pushed and the new Pages build is confirmed.

Preview locally with any static server, or open `index.html`. The website link points to the existing company Pages address.

## Contact QR

`contact.json` contains the verified contact. `Blessing_Leopa.vcf`, `contact-qr.svg` and `contact-qr.png` are generated from it. The SVG displayed on the card and downloadable PNG encode the same vCard 3.0 payload, including name, director title, company, phone, email and company website. The payload works without an internet connection. It uses CRLF, escaped text values and standards-compliant line folding.

The QR uses black modules, a white background, a four-module quiet zone and medium error correction. There is no embedded logo or decoration. Its displayed sizes (130 and 195 CSS pixels) are whole-number multiples of its 65-module image area, avoiding uneven module edges.

To regenerate after changing a contact:

```sh
npm ci
npm run generate:qr
npm test
```

These packages are development tools only. `npm test` independently decodes the PNG with jsQR and compares every byte with the vCard, then checks the displayed contact against `contact.json`. Update displayed text and links in `index.html` when contact details change. Copy the regenerated vCard into the website repository too.

## Check with a phone

1. Display the card on a second phone or computer at normal brightness.
2. Open your smartphone camera and aim at the full QR, including its white border.
3. Select the contact prompt, verify Blessing Leopa, Director, +27 63 880 9118 and tleopa@yahoo.co.uk, then choose Add/Save Contact.
4. Check the company website field before saving.
5. If your camera app only recognises URL QR codes, use its QR/contact scanner or open the card on your phone and select **Save contact**. Camera apps differ in their handling of vCard payloads.

The source image and browser-rendered QR have been decoded programmatically. Physical smartphone checks remain a manual check, not a claimed test.

## Preserved material

The original logo, portrait, hosted-card QR and PDFs remain intact. The earlier PDFs and `LEOPA_SUPPLY_Web_QR.*` are legacy assets, not the new card design or the contact QR shown on this page. They are no longer linked in the new interface. Private registration and owner documents are not published.

See `AUDIT.md`, `DESIGN.md` and `VALIDATION.md` for provenance, decisions and acceptance results.
