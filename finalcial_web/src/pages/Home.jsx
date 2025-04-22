import React, { useState } from 'react';
import Navbar from '../header/Navbar';
import Footer from '../header/Footer';
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import React icons
import "../assets/scss/Home.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import businesspeople from '../assets/images/businesspeople.png'; // Adjust the path as necessary
import modernbusinesscenter from '../assets/images/business.jpg'; // Adjust the path as necessary
import { RiBankFill, RiCustomerService2Line } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa";

export default function Home() {

  const [isHovered, setIsHovered] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);

  const styles = {
    flipCard: {
      perspective: "1000px",
    },
    flipCardInner: {
      transformStyle: "preserve-3d",
      transition: "transform 0.6s",
    },
    flipCardInnerFlipped: {
      transform: "rotateY(180deg)",
    },
    flipCardFace: {
      backfaceVisibility: "hidden",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    flipCardBack: {
      transform: "rotateY(180deg)",
    }
  };
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


  const features = [
    {
      id: 1,
      icon: "⭐",
      title: "Industry Expertise",
      description: "With over 25 years of experience in the financial industry, our team of certified professionals provides knowledgeable guidance tailored to your unique situation."
    },
    {
      id: 2,
      icon: "🔒",
      title: "Security & Trust",
      description: "Your financial security is our priority. We implement advanced security measures and maintain the highest ethical standards to protect your assets and information."
    },
    {
      id: 3,
      icon: "💼",
      title: "Customized Solutions",
      description: "We understand that no two clients are the same. Our personalized approach ensures that we create financial strategies uniquely suited to your goals and risk tolerance."
    }
    // {
    //   id: 4,
    //   icon: "📊",
    //   title: "Transparent Pricing",
    //   description: "We believe in complete transparency. Our fee structure is straightforward with no hidden costs, so you always know exactly what you're paying for."
    // },
    // {
    //   id: 5,
    //   icon: "🚀",
    //   title: "Innovative Approach",
    //   description: "We leverage cutting-edge technology and the latest financial strategies to maximize your returns and minimize risks in an ever-changing market."
    // },
    // {
    //   id: 6,
    //   icon: "🌍",
    //   title: "Global Perspective",
    //   description: "Our international network and broad market insights help you capitalize on opportunities worldwide while navigating complex financial landscapes."
    // }
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
                  <div className="bg-green rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1 transition-transform">
                    <div className="flex justify-center mb-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <RiBankFill size={32} className="text-blue-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Banking</h3>
                    <p className="text-gray-600">Secure and convenient banking solutions</p>
                  </div>

                  {/* Service Card 2 */}
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-100 hover:border-green-200 transform hover:-translate-y-1 transition-transform">
                    <div className="flex justify-center mb-4">
                      <div className="bg-green-100 p-3 rounded-full">
                        <FaAddressCard size={32} className="text-green-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Learning License</h3>
                    <p className="text-gray-600">Easy application process for your license</p>
                  </div>

                  {/* Service Card 3 */}
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-100 hover:border-purple-200 transform hover:-translate-y-1 transition-transform">
                    <div className="flex justify-center mb-4">
                      <div className="bg-purple-100 p-3 rounded-full">
                        <FaCalculator size={32} className="text-purple-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Financial Tools</h3>
                    <p className="text-gray-600">Smart calculators for your needs</p>
                  </div>

                  {/* Service Card 4 */}
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-100 hover:border-orange-200 transform hover:-translate-y-1 transition-transform">
                    <div className="flex justify-center mb-4">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <RiCustomerService2Line size={32} className="text-orange-600" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Support</h3>
                    <p className="text-gray-600">24/7 assistance for all your queries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Rest of the component remains the same... */}



        <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Regular Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Why Choose Dhan-Pravah
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're committed to providing exceptional financial services with transparency, 
            expertise, and personalized attention to help you achieve your financial goals.
          </p>
        </div>

        {/* Features Grid with Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id}
              className="h-64 cursor-pointer"
              style={styles.flipCard}
              onMouseEnter={() => setFlippedCard(feature.id)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div 
                className="relative w-full h-full" 
                style={{
                  ...styles.flipCardInner,
                  ...(flippedCard === feature.id ? styles.flipCardInnerFlipped : {})
                }}
              >
                {/* Front Side */}
                <div 
                  className="flex flex-col items-center justify-center rounded-lg bg-white border border-gray-200 p-8 shadow-md" 
                  style={{...styles.flipCardFace}}
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mb-4">
                    <span>{feature.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center">{feature.title}</h3>
                </div>
                
                {/* Back Side */}
                <div 
                  className="flex items-center justify-center rounded-lg bg-amber-600 text-white p-8 shadow-md" 
                  style={{...styles.flipCardFace, ...styles.flipCardBack}}
                >
                  <p className="text-center">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Section */}
        <div className="mt-16 bg-blue-900 text-white rounded-lg p-10 text-center">
          <h3 className="text-2xl font-bold mb-6">What Our Clients Say</h3>
          <p className="text-lg italic max-w-3xl mx-auto mb-4">
            "Dhan-Pravah transformed our business's financial strategy. Their expert team provided customized solutions that increased our profitability while reducing risk. The personalized service we received was beyond our expectations."
          </p>
          <p className="font-semibold">— Michael Johnson, CEO of TechGrowth Inc.</p>
          
          <a 
            href="#contact" 
            className="inline-block mt-8 px-8 py-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </div>
      </div>
      <Footer />
    </div>
  );
}
