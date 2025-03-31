
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const openWhatsApp = () => {
    window.open(`https://wa.me/919833359677`, '_blank');
  };
  
  return (
    <button 
      onClick={openWhatsApp}
      className="whatsapp-button flex items-center justify-center space-x-2 px-4 py-2"
      aria-label="Chat on WhatsApp"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="white" 
        stroke="white" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
      </svg>
      <span className="text-white">Contact Us</span>
    </button>
  );
};

export default WhatsAppButton;
