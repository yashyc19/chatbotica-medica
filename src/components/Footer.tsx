
import { Link } from "react-router-dom";
import { Heart, Mail, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-6 w-6 text-medbot-500" />
              <span className="text-xl font-bold text-gray-900">Aurora</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Your AI-powered health assistant, providing reliable medical information through natural conversation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-medbot-500">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-medbot-500">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-medbot-500">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-medbot-500 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-gray-600 hover:text-medbot-500 text-sm">
                  Chat with Aurora
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-medbot-500 text-sm">
                  Health Articles
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-medbot-500 text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-medbot-500 text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-medbot-500 text-sm">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-0.5 text-medbot-500 flex-shrink-0" />
                <a href="mailto:contact@medbotica.com" className="text-gray-600 hover:text-medbot-500 text-sm">
                  contact@aurora.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            &copy; {currentYear} Aurora. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs text-center mt-2">
            Disclaimer: Aurora provides information for educational purposes only and is not a substitute for professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
