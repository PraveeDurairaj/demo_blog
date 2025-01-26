import React from 'react';
import Image from 'next/image';
import hero from '../../../public/hero.webp';

const Hero = () => {
    return (
        <div className="relative group  flex justify-center items-center overflow-hidden  bg-[#1a0b3a] text-white
         min-h-[600px] md:rounded-b-[20px] shadow-xl ">
            <div className=" mx-auto text-center p-[10px]">
                <h1 className="text-[36px] md:text-[40px]  font-[500] mb-4">
                    Read now Know more
                </h1>
                <p className="text-[16px] md:text-[18px] mb-6 max-w-[800px]">
                    Discover articles that spark your curiosity, expand your knowledge, and keep you inspired. Whether you're interested in [your niche, e.g., lifestyle, tech, travel], we've got something for everyone!
                </p>
                <Image src={hero} className='block heroImg absolute ' alt='img'></Image>
            </div>
            <div className='hidden lg:block p-5 rounded-xl text-[16px] absolute max-w-[300px] right-[20px] top-[50px] bg-white bg-opacity-[0.1] transition-all shadow-xl
             backdrop-blur-[2px] hover:bg-white hover:text-black hover:top-[45px] '>
                Improved Knowledge and Learning Deepen your understanding of various topics through accessible content.
            </div>
            <div className='hidden lg:block p-5 rounded-xl text-[16px] absolute max-w-[300px] left-[20px] bottom-[70px] bg-white bg-opacity-[0.1] transition-all shadow-xl
             backdrop-blur-[2px] hover:bg-white hover:text-black hover:bottom-[80px]'>
                Free and Easy Access Enjoy a wide range of content for free, accessible on any device.
            </div>
        </div>
    )
}

export default Hero
