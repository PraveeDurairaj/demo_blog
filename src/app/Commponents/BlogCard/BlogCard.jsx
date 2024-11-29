'use client'
import React from 'react';

import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";



const BlogCard = ({ data }) => {


   
  // const createdata = data?.blogCreatedDate.toDate()
  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {data?.blogTitle}
        </Typography>
        <Typography className="mb-2">
          {data?.blogSubTitle}
        </Typography>

        <div>
          <Typography>
            {data?.blogReadTime} read
          </Typography>
          {/* <span className="mr-4">{createdata}</span> */}
        </div>
      </CardBody>
      <CardFooter className="pt-0">
        <Button >Read More</Button>
      </CardFooter>
    </Card>

  )
}

export default BlogCard
