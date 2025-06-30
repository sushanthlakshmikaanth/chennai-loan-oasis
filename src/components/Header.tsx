
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
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
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/02de0b08-8a43-456b-9092-37ae1eccc386.png" 
              alt="FlashLoans" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate hover:text-emerald transition-colors font-medium">
              Home
            </Link>
            <div className="relative group">
              <Link to="/services" className="text-slate hover:text-emerald transition-colors font-medium">
                Our Services
              </Link>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/services" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white">Home Purchase Loans</Link>
                  <Link to="/services" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white">Balance Transfer</Link>
                  <Link to="/services" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white">Loan Against Property</Link>
                  <Link to="/services" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white">Construction Loans</Link>
                  <Link to="/services" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white">NRI Home Loans</Link>
                </div>
              </div>
            </div>
            <Link to="/about" className="text-slate hover:text-emerald transition-colors font-medium">
              About
            </Link>
            <div className="relative group">
              <span className="text-slate hover:text-emerald transition-colors font-medium cursor-pointer">
                Quick Links
              </span>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white">EMI Calculator</a>
                  <a href="#" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white">Eligibility Checker</a>
                  <a href="#" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white">Interest Rates</a>
                  <a href="#" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white">Documentation</a>
                  <Link to="/faq" className="block px-4 py-2 text-sm text-slate hover:bg-emerald hover:text-white">FAQs</Link>
                </div>
              </div>
            </div>
            <Link to="/reviews" className="text-slate hover:text-emerald transition-colors font-medium">
              Reviews
            </Link>
            <Link to="/contact" className="text-slate hover:text-emerald transition-colors font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={handleGetQuote}
              className="bg-emerald hover:bg-emerald/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
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
              className="text-slate hover:text-emerald"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t border-gray-100 z-40">
            <div className="px-4 py-4 space-y-4">
              <Link to="/" className="block text-slate hover:text-emerald transition-colors font-medium">
                Home
              </Link>
              <Link to="/services" className="block text-slate hover:text-emerald transition-colors font-medium">
                Our Services
              </Link>
              <Link to="/about" className="block text-slate hover:text-emerald transition-colors font-medium">
                About
              </Link>
              <Link to="/reviews" className="block text-slate hover:text-emerald transition-colors font-medium">
                Reviews
              </Link>
              <Link to="/faq" className="block text-slate hover:text-emerald transition-colors font-medium">
                FAQs
              </Link>
              <Link to="/contact" className="block text-slate hover:text-emerald transition-colors font-medium">
                Contact
              </Link>
              <Button 
                onClick={handleGetQuote}
                className="w-full bg-emerald hover:bg-emerald/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
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
