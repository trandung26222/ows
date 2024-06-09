import { useEmployeeContext, useManagementEmployeeContext } from 'core-modules';
import { ButtonCancel } from 'src/modules/employee/components/employee-manager/employee-create/button-cancel';
import { ButtonAddNew } from 'src/modules/employee/components/employee-manager/employee-list/button-addnew';
import { ButtonUpdate } from 'src/modules/employee/components/employee-manager/employee-list/button-update';

export const EmployeeFooterFormContainer = () => {
    let { isCreate, onUpdate } = useManagementEmployeeContext();
    const { onCreate } = useEmployeeContext();
    return (
        <div className='flex justify-end items-center gap-5 pr-6 border-y w-full h-[52px] '>
            <ButtonCancel />
            {isCreate ? (
                <ButtonAddNew
                    handleClick={() => {
                        onCreate();
                    }}
                    disabled
                />
            ) : (
                <ButtonUpdate
                    handleClick={() => {
                        onUpdate();
                    }}
                />
            )}
        </div>
    );
};
