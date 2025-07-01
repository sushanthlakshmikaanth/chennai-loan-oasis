
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Clock, Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    loanAmount: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formsubmit.co/infoflashloans@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          'loan-amount': formData.loanAmount,
          message: formData.message,
          _subject: 'New Home Loan Inquiry from Website',
          _captcha: 'false'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          loanAmount: '',
          message: ''
        });
        toast({
          title: "Success!",
          description: "Your message has been sent successfully. We'll get back to you soon!",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-12 md:py-20 bg-gradient-to-br from-navy to-slate text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Ready to Start Your Home Loan Journey?
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with Chennai's most trusted home loan consultants. 
              We're here to make your homeownership dreams a reality.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl font-serif font-bold mb-6 md:mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Our Office</h4>
                    <p className="text-gray-300 text-sm md:text-base">123 Anna Salai, Near Landmark<br />Chennai - 600002, Tamil Nadu</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Phone</h4>
                    <p className="text-gray-300 text-sm md:text-base">+91 98765 43210<br />+91 98765 43211</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300 text-sm md:text-base">infoflashloans@gmail.com<br />support@homeloanchennai.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-emerald/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-emerald" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Business Hours</h4>
                    <p className="text-gray-300 text-sm md:text-base">Mon - Sat: 9:00 AM - 7:00 PM<br />Sunday: By Appointment</p>
                  </div>
                </div>
              </div>

              <div className="bg-gold/10 border border-gold/20 rounded-lg p-4 md:p-6">
                <h4 className="font-semibold text-gold mb-2">Emergency Support</h4>
                <p className="text-gray-300 text-sm">
                  Need urgent assistance? Call our 24/7 helpline: 
                  <span className="text-gold font-semibold"> +91 98765 43299</span>
                </p>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 order-1 lg:order-2">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-serif text-white">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-emerald/20 border border-emerald/30 rounded-lg flex items-center space-x-3 animate-fade-in">
                    <CheckCircle className="w-5 h-5 text-emerald flex-shrink-0" />
                    <p className="text-emerald text-sm">Message sent successfully! We'll get back to you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center space-x-3 animate-fade-in">
                    <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <p className="text-red-400 text-sm">Failed to send message. Please try again or call us directly.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald focus:border-emerald"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald focus:border-emerald"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald focus:border-emerald"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Loan Amount</label>
                    <select 
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-emerald focus:border-emerald"
                    >
                      <option value="">Select loan amount</option>
                      <option value="10-25">₹10 - 25 Lakhs</option>
                      <option value="25-50">₹25 - 50 Lakhs</option>
                      <option value="50-75">₹50 - 75 Lakhs</option>
                      <option value="75+">₹75 Lakhs+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full bg-white/10 border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-emerald focus:border-emerald resize-none"
                      placeholder="Tell us about your loan requirements..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gold hover:bg-gold/90 text-navy font-bold py-3 md:py-4 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
