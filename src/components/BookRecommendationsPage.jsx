import React, { useState } from 'react';
import { BookOpen, Globe, Download, ShoppingBag, GraduationCap, Landmark, ChevronRight, Play, FileText } from 'lucide-react';

export default function BookRecommendationsPage() {
  const [activeCourse, setActiveCourse] = useState('CA Foundation & Inter');

  const courseData = {
    'CA Foundation & Inter': [
      { title: 'Advanced Financial Accounting', category: 'Financial Accounting', desc: 'Step-by-step mastery of complex standards and corporate reporting frameworks.' },
      { title: 'Direct Tax Laws', category: 'Taxation', desc: 'Simplified analysis of current Indian tax statutes and practical case studies.' }
    ],
    'ACCA Global': [
      { title: 'Strategic Business Reporting (SBR)', category: 'Reporting', desc: 'Expert guidance on professional ethics and advanced corporate reporting.' },
      { title: 'Audit & Assurance', category: 'Auditing', desc: 'Mastering international auditing standards for global certification success.' }
    ],
    'UGC-NET Commerce': [
      { title: 'NTA UGC-NET Commerce Guide', category: 'Paper II', desc: 'Focused study material covering all 10 units with previous year solved papers.' },
      { title: 'Teaching & Research Aptitude', category: 'Paper I', desc: 'Comprehensive preparation for the general research and teaching paper.' }
    ],
    'University Levels': [
      { title: 'Financial Management', category: 'B.Com/M.Com', desc: 'Foundational concepts of capital budgeting, working capital, and leverage.' },
      { title: 'Cost Accounting', category: 'B.Com/M.Com', desc: 'Principles of costing, budgeting, and variance analysis for degree students.' }
    ]
  };

  const courses = Object.keys(courseData);

  return (
    <div className="home-container" style={{ margin: '0 auto', flexGrow: 1 }}>
      <section className="bento-item" style={{ padding: '2.5rem 3rem', marginTop: '1rem', marginBottom: '1rem' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="badge" style={{ marginBottom: '1.5rem' }}>Knowledge Repository</span>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-1px' }}>Research & Resources</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
            Explore Dr. Raghavi's academic portfolio, curated textbooks, and national research projects designed for academic excellence.
          </p>
        </div>

        {/* 1. Featured Authored Book */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            Featured Author Release
          </h2>
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(212, 175, 55, 0.02))', 
            border: '1px solid var(--accent-color)', 
            borderRadius: '24px', 
            padding: '3rem', 
            display: 'flex', 
            gap: '3rem', 
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <div style={{ flex: '1 1 180px', maxWidth: '220px', margin: '0 auto' }}>
              <div style={{ width: '100%', aspectRatio: '3/4', backgroundColor: 'var(--bg-secondary)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-md)', overflow: 'hidden' }}>
                <img src="/A to Z of Economics.jpg" alt="Book Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
            <div style={{ flex: '2 1 400px' }}>
              <div style={{ display: 'inline-block', background: 'var(--accent-color)', color: '#000', padding: '0.2rem 0.6rem', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                Bestseller
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem', lineHeight: 1.3 }}>A to Z Economics Encyclopedic Dictionary</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                A comprehensive economics dictionary authored by Dr. Raghavi. An essential, high-impact reference guide meticulously designed to decode complex economic terminologies for commerce students, researchers, and professionals alike.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="https://www.amazon.in/Z-Economics-Encyclopedic-Dictionary-ebook/dp/B0F1KTB658" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <ShoppingBag size={20} /> Buy on Amazon
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Recommended Books by Course (Interactive) */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            Recommended Books by Course
          </h2>
          
          {/* Tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2.5rem', justifyContent: 'center' }}>
            {courses.map((course) => (
              <button 
                key={course}
                onClick={() => setActiveCourse(course)}
                style={{ 
                  padding: '0.75rem 1.25rem', 
                  borderRadius: '12px', 
                  border: '1px solid',
                  borderColor: activeCourse === course ? 'var(--accent-color)' : 'var(--border-color)',
                  backgroundColor: activeCourse === course ? 'rgba(212, 175, 55, 0.1)' : 'var(--bg-secondary)',
                  color: activeCourse === course ? 'var(--accent-color)' : 'var(--text-secondary)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {course}
              </button>
            ))}
          </div>

          {/* Dynamic Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {courseData[activeCourse].map((book, idx) => (
              <div key={idx} style={{ background: 'var(--bg-secondary)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: 'var(--accent-color)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '1px' }}>
                  {book.category}
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>{book.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, flexGrow: 1, marginBottom: '1.5rem' }}>{book.desc}</p>
                <button className="btn btn-outline btn-sm" style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Resource <ChevronRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Recommended Curriculum Texts */}
        <div style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            Curriculum Essentials
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div style={{ background: 'var(--bg-primary)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>Reference Standard</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Indian Financial System</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>Comprehensive guide to banking, money markets, and capital markets in India.</p>
            </div>
            <div style={{ background: 'var(--bg-primary)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginBottom: '0.5rem', fontWeight: 600 }}>Advanced Study</div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>Strategic Management Policy</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>Highly recommended for NET Commerce and graduate-level corporate strategy.</p>
            </div>
          </div>
        </div>

        {/* 4. National Projects & Research (Shifted Down) */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
            National Projects & Academic Research
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            
            {/* Research & Video Lectures List */}
            <div style={{ marginTop: '3rem' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>Academic & National Initiatives</h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                
                {/* 1. Ph.D. Thesis */}
                <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--accent-color)', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '120px', height: '80px', flexShrink: 0, background: 'rgba(212, 175, 55, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-color)' }}>
                    <Landmark size={32} />
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ color: 'var(--accent-color)', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.25rem' }}>Ph.D. Thesis Repository</div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>Full Ph.D. Thesis in Accountancy</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0' }}>Gujarat University. Officially archived on Shodhganga (INFLIBNET Center).</p>
                  </div>
                  <a href="http://hdl.handle.net/10603/286495" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" style={{ flexShrink: 0, borderColor: 'var(--accent-color)', color: 'var(--accent-color)', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Globe size={14} /> View Thesis
                  </a>
                </div>

                {/* 2. NPTEL */}
                <div style={{ background: 'var(--bg-secondary)', padding: '1.5rem', borderRadius: '16px', border: '1px solid #FF9933', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <div style={{ width: '120px', height: '80px', flexShrink: 0, background: 'linear-gradient(135deg, rgba(255, 153, 51, 0.1), transparent)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FF9933' }}>
                    <FileText size={32} />
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ color: '#FF9933', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.25rem' }}>NPTEL | IIT Roorkee</div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.25rem' }}>MCDM Techniques Using R</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0' }}>National Programme on Technology Enhanced Learning.</p>
                  </div>
                  <a href="https://drive.google.com/file/d/1fHXJYJ1eDIrakGVzY6kBZ3dDg-mGIzvI/view" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" style={{ flexShrink: 0, borderColor: '#FF9933', color: '#FF9933', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                    <FileText size={14} /> View Material
                  </a>
                </div>

                {/* 3. EMMRC Cards (Descending Order) */}
                {[
                  { title: "Accounting for Non Trading Concerns : Part-5", url: "https://www.youtube.com/watch?v=6hphZHIDLNw", id: "6hphZHIDLNw" },
                  { title: "Accounting for Non-Trading Concerns : Part-4", url: "https://www.youtube.com/watch?v=MN6Pr16PM1M&t=1s", id: "MN6Pr16PM1M" },
                  { title: "Accounting for Non-Trading Concerns : Part-3", url: "https://www.youtube.com/watch?v=lN4N3hDJ-Nc", id: "lN4N3hDJ-Nc" },
                  { title: "Accounting for Non-Trading Concerns : Part-2", url: "https://www.youtube.com/watch?v=A98SDuGM-LY", id: "A98SDuGM-LY" },
                  { title: "Accounting for Non-Trading Concern : Part-1", url: "https://www.youtube.com/watch?v=WgcbW4xqrW4", id: "WgcbW4xqrW4" },
                  { title: "Derivatives in International Finance Market", url: "https://www.youtube.com/watch?v=2O3J0bqyGCM&list=PLpXkA5equMngIc6vBZDXvMkI89OyGsT81&index=7", id: "2O3J0bqyGCM" },
                  { title: "Information Technology Act, 2000 Part 2", url: "https://www.youtube.com/watch?v=WpsII1nYzD8", id: "WpsII1nYzD8" },
                  { title: "Information Technology Act, 2000 Part 1", url: "https://youtu.be/os2Jt4pE4qk?si=NCTy4HN70gbWvepT", id: "os2Jt4pE4qk" }
                ].map((item, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-secondary)', padding: '1rem', borderRadius: '16px', border: '1px solid var(--border-color)', display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                    <div style={{ position: 'relative', width: '120px', height: '68px', flexShrink: 0, borderRadius: '8px', overflow: 'hidden' }}>
                      <img 
                        src={`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`} 
                        alt={item.title} 
                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
                      />
                      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0,0,0,0.6)', borderRadius: '50%', padding: '0.25rem', display: 'flex' }}>
                        <Play fill="white" color="white" size={16} />
                      </div>
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <div style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.25rem' }}>EMMRC | Gujarat University</div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0' }}>{item.title}</h4>
                    </div>
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm" style={{ flexShrink: 0, display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Play size={14} /> Watch Video
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}
