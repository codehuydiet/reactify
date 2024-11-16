import React from 'react'
import { MusicPlayer, MusicControler, NowPlaying } from '../components'

const Playbar = () => {
    return (
        <div className='w-full flex justify-between px-2'>
            <div className='flex items-center pl-2'>
                <NowPlaying />
            </div>
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