const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/letha/.gemini/antigravity-ide/brain/d340ab3e-9219-4a16-96f6-9f0d2f97868e/.system_generated/steps/28/output.txt', 'utf8'));
const screens = data.screens || [];
const found = screens.filter(s => (s.title || '').toLowerCase().includes('sinh viên'));
console.log(found.map(s => s.name + ' - ' + s.title).join('\n'));
