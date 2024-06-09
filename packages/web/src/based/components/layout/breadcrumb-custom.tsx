import { Breadcrumb } from 'antd';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export var mapRoutes: any = [
    { path: '/employee/', name: ['Nhân viên', 'Danh sách nhân viên'] },
    { path: '/employee/role', name: ['Nhân viên', 'Quản lý vai trò'] },
    { path: '/employee/sale', name: ['Nhân viên', 'Quản lý nhân viên sale'] }
];

export const BreadCrumbCustom = () => {
    var [itemBreadCrumb, setitemBreadCrumb] = useState<any>([]);
    const location = useLocation();

    useEffect(() => {
        const filteredRoutes = mapRoutes.filter((route: any) => route.path.startsWith(location.pathname));
        if (filteredRoutes.length > 0) {
            const tmpItem = filteredRoutes[0].name.map((item: any) => ({ title: item }));
            setitemBreadCrumb(tmpItem);
        }
    }, [location.pathname]);

    return (
        <div className='flex bg-[#EEF3FE] h-[40px] items-center px-4 '>
            <Breadcrumb items={[...itemBreadCrumb]} />
        </div>
    );
};
