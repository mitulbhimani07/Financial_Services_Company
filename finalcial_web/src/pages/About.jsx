import React from 'react';
import { FaShieldAlt, FaChartLine, FaHandshake, FaUsers, FaBuilding, FaHistory } from 'react-icons/fa';
import Navbar from '../header/Navbar';
import Footer from '../header/Footer';  
import modernbusinesscenter from '../assets/images/business.jpg'; // Adjust the path as necessary
import businesspeople from '../assets/images/businesspeople.png'; // Adjust the path as necessary

export default function About() {
  // ... other code remains the same
  
  return (
    <>
      <Navbar />
      <div className="font-sans text-gray-900">
        {/* Hero Section with split design */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800">
          <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div className="text-center md:text-left">
                <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">About Dhan-Pravah Finance</h1>
                <p className="text-lg text-gray-50 leading-relaxed mb-8">
                  For over 25 years, we've been helping clients navigate complex financial landscapes 
                  with personalized strategies and expert guidance.
                </p>
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                  Our Services
                </button>
              </div>
              
              {/* Right image */}
              <div className="flex justify-center md:justify-end">
                <div className="rounded-lg overflow-hidden  border-4 border-transparent">
                  <img src={businesspeople} alt="Financial advisors in meeting" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Overview Section with image */}
        <div className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left image */}
              <div className="order-2 md:order-1">
                <div className="rounded-lg overflow-hidden shadow-lg border-2 border-gray-100">
                  <img src={modernbusinesscenter} alt="Dhan-Pravah office building" className="w-full h-auto" />
                </div>
              </div>
              
              {/* Right content */}
              <div className="order-1 md:order-2">
                <h2 className="text-blue-800 text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Dhan-Pravah Finance was established in 1998 with a simple mission: to make expert financial services accessible to everyone. What started as a small advisory firm has grown into a comprehensive financial institution serving clients nationwide.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Today, we manage over ₹10 billion in assets and have helped thousands of families and businesses achieve their financial goals through personalized strategies, innovative solutions, and unwavering commitment to client success.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <span className="block text-blue-800 text-3xl font-bold mb-1">25+</span>
                    <span className="text-gray-600">Years of Excellence</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg text-center">
                    <span className="block text-blue-800 text-3xl font-bold mb-1">10k+</span>
                    <span className="text-gray-600">Satisfied Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section - With Accent Border */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-orange-500">
            <div className="flex items-start">
              <FaBuilding className="text-orange-500 text-4xl mr-6 mt-1 hidden md:block" />
              <div>
                <h2 className="text-blue-800 text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-lg text-gray-800 leading-relaxed">
                  To empower our clients through comprehensive financial solutions that grow and protect 
                  their wealth while maintaining the highest standards of integrity and professionalism.
                  We believe in creating long-term partnerships that help you achieve your financial aspirations,
                  whether they involve business growth, retirement planning, or wealth preservation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the component remains the same... */}
      </div>
      <Footer />
    </>
  );
}