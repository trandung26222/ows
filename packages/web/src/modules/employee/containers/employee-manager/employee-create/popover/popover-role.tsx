import { mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';
import { useEmployeeContext } from 'core-modules';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { ItemRole } from 'src/modules/employee/components/employee-manager/employee-create/item-role';

export const PopoverRole = observer(() => {
    var { listRole } = useEmployeeContext();
    var [textinput, settextinput] = useState('');
    var [data, setData] = useState<any>([]);
    useEffect(() => {
        var tmp = listRole.filter((item: any) => item.loai.includes(textinput));
        setData([...tmp]);
    }, [textinput]);

    return (
        <div
            className='w-[400px] h-[250px] overflow-auto'
            style={{
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'thin',
                scrollbarColor: '#888 #f1f1f1'
            }}
        >
            <div className='flex items-center gap-3'>
                <Icon path={mdiMagnify} size={0.8} />
                <input
                    onChange={(e) => {
                        settextinput(e.target.value);
                    }}
                    type='text'
                    placeholder='Nhập vai trò'
                    className='outline-none border-b-[1px] border-b-blue-200 px-2 w-full h-[30px]'
                />
            </div>
            <div className='flex flex-col'>
                {data.map((item: any, index: number) => {
                    return <ItemRole props={item} key={index} />;
                })}
            </div>
        </div>
    );
});
