'use client';
import { Button, Alert } from '@material-tailwind/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { useUpdateDoc } from '@/hooks/useUpdateDoc';
import React from 'react'
import Admin from '@/app/admin/page';

const EditBlog = ({ blog, id }) => {
    const router = useRouter();
    const { updateBlogData, updateState } = useUpdateDoc('blogData');
    const [formData, setFormData] = useState({
        title: blog?.blogTitle,
        subtitle: blog?.blogSubTitle,
        readTime: blog?.blogReadTime
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        updateBlogData(
            id,
            {
                blogTitle: formData?.title,
                blogSubTitle: formData?.subtitle,
                blogId: formData?.readTime + 2,
                blogReadTime: formData?.readTime,
            }
        )
        setTimeout(() => { router.back() }, 3000)
    }
    return (
        <Admin>
            <>
            <h1 className='py-[10px] text-center font-[600] bg-white rounded-[10px] shadow-lg mb-[10px] sticky top-0 z-20  backdrop-blur-[50px] bg-opacity-[0.4] '>Edit Blog</h1>
                {
                    updateState &&
                    <div className="absolute top-3 right-0 z-[120] max-w-[300px]">
                        <Alert color="green">blog updated successfully</Alert>
                    </div>
                }
                <form onSubmit={handleSubmit} className='bg-white rounded-lg p-6' >
                    <label htmlFor='title' className="block  text-[18px] text-black mb-1"
                    >Title
                        <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="title"
                        label="Title"
                        name="title"
                        placeholder="Enter title"
                        value={formData?.title}
                        onChange={handleChange}
                        className={`w-full p-3 border border-black rounded-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black`}
                    />
                    <label
                        htmlFor='subTitle'
                        className="block  text-[18px] text-black mb-1"
                    >Subtitle
                        <span className="text-red-500">*</span>
                    </label>

                    <textarea
                        id="subTitle"
                        type="text"
                        name='subtitle'
                        label="Subtitle"
                        placeholder="Enter subtitle"
                        value={formData?.subtitle}
                        onChange={handleChange}
                        className={`w-full p-3 border border-black rounded-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black`}
                    />
                    <label
                        htmlFor='readTime'
                        className="block  text-[18px] text-black mb-1"
                    >Read time
                        <span className="text-red-500">*</span>
                    </label>
                    <input
                        id="readTime"
                        type="number"
                        name='readTime'
                        label="Read time"
                        placeholder="Enter read time"
                        value={formData.readTime}
                        onChange={handleChange}
                        className={`w-full p-3 border border-black rounded-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black `}
                    />
                    <div className='mt-[20px] flex gap-3 justify-end flex-wrap'>
                        <Button type='submit'>
                            Save
                        </Button>
                        <Button onClick={() => { router.back() }}>Cancel</Button>
                    </div>

                </form>
            </>
        </Admin>

    )
}

export default EditBlog
