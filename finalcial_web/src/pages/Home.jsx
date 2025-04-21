import React from 'react';
import Navbar from '../header/Navbar';
import Footer from '../header/Footer';
import Slider from "react-slick";
import '../assets/scss/Home.scss'; // Adjust the path as necessary

export default function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="home-page">
      <Navbar/>
      <div className="font-sans text-gray-900">
             {/* Hero Section with split design */}
             <div className="bg-gradient-to-r from-blue-900 to-blue-800">
               <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                   {/* Left content */}
                   <Slider {...settings}>
                      <div className="text-center md:text-left">
                        <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">About Dhan-Pravah Finance</h1>
                        <p className="text-lg text-gray-50 leading-relaxed mb-8">
                          For over 25 years, we've been helping clients navigate complex financial landscapes
                          and achieve their goals. Our team of experienced professionals is dedicated to providing
                          personalized service and expert guidance to help you make informed decisions about your
                          financial future.
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                          Our Services
                        </button>
                      </div>
                      </Slider>
                   
                   {/* Right image */}
                   <div className="flex justify-center md:justify-end">
                     <div className="rounded-lg overflow-hidden  border-4 border-transparent">
                       {/* <img src={businesspeople} alt="Financial advisors in meeting" className="w-full h-auto" /> */}
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             {/* Rest of the component remains the same... */}
           </div>
      <Footer/>
    </div>
  );
}