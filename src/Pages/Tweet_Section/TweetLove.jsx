import React from 'react';
import './TweetLove.css';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const TweetLove = () => {
  const tweetIds = [
    '1918049411642372556',
    '1913662561045926011',
    '1906393735203836076',
  ];

  return (
    <div className="tweet-love-container">
      <div className="hero-section">
        <p className="hero-subtitle">Love that we get from our community</p>
        <h1 className="hero-title">Tweet Love</h1>
        <div className="gradient-bar"></div>
      </div>

      <div className="cards-container">
        {tweetIds.slice(0, 3).map((tweetId) => (
          <div key={tweetId} className="twitter-card">
            <TwitterTweetEmbed tweetId={tweetId} options={{ theme: 'dark', dnt: true }}/>
          </div>
        ))}
      </div>

      <div className="cta-container">
        <a
          href="https://courses.chaicode.com/learn/view-all?show=batch&type=17"
          target="_blank"
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
