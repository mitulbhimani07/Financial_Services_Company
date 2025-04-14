import React from 'react';
import '../assets/scss/Home.scss';
import { FaChartLine, FaPiggyBank, FaShieldAlt, FaHandshake } from 'react-icons/fa';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import Footer from '../header/Footer';
import Navbar from '../header/Navbar';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const Home = () => {
  const chartData = {
    labels: ['Wealth Mgmt', 'Investments', 'Risk', 'Banking', 'Retirement'],
    datasets: [{
      label: 'Service Distribution',
      data: [10, 20, 30, 40, 50],
      backgroundColor: [
        'rgba(0, 35, 102, 0.7)',
        'rgba(0, 102, 204, 0.7)',
        'rgba(255, 107, 0, 0.7)',
        'rgba(40, 167, 69, 0.7)',
        'rgba(220, 53, 69, 0.7)'
      ],
      borderWidth: 1,
      borderColor: 'rgba(255, 255, 255, 0.5)'
    }]
  };

  const services = [
    {
      icon: <FaChartLine className="text-4xl mb-4 text-blue" />,
      title: "Wealth Management",
      description: "Comprehensive strategies tailored to your unique financial situation and goals."
    },
    {
      icon: <FaPiggyBank className="text-4xl mb-4 text-blue" />,
      title: "Investment Advisory",
      description: "Expert guidance to build and manage your investment portfolio."
    },
    {
      icon: <FaShieldAlt className="text-4xl mb-4 text-blue" />,
      title: "Risk Management",
      description: "Protect your assets with our sophisticated risk assessment tools."
    },
    {
      icon: <FaHandshake className="text-4xl mb-4 text-blue" />,
      title: "Private Banking",
      description: "Exclusive banking services for high-net-worth individuals."
    }
  ];

  const awards = [
    { name: "Best Wealth Management 2023", source: "Financial Times" },
    { name: "Top 10 Private Banks", source: "Global Finance" },
    { name: "AAA Credit Rating", source: "Standard & Poor" },
    { name: "Client Service Excellence", source: "WealthBriefing" }
  ];

  return (
    <>
      <Navbar />
      <div className="text-dark">
        {/* Hero Section */}
        <section className="relative bg-blue-900 text-white">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Your Trusted Partner in <span className="text-orange">Financial Growth</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                  Personalized wealth management solutions to help you achieve your financial goals with confidence and clarity.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 transform hover:-translate-y-1">
                    Get Started Today
                  </button>
                  <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm border border-white/20">
                  <div className="h-64 md:h-80">
                    <PolarArea
                      data={chartData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'bottom',
                            labels: {
                              color: 'white',
                              font: { size: 12 },
                              padding: 20
                            }
                          },
                          tooltip: {
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            titleColor: '#ff6b00',
                            bodyColor: 'white'
                          }
                        },
                        scales: {
                          r: {
                            grid: { color: 'rgba(255,255,255,0.2)' },
                            angleLines: { color: 'rgba(255,255,255,0.2)' },
                            pointLabels: { color: 'white' },
                            ticks: { display: false }
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Financial Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Tailored solutions designed to meet your unique financial needs and aspirations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-2"
                >
                  <div className='flex justify-center'>{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 flex justify-center">{service.title}</h3>
                  <p className="text-gray-600 flex justify-center">{service.description}</p>
                  <div className='flex justify-center'>
                  <a href="#" className="mt-4 inline-block text-blue font-medium hover:underline ">
                    Learn more →
                  </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Trusted By Clients Worldwide</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our commitment to excellence has been recognized by leading industry authorities.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {awards.map((award, index) => (
                <div key={index} className="text-center p-4">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-light text-blue text-3xl flex items-center justify-center">
                    🏆
                  </div>
                  <h3 className="font-semibold mb-1">{award.name}</h3>
                  <p className="text-sm text-gray-600">{award.source}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-blue-900 text-white rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
                  <p className="text-lg">Years of Experience</p>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">$50B+</div>
                  <p className="text-lg">Assets Under Management</p>
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                  <p className="text-lg">Client Retention Rate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control of Your Financial Future?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Schedule a consultation with one of our financial experts today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition duration-300 transform hover:-translate-y-1">
                Book a Consultation
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-lg transition duration-300">
                Call Us Now
              </button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Home;
