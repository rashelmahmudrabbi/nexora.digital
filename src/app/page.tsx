import Link from 'next/link';
import React from 'react';
import ProductCard from '@/components/shop/ProductCard';
import { sampleProducts, sampleCategories } from '@/lib/data';
import styles from './page.module.css';

// Category icon SVGs
const categoryIcons: Record<string, React.ReactNode> = {
  'brain': <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M9.5 2A5.5 5.5 0 0 0 4 7.5c0 .97.26 1.88.7 2.66A5.5 5.5 0 0 0 2 15c0 2.76 2.04 5.04 4.69 5.44A4.5 4.5 0 0 0 11 24V2.05A5.47 5.47 0 0 0 9.5 2z"/><path d="M14.5 2A5.5 5.5 0 0 1 20 7.5c0 .97-.26 1.88-.7 2.66A5.5 5.5 0 0 1 22 15c0 2.76-2.04 5.04-4.69 5.44A4.5 4.5 0 0 1 13 24V2.05A5.47 5.47 0 0 1 14.5 2z"/></svg>,
  'gamepad': <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>,
  'package': <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M16.5 9.4l-9-5.19"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>,
};

// How it works steps
const steps = [
  {
    num: '01',
    title: 'Browse & Select',
    desc: 'Explore our collection of digital products. Find what you need with our easy search and filters.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  },
  {
    num: '02',
    title: 'Confirm Details',
    desc: 'Review the product, price, region, and delivery time. Provide only the information needed.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>,
  },
  {
    num: '03',
    title: 'Secure Payment',
    desc: 'Pay via bKash or Nagad. We never ask for your payment PIN, OTP, or sensitive credentials.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  },
  {
    num: '04',
    title: 'Fast Delivery',
    desc: 'Receive your product quickly. Gaming top-ups in minutes, subscriptions within hours.',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
  },
];

// Trust stats
const stats = [
  { value: '500+', label: 'Products Delivered' },
  { value: '4.9', label: 'Customer Rating' },
  { value: '24/7', label: 'Support Available' },
  { value: '5min', label: 'Fastest Delivery' },
];

export default function Home() {
  const featuredProducts = sampleProducts.filter(p => p.isFeatured);

  return (
    <>
      {/* ═══ HERO SECTION ═══ */}
      <section className={styles.hero} id="hero-section">
        {/* Animated background elements */}
        <div className={styles.heroBgOrbs}>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.orb3} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroText}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              Trusted Digital Marketplace
            </div>

            <h1 className={styles.heroTitle}>
              Your Digital World,
              <br />
              <span className={styles.heroTitleAccent}>One Trusted Store.</span>
            </h1>

            <p className={styles.heroSubtitle}>
              Discover digital tools, eligible subscriptions, and gaming top-ups
              in one convenient place. Check product availability, pricing, and
              delivery terms before ordering.
            </p>

            <div className={styles.heroActions}>
              <Link href="/shop" className="btn btn-primary btn-lg" id="hero-browse-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                Browse Products
              </Link>
              <Link href="/contact" className="btn btn-secondary btn-lg" id="hero-contact-btn">
                Contact Support
              </Link>
            </div>

            {/* Stats */}
            <div className={styles.heroStats}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.heroStat}>
                  <span className={styles.heroStatValue}>{stat.value}</span>
                  <span className={styles.heroStatLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual - Floating Cards */}
          <div className={styles.heroVisual}>
            <div className={styles.floatingCard1}>
              <div className={styles.floatingCardIcon}>🧠</div>
              <div>
                <div className={styles.floatingCardTitle}>AI Tools</div>
                <div className={styles.floatingCardSub}>ChatGPT, Canva Pro</div>
              </div>
            </div>
            <div className={styles.floatingCard2}>
              <div className={styles.floatingCardIcon}>🎮</div>
              <div>
                <div className={styles.floatingCardTitle}>Gaming Top-Ups</div>
                <div className={styles.floatingCardSub}>Free Fire, PUBG</div>
              </div>
            </div>
            <div className={styles.floatingCard3}>
              <div className={styles.floatingCardIcon}>📦</div>
              <div>
                <div className={styles.floatingCardTitle}>Digital Goods</div>
                <div className={styles.floatingCardSub}>Spotify, YouTube</div>
              </div>
            </div>
            <div className={styles.heroGlowCenter} />
          </div>
        </div>
      </section>

      {/* ═══ CATEGORIES SECTION ═══ */}
      <section className={`section ${styles.categoriesSection}`} id="categories-section">
        <div className="container">
          <div className="section-header">
            <h2>Browse Categories</h2>
            <p>Find exactly what you need across our curated product categories</p>
          </div>

          <div className={styles.categoryGrid}>
            {sampleCategories.map((cat, index) => (
              <Link
                href={`/shop?category=${cat.slug}`}
                key={cat.id}
                className={`${styles.categoryCard} animate-fade-in-up delay-${index + 1}`}
                id={`category-${cat.slug}`}
              >
                <div className={styles.categoryIconWrapper}>
                  {categoryIcons[cat.icon || ''] || categoryIcons['package']}
                </div>
                <h3 className={styles.categoryName}>{cat.name}</h3>
                <p className={styles.categoryDesc}>{cat.description}</p>
                <span className={styles.categoryCount}>
                  {cat._count?.products || 0} Products
                </span>
                <div className={styles.categoryArrow}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FEATURED PRODUCTS ═══ */}
      <section className={`section ${styles.featuredSection}`} id="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Our most popular digital products and gaming top-ups</p>
          </div>

          <div className={styles.productGrid}>
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className={styles.viewAllBtn}>
            <Link href="/shop" className="btn btn-secondary" id="view-all-products">
              View All Products
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className={`section ${styles.howItWorksSection}`} id="how-it-works-section">
        <div className="container">
          <div className="section-header">
            <h2>How It Works</h2>
            <p>Order your digital products in four simple steps</p>
          </div>

          <div className={styles.stepsGrid}>
            {steps.map((step, index) => (
              <div
                key={step.num}
                className={`${styles.stepCard} animate-fade-in-up delay-${index + 1}`}
              >
                <div className={styles.stepNumber}>{step.num}</div>
                <div className={styles.stepIconWrapper}>{step.icon}</div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
                {index < steps.length - 1 && (
                  <div className={styles.stepConnector}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3"><polyline points="9 18 15 12 9 6"/></svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUST SECTION ═══ */}
      <section className={`section ${styles.trustSection}`} id="trust-section">
        <div className="container">
          <div className={styles.trustCard}>
            <div className={styles.trustIcon}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-blue)" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11.5 14.5 15 9.5" stroke="var(--color-accent-emerald)" strokeWidth="2"/></svg>
            </div>
            <h2 className={styles.trustTitle}>Your Safety is Our Priority</h2>
            <p className={styles.trustText}>
              We confirm availability, price, region, and fulfilment details before an order is finalized.
              We protect customer information and <strong>never ask for account passwords, OTPs,
              recovery codes, payment PINs, or private keys.</strong>
            </p>
            <div className={styles.trustFeatures}>
              <div className={styles.trustFeature}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-emerald)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Secure Payments via bKash &amp; Nagad</span>
              </div>
              <div className={styles.trustFeature}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-emerald)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>No Passwords or OTPs Required</span>
              </div>
              <div className={styles.trustFeature}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-emerald)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Transparent Pricing</span>
              </div>
              <div className={styles.trustFeature}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-emerald)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>Responsive Customer Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className={`section ${styles.ctaSection}`} id="cta-section">
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className={styles.ctaTitle}>Ready to Get Started?</h2>
            <p className={styles.ctaText}>
              Browse our collection of digital products or reach out to our support team for help.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/shop" className="btn btn-primary btn-lg" id="cta-browse">
                Browse Products
              </Link>
              <Link href="/contact" className="btn btn-secondary btn-lg" id="cta-contact">
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
