import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const sizes = [192, 512];
const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="512" height="512">
  <rect width="100" height="100" fill="#1a1a1a"/>
  <g fill="#d4a850">
    <path d="M30 55 Q25 45 30 35 Q35 25 50 20 Q65 25 70 35 Q75 45 70 55 Q65 70 50 75 Q35 70 30 55" />
    <ellipse cx="50" cy="25" rx="18" ry="15" />
    <ellipse cx="50" cy="28" rx="10" ry="8" fill="#1a1a1a" />
    <path d="M35 20 Q50 15 65 20" stroke-width="4" stroke="#d4a850" fill="none" />
    <path d="M25 45 Q15 50 12 65 Q10 75 15 80" stroke-width="8" stroke="#d4a850" fill="none" stroke-linecap="round" />
    <path d="M75 45 Q85 50 88 65 Q90 75 85 80" stroke-width="8" stroke="#d4a850" fill="none" stroke-linecap="round" />
  </g>
</svg>`;

async function generateIcons() {
  const publicDir = path.join(process.cwd(), 'public');
  
  for (const size of sizes) {
    const outputPath = path.join(publicDir, `pwa-${size}x${size}.png`);
    await sharp(Buffer.from(svgContent))
      .resize(size, size)
      .png()
      .toFile(outputPath);
    console.log(`Generated ${outputPath}`);
  }
  
  // Also generate favicon
  const faviconPath = path.join(publicDir, 'favicon.ico');
  await sharp(Buffer.from(svgContent))
    .resize(32, 32)
    .png()
    .toFile(faviconPath.replace('.ico', '.png'));
  console.log('Generated favicon');
}

generateIcons().catch(console.error);


