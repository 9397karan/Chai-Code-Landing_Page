import React from "react";
import "./AppFeature.css";

const AppFeature = () => {
  return (
    <div className="app-feature">
      <div className="feature-header">
        <div className="logo-pulse">
          <h1>{`<  ChaiCode  />`}</h1>
          <div className="logo-dots">
            <span className="dot dot-1"></span>
            <span className="dot dot-2"></span>
            <span className="dot dot-3"></span>
          </div>
        </div>
      </div>

      <div className="feature-content">

        <div className="phone-mockup">
          <div className="phone-screen">
            <div className="app-header">
              <h2>ChaiCode</h2>
              <div className="app-dots">···</div>
            </div>
            
            <div className="app-courses">
              <div className="app-course active">
                <h3>Trending</h3>
                <p>Read Native Masterclass</p>
                <div className="course-meta">
                  <span className="rating">4.8 ⭐</span>
                  <span className="duration">2.5h</span>
                </div>
              </div>
              
              <div className="app-course">
                <h3>FORMULAR</h3>
                <p>Full Stack JavaScript</p>
                <div className="course-meta">
                  <span className="rating">3.0 ⭐</span>
                  <span className="duration">6h</span>
                </div>
              </div>
              
              <div className="app-course">
                <h3>NEW</h3>
                <p>AI with JavaScript</p>
                <div className="course-meta">
                  <span className="rating">3.0 ⭐</span>
                  <span className="duration">4h</span>
                </div>
              </div>
              
             
            </div>
          </div>
        </div>

   
        <div className="cta-content">
          <h2>Learn on the go</h2>
          <p>Take your coding journey anywhere with the ChaiCode mobile app. Access courses, join live sessions, and connect with the community - all from your pocket.</p>
          
          <ul className="cta-features">
            <li>
              <div className="feature-icon"></div>
              Offline course access
            </li>
            <li>
              <div className="feature-icon"></div>
              Live session notifications
            </li>
            <li>
              <div className="feature-icon"></div>
              Revision while commuting
            </li>
          </ul>

          <div className="cta-buttons">
            <a href="https://apps.apple.com/in/app/chaicode/id6504993143" target="_blank" className="cta-btn cta-apple">
              <span>Download on the</span>
              <span>App Store</span>
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.chaicode.courses&pcampaignid=web_share" target="_blank" className="cta-btn cta-google">
              <span>Get it on</span>
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFeature;