import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

function ensureDir(p) {
  if (!existsSync(p)) mkdirSync(p, { recursive: true });
}

async function download(url, dest) {
  if (existsSync(dest)) { console.log(`  skip ${dest}`); return; }
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    const buf = Buffer.from(await res.arrayBuffer());
    writeFileSync(dest, buf);
    console.log(`  ✓ ${dest.replace(ROOT, '')}`);
  } catch (e) {
    console.error(`  ✗ ${url}: ${e.message}`);
  }
}

async function downloadBatch(items, concurrency = 4) {
  for (let i = 0; i < items.length; i += concurrency) {
    await Promise.all(items.slice(i, i + concurrency).map(([url, dest]) => download(url, dest)));
  }
}

ensureDir(join(ROOT, 'public/images'));
ensureDir(join(ROOT, 'public/images/hero-sequence'));
ensureDir(join(ROOT, 'public/seo'));
ensureDir(join(ROOT, 'public/fonts'));

// Portfolio images
const portfolioImages = [
  ['https://framerusercontent.com/images/rTxVOP8mPaw03FmuMqkIg1aUc.jpg', 'p1.jpg'],
  ['https://framerusercontent.com/images/cSrRsoQh0p2gHt1UHymwnTqHVt4.jpg', 'p2.jpg'],
  ['https://framerusercontent.com/images/iutANSWoqZVIqVONE5ciPRkXE.jpg', 'p3.jpg'],
  ['https://framerusercontent.com/images/6GffK2wrxr1kwajpDsCQSEeBqKo.jpg', 'p4.jpg'],
  ['https://framerusercontent.com/images/LLrpGCQvmNGoIjhM9dreIJLiBw.jpg', 'p5.jpg'],
  ['https://framerusercontent.com/images/wKNWW6LZszFJvgAmeITIQzLjPqE.jpg', 'p6.jpg'],
  ['https://framerusercontent.com/images/2VwKA9ixz9G8ciT8qDB6CsvP4.jpg', 'p7.jpg'],
  ['https://framerusercontent.com/images/LrktD6XCSXfrmZd20yz1O8uNds.jpg', 'p8.jpg'],
  ['https://framerusercontent.com/images/NZ6b64MegPRUpep0UJP6O6W06OM.jpg', 'p9.jpg'],
  ['https://framerusercontent.com/images/KhxTqqliiMezzQtc41gcoJ65CBY.jpg', 'p10.jpg'],
  ['https://framerusercontent.com/images/U9OMJ4IREiSzOPdRrxEsVkj7Fwo.jpg', 'p11.jpg'],
  ['https://framerusercontent.com/images/U2RBbXa6gfHpijPIpl1py0YOkE.jpg', 'p12.jpg'],
  ['https://framerusercontent.com/images/Flpfc3jH1rlNuP9khTv7WUnwG8.jpg', 'p13.jpg'],
  ['https://framerusercontent.com/images/BdbPhYLAseCrXpfBoFjtgrtsZwA.jpg', 'p14.jpg'],
  ['https://framerusercontent.com/images/ocSp2wPMJ52y7EJb77LnbI1LnA4.jpg', 'p15.jpg'],
  ['https://framerusercontent.com/images/4Tn4ZlGBhXq5y7TrVY5kcZxu500.jpg', 'p16.jpg'],
  ['https://framerusercontent.com/images/tR3nIBWXjXJOfgFPLMXi3JcS1M.jpg', 'p17.jpg'],
  ['https://framerusercontent.com/images/vsLq27UjjMhQaiA2Eq9jtOMxNPc.jpg', 'p18.jpg'],
  ['https://framerusercontent.com/images/iPEvmNiPvC3ZqZNtogp2ucfTdJM.jpg', 'p19.jpg'],
  ['https://framerusercontent.com/images/VMG39nI44ac7vj9apzjK9rGVyE.png', 'p20.png'],
  ['https://framerusercontent.com/images/AdhywAi36yniRFfGByd3UPhPo.jpg', 'p21.jpg'],
].map(([url, name]) => [url, join(ROOT, 'public/images', name)]);

// Logo / favicon
const seoAssets = [
  ['https://framerusercontent.com/images/CF3bC9T8cE71CK8E4bUPfEugs.png', join(ROOT, 'public/seo/favicon.png')],
];

// Hero image sequence frames (001–190)
const heroFrames = Array.from({ length: 190 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0');
  return [
    `https://bgdnskrpk.github.io/img-sequence/frames010/${n}.webp`,
    join(ROOT, `public/images/hero-sequence/${n}.webp`)
  ];
});

console.log('Downloading portfolio images...');
await downloadBatch(portfolioImages);

console.log('Downloading SEO/favicon...');
await downloadBatch(seoAssets);

console.log('Downloading hero image sequence (190 frames)...');
await downloadBatch(heroFrames, 8);

console.log('Done!');
