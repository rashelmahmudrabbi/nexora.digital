const fs = require('fs');

let footerCss = fs.readFileSync('src/components/layout/Footer.module.css', 'utf8');

footerCss = footerCss.replace(
    'grid-template-columns: 1.5fr 1fr 1fr 1.2fr;\n  gap: 3rem;',
    'grid-template-columns: 2.2fr 1fr 1fr 1.3fr;\n  gap: 4rem;'
);

footerCss = footerCss.replace(
    /(\.tagline \{[\s\S]*?)color: [^;]+;/,
    '$1color: var(--color-accent-blue);'
);

fs.writeFileSync('src/components/layout/Footer.module.css', footerCss, 'utf8');
console.log('Footer CSS fixed');
