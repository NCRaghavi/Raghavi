const fs = require('fs');
const path = './src/data/testimonials.js';

let content = fs.readFileSync(path, 'utf8');

const priorityMap = {
  "Urvi Raval": 96,
  "Bhanwari Kumari": 95,
  "Hardi Nanavati": 94,
  "Harshini Dudhani": 93,
  "Dr. Shivani Shah": 92
};

for (const [name, prio] of Object.entries(priorityMap)) {
  const regex = new RegExp(`(name:\\s*"${name}"[\\s\\S]*?priority:\\s*)\\d+`, 'g');
  content = content.replace(regex, `$1${prio}`);
}

fs.writeFileSync(path, content, 'utf8');
console.log('Priorities successfully updated!');
