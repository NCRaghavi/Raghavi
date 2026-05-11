import React, { useState } from 'react';
import { Star, Quote, GraduationCap, BookOpen, Users } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export default function TestimonialsPage() {
  const [activeTab, setActiveTab] = useState('students');

  const categories = [
    { id: 'students', label: 'Student Success', icon: <Users size={20} /> },
    { id: 'scholars', label: 'Ph.D. & Research Mentorship', icon: <GraduationCap size={20} /> }
  ];

  const currentTestimonials = testimonialsData[activeTab] || [];

  return (
    <div className="home-container" style={{ margin: '0 auto', flexGrow: 1, padding: '4rem 5%' }}>
      <section className="bento-item" style={{ padding: '4rem', textAlign: 'center', background: 'var(--bg-secondary)', borderRadius: '32px', boxShadow: 'var(--shadow-md)' }}>
        <span className="badge" style={{ marginBottom: '1.5rem' }}>Social Proof</span>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-1.5px' }}>Student & Scholar Stories</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 4rem', lineHeight: 1.6 }}>
          Discover how Dr. Raghavi's Ph.D.-led mentorship has transformed the academic and professional trajectories of commerce students and research scholars across India.
        </p>

        {/* Category Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '1rem 2rem',
                borderRadius: '16px',
                border: '1px solid',
                borderColor: activeTab === cat.id ? 'var(--accent-color)' : 'var(--border-color)',
                background: activeTab === cat.id ? 'var(--accent-color)' : 'transparent',
                color: activeTab === cat.id ? 'white' : 'var(--text-primary)',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeTab === cat.id ? '0 10px 20px rgba(37, 99, 235, 0.2)' : 'none'
              }}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {currentTestimonials.length > 0 ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', textAlign: 'left' }}>
            {currentTestimonials.map((testimonial) => (
              <div key={testimonial.id} style={{ 
                background: '#0a192f', 
                padding: '2.5rem 1.5rem', // Reduced side padding for a more compact feel
                borderRadius: '24px', 
                border: '1px solid rgba(212, 175, 55, 0.3)', 
                position: 'relative', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                transition: 'transform 0.3s ease'
              }}>
                {/* 0. Institutional Stamp */}
                {testimonial.institution && (
                  <div style={{ 
                    position: 'absolute', 
                    top: '1rem', 
                    padding: '0.25rem 0.75rem', 
                    border: '1px solid rgba(212, 175, 55, 0.4)', 
                    borderRadius: '6px',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    color: 'var(--accent-color)',
                    textTransform: 'uppercase',
                    background: 'rgba(212, 175, 55, 0.05)',
                  }}>
                    {testimonial.institution}
                  </div>
                )}

                {/* 1. Circular Photo (Increased by 25%) */}
                <div style={{ 
                  width: '150px', // Increased from 120px
                  height: '150px', 
                  borderRadius: '50%', 
                  border: '4px solid #D4AF37', 
                  overflow: 'hidden', 
                  marginTop: '1.5rem', // Spacing from stamp
                  marginBottom: '1rem', // Tightened spacing
                  background: '#112240',
                  boxShadow: '0 8px 30px rgba(212, 175, 55, 0.15)'
                }}>
                  {testimonial.image ? (
                    <img src={testimonial.image} alt={testimonial.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                      <Users size={50} />
                    </div>
                  )}
                </div>

                {/* 2. 5 Stars - Tightened */}
                <div style={{ display: 'flex', gap: '0.2rem', color: '#FFD700', marginBottom: '1rem' }}>
                  {[...Array(testimonial.stars || 5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* 3. Centered Italicized Quote - Increased Font Size */}
                <p style={{ 
                  color: '#e6f1ff', 
                  fontSize: '1.1rem', // Increased slightly to fill space
                  lineHeight: 1.6, 
                  marginBottom: '1.5rem', // Tightened spacing
                  fontStyle: 'italic', 
                  fontFamily: 'Georgia, serif',
                  maxWidth: '100%'
                }}>
                  "{testimonial.text}"
                </p>

                {/* 4. Name & Two-Line Designation */}
                <div style={{ width: '100%', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                  <h4 style={{ 
                    fontWeight: 800, 
                    color: 'var(--accent-color)', 
                    fontSize: '1.15rem', 
                    marginBottom: '0.35rem',
                    letterSpacing: '-0.1px'
                  }}>
                    {testimonial.name}
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                    <p style={{ 
                      fontSize: '0.8rem', 
                      color: '#ffffff', 
                      fontWeight: 700, 
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {testimonial.course || testimonial.topic}
                    </p>
                    {testimonial.location && (
                      <p style={{ 
                        fontSize: '0.75rem', 
                        color: 'rgba(255, 255, 255, 0.7)', 
                        fontWeight: 500
                      }}>
                        {testimonial.location}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ padding: '6rem 2rem', border: '2px dashed var(--border-color)', borderRadius: '32px', color: 'var(--text-secondary)' }}>
            <BookOpen size={48} style={{ marginBottom: '1.5rem', opacity: 0.3 }} />
            <h3>Real stories are currently being uploaded.</h3>
            <p>We only feature authentic, verified success stories from our alumni and scholars.</p>
          </div>
        )}
      </section>
    </div>
  );
}
