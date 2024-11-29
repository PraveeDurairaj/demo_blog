'use client';
import Link from "next/link";
// import { useState } from "react";


// const Sidebar = () => {
//   const [show, setShow] = useState(false)
//   const handleClick = () => {
//     return (
//         setShow(!show)
//     )
   
// }
// // const currentpath = window?.location?.pathname ;
//   return (
//     <div className="md:w-64 bg-black text-white shadow-md  flex flex-col p-4  sm:min-h-[50px] md:h-full sm:w-full sm:absolute  md:static sm:rounded-s-[0px] md:rounded-e-[30px]">
//       <div className=" sm:flex sm:justify-between md:hidden">
//       <span className="text-center text-white">Admin</span>
//       <span className="w-[30px] h-[30px] bg-white rounded-full" onClick={handleClick}></span>
//       </div>

//       <div className={show ? 'sm:flex flex-col' : 'sm:hidden md:block' }>
//         <Link href="/" className="flex px-[15px] py-[5px] rounded-[5px] bg-white/30 backdrop-blur-lg mb-2">
//           <span>Dashboard</span>
//         </Link>
//         <Link href="/createBlog" className={"flex px-[15px] py-[5px] rounded-[5px] bg-white/30 backdrop-blur-lg mb-2 "}>
//           <span>Manage Blog</span>
//         </Link>
//         <Link href="/settings" className="flex px-[15px] py-[5px] rounded-[5px] bg-white/30 backdrop-blur-lg mb-2">
//           <span>Settings</span>
//         </Link>
//       </div>
//     </div>
    
//   );
// };
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
 
export function Sidebar() {
  return (
    <Card className="h-full w-full max-w-[20rem] p-2 shadow-xl shadow-blue-gray-900/5 bg-gray-300 rounded-s-[0px] rounded-e-[30px] max-w-[250px]">
      <List >
      <Link href="/">
        <ListItem className={'bg-white text-black hover:bg-black hover:text-white'} >
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        </Link>
      
        <Link href="/createBlog" >
        <ListItem className={'bg-white text-black hover:bg-black hover:text-white'}>
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

