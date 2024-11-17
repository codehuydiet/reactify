import React from 'react'
import { Lib } from '../data'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { GoPlus } from "react-icons/go";
import { Button } from '../components'
import { IoIosSearch } from "react-icons/io";
import { IoIosApps } from "react-icons/io";
import { listMusic, type } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { isActiveSidebar, setIsActiveSidebar } = useStateContext()
  return (
    <div className={`p-3 flex flex-col  bg-main-bg2 rounded-md h-full m-2 ${isActiveSidebar ? 'w-[22rem] md:w-[26rem]' : 'w-[4.5rem] items-center'}`}>
      <div className='px-1 hover:text-white flex items-center justify-between'>
        <div className='flex items-center gap-1'>
          <div className='w-[40px] h-[40px] flex justify-center items-center'>
            <TooltipComponent cssClass='custom-tooltip2' content={isActiveSidebar ? "Collapse Your Library" : "Expand Your Library"} position='TopCenter'>
              <button onClick={() => setIsActiveSidebar(!isActiveSidebar)}>
                <Lib color={"#b3b3b3"} width={'24px'} height={'24px'} isActiveSidebar={isActiveSidebar} />
              </button>
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
      {isActiveSidebar ? (
        <div className='flex py-4 pl-1 gap-2'>
          {type.map((item, index) => (
            <Button key={index} title={item.name} colors={"#2a2a2a"} />
          ))}
        </div>
      ) : ''}
      {isActiveSidebar ? (
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
      ) : ''}
      <div className='gap-2 w-full h-full overflow-hidden hover:overflow-auto scrollList cursor-pointer'>
        {listMusic.map((item, index) => (
          <Link to={`/${item.type.toLowerCase()}/${item.id}`} key={index} className={`flex gap-3 ${isActiveSidebar ? 'p-2' : 'py-2'} hover:bg-under-bg rounded-md overflow-hidden`}>
            <div className={`w-[48px] h-[48px] flex-shrink-0 `}>
              <img className={`${item.type === 'Artist' ? 'rounded-full' : 'rounded - [4px]'} `} src={item.image} alt="" width={'48px'} height={'48px'} />
            </div>
            {isActiveSidebar ? (
              <div className='flex flex-col flex-1 listname'>
                <p className='overflow-ellipsis whitespace-nowrap overflow-hidden listname'>{item.name}</p>
                <div className='flex text-sm text-icon-color gap-[2px]'>
                  <p>{item.type}</p>
                  {item.author === '' ? '' : (<p className='text-3xl leading-[2px]'> . </p>)}
                  <p>{item.author}</p>
                </div>
              </div>
            ) : ''}
          </Link>
        ))}
      </div>
    </div >
  )
}

export default Sidebar
