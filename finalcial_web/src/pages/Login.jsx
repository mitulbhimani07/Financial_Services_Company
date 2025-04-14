import React, { useState } from 'react';
import '../assets/scss/Login.scss';
import { AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar'; // Adjust the path as needed

function Login() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      {/* Navbar is imported as a component */}
      {/* <Navbar /> */}
      
      {/* Main content - add top padding to avoid navbar overlap */}
      <div className="flex w-full bg-blue-50 min-h-screen pt-20">
        <div className="flex w-full max-w-4xl mx-auto my-8 rounded-xl overflow-hidden shadow-lg relative">
          {/* Background colors */}
          <div className="absolute inset-0">
            <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
            <div className="absolute right-0 top-0 w-1/2 h-full bg-white"></div>
          </div>
          
          {/* Wave SVG divider */}
          <div className="absolute inset-0 pointer-events-none">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0"
            >
              <path
                d="M50,0 Q60,30 50,60 Q40,100 50,100 L0,100 L0,0 Z"
                fill="url(#blue-gradient)"
                className="drop-shadow-md"
              />
              <defs>
                <linearGradient id="blue-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0066cc" />
                  <stop offset="50%" stopColor="#0077e6" />
                  <stop offset="100%" stopColor="#3399ff" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          
          {/* Left Side - Form */}
          <div className="w-1/2 p-10 z-10">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Login</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* <div className="relative">
                  <label htmlFor="name" className="text-sm text-white mb-1 block">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-full bg-white text-gray-800 pr-10"
                    value={formData.name}
                    onChange={handleChange}
                  />
           
                </div> */}
                
                <div className="relative">
                  <label htmlFor="email" className="text-sm text-white mb-1 block">E-mail Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your mail"
                    className="w-full p-3 rounded-full bg-white text-gray-800 pr-10"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {/* <AlertCircle className="absolute right-3 top-9 text-orange-500" size={20} /> */}
                </div>
                
                <div className="relative">
                  <label htmlFor="password" className="text-sm text-white mb-1 block">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    className="w-full p-3 rounded-full bg-white text-gray-800 pr-10"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {/* <AlertCircle className="absolute right-3 top-9 text-orange-500" size={20} /> */}
                </div>
                
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="h-4 w-4" />
                  {/* <label htmlFor="terms" className="text-xs text-white">By signing up, I agree to <span className="underline">Terms & Conditions</span></label> */}
                  <label htmlFor="terms" className="text-xs text-white">Remember Me</label>
                </div>

                <div className='flex justify-center'>
                <button type="button" className="bg-white text-blue-700 font-medium py-2 px-6 rounded-full hover:bg-blue-50">
                    Sign In
                  </button>
                </div>

                <div className='text-center'>
                    <p className='text-white'>Don't have account?  <Link className='text-blue-200 hover:text-blue-100' to='/signup'>Sign Up</Link></p>
                </div>
                
                <div className="flex gap-4">
                  {/* <button type="submit" className="bg-black text-white font-medium py-2 px-6 rounded-full">
                    Sign Up
                  </button> */}
                  {/* <button type="button" className="bg-white text-gray-800 font-medium py-2 px-6 rounded-full">
                    Sign In
                  </button> */}
                </div>
              </form>
            </div>
          </div>
          
          {/* Right Side - Welcome message and logo */}
          <div className="w-1/2 p-10 flex flex-col justify-center items-center relative z-10">
            <div className="text-center space-y-6">
              <h2 className="text-lg font-medium text-gray-700">Welcome to</h2>
              <div className="flex justify-center mb-4">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-lg flex items-center justify-center text-3xl font-bold">
                  E<span className="text-xs align-text-top">P</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-800">EasyPay</h1>
              <p className="text-sm text-gray-500 max-w-xs mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
              
              {/* <div className="absolute bottom-6 flex gap-2 justify-center w-full left-0">
                <div className="h-2 w-2 rounded-full bg-orange-400"></div>
                <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                <div className="h-2 w-2 rounded-full bg-gray-300"></div>
              </div> */}
            </div>
            
            {/* <div className="absolute bottom-4 right-4 text-xs text-gray-400">
              <span>POWERED BY</span> <span className="font-semibold">COMPANY NAME</span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;