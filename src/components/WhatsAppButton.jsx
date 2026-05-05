import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/919624132765" 
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Inquiry on WhatsApp"
    >
      <MessageCircle size={28} color="white" />
      <span className="tooltip">Inquiry on WhatsApp</span>
    </a>
  );
}
