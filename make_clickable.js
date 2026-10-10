const fs = require('fs');

// 1. Update page.tsx to make floating cards clickable links
let pageTsx = fs.readFileSync('src/app/page.tsx', 'utf8');

const oldCards = `<div className={styles.floatingCard1}>
                <div className={styles.floatingCardIcon}>dY </div>
                <div>
                  <div className={styles.floatingCardTitle}>AI Tools</div>
                  <div className={styles.floatingCardSub}>ChatGPT, Canva Pro</div>
                </div>
              </div>
              <div className={styles.floatingCard2}>
                <div className={styles.floatingCardIcon}>dYZr</div>
                <div>
                  <div className={styles.floatingCardTitle}>Gaming Top-Ups</div>
                  <div className={styles.floatingCardSub}>Free Fire, PUBG</div>
                </div>
              </div>
              <div className={styles.floatingCard3}>
                <div className={styles.floatingCardIcon}>dY"</div>
                <div>
                  <div className={styles.floatingCardTitle}>Digital Goods</div>
                  <div className={styles.floatingCardSub}>Spotify, YouTube</div>
                </div>
              </div>`;

const newCards = `<Link href="/shop?category=ai-productivity" className={styles.floatingCard1}>
                <div className={styles.floatingCardIcon}>dY </div>
                <div>
                  <div className={styles.floatingCardTitle}>AI Tools</div>
                  <div className={styles.floatingCardSub}>ChatGPT, Canva Pro</div>
                </div>
              </Link>
              <Link href="/shop?category=gaming-topups" className={styles.floatingCard2}>
                <div className={styles.floatingCardIcon}>dYZr</div>
                <div>
                  <div className={styles.floatingCardTitle}>Gaming Top-Ups</div>
                  <div className={styles.floatingCardSub}>Free Fire, PUBG</div>
                </div>
              </Link>
              <Link href="/shop?category=software-digital" className={styles.floatingCard3}>
                <div className={styles.floatingCardIcon}>dY"</div>
                <div>
                  <div className={styles.floatingCardTitle}>Digital Goods</div>
                  <div className={styles.floatingCardSub}>Spotify, YouTube</div>
                </div>
              </Link>`;

pageTsx = pageTsx.replace(oldCards, newCards);
fs.writeFileSync('src/app/page.tsx', pageTsx, 'utf8');

// 2. Update page.module.css to style them properly as links with hover effects
let pageCss = fs.readFileSync('src/app/page.module.css', 'utf8');
const oldCssBlock = `backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 0, 0, 0.08);
}`;

const newCssBlock = `backdrop-filter: blur(16px);
  border: 1px solid rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: all var(--transition-normal);
  box-shadow: var(--shadow-md);
}

.floatingCard1:hover,
.floatingCard2:hover,
.floatingCard3:hover {
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 16px 32px rgba(0, 212, 255, 0.12);
  filter: brightness(1.02);
}`;

pageCss = pageCss.replace(oldCssBlock, newCssBlock);
fs.writeFileSync('src/app/page.module.css', pageCss, 'utf8');

console.log('Cards made clickable!');
