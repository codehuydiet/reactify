import React, { useEffect, useState } from 'react'
import avt from '../data/avt.png'
import { songs, Artists } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const UserProfile = () => {
    const [focus, setFocus] = useState(null);
    const handleFocus = (field) => {
        setFocus(field);
    }
    const handleBlur = () => {
        setFocus(null);
    }
    return (
        <div className='flex flex-col items-center overflow-y-auto h-full overflow-x-hidden my-2 rounded-md'>
            <div className='w-full h-[12rem] md:h-[15rem] bg-gradient-to-b from-[#4b4b4b] to-[#2b2b2b] flex flex-col'>
                <div className='h-[46px]'></div>
                <div className='flex px-4 gap-3'>
                    <img src={avt} alt="" width={120} height={120} className='rounded-full drop-shadow-2xl' />
                    <div className='flex flex-col'>
                        <p>Profile</p>
                        <p className='text-5xl font-bold cursor-default'>Hoang nguyen viet</p>
                        <p className='mt-3'>2 public playlists . 2 Following</p>
                    </div>
                </div>
                <div className='h-[12px]'></div>
            </div>
            <div className='bg-gradient-to-b from-black to-[#252525] w-full flex justify-center'>
                <div className='bg-gradient-to-b w-[50%] h-full from-[#232323] to-[#000000] flex flex-col p-10'>
                    <p className='text-2xl font-bold py-8 flex justify-center'>Account Infomation</p>
                    <form className='w-[100%] flex flex-col gap-6'>
                        <div className={'flex justify-center items-start flex-col w-[100%] mt-[0.5rem] gap-2'}>
                            <div className='text-lg font-bold'>
                                <p>Old password</p>
                            </div>
                            <div className={`w-full relative border-[2px] rounded-lg py-[0.875rem] px-[0.75rem]  ${focus === 'email' ? 'border-[#1ed760]' : ''}`}>
                                <input className="outline-none text-[1rem] w-[100%] font-[700] text-[#f9faff] bg-transparent p-0" type="text"
                                    placeholder="Old password"
                                    onFocus={() => handleFocus('OldPass')}
                                    onBlur={handleBlur}
                                    name='OldPass'
                                />
                            </div>
                        </div>
                        <div className={'flex justify-center items-start flex-col w-[100%] mt-[0.5rem] gap-2'}>
                            <div className='text-lg font-bold'>
                                <p>New password</p>
                            </div>
                            <div className={`w-full relative border-[2px] rounded-lg py-[0.875rem] px-[0.75rem] ${focus === 'password' ? 'border-[#1ed760]' : ''}`}>
                                <input className="outline-none text-[1rem] w-[350px] font-[700] text-[#f9faff] bg-transparent p-0" type="password"
                                    placeholder="New password"
                                    onFocus={() => handleFocus('NewPass')}
                                    onBlur={handleBlur}
                                    name='NewPass'
                                />
                            </div>
                        </div>
                        <div className="w-[100%]">
                            <button className="bg-[#1ed760] text-[#f9faff] hover:bg-[#53eb88] rounded-[30px] flex justify-center items-center font-[700] text-[1rem] px-[0.5rem] py-[1rem] w-[100%] ">Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default UserProfile