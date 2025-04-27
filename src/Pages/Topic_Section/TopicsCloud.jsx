import React from 'react';

const TopicsCloud = () => {
  const topics = [
    { name: 'Docker', link: 'https://www.youtube.com/watch?v=rr9cI4u1_88' },
    { name: 'MCP Server', link: 'https://www.youtube.com/watch?v=dZyQNy3-HjU' },
    
    { name: 'Python', link: 'https://www.youtube.com/watch?v=Ca5DLSDfPec&list=PLu71SKxNbfoBsMugTFALhdLlZ5VOqCg2s' },
    { name: 'React Native', link: 'https://www.youtube.com/watch?v=kGtEax1WQFg&list=PLRAV69dS1uWSjBBJ-egNNOd4mdblt1P4c' },
    { name: 'Django', link: 'https://www.youtube.com/watch?v=j6szNSzw4BU&list=PLu71SKxNbfoDOf-6vAcKmazT92uLnWAgy' },
    { name: 'NextJS', link: 'https://www.youtube.com/watch?v=OgS1ZWZItno&list=PLu71SKxNbfoBAaWGtn9GA2PTw0HO0tXzq' },
    { name: 'Node.js', link: 'https://www.youtube.com/watch?v=EH3vGeqeIAo&list=PLu71SKxNbfoBGh_8p_NS-ZAh6v7HhYqHW' },
    { name: 'React', link: 'https://www.youtube.com/watch?v=vz1RlUyrc3w&list=PLu71SKxNbfoDqgPchmvIsL4hTnJIrtige' },
    { name: 'TypeScript', link: 'https://www.youtube.com/watch?v=j89BvWz8Eag&list=PLRAV69dS1uWRPSfKzwZsIm-Axxq-LxqhW' }
  ];

  return (
    <div className=" bg-black py-16 px-4 sm:px-3 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] bg-gradient-to-r from-orange-900/15 via-transparent to-amber-900/15 animate-[spin_30s_linear_infinite]"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-[150%] h-[150%] bg-gradient-to-r from-orange-800/9 via-transparent to-amber-800/9 animate-[spin_35s_linear_infinite_reverse]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-500 mb-4">
            Topics Cloud
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our collection of videos and courses on these popular topics
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-5 sm:gap-3 ">
          {topics.map((topic, index) => (
            <a
              key={index}
              href={topic.link}
              target="_blank"
              
              className="px-3 py-3 bg-gradient-to-br from-orange-900/30 to-amber-900/20 border border-orange-500/30 rounded-xl backdrop-blur-sm hover:border-orange-400 hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center min-w-[180px]"
            >
              <span className="text-lg font-medium text-amber-100">{topic.name}</span>
              <svg className="w-5 h-5 ml-2 text-amber-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopicsCloud;