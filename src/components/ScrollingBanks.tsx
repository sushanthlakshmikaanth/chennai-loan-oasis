
import './ScrollingBanks.css';

const ScrollingBanks = () => {
  const banks = [
    { 
      name: "Bank of India", 
      logo: "/lovable-uploads/75baf55b-56a8-4c34-b3ca-836488e14a74.png",
      alt: "Bank of India Logo"
    },
    { 
      name: "Central Bank of India", 
      logo: "/lovable-uploads/75baf55b-56a8-4c34-b3ca-836488e14a74.png",
      alt: "Central Bank of India Logo"
    },
    { 
      name: "Indian Bank", 
      logo: "/lovable-uploads/75baf55b-56a8-4c34-b3ca-836488e14a74.png",
      alt: "Indian Bank Logo"
    },
    { 
      name: "Canara Bank", 
      logo: "/lovable-uploads/75baf55b-56a8-4c34-b3ca-836488e14a74.png",
      alt: "Canara Bank Logo"
    },
    { 
      name: "Punjab National Bank", 
      logo: "/lovable-uploads/75baf55b-56a8-4c34-b3ca-836488e14a74.png",
      alt: "PNB Logo"
    },
    { 
      name: "Bank of Maharashtra", 
      logo: "/lovable-uploads/015b83f0-b1d3-4f60-86d2-0919f1c59ea3.png",
      alt: "Bank of Maharashtra Logo"
    },
    { 
      name: "Bank of Baroda", 
      logo: "/lovable-uploads/015b83f0-b1d3-4f60-86d2-0919f1c59ea3.png",
      alt: "Bank of Baroda Logo"
    },
    { 
      name: "Union Bank of India", 
      logo: "/lovable-uploads/015b83f0-b1d3-4f60-86d2-0919f1c59ea3.png",
      alt: "Union Bank Logo"
    },
    { 
      name: "State Bank of India", 
      logo: "/lovable-uploads/015b83f0-b1d3-4f60-86d2-0919f1c59ea3.png",
      alt: "SBI Logo"
    },
    { 
      name: "HDFC Bank", 
      logo: "https://logos-world.net/wp-content/uploads/2021/02/HDFC-Bank-Logo.png",
      alt: "HDFC Logo"
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
