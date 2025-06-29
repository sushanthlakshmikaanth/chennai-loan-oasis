
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-navy to-slate text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">
            Ready to Start Your Home Loan Journey?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect with Chennai's most trusted home loan consultants. 
            We're here to make your homeownership dreams a reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-emerald" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Our Office</h4>
                  <p className="text-gray-300">123 Anna Salai, Near Landmark<br />Chennai - 600002, Tamil Nadu</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-emerald" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Phone</h4>
                  <p className="text-gray-300">+91 98765 43210<br />+91 98765 43211</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-emerald" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <p className="text-gray-300">info@homeloanchennai.com<br />support@homeloanchennai.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-emerald/20 rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-emerald" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                  <p className="text-gray-300">Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: By Appointment</p>
                </div>
              </div>
            </div>

            <div className="bg-gold/10 border border-gold/20 rounded-lg p-6">
              <h4 className="font-semibold text-gold mb-2">Emergency Support</h4>
              <p className="text-gray-300 text-sm">
                Need urgent assistance? Call our 24/7 helpline: 
                <span className="text-gold font-semibold"> +91 98765 43299</span>
              </p>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-serif text-white">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald focus:border-emerald"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald focus:border-emerald"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald focus:border-emerald"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Loan Amount</label>
                  <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-emerald focus:border-emerald">
                    <option value="">Select loan amount</option>
                    <option value="10-25">₹10 - 25 Lakhs</option>
                    <option value="25-50">₹25 - 50 Lakhs</option>
                    <option value="50-75">₹50 - 75 Lakhs</option>
                    <option value="75+">₹75 Lakhs+</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald focus:border-emerald"
                    placeholder="Tell us about your loan requirements..."
                  ></textarea>
                </div>
                
                <Button className="w-full bg-gold hover:bg-gold/90 text-navy font-bold py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
