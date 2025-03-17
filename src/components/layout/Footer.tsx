
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Gamepad2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-purple-50 border-t border-purple-100">
      <div className="max-w-7xl mx-auto pt-16 pb-8 container-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Store Information */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Gamepad2 className="h-6 w-6 text-purple-600" />
              <div className="flex flex-col">
                <span className="text-lg font-display font-bold text-gray-800">Cell-Toys</span>
                <span className="text-xs text-gray-700 -mt-1">Collectibles</span>
              </div>
            </Link>
            <p className="text-sm text-gray-700 max-w-xs">
              Your premier destination for collectible toys, action figures, and rare items. Serving Uptown Chicago with a curated selection of nostalgic treasures.
            </p>
            <div className="pt-2">
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-700 hover:text-purple-600 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5 mr-2" />
                <span>Follow us</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-md font-display font-medium">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Reviews', path: '/reviews' },
                { name: 'Explore', path: '/explore' },
                { name: 'Contact', path: '/contact' },
                { name: 'Find Us', path: '/find-us' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-700 hover:text-purple-600 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Hours */}
          <div className="space-y-4">
            <h3 className="text-md font-display font-medium">Hours</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                <div>
                  <p className="text-gray-700">Monday - Friday</p>
                  <p className="text-gray-600">11:00 AM - 7:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                <div>
                  <p className="text-gray-700">Thursday</p>
                  <p className="text-gray-600">11:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                <div>
                  <p className="text-gray-700">Saturday</p>
                  <p className="text-gray-600">10:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                <div>
                  <p className="text-gray-700">Sunday</p>
                  <p className="text-gray-600">12:00 PM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-md font-display font-medium">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                <span className="text-gray-700">4523 N Broadway, Chicago, IL 60640</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                <span className="text-gray-700">773-555-1234</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
                <span className="text-gray-700">info@celltoyscollectibles.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-purple-100 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">
            © {currentYear} Cell-Toys Collectibles. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <ul className="flex items-center space-x-6">
              <li>
                <Link to="/privacy" className="text-xs text-gray-500 hover:text-purple-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-xs text-gray-500 hover:text-purple-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
