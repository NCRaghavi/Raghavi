const fs = require('fs');
const path = './src/data/testimonials.js';

let content = fs.readFileSync(path, 'utf8');

const priorityMap = {
  "Dr. Pooja Parekh": 91,
  "Dr. Shivani Shah": 90,
  "Dr. Meera Savani": 89
};

for (const [name, prio] of Object.entries(priorityMap)) {
  const regex = new RegExp(`(name:\\s*"${name}"[\\s\\S]*?priority:\\s*)-?\\d+`, 'g');
  content = content.replace(regex, `$1${prio}`);
}

fs.writeFileSync(path, content, 'utf8');
console.log('Priorities updated for Pooja, Shivani, Meera!');
