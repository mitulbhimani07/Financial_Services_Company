import React, { useState, useEffect } from 'react'
import { 
  FaChartLine, 
  FaBusinessTime, 
  FaHandshake, 
  FaShieldAlt,
  FaArrowRight,
  FaPhoneAlt,
  FaFileDownload,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaCheck,
  FaChevronRight
} from 'react-icons/fa';
import NBFCNavbar from './NBFCNavbar';
import {  FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';



function MainNBFC() {
  const [scrolled, setScrolled] = useState(false);
  const [calculatorValues, setCalculatorValues] = useState({
    capital: 1000000,
    term: "24 Months"
  });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Color scheme - Orange palette instead of teal-indigo
  const colors = {
    primary: 'from-orange-600 to-orange-400',
    secondary: 'from-orange-400 to-amber-500',
    accent: 'from-amber-500 to-orange-600',
    light: 'bg-amber-50',
    dark: 'bg-orange-900'
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotate testimonials automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleCapitalChange = (e) => {
    setCalculatorValues({...calculatorValues, capital: parseInt(e.target.value)});
  };

  const handleTermChange = (e) => {
    setCalculatorValues({...calculatorValues, term: e.target.value});
  };

  const testimonials = [
    {
      quote: "The team at NBFC Solutions provided exactly what we needed to expand our manufacturing capacity. Their understanding of our industry and flexibility in structuring the deal was exceptional.",
      name: "Sarah Thompson",
      title: "CEO, Thompson Manufacturing"
    },
    {
      quote: "Working with NBFC Solutions transformed our ability to scale operations. Their team took the time to understand our business model and created a financing solution that aligned perfectly with our growth strategy.",
      name: "James Wilson",
      title: "CFO, Tech Innovations Inc."
    },
    {
      quote: "The speed and efficiency of service was remarkable. NBFC Solutions helped us secure funding for our latest project in half the time we expected, allowing us to capitalize on a market opportunity.",
      name: "Elena Rodriguez",
      title: "Operations Director, Global Trade Co."
    }
  ];

  return (
    <>
      <div className="font-sans bg-gray-50 overflow-x-hidden">
        {/* Navigation with transparent to solid effect */}
        <div className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
          <NBFCNavbar />
        </div>
        
        {/* Hero Section - Enhanced Gradient Background with Animation */}
        <section className={`bg-gradient-to-br ${colors.primary} text-white pt-32 pb-24 px-6 relative overflow-hidden`}>
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-pattern-dots opacity-10"></div>
            <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-40 right-20 w-20 h-20 bg-white rounded-full opacity-10 animate-pulse" style={{animationDelay: '1.5s'}}></div>
            <div className="absolute bottom-40 left-10 w-32 h-32 bg-white rounded-full opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center relative z-10">
            <div className="lg:w-3/5">
              <div className="inline-block px-4 py-1 bg-orange-900 bg-opacity-30 rounded-full text-amber-200 font-medium text-sm mb-6 animate-fadeIn">
                <span className="flex items-center">
                  <span className="w-2 h-2 bg-amber-400 rounded-full mr-2 animate-ping"></span>
                  Trusted by 500+ Enterprises
                </span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-200">Financial Future</span>
              </h1>
              <p className="text-xl mb-8 opacity-90 max-w-2xl">
                Unlock your company's potential with customized financial solutions designed for modern enterprises. We empower businesses to reach new heights.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="group bg-white text-orange-800 px-8 py-4 rounded-md font-bold hover:bg-orange-50 transition-all duration-300 flex items-center hover:shadow-lg transform hover:translate-x-1">
                  Get Started
                  <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button className="relative overflow-hidden bg-transparent border-2 border-white px-8 py-4 rounded-md font-bold transition duration-300 group">
                  <span className="relative z-10">Explore Solutions</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </button>
              </div>
            </div>
            <div className="lg:w-2/5 mt-8 lg:mt-0">
              <div className="bg-white rounded-2xl shadow-2xl p-8 text-gray-800 transform hover:-translate-y-2 transition-all duration-500 hover:shadow-orange-200">
                <h2 className="text-2xl font-bold mb-6 text-orange-800">Enterprise Financing Calculator</h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <label className="block font-medium">Capital Required</label>
                      <span className="text-orange-600 font-semibold">${(calculatorValues.capital).toLocaleString()}</span>
                    </div>
                    <div className="relative">
                      <input 
                        type="range" 
                        min="100000" 
                        max="10000000" 
                        step="100000"
                        value={calculatorValues.capital}
                        onChange={handleCapitalChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <div className="absolute -bottom-1 left-0 h-4 w-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full shadow-md" style={{left: `${(calculatorValues.capital - 100000) / 9900000 * 100}%`}}></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>$100K</span>
                      <span>$10M</span>
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 font-medium">Financing Term</label>
                    <select 
                      className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      value={calculatorValues.term}
                      onChange={handleTermChange}
                    >
                      <option>12 Months</option>
                      <option>24 Months</option>
                      <option>36 Months</option>
                      <option>48 Months</option>
                      <option>60 Months</option>
                    </select>
                  </div>
                  <button className={`w-full bg-gradient-to-r ${colors.primary} text-white py-4 rounded-lg font-medium transition duration-300 shadow-md relative overflow-hidden group`}>
                    <span className="relative z-10">Calculate ROI</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section with Animated Cards */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 bg-white rounded-2xl shadow-xl overflow-hidden transform -mt-20 relative z-20">
              {[
                { number: "$2B+", label: "Funding Deployed", icon: "💰" },
                { number: "500+", label: "Businesses Served", icon: "🏢" },
                { number: "15+", label: "Years Experience", icon: "⏱️" },
                { number: "98%", label: "Client Satisfaction", icon: "🌟" }
              ].map((stat, index) => (
                <div key={index} className="p-8 text-center group hover:bg-gradient-to-br from-amber-50 to-orange-50 transition-all duration-500 cursor-pointer">
                  <div className="mb-3 text-2xl group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                  <p className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 group-hover:from-orange-700 group-hover:to-amber-600 transition-all duration-300">{stat.number}</p>
                  <p className="text-gray-600 mt-2 group-hover:text-gray-800 transition-colors duration-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section with Advanced Card Hover Effects */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">Our Advantages</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Why Partner With Our NBFC</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">We combine financial expertise with innovative technology to deliver superior results.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <FaChartLine className="text-4xl" />,
                  title: "Strategic Growth",
                  desc: "Tailored financing solutions aligned with your business objectives and growth trajectory."
                },
                {
                  icon: <FaBusinessTime className="text-4xl" />,
                  title: "Speed & Efficiency",
                  desc: "Decisions within 72 hours with streamlined approval processes and minimal paperwork."
                },
                {
                  icon: <FaHandshake className="text-4xl" />,
                  title: "Relationship Focused",
                  desc: "Dedicated relationship managers who understand your industry and business needs."
                },
                {
                  icon: <FaShieldAlt className="text-4xl" />,
                  title: "Regulatory Excellence",
                  desc: "Full compliance with all regulatory requirements and transparent business practices."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-500 group cursor-pointer hover:shadow-2xl relative overflow-hidden">
                  {/* Card background effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-amber-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 opacity-90"></div>
                  
                  {/* Icon container */}
                  <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="bg-orange-50 p-4 rounded-xl text-orange-600 group-hover:bg-white group-hover:text-orange-600 transition-all duration-500 mb-5">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-white transition-colors duration-500">{feature.title}</h3>
                    <p className="text-gray-600 group-hover:text-white transition-colors duration-500">{feature.desc}</p>
                    
                    {/* Hidden details that appear on hover */}
                    <div className="mt-6 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                      <ul className="text-left space-y-2">
                        {[1, 2, 3].map((item) => (
                          <li key={item} className="flex items-center text-white">
                            <FaCheck className="mr-2 text-amber-300" /> 
                            <span>Benefit point {item}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="mt-4 bg-white text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-50 transition-colors duration-300 flex items-center mx-auto">
                        Learn More <FaChevronRight className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Showcase with Floating Elements and Interactive Cards */}
        <section id="products" className="py-20 px-6 bg-gradient-to-b from-white to-orange-50 relative overflow-hidden">
          {/* Decorative floating elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-1/4 w-16 h-16 rounded-xl bg-gradient-to-br from-orange-200 to-amber-200 opacity-50 animate-float"></div>
            <div className="absolute top-60 right-1/4 w-24 h-24 rounded-full bg-gradient-to-br from-amber-200 to-orange-200 opacity-40 animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-1/3 w-20 h-20 rounded-lg bg-gradient-to-br from-amber-200 to-orange-200 opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">Financial Solutions</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Enterprise Financial Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Comprehensive funding options designed for different business needs.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {[
                {
                  title: "Corporate Working Capital",
                  amount: "Up to $10M",
                  term: "12-36 months",
                  rate: "Competitive",
                  desc: "Optimize cash flow and fund day-to-day operations with flexible working capital solutions.",
                  color: "from-orange-600 to-amber-500",
                  benefits: ["Flexible repayment schedules", "No hidden fees", "Quick approval process"]
                },
                {
                  title: "Asset-Based Financing",
                  amount: "Up to $25M",
                  term: "24-84 months",
                  rate: "Secured",
                  desc: "Leverage your company's assets to secure favorable terms for major acquisitions and expansions.",
                  color: "from-amber-500 to-orange-600",
                  benefits: ["Higher borrowing capacity", "Lower interest rates", "Customized loan structures"]
                },
                {
                  title: "Project & Infrastructure",
                  amount: "Up to $50M",
                  term: "36-120 months",
                  rate: "Structured",
                  desc: "Long-term financing solutions for infrastructure development and major capital projects.",
                  color: "from-amber-600 to-orange-600",
                  benefits: ["Extended repayment terms", "Project-specific structures", "Milestone-based disbursements"]
                }
              ].map((product, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white group cursor-pointer transform hover:-translate-y-2">
                  <div className={`bg-gradient-to-r ${product.color} p-8 text-white relative overflow-hidden h-40 flex items-center`}>
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full transform translate-x-10 -translate-y-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-500"></div>
                    <h3 className="text-2xl font-bold relative z-10">{product.title}</h3>
                  </div>
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-orange-50 p-4 rounded-lg group-hover:bg-orange-100 transition-colors duration-300">
                        <p className="text-sm text-gray-500">Financing up to</p>
                        <p className="text-lg font-bold text-orange-700">{product.amount}</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg group-hover:bg-orange-100 transition-colors duration-300">
                        <p className="text-sm text-gray-500">Term length</p>
                        <p className="text-lg font-bold text-orange-700">{product.term}</p>
                      </div>
                    </div>
                    <p className="mb-6 text-gray-600">{product.desc}</p>
                    
                    {/* Benefits list with animation */}
                    <div className="mb-6">
                      <div className="space-y-2">
                        {product.benefits.map((benefit, i) => (
                          <div 
                            key={i} 
                            className="flex items-center opacity-70 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" 
                            style={{transitionDelay: `${i * 100}ms`}}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.color} mr-2`}></div>
                            <span className="text-gray-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <button className={`w-full bg-gradient-to-r ${product.color} text-white py-3 rounded-lg font-medium transition duration-300 flex items-center justify-center relative overflow-hidden`}>
                      <span className="relative z-10">Request Details</span>
                      <FaArrowRight className="ml-2 relative z-10 group-hover:ml-3 transition-all duration-300" />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Testimonial Section with Carousel Effect */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">What Our Clients Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Don't just take our word for it - hear from the businesses we've helped.</p>
            </div>
            
            <div className="relative pt-10 pb-20">
              {/* Testimonial cards */}
              <div className="relative h-96">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === activeTestimonial 
                        ? 'opacity-100 transform translate-x-0 scale-100 z-20' 
                        : index === (activeTestimonial + 1) % 3 
                          ? 'opacity-0 transform translate-x-full scale-95 z-10' 
                          : 'opacity-0 transform -translate-x-full scale-95 z-10'
                    }`}
                  >
                    <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 h-full">
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-5xl text-orange-600 mb-6">"</div>
                      <p className="text-xl text-gray-700 mb-10 italic">{testimonial.quote}</p>
                      <div className="flex items-center">
                        <div className={`w-16 h-16 bg-gradient-to-r ${colors.primary} rounded-full mr-4 flex items-center justify-center text-white text-xl font-bold`}>
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-xl text-gray-800">{testimonial.name}</p>
                          <p className="text-gray-600">{testimonial.title}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Indicator dots */}
              <div className="flex justify-center space-x-3 mt-8">
                {testimonials.map((_, index) => (
                  <button 
                    key={index} 
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? 'bg-orange-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section with Interactive Elements */}
        <section className={`py-16 px-6 bg-gradient-to-r ${colors.primary} text-white relative overflow-hidden`}>
          {/* Animated background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-pattern-dots"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-20 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
            <div className="mb-8 md:mb-0 text-center md:text-left">
              <span className="inline-block px-4 py-1 bg-white bg-opacity-20 rounded-full text-amber-200 font-medium text-sm mb-4">Limited Time Offer</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to accelerate your business growth?</h2>
              <p className="text-amber-200">Schedule a consultation with our financial experts today and receive a complimentary financial analysis.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-orange-700 px-6 py-3 rounded-lg font-bold hover:bg-orange-50 transition-all duration-300 flex items-center justify-center hover:shadow-lg">
                <FaPhoneAlt className="mr-2" />
                Schedule Call
              </button>
              <button className="relative overflow-hidden border-2 border-white px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center group">
                <span className="relative z-10">Download Brochure</span>
                <FaFileDownload className="ml-2 relative z-10" />
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="absolute inset-0 flex items-center justify-center text-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Download Brochure</span>
              </button>
            </div>
          </div>
        </section>

        {/* Footer - Modern and Clean */}
        <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">NBFC Solutions</h3>
            <p className="text-gray-400 mb-6">Empowering enterprises with innovative financial solutions since 2010.</p>
            <div className="flex gap-4">
              {[
                { icon: <FaFacebookF />, name: 'Facebook' },
                { icon: <FaTwitter />, name: 'Twitter' },
                { icon: <FaLinkedinIn />, name: 'LinkedIn' },
                { icon: <FaInstagram />, name: 'Instagram' }
              ].map((social, index) => (
                <a key={index} href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-orange-600 transition duration-300">
                  <span className="sr-only">{social.name}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-orange-300 transition duration-300 flex items-center group"><FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100" /> Working Capital</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-300 transition duration-300 flex items-center group"><FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100" /> Asset Financing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-300 transition duration-300 flex items-center group"><FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100" /> Project Finance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-300 transition duration-300 flex items-center group"><FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100" /> Trade Finance</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-orange-300 transition duration-300 flex items-center group"><FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100" /> About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-300 transition duration-300 flex items-center group"><FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100" /> Our Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-300 transition duration-300 flex items-center group"><FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100" /> Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-300 transition duration-300 flex items-center group"><FaArrowRight className="mr-2 text-xs opacity-0 group-hover:opacity-100" /> News & Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3" />
                <span className="text-gray-400">123 Finance Street, Business District, Mumbai 400001, India</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-orange-500 mr-3" />
                <span className="text-gray-400">+91 22 1234 5678</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-orange-500 mr-3" />
                <span className="text-gray-400">info@nbfcsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} NBFC Solutions. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-gray-400 hover:text-orange-300 transition duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-300 transition duration-300">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-300 transition duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
      </div>
    </>
  )
}

export default MainNBFC