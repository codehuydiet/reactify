import React, { useEffect, useState } from 'react'
import avt from '../data/avt.png'
import { CiCirclePlus } from "react-icons/ci";
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateContext } from '../contexts/ContextProvider';
import { Artists } from '../data/dummy';
const NowPlaying = () => {
    const { activeSong, setActiveSong } = useStateContext();
    const { artist, setArtist } = useStateContext([]);
    console.log(activeSong);
    
    // useEffect(() => {
        
    // }, [activeSong]);


    return (
        <div className='w-64 h-16 bg-transparent flex items-center text-[#b3b3b3] justify-around'>
            <img src={avt} alt="" width={"56px"} height={"56px"} />
            <div className='text-xs'>
                <div>
                    <p className='text-sm text-white hover:underline cursor-pointer'>{activeSong.name}</p>
                </div>
                <div>
                    <p className='hover:text-white hover:underline cursor-pointer'>HIEUTHUHAI, marzuz</p>
                </div>
            </div>
            <div>
                <TooltipComponent>
                    <button className='text-2xl '>
                        <CiCirclePlus />
                    </button>
                </TooltipComponent>
            </div>
        </div>
    )
}

export default NowPlaying