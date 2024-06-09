import { useEmployeeContext, useManagementEmployeeContext } from 'core-modules';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { InputDate } from 'src/modules/employee/components/employee-manager/employee-create/input-date';
import { InputDropdown } from 'src/modules/employee/components/employee-manager/employee-create/input-dropdown';
import { InputRadioGroup } from 'src/modules/employee/components/employee-manager/employee-create/input-radio-group';
import { Title } from 'src/modules/employee/components/employee-manager/employee-create/title';
import jpicon from '../../../../../based/common/icon/japan.png';
import vnicon from '../../../../../based/common/icon/vietnam.png';

export const EmployeeDetailInfoContainer = observer(() => {
    var [anhien, setanhien] = useState('Thêm chi tiết');

    const { data, listDepartment, listPosition, listManager } = useEmployeeContext();
    const { itemUpdate } = useManagementEmployeeContext();

    const itemsdepartment = listDepartment.map((item: any): any => {
        return {
            key: item.id,
            label: item.item
        };
    });
    const itemsposition = listPosition.map((item: any) => {
        return {
            key: item.id,
            label: item.item
        };
    });
    var itemsmanager = listManager.map((item: any) => {
        return {
            key: item.id,
            label: item.item
        };
    });

    var PropsInput = {
        height: 35,
        gap: 10,
        widthTotal: 369,
        widthTitle: 113
    };

    return (
        <>
            <Title titlecontent='Thông tin chi tiết nhân viên:' />
            <div className='flex justify-start flex-col w-[369px] py-2 px-4'>
                <span
                    onClick={() => {
                        setanhien(anhien === 'Thêm chi tiết' ? 'Ẩn chi tiết' : 'Thêm chi tiết');
                    }}
                    className='text-xs text-blue-300 underline cursor-pointer mb-3'
                >
                    {anhien}
                </span>

                {anhien === 'Ẩn chi tiết' && (
                    <>
                        <div className='flex flex-col'>
                            <InputDropdown
                                title='Phòng ban'
                                {...PropsInput}
                                dataplaceholder={data.phongban}
                                placeholder='Chọn phòng ban'
                                items={itemsdepartment}
                                onClickItem={({ key }) => {
                                    data.phongban = itemsdepartment[key].label;
                                }}
                            />
                            <InputDropdown
                                title='Chức vụ'
                                {...PropsInput}
                                dataplaceholder={data.chucvu}
                                placeholder='Chọn chức vụ'
                                items={itemsposition}
                                onClickItem={({ key }) => {
                                    data.chucvu = itemsposition[key].label;
                                }}
                            />
                            <InputDropdown
                                title='Quản lý trực tiếp'
                                {...PropsInput}
                                dataplaceholder={data.nguoiquanly}
                                placeholder='Chọn người quản lý trực tiếp'
                                items={itemsmanager}
                                onClickItem={({ key }) => {
                                    data.nguoiquanly = itemsmanager[key].label;
                                }}
                            />
                            {!itemUpdate && (
                                <>
                                    <InputDate
                                        {...PropsInput}
                                        title='Ngày sinh'
                                        onChange={(value: string) => {
                                            data.ngaysinh = value;
                                        }}
                                    />
                                    <InputRadioGroup
                                        {...PropsInput}
                                        title='Giới tính'
                                        items={['Nam', 'Nữ', 'Khác']}
                                        onChange={(value) => {
                                            data.gioitinh = value;
                                        }}
                                    />
                                </>
                            )}
                            <InputRadioGroup
                                {...PropsInput}
                                title='Ngôn ngữ'
                                items={['Tiếng Việt', 'Tiếng Nhật']}
                                onChange={(value) => {
                                    data.ngonngu = value;
                                }}
                                icons={[<img alt='' src={vnicon} />, <img alt='' src={jpicon} />]}
                                defaultValue={data.ngonngu}
                            />
                        </div>
                    </>
                )}
            </div>
        </>
    );
});
