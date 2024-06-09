import { mdiBellOutline, mdiCartMinus } from '@mdi/js';
import Icon from '@mdi/react';
import { IoAppsSharp, IoChevronDownOutline, IoHomeOutline } from 'react-icons/io5';
import logo from '../../../based/common/icon/LOGOmain.png';

export const Header = () => {
    return (
        <div className='flex justify-between items-center w-full h-[70px]'>
            <img src={logo} className='mx-7 mb-3 h-[70%] mt-2 object-contain' alt='' />

            <div className='flex items-center gap-5 justify-between border-[1px] h-[70%] rounded-sm mr-3 px-3'>
                <div className='flex items-center gap-4 h-full'>
                    <span className='w-[60px] h-[80%] flex items-center justify-center bg-[rgba(0,0,0,0.05)] rounded-sm text-[24px]'>
                        <IoHomeOutline className='text-gray-400' />
                    </span>
                    <div className='flex flex-col items-start w-[238px] overflow-hidden  '>
                        <span className='flex items-center text-[14px] gap-2 font-[500] '>
                            Kho hàng Trần Đại Nghĩa cơ sở 1 <IoChevronDownOutline />
                        </span>
                        <span className='w-full text-[13px] whitespace-nowrap text-ellipsis overflow-hidden ... '>
                            67A Trương Định, phường Trương Định, quận H
                        </span>
                    </div>
                </div>

                <div className='flex items-center h-full gap-3'>
                    <span className='text-[24px]'>
                        <IoAppsSharp />
                    </span>
                    <span className='text-[24px]'>
                        <Icon path={mdiCartMinus} size={1} />
                    </span>
                    <span className='text-[24px]'>
                        <Icon path={mdiBellOutline} size={1} />
                    </span>
                    <img
                        src={
                            'https://cdnb.artstation.com/p/assets/images/images/041/540/441/large/tr-n-thien-d-vu-799eb5de-173a-4c07-98a1-a585e9fe042f.jpg?1631985985'
                        }
                        className='h-[75%] object-contain rounded-full'
                        alt=''
                    />
                </div>
            </div>
        </div>
    );
};
