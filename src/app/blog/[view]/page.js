'use client' ;
import React, { useEffect } from 'react';
import { useParams } from "next/navigation";
// components
import BlogCard from '@/app/Commponents/BlogCard/BlogCard';
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
      <BlogCard data={blog && blog } fetch={blog && true}/>
    </div>
  )
}


export default page
