'use client';

import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { sampleProducts, sampleCategories } from '@/lib/data';
import ProductCard from '@/components/shop/ProductCard';
import Link from 'next/link';

function ShopContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get('category') || 'all'
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('default');

  let products = [...sampleProducts];

  // Category filter
  if (selectedCategory !== 'all') {
    products = products.filter((p) => p.category?.slug === selectedCategory);
  }

  // Search filter
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase();
    products = products.filter(
      (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
    );
  }

  // Sorting
  if (sortBy === 'price-low') {
    products.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    products.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'name') {
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
            <button
              onClick={() => setSelectedCategory('all')}
              className={`btn btn-sm ${selectedCategory === 'all' ? 'btn-primary' : 'btn-secondary'}`}
              type="button"
            >
              All Items ({sampleProducts.length})
            </button>
            {sampleCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.slug)}
                className={`btn btn-sm ${selectedCategory === c.slug ? 'btn-primary' : 'btn-secondary'}`}
                type="button"
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', flexWrap: 'wrap' }}>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '6px 12px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-bg-primary)',
                border: '1px solid var(--color-border-primary)',
                color: 'var(--color-text-primary)',
                fontSize: 'var(--font-size-xs)',
              }}
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                padding: '6px 10px',
                borderRadius: 'var(--radius-md)',
                background: 'var(--color-bg-primary)',
                border: '1px solid var(--color-border-primary)',
                color: 'var(--color-text-primary)',
                fontSize: 'var(--font-size-xs)',
              }}
            >
              <option value="default">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A-Z</option>
            </select>
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
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="btn btn-primary"
              type="button"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>Loading products...</div>}>
      <ShopContent />
    </Suspense>
  );
}
