import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const imagesToDownload = [
  // Logos & Branding
  { url: 'https://shop.clapsa.co.za/images/logger-removebg-preview.png', dest: 'public/images/logo.png' },
  { url: 'https://shop.clapsa.co.za/images/logger.png', dest: 'public/images/logo-badge.png' },
  { url: 'https://shop.clapsa.co.za/images/logzz.png', dest: 'public/images/logo-footer.png' },
  
  // Partner Logos
  { url: 'https://shop.clapsa.co.za/images/Barron-Button1.jpg', dest: 'public/images/partners/barron.jpg' },
  { url: 'https://shop.clapsa.co.za/images/Amrod-Button.jpg', dest: 'public/images/partners/amrod.jpg' },
  { url: 'https://shop.clapsa.co.za/images/Altitude-by-Wizard.jpg', dest: 'public/images/partners/altitude.jpg' },
  { url: 'https://shop.clapsa.co.za/images/Abelanani-Button.jpg', dest: 'public/images/partners/abelanani.jpg' },
  { url: 'https://shop.clapsa.co.za/images/Bic-Graphic-Button.jpg', dest: 'public/images/partners/bic.jpg' },
  { url: 'https://shop.clapsa.co.za/images/KMQ-Button.jpg', dest: 'public/images/partners/kmq.jpg' },
  { url: 'https://shop.clapsa.co.za/images/Macma-Button.jpg', dest: 'public/images/partners/macma.jpg' },
  { url: 'https://shop.clapsa.co.za/images/TOGS-Button.jpg', dest: 'public/images/partners/togs.jpg' },

  // Products & Portfolio Items
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/mae_ladies_boot.jpeg', dest: 'public/images/products/mae_ladies_boot.jpeg' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/jace_ladies_boot.jpeg', dest: 'public/images/products/jace_ladies_boot.jpeg' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/resorption_s3_boot-2.jpeg', dest: 'public/images/products/resorption_s3_boot.jpeg' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/abbey_ladies_boot.jpeg', dest: 'public/images/products/abbey_ladies_boot.jpeg' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/wellspring_boot-2.jpeg', dest: 'public/images/products/wellspring_boot.jpeg' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/excavator_s3_boot-1.jpeg', dest: 'public/images/products/excavator_s3_boot.jpeg' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/crossrail_boot.jpeg', dest: 'public/images/products/crossrail_boot.jpeg' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/holton_boot-1.jpg', dest: 'public/images/products/holton_boot.jpg' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/chelsea_boot.jpg', dest: 'public/images/products/chelsea_boot.jpg' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/enterprise_metal-free_shoe.jpg', dest: 'public/images/products/enterprise_metal-free_shoe.jpg' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/kontrakta_boot.jpg', dest: 'public/images/products/kontrakta_boot.jpg' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/radical_shoe.jpg', dest: 'public/images/products/radical_shoe.jpg' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/non-metallic_safety_boot.jpg', dest: 'public/images/products/non-metallic_safety_boot.jpg' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/chukka_boot.jpg', dest: 'public/images/products/chukka_boot.jpg' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/multi_shoe.jpg', dest: 'public/images/products/multi_shoe.jpg' },
  
  // Displays & Promo
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/303807-main.png', dest: 'public/images/products/fence_wrap.png' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/304380-main.png', dest: 'public/images/products/pennants_pvc.png' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/303809-detail2.png', dest: 'public/images/products/kiosk_display.png' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/303822-main.png', dest: 'public/images/products/gazebo_toolkit.png' },
  
  // Banners & Medical
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/promax_disposable_coverall.jpg', dest: 'public/images/products/promax_coverall.jpg' },
  { url: 'https://shop.clapsa.co.za/images/com_hikashop/upload/thumbnails/450x590/700ml_automatic_top_up_soap_dispenser__touch_free.jpg', dest: 'public/images/products/soap_dispenser.jpg' },
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
          console.log(`[OK] Downloaded: ${destPath}`);
          resolve(true);
        });
      } else {
        file.close();
        fs.unlink(fullPath, () => {});
        console.warn(`[SKIP] Failed to download ${url}: status ${response.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(fullPath, () => {});
      console.error(`[ERR] Error downloading ${url}:`, err.message);
      resolve(false);
    });
  });
}

async function run() {
  console.log('Starting assets download...');
  for (const item of imagesToDownload) {
    await downloadFile(item.url, item.dest);
  }
  console.log('All downloads completed!');
}

run();
