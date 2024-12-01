'use client' ;
import React, { useEffect } from 'react';
import { useParams } from "next/navigation";
// components
import ViewBlog from '@/app/Commponents/ViewBlog/ViewBlog';
// hook
import { useFetchDocs } from '@/hooks/useFetchDocs';



const page = () => {
  const params = useParams(); 
  const id = params;
  const {getBlogData,blog} = useFetchDocs('blogData')

  useEffect(()=>{
    getBlogData(id.view)
  },[])

  return (
    <div>
      <ViewBlog data={blog && blog}/>
    </div>
  )
}


export default page
