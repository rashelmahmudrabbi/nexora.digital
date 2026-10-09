'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate contact submission
    setSubmitted(true);
  };

  return (
    <div className="section" style={{ paddingTop: 'calc(var(--header-height) + var(--space-xl))' }}>
      <div className="container" style={{ maxWidth: '900px' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-3xl)' }}>
          <div className="badge badge-primary" style={{ marginBottom: 'var(--space-sm)' }}>
            Support Center
          </div>
          <h1 style={{ fontSize: 'var(--font-size-4xl)', marginBottom: 'var(--space-md)' }}>
            Get in Touch with Nexora Digital
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Have a question about an order, game top-up, or digital subscription? Reach out anytime.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--space-2xl)',
          }}
        >
          {/* Contact Details Card */}
          <div
            style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border-primary)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--space-2xl)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-xl)',
            }}
          >
            <div>
              <h3 style={{ fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-sm)' }}>
                Direct Channels
              </h3>
              <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                Fastest response via WhatsApp and Messenger during active hours.
              </p>
            </div>

            <div>
              <div style={{ color: 'var(--color-accent-cyan)', fontWeight: 600, fontSize: 'var(--font-size-sm)' }}>
                WhatsApp
              </div>
              <div style={{ fontSize: 'var(--font-size-base)', marginTop: '4px' }}>
                +880 1700-000000
              </div>
            </div>

            <div>
              <div style={{ color: 'var(--color-accent-cyan)', fontWeight: 600, fontSize: 'var(--font-size-sm)' }}>
                Email Support
              </div>
              <div style={{ fontSize: 'var(--font-size-base)', marginTop: '4px' }}>
                support@nexora.digital
              </div>
            </div>

            <div>
              <div style={{ color: 'var(--color-accent-cyan)', fontWeight: 600, fontSize: 'var(--font-size-sm)' }}>
                Operating Hours
              </div>
              <div style={{ fontSize: 'var(--font-size-base)', marginTop: '4px' }}>
                Everyday: 10:00 AM – 1:00 AM (BST)
              </div>
            </div>

            <div
              style={{
                background: 'rgba(0, 212, 255, 0.05)',
                border: '1px solid rgba(0, 212, 255, 0.2)',
                borderRadius: 'var(--radius-lg)',
                padding: 'var(--space-md)',
                fontSize: 'var(--font-size-xs)',
                color: 'var(--color-text-secondary)',
              }}
            >
              🔒 <strong>Notice:</strong> We will never ask for your account password, payment OTP, or PIN under any circumstances.
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              background: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border-primary)',
              borderRadius: 'var(--radius-2xl)',
              padding: 'var(--space-2xl)',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-2xl) 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: 'var(--space-md)' }}>🎉</div>
                <h3 style={{ marginBottom: 'var(--space-sm)' }}>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                  Thank you for contacting us. A support representative will respond via email shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)' }}>
                <div>
                  <label style={{ display: 'block', fontSize: 'var(--font-size-xs)', marginBottom: '6px', color: 'var(--color-text-secondary)' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'var(--color-bg-primary)',
                      border: '1px solid var(--color-border-primary)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-text-primary)',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 'var(--font-size-xs)', marginBottom: '6px', color: 'var(--color-text-secondary)' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'var(--color-bg-primary)',
                      border: '1px solid var(--color-border-primary)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-text-primary)',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 'var(--font-size-xs)', marginBottom: '6px', color: 'var(--color-text-secondary)' }}>
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'var(--color-bg-primary)',
                      border: '1px solid var(--color-border-primary)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-text-primary)',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: 'var(--font-size-xs)', marginBottom: '6px', color: 'var(--color-text-secondary)' }}>
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      background: 'var(--color-bg-primary)',
                      border: '1px solid var(--color-border-primary)',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--color-text-primary)',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: 'var(--space-sm)' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
