import React from 'react'
import { Navbar } from '../../components/Navbar'
import './WelcomePage.css'
import TweetLove from '../Tweet_Section/TweetLove'
import Company from '../Company_section/Company'
import Cohort from '../Cohorts_Section/Cohort'
import UdemyCourse from '../Udemy_Section/UdemyCourse'
import KeyBenefits from '../KeyBenefits_Section/KeyBenefits'

export const WelcomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-gradient-to-r from-orange-900/15 via-transparent to-amber-900/15 animate-[spin_30s_linear_infinite]"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[150%] h-[150%] bg-gradient-to-r from-orange-800/9 via-transparent to-amber-800/9 animate-[spin_35s_linear_infinite_reverse]"></div>
        
        {/* Floating particles */}
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-orange-200/10 animate-float"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 20 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <Navbar />

        <div className="overflow-hidden flex justify-center">
          <h2 
            className="text-center mt-12 text-sm font-medium tracking-wider animate-[slideUp_1s_ease-out] border border-orange-500/30 rounded-full py-1 px-4 inline-block"
            style={{ color: "#FF7E0D" }}
          >
            <span className="inline-block">
              TRUSTED BY 1.5 MILLION CODERS
            </span>
            <i className="fa fa-circle text-orange-glow blink px-3"></i>
          </h2>
        </div>

        <div className="mt-8 sm:mt-12 overflow-hidden">
          <div className="transform transition-transform duration-500 hover:-translate-y-1">
            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-amber-400 to-yellow-500 animate-[slideUp_1.2s_ease-out]">
              <span className="inline-block">Consistency and Community</span>
              <br className="hidden sm:block" />
              <span className="inline-block mb-5">Learning for coding courses.</span>
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-12 sm:mt-16 gap-8 lg:gap-12">
          <div className="w-full max-w-4xl bg-orange-900/10 rounded-xl backdrop-blur-lg border border-orange-500/30 p-6 sm:p-8 text-center animate-[fadeIn_1.5s_ease-out] shadow-lg hover:shadow-orange-500/20 transition-all duration-300 relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600/10 to-amber-500/10 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed sm:leading-relaxed text-white/90 relative z-10">
              Content is everywhere. We provide a learning experience that is unmatched.
              <br className="hidden sm:block" />
              <span className="mt-3 inline-flex flex-wrap justify-center gap-x-2 gap-y-1">
                {['Bounties', 'Peer Learning', 'Code Reviews', 'Virtual Hostel', 
                  'Alumni Network', 'Doubt Sessions', 'Group Projects'].map((item, i) => (
                  <span 
                    key={i}
                    className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs sm:text-sm font-medium hover:shadow hover:shadow-orange-400/30 transition-all duration-200 hover:-translate-y-0.5"
                  >
                    {item}
                  </span>
                ))}
              </span>
            </p>
          </div>

          <div className="flex justify-center mt-5 sm:mt-5 animate-[fadeIn_2s_ease-out]">
            <button className="px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-orange-600 to-amber-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-black">
              Join the Community
            </button>
          </div>

          <div className="w-full max-w-4xl aspect-video group animate-[fadeIn_1.8s_ease-out]">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:shadow-orange-500/30">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/yG8JMlldoCE"
                title="Welcome Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <TweetLove/>
      <Company/>
      <Cohort/>
      <div className="relative w-full gradientBar">
        <div className="h-0.5 w-full bg-gradient-to-r from-orange-600 to-amber-600 opacity-30 rounded-full"></div>
      </div>
      <UdemyCourse/>
      <div className="relative w-full gradientBar">
        <div className="h-0.5 w-full bg-gradient-to-r from-orange-600 to-amber-600 opacity-30 rounded-full"></div>
      </div>
      <KeyBenefits/>
    </div>
  )
}