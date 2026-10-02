import fs from 'fs';
import path from 'path';
import ghpages from 'gh-pages';

const outDir = path.resolve(process.cwd(), 'out');

if (!fs.existsSync(outDir)) {
  console.error('Error: "out" directory not found. Please run "npm run build" first.');
  process.exit(1);
}

// Create .nojekyll in out directory
const nojekyllPath = path.join(outDir, '.nojekyll');
fs.writeFileSync(nojekyllPath, '');
console.log('✓ Created .nojekyll in out/');

console.log('Publishing out/ to branch "gh-pages"...');

ghpages.publish(
  outDir,
  {
    dotfiles: true,
    branch: 'gh-pages',
    message: 'Deploy modern CLAPSA showcase and catalogue to GitHub Pages',
  },
  (err) => {
    if (err) {
      console.error('Deployment error:', err);
      process.exit(1);
    }
    console.log('✓ Successfully published to gh-pages branch!');
  }
);
