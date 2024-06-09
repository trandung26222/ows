import { Link } from 'react-router-dom';

export const SubMenu = ({ items }: any) => {
    return (
        <div className='flex flex-col w-[232px] bg-[#EEF3FE] px-2'>
            {items.map((item: any, index: number) => {
                return <SubMenuItem key={index} {...item} />;
            })}
        </div>
    );
};

const SubMenuItem = ({ active, icon, p, link }: any) => {
    return (
        <Link
            to={link}
            className={`w-full h-[36px] rounded-r-3xl  flex justify-start items-center gap-2 cursor-pointer px-3 py-2 ${
                active ? 'bg-bgActive' : 'bg-transparent'
            }  `}
        >
            <span className='inline-block'>{icon}</span>
            <span className=''>{p}</span>
        </Link>
    );
};
