import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import About from './sections/About'
import Stats from './sections/Stats'
import Dishes from './sections/dishes'
import Features from './sections/Features'
import BookingProcess from './sections/BookingProcess'
import SpecialOffers from './sections/Specialoffer'
import OpeningHours from './sections/Openinghour'
import TestimonialSection from './sections/TestimonialSection'


const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <About/>
    <Stats/>
    <Dishes/>
    <Features/>
    <BookingProcess/>
    <SpecialOffers/>
    <OpeningHours/>
    <TestimonialSection/>
    
    
   
      
    </>
  )
}

export default App
