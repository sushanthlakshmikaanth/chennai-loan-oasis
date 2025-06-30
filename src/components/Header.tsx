
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-navy">Home Loan Chennai</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-slate hover:text-emerald transition-colors font-medium">Home</a>
            <a href="#services" className="text-slate hover:text-emerald transition-colors font-medium">Services</a>
            <a href="#about" className="text-slate hover:text-emerald transition-colors font-medium">About</a>
            <a href="#testimonials" className="text-slate hover:text-emerald transition-colors font-medium">Reviews</a>
            <a href="#faq" className="text-slate hover:text-emerald transition-colors font-medium">FAQ</a>
            <a href="#contact" className="text-slate hover:text-emerald transition-colors font-medium">Contact</a>
          </nav>

          {/* Contact Icons & CTA - Right Side */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 mr-4">
              <a 
                href="tel:+918778569102" 
                className="flex items-center justify-center w-12 h-12 bg-emerald/10 text-emerald rounded-full hover:bg-emerald hover:text-white transition-all duration-200 hover:scale-110 shadow-md"
                title="Call us: +91 87785 69102"
              >
                <Phone className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/918778569102" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-emerald/10 text-emerald rounded-full hover:bg-emerald hover:text-white transition-all duration-200 hover:scale-110 shadow-md"
                title="WhatsApp us: +91 87785 69102"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <Button className="bg-emerald hover:bg-emerald/90 text-white px-6 py-2 rounded-lg transition-all duration-200 hover:scale-105 shadow-md">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-slate hover:text-emerald transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-slate hover:text-emerald transition-colors font-medium">Home</a>
              <a href="#services" className="text-slate hover:text-emerald transition-colors font-medium">Services</a>
              <a href="#about" className="text-slate hover:text-emerald transition-colors font-medium">About</a>
              <a href="#testimonials" className="text-slate hover:text-emerald transition-colors font-medium">Reviews</a>
              <a href="#faq" className="text-slate hover:text-emerald transition-colors font-medium">FAQ</a>
              <a href="#contact" className="text-slate hover:text-emerald transition-colors font-medium">Contact</a>
              
              <div className="flex items-center justify-center space-x-4 pt-4">
                <a 
                  href="tel:+918778569102" 
                  className="flex items-center justify-center w-12 h-12 bg-emerald/10 text-emerald rounded-full hover:bg-emerald hover:text-white transition-all duration-200 shadow-md"
                  title="Call us: +91 87785 69102"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a 
                  href="https://wa.me/918778569102" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-emerald/10 text-emerald rounded-full hover:bg-emerald hover:text-white transition-all duration-200 shadow-md"
                  title="WhatsApp us: +91 87785 69102"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
              
              <Button className="bg-emerald hover:bg-emerald/90 text-white px-6 py-2 rounded-lg transition-all duration-200 w-full shadow-md">
                Get Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
