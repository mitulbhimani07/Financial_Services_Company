import React from 'react';
import Navbar from '../header/Navbar';
import Footer from '../header/Footer';
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import React icons
import "../assets/scss/Home.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import businesspeople from '../assets/images/businesspeople.png'; // Adjust the path as necessary
import modernbusinesscenter from '../assets/images/business.jpg'; // Adjust the path as necessary
import {  RiCustomerService2Line } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa";
import { RiBankFill, RiMoneyDollarCircleLine, RiCalculatorLine, RiBriefcaseLine } from "react-icons/ri";


export default function Home() {
  // Custom arrow components with React icons
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow prev-arrow" onClick={onClick}>
        <ChevronLeft size={44} />
      </div>
    );
  };

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow next-arrow" onClick={onClick}>
        <ChevronRight size={44} />
      </div>
    );
  };

  // Enhanced slider settings with custom arrows
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
    cssEase: "ease-in-out",
    className: "slider-wrapper",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

  // Slider content with both text and images
  const sliderContent = [
    {
      title: "About Dhan-Pravah Finance",
      description: "For over 25 years, we've been helping clients navigate complex financial landscapes and achieve their goals. Our team of experienced professionals is dedicated to providing personalized service and expert guidance.",
      buttonText: "Our Services",
      image: businesspeople, // Local image import
      imageAlt: "Financial advisors in consultation"
    },
    {
      title: "Financial Excellence",
      description: "We pride ourselves on delivering exceptional financial solutions tailored to your unique needs. Our strategic approach ensures optimal results for individuals and businesses alike.",
      buttonText: "Learn More",
      image: modernbusinesscenter, // Local image import
      imageAlt: "Team analyzing financial data"
    },
    {
      title: "Trusted Advisors",
      description: "Join thousands of satisfied clients who trust Dhan-Pravah Finance with their most important financial decisions. Experience the difference of working with true experts.",
      buttonText: "Contact Us",
      image: "/api/placeholder/600/400", // Using placeholder as external URLs might be restricted
      imageAlt: "Client meeting with financial advisor"
    }
  ];

  const services = [
    {
      icon: <RiBankFill size={40} />,
      title: "Loans",
      description: "Flexible loan options tailored to meet your financial needs"
    },
    {
      icon: <RiMoneyDollarCircleLine size={40} />,
      title: "Investment",
      description: "Strategic investment solutions for long-term growth"
    },
    {
      icon: <RiCalculatorLine size={40} />,
      title: "EMI Calculator",
      description: "Plan your finances with our easy-to-use calculators"
    },
    {
      icon: <RiBriefcaseLine size={40} />,
      title: "Career with a Financial Leader",
      description: "Join our team of financial experts and grow professionally"
    }
  ];   

  return (
    <div className="home-page w-full">
      <Navbar />
      <div className="font-sans text-gray-500 w-full">
        {/* Hero Section with full width design */}
        <div className="bg-white w-full text-black">
          <div className="w-full px-4 md:px-8 py-16 md:py-24">
            <div className="container mx-auto">
              {/* Full section slider */}
              <div className="slider-container">
                <Slider {...settings}>
                  {sliderContent.map((slide, index) => (
                    <div key={index} className="slide-item">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left content */}
                        <div className="text-center md:text-left p-6">
                          <h1 className="text-black text-4xl md:text-5xl font-bold mb-6">{slide.title}</h1>
                          <p className="text-lg text-black leading-relaxed mb-8">
                            {slide.description}
                          </p>
                          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                            {slide.buttonText}
                          </button>
                        </div>

                        {/* Right image */}
                        <div className="flex justify-center md:justify-end">
                          <div className="slide-image-container">
                            <img
                              src={slide.image}
                              alt={slide.imageAlt}
                              className="slide-image"
                            />


                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
              {/* End of slider */}
              {/* Services Section */}
              <div className="container mx-auto px-4 py-16">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
    {/* Service Card 1 */}
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 hover:bg-blue-600 group">
      <div className="flex justify-center mb-4">
        <div className="bg-blue-100 p-3 rounded-full group-hover:bg-white transition-colors duration-300">
          <RiBankFill size={32} className="text-blue-600 group-hover:text-blue-600" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white transition-colors duration-300">Banking</h3>
      <p className="text-gray-600 group-hover:text-white transition-colors duration-300">Secure and convenient banking solutions</p>
    </div>

    {/* Service Card 2 */}
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 hover:border-green-200 transform hover:-translate-y-1 hover:bg-green-600 group">
      <div className="flex justify-center mb-4">
        <div className="bg-green-100 p-3 rounded-full group-hover:bg-white transition-colors duration-300">
          <FaAddressCard size={32} className="text-green-600 group-hover:text-green-600" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white transition-colors duration-300">Learning License</h3>
      <p className="text-gray-600 group-hover:text-white transition-colors duration-300">Easy application process for your license</p>
    </div>

    {/* Service Card 3 */}
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 hover:border-purple-200 transform hover:-translate-y-1 hover:bg-purple-600 group">
      <div className="flex justify-center mb-4">
        <div className="bg-purple-100 p-3 rounded-full group-hover:bg-white transition-colors duration-300">
          <FaCalculator size={32} className="text-purple-600 group-hover:text-purple-600" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white transition-colors duration-300">Financial Tools</h3>
      <p className="text-gray-600 group-hover:text-white transition-colors duration-300">Smart calculators for your needs</p>
    </div>

    {/* Service Card 4 */}
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center border border-gray-100 hover:border-orange-200 transform hover:-translate-y-1 hover:bg-orange-600 group">
      <div className="flex justify-center mb-4">
        <div className="bg-orange-100 p-3 rounded-full group-hover:bg-white transition-colors duration-300">
          <RiCustomerService2Line size={32} className="text-orange-600 group-hover:text-orange-600" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-white transition-colors duration-300">Customer Support</h3>
      <p className="text-gray-600 group-hover:text-white transition-colors duration-300">24/7 assistance for all your queries</p>
    </div>
  </div>
</div>

              {/* End of Services Section */}
            </div>
          </div>
        </div>
        {/* Rest of the component remains the same... */}
      </div>
      {/* ================================= */}
      <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore a range of services from Dhan-Pravah Finance</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As a leading Non-Banking Financial Company (NBFC), we provide financial solutions that
            match your needs and help you build a better future. Our services are trusted by over 10
            million customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-500 group cursor-pointer transform hover:-translate-y-2"
            >
              {/* Glass effect background */}
              <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm border border-white border-opacity-30"></div>
              
              {/* Card content */}
              <div className="relative z-10 p-8 text-center h-64 flex flex-col items-center justify-center transition-all duration-300">
                {/* Icon container with glassmorphic circle */}
                <div className="mb-6 p-4 bg-white bg-opacity-30 rounded-full shadow-md transition-all duration-500 group-hover:bg-orange-500 group-hover:shadow-orange-300">
                  <div className="text-orange-500 transition-all duration-300 group-hover:text-white transform group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-3 transition-all duration-300 group-hover:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 transition-all duration-300 group-hover:text-white group-hover:font-medium">
                  {service.description}
                </p>
              </div>
              
              {/* Animated gradient overlay */}
              <div className="absolute inset-x-0 bottom-0 h-0 bg-gradient-to-br from-orange-500 to-orange-600 transition-all duration-500 ease-out group-hover:h-full opacity-90"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  
      <Footer />
    </div>
  );
}
