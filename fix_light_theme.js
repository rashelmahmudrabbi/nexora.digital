const fs = require('fs');

let globalCss = fs.readFileSync('src/styles/globals.css', 'utf8');

const lightReplacements = [
    // Fix Card Gradients for Light Theme
    ['--gradient-card: linear-gradient(145deg, rgba(17, 24, 39, 0.9) 0%, rgba(15, 22, 41, 0.95) 100%);', '--gradient-card: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);'],
    ['--gradient-glass: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%);', '--gradient-glass: linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.5) 100%);'],
    
    // Fix Heavy Dark Shadows to Soft Professional Shadows
    ['--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.3);', '--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);'],
    ['--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.4), 0 2px 4px -2px rgba(0, 0, 0, 0.3);', '--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.04);'],
    ['--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -4px rgba(0, 0, 0, 0.4);', '--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -4px rgba(0, 0, 0, 0.04);'],
    ['--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.4);', '--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.04);'],
];

for (const [oldStr, newStr] of lightReplacements) {
    globalCss = globalCss.replace(oldStr, newStr);
}
fs.writeFileSync('src/styles/globals.css', globalCss, 'utf8');

// Fix explicit dark borders in CategoryCards
let pageCss = fs.readFileSync('src/app/page.module.css', 'utf8');
pageCss = pageCss.replace('border: 1px solid rgba(255, 255, 255, 0.15);', 'border: 1px solid var(--color-border-primary);');
// Fix any other stray dark things in CategoryCards
pageCss = pageCss.replace('background: rgba(0, 212, 255, 0.08);', 'background: rgba(0, 212, 255, 0.15);'); // make category icon bg slightly stronger
fs.writeFileSync('src/app/page.module.css', pageCss, 'utf8');

console.log('Fixed residuals of the dark theme!');
