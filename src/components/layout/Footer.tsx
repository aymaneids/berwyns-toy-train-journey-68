
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Instagram, Train } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-wood-light/20 border-t border-wood/30">
      <div className="max-w-7xl mx-auto pt-16 pb-8 container-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Store Information */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Train className="h-6 w-6 text-train-red" />
              <div className="flex flex-col">
                <span className="text-lg font-display font-bold text-train-black">Berwyn's</span>
                <span className="text-xs text-train-black/80 -mt-1">Toys & Trains</span>
              </div>
            </Link>
            <p className="text-sm text-train-black/80 max-w-xs">
              Your destination for classic toys and model trains. Serving Berwyn and beyond with quality hobby supplies.
            </p>
            <div className="pt-2">
              <a 
                href="https://www.instagram.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-train-black/80 hover:text-train-red transition-colors"
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
                { name: 'Shop', path: '/shop' },
                { name: 'Explore', path: '/explore' },
                { name: 'Contact', path: '/contact' },
                { name: 'Find Us', path: '/find-us' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-train-black/80 hover:text-train-red transition-colors text-sm"
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
                <Clock className="h-4 w-4 mr-2 mt-0.5 text-train-black/60" />
                <div>
                  <p className="text-train-black/80">Monday - Friday</p>
                  <p className="text-train-black/70">10:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-0.5 text-train-black/60" />
                <div>
                  <p className="text-train-black/80">Thursday</p>
                  <p className="text-train-black/70">10:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-0.5 text-train-black/60" />
                <div>
                  <p className="text-train-black/80">Saturday</p>
                  <p className="text-train-black/70">10:00 AM - 5:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-0.5 text-train-black/60" />
                <div>
                  <p className="text-train-black/80">Sunday</p>
                  <p className="text-train-black/70">Closed</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-md font-display font-medium">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-train-black/60" />
                <span className="text-train-black/80">7025 Ogden Ave. Berwyn, IL 60402</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-4 w-4 mr-2 mt-0.5 text-train-black/60" />
                <span className="text-train-black/80">708-484-4384</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-2 mt-0.5 text-train-black/60" />
                <span className="text-train-black/80">info@berwynstoysandtrains.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-wood/20 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-train-black/60">
            © {currentYear} Berwyn's Toys & Trains. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0">
            <ul className="flex items-center space-x-6">
              <li>
                <Link to="/privacy" className="text-xs text-train-black/60 hover:text-train-red transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-xs text-train-black/60 hover:text-train-red transition-colors">
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
