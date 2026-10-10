'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImg from '../../../public/logo.jpg';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/how-to-order', label: 'How to Order' },
  { href: '/about', label: 'About' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo} id="header-logo">
          <span className={styles.logoIcon}>N</span>
          <span className={styles.logoText}>
            Nexora<span className={styles.logoAccent}>Digital</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav} id="main-navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ''}`}
              id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.label}
              {pathname === link.href && <span className={styles.activeIndicator} />}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link href="/shop" className={`btn btn-primary btn-sm ${styles.ctaBtn}`} id="header-browse-btn">
          Browse Products
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className={`${styles.menuToggle} ${isMobileMenuOpen ? styles.menuOpen : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.mobileNavLink} ${pathname === link.href ? styles.active : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/shop"
            className="btn btn-primary"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}
          >
            Browse Products
          </Link>
        </nav>
      </div>
    </header>
  );
}
