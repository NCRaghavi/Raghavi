import React from 'react';
import { ArrowRight, Construction, CheckCircle2, MessageCircle } from 'lucide-react';

export default function DirectoryPage({ title }) {
  const taglines = {
    "CA Foundation & Intermediate": "Master complex taxation and accounting with structured, concept-driven mentorship.",
    "ACCA Global": "Achieve international recognition with strategies tailored for the global accounting framework.",
    "CMA Certification": "Sharpen your financial strategy and management accounting skills for corporate leadership.",
    "CFA Program": "Crack the gold standard of investment management with rigorous, analytical preparation.",
    "Company Secretary (CS)": "Navigate corporate governance and legal compliance with expert academic guidance.",
    "University Level": "Elevate your B.Com, BBA, M.Com & MBA performance with research-backed academic resources.",
    "UGC-NET Commerce & Management": "Targeted JRF-focused batches designed by a UGC-NET qualified educator."
  };

  const tagline = taglines[title] || "Empowering your academic journey with expert mentorship.";

  const upcomingResources = [
    "Comprehensive Concept Roadmaps",
    "Curated Study Materials & PDFs",
    "Previous Year Paper Analysis",
    "Expert Masterclass Video Series",
    "Live Doubt Clearing Sessions"
  ];

  return (
    <div className="directory-page" style={{ padding: '4rem 5%', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', width: '100%' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1.25rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '9999px', color: 'var(--accent-color)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '2rem' }}>
          <Construction size={18} />
          CURRICULUM UNDER EXPANSION
        </div>
        
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-1.5px', color: 'var(--text-primary)' }}>
          {title}
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '3rem', lineHeight: 1.6 }}>
          {tagline} We are currently digitizing our elite curriculum and research papers for this specialized track to ensure you get the highest quality Ph.D.-led mentorship.
        </p>

        <div style={{ background: 'var(--bg-secondary)', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)', textAlign: 'left', marginBottom: '3rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem', color: 'var(--text-primary)' }}>What's Coming Soon:</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {upcomingResources.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-color)' }} />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a 
            href={`https://wa.me/919624132765?text=I'm interested in the ${title} program.`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary" 
            style={{ padding: '1rem 2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}
          >
            <MessageCircle size={20} />
            Inquire About This Program
          </a>
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-secondary" 
            style={{ padding: '1rem 2rem' }}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
