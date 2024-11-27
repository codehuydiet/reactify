import React from 'react'
import { Link } from 'react-router-dom'

const Usernav = () => {
  return (
    <div className='flex flex-col bg-[#282828] p-3 gap-3'>
      <Link to={'/userprofile'}>
        <div className='w-40 flex hover:bg-[#3e3e3e] px-4 py-2'>
          <p>Profile</p>
        </div>
      </Link>
      <hr className='' />
      <button>
        <div className='w-40 flex hover:bg-[#3e3e3e] px-4 py-2'>
          <p>Log out</p>
        </div>
      </button>
    </div>
  )
}

export default Usernav