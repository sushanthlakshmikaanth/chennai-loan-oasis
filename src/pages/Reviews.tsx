
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Reviews = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Velachery, Chennai",
      rating: 5,
      text: "Outstanding service! They helped me secure a home loan at 8.25% when others quoted 9.5%. The team was professional and handled all documentation seamlessly.",
      loan: "₹45 Lakhs Home Loan"
    },
    {
      name: "Priya Sharma",
      location: "OMR, Chennai",
      rating: 5,
      text: "As a working professional, I needed quick processing. They delivered pre-approval in 24 hours and final sanction in 7 days. Highly recommend their services!",
      loan: "₹65 Lakhs Home Loan"
    },
    {
      name: "Arun Patel",
      location: "Anna Nagar, Chennai",
      rating: 5,
      text: "Excellent guidance for NRI home loan. They understood my overseas income structure and got me approved with minimal documentation. True professionals!",
      loan: "₹80 Lakhs NRI Loan"
    },
    {
      name: "Meena Iyer",
      location: "T. Nagar, Chennai",
      rating: 5,
      text: "Saved ₹3 lakhs through balance transfer. Their team analyzed my existing loan and found a better rate. The switch process was completely hassle-free.",
      loan: "₹55 Lakhs Balance Transfer"
    },
    {
      name: "Vikram Reddy",
      location: "Porur, Chennai",
      rating: 5,
      text: "Construction loan for my villa was approved in record time. Stage-wise disbursements were smooth, and their architect network helped with approvals.",
      loan: "₹1.2 Crores Construction Loan"
    },
    {
      name: "Sunitha Nair",
      location: "Adyar, Chennai",
      rating: 5,
      text: "First-time home buyer experience was made easy. They explained every step, negotiated the best rate, and ensured timely loan disbursement.",
      loan: "₹35 Lakhs Home Loan"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-navy mb-4">
              What Our Clients Say
            </h1>
            <p className="text-xl text-slate max-w-3xl mx-auto">
              Over 1000+ families have trusted us with their home loan journey. 
              Here's what they have to say about our service excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-white to-smoke border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-gold fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-slate leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <h4 className="font-semibold text-navy">{testimonial.name}</h4>
                    <p className="text-sm text-slate">{testimonial.location}</p>
                    <p className="text-sm text-emerald font-medium mt-1">{testimonial.loan}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-gold/10 px-8 py-4 rounded-full">
              <Star className="w-6 h-6 text-gold fill-current" />
              <span className="text-lg font-semibold text-navy">4.9/5 Average Rating</span>
              <span className="text-slate">|</span>
              <span className="text-slate">1000+ Happy Clients</span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Reviews;
