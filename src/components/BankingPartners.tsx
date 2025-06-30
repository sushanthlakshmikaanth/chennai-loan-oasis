
import ScrollingBanks from './ScrollingBanks';

const BankingPartners = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-smoke to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-navy mb-4">
            Our Banking Partners
          </h2>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            We partner with India's leading banks and financial institutions to offer you the best home loan rates and terms.
          </p>
        </div>

        <ScrollingBanks />

        <div className="text-center mt-8">
          <p className="text-sm text-slate font-medium">
            <span className="text-emerald font-bold">25+</span> Banking Partners | 
            <span className="text-emerald font-bold ml-2">₹50+ Crores</span> Sanctioned | 
            <span className="text-emerald font-bold ml-2">8.5%</span> Starting Rate
          </p>
        </div>
      </div>
    </section>
  );
};

export default BankingPartners;
