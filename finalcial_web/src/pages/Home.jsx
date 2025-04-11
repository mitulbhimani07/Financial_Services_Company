import React from 'react';
import { FaChartLine, FaPiggyBank, FaShieldAlt, FaHandshake } from 'react-icons/fa';

// Import the SCSS file (you'll need to create this)
import '../assets/scss/Home.scss';

const Home = () => {
  const services = [
    {
      icon: <FaChartLine className="service-icon text-4xl mb-4 text-blue-600" />,
      title: "Wealth Management",
      description: "Comprehensive strategies tailored to your unique financial situation and goals."
    },
    {
      icon: <FaPiggyBank className="service-icon text-4xl mb-4 text-blue-600" />,
      title: "Investment Advisory",
      description: "Expert guidance to build and manage your investment portfolio."
    },
    {
      icon: <FaShieldAlt className="service-icon text-4xl mb-4 text-blue-600" />,
      title: "Risk Management",
      description: "Protect your assets with our sophisticated risk assessment tools."
    },
    {
      icon: <FaHandshake className="service-icon text-4xl mb-4 text-blue-600" />,
      title: "Private Banking",
      description: "Exclusive banking services for high-net-worth individuals."
    }
  ];

  const awards = [
    { name: "Best Wealth Management 2023", source: "Financial Times" },
    { name: "Top 10 Private Banks", source: "Global Finance" },
    { name: "AAA Credit Rating", source: "Standard & Poor" },
    { name: "Client Service Excellence", source: "WealthBriefing" }
  ];

  return (
    <div className="home-container text-gray-800">
      {/* Hero Section */}
      <section className="hero-section relative bg-blue-900 text-white">
        <div className="hero-overlay absolute inset-0 bg-black/30 mx-auto"></div>
        <div className="container hero-content mx-auto px-6 py-24 md:py-32 relative z-10 max-w-screen-xl flex">
          <div className="hero-text max-w-2xl mx-auto md:mx-0">
            <h1 className="hero-title text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Your Trusted Partner in <span className="hero-highlight text-orange-400">Financial Growth</span>
            </h1>
            <p className="hero-subtitle text-xl md:text-2xl mb-8">
              Personalized wealth management solutions to help you achieve your financial goals with confidence and clarity.
            </p>
            <div className="hero-buttons flex flex-col sm:flex-row gap-4">
              <button className="btn-primary bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 transform hover:-translate-y-1">
                Get Started Today
              </button>
              <button className="btn-secondary bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-section py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="section-header text-center mb-12">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Financial Services</h2>
            <p className="section-subtitle text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored solutions designed to meet your unique financial needs and aspirations.
            </p>
          </div>
          
          <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="service-card bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-2"
              >
                {service.icon}
                <h3 className="service-title text-xl font-semibold mb-3">{service.title}</h3>
                <p className="service-description text-gray-600">{service.description}</p>
                <a href="#" className="service-link mt-4 inline-block text-blue-600 font-medium hover:underline">
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="trust-section py-16 bg-white">
        <div className="container mx-auto px-6 max-w-screen-xl">
          <div className="section-header text-center mb-12">
            <h2 className="section-title text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted By Clients Worldwide</h2>
            <p className="section-subtitle text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by leading industry authorities.
            </p>
          </div>
          
          <div className="awards-grid grid grid-cols-2 md:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="award-item text-center p-4">
                <div className="award-icon w-20 h-20 mx-auto mb-4 rounded-full bg-blue-100 text-blue-600 text-3xl flex items-center justify-center">
                  🏆
                </div>
                <h3 className="award-title font-semibold mb-1">{award.name}</h3>
                <p className="award-source text-sm text-gray-500">{award.source}</p>
              </div>
            ))}
          </div>
          
          <div className="stats-container mt-16 bg-blue-800 text-white rounded-xl p-8">
            <div className="stats-grid grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="stat-item">
                <div className="stat-value text-4xl md:text-5xl font-bold mb-2">25+</div>
                <p className="stat-label text-lg">Years of Experience</p>
              </div>
              <div className="stat-item">
                <div className="stat-value text-4xl md:text-5xl font-bold mb-2">$50B+</div>
                <p className="stat-label text-lg">Assets Under Management</p>
              </div>
              <div className="stat-item">
                <div className="stat-value text-4xl md:text-5xl font-bold mb-2">98%</div>
                <p className="stat-label text-lg">Client Retention Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center max-w-screen-xl">
          <h2 className="cta-title text-3xl md:text-4xl font-bold mb-6">Ready to Take Control of Your Financial Future?</h2>
          <p className="cta-subtitle text-xl mb-8 max-w-2xl mx-auto">
            Schedule a consultation with one of our financial experts today.
          </p>
          <div className="cta-buttons flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 transform hover:-translate-y-1">
              Book a Consultation
            </button>
            <button className="btn-secondary bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition duration-300">
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;