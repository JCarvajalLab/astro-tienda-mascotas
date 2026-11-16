import fs from 'node:fs';

fs.mkdirSync('public/images', { recursive: true });
const pngBase64 =
  'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==';
fs.writeFileSync(
  'public/images/og-default.png',
  Buffer.from(pngBase64, 'base64')
);
console.log('PNG created successfully');
