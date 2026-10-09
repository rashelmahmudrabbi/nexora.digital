import Link from 'next/link';
import { Product } from '@/lib/types';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

// Category icon mapping
function getCategoryIcon(slug: string): string {
  const icons: Record<string, string> = {
    'ai-productivity': '🧠',
    'gaming-topups': '🎮',
    'software-digital': '📦',
  };
  return icons[slug] || '📦';
}

// Availability badge
function getAvailabilityBadge(availability: string) {
  switch (availability) {
    case 'IN_STOCK':
      return { label: 'In Stock', className: 'badge-success' };
    case 'ON_REQUEST':
      return { label: 'On Request', className: 'badge-warning' };
    case 'UNAVAILABLE':
      return { label: 'Unavailable', className: 'badge-danger' };
    default:
      return { label: availability, className: 'badge-info' };
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  const badge = getAvailabilityBadge(product.availability);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <Link
      href={`/shop/${product.slug}`}
      className={styles.card}
      id={`product-card-${product.slug}`}
    >
      {/* Product Image / Placeholder */}
      <div className={styles.imageWrapper}>
        <div className={styles.imagePlaceholder}>
          <span className={styles.categoryEmoji}>
            {getCategoryIcon(product.category.slug)}
          </span>
        </div>

        {/* Badges overlay */}
        <div className={styles.badges}>
          <span className={`badge ${badge.className}`}>
            {badge.label}
          </span>
          {hasDiscount && (
            <span className="badge badge-danger">
              -{discountPercent}%
            </span>
          )}
        </div>

        {product.isFeatured && (
          <div className={styles.featuredTag}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            Featured
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className={styles.content}>
        <div className={styles.categoryTag}>
          {product.category.name}
        </div>

        <h3 className={styles.name}>{product.name}</h3>

        <p className={styles.description}>
          {product.shortDescription || product.description.substring(0, 100)}
        </p>

        {/* Meta Info */}
        <div className={styles.meta}>
          {product.region && (
            <div className={styles.metaItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              {product.region}
            </div>
          )}
          {product.deliveryTime && (
            <div className={styles.metaItem}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {product.deliveryTime}
            </div>
          )}
        </div>

        {/* Price */}
        <div className={styles.priceRow}>
          <div className={styles.priceGroup}>
            <span className={styles.price}>
              <span className={styles.currency}>৳</span>
              {product.price.toLocaleString()}
            </span>
            {hasDiscount && (
              <span className={styles.originalPrice}>
                ৳{product.originalPrice!.toLocaleString()}
              </span>
            )}
          </div>
          <span className={styles.viewBtn}>
            View Details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
