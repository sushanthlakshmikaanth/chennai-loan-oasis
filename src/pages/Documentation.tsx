
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileText, Users, Building, CreditCard } from 'lucide-react';

const Documentation = () => {
  const salariedDocs = [
    'PAN Card',
    'Aadhaar Card',
    'Passport size photographs',
    'Last 3 months salary slips',
    'Last 2 years ITR with computation',
    'Form 16 for last 2 years',
    'Bank statements for last 6 months',
    'Employment certificate',
    'Property documents'
  ];

  const selfEmployedDocs = [
    'PAN Card',
    'Aadhaar Card',
    'Passport size photographs',
    'Last 3 years ITR with audit report',
    'Last 3 years P&L and Balance Sheet',
    'Bank statements for last 12 months',
    'Business registration certificate',
    'GST registration (if applicable)',
    'Property documents'
  ];

  const propertyDocs = [
    'Sale deed/Agreement to sell',
    'Title documents',
    'Approved building plan',
    'Completion certificate',
    'Occupancy certificate',
    'Property tax receipts',
    'NOC from builder',
    'Chain of title documents',
    'Survey settlement record'
  ];

  const additionalDocs = [
    'Investment proofs (if any)',
    'Existing loan statements',
    'Co-applicant documents',
    'Property insurance',
    'Life insurance policy',
    'Bank account statements',
    'Address proof',
    'Age proof certificate'
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-smoke to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-emerald" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
              Home Loan Documentation
            </h1>
            <p className="text-xl text-slate leading-relaxed max-w-2xl mx-auto">
              Complete list of documents required for home loan application. We'll guide you through each step.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="animate-fade-in bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-emerald" />
                  </div>
                  <CardTitle className="text-navy">Salaried Applicants</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {salariedDocs.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                      <span className="text-slate">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-gold" />
                  </div>
                  <CardTitle className="text-navy">Self-Employed Applicants</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {selfEmployedDocs.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold rounded-full mt-2"></div>
                      <span className="text-slate">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-navy/10 rounded-lg flex items-center justify-center">
                    <Building className="w-5 h-5 text-navy" />
                  </div>
                  <CardTitle className="text-navy">Property Documents</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {propertyDocs.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-navy rounded-full mt-2"></div>
                      <span className="text-slate">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="animate-fade-in bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-emerald/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-emerald" />
                  </div>
                  <CardTitle className="text-navy">Additional Documents</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {additionalDocs.map((doc, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-emerald rounded-full mt-2"></div>
                      <span className="text-slate">{doc}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-12 bg-emerald text-white animate-fade-in" style={{animationDelay: '0.4s'}}>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Document Preparation Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Quality Matters</h4>
                  <p className="text-sm opacity-90">Ensure all documents are clear, legible, and properly scanned. Avoid blurry or cropped images.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Stay Updated</h4>
                  <p className="text-sm opacity-90">Use recent documents (within 3 months) for bank statements and salary slips for faster processing.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Complete Set</h4>
                  <p className="text-sm opacity-90">Submit all required documents together to avoid delays in loan processing and approval.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Documentation;
