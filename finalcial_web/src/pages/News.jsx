import React, { useState } from 'react';
import { 
  FaCalendarAlt, 
  FaUser, 
  FaSearch, 
  FaChartLine,
  FaNewspaper,
  FaLightbulb,
  FaHandshake,
  FaUsers,
  FaPiggyBank,
  FaShieldAlt,
  FaTag
} from 'react-icons/fa';
import "../assets/scss/News.scss";
import Navbar from '../header/Navbar';
import Footer from '../header/Footer';

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'company', name: 'Company Updates' },
    { id: 'market', name: 'Market Insights' },
    { id: 'finance', name: 'Financial Planning' },
    { id: 'wealth', name: 'Wealth Management' },
  ];
  
  const newsArticles = [
    {
      id: 1,
      title: "Q2 Financial Market Outlook: Navigating Uncertainty",
      category: "market",
      date: "April 5, 2025",
      author: "Jonathan Winters",
      image: "/api/placeholder/600/400",
      excerpt: "Our latest market analysis suggests cautious optimism for the second quarter, with strategic opportunities in emerging markets and technology sectors.",
      featured: true,
      tags: ["Market Analysis", "Investment Strategy", "Global Economy"]
    },
    {
      id: 2,
      title: "New Wealth Management Platform Launched",
      category: "company",
      date: "March 28, 2025",
      author: "Sarah Mitchell",
      image: "/api/placeholder/600/400",
      excerpt: "We're excited to announce our new digital wealth management platform that combines AI-driven insights with personalized advisory services.",
      featured: true,
      tags: ["Product Launch", "Digital Innovation", "Wealth Tech"]
    },
    {
      id: 3,
      title: "Understanding the Impact of Recent Fed Policy Changes",
      category: "market",
      date: "March 20, 2025",
      author: "Michael Chen",
      image: "/api/placeholder/600/400",
      excerpt: "The Federal Reserve's recent policy shifts signal a cautious approach to economic recovery. Here's what this means for your investments.",
      featured: false,
      tags: ["Federal Reserve", "Interest Rates", "Economic Policy"]
    },
    {
      id: 4,
      title: "Tax-Efficient Retirement Planning Strategies",
      category: "finance",
      date: "March 15, 2025",
      author: "Elizabeth Taylor",
      image: "/api/placeholder/600/400",
      excerpt: "Explore advanced tax strategies to optimize your retirement savings and minimize tax liability during your golden years.",
      featured: false,
      tags: ["Retirement Planning", "Tax Strategy", "Financial Planning"]
    },
    {
      id: 5,
      title: "Expansion of Private Banking Services in Asia",
      category: "company",
      date: "March 10, 2025",
      author: "Robert Wong",
      image: "/api/placeholder/600/400",
      excerpt: "We're proud to announce the expansion of our private banking services in major Asian markets, with new offices in Singapore and Hong Kong.",
      featured: false,
      tags: ["Global Expansion", "Private Banking", "Asian Markets"]
    },
    {
      id: 6,
      title: "ESG Investing: Beyond the Basics",
      category: "wealth",
      date: "March 5, 2025",
      author: "Amanda Johnson",
      image: "/api/placeholder/600/400",
      excerpt: "A comprehensive guide to advanced ESG investment strategies and how they can enhance your portfolio performance while supporting sustainability.",
      featured: false,
      tags: ["ESG", "Sustainable Investing", "Portfolio Management"]
    },
    {
      id: 7,
      title: "Cybersecurity in Financial Services: Protecting Your Assets",
      category: "finance",
      date: "February 28, 2025",
      author: "David Stevens",
      image: "/api/placeholder/600/400",
      excerpt: "Learn about the latest cybersecurity threats facing financial services and how we're working to protect your sensitive financial information.",
      featured: false,
      tags: ["Cybersecurity", "Risk Management", "Digital Banking"]
    },
    {
      id: 8,
      title: "Annual Client Appreciation Event Announced",
      category: "company",
      date: "February 20, 2025",
      author: "Jennifer Lopez",
      image: "/api/placeholder/600/400",
      excerpt: "Save the date for our annual client appreciation gala, featuring keynote speakers and exclusive networking opportunities.",
      featured: false,
      tags: ["Events", "Networking", "Client Relations"]
    }
  ];
  
  const featuredArticles = newsArticles.filter(article => article.featured);
  const filteredArticles = activeCategory === 'all' 
    ? newsArticles.filter(article => !article.featured) 
    : newsArticles.filter(article => article.category === activeCategory && !article.featured);
  
  return (
   <>
    <Navbar/>

    <div className="news-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>
              News & <span>Insights</span>
            </h1>
            <p>
              Stay informed with the latest financial market insights, company updates, and expert perspectives.
            </p>
            
            {/* Search Bar */}
            <div className="search-bar">
              <input 
                type="text" 
                placeholder="Search news and articles..." 
              />
              <button>
                <FaSearch className="icon" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="categories-section">
        <div className="container">
          <div className="categories-wrapper">
            {categories.map((category) => (
              <button 
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`category-button ${activeCategory === category.id ? 'active' : ''}`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="featured-section">
        <div className="container">
          <h2>Featured Articles</h2>
          
          <div className="featured-grid">
            {featuredArticles.map((article) => (
              <div key={article.id} className="article-card">
                <img src={article.image} alt={article.title} className="article-image" />
                <div className="article-content">
                  <div className="article-meta">
                    <span className="category-badge">
                      {categories.find(cat => cat.id === article.category)?.name}
                    </span>
                    <span className="date">
                      <FaCalendarAlt className="icon" /> {article.date}
                    </span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="author">
                    <FaUser className="icon" />
                    <span>{article.author}</span>
                  </div>
                  <div className="tags">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="article-footer">
                  <a href="#" className="read-more">
                    Read Full Article
                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All News Articles */}
      <section className="all-news-section">
        <div className="container">
          <h2>
            {activeCategory === 'all' ? 'Latest News & Articles' : `${categories.find(cat => cat.id === activeCategory)?.name}`}
          </h2>
          
          <div className="articles-grid">
            {filteredArticles.map((article) => (
              <div key={article.id} className="article-card">
                <img src={article.image} alt={article.title} className="article-image" />
                <div className="article-content">
                  <div className="article-meta">
                    <span className="category-badge">
                      {categories.find(cat => cat.id === article.category)?.name}
                    </span>
                    <span className="date">
                      <FaCalendarAlt className="icon" /> {article.date}
                    </span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.excerpt}</p>
                  <div className="author">
                    <FaUser className="icon" />
                    <span>{article.author}</span>
                  </div>
                </div>
                <div className="article-footer">
                  <a href="#" className="read-more">
                    Read More
                    <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="load-more">
            <button>
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      
      {/* Market Updates */}
      <section className="market-updates-section">
        <div className="container">
          <div className="section-header">
            <h2>Market Updates</h2>
            <p>
              Stay informed with the latest financial market trends and analysis from our expert team.
            </p>
          </div>
          
          <div className="market-card">
            <div className="market-grid">
              <div className="market-item">
                <div className="market-header">
                  <h3>S&P 500</h3>
                  <span className="positive">+1.2%</span>
                </div>
                <p>Strong performance in technology and healthcare sectors driving market gains.</p>
                <div className="updated">Updated: April 10, 2025</div>
              </div>
              
              <div className="market-item">
                <div className="market-header">
                  <h3>Bond Yields</h3>
                  <span className="negative">-0.5%</span>
                </div>
                <p>Treasury yields decline as Federal Reserve signals continued accommodative policy.</p>
                <div className="updated">Updated: April 9, 2025</div>
              </div>
              
              <div className="market-item">
                <div className="market-header">
                  <h3>Global Markets</h3>
                  <span className="positive">+0.8%</span>
                </div>
                <p>Asian and European markets show resilience despite ongoing supply chain challenges.</p>
                <div className="updated">Updated: April 11, 2025</div>
              </div>
            </div>
            
            <div className="market-footer">
              <a href="#">
                View Detailed Market Analysis
                <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-grid">
            <div className="newsletter-content">
              <h2>Stay Informed with Our Newsletter</h2>
              <p>
                Subscribe to receive our latest financial insights, market updates, and exclusive content directly to your inbox.
              </p>
              
              <div className="benefits">
                <div className="benefit">
                  <div className="icon-wrapper">
                    <FaChartLine className="icon" />
                  </div>
                  <span>Market Updates</span>
                </div>
                <div className="benefit">
                  <div className="icon-wrapper">
                    <FaNewspaper className="icon" />
                  </div>
                  <span>Weekly Digest</span>
                </div>
                <div className="benefit">
                  <div className="icon-wrapper">
                    <FaLightbulb className="icon" />
                  </div>
                  <span>Expert Insights</span>
                </div>
              </div>
              
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                />
                <button>
                  Subscribe Now
                </button>
              </form>
              <p className="privacy-note">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            
            <div className="webinar-card">
              <h3 className="webinar-header">
                <FaHandshake className="icon" />
                Upcoming Webinar
              </h3>
              <img src="/api/placeholder/500/300" alt="Webinar thumbnail" className="webinar-image" />
              <h4>Navigating Market Volatility: Strategies for Uncertain Times</h4>
              <p>Join our panel of experts as they discuss practical approaches to managing investments during periods of market volatility.</p>
              <div className="webinar-meta">
                <span className="webinar-date">April 18, 2025 • 2:00 PM EST</span>
                <span className="webinar-tag">Free Registration</span>
              </div>
              <button className="register-btn">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Topics */}
      <section className="topics-section">
        <div className="container">
          <div className="section-header">
            <h2>Popular Topics</h2>
            <p>
              Explore our most frequently discussed financial topics and resources.
            </p>
          </div>
          
          <div className="topics-grid">
            <a href="#" className="topic-card">
              <div className="icon-wrapper">
                <FaChartLine className="icon" />
              </div>
              <h3>Investment Strategies</h3>
              <p>12 Articles</p>
            </a>
            
            <a href="#" className="topic-card">
              <div className="icon-wrapper">
                <FaPiggyBank className="icon" />
              </div>
              <h3>Retirement Planning</h3>
              <p>8 Articles</p>
            </a>
            
            <a href="#" className="topic-card">
              <div className="icon-wrapper">
                <FaShieldAlt className="icon" />
              </div>
              <h3>Risk Management</h3>
              <p>7 Articles</p>
            </a>
            
            <a href="#" className="topic-card">
              <div className="icon-wrapper">
                <FaHandshake className="icon" />
              </div>
              <h3>Private Banking</h3>
              <p>9 Articles</p>
            </a>
          </div>
          
          <div className="topics-footer">
            <a href="#">
              View All Topics
              <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Have Questions About Your Financial Future?</h2>
          <p>
            Our team of financial experts is ready to help you navigate your financial journey.
          </p>
          <div className="cta-buttons">
            <button className="primary-btn">
              Contact an Advisor
            </button>
            <button className="secondary-btn">
              Browse FAQ
            </button>
          </div>
        </div>
      </section>
    </div>

    <Footer/>
   </>
  );
};

export default NewsPage;