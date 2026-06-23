const fs = require('fs');

const studentCssPath = 'd:\\Study\\ckc_class\\ckc_class\\frontend\\components\\student\\posts\\PostsManagement.module.css';
const lecturerCssPath = 'd:\\Study\\ckc_class\\ckc_class\\frontend\\components\\lecturer\\posts\\PostsManagement.module.css';

const studentCss = fs.readFileSync(studentCssPath, 'utf8');
const lines = studentCss.split('\n');

// Comment related CSS starts around line 50. Let's slice lines 49 to 488 (0-indexed).
const commentCss = lines.slice(49, 488).join('\n');

fs.appendFileSync(lecturerCssPath, '\n\n' + commentCss);
console.log('Appended successfully');
