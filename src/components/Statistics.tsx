
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const Statistics = () => {
  const loanData = [
    { year: '2019', amount: 15 },
    { year: '2020', amount: 22 },
    { year: '2021', amount: 35 },
    { year: '2022', amount: 42 },
    { year: '2023', amount: 48 },
    { year: '2024', amount: 55 }
  ];

  const loanTypes = [
    { name: 'Home Purchase', value: 45, color: '#10B981' },
    { name: 'Balance Transfer', value: 25, color: '#F59E0B' },
    { name: 'Construction', value: 15, color: '#3B82F6' },
    { name: 'NRI Loans', value: 10, color: '#8B5CF6' },
    { name: 'Others', value: 5, color: '#EF4444' }
  ];

  const interestRates = [
    { bank: 'SBI', rate: 8.5 },
    { bank: 'HDFC', rate: 8.75 },
    { bank: 'ICICI', rate: 8.9 },
    { bank: 'Axis', rate: 9.1 },
    { bank: 'Kotak', rate: 8.85 }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">
            Our Success in Numbers
          </h2>
          <p className="text-xl text-slate max-w-3xl mx-auto">
            Data-driven insights into our home loan services and market performance in Chennai.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="bg-gradient-to-br from-white to-smoke border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-navy">Loan Sanctions by Year (₹ Crores)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={loanData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="year" stroke="#64748b" />
                  <YAxis stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#f8fafc', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px'
                    }} 
                  />
                  <Bar dataKey="amount" fill="#10B981" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-smoke border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-navy">Loan Distribution by Type</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={loanTypes}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {loanTypes.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#f8fafc', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {loanTypes.map((type, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: type.color }}
                    ></div>
                    <span className="text-slate">{type.name}: {type.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white to-smoke border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg text-navy">Current Interest Rates (%)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={interestRates}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="bank" stroke="#64748b" />
                  <YAxis domain={[8, 10]} stroke="#64748b" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#f8fafc', 
                      border: '1px solid #e2e8f0',
                      borderRadius: '8px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="rate" 
                    stroke="#F59E0B" 
                    strokeWidth={3}
                    dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-emerald/5 to-emerald/10 rounded-lg">
            <div className="text-3xl font-bold text-emerald mb-2">1000+</div>
            <div className="text-sm text-slate font-medium">Happy Families</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-gold/5 to-gold/10 rounded-lg">
            <div className="text-3xl font-bold text-gold mb-2">₹55Cr+</div>
            <div className="text-sm text-slate font-medium">Total Sanctioned</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-navy/5 to-navy/10 rounded-lg">
            <div className="text-3xl font-bold text-navy mb-2">98%</div>
            <div className="text-sm text-slate font-medium">Success Rate</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-emerald/5 to-emerald/10 rounded-lg">
            <div className="text-3xl font-bold text-emerald mb-2">7 Days</div>
            <div className="text-sm text-slate font-medium">Average Approval</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
