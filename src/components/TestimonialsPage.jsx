import React, { useState } from 'react';
import { Star, GraduationCap, BookOpen, Users } from 'lucide-react';
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
                padding: '4rem 2rem', 
                borderRadius: '32px', 
                border: '1px solid rgba(212, 175, 55, 0.3)', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                transition: 'transform 0.3s ease'
              }}>
                {/* 1. Ultra-Large Photo (220px) */}
                <div style={{ 
                  width: '220px', 
                  height: '220px', 
                  borderRadius: '50%', 
                  border: '5px solid #D4AF37', 
                  overflow: 'hidden', 
                  marginBottom: '2rem',
                  background: '#112240',
                  boxShadow: '0 15px 40px rgba(212, 175, 55, 0.3)'
                }}>
                  {testimonial.image ? (
                    <img src={testimonial.image} alt={testimonial.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D4AF37' }}>
                      <Users size={80} />
                    </div>
                  )}
                </div>

                {/* 2. Star Rating */}
                <div style={{ display: 'flex', gap: '0.4rem', color: '#FFD700', marginBottom: '1.5rem' }}>
                  {[...Array(testimonial.stars || 5)].map((_, i) => (
                    <Star key={i} size={22} fill="currentColor" />
                  ))}
                </div>

                {/* 3. Testimonial Text */}
                <p style={{ 
                  color: '#e6f1ff', 
                  fontSize: '1.1rem', 
                  lineHeight: 1.8, 
                  marginBottom: '2.5rem', 
                  fontStyle: 'italic', 
                  fontFamily: 'Georgia, serif',
                  maxWidth: '600px'
                }}>
                  "{testimonial.text}"
                </p>

                {/* 4. Color Hierarchy: Gold Name, Vivid Blue Designation, Pure White Location */}
                <div style={{ width: '100%', paddingTop: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
                  <h4 style={{ 
                    fontWeight: 900, 
                    color: '#D4AF37', // VIBRANT GOLD
                    fontSize: '1.5rem', 
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.3px'
                  }}>
                    {testimonial.name}
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <p style={{ 
                      fontSize: '1rem', 
                      color: '#4dabf7', // VIVID BLUE
                      fontWeight: 800, 
                      textTransform: 'uppercase',
                      letterSpacing: '1px'
                    }}>
                      {testimonial.course || testimonial.topic}
                    </p>
                    {testimonial.location && (
                      <p style={{ 
                        fontSize: '0.9rem', 
                        color: '#ffffff', // PURE WHITE
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
