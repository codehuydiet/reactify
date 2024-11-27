import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
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
                    <h1 className="text-[1.75rem] font-[700] mt-[1.5rem] mb-[1rem]">Log in</h1>
                </div>
                <div className="flex justify-center w-[100] mt-[0.5rem] flex-col">
                    <form>
                        <button className="w-[23.5rem] h-[3.5rem] block bg-[#ffffff] flex items-center justify-center rounded-[1.25rem]">
                            <svg className="w-[1.25rem] h-[1.25] mr-[0.5rem]" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path><path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path><path fill="none" d="M0 0h48v48H0z"></path></g></svg>
                            <div className="flex justify-center text-[#28293d] ml-[1rem] font-[1000]">Đăng nhập bằng google</div>
                        </button>
                    </form>
                </div>
                <div className="flex items-center justify-between w-[400px] pt-[0.5rem] pl-[1rem] pr-[1rem]">
                    <hr className="w-[100%]  border-[#373952]" />
                    <p className="font-[700] ml-[0.5rem] mr-[0.5rem] border-[#373952]">OR</p>
                    <hr className="w-[100%] border-[#373952]" />
                </div>
                <form className='w-[100%]'>
                    <div className={'flex justify-center items-start flex-col w-[100%] mt-[0.5rem]'}>
                        <div className={`w-full relative border-[2px] rounded-lg py-[0.875rem] px-[0.75rem]  ${focus === 'email' ? 'border-[#1ed760]' : ''}`}>
                            <input className="outline-none text-[1rem] w-[100%] font-[700] text-[#f9faff] bg-transparent p-0" type="text"
                                placeholder="Email or UserName"
                                onFocus={() => handleFocus('email')}
                                onBlur={handleBlur}
                                name='EmailOrUserName'
                            />
                        </div>
                    </div>
                    <div className={'flex justify-center items-start flex-col w-[100%] mt-[0.5rem]'}>
                        <div className={`w-full relative border-[2px] rounded-lg py-[0.875rem] px-[0.75rem] ${focus === 'password' ? 'border-[#1ed760]' : ''}`}>
                            <input className="outline-none text-[1rem] w-[350px] font-[700] text-[#f9faff] bg-transparent p-0" type="password"
                                placeholder="Password"
                                onFocus={() => handleFocus('password')}
                                onBlur={handleBlur}
                                name='password'
                            />
                        </div>
                    </div>
                    <div className="relative w-[100%]">
                        <Link href='/fogot-password' className="h-[2.5rem] text-[#f9faff] hover:text-[#1ed760] text-[0.875rem] flex justify-center items-center mt-[0.25rem] mb-[0.5rem] float-right justify-end underline">Forgot Password?</Link>
                    </div>
                    <div className="w-[100%]">
                        <button className="bg-[#1ed760] text-[#f9faff] hover:bg-[#53eb88] rounded-[30px] flex justify-center items-center font-[700] text-[1rem] px-[0.5rem] py-[1rem] w-[100%] ">Log in</button>
                    </div>
                </form>
                <div className="flex text-[1rem] mt-[1rem] font-[700] text-[#ffffff]">
                    <span>Bạn chưa có tài khoản?</span>
                    <a className="text-[#f9faff] hover:text-[#1ed760]  ml-[1rem] font-[700] underline" href="/register"> Đăng ký ngay</a>
                </div>
            </div>
        </div>
    )
}
export default Login 