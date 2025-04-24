import React, { useState } from 'react';
import { FaShieldAlt, FaChartLine, FaHandshake, FaUsers, FaBuilding, FaHistory, FaCheck, 
         FaPhone, FaHeadset, FaNewspaper, FaArrowRight } from 'react-icons/fa';

import Navbar from '../header/Navbar';
import Footer from '../header/Footer';  
import modernbusinesscenter from '../assets/images/business.jpg'; // Adjust the path as necessary
import businesspeople from '../assets/images/businesspeople.png'; // Adjust the path as necessary

export default function About() {
  // State for chart interaction
  const [hoveredPoint, setHoveredPoint] = useState(null);
  // State for contact card hover
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Static chart data - no animation
  const chartData = [
    { month: 'Jan', value: 30 },
    { month: 'Feb', value: 25 },
    { month: 'Mar', value: 35 },
    { month: 'Apr', value: 40 },
    { month: 'May', value: 35 },
    { month: 'Jun', value: 55 },
    { month: 'Jul', value: 50 },
    { month: 'Aug', value: 65 },
    { month: 'Sep', value: 60 },
    { month: 'Oct', value: 75 },
    { month: 'Nov', value: 65 },
    { month: 'Dec', value: 80 },
  ];
  
  // Function to generate SVG path from points
  const generatePath = (points) => {
    if (points.length === 0) return '';
    
    const startPoint = `M0,${300-points[0].value*3}`;
    const linePath = points.map((data, index) => 
      `L${(index+1)*100},${300-data.value*3}`
    ).join(' ');
    
    return startPoint + ' ' + linePath;
  };

  // Function to handle mouse over chart point
  const handlePointHover = (index) => {
    setHoveredPoint(index);
  };

  // Function to handle mouse leave chart point
  const handlePointLeave = () => {
    setHoveredPoint(null);
  };

  // Contact cards data
  const contactCards = [
    {
      id: 'sales',
      title: 'Sales',
      icon: <FaPhone className="text-xl" />,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
      bgColor: 'bg-blue-500',
      hoverBgColor: 'bg-blue-600'
    },
    {
      id: 'support',
      title: 'Technical support',
      icon: <FaHeadset className="text-xl" />,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
      bgColor: 'bg-green-500',
      hoverBgColor: 'bg-green-600'
    },
    {
      id: 'media',
      title: 'Media inquiries',
      icon: <FaNewspaper className="text-xl" />,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat.',
      bgColor: 'bg-cyan-500',
      hoverBgColor: 'bg-cyan-600'
    }
  ];
  
  return (
    <>
      <Navbar />
      <div className="font-sans text-gray-900">
        {/* Full-Width Screenshot-Style Banner with Chart - Removed border, added shadow */}
        <div className="w-full py-8 md:py-16">
          <div className="max-w-full mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Banner Content - Full width with expanded container */}
              <div className="container mx-auto px-4 md:px-10 lg:px-16 py-8 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left content with additional information */}
                  <div className="flex flex-col justify-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-3 text-gray-800">
                      About <span className="text-blue-600">Dhan-Pravah Finance</span>
                    </h1>
                    <p className="text-gray-600 text-lg md:text-xl mb-6 leading-relaxed">
                      Empowering individuals and businesses to achieve their financial goals through smart money management and personalized solutions.
                    </p>
                    
                    {/* Added content - key features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-gray-700 mb-3">Why Choose Dhan-Pravah Finance?</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <li className="flex items-center text-gray-600">
                          <FaCheck className="text-blue-600 mr-2" /> 25+ Years of Experience
                        </li>
                        <li className="flex items-center text-gray-600">
                          <FaCheck className="text-blue-600 mr-2" /> Personalized Solutions
                        </li>
                        <li className="flex items-center text-gray-600">
                          <FaCheck className="text-blue-600 mr-2" /> Expert Advisory Team
                        </li>
                        <li className="flex items-center text-gray-600">
                          <FaCheck className="text-blue-600 mr-2" /> Transparent Processes
                        </li>
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                        Our Services
                      </button>
                      <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-colors duration-300">
                        Contact Us
                      </button>
                    </div>
                  </div>
                  
                  {/* Right Chart - Static version with hover functionality */}
                  <div className="bg-white rounded-lg border border-gray-200 p-6 h-80">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-semibold text-gray-700">Financial Growth Trends</h3>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
                          <span className="text-sm text-gray-600">Performance</span>
                        </div>
                        <div className="flex items-center">
                          <span className="inline-block w-3 h-3 bg-green-400 rounded-full mr-2"></span>
                          <span className="text-sm text-gray-600">Industry Avg</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Chart visualization */}
                    <div className="relative h-56 w-full mt-2">
                      {/* Grid lines */}
                      <div className="absolute inset-0 grid grid-cols-6 grid-rows-4">
                        {[...Array(5)].map((_, i) => (
                          <div key={`h-${i}`} className="col-span-6 border-t border-gray-100"></div>
                        ))}
                        {[...Array(7)].map((_, i) => (
                          <div key={`v-${i}`} className="row-span-4 border-l border-gray-100"></div>
                        ))}
                      </div>
                      
                      {/* X-axis labels */}
                      <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-gray-400 px-2">
                        <span>Jan</span>
                        <span>Mar</span>
                        <span>May</span>
                        <span>Jul</span>
                        <span>Sep</span>
                        <span>Nov</span>
                      </div>
                      
                      {/* Y-axis labels */}
                      <div className="absolute top-0 left-0 h-full flex flex-col justify-between text-xs text-gray-400 py-1">
                        <span>80%</span>
                        <span>60%</span>
                        <span>40%</span>
                        <span>20%</span>
                        <span>0%</span>
                      </div>
                      
                      {/* The static chart (no animations) */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 300" preserveAspectRatio="none">
                        {/* Secondary line (industry average) */}
                        <path 
                          d="M0,180 L100,190 L200,185 L300,175 L400,180 L500,165 L600,170 L700,160 L800,155 L900,140 L1000,150 L1100,145"
                          fill="none"
                          stroke="#4ade80"
                          strokeWidth="3"
                          strokeDasharray="5,5"
                        />
                        
                        {/* Main blue line - static, no animation */}
                        <path 
                          d={`M0,${300-chartData[0].value*3} ${chartData.map((data, index) => `L${(index+1)*100},${300-data.value*3}`).join(' ')}`}
                          fill="none"
                          stroke="#3b82f6"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        
                        {/* Gradient area under the line */}
                        <defs>
                          <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        
                        {/* Area fill */}
                        <path 
                          d={`M0,${300-chartData[0].value*3} ${chartData.map((data, index) => `L${(index+1)*100},${300-data.value*3}`).join(' ')} L1200,300 L0,300 Z`}
                          fill="url(#chartGradient)"
                        />
                        
                        {/* Interactive Data points with hover functionality */}
                        {chartData.map((data, index) => (
                          <g key={index}>
                            {/* Invisible larger circle for better hover detection */}
                            <circle
                              cx={(index+1)*100}
                              cy={300-data.value*3}
                              r="15"
                              fill="transparent"
                              onMouseEnter={() => handlePointHover(index)}
                              onMouseLeave={handlePointLeave}
                              style={{ cursor: 'pointer' }}
                            />
                            
                            {/* Visible data point */}
                            <circle
                              cx={(index+1)*100}
                              cy={300-data.value*3}
                              r={hoveredPoint === index ? "8" : "6"}
                              fill="#fff"
                              stroke="#3b82f6"
                              strokeWidth="2"
                              className="transition-all duration-200"
                            />
                            
                            {/* Value tooltip on hover */}
                            {hoveredPoint === index && (
                              <g>
                                <rect
                                  x={(index+1)*100 - 25}
                                  y={300-data.value*3 - 40}
                                  width="50"
                                  height="28"
                                  rx="4"
                                  fill="#1e40af"
                                />
                                <text
                                  x={(index+1)*100}
                                  y={300-data.value*3 - 20}
                                  textAnchor="middle"
                                  fill="white"
                                  fontSize="12"
                                  fontWeight="bold"
                                >
                                  {data.month}: {data.value}%
                                </text>
                                {/* Triangle pointer */}
                                <path
                                  d={`M${(index+1)*100 - 6},${300-data.value*3 - 12} L${(index+1)*100 + 6},${300-data.value*3 - 12} L${(index+1)*100},${300-data.value*3 - 4} Z`}
                                  fill="#1e40af"
                                />
                              </g>
                            )}
                          </g>
                        ))}
                      </svg>
                    </div>
                    
                    {/* Added content - Chart note */}
                    <div className="mt-4 text-sm text-gray-500 italic">
                      Our growth has consistently outperformed industry averages over the past year.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* NEW Screenshot-Style Contact Section - Replacing the "Our Story" section */}
        <div className="container mx-auto px-4 py-12">
      {/* Screenshot-style container */}
      {/* <div className="bg-blue-500 rounded-xl shadow-xl p-1 md:p-2 overflow-hidden"> */}
        {/* Browser-style header */}
        
        
        {/* Cards grid */}
        <div className="bg-white p-4 rounded-b-lg grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {contactCards.map((card) => (
            <div 
              key={card.id}
              className="bg-white border border-gray-100 rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card header with icon */}
              <div className={`${hoveredCard === card.id ? card.hoverBgColor : card.bgColor} p-4 transition-colors duration-300`}>
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  {card.icon}
                </div>
              </div>
              
              {/* Card content */}
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-800">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <button className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors duration-300">
                  Contact us <FaArrowRight className="ml-2 text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>
      {/* </div> */}
    </div>

        {/* Mission Section - With Accent Border */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-blue-600">
            <div className="flex items-start">
              <FaBuilding className="text-blue-600 text-4xl mr-6 mt-1 hidden md:block" />
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