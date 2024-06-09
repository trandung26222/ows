import { ReactNode, useEffect, useState } from 'react';

interface IProps {
    value: string;
    csstit?: string;
    checked?: boolean;
    onChange: (value: string) => void;
    icon?: ReactNode;
}

export const RadioCustom = ({ value, checked, csstit, onChange, icon }: IProps) => {
    const [radioOn, setRadioOn] = useState(checked);

    const toggleRadio = () => {
        setRadioOn(true);
        onChange(value);
    };
    useEffect(() => {
        setRadioOn(checked);
    }, [checked]);

    return (
        <div className='flex items-center gap-2'>
            <div
                className={`w-[14px] h-[14px] rounded-[50%] border box-content border-black cursor-pointer flex `}
                onClick={toggleRadio}
            >
                <div
                    className={`w-[12px] h-[12px] m-auto rounded-[50%] bg-[#000] ${
                        radioOn ? 'inline-block' : 'hidden'
                    }`}
                ></div>
            </div>
            <span className={`${csstit} flex gap-[4px] items-center`}>
                {icon && <span className='w-[16px] object-contain'>{icon}</span>}
                <span>{value}</span>
            </span>
        </div>
    );
};
