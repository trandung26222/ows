import { mdiChevronDown, mdiFilterOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Dropdown, Space, message } from 'antd';
import { MenuProps } from 'antd/lib';
import { useState } from 'react';
import sorticon from '../../../../../based/common/icon/Group.svg';

export const ToolBar = () => {
    const items: MenuProps['items'] = [
        {
            label: 'Sắp xếp theo tên A->Z',
            key: '1'
        },
        {
            label: 'Sắp xếp theo tên Z->A',
            key: '2'
        },
        {
            label: 'Tất cả',
            key: '3'
        }
    ];
    const onClick: MenuProps['onClick'] = ({ key }) => {
        message.info(`Click on item ${key}`);
    };
    const [chosenItemLabel, setChosenItemLabel] = useState<string>('Sắp xếp theo tên A->Z');

    return (
        <>
            <div className='flex items-center gap-2 mt-1 text-md'>
                <div className='w-[230px] h-[36px] flex items-center justify-center gap-2'>
                    <img src={sorticon} alt='' />

                    <Dropdown menu={{ items, onClick }}>
                        <div onClick={(e) => e.preventDefault()}>
                            <Space className='cursor-pointer'>
                                <span>{chosenItemLabel}</span>
                                <Icon path={mdiChevronDown} size={0.8} />
                            </Space>
                        </div>
                    </Dropdown>
                </div>

                <span className='w-[36px] h-[36px] flex items-center justify-center'>
                    <Icon path={mdiFilterOutline} size={0.6} />
                </span>
            </div>
        </>
    );
};
