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
                background: 'var(--bg-primary)', 
                padding: '3rem 2.5rem', 
                borderRadius: '32px', 
                border: '1px solid var(--border-color)', 
                position: 'relative', 
                boxShadow: 'var(--shadow-md)', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center' 
              }}>
                <Quote size={60} style={{ color: 'var(--accent-color)', opacity: 0.05, position: 'absolute', top: '2rem', right: '2rem' }} />
                
                {/* 1. Photo on Top */}
                <div style={{ 
                  width: '100px', 
                  height: '100px', 
                  borderRadius: '30px', 
                  overflow: 'hidden', 
                  background: 'linear-gradient(135deg, #D4AF37, #FFD700)',
                  padding: '3px',
                  marginBottom: '2rem',
                  boxShadow: '0 12px 24px rgba(212, 175, 55, 0.2)'
                }}>
                  <div style={{ width: '100%', height: '100%', borderRadius: '27px', overflow: 'hidden', background: 'var(--bg-secondary)' }}>
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                        <Users size={40} />
                      </div>
                    )}
                  </div>
                </div>

                {/* 2. Testimonial Text */}
                <p style={{ 
                  color: 'var(--text-primary)', 
                  fontSize: '1.25rem', 
                  lineHeight: 1.8, 
                  marginBottom: '1.5rem', 
                  fontStyle: 'italic', 
                  fontFamily: 'Georgia, serif',
                  letterSpacing: '0.2px'
                }}>
                  "{testimonial.text}"
                </p>

                {/* 3. Star Rating */}
                <div style={{ display: 'flex', gap: '0.35rem', color: '#D4AF37', marginBottom: '2rem' }}>
                  {[...Array(testimonial.stars || 5)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>

                {/* 4. Name and Full Designation */}
                <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)', width: '100%' }}>
                  <h4 style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1.4rem', letterSpacing: '-0.5px', marginBottom: '0.5rem' }}>
                    {testimonial.name}
                  </h4>
                  <p style={{ 
                    fontSize: '0.95rem', 
                    color: 'var(--accent-color)', 
                    fontWeight: 700, 
                    lineHeight: 1.5,
                    maxWidth: '500px',
                    margin: '0 auto',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    {testimonial.course || testimonial.topic}
                  </p>
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
