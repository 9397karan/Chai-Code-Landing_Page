import React from "react";
import "./Cohorts.css";

const Cohort = () => {
    const cardsInfo = [
        {
            videoLink: "https://www.youtube.com/embed/Kjd-SWpe1do",
            title: "Full Stack Data Science 1.0",
            desc: "From Python basics to project deployment",
            start: "April 21,2025",
            duration: "6 Months",
            newPrice: "6999",
            oldPrice: "8999",
            off: "22",
            courseLink: "https://courses.chaicode.com/learn/batch/about?bundleId=227817",
          },
        {
          videoLink: "https://www.youtube.com/embed/VNb_LawBBWU",
          title: "GenAI with Python | Concept to deployment",
          desc: "Development side of AI application",
          start: "April 7, 2025",
          duration: "1-2 months",
          newPrice: "4999",
          oldPrice: "7999",
          off: "38",
          courseLink: "https://courses.chaicode.com/learn/batch/about?bundleId=227321",
        },
      
        {
          videoLink: "https://www.youtube.com/embed/oBLpqSHc3lA",
          title: "DevOps for developers 1.0",
          desc: "Perfect guide to get started with DevOps",
          start: "April 15, 2025",
          duration: "1-2 months",
          newPrice: "4999",
          oldPrice: "7999",
          off: "22",
          courseLink: "https://courses.chaicode.com/learn/batch/about?bundleId=227963",
        },
        {
          videoLink: "https://www.youtube.com/embed/yG8JMlldoCE",
          title: "Web Dev Cohort 1.0",
          desc: "Ultimate guide to build software on web",
          start: "January 11, 2025",
          duration: "6 months",
          newPrice: "6999",
          oldPrice: "8999",
          off: "22",
          courseLink: "https://courses.chaicode.com/learn/batch/about?bundleId=214297",
        },
      ];
    

  return (
    <div className="cohort-container">
      {/* Hero Section */}
      <div className="hero-section">
        <h1 className="hero-title">Cohorts</h1>
        <p className="hero-subtitle">Live training classes</p>
        <div className="gradient-bar"></div>
      </div>

      {/* Card section */}
      <div className="card-container">
        {cardsInfo.map((card, index) => (
          <div className="card" key={index}>
            <div className="flex items-center justify-end px-5 mt-1 bg-black">
            <i className="fa fa-circle text-red-glow blink px-3"></i>
                <p className="text-sm">Live</p>
            </div>
            <div className="video-container">
              <iframe
                src={card.videoLink}
                title={`${card.title} Welcome Video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="card-content">
              <h2 className="card-title">{card.title.slice(0,27)}..</h2>
              <p className="card-desc text-gray-200">{card.desc}</p>
              
              <div className="card-details">
                <div className="detail-item">
                  <svg className="icon" viewBox="0 0 24 24">
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span>Start {card.start}</span>
                </div>
                <div className="detail-item">
                  <svg className="icon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{card.duration}</span>
                </div>
              </div>

              <div className="price-section">
                <div className="price-container">
                  <span className="price-new">{card.newPrice} INR</span>
                  <span className="price-old">{card.oldPrice} INR</span>
                </div>
                <span className="discount">Save {card.off}%</span>
              </div>

              <a href={card.courseLink} className="button">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cohort;