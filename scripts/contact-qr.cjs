const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const QRCode = require('qrcode');
const jsQR = require('jsqr');
const { PNG } = require('pngjs');
const root = path.resolve(__dirname, '..');
const contact = JSON.parse(fs.readFileSync(path.join(root, 'contact.json'), 'utf8'));
const escape = value => value.replace(/\\/g, '\\\\').replace(/\r\n|\r|\n/g, '\\n').replace(/;/g, '\\;').replace(/,/g, '\\,');
// vCard 3.0 text values are escaped; lines are folded at the 75-octet limit.
function fold(line) {
  const parts = [];
  let part = '';
  for (const character of line) {
    if (Buffer.byteLength(part + character, 'utf8') > 75) { parts.push(part); part = ' '; }
    part += character;
  }
  parts.push(part);
  return parts.join('\r\n');
}
const payload = [
  'BEGIN:VCARD', 'VERSION:3.0',
  `N:${escape(contact.familyName)};${escape(contact.givenName)};;;`,
  `FN:${escape(contact.givenName + ' ' + contact.familyName)}`,
  `ORG:${escape(contact.company)}`, `TITLE:${escape(contact.title)}`,
  `TEL:${contact.phone}`, `EMAIL:${contact.email}`,
  `URL:${contact.website}`, 'END:VCARD',
].map(fold).join('\r\n') + '\r\n';
async function main() {
  if (!process.argv.includes('--check')) {
    fs.writeFileSync(path.join(root, 'Blessing_Leopa.vcf'), payload);
    await QRCode.toFile(path.join(root, 'contact-qr.png'), payload, { type: 'png', errorCorrectionLevel: 'M', margin: 4, scale: 10, color: { dark: '#000000', light: '#ffffff' } });
    fs.writeFileSync(path.join(root, 'contact-qr.svg'), await QRCode.toString(payload, { type: 'svg', errorCorrectionLevel: 'M', margin: 4, color: { dark: '#000000', light: '#ffffff' } }));
  }
  const png = PNG.sync.read(fs.readFileSync(path.join(root, 'contact-qr.png')));
  const decoded = jsQR(new Uint8ClampedArray(png.data), png.width, png.height);
  assert.ok(decoded, 'QR must decode with an independent decoder');
  assert.equal(decoded.data, payload, 'Decoded QR must match the verified vCard');
  assert.equal(fs.readFileSync(path.join(root, 'Blessing_Leopa.vcf'), 'utf8'), payload);
  const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  for (const value of [contact.givenName, contact.familyName, contact.title, contact.phone, contact.email, contact.website]) assert.ok(html.includes(value), `Card must contain ${value}`);
  console.log(`PASS: ${png.width}×${png.height} QR independently decoded. All vCard fields match the displayed contact.`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
