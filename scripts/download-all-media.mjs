import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const filesFromMediaManager = [
  // Logos & Brand
  'logger-removebg-preview.png',
  'logger.png',
  'logzz.png',
  'javlinLogo.png',
  'footer-logo.png',

  // Partners & Brands
  'Abelanani-Button.jpg',
  'Altitude-by-Wizard.jpg',
  'Amrod-Button.jpg',
  'Barron-Button1.jpg',
  'Bic-Graphic-Button.jpg',
  'KMQ-Button.jpg',
  'Macma-Button.jpg',
  'TOGS-Button.jpg',

  // Category Banners & Real Photos
  'workwear.jpg',
  'apparel.jpg',
  'display.jpg',
  'gifting.jpg',
  'headwear.jpg',
  'bags.jpg',

  // Real Clapsa Photos & Promo Shoots (Unknown series)
  'Unknown.jpg',
  'Unknown1.jpg',
  'Unknown2.jpg',
  'Unknown3.jpg',
  'PROCUMENT.jpeg',
  'Corporate__Prom.jpg',
  'Corporate__Promotional_Apparel.jpg',
  'COVID-19.jpg',

  // Promotional hardware & displays
  '302350-main.png',
  '303452-main.png',
  '303869-main.png',
  '304616-main.png',
  '304616-main_1.png',
  '304616-main_2.png',
  '306152-main.png',
  '306215-main.png',
  '303807-main.png',
  '304380-main.png',
  '303809-detail2.png',
  '303822-main.png',

  // Models & Lifestyle
  'img-1.jpg',
  'img-2.jpg',
  'img3.jpg',
  'img4.jpg',
  'img5.jpg',
  'SEO.png',
  'web4.jpg'
];

function downloadFile(url, destPath) {
  return new Promise((resolve) => {
    const fullPath = path.resolve(destPath);
    fs.mkdirSync(path.dirname(fullPath), { recursive: true });

    const file = fs.createWriteStream(fullPath);
    const client = url.startsWith('https') ? https : http;

    client.get(url, (response) => {
      if (response.statusCode >= 200 && response.statusCode < 300) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`[OK] Downloaded: ${path.basename(destPath)}`);
          resolve(true);
        });
      } else {
        file.close();
        fs.unlink(fullPath, () => {});
        console.warn(`[SKIP] (${response.statusCode}) ${path.basename(destPath)}`);
        resolve(false);
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(fullPath, () => {});
      console.error(`[ERR] ${path.basename(destPath)}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  console.log(`Starting bulk download of ${filesFromMediaManager.length} assets from Media Manager...`);
  let successCount = 0;
  for (const filename of filesFromMediaManager) {
    const encoded = encodeURIComponent(filename).replace(/%2F/g, '/');
    const url = `https://shop.clapsa.co.za/images/${encoded}`;
    const dest = `public/images/media/${filename.replace(/[^a-zA-Z0-9._-]/g, '_')}`;
    const ok = await downloadFile(url, dest);
    if (ok) successCount++;
  }
  console.log(`\n🎉 Completed! Successfully downloaded ${successCount}/${filesFromMediaManager.length} files.`);
}

run();
