
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-serif font-bold text-navy">
                Home Loan Chennai
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-slate hover:text-navy transition-colors duration-200 font-medium">
                Home
              </a>
              <a href="#services" className="text-slate hover:text-navy transition-colors duration-200 font-medium">
                Services
              </a>
              <a href="#about" className="text-slate hover:text-navy transition-colors duration-200 font-medium">
                About
              </a>
              <a href="#testimonials" className="text-slate hover:text-navy transition-colors duration-200 font-medium">
                Reviews
              </a>
              <a href="#contact" className="text-slate hover:text-navy transition-colors duration-200 font-medium">
                Contact
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button className="bg-emerald hover:bg-emerald/90 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate hover:text-navy"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="block px-3 py-2 text-slate hover:text-navy">Home</a>
              <a href="#services" className="block px-3 py-2 text-slate hover:text-navy">Services</a>
              <a href="#about" className="block px-3 py-2 text-slate hover:text-navy">About</a>
              <a href="#testimonials" className="block px-3 py-2 text-slate hover:text-navy">Reviews</a>
              <a href="#contact" className="block px-3 py-2 text-slate hover:text-navy">Contact</a>
              <div className="px-3 py-2">
                <Button className="w-full bg-emerald hover:bg-emerald/90 text-white">
                  Get Quote
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
