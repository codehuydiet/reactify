import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import avt from '../data/avt.png'
import { songs, Artists } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Artist = () => {
    const { activeSong, setActiveSong } = useStateContext()
    const { id } = useParams()
    const [artist, setArtist] = useState({});
    const [data, setData] = useState([]);
    const [durations, setDurations] = useState([]);
    useEffect(() => {
        const fetchDurations = async () => {
            const newData = [];
            const promises = [];
            for (const song of songs) {
                if (song.author[0].idAuthor === id) {
                    newData.push(song);
                    const durationPromise = new Promise((resolve) => {
                        const audio = new Audio(song.data);
                        audio.onloadedmetadata = () => {
                            const duration = ` ${Math.floor(audio.duration / 60)}:${Math.floor(audio.duration % 60).toString().padStart(2, '0')}`;
                            resolve(duration);
                        };
                    });

                    promises.push(durationPromise);
                }
            }
            const durationsArray = await Promise.all(promises);
            setData(newData);
            setDurations(durationsArray);
        };

        fetchDurations();

        for (const A of Artists) {
            if (A.id === id) {
                setArtist(A);
            }
        }
    }, [id]);
    // console.log(durations);
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
                        <p className='text-5xl font-bold cursor-default'>{artist.name}</p>
                        <p className='mt-3'>840,250 monthly listeners</p>
                    </div>
                </div>
                <div className='h-[12px]'></div>
            </div>
            <div className='bg-gradient-to-b h-full from-[#232323] to-[#000000] flex flex-col px-10'>
                <div className='flex gap-6 w-full items-center h-[80px] p-4'>
                    <button className='w-12 h-12 text-5xl flex items-center'>
                        <FaPlayCircle fill='#1ed760' />
                    </button>
                    <button className='flex items-center h-[33px] font-bold text-sm leading-[14px] bg-transparent border-[1.3px] px-4 rounded-full border-gray-500 hover:border-gray-200 transition custom-recent'>
                        Following
                    </button>
                </div>
                <div className='px-4'>
                    <h1 className='font-bold text-2xl mb-8'>Songs</h1>
                    <div className='flex flex-col gap-2'>
                        {data.map((item, index) => (
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center gap-3'>
                                    <button onClick={() => setActiveSong(item)}>{index + 1}</button>
                                    <img src={item.image} alt="" width={40} height={40} />
                                    <p className='w-[300px]'>{item.name}</p>
                                </div>
                                <div className='w-[100px] flex justify-end hidden md:flex '>
                                    <p>{item.listen}</p>
                                </div>
                                <p className='flex items-end'>{durations[index]}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='px-4 mx-18'>
                    <h1 className='font-bold text-2xl my-6'>About</h1>
                    <div className='w-full bg-[#282828] rounded-md flex flex-col md:flex-row items-center p-8 gap-6'>
                        <div className='w-32'>
                            <img src={avt} alt="" width={120} height={120} className='rounded-full drop-shadow-2xl' />
                        </div>
                        <div className='basis-[80%]'>
                            {artist.des}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Artist