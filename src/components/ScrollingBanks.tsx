
import './ScrollingBanks.css';

const ScrollingBanks = () => {
  const banks = [
    { 
      name: "State Bank of India", 
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop&crop=center",
      alt: "SBI Logo"
    },
    { 
      name: "HDFC Bank", 
      logo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=80&h=80&fit=crop&crop=center",
      alt: "HDFC Logo"
    },
    { 
      name: "ICICI Bank", 
      logo: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=80&h=80&fit=crop&crop=center",
      alt: "ICICI Logo"
    },
    { 
      name: "Axis Bank", 
      logo: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=80&h=80&fit=crop&crop=center",
      alt: "Axis Logo"
    },
    { 
      name: "Kotak Mahindra Bank", 
      logo: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=80&h=80&fit=crop&crop=center",
      alt: "Kotak Logo"
    },
    { 
      name: "Punjab National Bank", 
      logo: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=80&h=80&fit=crop&crop=center",
      alt: "PNB Logo"
    },
    { 
      name: "Bank of Baroda", 
      logo: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=80&h=80&fit=crop&crop=center",
      alt: "BOB Logo"
    },
    { 
      name: "Canara Bank", 
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop&crop=center",
      alt: "Canara Logo"
    },
    { 
      name: "Union Bank of India", 
      logo: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?w=80&h=80&fit=crop&crop=center",
      alt: "Union Logo"
    },
    { 
      name: "Indian Bank", 
      logo: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=80&h=80&fit=crop&crop=center",
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
