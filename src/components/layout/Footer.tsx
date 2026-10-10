import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../../public/logo.jpg';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="site-footer">
      {/* Top glow line */}
      <div className={styles.glowLine} />

      <div className={`container ${styles.container}`}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoIcon}>N</span>
            <span className={styles.logoText}>
              Nexora<span className={styles.logoAccent}>Digital</span>
            </span>
          </Link>
          <p className={styles.tagline}>Your Digital World, One Trusted Store.</p>
          <p className={styles.description}>
            Your destination for selected digital products, productivity tools, and gaming top-ups in Bangladesh.
          </p>

          {/* Social Links */}
          <div className={styles.socialLinks}>
            <a href="https://facebook.com/NexoraDigitalBD" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook" id="footer-facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://wa.me/880" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp" id="footer-whatsapp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </a>
            <a href="https://m.me/NexoraDigitalBD" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Messenger" id="footer-messenger">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.654V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111C24 4.974 18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8.2l3.131 3.259L19.752 8.2l-6.561 6.763z"/></svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <nav className={styles.links}>
            <Link href="/shop" id="footer-shop">All Products</Link>
            <Link href="/shop?category=ai-productivity" id="footer-ai">AI & Productivity</Link>
            <Link href="/shop?category=gaming-topups" id="footer-gaming">Gaming Top-Ups</Link>
            <Link href="/shop?category=software-digital" id="footer-software">Software & Digital</Link>
          </nav>
        </div>

        {/* Support */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Support</h4>
          <nav className={styles.links}>
            <Link href="/how-to-order" id="footer-how-to-order">How to Order</Link>
            <Link href="/faq" id="footer-faq">FAQ</Link>
            <Link href="/contact" id="footer-contact">Contact Us</Link>
            <Link href="/about" id="footer-about">About Us</Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className={styles.linksCol}>
          <h4 className={styles.colTitle}>Contact</h4>
          <div className={styles.contactInfo}>
            <div className={styles.contactItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>support@nexoradigital.com</span>
            </div>
            <div className={styles.contactItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>10:00 AM - 10:00 PM (BST)</span>
            </div>
            <div className={styles.contactItem}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <div className={styles.trustBanner}>
        <div className={`container ${styles.trustContent}`}>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-emerald)" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>Secure Payments</span>
          </div>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-blue)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>Fast Delivery</span>
          </div>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-purple-light)" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            <span>24/7 Support</span>
          </div>
          <div className={styles.trustItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-amber)" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span>Verified Products</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContent}`}>
          <p className={styles.copyright}>
            &copy; {currentYear} Nexora Digital. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/policies/terms">Terms of Service</Link>
            <Link href="/policies/privacy">Privacy Policy</Link>
            <Link href="/policies/refund">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
