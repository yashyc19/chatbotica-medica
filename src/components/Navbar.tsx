
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Heart, BookOpen, MessageCircle } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-medbot-500" />
            <span className="text-xl font-bold text-gray-900">MedBotica</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button variant={isActive("/") ? "secondary" : "ghost"} className="text-sm">
                Home
              </Button>
            </Link>
            <Link to="/chat">
              <Button variant={isActive("/chat") ? "secondary" : "ghost"} className="text-sm">
                Chat
              </Button>
            </Link>
            <Link to="/blog">
              <Button variant={isActive("/blog") ? "secondary" : "ghost"} className="text-sm">
                Blog
              </Button>
            </Link>
            <Link to="/chat" className="ml-3">
              <Button size="sm" className="bg-medbot-500 hover:bg-medbot-600">
                Try Now
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-md text-gray-600" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                onClick={toggleMenu}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive("/") 
                    ? "bg-medbot-100 text-medbot-700" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Home
              </Link>
              <Link 
                to="/chat" 
                onClick={toggleMenu}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive("/chat") 
                    ? "bg-medbot-100 text-medbot-700" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Chat
              </Link>
              <Link 
                to="/blog" 
                onClick={toggleMenu}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive("/blog") 
                    ? "bg-medbot-100 text-medbot-700" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Blog
              </Link>
              <div className="pt-2">
                <Link 
                  to="/chat" 
                  onClick={toggleMenu}
                  className="w-full block text-center px-3 py-2 rounded-md text-sm font-medium bg-medbot-500 text-white hover:bg-medbot-600"
                >
                  Try Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
