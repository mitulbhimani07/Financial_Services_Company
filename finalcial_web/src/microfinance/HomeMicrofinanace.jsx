import React from 'react'
import Navbar from '../header/Navbar'
import Footer from '../header/Footer'
import { FaHandHoldingUsd, FaCalculator, FaClock, FaShieldAlt } from 'react-icons/fa';
import MicrofinanceNavbar from './MicrofinanceNavbar';

function HomeMicrofinanace() {
  return (
    <>
        {/* <Navbar/> */}

        <div className="font-sans bg-gray-50">
      {/* Navigation */}
      <MicrofinanceNavbar/>
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Solutions for Your Growth</h1>
            <p className="text-xl mb-8">Access affordable loans with flexible repayment terms to grow your business or meet personal needs.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
                Apply Now
              </button>
              <button className="border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600">
                Learn More
              </button>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6 text-gray-800">
            <h2 className="text-2xl font-bold mb-4">Quick Loan Calculator</h2>
            <div className="space-y-4">
              <div>
                <label className="block mb-1">Loan Amount</label>
                <input 
                  type="range" 
                  min="1000" 
                  max="50000" 
                  step="1000" 
                  className="w-full"
                />
                <div className="flex justify-between">
                  <span>$1,000</span>
                  <span>$50,000</span>
                </div>
              </div>
              <div>
                <label className="block mb-1">Repayment Period</label>
                <select className="w-full p-2 border rounded">
                  <option>3 Months</option>
                  <option>6 Months</option>
                  <option>12 Months</option>
                  <option>24 Months</option>
                </select>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                Calculate Repayment
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose MicroFin?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center p-6">
            <FaHandHoldingUsd className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Affordable Rates</h3>
            <p>Competitive interest rates tailored for micro-businesses and individuals.</p>
          </div>
          <div className="text-center p-6">
            <FaClock className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Quick Approval</h3>
            <p>Get loan decisions within 24 hours of application submission.</p>
          </div>
          <div className="text-center p-6">
            <FaCalculator className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Flexible Terms</h3>
            <p>Customizable repayment plans that fit your cash flow.</p>
          </div>
          <div className="text-center p-6">
            <FaShieldAlt className="text-blue-600 text-4xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Process</h3>
            <p>Your data and transactions are protected with bank-level security.</p>
          </div>
        </div>
      </section>

      {/* Loan Products Preview */}
      <section id="products" className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Loan Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Business Growth Loan",
                amount: "Up to $10,000",
                term: "3-24 months",
                rate: "8-12%",
                desc: "Expand your business with working capital"
              },
              {
                title: "Emergency Loan",
                amount: "Up to $2,500",
                term: "1-6 months",
                rate: "5-10%",
                desc: "Quick funds for unexpected needs"
              },
              {
                title: "Agricultural Loan",
                amount: "Up to $7,500",
                term: "6-18 months",
                rate: "6-9%",
                desc: "Support for farmers and agri-businesses"
              }
            ].map((product, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <div className="space-y-2 mb-4">
                  <p><span className="font-semibold">Amount:</span> {product.amount}</p>
                  <p><span className="font-semibold">Term:</span> {product.term}</p>
                  <p><span className="font-semibold">Rate:</span> {product.rate}</p>
                </div>
                <p className="mb-4">{product.desc}</p>
                <button className="text-blue-600 font-semibold hover:underline">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MicroFin</h3>
            <p>Empowering communities through accessible financial solutions.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Home</a></li>
              <li><a href="#" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400">Loan Products</a></li>
              <li><a href="#" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <address className="not-italic">
              <p>123 Finance Street</p>
              <p>Microville, MV 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@microfin.example</p>
            </address>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p>Subscribe for financial tips and updates</p>
            <div className="mt-4 flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 text-gray-800 rounded-l-md w-full"
              />
              <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} MicroFin. All rights reserved.</p>
        </div>
      </footer>
    </div>
        {/* <Footer/> */}
    </>
  )
}

export default HomeMicrofinanace