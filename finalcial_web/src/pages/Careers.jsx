import React from 'react';
import { FaBriefcase, FaUsers, FaLaptopCode, FaGlobeAmericas } from 'react-icons/fa';
import "../assets/scss/Careers.scss";
import Footer from '../header/Footer';
import Navbar from '../header/Navbar';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Activity, DollarSign, Heart, Umbrella, BookOpen, Dumbbell, Sprout, ChevronDown, ChevronUp, Briefcase, Clock, TrendingUp, Plane, Award } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const Careers = () => {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [expandedPosition, setExpandedPosition] = useState(null);
  const contentRefs = useRef([]);
  
  // Add refs for the accordion content elements
  useEffect(() => {
    contentRefs.current = Array(openPositions.length).fill().map((_, i) => contentRefs.current[i] || React.createRef());
  }, []);
  
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
    { name: "Competitive Salary", icon: <DollarSign size={24} /> },
    { name: "Health Insurance", icon: <Heart size={24} /> },
    { name: "Retirement Plan", icon: <Umbrella size={24} /> },
    { name: "Flexible Work", icon: <Clock size={24} /> },
    { name: "Career Growth", icon: <TrendingUp size={24} /> },
    { name: "Paid Time Off", icon: <Plane size={24} /> },
    { name: "Education Support", icon: <BookOpen size={24} /> },
    { name: "Wellness Programs", icon: <Activity size={24} /> }
  ];

  const openPositions = [
    {
      title: "Senior Financial Advisor",
      location: "New York, NY",
      type: "Full-time",
      description: "Looking for an experienced advisor to join our wealth management team to provide personalized financial guidance to high-net-worth clients.",
      requirements: [
        "Minimum 5 years of experience in financial advisory",
        "Series 7 and 66 licenses required",
        "CFP designation preferred",
        "Strong communication and relationship-building skills",
        "Experience with high-net-worth clients"
      ],
      responsibilities: [
        "Develop comprehensive financial plans for clients",
        "Provide expert investment advice and portfolio management",
        "Build and maintain strong client relationships",
        "Stay current on market trends and financial regulations",
        "Work collaboratively with other specialists to meet client needs"
      ]
    },
    {
      title: "Investment Analyst",
      location: "Chicago, IL",
      type: "Full-time",
      description: "Seeking a detail-oriented analyst to conduct research and provide recommendations on investment opportunities across various asset classes.",
      requirements: [
        "Bachelor's degree in Finance, Economics, or related field",
        "2+ years of experience in investment analysis",
        "CFA designation or pursuit preferred",
        "Strong analytical and quantitative skills",
        "Proficiency in financial modeling and analysis tools"
      ],
      responsibilities: [
        "Research and analyze investment opportunities",
        "Create detailed financial models and forecasts",
        "Prepare investment recommendations and reports",
        "Monitor market trends and economic indicators",
        "Support portfolio managers in investment decision-making"
      ]
    },
    {
      title: "Risk Management Specialist",
      location: "Boston, MA",
      type: "Full-time",
      description: "Join our risk team to develop and implement strategies that protect client assets while maximizing returns within appropriate risk parameters.",
      requirements: [
        "Bachelor's degree in Finance, Mathematics, or related field",
        "3+ years experience in risk management within financial services",
        "FRM certification preferred",
        "Strong analytical and problem-solving skills",
        "Experience with risk assessment tools and methodologies"
      ],
      responsibilities: [
        "Develop and implement risk management strategies",
        "Conduct risk assessments and stress testing",
        "Monitor portfolio risk metrics and ensure compliance",
        "Recommend portfolio adjustments to optimize risk-return profile",
        "Create risk reports for management and clients"
      ]
    },
    {
      title: "Client Relationship Manager",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build and maintain relationships with our valued clients, ensuring exceptional service and addressing their evolving financial needs.",
      requirements: [
        "Bachelor's degree in Business, Finance, or related field",
        "3+ years of client-facing experience in financial services",
        "Excellent interpersonal and communication skills",
        "Strong organizational and project management abilities",
        "Knowledge of financial products and services"
      ],
      responsibilities: [
        "Serve as the primary point of contact for assigned clients",
        "Understand and anticipate client needs and concerns",
        "Coordinate services across departments to benefit clients",
        "Conduct regular client reviews and satisfaction checks",
        "Identify opportunities for expanding client relationships"
      ]
    },
    {
      title: "Technology Solutions Developer",
      location: "Remote",
      type: "Full-time",
      description: "Help us create innovative financial technology solutions that enhance our client experience and streamline our internal processes.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of software development experience",
        "Proficiency in modern web development frameworks",
        "Experience with financial software or applications preferred",
        "Strong problem-solving and collaborative skills"
      ],
      responsibilities: [
        "Develop and maintain financial applications and tools",
        "Create user-friendly interfaces for clients and internal teams",
        "Collaborate with product managers to implement new features",
        "Ensure security and compliance of all technology solutions",
        "Stay current on emerging technologies and best practices"
      ]
    }
  ];

  const togglePosition = (index) => {
    if (expandedPosition === index) {
      setExpandedPosition(null);
    } else {
      setExpandedPosition(index);
    }
  };

  return (
    <>
      <Navbar />
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
          <div className="benefit-icon-wrapper">
            <div className="benefit-icon">
              {benefit.icon}
            </div>
          </div>
          <h3>{benefit.name}</h3>
        </div>
      ))}
    </div>

    <div className="stats-container" ref={ref}>
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-value text-white">
            {inView && <CountUp end={4.8} decimals={1} duration={2} />} / 5
          </div>
          <p className="stat-label">Employee Satisfaction</p>
        </div>

        <div className="stat-item">
          <div className="stat-value">
            {inView && <CountUp end={92} duration={2} />}%
          </div>
          <p className="stat-label">Annual Retention Rate</p>
        </div>

        <div className="stat-item">
          <div className="stat-value">
            {inView && <CountUp end={1000} duration={2} separator="," />}+
          </div>
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
                <div key={index} className="job-accordion">
                  <div 
                    className={`job-accordion-header ${expandedPosition === index ? 'active' : ''}`}
                    onClick={() => togglePosition(index)}
                  >
                    <div className="job-title-container">
                      <h3>{job.title}</h3>
                      <p className="job-location">{job.location}</p>
                    </div>
                    <div className="job-accordion-right">
                      <span className="job-type">{job.type}</span>
                      {expandedPosition === index ? 
                        <ChevronUp className="accordion-icon" size={20} /> : 
                        <ChevronDown className="accordion-icon" size={20} />
                      }
                    </div>
                  </div>
                  
                  <div 
                    className={`job-accordion-content ${expandedPosition === index ? 'active' : ''}`}
                    ref={el => contentRefs.current[index] = el}
                  >
                    <div className="job-description">
                      <p>{job.description}</p>
                    </div>
                    
                    <div className="job-details">
                      <div className="job-requirements">
                        <h4>Requirements</h4>
                        <ul>
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="job-responsibilities">
                        <h4>Responsibilities</h4>
                        <ul>
                          {job.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="job-apply">
                      <button className="apply-button">Apply Now</button>
                    </div>
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
           
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Careers;