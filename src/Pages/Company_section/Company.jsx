import React, { useState, useEffect, useRef } from 'react';
import './Company.css';

const Company = () => {
  const companies = [
    { name: 'Google', logo: '/logos/google.png' },
    { name: 'Microsoft', logo: '/logos/microsoft.png' },
    { name: 'Amazon', logo: '/logos/amazon.png' },
    { name: 'Meta', logo: '/logos/meta.png' },
    { name: 'Apple', logo: '/logos/apple.png' },
    { name: 'Netflix', logo: '/logos/netflix.png' },
 
  ];

  const scrollerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [duplicatedCompanies, setDuplicatedCompanies] = useState([...companies]);

  useEffect(() => {
    setDuplicatedCompanies([...companies, ...companies]);
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationFrame;
    let scrollPosition = 0;
    const speed = 1;

    const scroll = () => {
      if (!isPaused) {
        scrollPosition += speed;
        if (scrollPosition >= scroller.scrollWidth / 1) {
          scrollPosition = 0;
        }
        scroller.scrollLeft = scrollPosition;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isPaused]);

  return (
    <div className="companies-scroll-container">
      <h2 className="headline">
        Our students are not only working in big tech companies<br />
        but are now founders of funded startups and product creators
      </h2>

      <div 
        className="scroller" 
        ref={scrollerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="scroller-inner">
          {duplicatedCompanies.map((company, index) => (
            <div key={`${company.name}-${index}`} className="company-card">
              <div className="logo-container">
                <img 
                  src={company.logo} 
                  alt={company.name} 
                  className="company-logo"
                  loading="lazy"
                />
              </div>
              <div className="company-name">{company.name}</div>
            </div>
          ))}
        </div>
        
      
      </div>
    </div>
  );
};

export default Company;