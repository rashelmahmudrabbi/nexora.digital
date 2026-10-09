import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Nexora Digital | AI Tools, Digital Products & Gaming Top-Ups',
    template: '%s | Nexora Digital',
  },
  description: 'Explore selected digital tools, eligible subscriptions, and gaming top-ups at Nexora Digital. Check current availability, transparent prices, fulfilment details, and customer support.',
  keywords: ['Digital products Bangladesh', 'AI tools Bangladesh', 'Free Fire top-up Bangladesh', 'PUBG Mobile UC top-up', 'Gaming top-up Bangladesh', 'Nexora Digital'],
  authors: [{ name: 'Nexora Digital' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Nexora Digital',
    title: 'Nexora Digital | AI Tools, Digital Products & Gaming Top-Ups',
    description: 'Explore selected digital tools, eligible subscriptions, and gaming top-ups at Nexora Digital.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#06080f" />
      </head>
      <body>
        <Header />
        <main style={{ minHeight: '100vh', paddingTop: '5rem' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
