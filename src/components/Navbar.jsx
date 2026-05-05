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
      <div className="nav-brand" style={{ marginRight: '3rem' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/logo.png" alt="Raghavi Academy Logo" style={{ height: '36px', width: '36px', borderRadius: '8px', objectFit: 'cover' }} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span>Raghavi Academy</span>
            <span style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-secondary)', letterSpacing: '0.5px', marginTop: '-2px', textTransform: 'uppercase' }}>
              Building Foundations. Achieving Excellence
            </span>
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
        <Link to="/resources" onClick={() => setMobileMenuOpen(false)}>Research & Resources</Link>
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
