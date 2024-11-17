import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import avt from '../data/avt.png'
import { songs } from '../data/dummy';

const Artist = () => {
    const { id } = useParams()
    useEffect(() => {
        const data = [];
        for (const song of songs) {
            if (song.author[0].idAuthor === id) {
                data.push(song)
            }
        }
        console.log(data);

    }, [])

    return (
        <div className='flex flex-col overflow-y-auto h-full overflow-x-hidden my-2 rounded-md'>
            <div className='w-full h-[12rem] md:h-[15rem] bg-gradient-to-b from-[#4b4b4b] to-[#2b2b2b] flex flex-col'>
                <div className='h-[46px]'></div>
                <div className='flex px-4 gap-3'>
                    <img src={avt} alt="" width={120} height={120} className='rounded-full drop-shadow-2xl' />
                    <div className='flex flex-col'>
                        <div className='flex gap-2 items-center'>
                            <MdVerified fill='#4cb3ff' />
                            <p>Verified Artist</p>
                        </div>
                        <p className='text-5xl font-bold cursor-default'>marzuz</p>
                        <p className='mt-3'>840,250 monthly listeners</p>
                    </div>
                </div>
                <div className='h-[12px]'></div>
            </div>
            <div className='bg-gradient-to-b h-full from-[#232323] to-[#000000] flex flex-col'>
                <div className='flex gap-6 w-full items-center h-[80px] p-4'>
                    <button className='w-12 h-12 text-5xl flex items-center'>
                        <FaPlayCircle fill='#1ed760' />
                    </button>
                    <button className='flex items-center h-[33px] font-bold text-sm leading-[14px] bg-transparent border-[1.3px] px-4 rounded-full border-gray-500 hover:border-gray-200 transition custom-recent'>
                        Following
                    </button>
                </div>
                <div className='px-4'>
                    <h1 className='font-bold text-2xl'>Songs</h1>
                </div>
            </div>
        </div>
    )
}

export default Artist