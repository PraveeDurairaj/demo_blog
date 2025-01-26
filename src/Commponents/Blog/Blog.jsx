import React from 'react';
import Link from 'next/link';
// components
import BlogCard from '../BlogCard/BlogCard';
// hook
import { useFetchCollection } from '@/hooks/useFetchCollection';

const Blog = () => {
  const blogdata = useFetchCollection('blogData');
  return (
    <>
      {blogdata ?
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            blogdata?.map((cardData, index) => {
              return (
                <Link href={`/blog/${cardData?.id}`} key={index}>
                  <BlogCard data={cardData} />
                </Link>
              )
            })
          }
        </div>
        :
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-[50px]'>
          {[1, 2, 3].map((data) => {
            return (
              <div className='min-h-[250px] border bg-gray-50 p-4 rounded-[10px]' key={data}>
                <h5 className='min-h-[25px] w-full animate-pulse bg-gray-300 rounded-full mb-3' ></h5>
                <p className='min-h-[80px] w-full animate-pulse bg-gray-300 rounded-[5px] mb-[30px]' ></p>
                <div className='flex justify-between mb-3'>
                  <span className='h-[30px] bg-gray-300 rounded-full w-[100px] animate-pulse'></span>
                  <span className='h-[30px] bg-gray-300 rounded-full w-[100px] animate-pulse'></span>
                </div>
                <p className='min-h-[40px] w-full animate-pulse bg-gray-300 rounded-[5px]'></p>
              </div>
            )
          })}
        </div>
      }
    </>

  )
}

export default Blog
