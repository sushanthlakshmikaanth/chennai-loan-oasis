import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What documents are required for a home loan?",
      answer: "You'll need identity proof (Aadhaar, PAN), address proof, income documents (salary slips, ITR), bank statements for the last 6 months, property documents, and photographs. Our team will guide you through the complete documentation process."
    },
    {
      question: "How much loan amount can I get?",
      answer: "Typically, you can get a loan of up to 80-90% of the property value. The exact amount depends on your income, credit score, existing liabilities, and the bank's policies. We help you maximize your eligibility across multiple lenders."
    },
    {
      question: "What are the current interest rates?",
      answer: "Interest rates vary between 8.5% to 11.5% depending on the lender, loan amount, tenure, and your credit profile. We work with 25+ banks and NBFCs to get you the most competitive rates available in the market."
    },
    {
      question: "How long does the loan approval process take?",
      answer: "With our streamlined process, loan approval typically takes 7-15 working days. This includes document verification, property evaluation, and final approval. We ensure faster processing through our established relationships with lenders."
    },
    {
      question: "Can I get a loan for an under-construction property?",
      answer: "Yes, we facilitate construction-linked loans for under-construction properties. The loan is disbursed in stages based on construction milestones. We work with reputed builders across Chennai to ensure hassle-free disbursements."
    },
    {
      question: "What is the maximum loan tenure available?",
      answer: "Home loans are available for up to 30 years, depending on your age and retirement plans. Longer tenures mean lower EMIs but higher total interest. Our consultants help you choose the optimal tenure for your financial situation."
    },
    {
      question: "Are there any hidden charges?",
      answer: "We believe in complete transparency. All charges including processing fees, legal charges, and documentation costs are clearly explained upfront. We negotiate with banks to minimize processing fees and ensure you get the best deal."
    },
    {
      question: "Can NRIs apply for home loans in Chennai?",
      answer: "Yes, we specialize in NRI home loans with competitive rates and flexible terms. NRIs can finance up to 80% of the property value. We handle all documentation and coordinate with overseas clients for a smooth loan process."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate leading-relaxed max-w-2xl mx-auto">
            Get answers to common questions about home loans and our services. 
            Can't find what you're looking for? Contact our experts directly.
          </p>
        </div>

        <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-smoke/50 rounded-xl border border-gray-100 px-6 hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-navy hover:text-emerald transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate leading-relaxed pb-6 text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <p className="text-lg text-slate mb-6">Still have questions?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918778569102"
              className="inline-flex items-center justify-center px-8 py-3 bg-emerald text-white rounded-lg hover:bg-emerald/90 transition-all duration-200 hover:scale-105 font-medium"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Our Experts
            </a>
            <a 
              href="https://wa.me/918778569102"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-emerald text-white rounded-lg hover:bg-emerald/90 transition-all duration-200 hover:scale-105 font-medium"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
