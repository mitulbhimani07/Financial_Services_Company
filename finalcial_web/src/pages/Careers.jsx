import React from 'react';
import { FaBriefcase, FaUsers, FaLaptopCode, FaGlobeAmericas } from 'react-icons/fa';
import "../assets/scss/Careers.scss"; 
import Footer from '../header/Footer';
import Navbar from '../header/Navbar';

const Careers = () => {
  const cultureValues = [
    {
      icon: <FaBriefcase />,
      title: "Excellence",
      description: "We set the highest standards for ourselves and our work, always striving to exceed expectations."
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and diverse perspectives to create innovative solutions."
    },
    {
      icon: <FaLaptopCode />,
      title: "Innovation",
      description: "We continuously seek new ideas and approaches to transform the financial industry."
    },
    {
      icon: <FaGlobeAmericas />,
      title: "Integrity",
      description: "We operate with honesty, transparency, and the highest ethical standards in all we do."
    }
  ];

  const benefits = [
    { name: "Competitive Salary", emoji: "💰" },
    { name: "Health Insurance", emoji: "🏥" },
    { name: "Retirement Plan", emoji: "🏦" },
    { name: "Flexible Work", emoji: "🕰️" },
    { name: "Career Growth", emoji: "📈" },
    { name: "Paid Time Off", emoji: "✈️" },
    { name: "Education Support", emoji: "🎓" },
    { name: "Wellness Programs", emoji: "🧘" }
  ];

  const openPositions = [
    {
      title: "Senior Financial Advisor",
      location: "New York, NY",
      type: "Full-time",
      description: "Looking for an experienced advisor to join our wealth management team to provide personalized financial guidance to high-net-worth clients."
    },
    {
      title: "Investment Analyst",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Seeking a detail-oriented analyst to conduct research and provide recommendations on investment opportunities across various asset classes."
    },
    {
      title: "Risk Management Specialist",
      location: "Boston, MA",
      type: "Full-time",
      description: "Join our risk team to develop and implement strategies that protect client assets while maximizing returns within appropriate risk parameters."
    },
    {
      title: "Client Relationship Manager",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build and maintain relationships with our valued clients, ensuring exceptional service and addressing their evolving financial needs."
    },
    {
      title: "Technology Solutions Developer",
      location: "Remote",
      type: "Full-time",
      description: "Help us create innovative financial technology solutions that enhance our client experience and streamline our internal processes."
    }
  ];

  return (
    <>

    <Navbar/>
      <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>
              Build Your Career with a <span>Financial Leader</span>
            </h1>
            <p>
              Join our team of dedicated professionals who are passionate about helping clients achieve financial success.
            </p>
            <div className="hero-buttons">
              <button className="primary-button">
                View Open Positions
              </button>
              <button className="secondary-button">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Culture Section */}
      <section className="culture-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Company Culture</h2>
            <p>
              We foster an environment where innovation, collaboration, and excellence thrive. Our values guide everything we do.
            </p>
          </div>
          
          <div className="culture-values-grid">
            {cultureValues.map((value, index) => (
              <div key={index} className="culture-value-card">
                <div className="icon-container">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
                <a href="#" className="learn-more-link">
                  Learn more <span>→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2>Why Work With Us</h2>
            <p>
              We offer competitive compensation and benefits that recognize your contributions and support your wellbeing.
            </p>
          </div>
          
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="emoji-container">
                  <span className="benefit-emoji">{benefit.emoji}</span>
                </div>
                <h3>{benefit.name}</h3>
              </div>
            ))}
          </div>
          
          <div className="stats-container">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">4.8/5</div>
                <p className="stat-label">Employee Satisfaction</p>
              </div>
              <div className="stat-item">
                <div className="stat-value">92%</div>
                <p className="stat-label">Annual Retention Rate</p>
              </div>
              <div className="stat-item">
                <div className="stat-value">1000+</div>
                <p className="stat-label">Global Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="positions-section">
        <div className="container">
          <div className="section-header">
            <h2>Open Positions</h2>
            <p>
              Explore opportunities to join our team and make an impact in the financial world.
            </p>
          </div>
          
          <div className="positions-list">
            {openPositions.map((job, index) => (
              <div key={index} className="job-card">
                <div className="job-content">
                  <div className="job-header">
                    <div className="job-title-container">
                      <h3>{job.title}</h3>
                      <p>{job.location}</p>
                    </div>
                    <span className="job-type">{job.type}</span>
                  </div>
                  <p className="job-description">{job.description}</p>
                  <a href="#" className="apply-button">Apply Now</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Join Our Team?</h2>
          <p>
            Discover a rewarding career with opportunities for growth, learning, and making a real difference in our clients' financial lives.
          </p>
          <div className="cta-buttons">
            <button className="cta-primary-button">
              Apply Today
            </button>
            <button className="cta-secondary-button">
              Contact Recruiting
            </button>
          </div>
        </div>
      </section>
    </div>

    <Footer/>
    </>
  );
};

export default Careers;