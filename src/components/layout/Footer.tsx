import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Robust Regime</h3>
            <p className="text-gray-400 mb-4">
              Premium fitness equipment designed for performance, durability, and results. Proudly made in India.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/robustregime" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/robustregime/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a> */}
                             <a href="https://www.youtube.com/@Robust_Regime" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
            </div>
          </div>
          
          {/* Shop Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/barbells" className="text-gray-400 hover:text-white transition-colors">
                  Barbells
                </Link>
              </li>
              <li>
                <Link to="/category/dumbbells" className="text-gray-400 hover:text-white transition-colors">
                  Dumbbells
                </Link>
              </li>
              <li>
                <Link to="/category/racks" className="text-gray-400 hover:text-white transition-colors">
                  Racks
                </Link>
              </li>
              <li>
                <Link to="/category/benches" className="text-gray-400 hover:text-white transition-colors">
                  Benches
                </Link>
              </li>
              <li>
                <Link to="/category/weight-plates" className="text-gray-400 hover:text-white transition-colors">
                  Weight Plates
                </Link>
              </li>
              <li>
                <Link to="/category/accessories" className="text-gray-400 hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/category/combo-offers" className="text-gray-400 hover:text-white transition-colors">
                  Combo Offers
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Policy Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/shipping-policy" className="text-gray-400 hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/return-refund-policy" className="text-gray-400 hover:text-white transition-colors">
                  Return Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-red-500 flex-shrink-0" />
                <span className="text-gray-400">
                  Asherestate, Varun, 3, 7 Upnagar, Nashik - Pune Rd, Nashik, Maharashtra 422101
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-red-500" />
                <a href="tel:+918446689098" className="text-gray-400 hover:text-white transition-colors">
                  +91 8446689098
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-red-500" />
                <a href="mailto:contact@robustregime.com" className="text-gray-400 hover:text-white transition-colors">
                  contact@robustregime.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        {/* <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="max-w-lg mx-auto">
            <h3 className="text-xl font-bold mb-2 text-center">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4 text-center">
              Get the latest updates, offers and special announcements delivered directly to your inbox.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-md font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
        
        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-6 mt-6 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} Robust Regime. All Rights Reserved. Proudly Made in India.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;