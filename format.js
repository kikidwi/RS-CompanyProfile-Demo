const fs = require('fs');
let content = fs.readFileSync('frontend/src/app/pages/public/informasi/articlesData.ts', 'utf8');
content = content.replace(/content: string\[\]; \/\/ paragraphs/g, 'content: string;');
content = content.replace(/content: \[\s*([\s\S]*?)\s*\],/g, (match, inner) => {
    let joined = inner.split(/,\s*\n\s*/).map(s => s.trim().replace(/^\"|\"$/g, '')).filter(s => s).map(s => '<p>' + s + '</p>').join('');
    return 'content: `' + joined + '`,';
});
fs.writeFileSync('frontend/src/app/pages/public/informasi/articlesData.ts', content);
