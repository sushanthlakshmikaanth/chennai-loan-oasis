
import './ScrollingBanks.css';

const ScrollingBanks = () => {
  const banks = [
    { 
      name: "State Bank of India", 
      logo: "https://1000logos.net/wp-content/uploads/2021/05/State-Bank-of-India-logo.png",
      alt: "SBI Logo"
    },
    { 
      name: "HDFC Bank", 
      logo: "https://1000logos.net/wp-content/uploads/2021/04/HDFC-Bank-logo.png",
      alt: "HDFC Logo"
    },
    { 
      name: "ICICI Bank", 
      logo: "https://1000logos.net/wp-content/uploads/2021/04/ICICI-Bank-logo.png",
      alt: "ICICI Logo"
    },
    { 
      name: "Axis Bank", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Axis_Bank_logo.svg/1200px-Axis_Bank_logo.svg.png",
      alt: "Axis Logo"
    },
    { 
      name: "Kotak Mahindra Bank", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kotak_Mahindra_Bank_logo.svg/1200px-Kotak_Mahindra_Bank_logo.svg.png",
      alt: "Kotak Logo"
    },
    { 
      name: "Punjab National Bank", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Punjab_National_Bank_logo.png",
      alt: "PNB Logo"
    },
    { 
      name: "Bank of Baroda", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Bank_of_Baroda_Logo.svg/1200px-Bank_of_Baroda_Logo.svg.png",
      alt: "BOB Logo"
    },
    { 
      name: "Canara Bank", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Canara_Bank_logo.svg/1200px-Canara_Bank_logo.svg.png",
      alt: "Canara Logo"
    },
    { 
      name: "Union Bank of India", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Union_Bank_of_India_Logo.svg/1200px-Union_Bank_of_India_Logo.svg.png",
      alt: "Union Logo"
    },
    { 
      name: "Indian Bank", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Indian_Bank_Logo.svg/1200px-Indian_Bank_Logo.svg.png",
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
