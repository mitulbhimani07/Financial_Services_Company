import React, { useState, useEffect } from 'react';
import styles from '../assets/scss/Navbar.module.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} fixed w-full z-50`}>
      <div className={`${styles.container} container mx-auto px-4`}>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className={`${styles.logo} text-2xl font-bold`}>
              <span className="text-primary">Global</span>
              <span className="text-secondary">Finance</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/" className={`${styles.navLink} hover:text-secondary`}>Home</a>
            <a href="/about" className={`${styles.navLink} hover:text-secondary`}>About Us</a>
            <div className="relative group">
              <button className={`${styles.navLink} hover:text-secondary flex items-center`}>
                Services <span className="ml-1">▼</span>
              </button>
              <div className={`${styles.dropdown} absolute hidden group-hover:block pt-2`}>
                <div className="bg-white shadow-lg rounded-md py-2 w-48">
                  <a href="/services/private-banking" className="block px-4 py-2 hover:bg-gray-100">Private Banking</a>
                  <a href="/services/investment" className="block px-4 py-2 hover:bg-gray-100">Investment Management</a>
                  <a href="/services/wealth" className="block px-4 py-2 hover:bg-gray-100">Wealth Planning</a>
                </div>
              </div>
            </div>
            <a href="/careers" className={`${styles.navLink} hover:text-secondary`}>Careers</a>
            <a href="/resources" className={`${styles.navLink} hover:text-secondary`}>Resources</a>
            <a href="/news" className={`${styles.navLink} hover:text-secondary`}>News</a>

            <a href="/contact" className={`${styles.navLink} hover:text-secondary`}>Contact</a>
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

          {/* CTA Buttons - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="/login" className={`${styles.loginBtn} px-4 py-2 rounded-md`}>Client Login</a>
            <a href="/contact" className={`${styles.ctaBtn} px-6 py-2 rounded-md`}>Get Started</a>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileNav} ${isOpen ? 'block' : 'hidden'} lg:hidden`}>
          <div className="px-2 pt-2 pb-4 space-y-1">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium">About Us</a>
            <div className="relative">
  <button
    onClick={() => setIsServicesOpen(!isServicesOpen)}
    className="w-full text-left px-3 py-2 rounded-md text-base font-medium flex justify-between items-center"
  >
    Services <span>{isServicesOpen ? '▲' : '▼'}</span>
  </button>
  {isServicesOpen && (
    <div className="pl-4 mt-1">
      <a href="/services/private-banking" className="block px-3 py-2 rounded-md text-base font-medium">Private Banking</a>
      <a href="/services/investment" className="block px-3 py-2 rounded-md text-base font-medium">Investment Management</a>
      <a href="/services/wealth" className="block px-3 py-2 rounded-md text-base font-medium">Wealth Planning</a>
    </div>
  )}
</div>
            <a href="/careers" className="block px-3 py-2 rounded-md text-base font-medium">Careers</a>
            <a href="/resources" className="block px-3 py-2 rounded-md text-base font-medium">Resources</a>

            <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
          <div className="px-2 py-4 border-t border-gray-200">
            <a href="/login" className="block w-full px-3 py-2 rounded-md text-center font-medium mb-2">Client Login</a>
            <a href="/contact" className="block w-full px-3 py-2 rounded-md text-center font-medium bg-primary text-dark">Get Started</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;