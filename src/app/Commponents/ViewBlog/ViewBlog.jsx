import React from 'react';

const ViewBlog = ({data}) => {
  return (
    <div className='bg-black flex sm:px-[20px] sm:py-[50px] md:px-[50px] md:py-[80px]'>
      <div className="container relative before:content-[''] before:absolute
       before:w-[5px] before:h-full before:bg-[#FF0000] before:rounded-[20px] before:left-[0]">
        <h1 className='text-[30px] text-white mb-3'>{data?.blogTitle}</h1>
        <p className='text-[18px] text-gray-500'>{data?.blogSubTitle}</p>
      </div>
    </div>
  )
}

export default ViewBlog
