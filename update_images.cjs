const fs = require('fs');
const path = './src/data/testimonials.js';

let content = fs.readFileSync(path, 'utf8');

const imageUpdates = {
  "Dr. Kinjal Mistry": "/images/testimonials/kinjal.png",
  "Aroon Jesrani": "/images/testimonials/aroon.png",
  "Shiv Soni": "/images/testimonials/shiv.png",
  "Aayush Gandhi": "/images/testimonials/aayussh.png",
  "Devarsh Thakkar": "/images/testimonials/devarsh.png"
};

for (const [name, img] of Object.entries(imageUpdates)) {
  const regex = new RegExp(`(name:\\s*"${name}"[\\s\\S]*?image:\\s*)"([^"]*)"`, 'g');
  content = content.replace(regex, `$1"${img}"`);
}

fs.writeFileSync(path, content, 'utf8');
console.log('Images updated successfully!');
