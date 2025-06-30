
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import BankingPartners from '@/components/BankingPartners';
import Statistics from '@/components/Statistics';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <BankingPartners />
      <Statistics />
      <Footer />
    </div>
  );
};

export default Index;
