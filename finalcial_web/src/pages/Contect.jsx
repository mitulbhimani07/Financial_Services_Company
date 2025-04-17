import React from 'react';
import Navbar from '../header/Navbar';
import  '../assets/scss/Contact.scss';

export default function Contact() {
  return (
    <div className='contactContainer'>
      <Navbar />
      <div className='contactHero'>
        <div className='heroContent'>
          <h1>Contact Our Financial Team</h1>
          <p>We're here to help with all your financial needs. Reach out anytime.</p>
        </div>
      </div>

      <div className='contactContent'>
        <div className='contactGrid'>
          <div className='contactCard'>
            <div className='cardIcon'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </div>
            <h3>Email Support</h3>
            <p>Get quick answers from our support team</p>
            <a href="mailto:support@finance.com">support@finance.com</a>
          </div>

          <div className='contactCard'>
            <div className='cardIcon'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
            </div>
            <h3>Phone Support</h3>
            <p>Mon-Fri: 8am-6pm EST</p>
            <a href="tel:+18005551234">+1 (800) 555-1234</a>
          </div>

          <div className='contactCard'>
            <div className='cardIcon'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </div>
            <h3>Visit Us</h3>
            <p>Our headquarters in New York</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">123 Financial District, NYC</a>
          </div>
        </div>

        <div className='contactFormWrapper'>
          <div className='formHeader'>
            <h2>Send Us a Message</h2>
            <p>We'll respond within 24 hours</p>
          </div>
          <form className='contactForm'>
            <div className='formRow'>
              <div className='formGroup'>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Smith" required />
              </div>
              <div className='formGroup'>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
            </div>
            <div className='formGroup'>
              <label htmlFor="subject">Subject</label>
              <select id="subject" required>
                <option value="">Select a subject</option>
                <option value="investment">Investment Inquiry</option>
                <option value="banking">Banking Services</option>
                <option value="loan">Loan Application</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className='formGroup'>
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" placeholder="How can we help you?" required></textarea>
            </div>
            <button type="submit" className='submitButton'>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}