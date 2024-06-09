import { mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';

export const SearchBar = () => {
    return (
        <>
            <div className='flex items-center relative text-[15px]'>
                <Icon path={mdiMagnify} size={0.8} className='absolute left-2' />
                <input
                    type='text'
                    placeholder='Tìm kiếm'
                    className='w-[412px] h-[36px] text-md font-normal rounded border px-8 outline-none'
                />
            </div>
        </>
    );
};
