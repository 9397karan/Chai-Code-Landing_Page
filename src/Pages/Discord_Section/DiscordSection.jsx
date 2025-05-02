import React from 'react';
import "./DiscordSection.css";

const DiscordSection = () => {
  return (
    <div className=" py-20 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-16">
    
        <div className="flex-1 max-w-md lg:max-w-lg animate-float">
          <a href="https://discord.gg/yourlink" target="_blank" rel="noopener noreferrer" className="block group relative p-4 rounded-3xl transition-all duration-500 hover:scale-105">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-500/30 group-hover:border-amber-400/40 transition-all duration-500">
              <img 
                src="/assets/chai-white.png"
                alt="Community" 
                className="w-full h-auto rounded-2xl"
              />
            </div>
       
            <div className="absolute inset-0 m-2 rounded-3xl border-2 border-transparent group-hover:border-amber-500/20 transition-all duration-500 pointer-events-none"></div>
          </a>
        </div>

        
        <div className="flex-1 max-w-md text-center lg:text-left">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gradient-orange-amber mb-6 drop-shadow-lg">
            Community
          </h2>
          
          <p className="text-xl md:text-2xl text-amber-300 mb-10 leading-relaxed">
            Join our<br />
            <span className="text-amber-400 font-semibold">community</span> where<br />
            <span className="text-white font-bold">creativity thrives.</span>
          </p>

       
          <div className="p-6 bg-gradient-to-r from-orange-900/20 to-amber-900/10 border border-amber-500/30 rounded-2xl backdrop-blur-md inline-block animate-glow ">
            <div className="flex items-center justify-center gap-5">
              <svg className="w-14 h-14 text-amber-400 animate-bounce-slow" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.3 4.1c-1.4-.6-3-.9-4.7-.9-1.7 0-3.3.3-4.7.9-1.4.6-2.6 1.5-3.6 2.6-1 1.1-1.8 2.4-2.3 3.8-.5 1.4-.7 2.9-.7 4.4 0 1.5.2 3 .7 4.4.5 1.4 1.3 2.7 2.3 3.8 1 1.1 2.2 2 3.6 2.6 1.4.6 3 .9 4.7.9 1.7 0 3.3-.3 4.7-.9 1.4-.6 2.6-1.5 3.6-2.6 1-1.1 1.8-2.4 2.3-3.8.5-1.4.7-2.9.7-4.4 0-1.5-.2-3-.7-4.4-.5-1.4-1.3-2.7-2.3-3.8-1-1.1-2.2-2-3.6-2.6zm-1.6 12.9c-.3.8-.7 1.5-1.3 2.1-.6.6-1.3 1-2.1 1.3-.8.3-1.7.5-2.6.5-.9 0-1.8-.2-2.6-.5-.8-.3-1.5-.7-2.1-1.3-.6-.6-1-1.3-1.3-2.1-.3-.8-.5-1.7-.5-2.6 0-.9.2-1.8.5-2.6.3-.8.7-1.5 1.3-2.1.6-.6 1.3-1 2.1-1.3.8-.3 1.7-.5 2.6-.5.9 0 1.8.2 2.6.5.8.3 1.5.7 2.1 1.3.6.6 1 1.3 1.3 2.1.3.8.5 1.7.5 2.6 0 .9-.2 1.8-.5 2.6z"/>
              </svg>
              <div>
                <p className="text-4xl font-bold text-white">80,000+</p>
                <p className="text-amber-300 text-lg">Active coders in Discord</p>
              </div>
            </div>
          </div>

          

        </div>
      </div>
    </div>
  );
};

export default DiscordSection;
