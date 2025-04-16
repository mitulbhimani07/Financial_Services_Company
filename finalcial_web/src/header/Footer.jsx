import React from 'react';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaFacebook, 
  FaYoutube, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock 
} from 'react-icons/fa';
import styles from '../assets/scss/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-top']}>
        <div className={styles.container}>
          <div className={styles['footer-grid']}>
            <div className={styles['footer-about']}>
              <h3 className={styles['footer-logo']}>
                <span className={styles['logo-primary']}>Global</span>
                <span className={styles['logo-secondary']}>Finance</span>
              </h3>
              <p className={styles['footer-about-text']}>
                Providing trusted financial services since 1995. We help individuals and businesses achieve their financial goals through expert advice and innovative solutions.
              </p>
              <div className={styles['footer-social']}>
                <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                <a href="#" aria-label="Twitter"><FaTwitter /></a>
                <a href="#" aria-label="Facebook"><FaFacebook /></a>
                <a href="#" aria-label="YouTube"><FaYoutube /></a>
              </div>
            </div>

            <div className='ms-0 lg:ms-15'>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/services">Our Services</a></li>
                <li><a href="/careers">Careers</a></li>
                <li><a href="/blog">Market Insights</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>

            <div className={styles['footer-services']}>
              <h4>Our Services</h4>
              <ul>
                <li><a href="/services/wealth-management">Wealth Management</a></li>
                <li><a href="/services/investment">Investment Advisory</a></li>
                <li><a href="/services/private-banking">Private Banking</a></li>
                <li><a href="/services/retirement">Retirement Planning</a></li>
                <li><a href="/services/risk">Risk Management</a></li>
              </ul>
            </div>

            <div className={styles['footer-contact']}>
              <h4>Contact Info</h4>
              <ul>
                <li className='flex align-center'>
                  <FaMapMarkerAlt style={{ fontSize: '1.5rem' }}/>
                  <span className='ms-4'>123 Financial District, New York, NY 10005</span>
                </li>
                <li className='flex align-center'>
                  <FaPhone style={{ fontSize: '1.3rem' }}/>
                  <span className='ms-4'>+1 (800) 555-1234</span>
                </li>
                <li className='flex align-center'>
                  <FaEnvelope style={{ fontSize: '1.3rem' }}/>
                  <span className='ms-4'>info@globalfinance.com</span>
                </li>
                <li className='flex align-center'>
                  <FaClock style={{ fontSize: '1.3rem' }}/>
                  <span className='ms-4'>Mon-Fri: 9:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={styles['footer-bottom']}>
        <div className={styles.container}>
          <div className={styles['footer-bottom-content']}>
            <p>&copy; {new Date().getFullYear()} GlobalFinance. All Rights Reserved.</p>
            <div className={styles['footer-legal']}>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <a href="/disclosures">Disclosures</a>
              <a href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;