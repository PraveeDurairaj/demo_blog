'use client';
import React from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { Alert } from "@material-tailwind/react";
import moment from 'moment';
import { useFetchCollection } from '@/hooks/useFetchCollection';
import { useDeleteDos } from '@/hooks/useDeleteDos';
import Admin from '../admin/page';
import Link from 'next/link';

const TABLE_HEAD = ["No", "Id", "Created date", "Blog title", "View count", "Action","Update", 'Preview'];



const page = () => {
    const blogdata = useFetchCollection('blogData');
    const { deleteBlogData, deleteState } = useDeleteDos('blogData');

    return (
        <Admin>
           <h1 className='py-[10px] text-center font-[600] bg-white rounded-[10px] shadow-lg mb-[10px] sticky top-0 z-20  backdrop-blur-[50px] bg-opacity-[0.4] '>Manage Blog</h1>
            {
                deleteState &&
                <div className="absolute top-3 right-[10px] z-[120] max-w-[300px]">
                    <Alert color="red">blog deleted successfully</Alert>
                </div>
            }
            <Card className="h-auto w-full rounded-t-[10px] overflow-x-auto">
                <table className="w-full min-w-[800px] table-auto text-center">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-b border-blue-gray-100 bg-black p-4 min-w-[150px]">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-80 text-white"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {  blogdata ?
                        
                            blogdata?.map((data, index) => {
                                const isLast = index === blogdata?.length - 1;
                                const classes = isLast ? "p-4 max-w-[200px] break-words" : "p-4 border-b border-blue-gray-50 max-w-[200px] break-words";
                                const createdata = data?.blogCreatedDate.toDate()
                                const date = moment(createdata && createdata).format('YYYY-MM-DD');
                                return (
                                    <tr key={index} className='even:bg-blue-gray-50/50'>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {index + 1}
                                            </Typography>
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50`}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {data?.id}
                                            </Typography>
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50`}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {date && date}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {data?.blogTitle}
                                            </Typography>
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50`}>
                                            <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                                -
                                            </Typography>
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50`}>
                                            <Typography  variant="small" color="red" className="font-medium cursor-pointer"
                                                onClick={() => deleteBlogData(data?.id)}>
                                                Delete
                                            </Typography>
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50`}>
                                            <Link  href={`/editBlog/${data?.id}`}  className="font-medium cursor-pointer text-green-800"
                                                >
                                                Edit
                                            </Link>
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50`}>
                                            <Link href={`/blog/${data?.id}`}  className="font-medium cursor-pointer text-blue-800" >
                                                View
                                            </Link>
                                        </td>
                                    </tr>
                                )
                            })
                        
                        : 
                        
                            [1, 2, 3, 4, 5, 6,].map((data) => {
                                return (
                                    <tr className='even:bg-blue-gray-50/50' key={data}>
                                        {[1, 2, 3, 4, 5, 6, 7,8].map((data) => {
                                            return (
                                                <td className='w-[100px] h-[50px] p-2' key={data}>
                                                    <p className='animate-pulse bg-gray-300 w-full h-full rounded-sm'></p>
                                                </td>
                                            )
                                        })
                                        }
                                    </tr>
                                )
                            })
                        
                    }
                    </tbody>
                </table>
            </Card>
        </Admin>

    );
}

export default page