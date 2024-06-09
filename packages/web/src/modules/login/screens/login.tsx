import { LoginProvider } from 'core-modules';
import signinbtn from '../../../based/common/icon/Button.png';
import bgimg from '../../../based/common/icon/Group 2014.png';
import logo from '../../../based/common/icon/Logo Here.png';
import signin from '../../../based/common/icon/Sing in.png';

export const LoginScreen = () => {
    return (
        <LoginProvider>
            <div className='w-[100vw] h-[100vh] flex'>
                <div className='w-[60%] h-full bg-white flex items-center justify-center'>
                    <div
                        className='h-[597px] w-[478px] bg-white shadow-xl 
                    rounded-[20px] px-[5%] py-[5%] flex flex-col'
                    >
                        <img src={logo} className='h-[30px] object-contain' alt='' />
                        <div className='w-full h-full  pt-[40px]'>
                            <p className='text-[16px] font-[400] leading-[22px] text-[#5a5a5a]'>Welcome back !!!</p>
                            <img src={signin} className='h-[40px] mb-7 object-contain mt-4' alt='' />

                            <form action='' className='text-[14px] font-[400] text-black flex flex-col gap-2'>
                                <div className='flex items-start w-full flex-col gap-1'>
                                    <p>Email</p>
                                    <input type='email' className='w-full h-[40px]  bg-[#FFF6F4]' />
                                </div>
                                <div className='flex items-start w-full flex-col gap-1'>
                                    <div className='flex justify-between w-full'>
                                        <p>Password</p>
                                        <p className='text-[13px] text-gray-400'>Forgot Password</p>
                                    </div>
                                    <input type='email' className='w-full h-[40px]  bg-[#FFF6F4]' />
                                </div>
                                <img src={signinbtn} className='h-[35px] object-contain mt-4 cursor-pointer' alt='' />
                            </form>

                            <div className='flex items-center w-full justify-center mt-10 gap-2'>
                                <p className='text-gray-300'>I don't have an account ? </p>
                                <p className='text-orange-400'>Sign up</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 h-full bg-[#FFEDE1] relative'>
                    <img className='w-[500px] absolute bottom-[50px] left-[-80px]' src={bgimg} alt='' />
                </div>
            </div>
        </LoginProvider>
    );
};
