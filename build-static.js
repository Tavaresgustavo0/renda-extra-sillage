const fs = require('fs');
const path = require('path');

const root = __dirname;
const out = path.join(root, 'public');

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

for (const file of ['index.html', 'styles.css', 'script.js']) {
  fs.copyFileSync(path.join(root, file), path.join(out, file));
}

fs.cpSync(path.join(root, 'img'), path.join(out, 'img'), { recursive: true });

console.log('Static site generated in public/');
