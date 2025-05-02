import React from 'react';
import './FeatureSection.css';

const FeatureSection = () => {
  const leftFeatures = [
    {
      title: "Comprehensive Curriculum",
      description: "Master key concepts and hands-on skills with clarity and confidence.",
      icon: "📚"
    },
    {
      title: "Code and Chill",
      description: "Coding should be fun, not frightening.",
      icon: "☕"
    }
  ];

  const rightFeatures = [
    {
      title: "You finish it",
      description: "Our cohorts help you complete courses on time as a community.",
      icon: "🎯"
    },
    {
      title: "Industry Guests",
      description: "Learn directly from industry experts in engaging sessions.",
      icon: "👥"
    }
  ];

  return (
    <div className="relative min-h-screen bg-black py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-orange-amber mb-4 md:mb-6 animate-fade-in">
            But Why ChaiCode?
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto animate-fade-in">
            ChaiCode exists because we love tech and teaching
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 md:gap-8">
       
          <div className="flex-1 max-w-md flex flex-col justify-center order-1 lg:order-none">
            {leftFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card rounded-xl p-6 mb-6 animate-slide-left ${`animate-delay-${(index + 1) * 100}`}`}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-amber-300 mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="flex-shrink-0 mx-auto lg:mx-8 mb-8 lg:mb-0 order-3 lg:order-none animate-float w-full max-w-md">
            <div className="relative group h-full flex flex-col justify-center">
              <img 
                src="./assets/hitesh-sir.jpg" 
                alt="Hitesh Choudhary" 
                className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-amber-500 shadow-lg mx-auto"
              />
              <div className="mt-6 p-6 bg-gradient-to-r from-orange-900/50 to-amber-900/20 rounded-xl">
                <h3 className="text-2xl font-semibold text-amber-400 text-center">Hitesh Choudhary</h3>
                <p className="text-gray-300 mt-4 text-center">
                  <span className="text-amber-300 font-medium">retired from corporate and full time YouTuber</span>, 
                  <span className="text-orange-400 font-medium"> x founder of LCO (acquired)</span>, 
                  <span className="text-amber-300 font-medium"> x CTO</span>, 
                  <span className="text-orange-400 font-medium"> Sr. Director at PW</span>. 
                  <span className="text-amber-300 font-medium"> 2 YT channels (950k & 470k)</span>, 
                  <span className="text-orange-400 font-medium"> stepped into 43 countries</span>.
                </p>
              </div>
            </div>
          </div>

         
          <div className="flex-1 max-w-md flex flex-col justify-center order-2 lg:order-none">
            {rightFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`feature-card rounded-xl p-6 mb-6 animate-slide-right ${`animate-delay-${(index + 1) * 100}`}`}
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-amber-300 mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center w-full flex justify-center animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <a 
            href="https://courses.chaicode.com/learn/view-all?show=batch&type=17" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="cta-button z-10 px-8 py-4 text-base"
          >
            Join Cohort Live Classes
          </a>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;