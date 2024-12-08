import React from 'react';
import Image from 'next/image';
import hero from '../../../../public/hero.webp';
import { Button } from '@material-tailwind/react';

const Hero = () => {
    return (
        <div className="relative group container flex justify-center items-center overflow-hidden max-h-[500px] bg-[#1a0b3a] text-white
         min-h-[550px] rounded-xl gr">
            <div className="  mx-auto text-center">
                <h1 className="text-[40px]  font-[500] mb-4">
                    Welcome to Our Blog
                </h1>
                <p className="text-[18px] mb-6 max-w-[800px]">
                    Discover articles that spark your curiosity, expand your knowledge, and keep you inspired. Whether you're interested in [your niche, e.g., lifestyle, tech, travel], we've got something for everyone!
                </p>
                <Button className="rounded-full border border-white bg-transparent shadow-xl">Explore our blog</Button>
                <Image src={hero} className=' sm:hidden md:hidden lg:block heroImg absolute ' alt='img'></Image>
            </div>
            <div className='sm:hidden md:hidden lg:block p-5 rounded-xl text-[16px] absolute max-w-[300px] right-[20px] top-[50px] bg-white bg-opacity-[0.1] transition-all shadow-xl
             backdrop-blur-[2px] hover:bg-white hover:text-black hover:top-[45px] '>
                Improved Knowledge and Learning Deepen your understanding of various topics through accessible content.
            </div>
            <div className='sm:hidden md:hidden lg:block p-5 rounded-xl text-[16px] absolute max-w-[300px] left-[20px] bottom-[70px] bg-white bg-opacity-[0.1] transition-all shadow-xl
             backdrop-blur-[2px] hover:bg-white hover:text-black hover:bottom-[80px]'>
                Free and Easy Access Enjoy a wide range of content for free, accessible on any device.
            </div>
        </div>
    )
}

export default Hero
