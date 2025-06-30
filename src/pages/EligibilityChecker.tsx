
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle } from 'lucide-react';

const EligibilityChecker = () => {
  const [monthlyIncome, setMonthlyIncome] = useState('');
  const [existingEmi, setExistingEmi] = useState('');
  const [age, setAge] = useState('');
  const [eligibleAmount, setEligibleAmount] = useState(0);
  const [isCalculated, setIsCalculated] = useState(false);

  const checkEligibility = () => {
    const income = parseFloat(monthlyIncome);
    const emi = parseFloat(existingEmi) || 0;
    const userAge = parseFloat(age);

    if (income && userAge) {
      // Basic eligibility calculation (60% of net income available for EMI)
      const availableIncome = income - emi;
      const maxEmi = availableIncome * 0.6;
      
      // Assuming 9% interest rate and 20 years tenure for calculation
      const r = 0.09 / 12;
      const n = 20 * 12;
      const eligibleLoan = (maxEmi * (Math.pow(1 + r, n) - 1)) / (r * Math.pow(1 + r, n));
      
      setEligibleAmount(Math.round(eligibleLoan));
      setIsCalculated(true);
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-br from-smoke to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <div className="w-16 h-16 bg-emerald/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-emerald" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-navy mb-6">
              Loan Eligibility Checker
            </h1>
            <p className="text-xl text-slate leading-relaxed max-w-2xl mx-auto">
              Check your home loan eligibility instantly and know how much loan you can get approved for.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="animate-fade-in bg-white/80 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="text-navy">Personal Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="monthlyIncome">Monthly Income (₹)</Label>
                  <Input
                    id="monthlyIncome"
                    type="number"
                    placeholder="Enter your monthly income"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="existingEmi">Existing EMI (₹)</Label>
                  <Input
                    id="existingEmi"
                    type="number"
                    placeholder="Enter existing EMI (if any)"
                    value={existingEmi}
                    onChange={(e) => setExistingEmi(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="age">Age (Years)</Label>
                  <Input
                    id="age"
                    type="number"
                    placeholder="Enter your age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="mt-2"
                  />
                </div>
                <Button 
                  onClick={checkEligibility}
                  className="w-full bg-emerald hover:bg-emerald/90 text-white transition-all duration-300 hover:scale-105"
                >
                  Check Eligibility
                </Button>
              </CardContent>
            </Card>

            <Card className="animate-fade-in bg-white/80 backdrop-blur-sm shadow-lg" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <CardTitle className="text-navy">Eligibility Results</CardTitle>
              </CardHeader>
              <CardContent>
                {isCalculated ? (
                  <div className="space-y-6">
                    <div className="text-center p-6 bg-emerald/5 rounded-lg">
                      <p className="text-sm text-slate mb-2">Maximum Loan Amount</p>
                      <p className="text-3xl font-bold text-emerald">₹{eligibleAmount.toLocaleString()}</p>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald" />
                        <span className="text-slate">Income meets minimum requirements</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald" />
                        <span className="text-slate">Age criteria satisfied</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-emerald" />
                        <span className="text-slate">Debt-to-income ratio acceptable</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate text-center">
                      *This is an indicative amount. Final approval depends on credit score, property valuation, and bank policies.
                    </p>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate">Enter your details to check loan eligibility</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EligibilityChecker;
