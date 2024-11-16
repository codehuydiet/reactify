import React, { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { MdCategory } from "react-icons/md";


const SearchBar = () => {
    const [isFocus, setIsFocus] = useState(false)
    return (
        <div className={`gap-3 h-10 flex items-center w-[24rem] bg-under-bg rounded-full ${isFocus ? 'border-white border-2' : ''}`}>
            <button className='text-icon-color text-2xl ml-3'>
                <IoIosSearch />
            </button>
            <input
                type="text"
                placeholder='What do you want to play?'
                className='outline-none bg-transparent text-white caret-white w-[270px]'
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
            />
            <div className='h-7 border-l-[1px] border-border-color'>
            </div>
            <button className='text-icon-color text-2xl'>
                <MdCategory/>
            </button>
        </div>
    )
}

export default SearchBar