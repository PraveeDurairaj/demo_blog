'use client' ;
import React, { useEffect } from 'react';
import { useParams } from "next/navigation";
// components

// hook
import { useFetchDocs } from '@/hooks/useFetchDocs';
import EditBlog from '@/app/Commponents/EditBlog/EditBlog';



const page = () => {
  const params = useParams(); 
  const id = params;

  const {getBlogData,blog} = useFetchDocs('blogData')

  useEffect(()=>{
    getBlogData(id.blog)
  },[])



  return (
    <div>
      {
        blog && <EditBlog blog={blog} id={id.blog}/>
      }
      
    </div>
  )
}


export default page