
import Sidebar from '@/app/Commponents/Sidebar/SiderBar';

export default function Admin({children}) {
  return (
    <div className="flex h-[600px]  gap-x-5">
      <Sidebar />
      <div className='p-5 overflow-y-auto max-sm:h-[600px] w-full'>
      {children}
      </div>
      
    </div>
  );
}
