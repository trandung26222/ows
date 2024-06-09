import { ReactNode, useLayoutEffect, useRef } from 'react';
import { RadioGroup } from './radio-group';

interface IProps {
    title: string;
    height: number;
    widthTotal: number;
    widthTitle: number;
    gap?: number;
    items: string[];
    onChange: (value: string) => void;
    icons?: ReactNode[];
    defaultValue?: string;
    titleFontNormal?: boolean;
    value?: string;
}

export const InputRadioGroup = ({
    height,
    title,
    widthTotal,
    widthTitle,
    gap,
    items,
    onChange,
    icons,
    defaultValue,
    titleFontNormal
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
            <span
                ref={titleRef}
                className={`flex h-full items-center justify-end ${titleFontNormal ? 'font-normal' : 'font-medium'}`}
            >
                {title}:
            </span>
            <div className='flex flex-1 h-full items-center'>
                <RadioGroup items={items} onChange={onChange} icons={icons} defaultValue={defaultValue} />
            </div>
        </div>
    );
};
