import { observer } from 'mobx-react';
import { EmployeeImgContainer } from './employee-choose-img-container';
import { EmployeeDetailInfoContainer } from './employee-detail-info-container';
import { EmployeeFooterFormContainer } from './employee-footer-form-container';
import { EmployeeFormContainer } from './employee-form-container';
import { EmployeeRoleContainer } from './employee-role-container';

export const EmployeeCreateContainer = observer(() => {
    return (
        <>
            <div className='flex w-[1150px]'>
                <EmployeeImgContainer />
                <div className='flex flex-col flex-1'>
                    <EmployeeFormContainer />
                    <EmployeeRoleContainer />
                    <EmployeeDetailInfoContainer />
                </div>
            </div>
            <EmployeeFooterFormContainer />
        </>
    );
});
