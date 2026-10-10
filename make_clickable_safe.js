const fs = require('fs');

// Safer regex replacement
let pageTsx = fs.readFileSync('src/app/page.tsx', 'utf8');

// Replace card 1 div start
pageTsx = pageTsx.replace(
    '<div className={styles.floatingCard1}>',
    '<Link href="/shop?category=ai-productivity" className={styles.floatingCard1}>'
);
// Replace card 2 div start
pageTsx = pageTsx.replace(
    '<div className={styles.floatingCard2}>',
    '<Link href="/shop?category=gaming-topups" className={styles.floatingCard2}>'
);
// Replace card 3 div start
pageTsx = pageTsx.replace(
    '<div className={styles.floatingCard3}>',
    '<Link href="/shop?category=software-digital" className={styles.floatingCard3}>'
);

// We need to change the matching closing divs to </Link>
// The easiest way is to use regex targeting the specific structure
pageTsx = pageTsx.replace(/<div className=\{styles\.floatingCardTitle\}>AI Tools<\/div>\s*<div className=\{styles\.floatingCardSub\}>ChatGPT, Canva Pro<\/div>\s*<\/div>\s*<\/div>/, '<div className={styles.floatingCardTitle}>AI Tools</div>\n                  <div className={styles.floatingCardSub}>ChatGPT, Canva Pro</div>\n                </div>\n              </Link>');

pageTsx = pageTsx.replace(/<div className=\{styles\.floatingCardTitle\}>Gaming Top-Ups<\/div>\s*<div className=\{styles\.floatingCardSub\}>Free Fire, PUBG<\/div>\s*<\/div>\s*<\/div>/, '<div className={styles.floatingCardTitle}>Gaming Top-Ups</div>\n                  <div className={styles.floatingCardSub}>Free Fire, PUBG</div>\n                </div>\n              </Link>');

pageTsx = pageTsx.replace(/<div className=\{styles\.floatingCardTitle\}>Digital Goods<\/div>\s*<div className=\{styles\.floatingCardSub\}>Spotify, YouTube<\/div>\s*<\/div>\s*<\/div>/, '<div className={styles.floatingCardTitle}>Digital Goods</div>\n                  <div className={styles.floatingCardSub}>Spotify, YouTube</div>\n                </div>\n              </Link>');

fs.writeFileSync('src/app/page.tsx', pageTsx, 'utf8');
console.log('Cards made clickable via regex!');
