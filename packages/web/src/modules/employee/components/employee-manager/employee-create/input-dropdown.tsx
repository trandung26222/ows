import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';
import { Dropdown } from 'antd';
import { ItemType } from 'antd/es/menu/interface';
import { MenuProps } from 'antd/lib';
import { useLayoutEffect, useRef } from 'react';

interface IProps {
    title: string;
    placeholder: string;
    dataplaceholder?: string;
    height: number;
    widthTotal: number;
    widthTitle: number;
    gap?: number;
    items: ItemType[];
    onClickItem: MenuProps['onClick'];
}

export const InputDropdown = ({
    title,
    placeholder,
    dataplaceholder,
    height,
    widthTotal,
    widthTitle,
    gap,
    items,
    onClickItem
}: IProps) => {
    let parRef = useRef<HTMLDivElement>(null);
    let titleRef = useRef<HTMLSpanElement>(null);

    useLayoutEffect(() => {
        if (parRef.current) {
            parRef.current.style.height = `${height}px`;
            parRef.current.style.gap = `${gap}px`;
            parRef.current.style.width = `${widthTotal}px`;
        }
        if (titleRef.current) {
            titleRef.current.style.width = `${widthTitle}px`;
        }
    }, [parRef, titleRef]);

    return (
        <div ref={parRef} className='flex items-center w-full justify-between'>
            <span ref={titleRef} className='flex h-full items-center justify-end font-medium'>
                {title}:
            </span>
            <div className='flex flex-1 h-full items-center border-b'>
                <Dropdown
                    menu={{
                        items: items,
                        onClick: onClickItem
                    }}
                    className='w-full'
                >
                    <div className='flex justify-between items-center cursor-pointer text-textColorGray'>
                        <span>{dataplaceholder ? dataplaceholder : placeholder}</span>
                        <Icon path={mdiChevronDown} size={0.8} />
                    </div>
                </Dropdown>
            </div>
        </div>
    );
};
