import React from 'react';
import Navbar from '../components/Navbar';
import Playbar from '../components/Playbar';
import Sidebar from '../components/Sidebar';

const BasicLayout = ({ children }) => {
  return (
    <div className='bg-gradient-to-b from-[#2a2a2a] to-black flex justify-center'>
        <div className='w-[40%] mt-10 bg-gradient-to-b from-black to-[#121212] p-16 rounded-2xl'>
          {children} 
        </div>
    </div>
  );
};

export default BasicLayout;