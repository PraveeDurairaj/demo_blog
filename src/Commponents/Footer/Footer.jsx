import React from 'react';
import Image from 'next/image';
import instaIcon from '../../../public/instagram.png';
import linkedinIcon from '../../../public/linkedin.png';
import emailIcon from '../../../public/gmail.png';
const footerData = [
    {
        id: 1,
        fTitle: 'About',
        fDescription: [
            {
                id: 2,
                text: 'This blog website leverages Next.js for efficient server-side rendering, dynamic routing, and seamless user experience'
            },
            {
                id: 3,
                text: ' The content is powered by Firebase Cloud Database, offering real-time data syncing and easy scalability for posts'
            },
            {
                id: 4,
                text: 'This combination results in a fast, scalable, and user-friendly blogging platform.'
            },
        ]
    },

    {
        id: 3,
        fTitle: 'Contact',
        fDescription: [
            {
                id: 1,
                iconList: [
                    {
                        icon:instaIcon,
                        link:'https://www.instagram.com/mr__idio__/?hl=en',
                        instaIcon:true
                    },
                    {
                        icon:linkedinIcon,
                        link:'https://www.linkedin.com/in/praveendurairaj15/',
                        LinkedInIcon:true
                    },
                    {
                        icon:emailIcon,
                        link:'mailto:praveendurai1516@gmail.com',
                        emailIcon:true
                    }
                ]
            },
        ]
    }
]

const Footer = () => {
    return (
        <div className='bg-black'>
         <div className='container flex justify-between  gap-3 flex-col md:flex-row  text-white py-[50px]' id='footer'  >
            {
                footerData?.map((data) => {
                    return (
                        <div key={data?.id}>
                            <h6 className={`text-[16px] 
                             mb-[15px] text-white`}>{data?.fTitle}</h6>
                            {
                                data?.fDescription?.map((item) => {
                                    return (
                                        <div key={item?.id} className='max-w-[400px]' >
                                            {item?.text && <a href={item?.link} key={item?.id} className='text-[14px] mb-[10px] flex gap-2 items-center justify-start cursor-pointer text-[#70767C] hover:text-theme'>{item?.icon && <Image src={item?.icon} alt='footerIcon' className='w-[15px] h-[15px] themeFilterColor'></Image>}{item?.text} </a>}
                                            {item?.iconList && <div className='flex gap-2'>
                                                {item?.iconList?.map((iconData,index)=>{
                                                    return(
                                                        <a key={index} className='group relative w-[40px] h-[40px] cursor-pointer' href={iconData?.link}>
                                                        <Image  src={iconData?.icon} alt='icon' className={` absolute inset-0 rounded-full object-cover border-[3px] p-[1px] 
                                                            border-transparent ${iconData?.instaIcon && 'group-hover:border-pink-600'} ${iconData?.LinkedInIcon && 'group-hover:border-blue-900'}
                                                            ${iconData?.emailIcon && 'group-hover:border-red-500'}`}></Image>
                                                        </a>
                                                    )
                                                })}
                                            </div>}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
        </div>
        
    )
}

export default Footer