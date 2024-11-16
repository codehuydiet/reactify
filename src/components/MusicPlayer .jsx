import React, { useState, useRef, useEffect } from 'react'
import music from '../data/test_audio.mp3'
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { IoShuffle } from "react-icons/io5";
import { IoMdRepeat } from "react-icons/io";
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

const MusicPlayer = () => {
    const audioRef = useRef()
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isPlay, setIsPlay] = useState(false)

    const handlePlay = () => {
        setIsPlay(!isPlay)
        if (isPlay == true) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }
    }

    const handleCurrentTime = () => {
        setCurrentTime(audioRef.current.currentTime)
    }

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration)
    }

    const handleOnChange = (e) => {
        const newTime = e.target.value / 100 * duration
        audioRef.current.currentTime = newTime
        setCurrentTime(newTime)
        setBackgroundSize(e.target)
    }

    const setBackgroundSize = (input) => {
        input.style.setProperty("--background-size", `${getBackgroundSize(input)}%`);
    }

    const getBackgroundSize = (input) => {
        const min = +input.min || 0;
        const max = +input.max || 100;
        const value = +input.value;
        console.log(+input.value);

        const size = (value - min) / (max - min) * 100;
        return size;
    }

    useEffect(() => {
        const input = document.querySelector("input[type='range']");
        if (input) {
            setBackgroundSize(input);
            input.addEventListener("input", () => setBackgroundSize(input));
        }
    }, [currentTime]);

    return (
        <div className='my-4'>
            <audio
                ref={audioRef}
                src={music}
                onTimeUpdate={handleCurrentTime}
                onLoadedMetadata={handleLoadedMetadata}
            />
            <div className='gap-4 flex justify-center text-2xl text-[#b3b3b3] mb-[10px]'>
                <TooltipComponent cssClass='custom-tooltip2' content={"Enable Shuffle"} position='TopCenter'>
                    <button className='hover:text-[#fff]'>
                        <IoShuffle />
                    </button>
                </TooltipComponent>
                <TooltipComponent cssClass='custom-tooltip2' content={"Previous"} position='TopCenter'>
                    <button className='hover:text-[#fff]'>
                        <MdSkipPrevious />
                    </button >
                </TooltipComponent>
                <TooltipComponent cssClass='custom-tooltip2' content={"Play"} position='TopCenter'>
                    <button className='text-white text-4xl' onClick={() => handlePlay()}>
                        {isPlay ? <FaPauseCircle /> : <FaPlayCircle />}
                    </button>
                </TooltipComponent>
                <TooltipComponent cssClass='custom-tooltip2' content={"Next"} position='TopCenter'>
                    <button className='hover:text-[#fff]'>
                        <MdSkipNext />
                    </button>
                </TooltipComponent>
                <TooltipComponent cssClass='custom-tooltip2' content={"Enable Repeat"} position='TopCenter'>
                    <button className='hover:text-[#fff]'>
                        <IoMdRepeat />
                    </button>
                </TooltipComponent>
            </div>

            <div className='flex gap-2 items-center text-[#b3b3b3] text-[11px]'>
                <div>
                    {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')}
                </div>
                <input
                    type="range"
                    value={currentTime * 100 / duration}
                    onChange={handleOnChange}
                    className='custom-input'
                    style={{ '--background-size': '0%' }}
                />

                <div>
                    {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer 