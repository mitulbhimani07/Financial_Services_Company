import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Careers from '../pages/Careers'
import WhatWeOffer from '../pages/WhatWeOffer'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import { Contact } from 'lucide-react'

export default function Allroutes() {
  return (
    <div>
         <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/careers' element={<Careers/>} />
            <Route path='/news' element={<News/>} />

            <Route path='/whatWeOffer' element={<WhatWeOffer/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
        </Routes>
    </div>
  )
}
