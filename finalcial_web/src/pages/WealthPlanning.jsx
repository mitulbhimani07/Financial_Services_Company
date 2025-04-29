import React from 'react';
import Navbar from '../header/Navbar';
import Footer from '../header/Footer';
import { RiPieChart2Line, RiMoneyDollarCircleLine, RiShieldCheckLine } from "react-icons/ri";
import { FaChartLine, FaHandshake, FaUserTie } from "react-icons/fa";
import "../assets/scss/WealthPlanning.scss";

export default function WealthPlanning() {
  const services = [
    {
      icon: <RiPieChart2Line size={40} />,
      title: "Investment Planning",
      description: "Strategic investment solutions tailored to your financial goals",
      color: "blue"
    },
    {
      icon: <RiMoneyDollarCircleLine size={40} />,
      title: "Retirement Planning",
      description: "Comprehensive retirement planning for a secure future",
      color: "green"
    },
    {
      icon: <RiShieldCheckLine size={40} />,
      title: "Risk Management",
      description: "Expert risk assessment and management strategies",
      color: "purple"
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Tax Planning",
      description: "Efficient tax planning to maximize your returns",
      color: "orange"
    },
    {
      icon: <FaHandshake size={40} />,
      title: "Estate Planning",
      description: "Professional estate planning and wealth transfer strategies",
      color: "cyan"
    },
    {
      icon: <FaUserTie size={40} />,
      title: "Business Succession",
      description: "Strategic planning for business succession and continuity",
      color: "amber"
    }
  ];

  return (
    <div className="wealth-planning-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <h1>Wealth Planning</h1>
          <p>Strategic financial planning to secure your future and achieve your goals</p>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <div className="container">
          <h2>Our Wealth Planning Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className={`service-card ${service.color}`}>
                <div className="icon-container">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <button className="learn-more-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="process-section">
        <div className="container">
          <h2>Our Planning Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Initial Consultation</h3>
              <p>We begin with a comprehensive discussion of your financial goals and current situation</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Analysis & Strategy</h3>
              <p>Our experts analyze your needs and develop a personalized wealth planning strategy</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Implementation</h3>
              <p>We implement the agreed-upon strategy with careful attention to detail</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Regular Review</h3>
              <p>Continuous monitoring and adjustment of your plan to ensure optimal results</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <h2>Ready to Start Your Wealth Planning Journey?</h2>
          <p>Contact our experts today for a personalized consultation</p>
          <button className="contact-btn">Schedule Consultation</button>
        </div>
      </div>

      <Footer />
    </div>
  );
}