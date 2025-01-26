'use client' ;
import React, { useEffect } from 'react';
import { useParams } from "next/navigation";
// components
import EditBlog from '@/Commponents/EditBlog/EditBlog';
// hook
import { useGetDocs } from '@/hooks/useFirebaseCURD';

const page = () => {
  
  const params = useParams(); 
  const id = params;
  const {getBlogData,blog} = useGetDocs('blogData')

  useEffect(()=>{
    getBlogData(id.blog)
  },[])

  return (
    <>
      {
        blog && <EditBlog blog={blog} id={id.blog}/>
      }
    </>
  )
}


export default page