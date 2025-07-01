
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Home Loan Chennai</h3>
            <p className="text-gray-400 mb-4">
              Chennai's premier home loan consultancy, helping families achieve 
              their homeownership dreams for over 15 years.
            </p>
            <div className="text-sm text-gray-400">
              RBI Registration: NBxxxxxx
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-emerald transition-colors">Home Purchase Loans</Link></li>
              <li><Link to="/services" className="hover:text-emerald transition-colors">Balance Transfer</Link></li>
              <li><Link to="/services" className="hover:text-emerald transition-colors">Loan Against Property</Link></li>
              <li><Link to="/services" className="hover:text-emerald transition-colors">Construction Loans</Link></li>
              <li><Link to="/services" className="hover:text-emerald transition-colors">NRI Home Loans</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/emi-calculator" className="hover:text-emerald transition-colors">EMI Calculator</Link></li>
              <li><Link to="/eligibility-checker" className="hover:text-emerald transition-colors">Eligibility Checker</Link></li>
              <li><Link to="/interest-rates" className="hover:text-emerald transition-colors">Interest Rates</Link></li>
              <li><Link to="/documentation" className="hover:text-emerald transition-colors">Documentation</Link></li>
              <li><Link to="/faq" className="hover:text-emerald transition-colors">FAQs</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-2 text-gray-400 text-sm">
              <div>📍 Anna Salai, Chennai - 600002</div>
              <div>📞 +91 98765 43210</div>
              <div>✉️ info@homeloanchennai.com</div>
              <div>🕒 Mon-Sat: 9 AM - 7 PM</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Home Loan Chennai. All rights reserved. | Privacy Policy | Terms of Service</p>
          <p className="mt-2">This is made by projxpt</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
