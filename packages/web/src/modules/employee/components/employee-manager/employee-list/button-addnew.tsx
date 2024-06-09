import { mdiPlus } from '@mdi/js';
import Icon from '@mdi/react';

interface IProps {
    handleClick: Function;
    disabled?: boolean;
}

export const ButtonAddNew = ({ handleClick, disabled }: IProps) => {
    return (
        <button
            onClick={() => {
                handleClick();
            }}
            className={`h-[32px] w-[109px] text-lmd font-medium flex justify-center items-center gap-1 border-[2px] ${
                disabled && 'text-gray-200 cursor-not-allowed'
            }`}
        >
            <Icon path={mdiPlus} size={0.6} /> Thêm mới
        </button>
    );
};
