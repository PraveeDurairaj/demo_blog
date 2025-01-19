'use client';
import React from 'react';
import { useEffect } from 'react';
// helper
import { useUpdateDocs } from '@/hooks/useFirebaseCURD';


const ViewBlog = ({ data, id }) => {

  const { updateBlogData} = useUpdateDocs('blogData');
  useEffect(()=>{
    if (data) {
      data?.viewCount ?  updateBlogData( id, { viewCount: data?.viewCount + 1}) :  updateBlogData( id, { viewCount: 1})
    }
  },[data])

  return (
    <>
      <div className='bg-black flex sm:px-[20px] sm:py-[50px] md:px-[50px] md:py-[80px]'>
        {
          data ? <div className="container relative before:content-[''] before:absolute
          before:w-[5px] before:h-full before:bg-[#FF0000] before:rounded-[20px] before:left-[0]">
            <h1 className='text-[30px] text-white mb-3'>{data?.blogTitle}</h1>
            <p className='text-[18px] text-gray-500'>{data?.blogSubTitle}</p>
          </div> : <div className='w-full'>
            <div className='min-h-[35px] w-full animate-pulse bg-gray-300 rounded-full mb-3' ></div>
            <p className='min-h-[20px] w-2/3 animate-pulse bg-gray-300 rounded-full'></p>
          </div>
        }
      </div>
      <div className='container sm:px-[20px] sm:py-[50px] md:px-[50px] md:pt-[30px] md:pb-[80px]'>
        {
          data?.blogContent.map((content, index) => {
            return (
              <div className='mb-5' key={index}>
                <h2 className='text-[24px] mb-2'>{content?.subHeader}</h2>
                {content?.para1 && <p className='text-[16px] mb-1'>{content?.para1}</p>}
                {content?.para2 && <p className='text-[16px] mb-1'>{content?.para2}</p>}
                {content?.para3 && <p className='text-[16px] mb-1'>{content?.para3}</p>}
              </div>
            )
          })
        }
      </div>
    </>

  )
}

export default ViewBlog
