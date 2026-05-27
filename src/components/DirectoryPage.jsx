import React from 'react';
import { ArrowRight, Construction, CheckCircle2, MessageCircle, Download, FileText } from 'lucide-react';
import { materialsData } from '../data/materials';

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
  const currentMaterials = materialsData[title] || [];

  const getUpcomingResources = (title) => {
    switch(title) {
      case "CA Foundation & Intermediate":
        return ["Curated ICAI-Aligned Study Materials", "Masterclass Videos on Taxation & Accounting", "Step-by-Step Practical Problem Solving", "Past 10 Years Paper & RTP Analysis"];
      case "UGC-NET Commerce & Management":
        return ["JRF-Targeted Concept Roadmaps (Paper 1 & 2)", "In-Depth Core Commerce Unit Analysis", "High-Yield MCQ Deconstruction Series", "PYQ Trend Analysis"];
      case "University Programs":
      case "University Level":
        return ["Syllabus-Compliant Reference Notes", "Simplified Economics Modules", "Financial Management Frameworks", "Exam Writing & Presentation Strategies"];
      case "ACCA Global":
        return ["IFRS & Global Accounting Frameworks", "Portfolio Management Masterclasses", "Previous Year Paper Analysis", "Expert Masterclass Video Series", "Live Doubt Clearing Sessions"];
      case "CFA Program":
        return ["Portfolio Management Masterclasses", "IFRS & Global Accounting Frameworks", "Previous Year Paper Analysis", "Expert Masterclass Video Series", "Live Doubt Clearing Sessions"];
      case "CMA Certification":
        return ["Strategic Management Accounting Guides", "IFRS & Global Accounting Frameworks", "Previous Year Paper Analysis", "Expert Masterclass Video Series", "Live Doubt Clearing Sessions"];
      case "Company Secretary (CS)":
        return ["Corporate Governance Frameworks", "IFRS & Global Accounting Frameworks", "Previous Year Paper Analysis", "Expert Masterclass Video Series", "Live Doubt Clearing Sessions"];
      default:
        return [
          "Comprehensive Concept Roadmaps",
          "Curated Study Materials & PDFs",
          "Previous Year Paper Analysis",
          "Expert Masterclass Video Series",
          "Live Doubt Clearing Sessions"
        ];
    }
  };

  const upcomingResources = getUpcomingResources(title);

  return (
    <div className="directory-page" style={{ padding: '4rem 5%', minHeight: '80vh' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header Section */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-1.5px', color: 'var(--text-primary)' }}>
            {title}
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
            {tagline}
          </p>
        </div>

        {currentMaterials.length > 0 ? (
          /* Actual Materials Grid */
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {currentMaterials.map((item) => (
              <div key={item.id} className="bento-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ background: 'rgba(212, 175, 55, 0.1)', padding: '0.75rem', borderRadius: '12px', color: 'var(--accent-color)' }}>
                    <FileText size={24} />
                  </div>
                  {item.isNew && <span className="badge" style={{ fontSize: '0.7rem' }}>New</span>}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{item.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{item.description}</p>
                <a href={item.fileUrl} download className="btn btn-primary" style={{ marginTop: 'auto', padding: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                  <Download size={16} /> Download {item.type}
                </a>
              </div>
            ))}
          </div>
        ) : (
          /* Under Construction State */
          <div style={{ textAlign: 'center' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1.25rem', background: 'rgba(212, 175, 55, 0.1)', borderRadius: '9999px', color: 'var(--accent-color)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '2rem' }}>
              <Construction size={18} />
              CURRICULUM UNDER EXPANSION
            </div>
            
            <div style={{ background: 'var(--bg-secondary)', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)', textAlign: 'left', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
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
              <button onClick={() => window.history.back()} className="btn btn-secondary" style={{ padding: '1rem 2rem' }}>
                Go Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
