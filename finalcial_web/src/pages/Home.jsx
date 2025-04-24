import React, { useEffect, useState } from 'react';
import Navbar from '../header/Navbar';
import Footer from '../header/Footer';
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../assets/scss/Home.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import businesspeople from '../assets/images/businesspeople.png';
import modernbusinesscenter from '../assets/images/business.jpg';
import { RiCustomerService2Line } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa6";
import { FaCalculator } from "react-icons/fa";
import { RiBankFill, RiMoneyDollarCircleLine, RiCalculatorLine, RiBriefcaseLine } from "react-icons/ri";
import { useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { PieChart, Pie, Cell } from 'recharts';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from "aos";
import "aos/dist/aos.css";


export default function Home() {

  const [isHovered, setIsHovered] = useState(null);
  const [flippedCard, setFlippedCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // once:true = animate only first time
  }, []);


  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  

  const [loanAmount, setLoanAmount] = useState(150000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [loanTenure, setLoanTenure] = useState(12);
  const [tenureType, setTenureType] = useState('months'); // months or years
  const [downPayment, setDownPayment] = useState(15000);

  // State for calculated values
  const [emi, setEmi] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  // Handle slider and input changes
  const handleLoanAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setLoanAmount(isNaN(value) ? 0 : value);
  };

  const handleInterestRateChange = (e) => {
    const value = parseFloat(e.target.value);
    setInterestRate(isNaN(value) ? 0 : value);
  };

  const handleLoanTenureChange = (e) => {
    const value = parseInt(e.target.value);
    setLoanTenure(isNaN(value) ? 0 : value);
  };

  const handleTenureTypeChange = (e) => {
    setTenureType(e.target.value);
  };

  const handleDownPaymentChange = (e) => {
    const value = parseFloat(e.target.value);
    setDownPayment(isNaN(value) ? 0 : value);
  };

  // Calculate EMI, total interest, and total amount
  useEffect(() => {
    // Convert tenure to months if it's in years
    const tenureInMonths = tenureType === 'years' ? loanTenure * 12 : loanTenure;

    // Convert interest rate from annual to monthly
    const monthlyInterestRate = interestRate / 100 / 12;

    // Calculate principal after down payment
    const principal = loanAmount - downPayment;

    if (principal > 0 && interestRate > 0 && tenureInMonths > 0) {
      // EMI calculation formula: [P x R x (1+R)^N]/[(1+R)^N-1]
      // Where, P = Principal loan amount, R = Monthly interest rate, N = Loan tenure in months
      const emiValue = principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureInMonths) /
        (Math.pow(1 + monthlyInterestRate, tenureInMonths) - 1);

      setEmi(emiValue);
      setTotalAmount(emiValue * tenureInMonths);
      setTotalInterest(emiValue * tenureInMonths - principal);
    } else {
      setEmi(0);
      setTotalAmount(0);
      setTotalInterest(0);
    }
  }, [loanAmount, interestRate, loanTenure, tenureType, downPayment]);

  // Format currency function
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Data for donut chart
  const chartData = [
    { name: 'Principal Amount', value: loanAmount - downPayment, color: '#4169E1' },
    { name: 'Interest Payable', value: Math.round(totalInterest), color: '#FFD700' },
    { name: 'Taxes', value: Math.round(totalAmount * 0.05), color: '#32CD32' } // Assumed 5% of total as taxes
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Updated stats data with different counter types
  const statsData = [
    { id: 1, label: "SOC 2 Compliance", value: 87, suffix: "%", color: "#10b981", type: "percentage" },
    { id: 2, label: "Happy Clients", value: 9852, suffix: "+", color: "#06b6d4", type: "percentage" },
    { id: 3, label: "Projects Completed", value: 2.5, suffix: "k", color: "#f97316", type: "percentage" },
    { id: 4, label: "ISO 27001", value: 93, suffix: "%", color: "#a855f7", type: "percentage" }
  ];

  const getColorClass = (color) => {
    const colorMap = {
      emerald: "text-emerald-500 border-emerald-400 bg-emerald-50",
      cyan: "text-cyan-500 border-cyan-400 bg-cyan-50",
      orange: "text-orange-500 border-orange-400 bg-orange-50",
      purple: "text-purple-500 border-purple-400 bg-purple-50"
    };
    return colorMap[color] || "text-orange-500 border-orange-400 bg-orange-50";
  };

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
      title: "Empowering Microfinance",
      description: "Empowering small businesses and entrepreneurs with accessible microfinance solutions designed to build lasting financial stability.",
      buttonText: "Get Started",
      buttonlink:'/microfinance',
      bgImage: "https://images.unsplash.com/photo-1620228885847-9eab2a1adddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Financial Landing License",
      description: "Enhance your financial knowledge with our comprehensive learning programs designed to build essential money management skills.",
      buttonText: "Learn More",
      buttonlink:'/landinglicense',
      bgImage: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    },
    {
      title: "Comprehensive NBFC Solutions",
      description: "Access flexible lending solutions, investment opportunities, and specialized financial services through our NBFC division designed to meet diverse financial needs beyond traditional banking.",
      buttonText: "Get Started",
      buttonlink:'/nbfc',
      bgImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === sliderContent.length - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sliderContent.length - 1 : prev - 1));
  };

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
  ];






  return (
    <div className="home-page w-full">
      <Navbar />
      <div className="font-sans text-gray-500 w-full">
        {/* Hero Section with full width design */}
        <div className="bg-white w-full text-black">
          <div className="w-full  py-16 md:py-21">
            <div className=" mx-auto">
              {/* Full section slider */}
              <div className="relative w-full h-full overflow-hidden" style={{ height: "100vh", width: "100%" }}>
      {/* Slides */}
      {sliderContent.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${
            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 w-full h-full">
            {/* Background Image */}
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.bgImage})` }}
            ></div>

                      {/* Overlay */}
                      <div className="absolute inset-0 w-full h-full bg-black opacity-50"></div>
                    </div>

                    {/* Content */}
                    <div className="relative z-20 h-full w-full">
                      <div className="w-full px-4 h-full">
                        <div className="flex items-center justify-center h-full">
                          {/* Center Content - Increased Size */}
                          

  <motion.div
    key={currentSlide} // re-triggers animation on slide change
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -60 }}
    transition={{
      duration: 0.8,
      ease: 'easeInOut',
    }}
    className="text-center text-white w-full max-w-4xl px-6"
  >
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2 }}
      className="text-5xl md:text-6xl font-bold mb-8"
    >
      {slide.title}
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4 }}
      className="text-xl md:text-2xl leading-relaxed mb-10 mx-auto max-w-3xl"
    >
      {slide.description}
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.6 }}
    >
      <Link to={slide.buttonlink}>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-lg transition-colors duration-300 text-xl">
          {slide.buttonText}
        </button>
      </Link>
    </motion.div>
  </motion.div>



                        </div>
                      </div>
                    </div>
                  </div>
                ))}

      {/* Desktop Vertical Navigation - Hidden on mobile/tablet */}
      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex flex-col items-center">
        {/* Up Arrow - Above the numbers */}
        <button
          onClick={goToPrevSlide}
          className="p-2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full transition-all duration-300 mb-4"
        >
          <ChevronUp size={24} />
        </button>

                  {/* Page Numbers */}
                  <div className="flex flex-col items-center space-y-4">
                    {sliderContent.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-8 h-8 flex items-center justify-center rounded-full ${currentSlide === index
                            ? 'bg-orange-500 text-white'
                            : 'bg-white text-gray-700 opacity-70 hover:opacity-100'
                          } transition-all duration-300`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>

        {/* Down Arrow - Below the numbers */}
        <button
          onClick={goToNextSlide}
          className="p-2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full transition-all duration-300 mt-4"
        >
          <ChevronDown size={24} />
        </button>
      </div>

      {/* Mobile/Tablet Bottom Dots Navigation */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center lg:hidden z-30">
        <div className="flex space-x-4">
          {sliderContent.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-orange-500'
                  : 'bg-white opacity-70 hover:opacity-100'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
              {/* End of slider */}
              {/* Services Section */}
              <div className="container mx-auto px-4 py-16">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" data-aos="fade-up" data-aos-delay="400">
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
              {/* ================================= */}
              <div style={{ width: "100% !important" }} className='bg-gray-50' >
                <div className=" py-16 px-4" >
                  <div className="container mx-auto px-4" data-aos="fade-up" data-aos-delay="400">
                    <div className="text-center mb-12" >
                      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Explore a range of services from Dhan-Pravah Finance</h2>
                      <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
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
              </div>
            </div>
          </div>
        </div>
        {/* Rest of the component remains the same... */}

        <div className=" py-16 px-4" data-aos="fade-up" data-aos-delay="400">
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
                      style={{ ...styles.flipCardFace }}
                    >
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl mb-4">
                        <span>{feature.icon}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 text-center">{feature.title}</h3>
                    </div>

                    {/* Back Side */}
                    <div
                      className="flex items-center justify-center rounded-lg bg-amber-600 text-white p-8 shadow-md"
                      style={{ ...styles.flipCardFace, ...styles.flipCardBack }}
                    >
                      <p className="text-center">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Updated Testimonial Section with mixed stats */}
            <div className="mt-16 p-10 bg-gray-50" ref={ref}>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4 text-center ">
                Our Impact By The Numbers
              </h3>
              <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>


              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {statsData.map((stat) => (
                  <div key={stat.id} className="p-4">
                    {stat.type === "percentage" ? (
                      // Circle progress for percentage values
                      <div className="relative">
                        <svg className="w-32 h-32 mx-auto" viewBox="0 0 100 100">
                          {/* Background circle */}
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="#f1f1f1"
                            strokeWidth="10"
                          />
                          {/* Progress circle */}
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke={stat.color}
                            strokeWidth="10"
                            strokeDasharray="283"
                            strokeDashoffset={inView ? 283 - (283 * stat.value) / 100 : 283}
                            strokeLinecap="round"
                            transform="rotate(-90 50 50)"
                            className="transition-all duration-1000 ease-out"
                          />
                          {/* Center text */}
                          <text
                            x="50"
                            y="50"
                            dominantBaseline="middle"
                            textAnchor="middle"
                            fontSize="20"
                            fontWeight="bold"
                            fill="#1e293b"
                          >
                            {inView ? `${stat.value}${stat.suffix}` : "0%"}
                          </text>
                        </svg>
                      </div>
                    ) : (
                      // For regular numbers and decimal values (9852+ and 2.5k)
                      <div className="flex flex-col items-center justify-center">
                        <div className="w-32 h-32 rounded-full bg-blue-50 border-8 border-opacity-20"
                          style={{ borderColor: stat.color }}>
                          <div className="flex items-center justify-center h-full">
                            <div className="text-3xl font-bold" style={{ color: stat.color }}>
                              {inView ? (
                                <CountUp
                                  start={0}
                                  end={stat.value}
                                  duration={2.5}
                                  decimals={stat.type === "decimal" ? 1 : 0}
                                  suffix={stat.suffix}
                                  delay={0.2}
                                />
                              ) : (
                                "0"
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    <p className="text-gray-800 font-medium mt-4">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


        <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto mb-5" data-aos="fade-up" data-aos-delay="400">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">EMI Calculator</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side - Input Form */}
            <div className="space-y-6">
              {/* Loan Amount */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Loan Amount</label>
                  <span className="text-blue-600 font-medium">{formatCurrency(loanAmount)}</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="1000"
                  value={loanAmount}
                  onChange={handleLoanAmountChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>$10,000</span>
                  <span>$500,000</span>
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    value={loanAmount}
                    onChange={handleLoanAmountChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="10000"
                    max="500000"
                  />
                </div>
              </div>

              {/* Down Payment */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Down Payment</label>
                  <span className="text-blue-600 font-medium">{formatCurrency(downPayment)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={loanAmount * 0.5}
                  step="1000"
                  value={downPayment}
                  onChange={handleDownPaymentChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>$0</span>
                  <span>${Math.round(loanAmount * 0.5).toLocaleString()}</span>
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    value={downPayment}
                    onChange={handleDownPaymentChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="0"
                    max={loanAmount * 0.5}
                  />
                </div>
              </div>

              {/* Interest Rate */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Interest Rate (% per annum)</label>
                  <span className="text-blue-600 font-medium">{interestRate}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="0.1"
                  value={interestRate}
                  onChange={handleInterestRateChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>1%</span>
                  <span>20%</span>
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    value={interestRate}
                    onChange={handleInterestRateChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min="1"
                    max="20"
                    step="0.1"
                  />
                </div>
              </div>

              {/* Loan Tenure */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="font-medium text-gray-700">Loan Tenure</label>
                  <span className="text-blue-600 font-medium">{loanTenure} {tenureType}</span>
                </div>
                <div className="flex space-x-4 mb-2">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="months"
                      checked={tenureType === 'months'}
                      onChange={handleTenureTypeChange}
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Months</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      value="years"
                      checked={tenureType === 'years'}
                      onChange={handleTenureTypeChange}
                      className="form-radio h-4 w-4 text-blue-600"
                    />
                    <span className="ml-2 text-gray-700">Years</span>
                  </label>
                </div>
                <input
                  type="range"
                  min={tenureType === 'years' ? '1' : '1'}
                  max={tenureType === 'years' ? '30' : '360'}
                  step="1"
                  value={loanTenure}
                  onChange={handleLoanTenureChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>{tenureType === 'years' ? '1 Year' : '1 Month'}</span>
                  <span>{tenureType === 'years' ? '30 Years' : '360 Months'}</span>
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    value={loanTenure}
                    onChange={handleLoanTenureChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    min={tenureType === 'years' ? '1' : '1'}
                    max={tenureType === 'years' ? '30' : '360'}
                  />
                </div>
              </div>
            </div>

            {/* Right side - Results with visualization */}
            <div>
              {/* EMI Card */}
              <div className="bg-blue-600 rounded-lg p-6 text-white text-center mb-6">
                <div className="text-3xl font-bold mb-1">{formatCurrency(Math.round(emi))}</div>
                <div className="text-sm">EMI per month</div>
              </div>

              {/* Chart Section */}
              <div className="flex justify-center items-center mb-6">
                <div className="relative">
                  <PieChart width={180} height={180}>
                    <Pie
                      data={chartData}
                      cx={90}
                      cy={90}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </div>
                <div className="ml-4">
                  {chartData.map((item, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }}></div>
                      <div className="text-sm">
                        <span className="font-medium">{item.name}</span>
                        <span className="ml-2">{formatCurrency(item.value)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Total Amount</span>
                  <span className="font-medium">{formatCurrency(Math.round(totalAmount))}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Down Payment</span>
                  <span className="font-medium">{formatCurrency(downPayment)}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Tenure</span>
                  <span className="font-medium">{loanTenure} {tenureType}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-200">
                  <span className="text-gray-600">Interest rate</span>
                  <span className="font-medium">{interestRate}%</span>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-6 rounded-md transition-colors duration-300 mt-6">
                Choose your bank
              </button>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}