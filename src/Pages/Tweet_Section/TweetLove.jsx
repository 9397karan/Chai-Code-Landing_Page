import React, { useEffect } from 'react';
import './TweetLove.css';

const TweetLove = () => {
  // Tweet URLs you want to embed
  const tweetUrls = [
    "https://twitter.com/TwitterDev/status/1913662561045926011",
    "https://twitter.com/TwitterDev/status/1918049411642372556",
    "https://twitter.com/TwitterDev/status/1906393735203836076"
  ];

  useEffect(() => {

    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <div className="tweet-love-container">
   
      <div className="hero-section">
        <p className="hero-subtitle">Love that we get from our community</p>
        <h1 className="hero-title">Tweet Love</h1>
        <div className="gradient-bar"></div>
      </div>

   
      <div className="cards-container">
        {tweetUrls.map((url, index) => (
          <blockquote 
            key={index} 
            className="twitter-tweet" 
            data-theme="dark"
            style={{ maxWidth: "100%" }}
          >
            <a href={url}></a>
          </blockquote>
        ))}
      </div>

      <div className="cta-container">
        <a 
          href='https://courses.chaicode.com/learn/view-all?show=batch&type=17' 
          target='_blank' 
          rel="noopener noreferrer"
          className="cta-button"
        >
          Join Our Community
        </a>
      </div>
    </div>
  );
};

export default TweetLove;
