'use client'
import React from 'react';
import moment from 'moment';

import {
  Card,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";



const BlogCard = ({ data, fetch }) => {

  const createdata = data?.blogCreatedDate.toDate()
  const date = moment(createdata && createdata).format('YYYY-MM-DD'); // "2024-11-22"
  return (
    <>
      {fetch ? <Card className={"w-full h-auto shadow-lg" }>
        <CardBody className='p-4'>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {data?.blogTitle}
          </Typography>
          <Typography className="mb-2">
            {data?.blogSubTitle}
          </Typography>

          <div className='flex  justify-between'>
            <Typography>{data?.blogReadTime} min read</Typography>
            <Typography className='bg-gray-200 rounded-full px-[10px] py-[4px] text-[14px]'>{date}</Typography>
          </div>
        </CardBody>
          <Button className='rounded-b-xl rounded-t-[0px]' >Read More</Button>
      </Card> :
        <div className='animate-pulse  rounded-lg bg-gray-300 h-[250px]'>

        </div>
      }


    </>



  );
}



export default BlogCard
