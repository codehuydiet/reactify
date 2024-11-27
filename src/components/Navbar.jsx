import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Reactify, Lib } from '../data'
import { BiSolidHomeAlt2 } from "react-icons/bi"
import { SearchBar } from '../components'
import { IoNotificationsOutline } from "react-icons/io5";
import { Usernav, Button } from '../components'
import avt from '../data/avt.png'
const Navbar = () => {
  const isLogin = true
  const [nav, setNav] = useState(true)
  const onchange = () => {
    setNav(!nav)
  }
  return (
    <div className='gap-2 w-full flex items-center justify-between' >
      <div className='mx-5'>
        <Link to={'/'}>
          <Reactify color={'#fff'} width={40} height={40} />
        </Link>
      </div>
      <div className='flex gap-2'>
        <div>
          <TooltipComponent cssClass='custom-tooltip' className='w-10 h-10 flex justify-center items-center bg-under-bg rounded-full' content={'Home'} position='Bottom Center'>
            <button className='text-2xl text-white'>
              <BiSolidHomeAlt2 />
            </button>
          </TooltipComponent>
        </div>
        <SearchBar />
      </div>
      <div className='flex gap-3 mr-5'>
        <div className='flex items-center'>
          <TooltipComponent
            content={"What's new"}
            position='Bottom Center'
            cssClass='custom-tooltip'
          >
            <button className='text-icon-color text-2xl hover:drop-shadow-xl hover:bg-light-gray'>
              <IoNotificationsOutline />
            </button>
          </TooltipComponent>
        </div>
        <div >
          {isLogin ? (
            <TooltipComponent cssClass='custom-tooltip' content={'avatar'} position='Bottom Center'>
              <div className='relative'>
                <button onClick={() => onchange()}>
                  <img className='rounded-full' src={avt} alt="" width={45} height={45} />
                </button>
                {nav ? (
                  <div className='absolute right-0 mt-2'>
                    <Usernav />
                  </div>
                ) : ''}
              </div>
            </TooltipComponent>
          ) : (
            <div>
              <Link to={'/register'}>
                <Button title={'Sign up'}></Button>
              </Link>
              <Link to={'/login'}>
                <Button title={'Log in'} colors={"#fff"} textColor={"#000"}></Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar