
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Home, 
  Building, 
  GraduationCap, 
  User 
} from 'lucide-react';

const Services = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate('/contact');
  };

  const services = [
    {
      icon: Home,
      title: "Home Loan",
      description: "Competitive rates starting from 8.35% for buying your dream home",
      features: ["Up to ₹10 Crores", "90% Financing", "Flexible Tenure"]
    },
    {
      icon: Building,
      title: "Business Loan",
      description: "Fuel your business growth with our flexible business financing solutions",
      features: ["Quick Approval", "Competitive Rates", "Flexible Repayment"]
    },
    {
      icon: GraduationCap,
      title: "Education Loan",
      description: "Invest in your future with our comprehensive education loan packages",
      features: ["100% Fee Financing", "Moratorium Period", "Tax Benefits"]
    },
    {
      icon: User,
      title: "Personal Loan",
      description: "Meet your personal financial needs with our hassle-free personal loans",
      features: ["Instant Approval", "No Collateral", "Minimal Documentation"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-navy mb-4">
              Comprehensive Loan Solutions
            </h1>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              From home loans to business financing, we provide tailored 
              financial solutions to meet your unique requirements and help you achieve your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-smoke">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-emerald/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-emerald" />
                  </div>
                  <CardTitle className="text-xl font-serif text-navy">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate">
                        <div className="w-2 h-2 bg-gold rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={handleLearnMore}
                    variant="outline" 
                    className="w-full border-emerald text-emerald hover:bg-emerald hover:text-white transition-all duration-200"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
