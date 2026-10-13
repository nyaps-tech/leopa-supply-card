# Blessing Leopa | Supplied portrait card design

The current page reproduces the owner's `LEOPA SUPPLY/New card design.html` reference: curved gold header, circular director portrait, round Call/WhatsApp/Email/Website actions, contact details, embedded contact QR and Save Contact button. Its CSS and supplied images are contained in index.html. No runtime libraries or external fonts are required.

Public URL: https://nyaps-tech.github.io/leopa-supply-card/

The owner's latest instruction to match the supplied design supersedes the earlier compact viewport layout. The reference's natural portrait height is retained, so short mobile screens scroll. The previous card CSS, QR files and PDFs remain as preserved legacy assets, not the current interface.

## Verify contact sharing

```sh
npm ci
npm test
```

The development-only test independently decodes the actual embedded QR and checks that its contact fields match the card's Save Contact payload, contact.json and static Blessing_Leopa.vcf. The button download uses CRLF vCard line endings. The QR was supplied with the design and decoded successfully both at source resolution and from rendered mobile/desktop browser screenshots.

To check with a phone, display the card on a second device, open your camera, scan the entire QR and verify Blessing Leopa, Director, +27 63 880 9118 and tleopa@yahoo.co.uk before saving. Camera applications vary in their contact-QR support; Save Contact provides an alternative.

## Update and publish

Edit the current inline HTML/CSS and embedded assets in index.html. Contact updates must be applied consistently to the embedded QR, button payload, contact.json, static vCard and company website. The preserved earlier QR generator does not update the embedded reference design and is not a current maintenance command.

GitHub Pages publishes main/root automatically. Keep .nojekyll. See REFERENCE-UPDATE.md for this design's validation and the earlier audit/report files for historical work.
