
import './ScrollingBanks.css';

const ScrollingBanks = () => {
  const banks = [
    { name: "State Bank of India", logo: "SBI" },
    { name: "HDFC Bank", logo: "HDFC" },
    { name: "ICICI Bank", logo: "ICICI" },
    { name: "Axis Bank", logo: "AXIS" },
    { name: "Kotak Mahindra Bank", logo: "KOTAK" },
    { name: "Punjab National Bank", logo: "PNB" },
    { name: "Bank of Baroda", logo: "BOB" },
    { name: "Canara Bank", logo: "CANARA" },
    { name: "Union Bank of India", logo: "UNION" },
    { name: "Indian Bank", logo: "INDIAN" }
  ];

  return (
    <div className="scrolling-container">
      <div className="scrolling-content">
        {[...banks, ...banks].map((bank, index) => (
          <div key={index} className="bank-card">
            <div className="bank-logo">
              <span>{bank.logo}</span>
            </div>
            <h3>{bank.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanks;
