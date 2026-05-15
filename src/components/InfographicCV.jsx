import React, { useState } from 'react';
import './InfographicCV.css';

const InfographicCV = () => {
  const [activeType, setActiveType] = useState(null);

  const activate = (type) => setActiveType(type);
  const deactivate = () => setActiveType(null);

  return (
    <div className={`cv-wrapper ${activeType ? 'dim-inactive' : ''}`}>
      <div className="cv-header">
        <h1>Bhargavan Pankusam</h1>
        <h2>IIT JEE Maths Educator | Researcher | M.Tech IIT Kanpur</h2>
      </div>

      <div className="cv-container">
        {/* LEFT COLUMN */}
        <div className="cards-column left-column">
          {/* Research & Publications */}
          <div 
            className={`cv-card ${activeType === 'research' ? 'active' : ''}`}
            style={{ '--accent-color': '#757575' }}
            onMouseEnter={() => activate('research')}
            onMouseLeave={deactivate}
          >
            <div className="card-content">
              <ul>
                <li><a href="#phd"><strong>Ph.D. Research:</strong> Household Savings and Investment Behaviour.</a></li>
                <li><a href="#books">Authored 2 books (Economics and HRM)</a></li>
                <li><a href="#emrc">EMRC Video Lecture Contributor (5 Lectures)</a></li>
                <li><a href="#papers">6 Research Papers Published in Indexed Journals & ISBN Chapters</a></li>
                <li><a href="#webinars">Academic Webinar & FDP Resource Person</a></li>
                <li><a href="#pg-guide">PG Project Guide & Viva Examiner – KSV University</a></li>
                <li><a href="#rac">RAC Member – Swarnim Gujarat Startup and Innovation University</a></li>
              </ul>
            </div>
          </div>

          {/* Experience */}
          <div 
            className={`cv-card ${activeType === 'exp' ? 'active' : ''}`}
            style={{ '--accent-color': '#8E24AA' }}
            onMouseEnter={() => activate('exp')}
            onMouseLeave={deactivate}
          >
            <div className="card-content">
              <ul>
                <li><a href="#pg-teaching"><strong>PG Teaching:</strong> 6+ years</a></li>
                <li><a href="#bcom-teaching"><strong>B.Com Teaching:</strong> 8+ years</a></li>
                <li><a href="#research"><strong>Research:</strong> 5 years (UGC JRF + SRF with credit courses) under Prof (Dr.) H.C.Sardar</a></li>
                <li><a href="#industry"><strong>Industry & Ed.Tech. Experience:</strong> 1.5 years</a></li>
                <li><a href="#nptel"><strong>NPTEL Translator</strong> – English to Gujarati</a></li>
              </ul>
            </div>
          </div>

          {/* Communication & Language */}
          <div 
            className={`cv-card ${activeType === 'comm' ? 'active' : ''}`}
            style={{ '--accent-color': '#00ACC1' }}
            onMouseEnter={() => activate('comm')}
            onMouseLeave={deactivate}
          >
            <div className="card-content">
              <ul>
                <li><a href="https://www.raghaviacademy.com" target="_blank" rel="noreferrer"><strong>Website:</strong> www.raghaviacademy.com</a></li>
                <li><a href="https://youtube.com/@rice_academy" target="_blank" rel="noreferrer"><strong>YouTube channel:</strong> @rice_academy</a></li>
                <li><a href="#english"><strong>English</strong> - Professional</a></li>
                <li><a href="#hindi"><strong>Hindi</strong> - Professional</a></li>
                <li><a href="#gujarati"><strong>Gujarati</strong> - Professional</a></li>
                <li><a href="#telugu"><strong>Telugu</strong> - Fluent</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* CENTER GRAPHIC */}
        <div className="center-column">
          <div className="center-graphic">
            <svg viewBox="-1.2 -1.2 2.4 2.4" className="pie-svg" style={{ transform: 'rotate(-90deg)' }}>
              <g className="slices">
                <path 
                  className={activeType === 'teaching' ? 'active' : ''}
                  fill="#F4B400" 
                  d="M 0 0 L 1 0 A 1 1 0 0 1 0.5 0.866 Z" 
                  onMouseEnter={() => activate('teaching')}
                  onMouseLeave={deactivate}
                />
                <path 
                  className={activeType === 'digital' ? 'active' : ''}
                  fill="#E53935" 
                  d="M 0 0 L 0.5 0.866 A 1 1 0 0 1 -0.5 0.866 Z" 
                  onMouseEnter={() => activate('digital')}
                  onMouseLeave={deactivate}
                />
                <path 
                  className={activeType === 'cert' ? 'active' : ''}
                  fill="#43A047" 
                  d="M 0 0 L -0.5 0.866 A 1 1 0 0 1 -1 0 Z" 
                  onMouseEnter={() => activate('cert')}
                  onMouseLeave={deactivate}
                />
                <path 
                  className={activeType === 'comm' ? 'active' : ''}
                  fill="#00ACC1" 
                  d="M 0 0 L -1 0 A 1 1 0 0 1 -0.5 -0.866 Z" 
                  onMouseEnter={() => activate('comm')}
                  onMouseLeave={deactivate}
                />
                <path 
                  className={activeType === 'exp' ? 'active' : ''}
                  fill="#8E24AA" 
                  d="M 0 0 L -0.5 -0.866 A 1 1 0 0 1 0.5 -0.866 Z" 
                  onMouseEnter={() => activate('exp')}
                  onMouseLeave={deactivate}
                />
                <path 
                  className={activeType === 'research' ? 'active' : ''}
                  fill="#757575" 
                  d="M 0 0 L 0.5 -0.866 A 1 1 0 0 1 1 0 Z" 
                  onMouseEnter={() => activate('research')}
                  onMouseLeave={deactivate}
                />
              </g>
            </svg>

            {/* Labels */}
            <div className={`pie-label label-teaching ${activeType === 'teaching' ? 'active' : ''}`}>
              Entrepreneur
            </div>
            <div className={`pie-label label-digital ${activeType === 'digital' ? 'active' : ''}`}>
              Researcher
            </div>
            <div className={`pie-label label-cert ${activeType === 'cert' ? 'active' : ''}`}>
              Mentor
            </div>
            <div className={`pie-label label-comm ${activeType === 'comm' ? 'active' : ''}`}>
              Volunteer
            </div>
            <div className={`pie-label label-exp ${activeType === 'exp' ? 'active' : ''}`}>
              Administration
            </div>
            <div className={`pie-label label-research ${activeType === 'research' ? 'active' : ''}`}>
              Teacher
            </div>

            <img src="/profile-center.png" alt="Profile" className="profile-img" />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="cards-column right-column">
          {/* Teaching Domains */}
          <div 
            className={`cv-card ${activeType === 'teaching' ? 'active' : ''}`}
            style={{ '--accent-color': '#F4B400' }}
            onMouseEnter={() => activate('teaching')}
            onMouseLeave={deactivate}
          >
            <div className="card-content">
              <ul>
                <li><a href="#finance"><strong>Finance:</strong> Indian Financial System | Financial Services | Banking & Insurance | Financial Management</a></li>
                <li><a href="#economics"><strong>Economics:</strong> Micro / Macro / International Economics</a></li>
                <li><a href="#management"><strong>Management:</strong> Marketing | Strategic Management | Business Law | Research Methodology</a></li>
                <li><a href="#accounting"><strong>Accounting:</strong> Financial Accounting | Cost & Management Accounting | Corporate Accounting | Auditing & Assurance</a></li>
              </ul>
            </div>
          </div>

          {/* Digital Tools */}
          <div 
            className={`cv-card ${activeType === 'digital' ? 'active' : ''}`}
            style={{ '--accent-color': '#E53935' }}
            onMouseEnter={() => activate('digital')}
            onMouseLeave={deactivate}
          >
            <div className="card-content">
              <ul>
                <li><a href="#lms"><strong>LMS & Course Delivery</strong></a></li>
                <li><a href="#online-cert"><strong>Online Certification Platforms</strong></a></li>
                <li><a href="#meta-suite"><strong>Meta Business Suite</strong></a></li>
                <li><a href="#youtube"><strong>YouTube Studio & WordPress Website Management</strong></a></li>
                <li><a href="#google-zoom"><strong>Google Classroom | Zoom | MS Word, Excel, PowerPoint</strong></a></li>
                <li><a href="#tally"><strong>Tally ERP | SPSS</strong></a></li>
              </ul>
            </div>
          </div>

          {/* Certifications */}
          <div 
            className={`cv-card ${activeType === 'cert' ? 'active' : ''}`}
            style={{ '--accent-color': '#43A047' }}
            onMouseEnter={() => activate('cert')}
            onMouseLeave={deactivate}
          >
            <div className="card-content">
              <ul>
                <li><a href="#gpsc"><strong>GPSC Assistant Professor (Class II)</strong> Cleared</a></li>
                <li><a href="#phd-acc"><strong>Ph.D.</strong> in Accountancy</a></li>
                <li><a href="#ugc-jrf"><strong>UGC-NET (JRF) Qualified</strong> – Dec 2012</a></li>
                <li><a href="#ugc-net"><strong>UGC-NET Qualified</strong> – June 2012</a></li>
                <li><a href="#author"><strong>Author</strong> - A to Z of Economics (Self-published on Kindle)</a></li>
                <li><a href="#coauthor"><strong>HRM Course Book Co-author</strong> - BAOU</a></li>
                <li><a href="#emrc-expert"><strong>EMRC Subject Expert</strong> – Gujarat University</a></li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InfographicCV;
