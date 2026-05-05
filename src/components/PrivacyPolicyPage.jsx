import React from 'react';

export default function PrivacyPolicyPage() {
  return (
    <div className="home-container" style={{ margin: '0 auto', flexGrow: 1 }}>
      <section className="bento-item" style={{ padding: '4rem', marginTop: '2rem', marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2rem' }}>Privacy Policy</h1>
        
        <div style={{ color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: 1.8 }}>
          <p><strong>Last updated:</strong> May 2026</p>
          
          <h2 style={{ color: 'var(--text-primary)', marginTop: '1rem', fontSize: '1.5rem' }}>1. Information We Collect</h2>
          <p>When you register for a course or contact us via WhatsApp, we may collect personal information such as your name, phone number, email address, and educational background to provide you with the best guidance.</p>
          
          <h2 style={{ color: 'var(--text-primary)', marginTop: '1rem', fontSize: '1.5rem' }}>2. How We Use Your Information</h2>
          <p>Your information is used strictly to communicate course details, provide academic resources, and offer mentorship. We do not sell or share your data with third-party marketing agencies.</p>

          <h2 style={{ color: 'var(--text-primary)', marginTop: '1rem', fontSize: '1.5rem' }}>3. Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information. However, please be aware that no transmission of data over the internet is completely secure.</p>
          
          <h2 style={{ color: 'var(--text-primary)', marginTop: '1rem', fontSize: '1.5rem' }}>4. Contact for Privacy Inquiries</h2>
          <p>If you have any questions regarding this privacy policy or how your data is handled, please reach out to us via our Contact page.</p>
        </div>
      </section>
    </div>
  );
}
