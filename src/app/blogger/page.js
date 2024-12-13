'use client';
import React from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { Alert } from "@material-tailwind/react";
import moment from 'moment';
import { useFetchCollection } from '@/hooks/useFetchCollection';
import { useDeleteDos } from '@/hooks/useDeleteDos';
import Admin from '../admin/page';
import Link from 'next/link';

const TABLE_HEAD = ["No", "Id", "Created date", "Blog title", "View count", "Action",'Preview'];



const page = () => {
    const blogdata = useFetchCollection('blogData');
    const { deleteBlogData, deleteState } = useDeleteDos('blogData');

    return (
        <Admin>
             {
                    deleteState &&
                     <div className="absolute top-3 right-0 z-[120] max-w-[300px]">
                        <Alert color="red">blog deleted successfully</Alert>
                    </div>
                }
            <Card className="h-full w-full rounded-t-[10px] overflow-x-auto">
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
                        {
                            blogdata?.map((data, index) => {
                                const isLast = index === blogdata?.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
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
                                            <Link href={`/blog/${data?.id}`}  className="font-medium cursor-pointer text-blue-800" >
                                                View
                                            </Link>
                                        </td>
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