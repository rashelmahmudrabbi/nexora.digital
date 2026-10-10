const fs = require('fs');

// Update globals.css to be less dark and use the logo's color palette
let globalCss = fs.readFileSync('src/styles/globals.css', 'utf8');

const colorReplacements = [
    ['--color-bg-primary: #000000;', '--color-bg-primary: #060a16; /* Deep navy blue from logo */'],
    ['--color-bg-secondary: #0a0a0c;', '--color-bg-secondary: #0a0f25;'],
    ['--color-bg-card: rgba(25, 25, 30, 0.4);', '--color-bg-card: rgba(15, 25, 55, 0.4);'],
    ['--color-bg-glass: rgba(20, 20, 25, 0.65);', '--color-bg-glass: rgba(10, 20, 45, 0.55);'],
    ['--color-accent-blue: #00d4ff;', '--color-accent-blue: #00e5ff; /* Cyan from logo */'],
    ['--color-accent-purple: #7c3aed;', '--color-accent-purple: #d500f9; /* Magenta from logo */'],
];

for (const [oldStr, newStr] of colorReplacements) {
    globalCss = globalCss.replace(oldStr, newStr);
}

fs.writeFileSync('src/styles/globals.css', globalCss, 'utf8');

// Update Header.tsx to use the logo
let headerTsx = fs.readFileSync('src/components/layout/Header.tsx', 'utf8');

// Add Image import
if (!headerTsx.includes('import Image from \'next/image\'')) {
    headerTsx = headerTsx.replace(
        "import Link from 'next/link';", 
        "import Link from 'next/link';\nimport Image from 'next/image';\nimport logoImg from '../../../public/logo.jpg';"
    );
}

// Replace Logo JSX
const oldLogoJsx = `<Link href="/" className={styles.logo} id="header-logo">
          <span className={styles.logoIcon}>N</span>
          <span className={styles.logoText}>
            Nexora<span className={styles.logoAccent}>Digital</span>
          </span>
        </Link>`;

const newLogoJsx = `<Link href="/" className={styles.logo} id="header-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image src={logoImg} alt="Nexora Digital Logo" width={40} height={40} style={{ borderRadius: '8px', objectFit: 'cover' }} />
          <span className={styles.logoText} style={{ fontSize: '1.25rem', fontWeight: 700 }}>
            NEXORA<span className={styles.logoAccent} style={{ color: 'var(--color-accent-blue)' }}> DIGITAL</span>
          </span>
        </Link>`;

headerTsx = headerTsx.replace(oldLogoJsx, newLogoJsx);
fs.writeFileSync('src/components/layout/Header.tsx', headerTsx, 'utf8');

// Also update page.module.css to make background glows stronger
let pageCss = fs.readFileSync('src/app/page.module.css', 'utf8');
pageCss = pageCss.replace('rgba(0, 150, 255, 0.3)', 'rgba(0, 229, 255, 0.45)');
pageCss = pageCss.replace('rgba(120, 50, 255, 0.25)', 'rgba(213, 0, 249, 0.4)');
pageCss = pageCss.replace('rgba(50, 200, 255, 0.2)', 'rgba(0, 68, 255, 0.35)');

fs.writeFileSync('src/app/page.module.css', pageCss, 'utf8');

console.log('Update brighter theme complete');
