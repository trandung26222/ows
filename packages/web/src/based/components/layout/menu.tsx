import { ReactNode } from 'react';
import thietlap from '../../common/icon/Group 18379.svg';
import baocao from '../../common/icon/Group 18403 (1).svg';
import sale from '../../common/icon/Group 18403.svg';
import nhanvien from '../../common/icon/Group 18405.svg';
import donhang from '../../common/icon/Group 18418.svg';
import sanpham from '../../common/icon/Product_Package.svg';
import menu from '../../common/icon/button.svg';
import thanhtoan from '../../common/icon/card-outline.svg';
import vanchuyen from '../../common/icon/delivery-outline.svg';
import loa from '../../common/icon/marketing-outline.svg';
import kho from '../../common/icon/storehouse-outline.svg';
import dashboard from '../../common/icon/website-web-browser-graph-design.svg';

export const Menu = () => {
    return (
        <div className='flex flex-col justify-between w-[80px] h-full min-h-screen  bg-[#EEF3FE] text-lsm font-normal'>
            <div className='flex flex-col'>
                <span className='text-[25px] w-full h-[60px] flex items-center justify-center cursor-pointer hover:scale-95 transition-transform duration-500 ease-in-out'>
                    <img alt='' src={menu} />
                </span>
                {items.map((item, index) => {
                    return <MenuItem key={index} icon={item.icon} title={item.title} />;
                })}
            </div>
            <div className='flex items-end h-[100px] '>
                <MenuItem icon={<img src={thietlap} alt='' />} title='Thiết lập' />
            </div>
        </div>
    );
};

export interface MenuItemProps {
    icon: ReactNode;
    title: string;
}

var items = [
    { icon: <img src={dashboard} alt='' />, title: 'Dashboard' },
    { icon: <img src={loa} alt='' />, title: 'Marketting' },
    { icon: <img src={sale} alt='' />, title: 'Sales' },
    { icon: <img src={kho} alt='' />, title: 'Kho' },
    { icon: <img src={vanchuyen} alt='' />, title: 'Vận chuyển' },
    { icon: <img src={thanhtoan} alt='' />, title: 'Thanh toán' },
    { icon: <img src={baocao} alt='' />, title: 'Báo cáo' },
    { icon: <img src={nhanvien} alt='' />, title: 'Nhân viên' },
    { icon: <img src={sanpham} alt='' />, title: 'Sản phẩm' },
    { icon: <img src={donhang} alt='' />, title: 'Đơn hàng' }
];

export const MenuItem: React.FC<MenuItemProps> = ({ icon, title }) => {
    return (
        <div className='flex flex-col items-center justify-center h-[70px] w-full rounded-xl hover:bg-[rgba(0,0,0,0.07)] cursor-pointer'>
            <span className='text-[20px]'>{icon}</span>
            <span>{title}</span>
        </div>
    );
};
