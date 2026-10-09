import { ProductsResponse, Product, Category, FAQResponse, ContactFormData, ContactResponse } from './types';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

class APIClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const res = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      ...options,
    });

    if (!res.ok) {
      const error = await res.json().catch(() => ({ error: 'Request failed' }));
      throw new Error(error.error || `HTTP ${res.status}`);
    }

    return res.json();
  }

  // ─── Products ────────────────────────────────────────────────────────

  async getProducts(params?: {
    category?: string;
    search?: string;
    availability?: string;
    featured?: boolean;
    sort?: string;
    page?: number;
    limit?: number;
  }): Promise<ProductsResponse> {
    const searchParams = new URLSearchParams();
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          searchParams.set(key, String(value));
        }
      });
    }
    const query = searchParams.toString();
    return this.fetch<ProductsResponse>(`/products${query ? `?${query}` : ''}`);
  }

  async getProduct(slug: string): Promise<Product> {
    return this.fetch<Product>(`/products/${slug}`);
  }

  async getFeaturedProducts(): Promise<ProductsResponse> {
    return this.getProducts({ featured: true, limit: 6 });
  }

  // ─── Categories ──────────────────────────────────────────────────────

  async getCategories(): Promise<Category[]> {
    return this.fetch<Category[]>('/categories');
  }

  async getCategory(slug: string): Promise<Category> {
    return this.fetch<Category>(`/categories/${slug}`);
  }

  // ─── FAQ ─────────────────────────────────────────────────────────────

  async getFAQs(): Promise<FAQResponse> {
    return this.fetch<FAQResponse>('/faq');
  }

  // ─── Contact ─────────────────────────────────────────────────────────

  async submitContact(data: ContactFormData): Promise<ContactResponse> {
    return this.fetch<ContactResponse>('/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const api = new APIClient(API_BASE);
export default api;
