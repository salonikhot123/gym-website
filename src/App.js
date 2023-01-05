import React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Plans from './components/plans/Plans';
import Programs from './components/program/Programs';
import Reasons from './components/reasons/Reason';
import Testimonial from './components/testimonials/Testimonial';
function App(){
  return(
    <div className='App'>
    <Hero/>
    <Programs/>
    <Reasons/>
    <Plans/>
    <Testimonial/>
    <Join/>
    <Footer/>
    </div>
  )
}
export default App;