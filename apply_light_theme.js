const fs = require('fs');

let globalCss = fs.readFileSync('src/styles/globals.css', 'utf8');

const lightReplacements = [
    ['--color-bg-primary: #12182b; /* Soft Slate/Twilight */', '--color-bg-primary: #f8fafc; /* Professional Light Mode */'],
    ['--color-bg-secondary: #1a2238;', '--color-bg-secondary: #f1f5f9;'],
    ['--color-bg-tertiary: rgba(255, 255, 255, 0.06);', '--color-bg-tertiary: #e2e8f0;'],
    ['--color-bg-card: rgba(255, 255, 255, 0.04);', '--color-bg-card: #ffffff;'],
    ['--color-bg-card-hover: rgba(255, 255, 255, 0.08);', '--color-bg-card-hover: #f8fafc;'],
    ['--color-bg-elevated: rgba(255, 255, 255, 0.12);', '--color-bg-elevated: #ffffff;'],
    ['--color-bg-glass: rgba(255, 255, 255, 0.05);', '--color-bg-glass: rgba(255, 255, 255, 0.75);'],
    ['--color-bg-glass-light: rgba(255, 255, 255, 0.12);', '--color-bg-glass-light: rgba(255, 255, 255, 0.6);'],
    
    // Text colors (Invert for light mode)
    ['--color-text-primary: #f1f5f9;', '--color-text-primary: #0f172a;'],
    ['--color-text-secondary: #94a3b8;', '--color-text-secondary: #334155;'],
    ['--color-text-tertiary: #64748b;', '--color-text-tertiary: #64748b;'],
    
    // Borders
    ['--color-border-primary: rgba(255, 255, 255, 0.15);', '--color-border-primary: rgba(0, 0, 0, 0.08);'],
    ['--color-border-secondary: rgba(255, 255, 255, 0.08);', '--color-border-secondary: rgba(0, 0, 0, 0.04);'],
    ['--color-border-glow: rgba(0, 212, 255, 0.15);', '--color-border-glow: rgba(0, 229, 255, 0.3);'],
];

for (const [oldStr, newStr] of lightReplacements) {
    globalCss = globalCss.replace(oldStr, newStr);
}

// Add shadow variables for light mode if not exists
if (!globalCss.includes('--shadow-card-hover: 0 12px 32px rgba(0, 0, 0, 0.08);')) {
    globalCss = globalCss.replace(
        ':root {',
        ':root {\n  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  --shadow-card-hover: 0 12px 32px rgba(0, 0, 0, 0.08);\n'
    );
}

fs.writeFileSync('src/styles/globals.css', globalCss, 'utf8');

// Update Header CSS for Light Glass
let headerCss = fs.readFileSync('src/components/layout/Header.module.css', 'utf8');
headerCss = headerCss.replace('background: rgba(20, 26, 43, 0.75);', 'background: rgba(255, 255, 255, 0.85);');
headerCss = headerCss.replace('border-bottom: 1px solid var(--color-border-primary);', 'border-bottom: 1px solid rgba(0,0,0,0.05); box-shadow: 0 4px 30px rgba(0, 0, 0, 0.03);');
fs.writeFileSync('src/components/layout/Header.module.css', headerCss, 'utf8');

// Update Footer CSS for Light Glass
let footerCss = fs.readFileSync('src/components/layout/Footer.module.css', 'utf8');
footerCss = footerCss.replace('background: rgba(20, 26, 43, 0.6);', 'background: rgba(241, 245, 249, 0.8);');
footerCss = footerCss.replace('border-top: 1px solid rgba(255, 255, 255, 0.1);', 'border-top: 1px solid rgba(0,0,0,0.05);');
fs.writeFileSync('src/components/layout/Footer.module.css', footerCss, 'utf8');

// Update Page Module CSS for Light Mode Orbs and Interactivity
let pageCss = fs.readFileSync('src/app/page.module.css', 'utf8');
pageCss = pageCss.replace('background: var(--color-bg-glass);', 'background: rgba(255, 255, 255, 0.8);');
pageCss = pageCss.replace('background: rgba(255,255,255,0.02);', 'background: rgba(255,255,255,0.7);');

// Make orbs slightly more visible in light mode
pageCss = pageCss.replace('rgba(0, 212, 255, 0.15)', 'rgba(0, 212, 255, 0.3)');
pageCss = pageCss.replace('rgba(168, 85, 247, 0.12)', 'rgba(168, 85, 247, 0.25)');
pageCss = pageCss.replace('rgba(0, 102, 255, 0.1)', 'rgba(0, 102, 255, 0.2)');

// Add dynamic hover animations to product cards (via ProductCard module)
let productCardCss = fs.readFileSync('src/components/shop/ProductCard.module.css', 'utf8');
productCardCss = productCardCss.replace(
    'transform: translateY(-6px);',
    'transform: translateY(-8px) scale(1.02);\n  box-shadow: 0 20px 40px rgba(0,0,0,0.08);'
);
fs.writeFileSync('src/components/shop/ProductCard.module.css', productCardCss, 'utf8');

fs.writeFileSync('src/app/page.module.css', pageCss, 'utf8');

// Add interactive active state to buttons globally
let globalCssAgain = fs.readFileSync('src/styles/globals.css', 'utf8');
if (!globalCssAgain.includes('.btn:active')) {
    globalCssAgain += '\n\n.btn { transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); }\n.btn:active { transform: scale(0.95); }\n';
    fs.writeFileSync('src/styles/globals.css', globalCssAgain, 'utf8');
}

// Make Header Logo look good as a dark rounded badge on light header
let headerTsx = fs.readFileSync('src/components/layout/Header.tsx', 'utf8');
headerTsx = headerTsx.replace(
    "style={{ borderRadius: '8px', objectFit: 'cover' }}",
    "style={{ borderRadius: '50%', objectFit: 'cover', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}"
);
fs.writeFileSync('src/components/layout/Header.tsx', headerTsx, 'utf8');

console.log('Light interactive theme applied!');
