import React from 'react';
import Navbar from '../components/Navbar';
import Playbar from '../components/Playbar';
import Sidebar from '../components/Sidebar';

const PageLayout = ({ children }) => {
  return (
    <div className='overflow-x-auto min-w-[49rem] relative min-h-[35rem] h-[100vh] bg-main-bg text-white'>
      <div className='min-w-[49rem] w-full h-14 flex items-center z-50 bg-main-bg'>
        <Navbar />
      </div>
      <div className='min-w-[49rem] absolute bottom-0 w-full flex items-center z-50 bg-main-bg'>
        <Playbar />
      </div>
      <div className="flex flex-1 min-h-[calc(35rem-10.8rem)] h-[calc(100vh-10.8rem)] self-stretch">
        <div className='relative'>
          <Sidebar className='' />
        </div>
        <div className='flex-1'>
          {children} 
        </div>
      </div>
    </div>
  );
};

export default PageLayout;