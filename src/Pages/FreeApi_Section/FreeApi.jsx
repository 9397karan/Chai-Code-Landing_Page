import React from "react";
import "./FreeApi.css";

const FreeApi = () => {
  return (
    <div className="freeapi-container">
      <div className="content-wrapper">
        <div className="text-content">
          <h1 className="title-animate">FreeAPI - Open Source</h1>
          <h2 className="subtitle-animate">Unlock Your Potential with Our API Hub</h2>
          
          <p className="description-animate">
            Our API Hub is designed to streamline your learning experience in API handling across various programming languages.
            With this resource, you can effortlessly build and showcase your front-end portfolio in both web and mobile applications.
          </p>
          
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">⚡</span>
              <span>Rapid API integration</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">🌐</span>
              <span>Multi-language support</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">📊</span>
              <span>Real-world project ready</span>
            </div>
          </div>
          
          <a href="https://freeapi.app/" target="_blank" rel="noopener noreferrer" className="ct-button">
            Check FreeAPI Docs <span className="arrow">→</span>
          </a>
        </div>
        
        <div className="video-content">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/DxedlhTyR7Q"
              title="FreeAPI Demo Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="youtube-video"
            ></iframe>
            <p className="video-title">FreeAPI Demo Video</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeApi;