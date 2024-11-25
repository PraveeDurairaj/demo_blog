import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
            <div className="relative container flex justify-center items-center bg-gradient-to-r from-violet-200 to-pink-200
        py-20  min-h-[550px] rounded-xl">
                <div className="relative  mx-auto text-center">
                    <h1 className="text-3xl sm:text-5xl font-semibold mb-4">
                        Welcome to Our Blog
                    </h1>
                    <p className="text-lg sm:text-xl mb-6">
                        Discover insightful articles and inspiring stories across various topics.
                    </p>
                    <a className="inline-block bg-white text-gray-800 py-3 px-6 rounded-full font-semibold text-md hover:bg-gray-200 transition">
                        Explore Our Blog
                    </a>
                </div>
            </div>
    )
}

export default Hero
