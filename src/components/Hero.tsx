
import { Button } from '@/components/ui/button';
import { Star, Shield, Clock, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-smoke to-white py-20 lg:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald/5 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/5 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-gold/10 text-gold font-medium text-sm animate-bounce">
              <Star className="w-4 h-4 mr-2" />
              Trusted by 1000+ Families
            </span>
          </div>
          
          <h1 className="text-4xl lg:text-7xl font-serif font-bold text-navy leading-tight mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
            Your Dream Home
            <span className="block text-emerald bg-gradient-to-r from-emerald to-emerald/80 bg-clip-text text-transparent">
              Awaits in Chennai
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-slate leading-relaxed mb-12 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.4s'}}>
            Premium home loan consultancy with personalized service, competitive rates, 
            and expert guidance. Transform your homeownership dreams into reality with 
            Chennai's most trusted loan specialists.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Button className="bg-emerald hover:bg-emerald/90 text-white px-10 py-6 text-xl font-medium rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform">
              Start Your Journey
            </Button>
            <Button variant="outline" className="border-2 border-navy text-navy hover:bg-navy hover:text-white px-10 py-6 text-xl font-medium rounded-xl transition-all duration-300 hover:scale-105 transform">
              Calculate EMI
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto animate-fade-in" style={{animationDelay: '0.8s'}}>
            <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <div className="text-4xl font-bold text-navy mb-2">₹50Cr+</div>
              <div className="text-lg text-slate font-medium">Loans Sanctioned</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <div className="text-4xl font-bold text-navy mb-2">15+</div>
              <div className="text-lg text-slate font-medium">Years Experience</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform">
              <div className="text-4xl font-bold text-navy mb-2">98%</div>
              <div className="text-lg text-slate font-medium">Success Rate</div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex justify-center mt-16 space-x-12 animate-fade-in" style={{animationDelay: '1s'}}>
            <div className="flex items-center space-x-3 text-slate">
              <Shield className="w-6 h-6 text-emerald" />
              <span className="text-lg font-medium">RBI Registered</span>
            </div>
            <div className="flex items-center space-x-3 text-slate">
              <Clock className="w-6 h-6 text-emerald" />
              <span className="text-lg font-medium">24 Hour Process</span>
            </div>
            <div className="flex items-center space-x-3 text-slate">
              <Users className="w-6 h-6 text-emerald" />
              <span className="text-lg font-medium">Expert Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
