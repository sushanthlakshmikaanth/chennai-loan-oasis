
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Heart, Shield, TrendingUp } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "Industry Excellence",
      description: "Recognized as Chennai's leading home loan consultancy"
    },
    {
      icon: Heart,
      title: "Client-Centric",
      description: "Personalized service with 98% customer satisfaction"
    },
    {
      icon: Shield,
      title: "Trusted Partner",
      description: "RBI registered with transparent practices"
    },
    {
      icon: TrendingUp,
      title: "Market Leader",
      description: "₹50+ Crores in successful loan sanctions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-smoke to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-navy mb-6">
              15 Years of Excellence in Chennai Real Estate Finance
            </h2>
            <p className="text-lg text-slate leading-relaxed mb-8">
              Founded with a vision to make homeownership accessible to every family in Chennai, 
              we have evolved into the city's most trusted home loan consultancy. Our deep 
              understanding of local real estate markets, combined with strong banking relationships, 
              ensures you get the best possible loan terms.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-emerald rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-navy">Expert Team</h4>
                  <p className="text-slate">Certified financial advisors with 15+ years experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-emerald rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-navy">Banking Network</h4>
                  <p className="text-slate">Partnerships with 25+ leading banks and NBFCs</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-emerald rounded-full mt-3"></div>
                <div>
                  <h4 className="font-semibold text-navy">End-to-End Service</h4>
                  <p className="text-slate">From application to disbursement, we handle everything</p>
                </div>
              </div>
            </div>

            <Button className="bg-emerald hover:bg-emerald/90 text-white px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Meet Our Team
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <achievement.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="font-serif font-bold text-navy mb-2">{achievement.title}</h3>
                  <p className="text-sm text-slate leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
