'use client' ;
import React from 'react';
import Link from 'next/link';
// components
import BlogCard from './Commponents/BlogCard/BlogCard';
import Hero from '@/app/Commponents/Hero/Hero';
// hook
import { useFetchCollection } from '@/hooks/useFetchCollection';


const page = () => {
  const blogdata= useFetchCollection('blogData')
  
  return (
    <>
    <div className='my-[50px]'></div>
     <Hero/>
     <div className='my-[50px]'></div>
      <div className='container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        blogdata?.map((cardData,index)=>{
          return(
            <Link href={`/blog/${cardData?.blogTitle}`} key={index}>
               <BlogCard data={cardData} />
              </Link>
           
          )
        })
      }
    </div>    
    <div className='my-[50px]'></div>
    </>
  
  )
}

export default page
