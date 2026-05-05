import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const goldTextStyle = {
    background: 'linear-gradient(90deg, #D4AF37, #FFD700)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block'
  };

  return (
    <footer style={{ backgroundColor: 'var(--bg-bento)', borderTop: '1px solid var(--border-color)', padding: '3rem 5%', marginTop: 'auto' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '3rem', maxWidth: '1920px', margin: '0 auto' }}>
        
        {/* Left Column: Brand */}
        <div style={{ flex: '1 1 250px' }}>
          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', ...goldTextStyle }}>Raghavi Academy</h3>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '300px', lineHeight: 1.6 }}>
            Elevate your academic journey with India’s Premier Ph.D. Faculty for Commerce, Management, and Professional Courses.
          </p>
        </div>

        {/* Center Column: Quick Links & Legal */}
        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', flex: '2 1 400px', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', ...goldTextStyle }}>Quick Links</h4>
            <Link to="/ca" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>CA</Link>
            <Link to="/acca" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>ACCA</Link>
            <Link to="/university" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>University</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', ...goldTextStyle }}>Legal & Support</h4>
            <Link to="/contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Contact Us</Link>
            <Link to="/privacy" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Privacy Policy</Link>
          </div>
        </div>

        {/* Right Column: Partners & Social */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: '1 1 200px' }}>
          <h4 style={{ fontWeight: 600, marginBottom: '0.5rem', ...goldTextStyle }}>Connect & Partners</h4>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>AP Website</a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>Howdybuzz</a>
          <a href="https://www.youtube.com/@raghavi_academy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>YouTube Channel</a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>LinkedIn</a>
        </div>

      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', color: '#D4AF37', fontSize: '0.875rem', fontWeight: 600 }}>
        &copy; {new Date().getFullYear()} Raghavi Academy. All rights reserved.
      </div>
    </footer>
  );
}
