'use client' ;
import React, { useEffect } from 'react';
import { useParams } from "next/navigation";
// components
import ViewBlog from '@/Commponents/ViewBlog/ViewBlog';
// hook
import { useGetDocs } from '@/hooks/useFirebaseCURD';



const page = () => {
  const params = useParams(); 
  const id = params;
  const {getBlogData,blog} = useGetDocs('blogData')
  useEffect(()=>{
    getBlogData(id.view)
  },[])

  return (
    <>
      <ViewBlog data={blog} id={id.view}/>
    </>
  )
}


export default page
