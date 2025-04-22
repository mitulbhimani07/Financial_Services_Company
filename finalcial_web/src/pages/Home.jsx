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
import { RiBankFill, RiCustomerService2Line } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa";

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
      image: 'https://img.freepik.com/free-vector/team-concept-illustration_114360-678.jpg?t=st=1745310361~exp=1745313961~hmac=d6f02dc72a4d6d6988ce6e23c8b1741887246680eef24a4a9ebfb899a0a0cece&w=1380',
      imageAlt: "Financial advisors in consultation",
      bgImage: 'https://img.freepik.com/free-photo/abstract-luxury-soft-red-background-christmas-valentines-layout-designstudioroom-web-template-busine_1258-107785.jpg?t=st=1745311631~exp=1745315231~hmac=3f6aa280f74497c253772751e4a469c531afaf76f565703b6d4de9eb9e135126&w=1380', // Add background image
      bgClass: "bg-blue-overlay" // Optional class for overlay
    },
    {
      title: "About Dhan-Pravah Finance",
      description: "For over 25 years, we've been helping clients navigate complex financial landscapes and achieve their goals. Our team of experienced professionals is dedicated to providing personalized service and expert guidance.",
      buttonText: "Our Services",
      image: 'https://img.freepik.com/free-photo/computer-screen-showcases-business-data-statistics-professional-boardroom_482257-113924.jpg?t=st=1745310402~exp=1745314002~hmac=8ca0f6c7909735d6dde608e9909b46bdf3abbf98690996ed8f9fcd791535ab82&w=1380',
      imageAlt: "Financial advisors in consultation",
      bgImage: 'https://img.freepik.com/free-photo/abstract-luxury-soft-red-background-christmas-valentines-layout-designstudioroom-web-template-busine_1258-107785.jpg?t=st=1745311631~exp=1745315231~hmac=3f6aa280f74497c253772751e4a469c531afaf76f565703b6d4de9eb9e135126&w=1380', // Add background image
      bgClass: "bg-blue-overlay" // Optional class for overlay
    },
    {
      title: "Financial Excellence",
      description: "We pride ourselves on delivering exceptional financial solutions tailored to your unique needs. Our strategic approach ensures optimal results for individuals and businesses alike.",
      buttonText: "Learn More",
      image: 'https://img.freepik.com/free-vector/online-certification-with-cap_23-2148599132.jpg?t=st=1745310793~exp=1745314393~hmac=3ed410140177a246aed5a0f36ad773a24c87fe01ebb04e526f87f8723a37f7af&w=1380',
      imageAlt: "Team analyzing financial data",
      bgImage: 'https://img.freepik.com/free-photo/abstract-luxury-soft-red-background-christmas-valentines-layout-designstudioroom-web-template-busine_1258-107785.jpg?t=st=1745311631~exp=1745315231~hmac=3f6aa280f74497c253772751e4a469c531afaf76f565703b6d4de9eb9e135126&w=1380', // Add background image
      bgClass: "bg-orange-overlay" // Optional class for overlay
    },
    // ... other slides
  ];

  return (
    <div className="home-page w-full">
      <Navbar />
      <div className="font-sans text-gray-500 w-full">
        {/* Hero Section with full width design */}
        <div className="bg-white w-full text-black">
          <div className="w-full  py-16 md:py-21">
            <div className="container mx-auto">
              {/* Full section slider */}
              <div className="slider-container">
                <Slider {...settings}>
                  {sliderContent.map((slide, index) => (
                    <div key={index} className={`slide-item ${slide.bgClass || ''}`}>
                      {/* Background image */}
                      <div
                        className="slide-background"
                        style={{ backgroundImage: `url(${slide.bgImage})` }}
                      ></div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left content */}
                        <div className="slide-content text-center md:text-left">
                          <h1 className="text-4xl md:text-5xl font-bold mb-6">{slide.title}</h1>
                          <p className="text-lg leading-relaxed mb-8">
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
      </div>
      <Footer />
    </div>
  );
}
