
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-academy-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* About Column */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/1c3bdbed-c9da-4255-a14b-b38539cd834c.png" 
                alt="Masters Academy Logo" 
                className="h-16 w-auto mr-3 bg-white rounded-full p-1" 
              />
              <h3 className="text-xl font-bold">Masters Academy</h3>
            </div>
            <p className="mb-4">
              Committed to quality learning and academic excellence through innovative methodologies.
            </p>
            <p className="italic">
              "See the difference that makes the difference."
            </p>
          </div>
          
          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-academy-yellow transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-academy-yellow transition">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-academy-yellow transition">Courses</Link>
              </li>
              <li>
                <Link to="/toppers" className="hover:text-academy-yellow transition">Toppers</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-academy-yellow transition">Gallery</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-academy-yellow transition">FAQ</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-academy-yellow transition">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0 text-academy-yellow" />
                <p>Plot No. 50/T/2, Road No. 6, Above New Diamond Motor Training School, Govandi Slums, Govandi West, Baiganwadi, Shivaji Nagar, Mumbai, Maharashtra 400043</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 text-academy-yellow" />
                <div>
                  <p>8082213981</p>
                  <p>9920813688</p>
                  <p>9821062303</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 text-academy-yellow" />
                <p>info@mastersacademy.co.in</p>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-academy-yellow transition">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-white hover:text-academy-yellow transition">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-700">
          <p className="text-center">
            &copy; {currentYear} Masters Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
