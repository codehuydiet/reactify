import React from 'react'
import { MdOutlineQueueMusic } from "react-icons/md";
import { LuPlaySquare } from "react-icons/lu";
import { MdOutlineLyrics } from "react-icons/md";
import { GiSoundOff } from "react-icons/gi";
import { GiSoundOn } from "react-icons/gi";
import { CiMinimize1 } from "react-icons/ci";
import { CiMaximize1 } from "react-icons/ci";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const MusicControler = () => {
    const isMute = true;
    const isFullScreen = true;
    return (
        <div className='text-[#b3b3b3] flex gap-3 text-2xl mr-4'>
            <TooltipComponent cssClass='custom-tooltip2' content={'Now playing view'} position='TopCenter'>
                <button className='hover:text-[#fff]'>
                    <LuPlaySquare />
                </button>
            </TooltipComponent>
            <TooltipComponent cssClass='custom-tooltip2' content={'Lyrics'} position='TopCenter'>
                <button className='hover:text-[#fff]'>
                    <MdOutlineLyrics />
                </button>
            </TooltipComponent>
            <TooltipComponent cssClass='custom-tooltip2' content={'Queue'} position='TopCenter'>
                <button className='hover:text-[#fff]'>
                    <MdOutlineQueueMusic />
                </button>
            </TooltipComponent>
            {isMute ? (
                <TooltipComponent cssClass='custom-tooltip2' content={'Unmute'} position='TopCenter'>
                    <button className='hover:text-[#fff]'>
                        <GiSoundOff />
                    </button>
                </TooltipComponent>
            ) : (
                <TooltipComponent cssClass='custom-tooltip2' content={'Mute'} position='TopCenter'>
                    <button className='hover:text-[#fff]'>
                        <GiSoundOn />
                    </button>
                </TooltipComponent>
            )}
            {isFullScreen ? (
                <TooltipComponent cssClass='custom-tooltip2' content={'Exit full screen'} position='TopCenter'>
                    <button className='hover:text-[#fff]'>
                        <CiMinimize1 />
                    </button>
                </TooltipComponent>
            ) : (
                <TooltipComponent cssClass='custom-tooltip2' content={'Full Screen'} position='TopCenter'>
                    <button className='hover:text-[#fff]'>
                        <CiMaximize1 />
                    </button>
                </TooltipComponent >
            )}
        </div>
    )
}

export default MusicControler