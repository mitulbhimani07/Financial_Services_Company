import React from 'react';
import Navbar from '../header/Navbar';
import styled from 'styled-components';

const ContactContainer = styled.div`
  max-width: ${props => props.$maxWidth};
  margin: 0 auto;
  padding: 2rem 1rem;
  font-family: ${props => props.$fontPrimary};
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  h1 {
    color: ${props => props.$primaryColor};
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: ${props => props.$gray600};
    font-size: 1.1rem;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;

  @media (max-width: ${props => props.$breakpointMd}) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.div`
  background: ${props => props.$white};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: ${props => props.$boxShadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${props => props.$boxShadowLg};
  }

  svg {
    width: 48px;
    height: 48px;
    margin-bottom: 1.5rem;
    color: ${props => props.$primaryColor};
  }

  h3 {
    color: ${props => props.$primaryColor};
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    color: ${props => props.$gray600};
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  a {
    color: ${props => props.$secondaryColor};
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: ${props => props.$accentColor};
      text-decoration: underline;
    }
  }
`;

const ContactForm = styled.form`
  background: ${props => props.$white};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: ${props => props.$boxShadow};
  max-width: 800px;
  margin: 0 auto;

  h2 {
    color: ${props => props.$primaryColor};
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    margin-bottom: 0.5rem;
    color: ${props => props.$gray800};
    font-weight: 500;
  }

  input,
  textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid ${props => props.$gray500};
    border-radius: 4px;
    font-family: ${props => props.$fontPrimary};
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &:focus {
      outline: none;
      border-color: ${props => props.$primaryColor};
      box-shadow: 0 0 0 3px rgba(0, 35, 102, 0.1);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background-color: ${props => props.$primaryColor};
  color: ${props => props.$white};
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background-color: ${props => props.$blue800};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default function Contact() {
  return (
    <div>
      <Navbar />
      <ContactContainer 
        $maxWidth="1200px"
        $fontPrimary="'Roboto', sans-serif"
      >
        <ContactHeader 
          $primaryColor="#002366"
          $gray600="#4b5563"
        >
          <h1 style={{marginTop:'40px'}}>Contact Us</h1>
          <p>Have questions or need assistance? We're here to help. Reach out to our team through any of the methods below or send us a message directly.</p>
        </ContactHeader>

        <ContactGrid $breakpointMd="768px">
          <ContactCard 
            $white="#ffffff"
            $boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            $boxShadowLg="0 10px 15px rgba(0, 0, 0, 0.1)"
            $primaryColor="#002366"
            $gray600="#4b5563"
            $secondaryColor="#0066cc"
            $accentColor="#ff6b00"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3>Email Us</h3>
            <p>Send us an email and we'll get back to you within 24 hours.</p>
            <a href="mailto:support@example.com">support@example.com</a>
          </ContactCard>

          <ContactCard 
            $white="#ffffff"
            $boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            $boxShadowLg="0 10px 15px rgba(0, 0, 0, 0.1)"
            $primaryColor="#002366"
            $gray600="#4b5563"
            $secondaryColor="#0066cc"
            $accentColor="#ff6b00"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <h3>Call Us</h3>
            <p>Monday to Friday, 9am to 5pm EST</p>
            <a href="tel:+18005551234">+1 (800) 555-1234</a>
          </ContactCard>

          <ContactCard 
            $white="#ffffff"
            $boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
            $boxShadowLg="0 10px 15px rgba(0, 0, 0, 0.1)"
            $primaryColor="#002366"
            $gray600="#4b5563"
            $secondaryColor="#0066cc"
            $accentColor="#ff6b00"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3>Visit Us</h3>
            <p>Our headquarters in New York City</p>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">123 Business Ave, NYC</a>
          </ContactCard>
        </ContactGrid>

        <ContactForm 
          $white="#ffffff"
          $boxShadow="0 4px 6px rgba(0, 0, 0, 0.1)"
          $primaryColor="#002366"
          $gray800="#1f2937"
          $gray500="#6b7280"
          $fontPrimary="'Roboto', sans-serif"
        >
          <h2>Send Us a Message</h2>
          <FormGroup>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required />
          </FormGroup>
          <FormGroup>
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" required />
          </FormGroup>
          <FormGroup>
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
          </FormGroup>
          <FormGroup>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" required></textarea>
          </FormGroup>
          <SubmitButton 
            $primaryColor="#002366"
            $white="#ffffff"
            $blue800="#1e40af"
            type="submit"
          >
            Send Message
          </SubmitButton>
        </ContactForm>
      </ContactContainer>
    </div>
  );
}