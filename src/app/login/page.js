'use client'
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import loginImg from '../../../public/login.jpg';
import profile from '../../../public/profile.jpg';


const Page = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    };
    const navigateBlogger = (url) => {
        if (typeof window !== 'undefined') {
            if (email == 'praveen1526@gmail.com' && password == 'dp261516') {
                window.location.href = url
                setError(false)
            } else {
                setError(true)
            }

        }
    }

    return (
        <div className="grid md:h-[600px] grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 p-3 ">
            <Image src={loginImg} className="w-full h-full border rounded-[10px] object-cover hidden md:block" alt="login" />
            <div className="h-full w-full bg-white p-3 border  gradient-border  rounded-[10px] shadow-lg  ">
                <div className="py-[60px]">
                    <Image src={profile} className="w-[100px] h-[100px] object-0--1  mx-auto mb-[20px] rounded-[100px] border  object-cover" alt="profile" />

                    <h1 className="text-center text-[20px] md:text-[28px] mb-[20px]">Login</h1>
                    <form className="max-w-[420px] m-auto">
                        <input
                            id="email"
                            type="email"
                            name='email'
                            value={email}
                            onChange={handleEmailChange}
                            placeholder="Enter your email"
                            className={`w-full mb-4 p-3 h-[45px] border border-black rounded-[5px] focus:outline-none focus:ring-1 focus:ring-black focus:border-black `}
                        />
                        <input
                            id="password"
                            type="password"
                            name='password'
                            value={password}
                            onChange={handlePasswordChange}
                            placeholder="Enter your password"
                            className={`w-full mb-4 p-3 h-[45px] border border-black rounded-[5px] focus:outline-none focus:ring-1 focus:ring-black focus:border-black `}
                        />

                        <Button onClick={() => navigateBlogger('/blogger')} className="normal-case w-full  font-[400] text-[16px] py-[10px] rounded-[5px]  opacity-100">Login</Button>
                        {
                            error && <div className="border border-[red] p-3 bg-black text-[red] mt-4 rounded-[10px] ">kindly enter valid credential mota</div>
                        }
                    </form>
                </div>

            </div>

        </div>
    )
}
export default Page