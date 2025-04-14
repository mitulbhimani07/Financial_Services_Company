import React from 'react';
import styles from '../assets/scss/About.module.scss';
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
      icon: <FaShieldAlt className={styles.valueIcon} />,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our dealings."
    },
    {
      icon: <FaChartLine className={styles.valueIcon} />,
      title: "Expertise",
      description: "Our team brings decades of combined financial experience."
    },
    {
      icon: <FaHandshake className={styles.valueIcon} />,
      title: "Trust",
      description: "We build lasting relationships based on transparency."
    },
    {
      icon: <FaUsers className={styles.valueIcon} />,
      title: "Client Focus",
      description: "Your financial goals are at the center of everything we do."
    }
  ];

  return (
    
    <>
      <Navbar/>
      <div className={styles.about}>
      <div className={styles.header}>
        <h1>About Our Financial Firm</h1>
        <p>
          For over 25 years, we've been helping clients navigate complex financial landscapes 
          with personalized strategies and expert guidance.
        </p>
      </div>

      <div className={styles.mission}>
        <h2>Our Mission</h2>
        <p>
          To empower our clients through comprehensive financial solutions that grow and protect 
          their wealth while maintaining the highest standards of integrity and professionalism.
        </p>
      </div>


      <h1 className='text-center mb-8' style={{fontSize:'30px'}}>Meet Our Leadership Team</h1>
      <div className={styles.team}>
        
        {teamMembers.map((member, index) => (
          <div key={index} className={styles.member}>
            <h3>{member.name}</h3>
            <div className={styles.position}>{member.position}</div>
            <p>{member.bio}</p> 
          </div>
        ))}
      </div>

      <div className={styles.values}>
        <h2 style={{fontSize:'30px'}}>Our Core Values</h2>
        <div className={styles.valueList}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueItem}>
              <div className='flex justify-center'>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>


    <Footer/>
    </>
  );
}