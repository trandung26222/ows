import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';
import React, { useLayoutEffect, useRef } from 'react';

interface IProps {
    title: string;
    height: number;
    widthTotal: number;
    widthTitle: number;
    gap?: number;
    onChange: (value: string) => void;
}

const dateFormat = 'DD/MM/YYYY';

export const InputDate: React.FC<IProps> = ({ height, title, widthTotal, widthTitle, gap, onChange }) => {
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

    const handleDatePicker: DatePickerProps['onChange'] = (date, dateString) => {
        onChange(dateString.toString());
    };

    return (
        <div ref={parRef} className='flex items-center w-full justify-between'>
            <span ref={titleRef} className='flex h-full items-center justify-end font-medium'>
                {title}:
            </span>
            <div className='flex flex-1 h-full items-center border-b'>
                <DatePicker
                    onChange={handleDatePicker}
                    variant='borderless'
                    size='small'
                    format={dateFormat}
                    placeholder={'dd/mm/yyyy'}
                    allowClear={false}
                    suffixIcon={null}
                    className='text-textColorGray'
                />
            </div>
        </div>
    );
};
