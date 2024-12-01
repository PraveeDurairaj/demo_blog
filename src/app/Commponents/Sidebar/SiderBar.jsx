'use client';
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

export function Sidebar() {
  const pathname = usePathname();
  const [show, setShow] = useState(false)
  const handleClick = () => {
    return (
        setShow(!show) 
    )
}
console.log(pathname)

  return (
    <Card className="sm:min-h-[50px] sm:fixed md:static top-0 md:min-h-full md:h-screen w-full sm:max-w-full rounded-none p-2  md:max-w-[250px] backdrop-filter backdrop-blur-xl bg-opacity-0">
      <div className=" sm:flex sm:justify-between md:hidden">
        <span className="text-center text-white">Admin</span>
        <span className="w-[30px] h-[30px] bg-white rounded-full" onClick={handleClick}></span>
      </div>
      <List className={show ? 'sm:flex flex-col' : 'sm:hidden md:flex' } >
        <Link href="/dashboard">
          <ListItem className={`bg-white hover:bg-white 
             text-black ${pathname == '/dashboard' && 'bg-black text-white hover:bg-black hover:text-white focus:text-white focus:bg-black active:text-white active:bg-black'}`} >
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Dashboard
          </ListItem>
        </Link>
        <Link href="/createBlog" >
          <ListItem className={`bg-white hover:bg-white 
             text-black ${pathname == '/createBlog' && 'bg-black text-white hover:bg-black hover:text-white focus:text-white focus:bg-black active:text-white active:bg-black'}`}>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Manage Blog
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}

export default Sidebar;

