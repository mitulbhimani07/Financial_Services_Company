import React, { useState } from 'react'
import { Menu, X, CreditCard, Users, BookOpen, Home, Info, Phone, FileText } from 'lucide-react';

function MicrofinanceNavbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white text-black shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <CreditCard className="h-8 w-8 mr-2" />
            <div>
              <h1 className="text-xl font-bold">MicroFinance</h1>
              <p className="text-xs text-black">Empowering Communities</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="flex items-center text-black ">
              
              Home
            </a>
            <a href="/about" className="flex items-center text-black">
             
              About Us
            </a>
            <a href="/services" className="flex items-center text-black">
             
              Services
            </a>
            <a href="/success-stories" className="flex items-center text-black">
            
              Success Stories
            </a>
            <a href="/education" className="flex items-center text-black">
            
              Financial Education
            </a>
            <a href="/contact" className="flex items-center text-black">
             
              Contact
            </a>
          </nav>

          {/* Apply Button */}
          <div className="hidden md:block">
            <a href="/apply" className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md font-medium">
              Apply Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              <a href="/" className="flex items-center text-emerald-100 hover:text-white">
                <Home className="h-4 w-4 mr-2" />
                Home
              </a>
              <a href="/about" className="flex items-center text-emerald-100 hover:text-white">
                <Info className="h-4 w-4 mr-2" />
                About Us
              </a>
              <a href="/services" className="flex items-center text-emerald-100 hover:text-white">
                <FileText className="h-4 w-4 mr-2" />
                Services
              </a>
              <a href="/success-stories" className="flex items-center text-emerald-100 hover:text-white">
                <Users className="h-4 w-4 mr-2" />
                Success Stories
              </a>
              <a href="/education" className="flex items-center text-emerald-100 hover:text-white">
                <BookOpen className="h-4 w-4 mr-2" />
                Financial Education
              </a>
              <a href="/contact" className="flex items-center text-emerald-100 hover:text-white">
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </a>
              <a 
                href="/apply" 
                className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md font-medium text-center"
              >
                Apply Now
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default MicrofinanceNavbar