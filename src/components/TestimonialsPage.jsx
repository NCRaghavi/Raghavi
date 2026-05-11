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
              <div key={testimonial.id} style={{ background: 'var(--bg-primary)', padding: '2.5rem', borderRadius: '24px', border: '1px solid var(--border-color)', position: 'relative', boxShadow: 'var(--shadow-sm)', display: 'flex', flexDirection: 'column' }}>
                <Quote size={40} style={{ color: 'var(--accent-color)', opacity: 0.1, position: 'absolute', top: '2rem', right: '2rem' }} />
                
                <div style={{ display: 'flex', gap: '0.25rem', color: '#FFD700', marginBottom: '1.5rem' }}>
                  {[...Array(testimonial.stars || 5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: '2rem', fontStyle: 'italic', flexGrow: 1 }}>
                  "{testimonial.text}"
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', overflow: 'hidden', background: 'var(--border-color)', flexShrink: 0 }}>
                    {testimonial.image ? (
                      <img src={testimonial.image} alt={testimonial.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                        <Users size={24} />
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '1.1rem' }}>{testimonial.name}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent-color)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {testimonial.course || testimonial.topic}
                    </p>
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
