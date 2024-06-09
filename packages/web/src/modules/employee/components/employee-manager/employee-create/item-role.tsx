import { useEmployeeContext } from 'core-modules';
import { observer } from 'mobx-react';

interface IProps {
    props: IRole;
}

export interface IRole {
    id: number;
    loai: string;
    ngaytao: string;
    sonhanvien: number;
}

export const ItemRole = observer(({ props }: IProps) => {
    var { data } = useEmployeeContext();
    return (
        <div
            onClick={() => {
                data.vaitro = props.loai;
            }}
            className='flex justify-between items-center h-[45px] w-full border-b hover:bg-[rgba(0,0,0,0.05)] cursor-pointer'
        >
            <div className='flex flex-col'>
                <p className='text-[14px] font-[500]'>{props.loai}</p>
                <p className='text-[13px]'>Ngày tạo: {props.ngaytao}</p>
            </div>
            <p className='text-[13px]'>Đã gán: {props.sonhanvien} nhân viên</p>
        </div>
    );
});
