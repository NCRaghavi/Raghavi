import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: "Student Name",
      course: "CA Finalist",
      text: "Dr. Raghavi's ability to break down complex Financial Management concepts is unmatched. Thanks to her rigorous exam-oriented approach, I cleared my CA Inter exams on the first attempt!"
    },
    {
      id: 2,
      name: "Student Name",
      course: "UGC-NET (JRF) Qualifier",
      text: "The depth of knowledge in Accountancy and Corporate Law is phenomenal. The JRF guidance I received changed my entire perspective on UGC-NET preparation."
    },
    {
      id: 3,
      name: "Student Name",
      course: "University Topper",
      text: "A true academic powerhouse. The strategic insights into International Economics and Banking helped me secure a top rank in my university exams."
    },
    {
      id: 4,
      name: "Student Name",
      course: "ACCA Candidate",
      text: "Her global perspective on IFRS and International Accounting standards made passing the ACCA modules significantly easier than I anticipated."
    },
    {
      id: 5,
      name: "Student Name",
      course: "MBA Graduate",
      text: "The Strategic Management and Marketing Research methodologies taught by Dr. Raghavi gave me a massive edge in my corporate interviews."
    },
    {
      id: 6,
      name: "Student Name",
      course: "CMA Achiever",
      text: "I was struggling with Cost and Management Accounting until I joined her classes. The conceptual clarity and mock tests were an absolute game-changer."
    }
  ];

  return (
    <div className="home-container" style={{ margin: '0 auto', flexGrow: 1 }}>
      <section className="bento-item" style={{ padding: '4rem', marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
        <span className="badge" style={{ marginBottom: '1.5rem' }}>Social Proof</span>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '-1px' }}>Student Success Stories</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 4rem', lineHeight: 1.6 }}>
          Discover how Dr. Raghavi's expert mentorship, rigorous curriculum, and passion for education have transformed the academic trajectories of students across India.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'left' }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} style={{ background: 'var(--bg-primary)', padding: '2.5rem', borderRadius: '20px', border: '1px solid var(--border-color)', position: 'relative', boxShadow: 'var(--shadow-md)' }}>
              <Quote size={40} style={{ color: 'var(--accent-color)', opacity: 0.15, position: 'absolute', top: '2rem', right: '2rem' }} />
              <div style={{ display: 'flex', gap: '0.25rem', color: '#FFD700', marginBottom: '1.5rem' }}>
                <Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" /><Star size={18} fill="currentColor" />
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2rem', fontStyle: 'italic' }}>
                "{testimonial.text}"
              </p>
              <div>
                <h4 style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1.1rem' }}>{testimonial.name}</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: 600 }}>{testimonial.course}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
