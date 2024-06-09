import { EmployeeProvider, useManagementEmployeeContext } from 'core-modules';
import { observer } from 'mobx-react';
import { IoAddOutline } from 'react-icons/io5';
import { EmployeeCreateContainer } from './employee-create/employee-create-container';

export const EmployeeHeader = observer(() => {
    const { setIsCreate, isCreate, itemUpdate, setItemUpdate } = useManagementEmployeeContext();

    return (
        <>
            <div className='flex items-center justify-between w-full h-[48px] px-4 border-b'>
                <span className='text-lgm font-medium'>
                    {isCreate && 'Thêm mới nhân viên'}
                    {itemUpdate && 'Cập nhật thông tin nhân viên'}
                    {!isCreate && !itemUpdate && 'Danh sách nhân viên'}
                </span>
                <ButtonAddNewHeader
                    handleClick={() => {
                        setIsCreate(true);
                        setItemUpdate(undefined);
                    }}
                />
            </div>
            <EmployeeProvider>{(isCreate || itemUpdate) && <EmployeeCreateContainer />}</EmployeeProvider>
        </>
    );
});

const ButtonAddNewHeader = ({ handleClick }: any) => {
    return (
        <button
            onClick={() => {
                handleClick();
            }}
            className='h-[32px] w-[109px] text-lmd font-medium flex justify-center items-center gap-1 border-[2px] border-colorActive '
        >
            <IoAddOutline /> Thêm mới
        </button>
    );
};
