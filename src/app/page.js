'use client' ;
import React from 'react';
import Blog from './Commponents/Blog/Blog';
import Hero from './Commponents/Hero/Hero';



const page = () => {

  
  return (
    <>
    <Hero/>
    <div className='my-[50px]'></div>
     <Blog/>
     <div className='my-[50px]'></div>
    </>
  
  )
}

export default page
