# Owner-supplied design update

The owner supplied New card design.html and asked for an exact visual match and publication to the existing repository. That file is used directly, including its embedded portrait, logo, QR, typography, colours, spacing, curved header, contact icons and Save Contact button. The only functional HTML adjustment normalises the button's generated contact file to CRLF vCard line endings; it does not affect the visual design.

PASS: Browser screenshot comparison against the supplied reference at 320×568, 390×844 and 1280×900 confirms matching layout and rendered pixels (allowance below 0.1% for screenshot rasterisation differences). Rendered QR decoding succeeds at all three sizes with a device pixel ratio of two.

PASS: The embedded QR independently decodes to Blessing Leopa's verified contact. Save Contact downloads the same contact fields. The static website vCard and contact.json now agree with the new reference's company spelling and CELL telephone type.

PASS: Source contains the verified phone, email and company website destinations. The actual button download was exercised in Chrome. No phone calls or messages were initiated.

Design override: the latest exact-reference instruction retains the supplied card's natural height. It scrolls on shorter phones, matching the reference; the earlier no-scroll validation applies to the previous design, not this update. The latest supplied visual direction also intentionally retains its gradient, rounded icons and pill contact button.

The earlier AUDIT.md, DESIGN.md and VALIDATION.md describe the previous rebuild and are historical. This report and verification/reference-update.json describe the current supplied design. Physical smartphone-camera testing remains a manual check described in README.md.
