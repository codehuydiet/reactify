import React from 'react'
import { Lib } from '../data'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { GoPlus } from "react-icons/go";
import { Button } from '../components'
import { IoIosSearch } from "react-icons/io";
import { IoIosApps } from "react-icons/io";
import { listMusic } from '../data/dummy';

const Sidebar = () => {
  const isActiveSidebar = true
  return (
    <div className={`p-3 flex flex-col  bg-main-bg2 rounded-md h-full m-2 ${isActiveSidebar ? 'w-[22rem] md:w-[26rem]' : 'w-[4.5rem] items-center'}`}>
      <div className='px-1 hover:text-white flex items-center justify-between'>
        <div className='flex items-center gap-1'>
          <div className='w-[40px] h-[40px] flex justify-center items-center'>
            <TooltipComponent cssClass='custom-tooltip2' content={isActiveSidebar ? "Collapse Your Library" : "Expand Your Library"} position='TopCenter'>
              <Lib color={"#b3b3b3"} width={'24px'} height={'24px'} isActiveSidebar={isActiveSidebar} />
            </TooltipComponent>
          </div>
          <div className={`text-base font-bold text-[#b3b3b3] ${isActiveSidebar ? '' : 'hidden'}`}>
            <p>Your Library</p>
          </div>
        </div>
        <div className={`text-2xl text-[#b3b3b3] ${isActiveSidebar ? '' : 'hidden'}`}>
          <TooltipComponent cssClass='custom-tooltip2' content={"Create playlist or folder"} position='TopCenter'>
            <GoPlus />
          </TooltipComponent>
        </div>
      </div>
      <div className='py-4 pl-1'>
        <Button title={'Playlists'} colors={"#2a2a2a"} />
      </div>
      <div className='flex items-center justify-between px-3'>
        <div className='text-icon-color hover:text-white text-2xl'>
          <TooltipComponent cssClass='custom-tooltip2' content={'Search in Your Library'} position='Top Center'>
            <button className='w-[34px] h-[34px] hover:bg-[#3b3b3b] flex items-center justify-center rounded-full'>
              <IoIosSearch />
            </button>
          </TooltipComponent>
        </div>
        <button className='custom-recent h-8 flex text-icon-color hover:text-white items-center gap-1'>
          <p className='text-sm '>Recents</p>
          <IoIosApps className='w-[24px] h-[24px]' />
        </button>
      </div>
      <div className='gap-2 w-full h-full'>
        {listMusic.map((item, index) => {
          <div key={index} className='flex'>
            <div>
              <img src={item.image} alt="" width={'48px'} height={'48px'}/>
            </div>
            <div className='flex flex-col'>
              <p>{item.name}</p>
              <div className='flex'>
                <p>{item.type}</p>.
                <p>{item.author}</p>
              </div>
            </div>
          </div>
        })}
      </div>
    </div >
  )
}

export default Sidebar