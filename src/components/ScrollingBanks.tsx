
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
      logo: "https://logoeps.com/wp-content/uploads/2013/03/axis-bank-vector-logo.png",
      alt: "Axis Logo"
    },
    { 
      name: "Kotak Mahindra Bank", 
      logo: "https://www.kotak.com/content/dam/Kotak/logo/kotak-logo.png",
      alt: "Kotak Logo"
    },
    { 
      name: "Punjab National Bank", 
      logo: "https://www.pnbindia.in/images/logo-main.png",
      alt: "PNB Logo"
    },
    { 
      name: "Bank of Baroda", 
      logo: "https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/images/logo/bob_logo.png",
      alt: "BOB Logo"
    },
    { 
      name: "Canara Bank", 
      logo: "https://canarabank.com/images/canara-logo.png",
      alt: "Canara Logo"
    },
    { 
      name: "Union Bank of India", 
      logo: "https://www.unionbankofindia.co.in/images/newlogo.png",
      alt: "Union Logo"
    },
    { 
      name: "Indian Bank", 
      logo: "https://www.indianbank.in/images/logo.png",
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
                  // Enhanced fallback with bank initials
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector('.fallback-text')) {
                    const fallback = document.createElement('div');
                    fallback.className = 'fallback-text text-sm font-bold text-navy bg-emerald/10 rounded p-2';
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
