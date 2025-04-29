import React from 'react';
import './TweetLove.css';

const TweetLove = () => {
  const reviews = [
    {
      id: 1,
      username: "Hitesh Choudhary",
      handle: "hiteshdotcom",
      avatar: "./hitesh-sir.jpg",
      content: "Just crossed 1.5 million subscribers on YouTube! This wouldn't have been possible without your constant support and love. More exciting content coming your way!",
      date: "May 15",
      course: "YouTube Journey",
      rating: "★★★★★"
    },
    {
      id: 2,
      username: "Hitesh Choudhary",
      handle: "hiteshdotcom",
      avatar: "./hitesh-sir.jpg",
            content: "The best way to learn coding is by building projects. Stop watching tutorials and start building. That's where real learning happens!",
      date: "Apr 22",
      course: "Coding Advice",
      rating: "★★★★★"
    },
    {
      id: 3,
      username: "Hitesh Choudhary",
      handle: "hiteshdotcom",
      avatar: "./hitesh-sir.jpg",
      content: "Just launched a new course on Next.js! This covers everything from fundamentals to advanced concepts with multiple real-world projects. Check it out!",
      date: "Mar 10",
      course: "Next.js Course",
      rating: "★★★★★"
    }
  ];

  return (
    <div className="tweet-love-container">
      {/* Hero Section */}
      <div className="hero-section">
        <p className="hero-subtitle">Love that we get from our community

</p>
        <h1 className="hero-title">Tweet Love</h1>
        <div className="gradient-bar"></div>
      </div>

      {/* Tweets Grid */}
      <div className="cards-container">
        {reviews.map((review) => (
          <div key={review.id} className="twitter-card">
            <div className="card-glow"></div>
            
            <div className="card-header">
              <div className="user-avatar">
                <img src={review.avatar} alt={review.username} className="avatar" />
              </div>
              <div className="user-info">
                <span className="username">{review.username}</span>
                <span className="handle">@{review.handle}</span>
              </div>
              <svg className="twitter-icon" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
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
                <span className="engagement-count">{Math.floor(Math.random() * 500) + 100}</span>
                <span className="engagement-label">Likes</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="cta-container">
        <button className="cta-button">
          Join Our Community
        </button>
      </div>
    </div>
  );
};

export default TweetLove;