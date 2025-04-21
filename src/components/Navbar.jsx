import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItem = [
    {
      name: 'Cohorts',
      link: 'https://courses.chaicode.com/learn/view-all?show=batch&type=17',
    },
    {
      name: 'Udemy',
      link: 'https://www.udemy.com/course/web-dev-master/?couponCode=NVDIN35#main-content-anchor',
    },
    {
      name: 'Docs',
      link: 'https://docs.chaicode.com/',
    },
    {
      name: 'Review',
      link: 'https://courses.chaicode.com/learn/view-all?show=batch&type=17',
    },
  ];

  return (
    <div className='p-4'>
      <nav className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 py-3 rounded-xl bg-neutral-900 bg-opacity-60 border border-gray-700 backdrop-blur-md shadow-lg flex justify-between items-center'>

        <div className='flex items-center gap-3'>
          <img src="/chai-white.png" alt="Chai Logo" className='w-10 h-10 sm:w-12 sm:h-12' />
        </div>

        <ul className='hidden md:flex gap-8 text-gray-200 font-medium text-lg'>
          {navItem.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.link}
                className='cursor-pointer hover:text-orange-400 transition duration-300'
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div className='hidden md:block'>
          <button className='px-5 py-2 bg-orange-500 text-white font-semibold rounded-full shadow hover:bg-orange-400 transition duration-300'>
            Login
          </button>
        </div>

        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='text-gray-200'>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-full z-50 bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`w-[80%] max-w-xs h-full bg-neutral-900 border-l border-gray-700 shadow-xl p-6 flex flex-col justify-between fixed top-0 right-0 transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className='space-y-6'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <img src="/chai-white.png" alt="Chai Logo" className='w-10 h-10' />
                <span className='text-orange-400 text-xl font-bold'>ChaiCode</span>
              </div>
              <button onClick={() => setIsOpen(false)} className='text-gray-400 hover:text-white'>
                <X size={28} />
              </button>
            </div>

            <nav className='flex flex-col gap-4 mt-4'>
              {navItem.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  className='text-gray-200 text-lg font-medium cursor-pointer hover:text-orange-400 transition'
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <div className='mt-auto'>
            <button className='w-full py-2 bg-orange-500 text-white font-semibold rounded-full shadow hover:bg-orange-400 transition duration-300'>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
