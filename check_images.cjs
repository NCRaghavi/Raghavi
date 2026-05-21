const fs = require('fs');
const content = fs.readFileSync('./src/data/testimonials.js', 'utf8');
const matches = [...content.matchAll(/name:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]*)"/g)];
matches.forEach(m => {
  if (m[2] === '') console.log(m[1] + ' has no image');
});
