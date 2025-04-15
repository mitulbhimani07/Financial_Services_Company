import React from 'react';
import { FaShieldAlt, FaChartLine, FaHandshake, FaUsers } from 'react-icons/fa';
import Navbar from '../header/Navbar';
import Footer from '../header/Footer';

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "CEO & Founder",
      bio: "20+ years in financial services with a focus on wealth management."
    },
    {
      name: "Michael Chen",
      position: "Chief Investment Officer",
      bio: "Expert in global markets and portfolio strategy."
    },
    {
      name: "Michael Chen",
      position: "Chief Investment Officer",
      bio: "Expert in global markets and portfolio strategy."
    },
    {
      name: "Emily Rodriguez",
      position: "Risk Management Director",
      bio: "Specializes in protecting client assets through strategic risk assessment."
    }
  ];

  const values = [
    {
      icon: <FaShieldAlt className="text-orange-500 text-4xl mb-4" />,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our dealings."
    },
    {
      icon: <FaChartLine className="text-orange-500 text-4xl mb-4" />,
      title: "Expertise",
      description: "Our team brings decades of combined financial experience."
    },
    {
      icon: <FaHandshake className="text-orange-500 text-4xl mb-4" />,
      title: "Trust",
      description: "We build lasting relationships based on transparency."
    },
    {
      icon: <FaUsers className="text-orange-500 text-4xl mb-4" />,
      title: "Client Focus",
      description: "Your financial goals are at the center of everything we do."
    }
  ];

  return (
    <>
      <Navbar/>
      <div className="font-sans text-gray-900  mx-auto py-18 px-4 md:px-8 ">
        {/* Header Section */}
        <div className="text-center mb-16 bg-blue-900">
          <h1 className="text-white text-4xl font-bold mb-8">About Our Financial Firm</h1>
          <p className="text-xl max-w-4xl mx-auto text-white">
            For over 25 years, we've been helping clients navigate complex financial landscapes 
            with personalized strategies and expert guidance.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-blue-600 text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            To empower our clients through comprehensive financial solutions that grow and protect 
            their wealth while maintaining the highest standards of integrity and professionalism.
          </p>
        </div>

        {/* Team Section */}
        <h1 className="text-center text-3xl font-bold mb-8">Meet Our Leadership Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:translate-y-[-5px] hover:shadow-lg"
            >
              <h3 className="text-blue-900 text-xl font-bold mb-2">{member.name}</h3>
              <div className="text-orange-500 font-bold mb-4">{member.position}</div>
              <p className="text-gray-700">{member.bio}</p> 
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="bg-blue-900 text-white p-8 rounded-lg">
          <h2 className="text-center text-3xl font-bold mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-white text-blue-900 text-center p-6 rounded-lg"
              >
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}