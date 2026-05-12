import React, { useState } from 'react';
import { Star, GraduationCap, BookOpen, Users, Linkedin, Instagram } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export default function TestimonialsPage() {
  const [activeTab, setActiveTab] = useState('students');

  const categories = [
    { id: 'students', label: 'Student Success', icon: <Users size={20} /> },
    { id: 'scholars', label: 'Ph.D. & Research Mentorship', icon: <GraduationCap size={20} /> }
  ];

  const currentTestimonials = [...(testimonialsData[activeTab] || [])].sort((a, b) => (b.priority || 0) - (a.priority || 0));

  return (
    <div className="home-container" style={{ margin: '0 auto', flexGrow: 1, padding: '4rem 5%' }}>
      <section className="bento-item" style={{ padding: '4rem', textAlign: 'center', background: 'var(--bg-secondary)', borderRadius: '32px', boxShadow: 'var(--shadow-md)' }}>
        <span className="badge" style={{ marginBottom: '1.5rem' }}>Social Proof</span>
        <h1 className="testimonials-header">Student & Scholar Stories</h1>
        <p className="testimonials-description">
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
          <div className="testimonial-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '1.25rem', 
            textAlign: 'left',
            justifyContent: 'center',
            maxWidth: '1400px',
            margin: '0 auto'
          }}>
            {currentTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card" style={{ 
                background: 'var(--bg-card)', 
                padding: '2rem 1.5rem', 
                borderRadius: '24px', 
                border: '1px solid var(--border-color)', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: 'var(--shadow-bento)',
                transition: 'transform 0.3s ease',
                position: 'relative',
                minHeight: '450px'
              }}>
                {testimonial.institution && (
                  <div style={{ 
                    position: 'absolute',
                    top: '0.75rem',
                    width: '100%',
                    color: '#D4AF37',
                    opacity: 0.6,
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    lineHeight: 1.3
                  }}>
                    {testimonial.institution.includes(' - ') ? (
                      <>
                        {testimonial.institution.split(' - ')[0]} - {testimonial.institution.split(' - ')[1].split(',')[0]}<br />
                        {testimonial.institution.split(',')[1]}
                      </>
                    ) : testimonial.institution}
                  </div>
                )}
                
                {/* Portrait */}
                <div className="testimonial-portrait" style={{ 
                  width: '120px', 
                  height: '120px', 
                  borderRadius: '50%', 
                  border: '3px solid #D4AF37', 
                  overflow: 'hidden', 
                  marginTop: testimonial.institution ? '1.5rem' : '0',
                  marginBottom: '1.25rem',
                  background: 'var(--bg-secondary)',
                  boxShadow: '0 10px 25px rgba(212, 175, 55, 0.2)'
                }}>
                  {testimonial.image ? (
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        objectFit: 'cover',
                        ...(testimonial.photoStyle || {})
                      }} 
                    />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                      <Users size={50} />
                    </div>
                  )}
                </div>

                {/* Stars */}
                <div style={{ display: 'flex', gap: '0.3rem', color: '#FFD700', marginBottom: '1rem' }}>
                  {[...Array(testimonial.stars || 5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Text */}
                <p style={{ 
                  color: 'var(--text-quote)', 
                  fontSize: '0.95rem', 
                  lineHeight: 1.6, 
                  marginBottom: '1.5rem', 
                  fontStyle: 'italic', 
                  fontFamily: 'Georgia, serif',
                  maxWidth: '100%',
                  flexGrow: 1
                }}>
                  "{testimonial.text}"
                </p>

                {/* Signature */}
                <div style={{ width: '100%', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
                  <h4 style={{ 
                    fontWeight: 800, 
                    color: '#D4AF37', 
                    fontSize: '1.2rem', 
                    marginBottom: '0.4rem',
                    letterSpacing: '-0.3px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}>
                    {testimonial.name}
                    {testimonial.linkedin && (
                      <a 
                        href={testimonial.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#0077B5', opacity: 0.8, display: 'flex', transition: 'opacity 0.2s' }}
                        onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                        onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}
                      >
                        <Linkedin size={18} fill="#0077B5" color="white" />
                      </a>
                    )}
                    {testimonial.instagram && (
                      <a 
                        href={testimonial.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#E4405F', opacity: 0.8, display: 'flex', transition: 'opacity 0.2s' }}
                        onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                        onMouseOut={(e) => e.currentTarget.style.opacity = '0.8'}
                      >
                        <Instagram size={18} />
                      </a>
                    )}
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                    <p style={{ 
                      fontSize: '0.8rem', 
                      color: '#4dabf7', 
                      fontWeight: 800, 
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {testimonial.topic || testimonial.course}
                    </p>
                    {testimonial.college && (
                      <p style={{ 
                        fontSize: '0.75rem', 
                        color: 'var(--text-secondary)', 
                        fontWeight: 700
                      }}>
                        {testimonial.college}
                      </p>
                    )}
                    {testimonial.location && (
                      <p style={{ 
                        fontSize: '0.7rem', 
                        color: 'var(--text-secondary)', 
                        fontWeight: 600
                      }}>
                        {testimonial.location}
                      </p>
                    )}
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
