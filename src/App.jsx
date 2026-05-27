import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DirectoryPage from './components/DirectoryPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ContactPage from './components/ContactPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import WhatsAppButton from './components/WhatsAppButton';
import TestimonialsPage from './components/TestimonialsPage';
import BookRecommendationsPage from './components/BookRecommendationsPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ca" element={<DirectoryPage title="CA Foundation & Intermediate" />} />
            <Route path="/acca" element={<DirectoryPage title="ACCA Global" />} />
            <Route path="/cma" element={<DirectoryPage title="CMA Certification" />} />
            <Route path="/cfa" element={<DirectoryPage title="CFA Program" />} />
            <Route path="/cs" element={<DirectoryPage title="Company Secretary (CS)" />} />
            <Route path="/university" element={<DirectoryPage title="University Programs" />} />
            <Route path="/net" element={<DirectoryPage title="UGC-NET Commerce & Management" />} />
            <Route path="/resources" element={<BookRecommendationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
