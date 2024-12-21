
import Sidebar from '@/app/Commponents/Sidebar/SiderBar';

export default function Admin({children}) {
  return (
    <div className="flex h-full sm:flex-col md:flex-row  gap-x-2">
      <Sidebar />
      <div className='sm:mt-[60px] md:mt-[0px] p-[10px] overflow-y-auto max-h-screen w-full  '>
      {children}
      </div>
      
    </div>
  );
}
