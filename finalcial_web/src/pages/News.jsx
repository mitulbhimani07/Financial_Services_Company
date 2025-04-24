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
import Navbar from '../header/Navbar';
import Footer from '../header/Footer';
import '../assets/scss/News.scss'

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
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
      image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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

    <div className="text-gray-800">
      {/* Hero Section */}
      <section className="relative text-white">
        <div className="absolute inset-0 bg-primary bg-opacity-30"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6 leading-tight md:text-5xl lg:text-6xl">
              News & <span className="text-accent">Insights</span>
            </h1>
            <p className="text-xl mb-8 md:text-2xl">
              Stay informed with the latest financial market insights, company updates, and expert perspectives.
            </p>
            
            
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 md:text-4xl">Featured Articles</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {featuredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
                <img src={article.image} alt={article.title} className="w-full h-64 object-cover" />
                <div className="p-6 flex-grow">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="news-sec  px-3 py-1 rounded-full font-medium">
                      {categories.find(cat => cat.id === article.category)?.name}
                    </span>
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-1" /> {article.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <div className="flex items-center text-sm mb-4">
                    <FaUser className="text-primary mr-2" />
                    <span>{article.author}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="px-6 pb-6">
                  <a href="#" className="text-primary font-medium inline-flex items-center transition-all hover:text-blue-800">
                    Read Full Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Categories */}
      <section className="py-8 bg-white border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button 
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === category.id 
                    ? 'bg-primary text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-blue-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All News Articles */}
      <section className="py-16 Articles-sec ">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold  mb-8 md:text-4xl">
            {activeCategory === 'all' ? 'Latest News & Articles' : `${categories.find(cat => cat.id === activeCategory)?.name}`}
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {filteredArticles.map((article) => (
              <div key={article.id} className="News rounded-xl shadow-md overflow-hidden flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
                <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
                <div className="p-6 flex-grow">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <span className="news-sec  px-3 py-1 rounded-full font-medium">
                      {categories.find(cat => cat.id === article.category)?.name}
                    </span>
                    <span className="flex items-center">
                      <FaCalendarAlt className="mr-1" /> {article.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{article.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
                  <div className="flex items-center text-sm">
                    <FaUser className="text-primary mr-2" />
                    <span>{article.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="bg-primary text-white font-semibold py-3 px-8 rounded-lg transition-all hover:bg-blue-700">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      
      {/* Market Updates */}
      <section className="py-16 market">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold  mb-4 md:text-4xl">Market Updates</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Stay informed with the latest financial market trends and analysis from our expert team.
            </p>
          </div>
          
          <div className="bg-primary  rounded-xl p-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="market-sec p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">S&P 500</h3>
                  <span className="text-success">+1.2%</span>
                </div>
                <p className=" mb-4">Strong performance in technology and healthcare sectors driving market gains.</p>
                <div className="text-xs ">Updated: April 10, 2025</div>
              </div>
              
              <div className="market-sec p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Bond Yields</h3>
                  <span className="text-danger">-0.5%</span>
                </div>
                <p className=" mb-4">Treasury yields decline as Federal Reserve signals continued accommodative policy.</p>
                <div className="text-xs ">Updated: April 9, 2025</div>
              </div>
              
              <div className="market-sec p-6 rounded-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Global Markets</h3>
                  <span className="text-success">+0.8%</span>
                </div>
                <p className=" mb-4">Asian and European markets show resilience despite ongoing supply chain challenges.</p>
                <div className="text-xs ">Updated: April 11, 2025</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 Newsletter-sec">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div className="newsletter-content">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 md:text-4xl">Stay Informed with Our Newsletter</h2>
              <p className="text-lg text-gray-600 mb-6">
                Subscribe to receive our latest financial insights, market updates, and exclusive content directly to your inbox.
              </p>
              
              <div className="flex flex-wrap items-center gap-6 mb-8">
                <div className="flex items-center gap-3">
                  <div className=" p-2 rounded-full">
                    <FaChartLine className="text-primary" />
                  </div>
                  <span className="text-gray-700">Market Updates</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className=" p-2 rounded-full">
                    <FaNewspaper className="text-primary" />
                  </div>
                  <span className="text-gray-700">Weekly Digest</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className=" p-2 rounded-full">
                    <FaLightbulb className="text-primary" />
                  </div>
                  <span className="text-gray-700">Expert Insights</span>
                </div>
              </div>
              
              <p className="mt-4 text-sm text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
            
            <div className="upcoming-sec p-8 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold  mb-6 flex items-center">
                <FaHandshake className="text-primary mr-3" />
                Upcoming Webinar
              </h3>
              <img src="https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Webinar thumbnail" className="w-full rounded-lg mb-6" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Navigating Market Volatility: Strategies for Uncertain Times</h4>
              <p className="text-gray-600 mb-4">Join our panel of experts as they discuss practical approaches to managing investments during periods of market volatility.</p>
              <div className="flex justify-between items-center text-sm mb-6">
                <span className="text-gray-500">April 18, 2025 • 2:00 PM EST</span>
                <span className="bg-accent text-white px-3 py-1 rounded-full">Free Registration</span>
              </div>
              <button className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg transition-all hover:bg-blue-700">
                Register Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>

    <Footer/>
   </>
  );
};

export default NewsPage;