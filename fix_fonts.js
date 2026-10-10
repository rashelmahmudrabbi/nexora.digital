const fs = require('fs');

let pageCss = fs.readFileSync('src/app/page.module.css', 'utf8');
pageCss = pageCss.replace(/--font-size-/g, '--text-');

// Also make the hero title a bit bigger explicitly if it still feels small
pageCss = pageCss.replace(
    'font-size: var(--text-5xl);',
    'font-size: clamp(2.5rem, 5vw, 4rem);'
);

// Fix the Browse Categories icons to look nicer on the light theme
pageCss = pageCss.replace(
    'color: var(--color-bg-primary);',
    'color: #ffffff;' // Ensure category icons stay white when hovered instead of matching the light background
);

fs.writeFileSync('src/app/page.module.css', pageCss, 'utf8');
console.log('Fixed undefined variables in page.module.css');
