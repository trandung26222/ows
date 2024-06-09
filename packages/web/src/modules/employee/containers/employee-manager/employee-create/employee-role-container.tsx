import { mdiChevronDown, mdiPlus, mdiTrashCanOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Popover } from 'antd';
import { useEmployeeContext } from 'core-modules';
import { observer } from 'mobx-react';
import { Title } from 'src/modules/employee/components/employee-manager/employee-create/title';
import { PopoverAddress } from './popover/popover-address';
import { PopoverRole } from './popover/popover-role';

export const EmployeeRoleContainer = observer(() => {
    var { data } = useEmployeeContext();

    return (
        <div className='font-medium pb-10 flex justify-start flex-col'>
            <Title titlecontent='Thiết lập vai trò nhân viên:' />

            <div className='grid grid-cols-12 w-full bg-bgBlue h-7 items-center'>
                <div className='col-span-1 flex justify-center '>STT</div>
                <div className='col-span-3 flex justify-start '>Vai trò</div>
                <div className='col-span-8 flex justify-start '>Địa điểm làm việc</div>
            </div>
            <div className='mt-2 grid grid-cols-12 w-full items-start'>
                <div className='col-span-1 flex justify-center'>{data.vaitro && <p className='px-3'>1</p>}</div>
                <div className='col-span-3'>
                    <div className='flex flex-col w-full '>
                        {data.vaitro !== undefined && (
                            <div className='flex items-center gap-2'>
                                {data.vaitro}
                                <button
                                    onClick={() => {
                                        data.vaitro = undefined;
                                        data.address = [];
                                    }}
                                >
                                    <Icon path={mdiTrashCanOutline} size={0.7} />
                                </button>
                            </div>
                        )}
                        {data.vaitro === undefined && (
                            <>
                                <div className='text-red-300 text-lmd'>Nhân viên chưa có vai trò nào</div>
                                <Popover arrow={false} placement='bottomLeft' trigger='click' content={<PopoverRole />}>
                                    <div className='my-2 flex items-center text-xs gap-1 cursor-pointer text-textColorBlue font-[400]'>
                                        <Icon path={mdiPlus} size={0.6} />
                                        <p className='underline'>Thêm vai trò</p>
                                    </div>
                                </Popover>
                            </>
                        )}
                    </div>
                </div>
                <div className='col-span-8 text-md font-normal'>
                    {data.vaitro && data.address && data.address.length > 0 && (
                        <div className='flex flex-col gap-3'>
                            {data.address.map((item: any, key: number) => {
                                return <div key={key}>{item}</div>;
                            })}
                        </div>
                    )}
                    {data.vaitro && (
                        <Popover content={<PopoverAddress />} trigger='click' arrow={false} placement='bottom'>
                            <div className='cursor-pointer w-[300px] py-2 border-b flex justify-between items-center text-md font-normal text-textColorGray'>
                                <span className=''>Chọn địa điểm làm việc</span>
                                <Icon path={mdiChevronDown} size={0.7} />
                            </div>
                        </Popover>
                    )}
                </div>
            </div>
        </div>
    );
});
