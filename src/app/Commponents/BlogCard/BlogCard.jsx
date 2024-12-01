'use client'
import React, { useState } from 'react';
import moment from 'moment';

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";



const BlogCard = ({ data, fetch }) => {

  const createdata = data?.blogCreatedDate.toDate()
  const date = moment(createdata && createdata).format('YYYY-MM-DD'); // "2024-11-22"
  return (
    <>
      {fetch ? <Card className={"w-full h-auto"}>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {data?.blogTitle}
          </Typography>
          <Typography className="mb-2">
            {data?.blogSubTitle}
          </Typography>

          <div className='flex  justify-between'>
            <Typography>
              {data?.blogReadTime} read
            </Typography>
            <span className="mr-4">{date}</span>
          </div>
        </CardBody>
        <CardFooter className="pt-0">
          <Button >Read More</Button>
        </CardFooter>
      </Card> :
        <div className='animate-pulse  rounded-lg bg-gray-300 h-[250px]'>

        </div>
      }


    </>



  );
}



export default BlogCard
