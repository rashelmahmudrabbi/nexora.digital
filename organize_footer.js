const fs = require('fs');

// 1. Update Footer.tsx to use the image logo
let footerTsx = fs.readFileSync('src/components/layout/Footer.tsx', 'utf8');

// Add Image import if not present
if (!footerTsx.includes('import Image from \'next/image\'')) {
    footerTsx = footerTsx.replace(
        "import Link from 'next/link';",
        "import Link from 'next/link';\nimport Image from 'next/image';\nimport logoImg from '../../../public/logo.jpg';"
    );
}

// Replace Logo JSX
const oldLogoJsx = `<Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>N</span>
            <span className={styles.logoText}>
              Nexora<span className={styles.logoAccent}>Digital</span>
            </span>
          </Link>`;

const newLogoJsx = `<Link href="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image src={logoImg} alt="Nexora Digital Logo" width={32} height={32} style={{ borderRadius: '6px', objectFit: 'cover' }} />
            <span className={styles.logoText} style={{ fontSize: '1.2rem', fontWeight: 700 }}>
              NEXORA<span className={styles.logoAccent} style={{ color: 'var(--color-accent-blue)' }}> DIGITAL</span>
            </span>
          </Link>`;

if (footerTsx.includes('<span className={styles.logoIcon}>N</span>')) {
    footerTsx = footerTsx.replace(oldLogoJsx, newLogoJsx);
}

fs.writeFileSync('src/components/layout/Footer.tsx', footerTsx, 'utf8');

// 2. Update Footer.module.css to organize layout better
let footerCss = fs.readFileSync('src/components/layout/Footer.module.css', 'utf8');

// Adjust grid columns and gap to spread them out better
footerCss = footerCss.replace(
    'grid-template-columns: 1.5fr 1fr 1fr 1.2fr;\n  gap: 3rem;',
    'grid-template-columns: 2.2fr 1fr 1fr 1.3fr;\n  gap: 4rem;'
);

// Tweak tagline color to be slightly softer than bright cyan if it's too loud, or just adjust it
footerCss = footerCss.replace(
    'color: var(--color-accent-blue);',
    'color: var(--color-text-primary);\n  opacity: 0.9;'
);

fs.writeFileSync('src/components/layout/Footer.module.css', footerCss, 'utf8');

console.log('Footer organized');
