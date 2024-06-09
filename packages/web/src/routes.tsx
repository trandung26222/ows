import { observer } from 'mobx-react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PublicLayout } from './based/components/layout';
import { EmployeeRoutes } from './modules/employee/routes';
import { LoginScreen } from './modules/login/screens/login';
import { Test } from './modules/test/screen';

export const RouteApp = observer(() => {
    return (
        <Routes>
            <Route element={<PublicLayout />}>
                <Route path='/employee/*' element={<EmployeeRoutes />} />
            </Route>
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/test' element={<Test />} />
        </Routes>
    );
});

const RequireAuth = observer(({ children }: { children: JSX.Element }) => {
    let location = useLocation();
    // if (!sessionStore.session) {
    //     return <Navigate to="/login" state={{ from: location }} replace />;
    // }
    return children;
});
