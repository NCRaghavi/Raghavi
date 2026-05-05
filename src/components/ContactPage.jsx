import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="home-container" style={{ margin: '0 auto', flexGrow: 1 }}>
      <section className="bento-item" style={{ padding: '4rem', marginTop: '2rem', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>Contact Us</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.6 }}>
          Have questions about our batches, resources, or career pathways? Get in touch with us directly and start your journey toward academic excellence.
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent-color)', borderRadius: '16px' }}>
              <Phone size={32} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>WhatsApp / Call</h3>
              <p style={{ color: 'var(--text-secondary)' }}>+91 96241 32765</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ padding: '1rem', backgroundColor: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent-color)', borderRadius: '16px' }}>
              <Mail size={32} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 600 }}>Email</h3>
              <p style={{ color: 'var(--text-secondary)' }}>support@raghaviacademy.com</p>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
