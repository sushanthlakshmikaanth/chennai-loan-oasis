
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Banknote, 
  CreditCard, 
  Shield, 
  TrendingUp, 
  Users, 
  FileText 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Banknote,
      title: "Home Purchase Loans",
      description: "Competitive rates starting from 8.35% for buying your dream home in Chennai",
      features: ["Up to ₹10 Crores", "90% Financing", "Flexible Tenure"]
    },
    {
      icon: CreditCard,
      title: "Home Loan Balance Transfer",
      description: "Switch to better rates and save thousands on your existing home loan",
      features: ["Lower Interest Rates", "Top-up Available", "Minimal Documentation"]
    },
    {
      icon: TrendingUp,
      title: "Loan Against Property",
      description: "Unlock the value of your property for business or personal needs",
      features: ["Quick Approval", "High Loan Amount", "Competitive Rates"]
    },
    {
      icon: Shield,
      title: "Construction Loans",
      description: "Build your dream home with our flexible construction financing",
      features: ["Stage-wise Disbursement", "Architect Approval", "Flexible Terms"]
    },
    {
      icon: Users,
      title: "NRI Home Loans",
      description: "Specialized home loan solutions for Non-Resident Indians",
      features: ["NRE/NRO Account", "Overseas Income", "Dedicated Support"]
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Complete assistance with paperwork and legal formalities",
      features: ["Legal Verification", "Document Preparation", "Compliance Check"]
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
              From first-time home buyers to seasoned investors, we provide tailored 
              financial solutions to meet your unique requirements in Chennai's dynamic real estate market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <Button variant="outline" className="w-full border-emerald text-emerald hover:bg-emerald hover:text-white transition-all duration-200">
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
