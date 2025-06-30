
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TrendingDown, Building, Users, Home } from 'lucide-react';

const InterestRates = () => {
  const banks = [
    { name: 'State Bank of India', rate: '8.50% - 9.25%', type: 'Public Sector' },
    { name: 'HDFC Bank', rate: '8.75% - 9.50%', type: 'Private Sector' },
    { name: 'ICICI Bank', rate: '8.70% - 9.45%', type: 'Private Sector' },
    { name: 'Axis Bank', rate: '8.75% - 9.40%', type: 'Private Sector' },
    { name: 'Bank of Baroda', rate: '8.55% - 9.30%', type: 'Public Sector' },
    { name: 'Punjab National Bank', rate: '8.60% - 9.35%', type: 'Public Sector' },
    { name: 'Kotak Mahindra Bank', rate: '8.80% - 9.55%', type: 'Private Sector' },
    { name: 'IDFC First Bank', rate: '8.75% - 9.50%', type: 'Private Sector' },
  ];

  const loanTypes = [
    {
      icon: Home,
      title: 'Home Purchase Loan',
      rate: '8.50% - 9.55%',
      description: 'For buying ready-to-move or under-construction properties'
    },
    {
      icon: Building,
      title: 'Construction Loan',
      rate: '8.75% - 9.75%',
      description: 'For constructing a house on your own land'
    },
    {
      icon: TrendingDown,
      title: 'Balance Transfer',
      rate: '8.25% - 9.00%',
      description: 'Transfer your existing loan to get better rates'
    },
    {
      icon: Users,
      title: 'NRI Home Loan',
      rate: '9.00% - 10.50%',
      description: 'Special rates for Non-Resident Indians'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-smoke to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingDown className="w-8 h-8 text-emerald" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
              Current Interest Rates
            </h1>
            <p className="text-xl text-slate leading-relaxed max-w-2xl mx-auto">
              Compare the latest home loan interest rates from leading banks and choose the best option for you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            <div className="animate-fade-in">
              <h2 className="text-2xl font-serif font-bold text-navy mb-6">Bank Interest Rates</h2>
              <div className="space-y-4">
                {banks.map((bank, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-navy">{bank.name}</h3>
                          <p className="text-sm text-slate">{bank.type}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-bold text-emerald">{bank.rate}</p>
                          <p className="text-xs text-slate">*p.a.</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <h2 className="text-2xl font-serif font-bold text-navy mb-6">Rates by Loan Type</h2>
              <div className="space-y-4">
                {loanTypes.map((loan, index) => (
                  <Card key={index} className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-emerald/10 rounded-lg flex items-center justify-center">
                          <loan.icon className="w-6 h-6 text-emerald" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="font-semibold text-navy">{loan.title}</h3>
                            <p className="text-lg font-bold text-emerald">{loan.rate}</p>
                          </div>
                          <p className="text-sm text-slate">{loan.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <Card className="bg-navy text-white animate-fade-in" style={{animationDelay: '0.4s'}}>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Important Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Rate Factors</h4>
                  <ul className="space-y-1 text-sm opacity-90">
                    <li>• Credit score and credit history</li>
                    <li>• Loan amount and property value</li>
                    <li>• Income stability and employment type</li>
                    <li>• Loan tenure and down payment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Additional Charges</h4>
                  <ul className="space-y-1 text-sm opacity-90">
                    <li>• Processing fees: 0.5% - 1% of loan amount</li>
                    <li>• Legal and technical charges</li>
                    <li>• Insurance premiums</li>
                    <li>• Prepayment charges (if applicable)</li>
                  </ul>
                </div>
              </div>
              <p className="text-center mt-6 text-sm opacity-75">
                *Interest rates are subject to change. Final rates depend on individual profile and bank policies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default InterestRates;
