'use client';
import Link from "next/link";
import { useState } from "react";


const Sidebar = () => {
  const [show, setShow] = useState(false)
  const handleClick = () => {
    return (
        setShow(!show)
    )
   
}
// const currentpath = window?.location?.pathname ;
  return (
    <div className="md:w-64 bg-black text-white shadow-md  flex flex-col p-4  sm:min-h-[50px] md:h-full sm:w-full sm:absolute  md:static sm:rounded-s-[0px] md:rounded-e-[30px]">
      <div className=" sm:flex sm:justify-between md:hidden">
      <span className="text-center text-white">Admin</span>
      <span className="w-[30px] h-[30px] bg-white rounded-full" onClick={handleClick}></span>
      </div>

      <div className={show ? 'sm:flex flex-col' : 'sm:hidden md:block' }>
        <Link href="/" className="flex px-[15px] py-[5px] rounded-[5px] bg-white/30 backdrop-blur-lg mb-2">
          <span>Dashboard</span>
        </Link>
        <Link href="/createBlog" className={"flex px-[15px] py-[5px] rounded-[5px] bg-white/30 backdrop-blur-lg mb-2 "}>
          <span>Manage Blog</span>
        </Link>
        <Link href="/settings" className="flex px-[15px] py-[5px] rounded-[5px] bg-white/30 backdrop-blur-lg mb-2">
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;

