import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { testimonialsData } from './src/data/testimonials.js';

console.log('Pankaj in scholars:', testimonialsData.scholars.find(s => s.name === 'Dr. Pankaj Sharma'));
