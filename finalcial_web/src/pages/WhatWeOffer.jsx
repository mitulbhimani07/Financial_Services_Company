import React from 'react';
import Navbar from '../header/Navbar';
import Footer from '../header/Footer';
import { RiBankFill, RiMoneyDollarCircleLine, RiCalculatorLine, RiBriefcaseLine } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa";
import "../assets/scss/WhatWeOffer.scss";

export default function WhatWeOffer() {
  const services = [
    {
      icon: <RiBankFill size={40} />,
      title: "Personal Banking",
      description: "Comprehensive banking solutions tailored to your personal needs",
      color: "blue"
    },
    {
      icon: <RiMoneyDollarCircleLine size={40} />,
      title: "Investment Solutions",
      description: "Strategic investment options for long-term wealth creation",
      color: "green"
    },
    {
      icon: <RiCalculatorLine size={40} />,
      title: "Financial Planning",
      description: "Expert guidance for your financial future",
      color: "purple"
    },
    {
      icon: <RiBriefcaseLine size={40} />,
      title: "Business Banking",
      description: "Specialized banking services for businesses of all sizes",
      color: "orange"
    },
    {
      icon: <FaAddressCard size={40} />,
      title: "Digital Banking",
      description: "Modern banking solutions at your fingertips",
      color: "cyan"
    },
    {
      icon: <FaCalculator size={40} />,
      title: "Loan Services",
      description: "Flexible loan options with competitive rates",
      color: "amber"
    }
  ];

  const features = [
    {
      title: "Expert Guidance",
      description: "Our team of financial experts provides personalized advice and solutions."
    },
    {
      title: "Secure Transactions",
      description: "State-of-the-art security measures to protect your financial information."
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support to address your queries and concerns."
    }
  ];

  return (
    <div className="what-we-offer-page">
      <Navbar />
      
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <h1>What We Offer</h1>
          <p>Discover our comprehensive range of financial services designed to meet your needs</p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-section">
        <div className="container">
          <h2 className="text-center text-primary text-3xl mb-12">Our Services</h2>
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

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}