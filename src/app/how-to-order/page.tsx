import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Order | Nexora Digital',
  description: 'Learn how to easily and safely order digital subscriptions and gaming top-ups on Nexora Digital.',
};

export default function HowToOrderPage() {
  const steps = [
    {
      step: '01',
      title: 'Browse and Select Your Item',
      description:
        'Choose from verified AI productivity tools, game top-ups, or digital services. Double-check the region and plan specifications listed on the product page.',
    },
    {
      step: '02',
      title: 'Provide Required Details Only',
      description:
        'Enter your recipient email, Player ID/IGN (for gaming top-ups), or account details if required. We strictly never ask for your passwords, OTPs, or payment PINs.',
    },
    {
      step: '03',
      title: 'Make Payment via bKash or Nagad',
      description:
        'Select your preferred local mobile financial service (bKash or Nagad) and complete payment using the official reference numbers shown at checkout.',
    },
    {
      step: '04',
      title: 'Instant / Fast Fulfillment',
      description:
        'Gaming top-ups are credited directly to your Player ID within 5-15 minutes. Subscriptions and digital keys are dispatched immediately to your email or WhatsApp.',
    },
  ];

  return (
    <div className="section" style={{ paddingTop: 'calc(var(--header-height) + var(--space-xl))' }}>
      <div className="container" style={{ maxWidth: '860px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <div className="badge badge-primary" style={{ marginBottom: 'var(--space-sm)' }}>
            Transparent Process
          </div>
          <h1 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--space-md)' }}>
            How to Order from Nexora Digital
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-lg)' }}>
            Simple, safe, and prompt delivery tailored for customers in Bangladesh.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
          {steps.map((item) => (
            <div
              key={item.step}
              style={{
                display: 'flex',
                gap: 'var(--space-xl)',
                background: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border-primary)',
                borderRadius: 'var(--radius-xl)',
                padding: 'var(--space-2xl)',
                alignItems: 'flex-start',
              }}
            >
              <div
                style={{
                  fontSize: 'var(--font-size-2xl)',
                  fontWeight: 800,
                  color: 'var(--color-accent-cyan)',
                  background: 'rgba(0, 212, 255, 0.08)',
                  padding: 'var(--space-sm) var(--space-md)',
                  borderRadius: 'var(--radius-lg)',
                }}
              >
                {item.step}
              </div>
              <div>
                <h3 style={{ fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-xs)' }}>
                  {item.title}
                </h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Support Note */}
        <div
          style={{
            marginTop: 'var(--space-3xl)',
            textAlign: 'center',
            padding: 'var(--space-2xl)',
            background: 'var(--gradient-card)',
            borderRadius: 'var(--radius-2xl)',
            border: '1px solid var(--color-border-primary)',
          }}
        >
          <h3 style={{ marginBottom: 'var(--space-sm)' }}>Need assistance before ordering?</h3>
          <p style={{ color: 'var(--color-text-secondary)', marginBottom: 'var(--space-lg)' }}>
            Our customer support team is available 24/7 to answer your questions.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-md)', justifyContent: 'center' }}>
            <Link href="/shop" className="btn btn-primary">
              Start Shopping
            </Link>
            <Link href="/contact" className="btn btn-secondary">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
