import { Switch } from 'antd';
import { EmployeeModel } from 'core-models';
import { useManagementEmployeeContext } from 'core-modules';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { CiUser } from 'react-icons/ci';
import { MdOutlineEmail, MdOutlinePhoneEnabled } from 'react-icons/md';
import { ButtonRemove } from './button-remove';
import { ButtonUpdate } from './button-update';

interface IProps {
    employee: EmployeeModel;
}
export const ItemEmployee = observer((props: IProps) => {
    const { getItemUpdate, onRemove } = useManagementEmployeeContext();

    const { employee } = props;
    const onChange = (checked: boolean) => {
        if (checked) {
            employee.trangthai = 'Hoạt động';
        } else {
            employee.trangthai = 'Khóa';
        }
    };
    const [isHover, setisHover] = useState(false);

    return (
        <div
            onMouseEnter={() => {
                setisHover(true);
            }}
            onMouseLeave={() => {
                setisHover(false);
            }}
            className='flex items-center text-[12px] w-full h-[56px] hover:bg-[rgba(0,0,0,0.03)] cursor-pointer border border-t-0 px-4'
        >
            <div className='flex items-center gap-2 h-full w-[721px]'>
                <img src={employee.avartar} alt='' className='h-[34px] w-[34px]  rounded-full' />
                <div className='flex flex-col gap-1'>
                    <span className='font-bold flex items-center gap-1'>
                        <span className='text-lmd font-medium'>{employee.name}</span>
                        <span className='text-lxs font-normal'>({employee.username})</span>
                    </span>
                    <div className='text-lsx font-normal flex items-center gap-5'>
                        <div className='flex items-center gap-1'>
                            <MdOutlinePhoneEnabled className='text-[10px]' />
                            <span>{employee.phone}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MdOutlineEmail className='text-[10px]' />
                            <span>{employee.email}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <CiUser className='text-[10px]' />
                            <span>{employee.vaitro}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-1 w-[196px] h-full justify-center items-center'>
                <span className='text-lxs font-normal'>Người quản lý</span>
                <span className='text-lmd font-medium'>{employee.nguoiquanly}</span>
            </div>
            <div className='flex items-center justify-end h-full w-[570px]'>
                {isHover && (
                    <ButtonUpdate
                        handleClick={() => {
                            getItemUpdate(employee.id!);
                        }}
                    />
                )}
            </div>

            <div className='flex flex-1 h-full items-center gap-16 justify-center'>
                <Switch value={employee.trangthai === 'Hoạt động'} onChange={onChange} size='small' />
                <ButtonRemove
                    handleClick={() => {
                        onRemove(employee.id!);
                    }}
                />
            </div>
        </div>
    );
});
