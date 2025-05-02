import React from "react";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaDiscord,
  FaGithub
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        
        <div>
          <div className="flex items-center gap-2 text-2xl font-semibold">
            <img src="/assets/chai-white.png" alt="logo" className="w-6 h-6" />
            <span className="text-white">
              Chai<span className="text-orange-500">Code</span>
            </span>
          </div>
          <p className="mt-2 text-sm text-gray-400">Home for programmers</p>
          <div className="flex items-center gap-4 mt-4 text-xl">
            <a 
              href="https://www.youtube.com/@chaiaurcode" 
              className="text-gray-400 hover:text-orange-500  transition-all  duration-500 transform hover:-translate-y-1"
            >
              <FaYoutube />
            </a>
            <a 
              href="https://www.instagram.com/hiteshchoudharyofficial/?hl=en" 
              className="text-gray-400 hover:text-orange-500 transition-all duration-500 transform hover:-translate-y-1"
            >
              <FaInstagram />
            </a>
            <a 
              href="https://github.com/hiteshchoudhary" 
              className="text-gray-400 hover:text-orange-500 transition-all duration-500 transform hover:-translate-y-1"
            >
              <FaGithub/>
            </a>
            <a 
              href="https://x.com/hiteshdotcom" 
              className="text-gray-400 hover:text-orange-500 transition-all duration-500 transform hover:-translate-y-1"
            >
              <FaTwitter />
            </a>
            <a 
              href="https://in.linkedin.com/in/hiteshchoudhary" 
              className="text-gray-400 hover:text-orange-500 transition-all duration-500 transform hover:-translate-y-1"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://discord.com/invite/WDrH3zuWFb" 
              className="text-gray-400 hover:text-orange-500 transition-all duration-500 transform hover:-translate-y-1"
            >
              <FaDiscord />
            </a>
          </div>
          <p className="mt-6 text-xs text-gray-500">
            © 2025 ChaiCode. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Products</h3>
          <ul className="space-y-2 text-sm">
            {['Courses', 'Cohort', 'Coding Hero', 'FreeAPI', 'Masterji'].map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-orange-500 transition-all duration-500 block hover:pl-2"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

     
        <div>
          <h3 className="font-semibold text-lg mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            {[{item:'Docs',link:"https://www.chaicode.com/docs/"}, {item:'Privacy Policy',link:"https://www.chaicode.com/privacy-policy"}, {item:'Terms of Service',link:"https://www.chaicode.com/terms-of-services"}, {item:'Pricing Policy',link:"https://www.chaicode.com/pricing-policy"}, {item:'Refund Policy',link:"https://www.chaicode.com/refund-policy"}].map((item) => (
              <li key={item}>
                <a 
                  href={item.link}
                  target="_blank"
                  className="text-gray-400 hover:text-orange-500 transition-all duration-500 block hover:pl-2"
                >
                  {item.item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-20">
        <div className="animate-float text-6xl md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-t from-orange-800 to-orange-400 opacity-20 tracking-wider">
          CHAICODE
        </div>
      </div>


      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;