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
  

  return (
    <Card className="sm:min-h-[50px] sm:fixed md:static top-0 md:min-h-full md:h-screen w-full sm:max-w-full rounded-none p-2  md:max-w-[250px] backdrop-filter backdrop-blur-xl bg-opacity-0 z-[100]">
      <div className=" sm:flex sm:justify-between md:hidden">
        <span className="text-center text-black">Blogger</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-[30px] h-[30px]"  onClick={handleClick}>
          <path  d="M2 3.75A.75.75 0 0 1 2.75 3h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75Zm0 4.167a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 4.166a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Zm0 4.167a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
        </svg>
      </div>

      <List className={show ? 'sm:flex flex-col' : 'sm:hidden md:flex'} >
        <Link href="/blogger">
          <ListItem className={`bg-white hover:bg-white 
             text-black ${pathname == '/blogger' && 'bg-black text-white hover:bg-black hover:text-white focus:text-white focus:bg-black active:text-white active:bg-black'}`} >
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Manage Blog
          </ListItem>
        </Link>
        <Link href="/createBlog" >
          <ListItem className={`bg-white hover:bg-white 
             text-black ${pathname == '/createBlog' && 'bg-black text-white hover:bg-black hover:text-white focus:text-white focus:bg-black active:text-white active:bg-black'}`}>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Create Blog
          </ListItem>
        </Link>
      </List>
    </Card>
  );
}

export default Sidebar;

