
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calculator } from 'lucide-react';

const EmiCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateEMI = () => {
    const P = parseFloat(loanAmount);
    const r = parseFloat(interestRate) / 12 / 100;
    const n = parseFloat(tenure) * 12;

    if (P && r && n) {
      const emiAmount = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
      const totalPayment = emiAmount * n;
      const interestPayment = totalPayment - P;

      setEmi(Math.round(emiAmount));
      setTotalAmount(Math.round(totalPayment));
      setTotalInterest(Math.round(interestPayment));
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-smoke to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Calculator className="w-8 h-8 text-emerald" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
              EMI Calculator
            </h1>
            <p className="text-xl text-slate leading-relaxed max-w-2xl mx-auto">
              Calculate your monthly EMI and plan your home loan effectively with our easy-to-use calculator.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="animate-fade-in bg-white/80 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-navy">Loan Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    placeholder="Enter loan amount"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="interestRate">Interest Rate (% per annum)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.1"
                    placeholder="Enter interest rate"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="tenure">Loan Tenure (Years)</Label>
                  <Input
                    id="tenure"
                    type="number"
                    placeholder="Enter loan tenure"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <Button 
                  onClick={calculateEMI}
                  className="w-full bg-emerald hover:bg-emerald/90 text-white transition-all duration-300 hover:scale-105"
                >
                  Calculate EMI
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-fade-in bg-white/80 backdrop-blur-sm shadow-lg" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle className="text-navy">EMI Results</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center p-6 bg-emerald/5 rounded-lg">
                  <p className="text-sm text-slate mb-2">Monthly EMI</p>
                  <p className="text-3xl font-bold text-emerald">₹{emi.toLocaleString()}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-navy/5 rounded-lg">
                    <p className="text-sm text-slate mb-2">Total Amount</p>
                    <p className="text-xl font-bold text-navy">₹{totalAmount.toLocaleString()}</p>
                  </div>
                  <div className="text-center p-4 bg-gold/5 rounded-lg">
                    <p className="text-sm text-slate mb-2">Total Interest</p>
                    <p className="text-xl font-bold text-gold">₹{totalInterest.toLocaleString()}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EmiCalculator;
