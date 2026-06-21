const fs = require('fs');
const data = JSON.parse(fs.readFileSync('C:/Users/letha/.gemini/antigravity-ide/brain/7524ac37-71c4-4cae-9000-26c4b6034831/.system_generated/steps/173/output.txt', 'utf8'));
const projects = data.projects || [];
projects.forEach(p => {
  const screens = p.screenInstances || [];
  screens.forEach(s => {
    if ((s.label || '').toLowerCase().includes('bài viết')) {
      console.log('Found screen:', s.label, s.sourceScreen, s.id);
    }
  });
});
