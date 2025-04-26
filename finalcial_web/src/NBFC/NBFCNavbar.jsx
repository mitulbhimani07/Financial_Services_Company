import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa'

function NBFCNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-2xl text-green-700">NBFC Financial</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/nbfc" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium">
              Home
            </Link>
            <div className="relative">
              <button 
                onClick={() => setProductsOpen(!productsOpen)}
                className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium flex items-center"
              >
                Products
                <FaChevronDown className="ml-1 h-4 w-4" />
              </button>
              {productsOpen && (
                <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link to="/nbfc/loans" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Corporate Loans</Link>
                  <Link to="/nbfc/fixed-deposits" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Fixed Deposits</Link>
                  <Link to="/nbfc/vehicle-finance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Vehicle Finance</Link>
                  <Link to="/nbfc/personal-loans" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Personal Loans</Link>
                </div>
              )}
            </div>
            <Link to="/nbfc/about" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium">
              About Us
            </Link>
            <Link to="/nbfc/contact" className="text-gray-700 hover:text-green-600 px-3 py-2 rounded-md font-medium">
              Contact
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/nbfc/login" className="text-green-600 hover:text-green-800 font-medium">
              Login
            </Link>
            <Link to="/nbfc/apply" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
              Apply Now
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-700 hover:text-green-600"
            >
              {isOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/nbfc" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600 rounded-md">
              Home
            </Link>
            <button 
              onClick={() => setProductsOpen(!productsOpen)}
              className="w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600 rounded-md flex justify-between items-center"
            >
              Products
              <FaChevronDown className={`h-4 w-4 transform ${productsOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            {productsOpen && (
              <div className="pl-6 space-y-1">
                <Link to="/nbfc/loans" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  Corporate Loans
                </Link>
                <Link to="/nbfc/fixed-deposits" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  Fixed Deposits
                </Link>
                <Link to="/nbfc/vehicle-finance" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  Vehicle Finance
                </Link>
                <Link to="/nbfc/personal-loans" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                  Personal Loans
                </Link>
              </div>
            )}
            <Link to="/nbfc/about" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600 rounded-md">
              About Us
            </Link>
            <Link to="/nbfc/contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 hover:text-green-600 rounded-md">
              Contact
            </Link>
            <div className="pt-4 border-t border-gray-200">
              <Link to="/nbfc/login" className="block px-3 py-2 text-green-600 hover:bg-gray-100 rounded-md">
                Login
              </Link>
              <Link to="/nbfc/apply" className="block mt-2 px-3 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NBFCNavbar