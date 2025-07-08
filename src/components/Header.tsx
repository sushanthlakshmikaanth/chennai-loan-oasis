import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleGetQuote = () => {
    navigate('/contact');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200">
            <div className="text-2xl font-serif font-bold text-navy">loans.com</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate hover:text-emerald transition-all duration-300 font-medium hover:scale-105">
              Home
            </Link>
            <div className="relative group">
              <Link to="/services" className="text-slate hover:text-emerald transition-all duration-300 font-medium hover:scale-105">
                Our Services
              </Link>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform group-hover:translate-y-0 translate-y-2">
                <div className="py-2">
                  <Link to="/services" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white transition-all duration-200 hover:translate-x-1">Home Loan</Link>
                  <Link to="/services" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white transition-all duration-200 hover:translate-x-1">Business Loan</Link>
                  <Link to="/services" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white transition-all duration-200 hover:translate-x-1">Education Loan</Link>
                  <Link to="/services" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white transition-all duration-200 hover:translate-x-1">Personal Loan</Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="text-slate hover:text-emerald transition-all duration-300 font-medium hover:scale-105">
              About
            </Link>
            <div className="relative group">
              <span className="text-slate hover:text-emerald transition-all duration-300 font-medium cursor-pointer hover:scale-105">
                Quick Links
              </span>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform group-hover:translate-y-0 translate-y-2">
                <div className="py-2">
                  <Link to="/emi-calculator" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white transition-all duration-200 hover:translate-x-1">EMI Calculator</Link>
                  <Link to="/eligibility-checker" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white transition-all duration-200 hover:translate-x-1">Eligibility Checker</Link>
                  <Link to="/interest-rates" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white transition-all duration-200 hover:translate-x-1">Interest Rates</Link>
                  <Link to="/documentation" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white transition-all duration-200 hover:translate-x-1">Documentation</Link>
                  <Link to="/faq" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white transition-all duration-200 hover:translate-x-1">FAQs</Link>
                </div>
              </div>
            </div>
            <Link to="/reviews" className="text-slate hover:text-emerald transition-all duration-300 font-medium hover:scale-105">
              Reviews
            </Link>
            <Link to="/contact" className="text-slate hover:text-emerald transition-all duration-300 font-medium hover:scale-105">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a 
              href="tel:+918778569102"
              className="p-2 text-emerald hover:bg-emerald hover:text-white rounded-full transition-all duration-300 hover:scale-110"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a 
              href="https://wa.me/918778569102"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-emerald hover:bg-emerald hover:text-white rounded-full transition-all duration-300 hover:scale-110"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <Button 
              onClick={handleGetQuote}
              className="bg-emerald hover:bg-emerald/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate hover:text-emerald transition-all duration-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-40 animate-fade-in">
            <div className="px-4 py-4 space-y-4">
              <Link to="/" className="block text-slate hover:text-emerald transition-all duration-300 font-medium">
                Home
              </Link>
              <Link to="/services" className="block text-slate hover:text-emerald transition-all duration-300 font-medium">
                Our Services
              </Link>
              <Link to="/about" className="block text-slate hover:text-emerald transition-all duration-300 font-medium">
                About
              </Link>
              <Link to="/reviews" className="block text-slate hover:text-emerald transition-all duration-300 font-medium">
                Reviews
              </Link>
              <Link to="/faq" className="block text-slate hover:text-emerald transition-all duration-300 font-medium">
                FAQs
              </Link>
              <Link to="/emi-calculator" className="block text-slate hover:text-emerald transition-all duration-300 font-medium">
                EMI Calculator
              </Link>
              <Link to="/eligibility-checker" className="block text-slate hover:text-emerald transition-all duration-300 font-medium">
                Eligibility Checker
              </Link>
              <Link to="/interest-rates" className="block text-slate hover:text-emerald transition-all duration-300 font-medium">
                Interest Rates
              </Link>
              <Link to="/documentation" className="block text-slate hover:text-emerald transition-all duration-300 font-medium">
                Documentation
              </Link>
              <Link to="/contact" className="block text-slate hover:text-emerald transition-all duration-300 font-medium">
                Contact
              </Link>
              <div className="flex space-x-4 pt-2">
                <a 
                  href="tel:+918778569102"
                  className="p-2 text-emerald hover:bg-emerald hover:text-white rounded-full transition-all duration-300"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a 
                  href="https://wa.me/918778569102"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-emerald hover:bg-emerald hover:text-white rounded-full transition-all duration-300"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
              <Button 
                onClick={handleGetQuote}
                className="w-full bg-emerald hover:bg-emerald/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                Get Quote
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
