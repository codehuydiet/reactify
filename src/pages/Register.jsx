import React, { useState } from 'react'

const Register = () => {
    const [focus, setFocus] = useState(null);
    const handleFocus = (field) => {
        setFocus(field);
    }
    const handleBlur = () => {
        setFocus(null);
    }
    return (
        <div className='flex-1 relative h-auto'>
            <div className='flex flex-col items-center px-4 w-full h-auto'>
                <div>
                    <h1 className="text-[1.75rem] font-[700] mt-[1.5rem] mb-[1rem]">Register</h1>
                </div>
                <form className='w-full'>
                    <div className={'flex justify-center items-start flex-col w-full mt-[0.5rem]'}>
                        <div className={`w-full relative border-[2px] rounded-lg py-[0.875rem] px-[0.75rem] ${focus === 'userName' ? 'border-[#1ed760]' : ''}`}>
                            <input className="outline-none text-[1rem] w-[350px] font-[700] text-[#f9faff] bg-transparent p-0" type="text"
                                placeholder="User Name"
                                onFocus={() => handleFocus('userName')}
                                onBlur={handleBlur}
                                name='userName'
                            />
                        </div>
                    </div>
                    <div className={'flex justify-center items-start flex-col w-full mt-[0.5rem]'}>
                        <div className={`w-full relative border-[2px] rounded-lg py-[0.875rem] px-[0.75rem] ${focus === 'email' ? 'border-[#1ed760]' : ''}`}>
                            <input className="outline-none text-[1rem] w-full font-[700] text-[#f9faff] bg-transparent p-0" type="email"
                                placeholder="Email"
                                onFocus={() => handleFocus('email')}
                                onBlur={handleBlur}
                                name='email'
                            />
                        </div>
                    </div>
                    <div className={'flex justify-center items-start flex-col w-full mt-[0.5rem]'}>
                        <div className={`w-full relative border-[2px] rounded-lg py-[0.875rem] px-[0.75rem] ${focus === 'password' ? 'border-[#1ed760]' : ''}`}>
                            <input className="outline-none text-[1rem] w-[350px] font-[700] text-[#f9faff] bg-transparent p-0" type="password"
                                placeholder="Password"
                                onFocus={() => handleFocus('password')}
                                onBlur={handleBlur}
                                name='password'
                            />
                        </div>
                    </div>
                    <div className={'flex justify-center items-start flex-col w-full mt-[0.5rem]'}>
                        <div className={`w-full relative border-[2px] rounded-lg py-[0.875rem] px-[0.75rem] ${focus === 'passwordRepeat' ? 'border-[#1ed760]' : ''}`}>
                            <input className="outline-none text-[1rem] w-[350px] font-[700] text-[#f9faff] bg-transparent p-0" type="password"
                                placeholder="Re-enter Password"
                                onFocus={() => handleFocus('passwordRepeat')}
                                onBlur={handleBlur}
                                name='passwordRepeat'
                            />
                        </div>
                    </div>
                    <div className="w-full mt-[2rem]">
                        <button className="bg-[#1ed760] text-[#f9faff] hover:bg-[#53eb88] rounded-[30px] flex justify-center items-center font-[700] text-[1rem] px-[0.5rem] py-[1rem] w-full ">Register</button>
                    </div>
                </form>
                <div className="flex text-[1rem] mt-[1.75rem] font-[700] text-[#f9faff]">
                    <span>Bạn có tài khoản rồi?</span>
                    <a className="text-[#f9faff] hover:text-[#1ed760] ml-[1rem] font-[700] underline" href="/login"> Đăng nhập ngay</a>
                </div>
            </div>
        </div>
    )
}

export default Register