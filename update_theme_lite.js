const fs = require('fs');

let globalCss = fs.readFileSync('src/styles/globals.css', 'utf8');

// We will shift the entire palette to a "Soft Premium Dark" (Twilight)
// This makes the site much lighter/softer without breaking the dark-background JPG logo.

const colorReplacements = [
    ['--color-bg-primary: #060a16;', '--color-bg-primary: #12182b; /* Soft Slate/Twilight */'],
    ['--color-bg-secondary: #0a0f25;', '--color-bg-secondary: #1a2238;'],
    ['--color-bg-tertiary: rgba(255, 255, 255, 0.03);', '--color-bg-tertiary: rgba(255, 255, 255, 0.06);'],
    ['--color-bg-card: rgba(15, 25, 55, 0.4);', '--color-bg-card: rgba(255, 255, 255, 0.04);'],
    ['--color-bg-card-hover: rgba(40, 40, 45, 0.6);', '--color-bg-card-hover: rgba(255, 255, 255, 0.08);'],
    ['--color-bg-elevated: rgba(255, 255, 255, 0.08);', '--color-bg-elevated: rgba(255, 255, 255, 0.12);'],
    ['--color-bg-glass: rgba(10, 20, 45, 0.55);', '--color-bg-glass: rgba(255, 255, 255, 0.05);\n  backdrop-filter: blur(32px) saturate(200%);\n  -webkit-backdrop-filter: blur(32px) saturate(200%);'],
    ['--color-bg-glass-light: rgba(255, 255, 255, 0.08);', '--color-bg-glass-light: rgba(255, 255, 255, 0.12);\n  backdrop-filter: blur(20px) saturate(180%);\n  -webkit-backdrop-filter: blur(20px) saturate(180%);'],
    
    // Lighten borders for better visibility on the softer background
    ['--color-border-primary: rgba(255, 255, 255, 0.12);', '--color-border-primary: rgba(255, 255, 255, 0.15);'],
    ['--color-border-secondary: rgba(255, 255, 255, 0.05);', '--color-border-secondary: rgba(255, 255, 255, 0.08);'],
];

for (const [oldStr, newStr] of colorReplacements) {
    // Basic replace
    globalCss = globalCss.replace(oldStr, newStr);
}

fs.writeFileSync('src/styles/globals.css', globalCss, 'utf8');

// Update Header to have a slightly brighter glass
let headerCss = fs.readFileSync('src/components/layout/Header.module.css', 'utf8');
headerCss = headerCss.replace('background: rgba(10, 10, 15, 0.65);', 'background: rgba(20, 26, 43, 0.75);');
fs.writeFileSync('src/components/layout/Header.module.css', headerCss, 'utf8');

// Update Footer glass
let footerCss = fs.readFileSync('src/components/layout/Footer.module.css', 'utf8');
footerCss = footerCss.replace('background: rgba(10, 10, 15, 0.5);', 'background: rgba(20, 26, 43, 0.6);');
fs.writeFileSync('src/components/layout/Footer.module.css', footerCss, 'utf8');

console.log('Update to softer lite theme complete');
