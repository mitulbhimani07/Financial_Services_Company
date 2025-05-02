import React, { useState, useEffect } from 'react';
import styles from '../assets/scss/Navbar.module.scss';
import Logo from '../assets/images/icon.png';
import Drop1 from "../assets/images/drop1.jpg";
import Drop2 from "../assets/images/drop2.jpg";
import Drop3 from "../assets/images/drop3.jpg";
import { Link } from 'react-router-dom';
import { User, LogIn, UserPlus, ChevronDown } from 'lucide-react';
import "../assets/scss/Navbar.scss";
import { useLocation } from 'react-router-dom';


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
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [activeService, setActiveService] = useState('private-banking');
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [activeAuth, setActiveAuth] = useState('login');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

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

  useEffect(() => {
    // Close menus when clicking outside
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }
      if (isAuthOpen && !event.target.closest('.auth-dropdown') && !event.target.closest('.auth-button')) {
        setIsAuthOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen, isAuthOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Close auth dropdown when toggling menu
    if (isAuthOpen) setIsAuthOpen(false);
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleAuthDropdown = () => {
    setIsAuthOpen(!isAuthOpen);
    // Close menu when toggling auth on mobile
    if (isMenuOpen) setIsMenuOpen(false);
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

      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} sticky top-0 w-full z-50`}>
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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className={`${styles.navLink} hover-underline-animation`}>Home</Link>
              <Link to="/about" className={`${styles.navLink} hover-underline-animation`}>About Us</Link>
              
              {/* What We Offer Dropdown - Desktop */}
              <div className="relative group">
                <button
                  className="w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center hover-underline-animation offer-underline-animation whitespace-nowrap"
                >
                  <span className='hover:text-amber-400'>What We Offer</span>
                  {/* <ChevronDown size={16} className="ml-1 text-gray-500 group-hover:text-amber-400" /> */}
                </button>

                {/* Desktop dropdown with images */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max max-w-5xl rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="flex w-full">
                    {/* Service menu items */}
                    <div className="w-80 bg-gray-50 py-4">
                      <Link to="/PrivateBanking">
                        <div
                          className={`px-4 py-3 cursor-pointer transition-all ${activeService === 'private-banking' ? 'bg-amber-100 border-l-4 border-amber-400' : 'hover:bg-gray-100'}`}
                          onMouseEnter={() => handleServiceHover('private-banking')}
                        >
                          <h3 className="font-semibold text-gray-800">Private Banking</h3>
                          <p className="text-sm text-gray-600">Personalized financial solutions</p>
                        </div>
                      </Link>
                      <Link to="/wealthPlanning">
                        <div
                          className={`px-4 py-3 cursor-pointer transition-all ${activeService === 'investment' ? 'bg-amber-100 border-l-4 border-amber-400' : 'hover:bg-gray-100'}`}
                          onMouseEnter={() => handleServiceHover('investment')}
                        >
                          <h3 className="font-semibold text-gray-800">Investment Management</h3>
                          <p className="text-sm text-gray-600">Grow your wealth strategically</p>
                        </div>
                      </Link>
                      <Link to="/whatWeOffer">
                        <div
                          className={`px-4 py-3 cursor-pointer transition-all ${activeService === 'wealth' ? 'bg-amber-100 border-l-4 border-amber-400' : 'hover:bg-gray-100'}`}
                          onMouseEnter={() => handleServiceHover('wealth')}
                        >
                          <h3 className="font-semibold text-gray-800">Wealth Planning</h3>
                          <p className="text-sm text-gray-600">Secure your financial future</p>
                        </div>
                      </Link>
                    </div>

                    {/* Service image and description */}
                    <div className="w-full p-6 bg-white">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/2 pr-0 md:pr-4 mb-4 md:mb-0">
                          <div className="h-48 md:h-64 overflow-hidden rounded-lg">
                            <img
                              src={serviceImages[activeService].image}
                              alt={serviceImages[activeService].title}
                              className="w-full h-full object-cover transition-all duration-500"
                            />
                          </div>
                        </div>
                        <div className="w-full md:w-1/2 pl-0 md:pl-4">
                          <h3 className="text-xl font-bold text-gray-800">{serviceImages[activeService].title}</h3>
                          <p className="text-gray-600 my-4">{serviceImages[activeService].description}</p>
                          <p className="text-gray-600 mb-4">Experience tailored financial solutions that perfectly align with your unique financial goals and aspirations. Our expert advisors are ready to guide you.</p>
                          <Link
                            to={`/${activeService}`}
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

            {/* Client Icon Dropdown - Desktop */}
            <div className="hidden lg:flex items-center">
              <div className="relative group">
                <button
                  className="p-2 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors focus:outline-none flex items-center"
                  aria-label="Account options"
                >
                  <User size={20} color="#1e293b" />
                </button>

                {/* Auth Dropdown Menu - Desktop */}
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

            {/* Mobile menu buttons */}
            <div className="lg:hidden flex items-center space-x-4">
              {/* Account button for mobile */}
              {/* <button
                onClick={toggleAuthDropdown}
                className="auth-button p-2 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors focus:outline-none flex items-center"
                aria-label="Account options"
              >
                <User size={20} color="#1e293b" />
              </button> */}
              
              {/* Hamburger menu */}
              <button
                onClick={toggleMenu}
                className="outline-none mobile-menu-button p-2"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Updated to match desktop experience */}
          <div className={`mobile-menu lg:hidden bg-white shadow-lg rounded-b-lg transition-all duration-300 ${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
            <div className="px-2 pt-2 pb-4 space-y-1">
              <Link to="/" className="block px-3 py-2 rounded-md text-black font-medium hover:bg-gray-100">Home</Link>
              <Link to="/about" className="block px-3 py-2 rounded-md text-black font-medium hover:bg-gray-100">About Us</Link>
              
              {/* Services dropdown - Mobile - Updated to match desktop experience */}
              <div className="relative">
                <button
                  onClick={toggleServicesDropdown}
                  className="w-full text-left px-3 py-2 rounded-md text-black font-medium flex justify-between items-center hover:bg-gray-100"
                >
                  <span>What We Offer</span>
                  <ChevronDown size={16} className={`transform transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isServicesOpen && (
                  <div className="bg-white rounded-md shadow-md overflow-hidden">
                    {/* Service menu items section */}
                    <div className="bg-gray-50">
                      {Object.keys(serviceImages).map((serviceKey) => (
                        <Link 
                          key={serviceKey}
                          to={`/${serviceKey === 'private-banking' ? 'PrivateBanking' : 
                                serviceKey === 'investment' ? 'wealthPlanning' : 'whatWeOffer'}`}
                        >
                          <div 
                            className={`px-4 py-3 border-b border-gray-200 cursor-pointer transition-all ${activeService === serviceKey ? 'bg-amber-100 border-l-4 border-amber-400' : ''}`}
                            onClick={() => setActiveService(serviceKey)}
                          >
                            <h3 className="font-semibold text-gray-800">{serviceImages[serviceKey].title}</h3>
                            <p className="text-sm text-gray-600">
                              {serviceKey === 'private-banking' ? 'Personalized financial solutions' :
                               serviceKey === 'investment' ? 'Grow your wealth strategically' :
                               'Secure your financial future'}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                    
                    {/* Service image and description section */}
                    <div className="p-4 bg-white">
                      <div className="mb-4 h-48 overflow-hidden rounded-lg">
                        <img
                          src={serviceImages[activeService].image}
                          alt={serviceImages[activeService].title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-800">{serviceImages[activeService].title}</h3>
                      <p className="text-gray-600 my-3">{serviceImages[activeService].description}</p>
                      <p className="text-gray-600 mb-3">Experience tailored financial solutions that perfectly align with your unique financial goals and aspirations.</p>
                      <Link
                        to={`/${activeService === 'private-banking' ? 'PrivateBanking' : 
                              activeService === 'investment' ? 'wealthPlanning' : 'whatWeOffer'}`}
                        className="inline-block px-6 py-2 bg-amber-400 text-gray-800 rounded hover:bg-amber-500 transition-colors"
                        onClick={() => {
                          setIsServicesOpen(false);
                          setIsMenuOpen(false);
                        }}
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link to="/careers" className="block px-3 py-2 rounded-md text-black font-medium hover:bg-gray-100">Careers</Link>
              <Link to="/news" className="block px-3 py-2 rounded-md text-black font-medium hover:bg-gray-100">News</Link>
              <Link to="/contact" className="block px-3 py-2 rounded-md text-black font-medium hover:bg-gray-100">Contact</Link>
              
              {/* Integrated Auth Section in Mobile Menu */}
              <div className="pt-4 mt-4 border-t border-gray-200">
                <div className="px-3 py-2 font-medium text-gray-800">Account Access</div>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 p-3">
                  {Object.keys(authOptions).map((authKey) => (
                    <Link
                      key={authKey}
                      to={`/${authKey}`}
                      className="flex items-center justify-center px-4 py-2 bg-amber-400 text-gray-800 rounded hover:bg-amber-500 transition-colors"
                    >
                      {authKey === 'login' ? 
                        <><LogIn size={18} className="mr-2" /> Login</> : 
                        <><UserPlus size={18} className="mr-2" /> Register</>
                      }
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile Auth Dropdown - Separate from main menu but responsive */}
          <div className={`auth-dropdown lg:hidden bg-white shadow-lg rounded-lg absolute right-4 mt-2 w-64 z-50 transition-all duration-300 ${isAuthOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
            <div className="py-2">
              {Object.keys(authOptions).map((authKey) => (
                <div key={authKey} className="border-b border-gray-200 last:border-b-0">
                  <div className="px-4 py-3">
                    <div className="flex items-center mb-2">
                      {authKey === 'login' ? 
                        <LogIn size={24} className="text-amber-400 mr-2" /> : 
                        <UserPlus size={24} className="text-amber-400 mr-2" />
                      }
                      <h3 className="font-semibold text-gray-800">
                        {authKey === 'login' ? 'Client Login' : 'New Registration'}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      {authOptions[authKey].description}
                    </p>
                    <Link
                      to={`/${authKey}`}
                      className="w-full block text-center px-4 py-2 bg-amber-400 text-gray-800 rounded hover:bg-amber-500 transition-colors"
                      onClick={() => setIsAuthOpen(false)}
                    >
                      {authKey === 'login' ? 'Login Now' : 'Register Now'}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;