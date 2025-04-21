import React from 'react';
import './TweetLove.css';

const TweetLove = () => {
  const reviews = [
    {
      id: 1,
      username: '@CodeMaster42',
      handle: 'codemaster42',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: 'This course completely transformed my coding skills! The projects were challenging but so rewarding. #GameChanger',
      date: 'Mar 15',
      course: 'Advanced React Development',
      rating: '★★★★★'
    },
    {
      id: 2,
      username: 'DevDesigner',
      handle: 'devdesigner',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      content: 'Never thought I could learn so much in 8 weeks. The community support was incredible when I got stuck on complex concepts.',
      date: 'Apr 2',
      course: 'UX Engineering Bootcamp',
      rating: '★★★★☆'
    },
    {
      id: 3,
      username: 'PythonNewbie',
      handle: 'python_newb',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
      content: 'As a complete beginner, this was the perfect introduction. The instructors explain things so clearly!',
      date: 'Feb 28',
      course: 'Python Fundamentals',
      rating: '★★★★★'
    }
  ];

  return (
    <div className="tweet-love-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Student Voices</h1>
        <p className="hero-subtitle">Real experiences from our coding community</p>
        <div className="gradient-bar"></div>
      </div>


      <div className="cards-container">
        {reviews.map((review) => (
          <div key={review.id} className="twitter-card">

            <div className="card-glow"></div>
            
            <div className="card-header flex justify-between">
             <div className='flex'>
             <div className="user-avatar">
                <img src={review.avatar} alt={review.username} className="avatar" />
              </div>
              <div className="user-info">
                <span className="username">{review.username}</span>
                <span className="handle">@{review.handle}</span>
              </div>
             </div>
            <div>
            <img src="x_logo.png" alt="" width={50}/>
            </div>
            </div>
            
            <div className="card-content">
              <p>{review.content}</p>
              <div className="course-info">
                <span className="course-name">{review.course}</span>
                <div className="rating-badge">
                  {review.rating}
                </div>
              </div>
            </div>
            
            <div className="card-footer">
              <span className="date">{review.date}</span>
              <div className="engagement-stats">
                <span className="engagement-count">{Math.floor(Math.random() * 50) + 10}</span>
                <span className="engagement-label">Retweets</span>
              </div>
            </div>
          </div>
        ))}
        
      </div>
      <div className="flex justify-center mt-12 sm:mt-16 animate-[fadeIn_2s_ease-out]">
            <button className="px-8 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900">
            Join Cohorts Live Classes


            </button>
          </div>
    </div>
  );
};

export default TweetLove;