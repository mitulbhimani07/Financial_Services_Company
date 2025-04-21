import React from 'react';
import Navbar from '../header/Navbar';
import Footer from '../header/Footer';
import Slider from "react-slick";
import "../assets/scss/Home.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../assets/scss/Home.scss'; // Adjust the path as necessary

export default function Home() {
  // Enhanced slider settings
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
    className: "slider-wrapper"
  };

  // Slider content with both text and images
  const sliderContent = [
    {
      title: "About Dhan-Pravah Finance",
      description: "For over 25 years, we've been helping clients navigate complex financial landscapes and achieve their goals. Our team of experienced professionals is dedicated to providing personalized service and expert guidance.",
      buttonText: "Our Services",
      image: "/api/placeholder/600/400", // Replace with actual image path
      imageAlt: "Financial advisors in consultation"
    },
    {
      title: "Financial Excellence",
      description: "We pride ourselves on delivering exceptional financial solutions tailored to your unique needs. Our strategic approach ensures optimal results for individuals and businesses alike.",
      buttonText: "Learn More",
      image: "/api/placeholder/600/400", // Replace with actual image path
      imageAlt: "Team analyzing financial data"
    },
    {
      title: "Trusted Advisors",
      description: "Join thousands of satisfied clients who trust Dhan-Pravah Finance with their most important financial decisions. Experience the difference of working with true experts.",
      buttonText: "Contact Us",
      image: "/api/placeholder/600/400", // Replace with actual image path
      imageAlt: "Client meeting with financial advisor"
    }
  ];

  return (
    <div className="home-page w-full">
      <Navbar />
      <div className="font-sans text-gray-900 w-full">
        {/* Hero Section with full width design */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 w-full">
          <div className="w-full px-4 py-16 md:py-24">
            <div className="container mx-auto">
              {/* Full section slider */}
              <Slider {...settings}>
                {sliderContent.map((slide, index) => (
                  <div key={index} className="slide-item">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                      {/* Left content */}
                      <div className="text-center md:text-left p-6">
                        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">{slide.title}</h1>
                        <p className="text-lg text-gray-50 leading-relaxed mb-8">
                          {slide.description}
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                          {slide.buttonText}
                        </button>
                      </div>

                      {/* Right image */}
                      <div className="flex justify-center md:justify-end">
                        <div className="rounded-lg overflow-hidden shadow-2xl border-4 border-white/10">
                          <img src={slide.image} alt={slide.imageAlt} className="w-full h-auto" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
        {/* Rest of the component remains the same... */}
      </div>
      <Footer />
    </div>
  );
}