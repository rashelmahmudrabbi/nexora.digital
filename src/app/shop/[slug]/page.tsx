import { sampleProducts } from '@/lib/data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return sampleProducts.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const product = sampleProducts.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    return {
      title: 'Product Not Found | Nexora Digital',
    };
  }

  return {
    title: `${product.name} | Nexora Digital`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = await params;
  const product = sampleProducts.find((p) => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  const formatBDT = (amount: number) => {
    return new Intl.NumberFormat('en-BD', {
      style: 'currency',
      currency: 'BDT',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="section" style={{ paddingTop: 'calc(var(--header-height) + var(--space-xl))' }}>
      <div className="container">
        {/* Breadcrumb */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-sm)',
            fontSize: 'var(--font-size-xs)',
            color: 'var(--color-text-muted)',
            marginBottom: 'var(--space-xl)',
          }}
        >
          <Link href="/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
            Shop
          </Link>
          <span>/</span>
          <span style={{ color: 'var(--color-accent-cyan)' }}>{product.name}</span>
        </div>

        {/* Product Layout Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-3xl)',
            alignItems: 'start',
          }}
        >
          {/* Product Media/Hero Display */}
          <div
            style={{
              background: 'var(--gradient-card)',
              borderRadius: 'var(--radius-2xl)',
              border: '1px solid var(--color-border-primary)',
              padding: 'var(--space-3xl)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '380px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'var(--gradient-accent)',
              }}
            />
            <div
              style={{
                fontSize: '5rem',
                marginBottom: 'var(--space-lg)',
                padding: 'var(--space-xl)',
                background: 'rgba(0, 212, 255, 0.08)',
                borderRadius: 'var(--radius-full)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {product.category?.slug === 'ai-productivity' ? '🧠' : product.category?.slug === 'gaming-top-ups' ? '🎮' : '📦'}
            </div>

            <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap', justifyContent: 'center' }}>
              <span className="badge badge-success">Verified Supply</span>
              <span className="badge badge-primary">{product.region || 'Global'}</span>
              <span className="badge badge-warning">{product.deliveryTime || 'Instant'}</span>
            </div>
          </div>

          {/* Product Info & Action */}
          <div>
            <div style={{ marginBottom: 'var(--space-md)' }}>
              <span
                style={{
                  fontSize: 'var(--font-size-xs)',
                  color: 'var(--color-accent-cyan)',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                }}
              >
                {product.category?.name}
              </span>
              <h1 style={{ fontSize: 'var(--font-size-3xl)', marginTop: 'var(--space-xs)' }}>
                {product.name}
              </h1>
            </div>

            {/* Price Box */}
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: 'var(--space-md)',
                margin: 'var(--space-lg) 0',
                padding: 'var(--space-md) var(--space-lg)',
                background: 'var(--color-bg-secondary)',
                borderRadius: 'var(--radius-xl)',
                border: '1px solid var(--color-border-primary)',
                width: 'fit-content',
              }}
            >
              <span
                style={{
                  fontSize: 'var(--font-size-3xl)',
                  fontWeight: 800,
                  color: 'var(--color-accent-cyan)',
                }}
              >
                {formatBDT(product.price)}
              </span>
              {product.originalPrice && (
                <span
                  style={{
                    fontSize: 'var(--font-size-lg)',
                    color: 'var(--color-text-muted)',
                    textDecoration: 'line-through',
                  }}
                >
                  {formatBDT(product.originalPrice)}
                </span>
              )}
            </div>

            <p
              style={{
                color: 'var(--color-text-secondary)',
                lineHeight: 1.6,
                marginBottom: 'var(--space-xl)',
              }}
            >
              {product.description}
            </p>

            {/* Details Table */}
            <div
              style={{
                background: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border-primary)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-lg)',
                marginBottom: 'var(--space-2xl)',
              }}
            >
              <h4 style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--space-md)', color: 'var(--color-text-primary)' }}>
                Fulfillment & Requirements
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)', fontSize: 'var(--font-size-sm)' }}>
                <div>
                  <span style={{ color: 'var(--color-text-muted)' }}>Region: </span>
                  <strong>{product.region || 'Global'}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--color-text-muted)' }}>Estimated Delivery: </span>
                  <strong>{product.deliveryTime || '5 - 15 minutes'}</strong>
                </div>
                <div>
                  <span style={{ color: 'var(--color-text-muted)' }}>Availability: </span>
                  <strong style={{ color: product.availability === 'IN_STOCK' ? '#10b981' : '#ef4444' }}>
                    {product.availability === 'IN_STOCK' ? 'In Stock' : 'On Request / Unavailable'}
                  </strong>
                </div>
                <div>
                  <span style={{ color: 'var(--color-text-muted)' }}>Payment: </span>
                  <strong>bKash / Nagad</strong>
                </div>
              </div>
            </div>

            {/* Order Action Button */}
            <div style={{ display: 'flex', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="btn btn-primary btn-lg"
                style={{ flex: 1, minWidth: '200px' }}
              >
                Order via Support
              </Link>
              <a
                href="https://wa.me/8801700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-lg"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
