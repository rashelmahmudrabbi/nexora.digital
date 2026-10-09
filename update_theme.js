const fs = require('fs');

function updateFile(path, replacements) {
    if (!fs.existsSync(path)) return;
    let content = fs.readFileSync(path, 'utf8');
    for (const [oldStr, newStr] of replacements) {
        content = content.replace(new RegExp(oldStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newStr);
    }
    fs.writeFileSync(path, content, 'utf8');
}

const globalsReplacements = [
    ['--color-bg-primary: #06080f;', '--color-bg-primary: #000000;'],
    ['--color-bg-secondary: #0a0e1a;', '--color-bg-secondary: #0a0a0c;'],
    ['--color-bg-tertiary: #0f1629;', '--color-bg-tertiary: rgba(255, 255, 255, 0.03);'],
    ['--color-bg-card: #111827;', '--color-bg-card: rgba(25, 25, 30, 0.4);'],
    ['--color-bg-card-hover: #1a2235;', '--color-bg-card-hover: rgba(40, 40, 45, 0.6);'],
    ['--color-bg-elevated: #1e293b;', '--color-bg-elevated: rgba(255, 255, 255, 0.08);'],
    ['--color-bg-glass: rgba(17, 24, 39, 0.7);', '--color-bg-glass: rgba(20, 20, 25, 0.65);\n  backdrop-filter: blur(24px) saturate(180%);\n  -webkit-backdrop-filter: blur(24px) saturate(180%);'],
    ['--color-bg-glass-light: rgba(30, 41, 59, 0.5);', '--color-bg-glass-light: rgba(255, 255, 255, 0.08);\n  backdrop-filter: blur(16px) saturate(180%);\n  -webkit-backdrop-filter: blur(16px) saturate(180%);'],
    ['--color-border-primary: rgba(148, 163, 184, 0.1);', '--color-border-primary: rgba(255, 255, 255, 0.12);'],
    ['--color-border-secondary: rgba(148, 163, 184, 0.06);', '--color-border-secondary: rgba(255, 255, 255, 0.05);'],
];
updateFile('src/styles/globals.css', globalsReplacements);

try {
    let globalCss = fs.readFileSync('src/styles/globals.css', 'utf8');
    if (!globalCss.includes('.glass-panel')) {
        globalCss += "\n\n/* Apple Glass Additions */\n.glass-panel {\n  background: var(--color-bg-glass);\n  backdrop-filter: blur(24px) saturate(180%);\n  -webkit-backdrop-filter: blur(24px) saturate(180%);\n  border: 1px solid var(--color-border-primary);\n  border-radius: var(--radius-2xl);\n  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);\n}\n.card {\n  backdrop-filter: blur(12px) saturate(180%);\n  -webkit-backdrop-filter: blur(12px) saturate(180%);\n  border: 1px solid var(--color-border-primary);\n}\n";
        fs.writeFileSync('src/styles/globals.css', globalCss, 'utf8');
    }
} catch (e) {}

const pageReplacements = [
    ['background: var(--color-bg-card);', 'background: var(--color-bg-glass);\n  backdrop-filter: blur(20px) saturate(180%);\n  -webkit-backdrop-filter: blur(20px) saturate(180%);'],
    ['background: var(--color-bg-secondary);', 'background: rgba(255,255,255,0.02);\n  backdrop-filter: blur(24px);\n  -webkit-backdrop-filter: blur(24px);'],
    ['border: 1px solid var(--color-border-secondary);', 'border: 1px solid rgba(255, 255, 255, 0.1);'],
    ['border: 1px solid var(--color-border-primary);', 'border: 1px solid rgba(255, 255, 255, 0.15);'],
    ['rgba(0, 212, 255, 0.15)', 'rgba(0, 150, 255, 0.3)'],
    ['rgba(168, 85, 247, 0.12)', 'rgba(120, 50, 255, 0.25)'],
    ['rgba(0, 102, 255, 0.1)', 'rgba(50, 200, 255, 0.2)']
];
updateFile('src/app/page.module.css', pageReplacements);

const headerReplacements = [
    ['background: rgba(6, 8, 15, 0.85);', 'background: rgba(10, 10, 15, 0.65);\n  backdrop-filter: blur(32px) saturate(200%);\n  -webkit-backdrop-filter: blur(32px) saturate(200%);'],
    ['backdrop-filter: blur(12px);', '/* Replaced */']
];
updateFile('src/components/layout/Header.module.css', headerReplacements);

const footerReplacements = [
    ['background: var(--color-bg-secondary);', 'background: rgba(10, 10, 15, 0.5);\n  backdrop-filter: blur(24px) saturate(180%);\n  -webkit-backdrop-filter: blur(24px) saturate(180%);\n  border-top: 1px solid rgba(255, 255, 255, 0.1);']
];
updateFile('src/components/layout/Footer.module.css', footerReplacements);

console.log('Update complete');
