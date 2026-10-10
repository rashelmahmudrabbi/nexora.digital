const fs = require('fs');

let pageCss = fs.readFileSync('src/app/page.module.css', 'utf8');

const regex = /\.floatingCard1,\s*\.floatingCard2,\s*\.floatingCard3\s*\{[\s\S]*?transition: all var\(--transition-normal\);\s*\}/;

const newStyle = `.floatingCard1,
.floatingCard2,
.floatingCard3 {
  position: absolute;
  display: flex;
  align-items: center;
  gap: var(--space-md);
  padding: var(--space-md) var(--space-lg);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(16px);
  border: 1px solid var(--color-border-primary);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

.floatingCard1:hover,
.floatingCard2:hover,
.floatingCard3:hover {
  transform: scale(1.05); /* Works since we target the inner structure if needed, or we just rely on box-shadow here */
  border-color: rgba(0, 212, 255, 0.4);
  box-shadow: 0 16px 32px rgba(0, 212, 255, 0.15);
  background: #ffffff;
}`;

pageCss = pageCss.replace(regex, newStyle);
fs.writeFileSync('src/app/page.module.css', pageCss, 'utf8');
console.log('Fixed floating cards CSS!');
