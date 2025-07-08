
import './ScrollingBanks.css';

const ScrollingBanks = () => {
  const banks = [
    { 
      name: "State Bank of India", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/SBI-logo.svg/200px-SBI-logo.svg.png",
      alt: "SBI Logo"
    },
    { 
      name: "HDFC Bank", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/HDFC_Bank_Logo.svg/200px-HDFC_Bank_Logo.svg.png",
      alt: "HDFC Logo"
    },
    { 
      name: "ICICI Bank", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/ICICI_Bank_Logo.svg/200px-ICICI_Bank_Logo.svg.png",
      alt: "ICICI Logo"
    },
    { 
      name: "Axis Bank", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Axis_Bank_logo.svg/200px-Axis_Bank_logo.svg.png",
      alt: "Axis Logo"
    },
    { 
      name: "Kotak Mahindra Bank", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Kotak_Mahindra_Bank_logo.svg/200px-Kotak_Mahindra_Bank_logo.svg.png",
      alt: "Kotak Logo"
    },
    { 
      name: "Punjab National Bank", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Punjab_National_Bank_logo.png/200px-Punjab_National_Bank_logo.png",
      alt: "PNB Logo"
    },
    { 
      name: "Bank of Baroda", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Bank_of_Baroda_Logo.svg/200px-Bank_of_Baroda_Logo.svg.png",
      alt: "BOB Logo"
    },
    { 
      name: "Canara Bank", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Canara_Bank_logo.svg/200px-Canara_Bank_logo.svg.png",
      alt: "Canara Logo"
    },
    { 
      name: "Union Bank of India", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Union_Bank_of_India_Logo.svg/200px-Union_Bank_of_India_Logo.svg.png",
      alt: "Union Logo"
    },
    { 
      name: "Indian Bank", 
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Indian_Bank_Logo.svg/200px-Indian_Bank_Logo.svg.png",
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
