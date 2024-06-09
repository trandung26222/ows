import { observer } from 'mobx-react';
import {
    Route, Routes
} from "react-router-dom";
import { EmployeeManager } from './screens/employe-manager-screen';
import { ManagerRole } from './screens/role-manager-screen';

export const EmployeeRoutes = observer(() => {

    return (
        <Routes>
            <Route path="/" element={<EmployeeManager />} />
            <Route path='/role' element={<ManagerRole />} />
        </Routes>
    );
})
