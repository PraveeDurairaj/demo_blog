
import Sidebar from '@/Commponents/Sidebar/SiderBar';

export default function Admin({children}) {
  return (
    <div className="flex h-full flex-col md:flex-row  gap-x-2">
      <Sidebar />
      <div className='pt-[50px] md:mt-[0px] md:pt-[10px] p-[10px] overflow-y-auto max-h-screen w-full  '>
      {children}
      </div>
      
    </div>
  );
}
