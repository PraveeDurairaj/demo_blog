'use client';
import { Button, Alert } from '@material-tailwind/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { useUpdateDoc } from '@/hooks/useUpdateDoc';
import { serverTimestamp } from 'firebase/firestore';
import React from 'react'
import Admin from '@/app/admin/page';

const Form = ({ formIndex, handleRemove, formData, handleInputChange }) => {
    return (
        <div className="border  rounded-sm mb-5 border-black p-4  bg-white relative gap-5 sm:grid grid-cols-1">

            {
                formIndex >= 1 && <button
                    onClick={() => handleRemove(formData.id)}
                    className="absolute top-[-12px] right-[-8px] rounded-full w-7 h-7 p-[0px] bg-black text-white text-[12px]"
                >
                    X
                </button>
            }

            <textarea
                type="text"
                name={`subHeader_${formIndex}`}
                value={formData.subHeader}
                onChange={(e) => handleInputChange(formIndex, e)}
                placeholder="Enter sub header "
                className={`w-full p-3 border border-black rounded-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black`}
            />
            <textarea
                type="text"
                name={`para1_${formIndex}`}
                value={formData.para1}
                onChange={(e) => handleInputChange(formIndex, e)}
                placeholder="Enter description 1"
                className={`w-full p-3 border border-black rounded-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black`}
            />
            <textarea
                type="text"
                name={`para2_${formIndex}`}
                value={formData.para2}
                onChange={(e) => handleInputChange(formIndex, e)}
                placeholder="Enter description 2"
                className={`w-full p-3 border border-black rounded-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black`}
            />
            <textarea
                type="text"
                name={`para3_${formIndex}`}
                value={formData.para3}
                onChange={(e) => handleInputChange(formIndex, e)}
                placeholder="Enter description 3"
                className={`w-full p-3 border border-black rounded-sm focus:outline-none focus:ring-1 focus:ring-black focus:border-black`}
            />
        </div>
    );
};

const EditBlog = ({ blog, id }) => {
    const router = useRouter();
    const { updateBlogData, updateState } = useUpdateDoc('blogData');
    const [formData, setFormData] = useState({
        title: blog?.blogTitle,
        subtitle: blog?.blogSubTitle,
        readTime: blog?.blogReadTime
    });
    const [forms, setForms] = useState(blog.blogContent);
  
    const handleAddForm = () => {
        setForms([
            ...forms,
            { id: Date.now(), subHeader: "", para1: "", para2: "", para3: "" },
        ]);
    };

    const handleRemoveForm = (id) => {
        setForms(forms.filter((form) => form.id !== id));
    };

    const handleInputChange = (index, event) => {
        const newForms = [...forms];
        newForms[index][event.target.name.split('_')[0]] = event.target.value;
        setForms(newForms);
    };
    // ------------------------------------
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
                blogCreatedDate: serverTimestamp(),
                blogContent:[  ...forms ]
            }
        )
        setTimeout(() => { router.back() }, 3000)
    }
  
    return (
        <Admin>
            <>
            <h1 className='py-[10px] text-center font-[600] bg-white rounded-[10px] shadow-lg mb-[10px] sm:top-[10px] sticky md:top-0 z-20  backdrop-blur-[100px] bg-opacity-[0.6] '>Edit Blog</h1>
                {
                    updateState &&
                    <div className="absolute top-[80px] right-[10px] z-[120] max-w-[300px]">
                        <Alert color="green">blog updated successfully</Alert>
                    </div>
                }
                <form onSubmit={handleSubmit} className='bg-white rounded-lg p-6 sm:mt-[20px] md:mt-[0px]'>
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
                    {/* ----------------------------- */}
                    <div className="w-full mx-auto mb-5 shadow-lg mt-[10px]">
                        {forms?.map((form, index) => (
                            <Form
                                key={index}
                                formIndex={index}
                                formData={form}
                                handleRemove={handleRemoveForm}
                                handleInputChange={handleInputChange}
                            />
                        ))}
                        <Button
                            onClick={handleAddForm}
                            disabled={forms.length == 5 ? true : false}
                        >
                            Add
                        </Button>
                        {forms.length == 5 && <p className="text-red-600">you reach maximum limeted content </p>}
                    </div>


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
