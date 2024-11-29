'use client';
import { useState } from 'react';
// components
import InputField from '../InputField/InputField';
// helper 
import { useAddDos } from '@/hooks/useAddDos';


export default function BlogForm() {
    // import firebase common hook
    const { addBlogData, error } = useAddDos('blogData')
    const [formData, setFormData] = useState({
        title: '',
        subtitle: '',
        readTime: '',
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
        addBlogData(
            {
                blogTitle: formData?.title,
                blogSubTitle: formData?.subtitle,
                blogId: formData?.readTime + 2,
                blogReadTime: formData?.readTime
            }
        )
    };

    return (
        <div className="w-full mx-auto  p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Create a Blog</h1>
            <form onSubmit={handleSubmit}>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5'>
                    <InputField
                        id="title"
                        label="Title"
                        name="title"
                        placeholder="Enter title"
                        value={formData.title}
                        onChange={handleChange}
                        required={true}
                        textarea={true}
                    />
                    <InputField
                        id="subTitle"
                        type="text"
                        name='subtitle'
                        label="Subtitle"
                        placeholder="Enter subtitle"
                        value={formData.subtitle}
                        onChange={handleChange}
                        required={true}
                        textarea={true}
                    />
                    <InputField
                        id="readTime"
                        type="number"
                        name='readTime'
                        label="Read time"
                        placeholder="Enter read time"
                        value={formData.readTime}
                        onChange={handleChange}
                        required={true}
                    />
                </div>
                <div className='flex justify-end'>
                    <button
                        type="submit"
                        className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg
   hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    >
                        Submit
                    </button>
                    {
                        error && <p>check console</p>
                    }
                </div>

            </form>
        </div>
    );
}

