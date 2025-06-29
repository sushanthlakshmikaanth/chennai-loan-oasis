
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Star, Shield, Clock, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-smoke to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 text-gold font-medium text-sm">
                <Star className="w-4 h-4 mr-2" />
                Trusted by 1000+ Families
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-navy leading-tight mb-6">
              Your Dream Home
              <span className="block text-emerald">Awaits in Chennai</span>
            </h1>
            
            <p className="text-xl text-slate leading-relaxed mb-8">
              Premium home loan consultancy with personalized service, competitive rates, 
              and expert guidance. Transform your homeownership dreams into reality with 
              Chennai's most trusted loan specialists.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Start Your Journey
              </Button>
              <Button variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200">
                Calculate EMI
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-navy">₹50Cr+</div>
                <div className="text-sm text-slate">Loans Sanctioned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-navy">15+</div>
                <div className="text-sm text-slate">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-navy">98%</div>
                <div className="text-sm text-slate">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <Card className="p-8 bg-white/80 backdrop-blur-sm shadow-2xl">
              <h3 className="text-2xl font-serif font-bold text-navy mb-6">Quick Loan Assessment</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate mb-2">Loan Amount Required</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald">
                    <option>₹10 - 25 Lakhs</option>
                    <option>₹25 - 50 Lakhs</option>
                    <option>₹50 - 75 Lakhs</option>
                    <option>₹75 Lakhs+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate mb-2">Monthly Income</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald">
                    <option>₹25,000 - 50,000</option>
                    <option>₹50,000 - 1,00,000</option>
                    <option>₹1,00,000+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate mb-2">Employment Type</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald focus:border-emerald">
                    <option>Salaried</option>
                    <option>Self Employed</option>
                    <option>Business Owner</option>
                  </select>
                </div>
                
                <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-bold py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Pre-Approval
                </Button>
              </form>
            </Card>

            {/* Trust indicators */}
            <div className="flex justify-center mt-8 space-x-8">
              <div className="flex items-center space-x-2 text-slate">
                <Shield className="w-5 h-5 text-emerald" />
                <span className="text-sm">RBI Registered</span>
              </div>
              <div className="flex items-center space-x-2 text-slate">
                <Clock className="w-5 h-5 text-emerald" />
                <span className="text-sm">24 Hour Process</span>
              </div>
              <div className="flex items-center space-x-2 text-slate">
                <Users className="w-5 h-5 text-emerald" />
                <span className="text-sm">Expert Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
