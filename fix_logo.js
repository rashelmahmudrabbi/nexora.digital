const fs = require('fs');
let headerTsx = fs.readFileSync('src/components/layout/Header.tsx', 'utf8');

const regex = /<Link href="\/" className=\{styles\.logo\}[\s\S]*?<\/Link>/;
const newLogoJsx = `<Link href="/" className={styles.logo} id="header-logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image src={logoImg} alt="Nexora Digital Logo" width={40} height={40} style={{ borderRadius: '8px', objectFit: 'cover' }} />
          <span className={styles.logoText} style={{ fontSize: '1.25rem', fontWeight: 700 }}>
            NEXORA<span className={styles.logoAccent} style={{ color: 'var(--color-accent-blue)' }}> DIGITAL</span>
          </span>
        </Link>`;

headerTsx = headerTsx.replace(regex, newLogoJsx);
fs.writeFileSync('src/components/layout/Header.tsx', headerTsx, 'utf8');
console.log('Logo replaced!');
