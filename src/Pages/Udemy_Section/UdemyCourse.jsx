import React from "react";
import "./UdemyCourse.css";

const UdemyCourse = () => {
    return (
    <>
    <div className="mt-20">
        <h1 className="text-5xl font-bold hero-title">Our Courses on Udemy</h1>
        <p className="hero-subtitle">Join thousands of students who have transformed their careers with our comprehensive courses</p>
    </div>
    <div className="course-container">
         
      <div className="course-content">
        <h1>Complete web development course</h1>
        <p className="course-description">
          Only web development course that you will need. Covers HTML, CSS, Tailwind, Node, React,
          MongoDB, Prisma, Deployment etc
        </p>
        
        <div className="rating-section">
          <span className="rating">4.7</span>
          <span className="badge">Top Rated</span>
        </div>
        
        <div className="price-container">
          <h2 className="discounted-price">₹399</h2>
          <p className="original-price">₹3,099</p>
          <p className="discount-badge">87% off</p>
        </div>
        
        <a href="https://www.udemy.com/course/web-dev-master/?couponCode=CHAIFRIDAY80" target="_blank" rel="noopener noreferrer" className="cta-button z-10">Check Udemy Courses</a>
      </div>
      
      <div className="video-container1">
        <div className="video-placeholder1">
          <div className="video-overlay1">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/KZ31wDjYleI"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="youtube-iframe"
              ></iframe>
          </div>
        </div>
      </div>
    </div>
              </>
  );
};

export default UdemyCourse;