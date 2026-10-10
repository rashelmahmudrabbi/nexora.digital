const fs = require('fs');

// 1. Fix Hero Floating Cards to use the modern glass theme
let pageCss = fs.readFileSync('src/app/page.module.css', 'utf8');

pageCss = pageCss.replace(
    /background: rgba\(17, 24, 39, 0\.75\);/g,
    'background: var(--color-bg-glass);'
);

// We already added .productGrid, let's make sure it's fully responsive and robust
if (!pageCss.includes('grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));')) {
    pageCss = pageCss.replace(
        'grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 2rem;',
        'grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n  margin-top: 2rem;'
    );
}

fs.writeFileSync('src/app/page.module.css', pageCss, 'utf8');

// 2. Fix Product Card image placeholders to look like nice tech badges instead of empty boxes
let productCardCss = fs.readFileSync('src/components/shop/ProductCard.module.css', 'utf8');

// Replace linear gradient with a more elegant soft glow
productCardCss = productCardCss.replace(
    'background: linear-gradient(135deg, var(--color-bg-tertiary) 0%, var(--color-bg-card) 100%);',
    'background: linear-gradient(135deg, rgba(0, 229, 255, 0.1) 0%, rgba(213, 0, 249, 0.05) 100%);\n  border-bottom: 1px solid var(--color-border-primary);'
);

// Make the emoji slightly bigger and add a glow
productCardCss = productCardCss.replace(
    'font-size: 3rem;',
    'font-size: 4rem;\n  filter: drop-shadow(0 0 12px rgba(255,255,255,0.2));'
);

// Give the card content some nice padding and layout
productCardCss = productCardCss.replace(
    '.content {\n  padding: 1.5rem;',
    '.content {\n  padding: 1.5rem;\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;'
);

fs.writeFileSync('src/components/shop/ProductCard.module.css', productCardCss, 'utf8');

console.log('Recommendations Applied');
