import { useManagementEmployeeContext } from 'core-modules';
import { observer } from 'mobx-react';
import { GoChevronLeft } from 'react-icons/go';
import { IoChevronForwardSharp } from 'react-icons/io5';
import diamond from '../../../../../based/common/icon/diamond-outline.svg';
import { SearchBar } from './searchbar';
import { ToolBar } from './toolbar';

export const Advanced = observer(() => {
    let { datas } = useManagementEmployeeContext();

    return (
        <div className='flex flex-col w-full'>
            <div className='flex items-center justify-between h-[48px] px-4 py-3 border-b'>
                <SearchBar />
                <ToolBar />
            </div>
            <div className='flex justify-start items-center h-10 border-b text-lmd  text-textColorGray'>
                <div className='flex items-center gap-1 px-4 font-medium'>
                    <img src={diamond} alt='' />
                    <span>Trạng thái: </span>
                </div>
                <div className='flex items-center gap-2 font-normal'>
                    <span className='bg-bgGray rounded-3xl px-2 py-1 cursor-pointer'>Hoạt động</span>
                    <span className='bg-bgGray rounded-3xl px-2 py-1 cursor-pointer'>Ngừng hoạt động</span>
                </div>
            </div>
            <div className='flex justify-between items-center w-full h-[32px] bg-bgGray px-4 text-lxs font-normal'>
                <span className='text-textColorGray'>Có tất cả 285 tài khoản thành viên </span>
                <div className='flex items-center gap-3'>
                    <span>1-10 của {datas.length} tài khoản</span>
                    <div className='w-[60px] h-full flex '>
                        <span className='flex-1 flex items-center justify-center cursor-pointer'>
                            <GoChevronLeft />
                        </span>
                        <span className='flex-1 flex items-center justify-center cursor-pointer'>
                            <IoChevronForwardSharp />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
});
