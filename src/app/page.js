'use client'
import React from 'react';
import Blog from './Commponents/Blog/Blog';
import Hero from './Commponents/Hero/Hero';
import Footer from './Commponents/Footer/Footer';



const page = () => {

  
  return (
    <>
    <Hero/>
    <div className='my-[50px]'></div>
     <Blog/>
     <div className='my-[50px]'></div>
     <Footer/>
    </>
  
  )
}

export default page
