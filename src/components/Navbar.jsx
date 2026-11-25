import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="nav-brand" style={{ marginRight: '2.5rem' }}>
        <Link to="/" className="brand-lockup" aria-label="Raghavi Academy home">
          <img src="/ra-emblem.svg" alt="" className="brand-emblem on-dark" />
          <img src="/ra-emblem-navy.svg" alt="" className="brand-emblem on-light" />
          <div className="brand-text">
            <span className="brand-name">RAGHAVI</span>
            <span className="brand-sub">Academy</span>
          </div>
        </Link>
      </div>
      <div className={`nav-links ${mobileMenuOpen ? 'open' : ''}`} style={{ alignItems: 'center' }}>
        <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
        <Link to="/ca" onClick={() => setMobileMenuOpen(false)}>CA</Link>
        <Link to="/net" onClick={() => setMobileMenuOpen(false)}>UGC-NET</Link>
        
        <div className="dropdown">
          <button className="dropdown-btn">Professional</button>
          <div className="dropdown-content">
            <Link to="/acca" onClick={() => setMobileMenuOpen(false)}>ACCA</Link>
            <Link to="/cma" onClick={() => setMobileMenuOpen(false)}>CMA</Link>
            <Link to="/cfa" onClick={() => setMobileMenuOpen(false)}>CFA</Link>
            <Link to="/cs" onClick={() => setMobileMenuOpen(false)}>CS</Link>
          </div>
        </div>

        <Link to="/university" onClick={() => setMobileMenuOpen(false)}>University</Link>
        <Link to="/testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link>
        <Link to="/resources" onClick={() => setMobileMenuOpen(false)}>Research & Resources</Link>
        <Link to="/contact" className="nav-cta" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
      </div>
      <div className="nav-actions">
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle Theme">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
