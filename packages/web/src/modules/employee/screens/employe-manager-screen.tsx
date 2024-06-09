import { ManagementEmployeeProvider } from 'core-modules';
import { observer } from 'mobx-react';
import { GrUserSettings } from 'react-icons/gr';
import ic3 from '../../../based/common/icon/Group 18412.svg';
import ic1 from '../../../based/common/icon/Group 18419.svg';
import { Advanced } from '../components/employee-manager/employee-list/advanced';
import { EmployeeHeader } from '../containers/employee-manager/employee-header-container';
import { EmployeeList } from '../containers/employee-manager/employee-list/employee-list-container';

export const EmployeeManager = observer(() => {
    return (
        <ManagementEmployeeProvider>
            <EmployeeHeader />
            <Advanced />
            <EmployeeList />
        </ManagementEmployeeProvider>
    );
});

export const items = [
    {
        active: true,
        icon: <img className='text-red-200' src={ic1} alt='' />,
        p: 'Quản lý nhân viên',
        link: '/employee'
    },
    {
        active: false,
        icon: <GrUserSettings className='text-[18px]' />,
        p: 'Quản lý vai trò',
        link: '/employee/role'
    },
    {
        active: false,
        icon: <img src={ic3} alt='' />,
        p: 'Quản lý nhân viên sale',
        link: '/employee/sale'
    }
];
