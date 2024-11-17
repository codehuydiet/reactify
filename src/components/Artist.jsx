import React from 'react'
import { useParams } from 'react-router-dom'
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import avt from '../data/avt.png'

const Artist = () => {
    const { id } = useParams()
    return (
        <div className='flex flex-col overflow-y-auto overflow-x-hidden my-2 rounded-md'>
            <div className='w-full h-[12rem] md:h-[15rem] bg-gradient-to-b from-[#4b4b4b] to-[#2b2b2b] flex flex-col'>
                <div className='h-[46px]'></div>
                <div className='flex px-4 gap-3'>
                    <img src={avt} alt="" width={120} height={120} className='rounded-full' />
                    <div className='flex flex-col'>
                        <div className='flex gap-2 items-center'>
                            <MdVerified fill='#4cb3ff' />
                            <p>Verified Artist</p>
                        </div>
                        <p className='text-5xl font-bold'>marzuz</p>
                        <p className='mt-3'>840,250 monthly listeners</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artist