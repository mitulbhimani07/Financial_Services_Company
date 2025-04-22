import React, { useState, useEffect } from 'react';
import styles from '../assets/scss/Navbar.module.scss';
import Logo from '../assets/images/icon.png';
import Drop1 from "../assets/images/drop1.jpg";
import Drop2 from "../assets/images/drop2.jpg";
import Drop3 from "../assets/images/drop3.jpg";
import { Link } from 'react-router-dom';
import { User, LogIn, UserPlus } from 'lucide-react';

// Add this CSS to your scss file or create a new style block
const hoverUnderlineAnimation = `
  .hover-underline-animation {
    display: inline-block;
    position: relative;
  }
  
  .hover-underline-animation::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    left: 0;
    background-color: currentColor;
    transition: width 0.3s ease-in-out;
  }
  
  .hover-underline-animation:hover::after {
    width: 100%;
  }
  
  /* Special orange underline for "What We Offer" */
  .offer-underline-animation::after {
    background-color: #f59e0b; /* amber-500 color */
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState('private-banking');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [activeAuth, setActiveAuth] = useState('login');

  // Service images and content
  const serviceImages = {
    'private-banking': {
      title: "Private Banking",
      description: "Personalized banking services designed for high-net-worth individuals",
      image: Drop1
    },
    'investment': {
      title: "Investment Management",
      description: "Expert portfolio management and strategic investment solutions",
      image: Drop2
    },
    'wealth': {
      title: "Wealth Planning",
      description: "Comprehensive wealth management strategies for your future",
      image: Drop3
    }
  };

  // Auth options content
  const authOptions = {
    'login': {
      title: "Client Login",
      description: "Access your account securely to manage your finances and investments",
      icon: <LogIn size={48} className="text-amber-400" />
    },
    'signup': {
      title: "New Registration",
      description: "Create a new account to access our premium banking and investment services",
      icon: <UserPlus size={48} className="text-amber-400" />
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleAuthDropdown = () => {
    setIsAuthOpen(!isAuthOpen);
  };

  const handleServiceHover = (service) => {
    setActiveService(service);
  };

  const handleAuthHover = (auth) => {
    setActiveAuth(auth);
  };

  return (
    <>
      {/* Add style element for the hover underline animation */}
      <style>
        {hoverUnderlineAnimation}
      </style>

      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} fixed w-full z-50`}>
        <div className={`${styles.container} container mx-auto px-4`}>
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className={`${styles.logo} text-2xl font-bold`}>
                <img src={Logo} alt="Logo" width='110px' height='40px' />
                <span className="text-amber-400">Dhan</span>
                <span className="text-secondary">Pravah</span>
              </Link>
            </div>

            {/* Desktop Navigation - With Hover Underline Animation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className={`${styles.navLink} hover-underline-animation`}>Home</Link>
              <Link to="/about" className={`${styles.navLink} hover-underline-animation`}>About Us</Link>
              <div className="relative group">
                {/* Fixed: Ensure flex with nowrap and proper spacing */}
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center hover-underline-animation offer-underline-animation whitespace-nowrap"
                >
                  <span className='hover:text-amber-400'>What We Offer</span>
                </button>

                {/* Enhanced dropdown with images - WIDER VERSION */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max max-w-5xl rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="flex w-full">
                    {/* Service menu items */}
                    <div className="w-80 bg-gray-50 py-4">
                      <div
                        className={`px-4 py-3 cursor-pointer transition-all ${activeService === 'private-banking' ? 'bg-amber-100 border-l-4 border-amber-400' : 'hover:bg-gray-100'}`}
                        onMouseEnter={() => handleServiceHover('private-banking')}
                      >
                        <h3 className="font-semibold text-gray-800">Private Banking</h3>
                        <p className="text-sm text-gray-600">Personalized financial solutions</p>
                      </div>
                      <div
                        className={`px-4 py-3 cursor-pointer transition-all ${activeService === 'investment' ? 'bg-amber-100 border-l-4 border-amber-400' : 'hover:bg-gray-100'}`}
                        onMouseEnter={() => handleServiceHover('investment')}
                      >
                        <h3 className="font-semibold text-gray-800">Investment Management</h3>
                        <p className="text-sm text-gray-600">Grow your wealth strategically</p>
                      </div>
                      <div
                        className={`px-4 py-3 cursor-pointer transition-all ${activeService === 'wealth' ? 'bg-amber-100 border-l-4 border-amber-400' : 'hover:bg-gray-100'}`}
                        onMouseEnter={() => handleServiceHover('wealth')}
                      >
                        <h3 className="font-semibold text-gray-800">Wealth Planning</h3>
                        <p className="text-sm text-gray-600">Secure your financial future</p>
                      </div>
                    </div>

                    {/* Service image and description - IMPROVED WIDTH */}
                    <div className="w-full md:w-full lg:w-full p-6 bg-white">
                      <div className="flex">
                        <div className="w-1/2 pr-4">
                          <div className="h-64 overflow-hidden rounded-lg mb-4">
                            <img
                              src={serviceImages[activeService].image}
                              alt={serviceImages[activeService].title}
                              className="w-full h-full object-cover transition-all duration-500"
                            />
                          </div>
                        </div>
                        <div className="w-1/2 pl-4">
                          <h3 className="text-xl font-bold text-gray-800">{serviceImages[activeService].title}</h3>
                          <p className="text-gray-600 my-4">{serviceImages[activeService].description}</p>
                          <p className="text-gray-600 mb-4">Experience tailored financial solutions that perfectly align with your unique financial goals and aspirations. Our expert advisors are ready to guide you.</p>
                          <Link
                            to={`/services/${activeService}`}
                            className="mt-3 inline-block px-6 py-2 bg-amber-400 text-gray-800 rounded hover:bg-amber-500 transition-colors"
                          >
                            Learn More
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link to="/careers" className={`${styles.navLink} hover-underline-animation`}>Careers</Link>
              <Link to="/news" className={`${styles.navLink} hover-underline-animation`}>News</Link>
              <Link to="/contact" className={`${styles.navLink} hover-underline-animation`}>Contact</Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="outline-none mobile-menu-button"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

            {/* Client Icon Dropdown - Desktop - Now with HOVER instead of click */}
            <div className="hidden lg:flex items-center">
              <div className="relative group">
                <button
                  className="p-2 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors focus:outline-none flex items-center"
                  aria-label="Account options"
                >
                  <User size={20} color="#1e293b" />
                  {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="#1e293b">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg> */}
                </button>

                {/* Auth Dropdown Menu - HOVER style matching "What We Offer" */}
                <div className="absolute right-0 mt-2 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="flex w-full">
                    {/* Auth menu items */}
                    <div className="w-48 bg-gray-50 py-4">
                      <div
                        className={`px-4 py-3 cursor-pointer transition-all ${activeAuth === 'login' ? 'bg-amber-100 border-l-4 border-amber-400' : 'hover:bg-gray-100'}`}
                        onMouseEnter={() => handleAuthHover('login')}
                      >
                        <h3 className="font-semibold text-gray-800">Login</h3>
                        <p className="text-sm text-gray-600">Access your account</p>
                      </div>
                      <div
                        className={`px-4 py-3 cursor-pointer transition-all ${activeAuth === 'signup' ? 'bg-amber-100 border-l-4 border-amber-400' : 'hover:bg-gray-100'}`}
                        onMouseEnter={() => handleAuthHover('signup')}
                      >
                        <h3 className="font-semibold text-gray-800">Sign Up</h3>
                        <p className="text-sm text-gray-600">Create new account</p>
                      </div>
                    </div>

                    {/* Auth description area */}
                    <div className="w-64 p-6 bg-white">
                      <div className="flex flex-col items-center mb-4">
                        {authOptions[activeAuth].icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 text-center">{authOptions[activeAuth].title}</h3>
                      <p className="text-gray-600 my-3 text-center">{authOptions[activeAuth].description}</p>
                      <div className="text-center">
                        <Link
                          to={`/${activeAuth}`}
                          className="mt-2 inline-block px-6 py-2 bg-amber-400 text-gray-800 rounded hover:bg-amber-500 transition-colors"
                        >
                          {activeAuth === 'login' ? 'Login Now' : 'Register Now'}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className={`${styles.mobileNav} ${isOpen ? 'block' : 'hidden'} lg:hidden`}>
            <div className="px-2 pt-2 pb-4 space-y-1">
              <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover-underline-animation">Home</Link>
              <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover-underline-animation">About Us</Link>
              <div className="relative">
                {/* Fixed: Mobile menu button as well */}
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center hover-underline-animation offer-underline-animation whitespace-nowrap"
                >
                  <span>What We Offer</span> 
                </button>
                {isServicesOpen && (
                  <div className="pl-2 mt-1 bg-gray-800 rounded-md">
                    {/* Enhanced mobile dropdown with images */}
                    <div className="flex flex-col">
                      {/* Service menu items */}
                      <div className="py-2">
                        {Object.keys(serviceImages).map((serviceKey) => (
                          <div key={serviceKey}>
                            <div
                              className={`px-4 py-3 cursor-pointer transition-all ${activeService === serviceKey ? 'bg-amber-100 border-l-4 border-amber-400 text-gray-800' : 'hover:bg-gray-700'}`}
                              onClick={() => handleServiceHover(serviceKey)}
                            >
                              <h3 className={`font-semibold ${activeService === serviceKey ? 'text-gray-800' : 'text-gray-200'}`}>
                                {serviceImages[serviceKey].title}
                              </h3>
                              <p className={`text-sm ${activeService === serviceKey ? 'text-gray-600' : 'text-gray-400'}`}>
                                {serviceKey === 'private-banking' ? 'Personalized financial solutions' :
                                  serviceKey === 'investment' ? 'Grow your wealth strategically' :
                                    'Secure your financial future'}
                              </p>
                            </div>

                            {activeService === serviceKey && (
                              <div className="px-4 py-3 bg-white">
                                <div className="h-40 overflow-hidden rounded-lg mb-4">
                                  <img
                                    src={serviceImages[serviceKey].image}
                                    alt={serviceImages[serviceKey].title}
                                    className="w-full h-full object-cover transition-all duration-500"
                                  />
                                </div>
                                <h3 className="text-base font-bold text-gray-800">{serviceImages[serviceKey].title}</h3>
                                <p className="text-sm text-gray-600">{serviceImages[serviceKey].description}</p>
                                <Link
                                  to={`/services/${serviceKey}`}
                                  className="mt-2 inline-block px-3 py-1 bg-amber-400 text-gray-800 text-sm rounded hover:bg-amber-500 transition-colors"
                                >
                                  Learn More
                                </Link>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <Link to="/careers" className="block px-3 py-2 rounded-md text-base font-medium hover-underline-animation">Careers</Link>
              <Link to="/news" className="block px-3 py-2 rounded-md text-base font-medium hover-underline-animation">News</Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover-underline-animation">Contact</Link>
            </div>
            <div className="px-2 py-4 border-t border-gray-200">
              <button
                onClick={() => setIsAuthOpen(!isAuthOpen)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-md font-medium mb-2"
              >
                <div className="flex items-center">
                  <User size={18} className="mr-2" />
                  <span>Account</span>
                </div>
                <span>{isAuthOpen ? '▲' : '▼'}</span>
              </button>

              {isAuthOpen && (
                <div className="bg-gray-700 rounded-md mt-1">
                  {/* Mobile Auth dropdown similar to Services */}
                  <div className="py-2">
                    {Object.keys(authOptions).map((authKey) => (
                      <div key={authKey}>
                        <div
                          className={`px-4 py-3 cursor-pointer transition-all ${activeAuth === authKey ? 'bg-amber-100 border-l-4 border-amber-400 text-gray-800' : 'hover:bg-gray-600'}`}
                          onClick={() => handleAuthHover(authKey)}
                        >
                          <h3 className={`font-semibold ${activeAuth === authKey ? 'text-gray-800' : 'text-gray-200'}`}>
                            {authKey === 'login' ? 'Login' : 'Sign Up'}
                          </h3>
                          <p className={`text-sm ${activeAuth === authKey ? 'text-gray-600' : 'text-gray-400'}`}>
                            {authKey === 'login' ? 'Access your account' : 'Create new account'}
                          </p>
                        </div>

                        {activeAuth === authKey && (
                          <div className="px-4 py-3 bg-white">
                            <div className="flex justify-center mb-2">
                              {authKey === 'login' ?
                                <LogIn size={36} className="text-amber-400" /> :
                                <UserPlus size={36} className="text-amber-400" />
                              }
                            </div>
                            <h3 className="text-base font-bold text-gray-800 text-center">
                              {authKey === 'login' ? 'Client Login' : 'New Registration'}
                            </h3>
                            <p className="text-sm text-gray-600 text-center mt-1">
                              {authOptions[authKey].description}
                            </p>
                            <div className="text-center mt-3">
                              <Link
                                to={`/${authKey}`}
                                className="inline-block px-4 py-2 bg-amber-400 text-gray-800 text-sm rounded hover:bg-amber-500 transition-colors"
                              >
                                {authKey === 'login' ? 'Login Now' : 'Register Now'}
                              </Link>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;