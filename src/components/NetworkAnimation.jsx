import React from 'react';

const NetworkAnimation = () => {
  return (
    <svg 
      
      viewBox="0 0 400 300" 
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto  bg-gray-800/30 border-r-10 sm:w-10 md:w-[400px] rounded-lg"
    >
      <g className="animate-pulse">
        <circle cx="200" cy="150" r="20" fill="#F97316" />
        <circle cx="200" cy="150" r="24" stroke="#F97316" strokeWidth="2" fill="none" opacity="0.5">
          <animate attributeName="r" values="24;30;24" dur="3s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.5;0.2;0.5" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>

      <g>
        <line x1="200" y1="150" x2="80" y2="80" stroke="#F59E0B" strokeWidth="2" strokeDasharray="0 1000" opacity="0">
          <animate attributeName="stroke-dasharray" values="0 1000; 1000 0" dur="1.5s" begin="0.5s" fill="freeze" />
          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="0.5s" fill="freeze" />
        </line>
        <line x1="200" y1="150" x2="320" y2="80" stroke="#F59E0B" strokeWidth="2" strokeDasharray="0 1000" opacity="0">
          <animate attributeName="stroke-dasharray" values="0 1000; 1000 0" dur="1.5s" begin="1s" fill="freeze" />
          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="1s" fill="freeze" />
        </line>
        <line x1="200" y1="150" x2="100" y2="220" stroke="#F59E0B" strokeWidth="2" strokeDasharray="0 1000" opacity="0">
          <animate attributeName="stroke-dasharray" values="0 1000; 1000 0" dur="1.5s" begin="1.5s" fill="freeze" />
          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="1.5s" fill="freeze" />
        </line>
        <line x1="200" y1="150" x2="300" y2="220" stroke="#F59E0B" strokeWidth="2" strokeDasharray="0 1000" opacity="0">
          <animate attributeName="stroke-dasharray" values="0 1000; 1000 0" dur="1.5s" begin="2s" fill="freeze" />
          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="2s" fill="freeze" />
        </line>
        <line x1="200" y1="150" x2="50" y2="150" stroke="#F59E0B" strokeWidth="2" strokeDasharray="0 1000" opacity="0">
          <animate attributeName="stroke-dasharray" values="0 1000; 1000 0" dur="1.5s" begin="2.5s" fill="freeze" />
          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="2.5s" fill="freeze" />
        </line>
      </g>

      <g>
        <g opacity="0">
          <circle cx="80" cy="80" r="12" fill="#F59E0B" />
          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="2s" fill="freeze" />
        </g>
        <g opacity="0">
          <circle cx="320" cy="80" r="12" fill="#F59E0B" />
          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="2.5s" fill="freeze" />
        </g>
        <g opacity="0">
          <circle cx="100" cy="220" r="12" fill="#F59E0B" />
          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="3s" fill="freeze" />
        </g>
        <g opacity="0">
          <circle cx="300" cy="220" r="12" fill="#F59E0B" />
          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="3.5s" fill="freeze" />
        </g>
        <g opacity="0">
          <circle cx="50" cy="150" r="12" fill="#F59E0B" />
          <animate attributeName="opacity" values="0;1" dur="0.5s" begin="4s" fill="freeze" />
        </g>
      </g>

      <g>
        {[1, 2, 3, 4, 5].map((i) => (
          <circle 
            key={i}
            cx={[80, 320, 100, 300, 50][i-1]} 
            cy={[80, 80, 220, 220, 150][i-1]} 
            r="16" 
            stroke="#F59E0B" 
            strokeWidth="1" 
            fill="none" 
            opacity="0"
          >
            <animate attributeName="r" values="16;24;16" dur="3s" begin={`${3+i}s`} repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.5;0;0.5" dur="3s" begin={`${3+i}s`} repeatCount="indefinite" />
          </circle>
        ))}
      </g>
    </svg>
  );
};

export default NetworkAnimation;