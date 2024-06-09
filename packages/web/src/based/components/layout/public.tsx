import { observer } from 'mobx-react';
import { Outlet } from 'react-router-dom';
import { items } from 'src/modules/employee/screens/employe-manager-screen';
import { BreadCrumbCustom } from './breadcrumb-custom';
import { Header } from './header';
import { Menu } from './menu';
import { SubMenu } from './submenu';

export const PublicLayout = observer(() => {
    return (
        <div className='w-full h-full flex text-md font-normal text-textColorBlack'>
            <Menu />
            <div className='flex flex-col w-full'>
                <Header />
                <BreadCrumbCustom />
                <div className='flex w-full'>
                    <SubMenu items={[...items]} />
                    <div className='flex-1 flex flex-col w-full'>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
});
