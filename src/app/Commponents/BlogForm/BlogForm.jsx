'use client';
import { useState } from 'react';
// components
import InputField from '../InputField/InputField';
// helper 
import { useAddDos } from '@/hooks/useAddDos';

import { Button } from '@material-tailwind/react';


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

const BlogForm = () => {

    const [forms, setForms] = useState([
        { id: Date.now(), subHeader: "", para1: "", para2: "", para3: "" },
    ]);
    const [counter, setCounter] = useState(1);

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
    const handleAddForm = () => {
        setForms([
            ...forms,
            { id: Date.now(), subHeader: "", para1: "", para2: "", para3: "" },
        ]);
        setCounter(counter + 1);
        console.log(forms)
    };


    const handleRemoveForm = (id) => {
        setForms(forms.filter((form) => form.id !== id));
    };

    const handleInputChange = (index, event) => {
        const newForms = [...forms];
        newForms[index][event.target.name.split('_')[0]] = event.target.value;
        setForms(newForms);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        addBlogData(
            {
                blogTitle: formData?.title,
                blogSubTitle: formData?.subtitle,
                blogId: formData?.readTime + 2,
                blogReadTime: formData?.readTime,
                blogContent:{...forms}
            }
        )
        setFormData({
            title: "",
            subtitle: "",
            readTime: "",
        })

        setForms([{ id: Date.now(), subHeader: "", para1: "", para2: "", para3: "" }])
        setCounter(1)
        console.log(formData,'sucess')
    };

    return (
        <div className="w-full mx-auto  p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold mb-6">Create a Blog</h1>
            <form onSubmit={handleSubmit}>
                <div className='grid sm:grid-cols-1 gap-5'>
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
                <h1 className="text-2xl font-bold mb-6">Content</h1>
                <div className="w-full mx-auto mb-5 shadow-lg ">
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
export default BlogForm

