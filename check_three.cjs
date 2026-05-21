const fs = require('fs');
const content = fs.readFileSync('./src/data/testimonials.js', 'utf8');

const names = ['Dr. Pooja Parekh', 'Dr. Shivani Shah', 'Dr. Meera Savani', 'Dr. Anuja Limbad'];

names.forEach(name => {
  const match = content.match(new RegExp(`name:\\s*"${name}"[\\s\\S]*?priority:\\s*(-?\\d+)`));
  if (match) console.log(name + ': ' + match[1]);
});
