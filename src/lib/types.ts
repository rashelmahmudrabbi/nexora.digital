// ─── Product Types ───────────────────────────────────────────────────────

export type Availability = 'IN_STOCK' | 'ON_REQUEST' | 'UNAVAILABLE';

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string | null;
  description: string;
  categoryId: string;
  category: CategoryRef;
  price: number;
  originalPrice: number | null;
  availability: Availability;
  image: string | null;
  images: string[];
  region: string | null;
  plan: string | null;
  deliveryTime: string | null;
  fulfillmentMethod: string | null;
  requirements: string | null;
  restrictions: string | null;
  refundTerms: string | null;
  supportPeriod: string | null;
  isFeatured: boolean;
  isPublished: boolean;
  tags: string[];
  viewCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryRef {
  id: string;
  name: string;
  slug: string;
}

// ─── Category Types ──────────────────────────────────────────────────────

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
  image: string | null;
  order: number;
  isActive: boolean;
  _count?: {
    products: number;
  };
  products?: Product[];
}

// ─── FAQ Types ───────────────────────────────────────────────────────────

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string | null;
}

export interface FAQResponse {
  faqs: FAQ[];
  grouped: Record<string, FAQ[]>;
}

// ─── Contact Types ───────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ContactResponse {
  message: string;
  id: string;
}

// ─── Order Types ─────────────────────────────────────────────────────────

export interface OrderItem {
  productId: string;
  quantity: number;
  region?: string;
  playerInfo?: string;
}

export interface CreateOrderData {
  customerName: string;
  customerEmail: string;
  customerPhone?: string;
  customerNotes?: string;
  paymentMethod?: string;
  items: OrderItem[];
}

export interface OrderResponse {
  message: string;
  orderRef: string;
  totalAmount: number;
  status: string;
}

// ─── Pagination ──────────────────────────────────────────────────────────

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
  hasMore: boolean;
}

export interface ProductsResponse {
  products: Product[];
  pagination: Pagination;
}

// ─── API Error ───────────────────────────────────────────────────────────

export interface APIError {
  error: string;
  details?: Record<string, string[]>;
}
