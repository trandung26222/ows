import { ReactNode, useState } from 'react';
import { RadioCustom } from 'src/based/components/common/radio-custom';

interface IProps {
    items: string[];
    onChange: (value: string) => void;
    defaultValue?: string;
    icons?: ReactNode[];
}

export const RadioGroup = ({ items, onChange, defaultValue, icons }: IProps) => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue);

    const handleRadioChange = (value: string) => {
        setSelectedValue(value);
        onChange(value);
    };

    return (
        <div className='flex items-center gap-4'>
            {items.map((item, index) => (
                <RadioCustom
                    key={index}
                    value={item}
                    checked={item === selectedValue}
                    onChange={handleRadioChange}
                    icon={icons && icons[index]}
                />
            ))}
        </div>
    );
};
