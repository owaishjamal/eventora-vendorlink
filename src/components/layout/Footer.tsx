
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-planero-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">PlanEro</h3>
            <p className="text-gray-300 mb-4">
              Your ultimate platform for planning perfect events and connecting with top vendors.
            </p>
            <div className="flex space-x-4 text-gray-300">
              <a href="#" className="hover:text-planero-pink transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-planero-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-planero-pink transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-planero-pink transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">For Couples</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/vendors" className="text-gray-300 hover:text-planero-pink transition-colors">
                  Find Vendors
                </Link>
              </li>
              <li>
                <Link to="/venues" className="text-gray-300 hover:text-planero-pink transition-colors">
                  Discover Venues
                </Link>
              </li>
              <li>
                <Link to="/planning-tools" className="text-gray-300 hover:text-planero-pink transition-colors">
                  Planning Tools
                </Link>
              </li>
              <li>
                <Link to="/budget" className="text-gray-300 hover:text-planero-pink transition-colors">
                  Budget Calculator
                </Link>
              </li>
              <li>
                <Link to="/checklist" className="text-gray-300 hover:text-planero-pink transition-colors">
                  Wedding Checklist
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">For Vendors</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/vendor-signup" className="text-gray-300 hover:text-planero-pink transition-colors">
                  Join as Vendor
                </Link>
              </li>
              <li>
                <Link to="/vendor-login" className="text-gray-300 hover:text-planero-pink transition-colors">
                  Vendor Login
                </Link>
              </li>
              <li>
                <Link to="/vendor-dashboard" className="text-gray-300 hover:text-planero-pink transition-colors">
                  Vendor Dashboard
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-planero-pink transition-colors">
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-300 hover:text-planero-pink transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help-center" className="text-gray-300 hover:text-planero-pink transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-planero-pink transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-planero-pink transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-planero-pink transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-planero-pink transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} PlanEro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
