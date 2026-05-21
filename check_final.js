import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { testimonialsData } from './src/data/testimonials.js';

const students = [...testimonialsData.students].sort((a,b) => b.priority - a.priority);
students.slice(0, 15).forEach((t, i) => console.log(`${i+1}. ${t.name} (Priority: ${t.priority})`));
