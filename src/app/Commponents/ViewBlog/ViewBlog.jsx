'use client';
import React, { useState } from 'react';
import { useEffect } from 'react';
// helper
import { useUpdateDocs } from '@/hooks/useFirebaseCURD';
import Footer from '../Footer/Footer';


const ViewBlog = ({ data, id }) => {
const [loading ,setLoading] = useState(true)
  const { updateBlogData} = useUpdateDocs('blogData');
  useEffect(()=>{
    if (data) {
      setLoading(false)
      data?.viewCount ?  updateBlogData( id, { viewCount: data?.viewCount + 1}) :  updateBlogData( id, { viewCount: 1})
    }
  },[data])

  return (
    <>
      <div className=' bg-block bg-gradient-to-r from-purple-500 to-purple-900'>
        {
          !loading ? <div className="container py-[15px] md:py-[30px] lg:py-[80px]">
            <h1 className='text-[30px] text-white  mb-3 font-[500]'>{data?.blogTitle}</h1>
            <p className='text-[16px] text-white'>{data?.blogSubTitle}</p>
          </div> : <div className='container py-[15px] md:py-[30px] lg:py-[50px]'>
            <div className='min-h-[35px] w-full animate-pulse bg-gray-300 rounded-full mb-3' ></div>
            <p className='min-h-[20px] w-2/3 animate-pulse bg-gray-300 rounded-full'></p>
          </div>
        }
      </div>
      <div className='container my-[20px] md:my-[50px]'>
        
     {!loading ? (data?.blogContent.map((content, index) => {
            return (
              <div className='mb-5' key={index}>
                <h3 className=' text-[20px] md:text-[24px] mb-[12px] font-[500]'>{content?.subHeader}</h3>
                {content?.para1 && <p className=' text-[14px] md:text-[16px] mb-[6px]'>{content?.para1}</p>}
                {content?.para2 && <p className=' text-[14px] md:text-[16px] mb-[6px]'>{content?.para2}</p>}
                {content?.para3 && <p className=' text-[14px] md:text-[16px] mb-[6px]'>{content?.para3}</p>}
              </div>
            )
          })):<div className='h-[500px] w-full animate-pulse bg-gray-300 rounded-[10px]'></div>
          }
        
      </div>
      <Footer/>
    </>

  )
}

export default ViewBlog
