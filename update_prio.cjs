const fs = require('fs');
const path = './src/data/testimonials.js';

let content = fs.readFileSync(path, 'utf8');

const priorityMap = {
  "Aroon Jesrani": 95,
  "Urvi Raval": 94,
  "Dr. Shivani Shah": 93,
  "Hardi Nanavati": 92,
  "Shubham Kumar": 91,
  "Dr. Anuja Limbad": 90,
  "Pragnesh": 89,
  "Shiv Soni": 88,
  "Chetana": 87,
  "Mahek Raval": 86,
  "Shreya Pota": 85,
  "Dr. Meera Savani": 84
};

for (const [name, prio] of Object.entries(priorityMap)) {
  const regex = new RegExp(`(name:\\s*"${name}"[\\s\\S]*?priority:\\s*)\\d+`, 'g');
  content = content.replace(regex, `$1${prio}`);
}

fs.writeFileSync(path, content, 'utf8');
console.log('Priorities successfully updated!');
