import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, GraduationCap, Download, Globe, PieChart, TrendingUp, Landmark, Star, Quote, Play, ChevronLeft, ChevronRight, Users, Linkedin } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

const TestimonialSlider = () => {
  const allTestimonials = [...testimonialsData.scholars, ...testimonialsData.students]
    .sort((a, b) => (b.priority || 0) - (a.priority || 0));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (allTestimonials.length <= 3) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % allTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [allTestimonials.length]);

  if (allTestimonials.length === 0) return null;

  // Calculate indices for 3 cards
  const firstItem = allTestimonials[currentIndex];
  const secondIndex = (currentIndex + 1) % allTestimonials.length;
  const secondItem = allTestimonials[secondIndex];
  const thirdIndex = (currentIndex + 2) % allTestimonials.length;
  const thirdItem = allTestimonials[thirdIndex];

  let displayItems;
  if (allTestimonials.length >= 3) {
    displayItems = [firstItem, secondItem, thirdItem];
  } else if (allTestimonials.length === 2) {
    displayItems = [firstItem, secondItem];
  } else {
    displayItems = [firstItem];
  }

  return (
    <section className="testimonials-featured bento-item" style={{ 
      padding: '6rem 5%', 
      background: 'var(--bg-primary)', 
      position: 'relative', 
      zIndex: 10,
      marginTop: '2rem'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <span className="badge" style={{ marginBottom: '1rem' }}>Success Stories</span>
        <h2 style={{ fontSize: '2.8rem', fontWeight: 900, color: 'var(--text-primary)', letterSpacing: '-1px' }}>Ph.D. Led Mentorship in Action</h2>
      </div>
      
      <div className="testimonial-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: `repeat(${displayItems.length}, minmax(300px, 420px))`, 
        gap: '1.25rem',
        maxWidth: '1350px',
        margin: '0 auto',
        justifyContent: 'center'
      }}>
        {displayItems.map((testimonial, idx) => (
          <div key={`${testimonial.id}-${idx}`} className="testimonial-card" style={{ 
            background: 'var(--bg-card)', 
            padding: '2.5rem 1.5rem', 
            borderRadius: '32px', 
            border: '1px solid var(--border-color)', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: 'var(--shadow-bento)',
            height: '100%',
            position: 'relative'
          }}>
            {testimonial.institution && (
              <div style={{ 
                position: 'absolute',
                top: '0.75rem',
                width: '100%',
                color: '#D4AF37',
                opacity: 0.5,
                fontSize: '0.6rem',
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
            {/* 1. Photo */}
            <div className="testimonial-portrait" style={{ 
              width: '140px', 
              height: '140px', 
              borderRadius: '50%', 
              border: '4px solid #D4AF37', 
              overflow: 'hidden', 
              marginTop: testimonial.institution ? '1.25rem' : '0',
              marginBottom: '1rem',
              background: 'var(--bg-secondary)',
              boxShadow: '0 12px 30px rgba(212, 175, 55, 0.2)'
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

            {/* 2. Stars */}
            <div style={{ display: 'flex', gap: '0.3rem', color: '#FFD700', marginBottom: '0.75rem' }}>
              {[...Array(testimonial.stars || 5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>

            {/* 3. Text */}
            <p style={{ 
              fontSize: '0.9rem', 
              fontStyle: 'italic', 
              color: 'var(--text-quote)', 
              lineHeight: 1.6, 
              marginBottom: '1.5rem',
              fontFamily: 'Georgia, serif',
              flexGrow: 1
            }}>
              "{testimonial.text}"
            </p>

            {/* 4. Signature - FIXED COLORS */}
            <div style={{ width: '100%', paddingTop: '1.25rem', borderTop: '1px solid var(--border-color)' }}>
              <h4 style={{ 
                fontWeight: 800, 
                color: '#D4AF37', 
                fontSize: '1.4rem', 
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
              </h4>
              <p style={{ 
                color: '#4dabf7', 
                fontSize: '0.75rem', 
                fontWeight: 700, 
                textTransform: 'uppercase', 
                letterSpacing: '1px',
                marginBottom: '0.1rem'
              }}>
                {testimonial.topic || testimonial.course}
              </p>
              {testimonial.college && (
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.7rem', 
                  fontWeight: 700,
                  marginTop: '0.1rem'
                }}>
                  {testimonial.college}
                </p>
              )}
              {testimonial.location && (
                <p style={{ 
                  color: 'var(--text-secondary)', 
                  fontSize: '0.7rem', 
                  marginTop: '0.1rem' 
                }}>
                  {testimonial.location}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="home-container">
      {/* Cinematic Hero Section: Split Screen */}
      <section className="hero-section bento-item">
        <div className="hero-content">
          <span className="badge">Ph.D. Led Education</span>
          <h1>Raghavi Academy: Master Commerce with India’s Premier Ph.D. Faculty</h1>
          <h2 className="hero-tagline">Building Foundations. Achieving Excellence</h2>
          <p>
            Elevate your academic journey with a professional, video-first digital campus 
            designed for CA, ACCA, CMA, CFA, CS, UGC-NET, and University Commerce students.
          </p>
          <div className="hero-actions">
            <Link to="/ca" className="btn btn-primary">Start Learning</Link>
            <Link to="/resources" className="btn btn-secondary">Explore Resources</Link>
          </div>
        </div>
        
        {/* Latest YouTube Video Integration */}
        <div className="hero-video-container">
          <div className="video-wrapper" style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.3)', border: 'none' }}>
            <iframe 
              src="https://www.youtube.com/embed/jhBua6RxdRM?rel=0&modestbranding=1&vq=hd1080" 
              title="Raghavi Academy Latest Video" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              style={{ 
                border: 'none', 
                borderRadius: '16px',
                imageRendering: '-webkit-optimize-contrast',
                WebkitBackfaceVisibility: 'hidden',
                backfaceVisibility: 'hidden'
              }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Silo Architecture: Pathfinder Cards (Bento Grid) */}
      <section className="pathfinder-section">
        <div className="bento-grid">
          
          <div className="bento-card ca-card">
            <div className="card-icon">
              <GraduationCap size={32} />
            </div>
            <h2>CA Foundation & Intermediate</h2>
            <p>Comprehensive roadmap for aspiring Chartered Accountants. Guided closely by academic experts.</p>
            <Link to="/ca" className="btn btn-pathfinder">
              View Roadmap <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bento-card acca-card">
            <div className="card-icon">
              <Globe size={32} />
            </div>
            <h2>ACCA Global</h2>
            <p>Master international accounting standards with a recognized global qualification.</p>
            <Link to="/acca" className="btn btn-pathfinder">
              View Modules <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bento-card cma-card">
            <div className="card-icon">
              <PieChart size={32} />
            </div>
            <h2>CMA Certification</h2>
            <p>Develop strategic management and financial accounting expertise.</p>
            <Link to="/cma" className="btn btn-pathfinder">
              Explore Curriculum <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bento-card cfa-card">
            <div className="card-icon">
              <TrendingUp size={32} />
            </div>
            <h2>CFA Program</h2>
            <p>Rigorous preparation for investment management and financial analysis.</p>
            <Link to="/cfa" className="btn btn-pathfinder">
              View Pathway <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bento-card cs-card">
            <div className="card-icon">
              <Landmark size={32} />
            </div>
            <h2>Company Secretary (CS)</h2>
            <p>Expert guidance on corporate governance and compliance laws.</p>
            <Link to="/cs" className="btn btn-pathfinder">
              See Roadmap <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bento-card uni-card">
            <div className="card-icon">
              <Download size={32} />
            </div>
            <h2>University</h2>
            <p>B.Com, BBA, M.Com & MBA materials and research papers, curated for academic excellence.</p>
            <Link to="/university" className="btn btn-pathfinder">
              Get Materials <ArrowRight size={16} />
            </Link>
          </div>

          <div className="bento-card net-card">
            <div className="card-icon">
              <BookOpen size={32} />
            </div>
            <h2>UGC-NET Commerce & Management</h2>
            <p>Targeted batches to crack the toughest academic exams with ultimate confidence.</p>
            <Link to="/net" className="btn btn-pathfinder">
              Explore Batches <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* About the Founder Section */}
      <section className="founder-section bento-item" style={{ padding: '4rem 3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        
        {/* Top Profile Area */}
        <div style={{ display: 'flex', gap: '4rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div className="founder-image" style={{ flex: '1 1 300px', minWidth: '300px' }}>
          <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '24px', overflow: 'hidden', position: 'relative', boxShadow: 'var(--shadow-md)' }}>
            <img src="/Photo-Raghavi.png" alt="Dr. NC Raghavi Chakravarthy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', filter: 'contrast(1.08) saturate(1.05)', WebkitFontSmoothing: 'antialiased', imageRendering: 'high-quality' }} />
          </div>
        </div>
        <div className="founder-content" style={{ flex: '2 1 500px' }}>
          <span className="badge" style={{ marginBottom: '1.5rem' }}>Meet Your Mentor</span>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem', letterSpacing: '-0.5px' }}>Dr. NC Raghavi Chakravarthy</h2>
          <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-color)', fontWeight: 600, marginBottom: '1.5rem' }}>Ph.D. (Accountancy), UGC-NET (JRF), Ex GPSC Class -II Officer (Gujarat Education Services)</h3>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.8 }}>
            Why settle for ordinary when you can be mentored by an academic powerhouse? With over <strong>14 years of elite experience</strong> across Government, Autonomous, and global EdTech sectors, Dr. Raghavi bridges the gap between traditional commerce pedagogy and digital innovation.
          </p>
          
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '0' }}>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ color: 'var(--accent-color)', marginTop: '2px', fontSize: '1.2rem' }}>✦</div>
              <span style={{ fontSize: '1.05rem' }}><strong>Top-Tier Credentials:</strong> Ph.D. in Accountancy from Gujarat University, cleared UGC-NET with Junior Research Fellowship (JRF), and cracked the highly competitive GPSC Assistant Professor exam.</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ color: 'var(--accent-color)', marginTop: '2px', fontSize: '1.2rem' }}>✦</div>
              <span style={{ fontSize: '1.05rem' }}><strong>Global EdTech & Academic Leader:</strong> Subject Matter Expert for JoVE (USA), NPTEL (IIT/IISc) Subject Matter Translator, and EMMRC (Gujarat University) Academic Content Creator. Former Professor at St. Xavier's College (Autonomous).</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ color: 'var(--accent-color)', marginTop: '2px', fontSize: '1.2rem' }}>✦</div>
              <span style={{ fontSize: '1.05rem' }}><strong>Ecosystem Builder:</strong> Ph.D. Thesis archived on Shodhganga, authored a bestselling Economics dictionary, and published high-impact research globally.</span>
            </li>
          </ul>
        </div>
        </div>

        {/* Premier Institutions Track Record */}
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '3rem', paddingBottom: '1rem' }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '2.5rem', color: 'var(--text-primary)', textAlign: 'center' }}>
            A Proven Track Record Across Premier Institutions
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.25rem', maxWidth: '1550px', margin: '0 auto' }}>
            <div style={{ background: 'rgba(212, 175, 55, 0.03)', padding: '2.5rem 1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', margin: '0 auto 1.5rem', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Landmark size={24} style={{ color: 'var(--accent-color)' }} />
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>School of Commerce</h4>
              <div style={{ color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.25rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Gujarat University, Ahmedabad</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                "Shaping the next generation of Commerce Professors and Class-I/II Officers."
              </p>
            </div>
            
            <div style={{ background: 'rgba(212, 175, 55, 0.03)', padding: '2.5rem 1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', margin: '0 auto 1.5rem', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Landmark size={24} style={{ color: 'var(--accent-color)' }} />
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>St. Xavier’s College (Autonomous)</h4>
              <div style={{ color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.25rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Ahmedabad</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                "Developing foundational excellence in undergraduate and postgraduate scholars."
              </p>
            </div>

            <div style={{ background: 'rgba(212, 175, 55, 0.03)', padding: '2.5rem 1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', margin: '0 auto 1.5rem', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Landmark size={24} style={{ color: 'var(--accent-color)' }} />
              </div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>Govt. Commerce & Science College</h4>
              <div style={{ color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.25rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Dahej</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                "Specialized academic leadership for government commerce and science education."
              </p>
            </div>

            <div style={{ background: 'rgba(212, 175, 55, 0.03)', padding: '2.5rem 1.5rem', borderRadius: '16px', border: '1px solid var(--border-color)', textAlign: 'center' }}>
              <div style={{ width: '48px', height: '48px', margin: '0 auto 1.5rem', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), transparent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Globe size={24} style={{ color: 'var(--accent-color)' }} />
              </div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem', whiteSpace: 'nowrap' }}>JoVE</h4>
              <div style={{ color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 600, marginBottom: '1.25rem', letterSpacing: '0.5px', textTransform: 'uppercase' }}>USA / Global</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                "Academic content creation for the world's leading producer of scientific video protocols."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Mastery Grid */}
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>Her Domains of Mastery</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
              While Dr. Raghavi&apos;s academic instruction spans the complete spectrum of Commerce and Management, the subjects below represent the core domains where she holds deep, specialized mastery.
            </p>
          </div>
        
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          {/* Accountancy */}
          <div style={{ padding: '0.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-color)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(135deg, #D4AF37, #FFD700)' }}></div>
              Accountancy
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <li>• Financial Accounting</li>
              <li>• Cost & Management Accounting</li>
              <li>• International Accounting</li>
              <li>• IFRS & IndAS Standards</li>
            </ul>
          </div>

          {/* Finance & Banking */}
          <div style={{ padding: '0.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-color)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(135deg, #D4AF37, #FFD700)' }}></div>
              Finance & Banking
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <li>• Indian & Global Financial Systems</li>
              <li>• Money, Capital & Debt Markets</li>
              <li>• Domestic & International Banking</li>
              <li>• Mutual Funds & Insurance</li>
            </ul>
          </div>

          {/* Economics & Law */}
          <div style={{ padding: '0.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-color)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(135deg, #D4AF37, #FFD700)' }}></div>
              Economics & Law
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <li>• Micro & Macro Economics</li>
              <li>• International Economics</li>
              <li>• Corporate & Business Law</li>
              <li>• Business Environment & Exim</li>
            </ul>
          </div>

          {/* Management & Strategy */}
          <div style={{ padding: '0.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--accent-color)', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'linear-gradient(135deg, #D4AF37, #FFD700)' }}></div>
              Management
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'var(--text-secondary)' }}>
              <li>• Strategic Management</li>
              <li>• Marketing Research</li>
              <li>• Research Methodology</li>
              <li>• Logistics Management</li>
            </ul>
          </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
            <Link to="/ca" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
              Learn from the Best Today
            </Link>
          </div>
        </div>
      </section>

      {/* Book Recommendations Snippet */}
      <section className="resource-hub-section bento-item">
        <div className="hub-header">
          <h2>Book Recommendations</h2>
          <Link to="/resources" className="view-all">View All Books</Link>
        </div>
        
        {/* Search & Categories */}
        <div className="hub-filters" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          <input 
            type="text" 
            placeholder="Search books, notes, articles..." 
            style={{ 
              padding: '0.75rem 1.5rem', 
              borderRadius: '9999px', 
              border: '1px solid var(--border-color)', 
              backgroundColor: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              flexGrow: 1,
              maxWidth: '400px'
            }} 
          />
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {['All Categories', 'CA Notes', 'UGC-NET', 'University', 'Research'].map((cat, idx) => (
              <button 
                key={idx} 
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--border-color)',
                  backgroundColor: idx === 0 ? 'var(--accent-color)' : 'transparent',
                  color: idx === 0 ? 'white' : 'var(--text-primary)',
                  cursor: 'pointer',
                  fontWeight: 500,
                  fontSize: '0.875rem'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="resource-grid">
          
          <div className="resource-card" style={{ 
            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), transparent)', 
            border: '1px solid var(--accent-color)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem' }}>
              <div style={{ width: '80px', height: '110px', flexShrink: 0, borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                <img src="/A to Z of Economics.jpg" alt="Book Thumbnail" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <div className="resource-meta" style={{ color: 'var(--accent-color)', fontWeight: 700 }}>Published Author</div>
                <h3 style={{ fontSize: '1.1rem', marginTop: '0.25rem' }}>A to Z Economics Encyclopedic Dictionary</h3>
              </div>
            </div>
            <p style={{ flexGrow: 1 }}>A comprehensive economics dictionary authored by Dr. Raghavi. An essential, high-impact reference guide for all commerce students and professionals.</p>
            <a href="https://www.amazon.in/Z-Economics-Encyclopedic-Dictionary-ebook/dp/B0F1KTB658" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.85rem', marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', alignSelf: 'flex-start' }}>
              <Globe size={14} /> View on Amazon
            </a>
          </div>

          <div className="resource-card">
            <div className="resource-meta">Commerce | Article</div>
            <h3>Advanced Financial Accounting Strategies</h3>
            <p>In-depth analysis by Dr. Raghavi on modern corporate finance frameworks.</p>
            <button className="btn btn-outline btn-sm">
              <Download size={14} /> Download PDF
            </button>
          </div>

          <div className="resource-card">
            <div className="resource-meta">UGC-NET | Guide</div>
            <h3>Cracking UGC-NET: A PhD's Perspective</h3>
            <p>Essential techniques and time management strategies for the commerce paper.</p>
            <button className="btn btn-outline btn-sm">
              <Download size={14} /> Download PDF
            </button>
          </div>

        </div>
      </section>

      {/* Testimonials Slider Section - FORCED VISIBILITY */}
      <div id="home-testimonial-section" style={{ background: '#0a192f', borderTop: '1px solid rgba(255,255,255,0.05)', paddingBottom: '5rem' }}>
        <TestimonialSlider />
      </div>
    </div>
  );
}
