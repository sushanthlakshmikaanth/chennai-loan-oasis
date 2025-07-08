
import './ScrollingBanks.css';

const ScrollingBanks = () => {
  const banks = [
    { 
      name: "State Bank of India", 
      logo: "https://logoeps.com/wp-content/uploads/2013/03/state-bank-of-india-vector-logo.png",
      alt: "SBI Logo"
    },
    { 
      name: "HDFC Bank", 
      logo: "https://logoeps.com/wp-content/uploads/2013/03/hdfc-bank-vector-logo.png",
      alt: "HDFC Logo"
    },
    { 
      name: "ICICI Bank", 
      logo: "https://logoeps.com/wp-content/uploads/2013/03/icici-bank-vector-logo.png",
      alt: "ICICI Logo"
    },
    { 
      name: "Axis Bank", 
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Axis-Bank-Logo.png",
      alt: "Axis Logo"
    },
    { 
      name: "Kotak Mahindra Bank", 
      logo: "https://logos-world.net/wp-content/uploads/2021/03/Kotak-Mahindra-Bank-Logo.png",
      alt: "Kotak Logo"
    },
    { 
      name: "Punjab National Bank", 
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Punjab-National-Bank-PNB-Logo.png",
      alt: "PNB Logo"
    },
    { 
      name: "Bank of Baroda", 
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Bank-of-Baroda-Logo.png",
      alt: "BOB Logo"
    },
    { 
      name: "Canara Bank", 
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Canara-Bank-Logo.png",
      alt: "Canara Logo"
    },
    { 
      name: "Union Bank of India", 
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Union-Bank-of-India-Logo.png",
      alt: "Union Logo"
    },
    { 
      name: "Indian Bank", 
      logo: "https://logos-world.net/wp-content/uploads/2021/02/Indian-Bank-Logo.png",
      alt: "Indian Bank Logo"
    }
  ];

  return (
    <div className="scrolling-container">
      <div className="scrolling-content">
        {[...banks, ...banks].map((bank, index) => (
          <div key={index} className="bank-card">
            <div className="bank-logo">
              <img 
                src={bank.logo} 
                alt={bank.alt}
                className="bank-logo-image"
                loading="lazy"
                onError={(e) => {
                  // Fallback to a simple text logo if image fails
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-text')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'fallback-text text-xs font-bold text-navy';
                    fallback.textContent = bank.name.split(' ').map(word => word[0]).join('');
                    parent.appendChild(fallback);
                  }
                }}
              />
            </div>
            <h3>{bank.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanks;
