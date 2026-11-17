// Copies the Excel library from node_modules next to index.html so the app works offline.
const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '..', 'node_modules', 'xlsx-js-style', 'dist', 'xlsx.bundle.js');
const dst = path.join(__dirname, '..', 'xlsx.bundle.js');
fs.copyFileSync(src, dst);
console.log('Copied xlsx.bundle.js');
