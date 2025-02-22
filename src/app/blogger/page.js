'use client';
import React from "react";
import { useState } from "react";
import Link from 'next/link';
import moment from 'moment';
import { Button, Dialog, DialogHeader, DialogBody, DialogFooter, IconButton, Typography, Card, Alert } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
// helper
import { useFetchCollection } from '@/hooks/useFetchCollection';
import { useDeleteDocs } from "@/hooks/useFirebaseCURD";
// components
import Admin from '../admin/page';

const page = () => {

    const blogdata = useFetchCollection('blogData');
    const { deleteBlogData, deleteState } = useDeleteDocs('blogData');
    const [open, setOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null)
    const TABLE_HEAD = ["No", "Id", "Created date", "Blog title", "View count", "Action", "Update", 'Preview'];

    const handleOpen = (id) => {
        setOpen(!open)
        setDeleteId(id)
    }
    const deleteBlog = () => {
        if (deleteId) {
            deleteBlogData(deleteId && deleteId)
            setOpen(!open)
        }

    }
    return (
        <Admin>
            <h1 className='py-[10px] text-center font-[600] bg-white rounded-[10px] shadow-lg mb-[10px] top-[10px] sticky md:top-0 z-20  backdrop-blur-[100px] bg-opacity-[0.6] '>Manage Blog</h1>
            {
                deleteState &&
                <div className="absolute top-[80px] right-[10px] z-[120] max-w-[300px]">
                    <Alert color="green">blog deleted successfully</Alert>
                </div>
            }
            <Card className="h-auto w-full mt-[20px] md:mt-[0px] rounded-t-[10px] overflow-x-auto">
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
                        {blogdata ?

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
                                                {data?.viewCount ? data?.viewCount : 0}
                                            </Typography>
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50`}>
                                            <Typography color="red" className="cursor-pointer"
                                            >
                                                <Button onClick={() => handleOpen(data?.id)} size="sm">
                                                    Delete
                                                </Button>
                                            </Typography>
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50`}>
                                            <Link href={`/editBlog/${data?.id}`} className="font-medium cursor-pointer text-green-800"
                                            >
                                                Edit
                                            </Link>
                                        </td>
                                        <td className={`${classes} bg-blue-gray-50/50`}>
                                            <Link href={`/blog/${data?.id}`} className="font-medium cursor-pointer text-blue-800" >
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
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((data) => {
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
            <Dialog size="sm" open={open} handler={handleOpen} className="">
                <DialogHeader className="relative m-0 block text-center">
                    <Typography variant="h5" color="blue-gray">
                        Delete Blog
                    </Typography>
                    <IconButton
                        size="md"
                        variant="text"
                        className="!absolute right-3.5 top-[9px]  rounded-full shadow-lg bg-blue-gray-50"
                        onClick={handleOpen}
                    >
                        <XMarkIcon className="h-4 w-4 stroke-2 fill-white" />
                    </IconButton>
                </DialogHeader>
                <DialogBody className="px-2 flex items-center justify-center text-black">
                    If you want to delete your blog
                </DialogBody>
                <DialogFooter>
                    <Button className="ml-auto" onClick={deleteBlog}>
                        Confirm
                    </Button>
                </DialogFooter>
            </Dialog>
        </Admin>

    );
}

export default page