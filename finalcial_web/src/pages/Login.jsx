import React, { useState } from 'react';
import '../assets/scss/Login.scss';
import { AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CiMail } from 'react-icons/ci';
import { RiLockPasswordLine } from 'react-icons/ri';
import {
  LoginSocialGoogle
} from 'reactjs-social-login';

import {
  GoogleLoginButton,
} from 'react-social-login-buttons';

function Login() {
  const [provider, setProvider] = useState('');
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
      <div className="flex w-full bg-blue-50 min-h-screen pt-20">
        <div className="flex flex-col md:flex-row w-full max-w-4xl mx-auto my-8 rounded-xl overflow-hidden shadow-lg relative">
          {/* Background colors - adjusted for flex-col layout on mobile */}
          <div className="absolute inset-0 hidden md:block">
            <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
            <div className="absolute right-0 top-0 w-1/2 h-full bg-white"></div>
          </div>

          {/* Mobile background colors */}
          <div className="absolute inset-0 md:hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800"></div>
          </div>

          {/* Wave SVG divider - only visible on desktop */}
          <div className="absolute inset-0 pointer-events-none hidden md:block">
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

          {/* Mobile wave SVG - horizontal divider */}
          <div className="absolute inset-0 pointer-events-none md:hidden">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0"
            >
              <path
                d="M0,50 Q30,40 60,50 Q100,60 100,50 L100,100 L0,100 Z"
                fill="url(#blue-gradient-mobile)"
                className="drop-shadow-md"
              />
              <defs>
                <linearGradient id="blue-gradient-mobile" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0066cc" />
                  <stop offset="50%" stopColor="#0077e6" />
                  <stop offset="100%" stopColor="#3399ff" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Right Side on desktop / Top on mobile - Welcome message and logo */}
          <div className="w-full md:w-1/2 order-1 md:order-2 p-10 flex flex-col justify-center items-center relative z-10">
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
            </div>
          </div>

          {/* Left Side on desktop / Bottom on mobile - Form */}
          <div className="w-full md:w-1/2 order-2 md:order-1 p-10 z-10">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">Login</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-white text-lg">
                    <CiMail />
                  </div>

                  <input
                    type="text"
                    id="Email"
                    className="peer block w-full rounded-lg border border-white bg-transparent py-3 ps-10 pe-2.5 text-sm text-white appearance-none focus:outline-none focus:ring-0 focus:border-white"
                    placeholder=" "
                  />

                  <label
                    htmlFor="Email"
                    className="absolute start-10 top-3 z-10 origin-[0] -translate-y-4 scale-75 transform px-1 text-sm text-white transition-all duration-300
                    peer-placeholder-shown:start-10
                    peer-placeholder-shown:translate-y-0
                    peer-placeholder-shown:scale-100
                    peer-focus:top-4
                    peer-focus:start-10
                    peer-focus:-translate-y-4
                    peer-focus:scale-75"
                  >
                    Email
                  </label>
                </div>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none text-white text-lg">
                    <RiLockPasswordLine />
                  </div>

                  <input
                    type="text"
                    id="password"
                    className="peer block w-full rounded-lg border border-white bg-transparent py-3 ps-10 pe-2.5 text-sm text-white appearance-none focus:outline-none focus:ring-0 focus:border-white"
                    placeholder=" "
                  />

                  <label
                    htmlFor="password"
                    className="absolute start-10 top-3 z-10 origin-[0] -translate-y-4 scale-75 transform px-1 text-sm text-white transition-all duration-300
                    peer-placeholder-shown:start-10
                    peer-placeholder-shown:translate-y-0
                    peer-placeholder-shown:scale-100
                    peer-focus:top-4
                    peer-focus:start-10
                    peer-focus:-translate-y-4
                    peer-focus:scale-75"
                  >
                    Password
                  </label>
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" id="terms" className="h-4 w-4" required />
                  <label htmlFor="terms" className="text-xs text-white">Remember Me</label>
                </div>

                <div className='flex justify-center'>
                  <button type="button" className="bg-white text-blue-700 font-medium py-2 px-6 rounded-full hover:bg-blue-50">
                    Sign In
                  </button>
                </div>

                <LoginSocialGoogle
                  client_id="1045466982465-hkienvmgnel523u8jgd1m3quspas8q66.apps.googleusercontent.com"
                  scope="openid profile email"
                  discoveryDocs="claims_supported"
                  access_type="offline"
                  onResolve={({ provider, data }) => {
                    setProvider(provider);
                    // Make sure setProfile is defined or modify this
                    // setProfile(data);
                  }}
                  onReject={err => {
                    console.log(err);
                  }}
                >
                  <div className="w-full">
                    <button
                      type="button"
                      className="flex justify-center items-center gap-3 px-4 py-3 text-lg font-semibold text-black bg-white w-full rounded-md shadow-md hover:bg-gray-100 transition"
                    >
                      <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google Icon"
                        className="w-6 h-6"
                      />
                      Sign in with Google
                    </button>
                  </div>
                </LoginSocialGoogle>

                <div className='text-center'>
                  <p className='text-white'>Don't have account?  <Link className='text-blue-200 hover:text-blue-100' to='/signup'>Sign Up</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;