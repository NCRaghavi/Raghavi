import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">

        {/* Brand */}
        <div style={{ flex: '1 1 260px' }}>
          <img src="/ra-logo.svg" alt="Raghavi Academy" className="footer-logo on-dark" />
          <img src="/ra-logo-navy.svg" alt="Raghavi Academy" className="footer-logo on-light" />
          <p style={{ color: 'var(--text-secondary)', maxWidth: '320px', lineHeight: 1.7 }}>
            Ph.D.-led mentorship in Commerce, Accounting, Finance and Economics for CA, UGC-NET, university and Class 11–12 learners.
          </p>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '4rem', flexWrap: 'wrap', flex: '2 1 400px', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h4 className="footer-heading">Programs</h4>
            <Link to="/ca" className="footer-link">CA Foundation &amp; Inter</Link>
            <Link to="/net" className="footer-link">UGC-NET Commerce</Link>
            <Link to="/acca" className="footer-link">ACCA</Link>
            <Link to="/university" className="footer-link">University</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <h4 className="footer-heading">Academy</h4>
            <Link to="/testimonials" className="footer-link">Testimonials</Link>
            <Link to="/resources" className="footer-link">Research &amp; Resources</Link>
            <Link to="/contact" className="footer-link">Contact Us</Link>
            <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          </div>
        </div>

        {/* Connect */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: '1 1 200px' }}>
          <h4 className="footer-heading">Connect</h4>
          <a href="https://www.youtube.com/@raghavi_academy" target="_blank" rel="noopener noreferrer" className="footer-link">YouTube Channel</a>
          <a href="https://www.linkedin.com/in/drncraghavic/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href="https://scholar.google.com/citations?user=HUe-c7EAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="footer-link">Google Scholar</a>
          <a href="https://wa.me/919624132765" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp: +91 96241 32765</a>
        </div>

      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} <span className="gold">Raghavi Academy</span>. All rights reserved.</span>
        <span>Building Foundations. Achieving Excellence.</span>
      </div>
    </footer>
  );
}
