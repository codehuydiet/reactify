import React from 'react'
import { MusicPlayer, MusicControler, NowPlaying } from '../components'
import { songs, Artists } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Playbar = () => {
    const { activeSong, setActiveSong } = useStateContext();
    return (
        <div className='w-full flex justify-between px-2'>
            {activeSong ?
                (
                    <div className='flex items-center pl-2'>
                        <NowPlaying />
                    </div>
                ):(
                    <div className='flex items-center pl-2 w-[200px]'/>
                )
            }
            <div>
                <MusicPlayer />
            </div>
            <div className='flex items-center'>
                <MusicControler />
            </div>
        </div>
    )
}

export default Playbar