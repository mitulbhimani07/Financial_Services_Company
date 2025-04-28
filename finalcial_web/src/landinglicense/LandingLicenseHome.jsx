import React from 'react'

function LandingLicenseHome() {

  const services = [
    {
      icon: "📋",
      title: "New License Application",
      description: "Complete handling of your initial lending license application with regulatory bodies."
    },
    {
      icon: "🔄",
      title: "License Renewal",
      description: "Timely processing of your license renewal to ensure uninterrupted operations."
    },
    {
      icon: "⚖️",
      title: "Compliance Advisory",
      description: "Ongoing support to maintain compliance with changing financial regulations."
    },
    {
      icon: "📝",
      title: "Document Preparation",
      description: "Professional preparation of all required documents for your application."
    },
    {
      icon: "🔍",
      title: "Regulatory Research",
      description: "Detailed analysis of current regulations in your target jurisdictions."
    },
    {
      icon: "🤝",
      title: "Representation",
      description: "Acting as your liaison with regulatory authorities throughout the process."
    }
  ];
  
  // Data for process steps
  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We'll discuss your specific needs and assess your requirements for obtaining a lending license.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Document Collection",
      description: "Our team will guide you through gathering all necessary documentation for your application.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Application Submission",
      description: "We'll prepare and submit your complete application package to the appropriate regulatory bodies.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Follow-up & Approval",
      description: "We'll manage all communications with regulators until your license is approved.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="font-sans bg-gray-50">
    {/* Navigation */}
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">FinLicensePro</div>
        <div className="hidden md:flex space-x-8">
          <a href="#services" className="text-gray-700 hover:text-blue-600">Services</a>
          <a href="#process" className="text-gray-700 hover:text-blue-600">Process</a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
        <button className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>

    {/* Hero Section */}
    <section className="bg-blue-900 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Secure Your Lending License Today</h1>
          <p className="text-xl mb-8">Expert guidance through every step of the licensing process for financial institutions</p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition">
              Apply Now
            </button>
            <button className="border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
            alt="Finance professionals" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>

    {/* Services Section */}
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Our Licensing Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section id="process" className="py-20 bg-gray-50">
  <div className="container max-w-7xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Our Simple 4-Step Process</h2>
    <div className="relative">
      {/* Timeline connector for desktop view */}
      <div className="hidden md:block absolute top-0 left-1/2 h-full w-1 bg-blue-800 transform -translate-x-1/2 z-0"></div>
      
      {processSteps.map((step, index) => (
        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-16 items-center justify-center`}>
          <div className="md:w-1/2 mb-8 md:mb-0 px-4 md:px-12">
            <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto md:mx-0 relative z-10">
              {index + 1}
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-center md:text-left text-gray-800">{step.title}</h3>
            <p className="text-gray-600 text-center md:text-left">{step.description}</p>
          </div>
          <div className="md:w-1/2 px-4 md:px-12">
            <img 
              src={step.image} 
              alt={step.title} 
              className="rounded-lg shadow-md w-full max-w-md mx-auto" 
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    {/* CTA Section */}
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Your Lending License?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Our team of experts is standing by to help you navigate the licensing process quickly and efficiently.</p>
        <button className="bg-white text-blue-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition">
          Start Your Application
        </button>
      </div>
    </section>

    {/* Footer */}
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FinLicensePro</h3>
            <p className="text-gray-400">Expert lending license services for financial institutions.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">License Application</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">License Renewal</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Compliance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">123 Finance Street</p>
            <p className="text-gray-400 mb-2">New York, NY 10001</p>
            <p className="text-gray-400 mb-2">info@finlicensepro.com</p>
            <p className="text-gray-400">(555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} FinLicensePro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default LandingLicenseHome