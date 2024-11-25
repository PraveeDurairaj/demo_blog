import React from 'react'

const BlogCard = ({data}) => {
    // const createdata = data?.blogCreatedDate.toDate()
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6
         border border-gray-50]">
            <h2 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 cursor-pointer mb-2">
                {data?.blogTitle}
            </h2>
            <p className="text-gray-600 text-sm mb-4">{data?.blogSubTitle}</p>
            <div className="flex items-center text-xs text-gray-500">
                {/* <span className="mr-4">{createdata}</span> */}
                <span className="mr-4">{data?.blogReadTime} read</span>
            </div>
        </div>

    )
}

export default BlogCard
