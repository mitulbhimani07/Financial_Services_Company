import React from 'react';
import Navbar from '../header/Navbar';
import Footer from '../header/Footer';
import { RiVipCrownLine, RiShieldCheckLine, RiUserHeartLine } from "react-icons/ri";
import { FaHandshake, FaChartLine, FaUserTie } from "react-icons/fa";
import "../assets/scss/PrivateBanking.scss";

export default function PrivateBanking() {
  const benefits = [
    {
      icon: <RiVipCrownLine size={40} />,
      title: "Exclusive Services",
      description: "Access to premium banking services and personalized financial solutions",
      color: "gold"
    },
    {
      icon: <RiShieldCheckLine size={40} />,
      title: "Enhanced Security",
      description: "Advanced security measures to protect your wealth and transactions",
      color: "blue"
    },
    {
      icon: <RiUserHeartLine size={40} />,
      title: "Dedicated Relationship Manager",
      description: "Personal relationship manager to handle all your banking needs",
      color: "purple"
    },
    {
      icon: <FaHandshake size={40} />,
      title: "Priority Service",
      description: "Fast-track processing and priority access to banking services",
      color: "green"
    },
    {
      icon: <FaChartLine size={40} />,
      title: "Investment Opportunities",
      description: "Exclusive access to premium investment opportunities",
      color: "orange"
    },
    {
      icon: <FaUserTie size={40} />,
      title: "Wealth Management",
      description: "Comprehensive wealth management and financial planning services",
      color: "cyan"
    }
  ];

  return (
    <div className="private-banking-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <h1>Private Banking</h1>
          <p>Experience the pinnacle of personalized banking services tailored to your unique needs</p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="benefits-section">
        <div className="container">
          <h2>Exclusive Benefits</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className={`benefit-card ${benefit.color}`}>
                <div className="icon-container">
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <div className="features-content">
            <div className="feature-text">
              <h2>Why Choose Our Private Banking?</h2>
              <ul>
                <li>Personalized financial solutions</li>
                <li>Exclusive investment opportunities</li>
                <li>Dedicated relationship manager</li>
                <li>Priority banking services</li>
                <li>Enhanced security measures</li>
                <li>Comprehensive wealth management</li>
              </ul>
              <button className="contact-btn">Contact Us</button>
            </div>
            <div className="feature-image">
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Private Banking" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 