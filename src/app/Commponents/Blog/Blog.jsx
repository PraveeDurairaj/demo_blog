import React from 'react';
import Link from 'next/link';
// components
import BlogCard from '../BlogCard/BlogCard';
// hook
import { useFetchCollection } from '@/hooks/useFetchCollection';

const Blog = () => {
    const blogdata= useFetchCollection('blogData');
  return (
    <div className='container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {
        blogdata?.map((cardData,index)=>{
          return(
            <Link href={`/blog/${cardData?.id}`} key={index}>
               <BlogCard data={cardData} fetch={blogdata}  />
              </Link>
           
          )
        })
      }
    </div>   
  )
}

export default Blog
