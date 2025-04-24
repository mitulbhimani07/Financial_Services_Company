import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

// Lazy load components
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const News = lazy(() => import('../pages/News'));
const Careers = lazy(() => import('../pages/Careers'));
const WhatWeOffer = lazy(() => import('../pages/WhatWeOffer'));
const Login = lazy(() => import('../pages/Login'));
const Signup = lazy(() => import('../pages/Signup'));
const Contact = lazy(() => import('../pages/Contect'));

export default function Allroutes() {
  return (
    <div>
      <Suspense fallback={
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-500"></div>
        </div>
      }>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/news' element={<News />} />
          <Route path='/whatWeOffer' element={<WhatWeOffer />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Suspense>
    </div>
  );
}