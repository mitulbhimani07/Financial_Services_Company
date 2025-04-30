import React, { useState } from 'react';

import {
  FaShieldAlt, FaChartLine, FaHandshake, FaUsers, FaBuilding, FaHistory, FaCheck, FaStar, FaEnvelope,
  FaPhone, FaHeadset, FaNewspaper, FaPlus, FaArrowRight, FaLinkedin, FaTwitter, FaInstagram
} from 'react-icons/fa';

import Navbar from '../header/Navbar';
import Footer from '../header/Footer';
import modernbusinesscenter from '../assets/images/business.jpg'; // Adjust the path as necessary
import businesspeople from '../assets/images/businesspeople.png'; // Adjust the path as necessary

export default function About() {
  // State for chart interaction
  const [hoveredPoint, setHoveredPoint] = useState(null);
  // State for contact card hover
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);


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

    const startPoint = `M0,${300 - points[0].value * 3}`;
    const linePath = points.map((data, index) =>
      `L${(index + 1) * 100},${300 - data.value * 3}`
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
      description: 'Connect with our Sales team for product information, pricing details, or a personalized demo to help your business grow.',
      bgColor: 'bg-blue-500',
      hoverBgColor: 'bg-blue-600'
    },
    {
      id: 'support',
      title: 'Technical support',
      icon: <FaHeadset className="text-xl" />,
      description: 'Need help with setup or troubleshooting? Our technical support team is available 24/7 to assist you with any issues.',
      bgColor: 'bg-green-500',
      hoverBgColor: 'bg-green-600'
    },
    {
      id: 'media',
      title: 'Media inquiries',
      icon: <FaNewspaper className="text-xl" />,
      description: 'For interviews, press releases, or other media-related questions, get in touch with our PR and media communications team.',
      bgColor: 'bg-cyan-500',
      hoverBgColor: 'bg-cyan-600'
    }
  ];

  // Team members data with online image links
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Financial Advisor",
      bio: "With over 15 years of experience, Sarah specializes in retirement planning and investment strategies.",
      imageUrl: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI1LTAxL3Jhd3BpeGVsX29mZmljZV8zM19waG90b19yZWFsX2luZGlhbl9idXNpbmVzc193b21hbl90aGVfaW1hZ2VfaV85Y2E0ZTUwYy02Yzg4LTQwNTYtODg5Mi1kYTk0MDY2YTc4NDRfMi5qcGc.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        email: "sarah@dhanpravah.com",
        phone: "+1-555-123-4567"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Tax Specialist",
      bio: "Michael helps clients navigate complex tax situations with precision and expertise.",
      imageUrl: "https://static.vecteezy.com/system/resources/previews/024/354/242/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        email: "michael@dhanpravah.com",
        phone: "+1-555-234-5678"
      }
    },
    {
      id: 3,
      name: "Amanda Rivera",
      position: "Wealth Manager",
      bio: "Amanda creates personalized wealth management strategies tailored to each client's goals.",
      imageUrl: "https://t4.ftcdn.net/jpg/06/12/73/89/360_F_612738927_LIcFCiKHQhHq9R1QhkVRKvT6RelYUmgv.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#",
        email: "amanda@dhanpravah.com",
        phone: "+1-555-345-6789"
      }
    },
  ];

  return (
    <>
      <Navbar />
      <div className="font-sans text-gray-900">
        {/* Full-Width Screenshot-Style Banner with Chart - Removed border, added shadow */}
        <div className="w-full py-8 md:py-16">
          <div className="max-w-full mx-auto">
            <div className="bg-white rounded-lg overflow-hidden">
              {/* Banner Content - Full width with expanded container */}
              <div className="container mx-auto px-4 md:px-10 lg:px-16 py-8 md:py-12 mt-10">
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
                          d={`M0,${300 - chartData[0].value * 3} ${chartData.map((data, index) => `L${(index + 1) * 100},${300 - data.value * 3}`).join(' ')}`}
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
                          d={`M0,${300 - chartData[0].value * 3} ${chartData.map((data, index) => `L${(index + 1) * 100},${300 - data.value * 3}`).join(' ')} L1200,300 L0,300 Z`}
                          fill="url(#chartGradient)"
                        />

                        {/* Interactive Data points with hover functionality */}
                        {chartData.map((data, index) => (
                          <g key={index}>
                            {/* Invisible larger circle for better hover detection */}
                            <circle
                              cx={(index + 1) * 100}
                              cy={300 - data.value * 3}
                              r="15"
                              fill="transparent"
                              onMouseEnter={() => handlePointHover(index)}
                              onMouseLeave={handlePointLeave}
                              style={{ cursor: 'pointer' }}
                            />

                            {/* Visible data point */}
                            <circle
                              cx={(index + 1) * 100}
                              cy={300 - data.value * 3}
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
                                  x={(index + 1) * 100 - 25}
                                  y={300 - data.value * 3 - 40}
                                  width="50"
                                  height="28"
                                  rx="4"
                                  fill="#1e40af"
                                />
                                <text
                                  x={(index + 1) * 100}
                                  y={300 - data.value * 3 - 20}
                                  textAnchor="middle"
                                  fill="white"
                                  fontSize="12"
                                  fontWeight="bold"
                                >
                                  {data.month}: {data.value}%
                                </text>
                                {/* Triangle pointer */}
                                <path
                                  d={`M${(index + 1) * 100 - 6},${300 - data.value * 3 - 12} L${(index + 1) * 100 + 6},${300 - data.value * 3 - 12} L${(index + 1) * 100},${300 - data.value * 3 - 4} Z`}
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

        {/* Screenshot-Style Contact Section */}
        <div className="bg-gray-100 py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {contactCards.map((card) => (
                <div
                  key={card.id}
                  className="relative bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 group"
                >
                  {/* Icon popup on hover */}
                  <div className="absolute -top-6 left-6 transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="w-14 h-14 bg-green-500 text-white rounded shadow-lg flex items-center justify-center">
                      {card.icon}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="pt-12 px-6 pb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{card.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">
                      {card.description}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                    >
                      Contact us
                      <FaArrowRight className="ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Meet Our Team Section - Replacing Mission Section */}
        <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block">
                <h2 className="text-3xl font-bold text-blue-800">Meet Our Expert Team</h2>
                <div className="h-1 w-24 bg-blue-600 mt-2 mx-auto"></div>
              </div>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Our experienced professionals are dedicated to providing the highest level of service and expertise to help you achieve your financial goals.
              </p>
            </div>

            {/* Use max-w-screen-lg to reduce overall width and center the grid */}
            <div className="max-w-screen-lg mx-auto">
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="group relative rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl max-w-sm mx-auto w-full"
                  >
                    {/* Image container - taller height */}
                    <div className="relative h-96 overflow-hidden">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      {/* Social icons that appear on hover - positioned at the bottom of the image */}
                      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-3 py-3 bg-gradient-to-t from-blue-900/80 to-transparent transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <a href={member.social.linkedin} className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-800 hover:text-white text-blue-800 transition-colors duration-300">
                          <FaLinkedin />
                        </a>
                        <a href={member.social.twitter} className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-400 hover:text-white text-blue-400 transition-colors duration-300">
                          <FaTwitter />
                        </a>
                        <a href={member.social.instagram} className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-pink-600 hover:text-white text-pink-600 transition-colors duration-300">
                          <FaInstagram />
                        </a>
                      </div>
                    </div>

                    {/* Content area with left-to-right overlay effect */}
                    <div className="relative bg-white overflow-hidden">
                      {/* Default content - visible by default */}
                      <div className="p-5 transition-transform duration-500 group-hover:translate-x-full">
                        <h3 className="text-lg font-bold text-blue-900">{member.name}</h3>
                        <div className="flex items-center space-x-2 my-1">
                          <div className="h-0.5 w-8 bg-blue-800"></div>
                          <p className="text-blue-800 text-xs font-semibold">{member.position}</p>
                        </div>
                        <p className="text-gray-600 text-xs mt-2">{member.bio}</p>
                      </div>

                      {/* Overlay content - slides in from left on hover */}
                      <div className="absolute inset-0 bg-blue-800 p-5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                        <div className="h-full flex flex-col justify-between">
                          {/* Top section with name and position */}
                          <div>
                            <h3 className="text-lg font-bold text-white">{member.name}</h3>
                            <div className="flex items-center mt-1">
                              <div className="h-0.5 w-8 bg-blue-300"></div>
                              <p className="ml-2 text-blue-200 text-xs font-medium">{member.position}</p>
                            </div>
                          </div>

                          {/* Middle section with contact details */}
                          <div className="my-3">
                            <a href={`mailto:${member.social.email}`} className="flex items-center text-blue-100 hover:text-white transition-colors duration-300 mb-2">
                              <FaEnvelope className="mr-2 text-xs" />
                              <span className="text-xs">{member.social.email}</span>
                            </a>
                            <a href={`tel:${member.social.phone}`} className="flex items-center text-blue-100 hover:text-white transition-colors duration-300">
                              <FaPhone className="mr-2 text-xs" />
                              <span className="text-xs">{member.social.phone}</span>
                            </a>
                          </div>

                          {/* Bottom section with view profile button */}
                          <button className="py-2 w-full bg-white text-blue-800 rounded text-xs font-medium flex items-center justify-center hover:bg-blue-100 transition-colors duration-300">
                            View Profile <FaArrowRight className="ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}