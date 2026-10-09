import { sampleProducts, sampleCategories } from '@/lib/data';
import ProductCard from '@/components/shop/ProductCard';
import Link from 'next/link';

interface ShopProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
    sort?: string;
  }>;
}

export default async function ShopPage({ searchParams }: ShopProps) {
  const resolvedParams = await searchParams;
  const currentCategory = resolvedParams.category || 'all';
  const currentSearch = (resolvedParams.search || '').toLowerCase();
  const currentSort = resolvedParams.sort || 'default';

  let products = [...sampleProducts];

  // Category filter
  if (currentCategory !== 'all') {
    products = products.filter((p) => p.category?.slug === currentCategory);
  }

  // Search filter
  if (currentSearch) {
    products = products.filter(
      (p) =>
        p.name.toLowerCase().includes(currentSearch) ||
        p.description.toLowerCase().includes(currentSearch)
    );
  }

  // Sort
  if (currentSort === 'price-low') {
    products.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    products.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'name') {
    products.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="section" style={{ paddingTop: 'calc(var(--header-height) + var(--space-xl))' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 'var(--space-2xl)' }}>
          <div className="badge badge-primary" style={{ marginBottom: 'var(--space-sm)' }}>
            Nexora Store Catalog
          </div>
          <h1 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--space-xs)' }}>
            Digital Products & Subscriptions
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px' }}>
            Verified accounts, instant digital vouchers, and gaming credits with transparent local pricing.
          </p>
        </div>

        {/* Filters and Navigation */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-md)',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 'var(--space-2xl)',
            padding: 'var(--space-md) var(--space-lg)',
            background: 'var(--color-bg-secondary)',
            borderRadius: 'var(--radius-xl)',
            border: '1px solid var(--color-border-primary)',
          }}
        >
          {/* Categories Tab Pill */}
          <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
            <Link
              href="/shop"
              className={`btn btn-sm ${currentCategory === 'all' ? 'btn-primary' : 'btn-secondary'}`}
            >
              All Items ({sampleProducts.length})
            </Link>
            {sampleCategories.map((c) => (
              <Link
                key={c.id}
                href={`/shop?category=${c.slug}`}
                className={`btn btn-sm ${currentCategory === c.slug ? 'btn-primary' : 'btn-secondary'}`}
              >
                {c.name}
              </Link>
            ))}
          </div>

          {/* Sort Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
            <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-muted)' }}>
              Showing {products.length} products
            </span>
          </div>
        </div>

        {/* Product Grid */}
        {products.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: 'var(--space-xl)',
            }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: 'var(--space-4xl) var(--space-xl)',
              background: 'var(--color-bg-secondary)',
              borderRadius: 'var(--radius-2xl)',
              border: '1px solid var(--color-border-primary)',
            }}
          >
            <h3 style={{ marginBottom: 'var(--space-sm)' }}>No products found</h3>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)' }}>
              Try adjusting your category filter or search keywords.
            </p>
            <Link href="/shop" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
