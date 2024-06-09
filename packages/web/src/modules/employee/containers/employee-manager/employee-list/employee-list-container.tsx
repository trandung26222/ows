import { useManagementEmployeeContext } from 'core-modules';
import { observer } from 'mobx-react';
import { ItemEmployee } from 'src/modules/employee/components/employee-manager/employee-list/item-employee';

export const EmployeeList = observer(() => {
    const { datas } = useManagementEmployeeContext();
    return <>{datas && datas.map((item, index) => <ItemEmployee key={index} employee={item} />)}</>;
});
