import React, { useState, useEffect } from 'react'
import Navbar from '../header/Navbar'
import Footer from '../header/Footer'
import { FaHandHoldingUsd, FaCalculator, FaClock, FaShieldAlt, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import MicrofinanceNavbar from './MicrofinanceNavbar';

function HomeMicrofinanace() {
  // For testimonial slider
  const testimonials = [
    {
      quote: "MicroFin helped me expand my small shop when no bank would give me a loan. Their process was simple and fast.",
      name: "Sarah Johnson",
      business: "Sarah's Groceries",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "The emergency loan saved my farm during a difficult season. The repayment terms were very reasonable.",
      name: "Michael Brown",
      business: "Brown Family Farm",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "As a first-time borrower, I appreciated how clearly they explained everything. Will definitely use them again.",
      name: "Lisa Chen",
      business: "Chen Tailoring",
      image: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      quote: "Their agricultural loan program understood my seasonal cash flow needs perfectly. Truly a partner in my success.",
      name: "Robert Garcia",
      business: "Garcia Organic Farms",
      image: "https://randomuser.me/api/portraits/men/21.jpg"
    }
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Navigation - Full Width */}
      <MicrofinanceNavbar />
      
      {/* Hero Section - Full Width Background with Contained Content */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-20">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 px-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">Financial Solutions for Your Growth</h1>
              <p className="text-xl md:text-2xl opacity-90">Access affordable loans with flexible repayment terms to grow your business or meet personal needs.</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-white text-blue-700 px-8 py-4 rounded-md font-semibold hover:bg-gray-100 hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                  Apply Now
                </button>
                <button className="border-2 border-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-1 transition duration-300">
                  Learn More
                </button>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 text-gray-800 transform hover:scale-105 transition duration-300 mx-2 md:mx-0">
              <h2 className="text-2xl font-bold mb-6 text-blue-800">Quick Loan Calculator</h2>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2 font-medium">Loan Amount</label>
                  <input 
                    type="range" 
                    min="1000" 
                    max="50000" 
                    step="1000" 
                    className="w-full h-2 bg-blue-100 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>$1,000</span>
                    <span>$50,000</span>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 font-medium">Repayment Period</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition">
                    <option>3 Months</option>
                    <option>6 Months</option>
                    <option>12 Months</option>
                    <option>24 Months</option>
                  </select>
                </div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transform hover:-translate-y-1 transition duration-300 font-medium">
                  Calculate Repayment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Contained */}
      <section className="py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800">Why Choose MicroFin?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-2 md:px-0">
            <div className="text-center p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-b-4 border-blue-600">
              <FaHandHoldingUsd className="text-blue-600 text-5xl mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-3">Affordable Rates</h3>
              <p className="text-gray-600">Competitive interest rates tailored for micro-businesses and individuals.</p>
            </div>
            <div className="text-center p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-b-4 border-blue-600">
              <FaClock className="text-blue-600 text-5xl mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-3">Quick Approval</h3>
              <p className="text-gray-600">Get loan decisions within 24 hours of application submission.</p>
            </div>
            <div className="text-center p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-b-4 border-blue-600">
              <FaCalculator className="text-blue-600 text-5xl mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-3">Flexible Terms</h3>
              <p className="text-gray-600">Customizable repayment plans that fit your cash flow.</p>
            </div>
            <div className="text-center p-6 md:p-8 bg-white rounded-xl shadow-sm hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-b-4 border-blue-600">
              <FaShieldAlt className="text-blue-600 text-5xl mx-auto mb-6" />
              <h3 className="text-xl font-semibold mb-3">Secure Process</h3>
              <p className="text-gray-600">Your data and transactions are protected with bank-level security.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loan Products Section - Full Width Background with Contained Content */}
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-gray-800">Our Loan Products</h2>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 px-2 md:px-0">
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
              <div key={index} className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-2 border-t-4 border-blue-600">
                <h3 className="text-2xl font-bold mb-4 text-blue-800">{product.title}</h3>
                <div className="space-y-3 mb-6">
                  <p className="flex justify-between"><span className="font-semibold">Amount:</span> <span className="text-gray-700">{product.amount}</span></p>
                  <p className="flex justify-between"><span className="font-semibold">Term:</span> <span className="text-gray-700">{product.term}</span></p>
                  <p className="flex justify-between"><span className="font-semibold">Rate:</span> <span className="text-gray-700">{product.rate}</span></p>
                </div>
                <p className="mb-6 text-gray-600">{product.desc}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-800 flex items-center group">
                  Learn More <span className="ml-1 group-hover:ml-2 transition-all">→</span>
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 md:mt-16">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-md hover:bg-blue-700 transition duration-300 transform hover:-translate-y-1 font-medium">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Slider */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">What Our Clients Say</h2>
          
          <div className="relative mx-auto px-2 md:px-0">
            <div className="overflow-hidden rounded-lg bg-gray-50 shadow-md p-6 md:p-8">
              <div className="text-blue-600 mb-2">
                <FaQuoteLeft size={32} />
              </div>
              
              <div className="relative h-48">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className={`absolute top-0 left-0 w-full transition-all duration-500 ease-in-out ${
                      index === currentSlide 
                        ? "opacity-100 translate-x-0" 
                        : "opacity-0 translate-x-20"
                    }`}
                    style={{ display: index === currentSlide ? 'block' : 'none' }}
                  >
                    <p className="text-lg text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full mr-3" 
                      />
                      <div>
                        <div className="font-bold">{testimonial.name}</div>
                        <div className="text-blue-600 text-sm">{testimonial.business}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Indicator dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide ? "bg-blue-600 w-5" : "bg-gray-300 w-2"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white p-2 rounded-full shadow-md hover:bg-blue-50 transition-all z-10"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft className="text-blue-600" size={16} />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white p-2 rounded-full shadow-md hover:bg-blue-50 transition-all z-10"
              aria-label="Next testimonial"
            >
              <FaChevronRight className="text-blue-600" size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section - Full Width Background with Contained Content */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-16 md:py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow With Us?</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">Start your application today and get a decision within 24 hours.</p>
          <button className="bg-white text-blue-600 px-10 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            Apply for a Loan
          </button>
        </div>
      </section>

      {/* Footer - Full Width Background with Contained Content */}
      <footer className="bg-gray-900 text-white pt-10">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="px-2">
              <h3 className="text-2xl font-bold mb-6">MicroFin</h3>
              <p className="text-gray-400">Empowering communities through accessible financial solutions.</p>
              <div className="mt-6 flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="px-2">
              <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Loan Products</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
              </ul>
            </div>
            <div className="px-2">
              <h4 className="font-semibold mb-6 text-lg">Contact Us</h4>
              <address className="not-italic text-gray-400 space-y-3">
                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  123 Finance Street
                </p>
                <p>Microville, MV 12345</p>
                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (123) 456-7890
                </p>
                <p className="flex items-center">
                  <svg className="h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@microfin.example
                </p>
              </address>
            </div>
            <div className="px-2">
              <h4 className="font-semibold mb-6 text-lg">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe for financial tips and updates</p>
              <div className="mt-4">
                <form className="flex flex-col space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email" 
                    className="px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  />
                  <button className="bg-blue-600 px-4 py-3 rounded-md hover:bg-blue-700 transition duration-300 font-medium">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} MicroFin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomeMicrofinanace