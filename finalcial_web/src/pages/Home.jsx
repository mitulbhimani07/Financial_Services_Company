import React, { useState, useEffect } from 'react';
import '../assets/scss/Home.scss';
import { FaChartLine, FaPiggyBank, FaShieldAlt, FaHandshake, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BsBank2, BsFileEarmarkText, BsBuilding } from 'react-icons/bs';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import Footer from '../header/Footer';
import Navbar from '../header/Navbar';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedService, setSelectedService] = useState(null);
  const [animationActive, setAnimationActive] = useState(true);
  
  const chartData = {
    labels: ['Wealth Mgmt', 'Investments', 'Risk', 'Banking', 'Retirement'],
    datasets: [{
      label: 'Service Distribution',
      data: [10, 20, 30, 40, 50],
      backgroundColor: [
        'rgba(0, 35, 102, 0.7)',
        'rgba(0, 102, 204, 0.7)',
        'rgba(255, 107, 0, 0.7)',
        'rgba(40, 167, 69, 0.7)',
        'rgba(220, 53, 69, 0.7)'
      ],
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.5)'
    }]
  };

  const services = [
    {
      icon: <FaChartLine className="text-4xl mb-4 text-blue" />,
      title: "Wealth Management",
      description: "Comprehensive strategies tailored to your unique financial situation and goals."
    },
    {
      icon: <FaPiggyBank className="text-4xl mb-4 text-blue" />,
      title: "Investment Advisory",
      description: "Expert guidance to build and manage your investment portfolio."
    },
    {
      icon: <FaShieldAlt className="text-4xl mb-4 text-blue" />,
      title: "Risk Management",
      description: "Protect your assets with our sophisticated risk assessment tools."
    },
    {
      icon: <FaHandshake className="text-4xl mb-4 text-blue" />,
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

  // Enhanced Financial services for the slider with background images
  const financialServices = [
    {
      id: "microfinance",
      title: "Microfinance Solutions",
      icon: <BsBank2 className="text-5xl text-orange-500" />,
      shortDescription: "Empowering small entrepreneurs and individuals with accessible financial solutions.",
      pitch: "Transform your business dreams into reality with our accessible funding options.",
      stats: [
        { value: "5000+", label: "Entrepreneurs" },
        { value: "$25M+", label: "Disbursed" },
        { value: "97%", label: "Repayment" }
      ],
      testimonial: {
        quote: "The microfinance program gave me the capital I needed when traditional banks wouldn't consider my application.",
        author: "Sarah Johnson, Retail Business Owner"
      },
      fullDescription: "Our microfinance services provide small loans, savings opportunities, and financial education to underserved communities. We focus on creating sustainable pathways to economic empowerment through responsible lending practices.",
      features: [
        "Small business loans starting from $500",
        "Group lending programs with peer support",
        "Financial literacy workshops",
        "Flexible repayment schedules",
        "No collateral requirements for qualifying applicants"
      ],
      benefits: [
        "Access to capital for those excluded from traditional banking",
        "Support for women entrepreneurs",
        "Community development focus",
        "Transparent fee structure with no hidden costs"
      ],
      ctaText: "Apply for Microfinance",
      ctaSecondary: "Learn More",
      backgroundImage: "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: "lending-license",
      title: "Lending License Services",
      icon: <BsFileEarmarkText className="text-5xl text-blue-600" />,
      shortDescription: "Regulatory compliance and licensing services for financial institutions.",
      pitch: "Navigate complex regulatory landscapes with confidence through our comprehensive licensing solutions.",
      stats: [
        { value: "100%", label: "Success Rate" },
        { value: "30+", label: "Jurisdictions" },
        { value: "45 Days", label: "Processing" }
      ],
      testimonial: {
        quote: "Their expertise cut our licensing timeline in half and saved us from costly regulatory pitfalls.",
        author: "Michael Chen, FinTech CEO"
      },
      fullDescription: "Our lending license consulting helps financial institutions navigate the complex regulatory landscape. We provide end-to-end assistance in obtaining and maintaining lending licenses across multiple jurisdictions.",
      features: [
        "Comprehensive regulatory compliance assessment",
        "License application preparation and submission",
        "Ongoing compliance monitoring",
        "Risk management framework development",
        "Regulatory audit preparation"
      ],
      benefits: [
        "Streamlined licensing process",
        "Reduced regulatory risk",
        "Expert guidance from former regulators",
        "Cross-jurisdictional expertise"
      ],
      ctaText: "Consult on Licensing",
      ctaSecondary: "Learn More",
      backgroundImage: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: "nbfc",
      title: "NBFC Solutions",
      icon: <BsBuilding className="text-5xl text-green-600" />,
      shortDescription: "Non-Banking Financial Company services for diverse financial needs.",
      pitch: "Access flexible capital solutions designed for businesses seeking alternatives to traditional banking.",
      stats: [
        { value: "$2.5B+", label: "Assets" },
        { value: "15 Yrs", label: "Experience" },
        { value: "24 Hrs", label: "Response" }
      ],
      testimonial: {
        quote: "Their NBFC services provided the flexible financing we needed to scale operations during our growth phase.",
        author: "Priya Sharma, Infrastructure Developer"
      },
      fullDescription: "Our NBFC services offer alternative financing solutions beyond traditional banking. We specialize in providing tailored lending products, investment opportunities, and financial services to meet diverse client needs.",
      features: [
        "Corporate lending solutions",
        "Equipment and asset financing",
        "Infrastructure project funding",
        "Working capital loans",
        "Specialized industry financing programs"
      ],
      benefits: [
        "Faster approval processes than traditional banks",
        "Flexible terms and structures",
        "Industry-specific expertise",
        "Competitive interest rates"
      ],
      ctaText: "Explore NBFC Services",
      ctaSecondary: "Learn More",
      backgroundImage: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  // Auto slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Animation reset on slide change
  useEffect(() => {
    setAnimationActive(false);
    const timeout = setTimeout(() => {
      setAnimationActive(true);
    }, 50);
    
    return () => clearTimeout(timeout);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === financialServices.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? financialServices.length - 1 : prev - 1));
  };

  const selectService = (service) => {
    setSelectedService(service);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToSlider = () => {
    setSelectedService(null);
  };

  return (
    <>
      <Navbar />
      <div className="text-dark overflow-hidden">
        {selectedService ? (
          // Service Detail View
          <section className="relative bg-blue-900 text-white">
            <div 
              className="absolute inset-0 bg-cover bg-center" 
              style={{ backgroundImage: `url(${selectedService.backgroundImage})` }}
            ></div>
            <div className="absolute inset-0 bg-black/60"></div>
            <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
              <button 
                onClick={backToSlider}
                className="mb-8 flex items-center text-white hover:text-orange-300 transition-colors animate-fade-in-up"
              >
                <FaArrowLeft className="mr-2" /> Back to Services
              </button>
              
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6 animate-fade-in-up">
                    <div className="mr-4">{selectedService.icon}</div>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                      {selectedService.title}
                    </h1>
                  </div>
                  <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-200">
                    {selectedService.fullDescription}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-400">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 transform hover:-translate-y-1 animate-pulse-subtle">
                      {selectedService.ctaText}
                    </button>
                    <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition duration-300">
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="lg:w-1/2 animate-fade-in-right">
                  <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                    <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
                    <ul className="space-y-3 mb-6">
                      {selectedService.features.map((feature, index) => (
                        <li key={index} className="flex items-start animate-fade-in-up" style={{ animationDelay: `${0.1 + index * 0.1}s` }}>
                          <span className="text-orange-400 mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h3 className="text-2xl font-semibold mb-4">Benefits</h3>
                    <ul className="space-y-3">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start animate-fade-in-up" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                          <span className="text-orange-400 mr-2">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          // Main Slider View - Fixed to prevent horizontal scroll
          <section className="relative h-[75vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
            {/* Slider content with background images */}
            <div 
              className="absolute inset-0 flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {financialServices.map((service, index) => (
                <div 
                  key={index} 
                  className="min-w-full h-full relative flex-shrink-0"
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
                    style={{ backgroundImage: `url(${service.backgroundImage})` }}
                  ></div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 md:px-6">
                      <div className="flex flex-col md:flex-row items-center md:items-start">
                        {/* Text Content with Animations */}
                        <div className="w-full md:w-1/2 text-white text-center md:text-left mb-8 md:mb-0">
                          <div className={`flex flex-col md:flex-row items-center md:items-start mb-6 ${animationActive ? 'animate-title-slide-in' : 'opacity-0'}`}>
                            <div className="mr-0 md:mr-4 mb-4 md:mb-0">{service.icon}</div>
                            <h2 className="text-3xl md:text-5xl font-bold">{service.title}</h2>
                          </div>
                          
                          <p className={`text-lg md:text-xl mb-6 ${animationActive ? 'animate-paragraph-fade-in animation-delay-200' : 'opacity-0'}`}>
                            {service.shortDescription}
                          </p>
                          
                          <p className={`text-xl md:text-2xl font-semibold mb-8 text-orange-400 ${animationActive ? 'animate-pitch-slide-up animation-delay-300' : 'opacity-0'}`}>
                            {service.pitch}
                          </p>
                          
                          {/* Stats Row */}
                          <div className={`flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 mb-8 ${animationActive ? 'animate-stats-fade-in animation-delay-400' : 'opacity-0'}`}>
                            {service.stats.map((stat, i) => (
                              <div key={i} className="text-center px-2">
                                <div className="text-2xl md:text-3xl font-bold text-orange-400">{stat.value}</div>
                                <div className="text-sm text-white/80">{stat.label}</div>
                              </div>
                            ))}
                          </div>
                          
                          {/* Testimonial */}
                          <div className={`mb-8 bg-white/10 p-4 rounded-lg border-l-4 border-orange-500 ${animationActive ? 'animate-testimonial-fade-in animation-delay-500' : 'opacity-0'}`}>
                            <p className="italic mb-2 text-sm md:text-base">"{service.testimonial.quote}"</p>
                            <p className="text-xs md:text-sm text-orange-300">— {service.testimonial.author}</p>
                          </div>
                          
                          <div className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start ${animationActive ? 'animate-buttons-bounce-in animation-delay-600' : 'opacity-0'}`}>
                            <button 
                              onClick={() => selectService(service)}
                              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 md:px-8 py-3 rounded-lg transition duration-300 transform hover:-translate-y-1 animate-pulse-subtle"
                            >
                              {service.ctaText}
                            </button>
                            <button 
                              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-6 md:px-8 py-3 rounded-lg transition duration-300"
                            >
                              {service.ctaSecondary}
                            </button>
                          </div>
                        </div>
                        
                        {/* Right side visualization - hidden on small screens */}
                        <div className={`hidden md:block md:w-1/2 pl-6 ${animationActive ? 'animate-card-slide-in-right' : 'opacity-0'}`}>
                          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6">
                            <div className="grid grid-cols-1 gap-4">
                              {service.features.slice(0, 3).map((feature, idx) => (
                                <div 
                                  key={idx} 
                                  className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10 animate-feature-fade-in"
                                  style={{ animationDelay: `${0.7 + idx * 0.15}s` }}
                                >
                                  <span className="text-orange-400 text-xl mr-3">✓</span>
                                  <span className="text-sm md:text-base">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Slider Controls with Animation */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
              <button 
                onClick={prevSlide}
                className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 md:p-4 transition-all hover:scale-110"
              >
                <FaArrowLeft />
              </button>
            </div>
            
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
              <button 
                onClick={nextSlide}
                className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 md:p-4 transition-all hover:scale-110"
              >
                <FaArrowRight />
              </button>
            </div>
            
            {/* Slider Indicators with Animation */}
            <div className="absolute bottom-8 left-0 right-0 animate-fade-in-up">
              <div className="flex justify-center gap-2">
                {financialServices.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-orange-500 w-8' : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Services Section */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Financial Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tailored solutions designed to meet your unique financial needs and aspirations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-2"
                >
                  <div className='flex justify-center'>{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 flex justify-center">{service.title}</h3>
                  <p className="text-gray-600 flex justify-center">{service.description}</p>
                  <div className='flex justify-center'>
                  <a href="#" className="mt-4 inline-block text-blue font-medium hover:underline ">
                    Learn more →
                  </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Trusted By Clients Worldwide</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our commitment to excellence has been recognized by leading industry authorities.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-light text-blue text-3xl flex items-center justify-center">
                    🏆
                  </div>
                  <h3 className="font-semibold mb-1">{award.name}</h3>
                  <p className="text-sm text-gray-600">{award.source}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-blue-900 text-white rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
                  <p className="text-lg">Years of Experience</p>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">$50B+</div>
                  <p className="text-lg">Assets Under Management</p>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                  <p className="text-lg">Client Retention Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control of Your Financial Future?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule a consultation with one of our financial experts today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 transform hover:-translate-y-1 animate-pulse-subtle">
                Book a Consultation
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition duration-300">
                Call Us Now
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;