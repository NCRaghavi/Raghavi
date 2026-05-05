import React from 'react';

export default function DirectoryPage({ title }) {
  const taglines = {
    "CA Foundation & Intermediate": "Master complex taxation and accounting with structured, concept-driven mentorship.",
    "ACCA Global": "Achieve international recognition with strategies tailored for the global accounting framework.",
    "CMA Certification": "Sharpen your financial strategy and management accounting skills for corporate leadership.",
    "CFA Program": "Crack the gold standard of investment management with rigorous, analytical preparation.",
    "Company Secretary (CS)": "Navigate corporate governance and legal compliance with expert academic guidance.",
    "University Level": "Elevate your B.Com, BBA, M.Com & MBA performance with research-backed academic resources.",
    "UGC-NET Commerce & Management": "Targeted JRF-focused batches designed by a UGC-NET qualified educator.",
    "Book Recommendations": "Discover a curated collection of must-read books, research papers, and exam strategies recommended by Dr. Raghavi."
  };

  const tagline = taglines[title] || "Empowering your academic journey with expert mentorship.";

  return (
    <div className="directory-page">
      <header className="directory-header">
        <h1>{title}</h1>
        <p>{tagline}</p>
      </header>
      <div className="content-placeholder">
        <p>This silo directory will contain targeted content for {title}.</p>
      </div>
    </div>
  );
}
