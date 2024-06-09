import { mdiDatabaseOutline, mdiPlus, mdiStorefrontOutline } from '@mdi/js';
import Icon from '@mdi/react';
import { Checkbox, ConfigProvider } from 'antd';
import _ from 'lodash';
import { observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { useEmployeeContext } from '../../../../../../../../core/src/modules/employee';
import sorticon from '../../../../../../based/common/icon/sorticon.png';
import { ModalAddAddress } from '../../modal-add-address/modal-add-address';

export const PopoverAddress = observer(() => {
    var { listAddress, isAddAddress, setisAddAddress } = useEmployeeContext();
    var [chooseTab, setChooseTab] = useState('Kho');
    var classnametab = 'cursor-pointer h-full flex items-center gap-2';
    var bordertab = 'border-b-[1px] border-blue-400';

    var [data, setData] = useState([...listAddress]);
    var [a2z, seta2z] = useState(false);

    var sapxepItems = () => {
        seta2z((pre) => !pre);
    };
    useEffect(() => {
        if (a2z) {
            let sorted_obj = _.sortBy(data, [
                function (o) {
                    return o.tendiadiem;
                }
            ]);
            setData([...sorted_obj]);
        } else {
            let sorted_obj = _.sortBy(data, [
                function (o) {
                    return o.tendiadiem;
                }
            ]).reverse();
            setData([...sorted_obj]);
        }
    }, [a2z]);

    useEffect(() => {
        if (chooseTab === 'Kho') {
            var tmp = listAddress.filter((item) => item.loai === 'Kho');
            setData([...tmp]);
        } else {
            tmp = listAddress.filter((item) => item.loai === 'Điểm bán');
            setData([...tmp]);
        }
    }, [chooseTab]);

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#7dde50',
                    colorPrimaryBorder: '#7dde50',
                    colorPrimaryHover: '#7dde50'
                }
            }}
        >
            <div
                className='w-[300px] h-[210px] overflow-auto'
                style={{
                    WebkitOverflowScrolling: 'touch', // Cho cuộn mượt trên thiết bị cảm ứng
                    scrollbarWidth: 'thin', // Độ rộng của thanh cuộn
                    scrollbarColor: '#888 #f1f1f1' // Màu của thanh cuộn và màu nền của thanh cuộn
                }}
            >
                <div className='flex justify-between items-center h-[35px] border-b '>
                    <div className='flex gap-3 h-full'>
                        <div
                            className={` ${classnametab} ${chooseTab === 'Kho' && bordertab} `}
                            onClick={() => {
                                setChooseTab('Kho');
                            }}
                        >
                            <Icon path={mdiDatabaseOutline} size={0.7} />
                            Kho
                        </div>
                        <div
                            className={` ${classnametab} ${chooseTab === 'Điểm bán' && bordertab} `}
                            onClick={() => {
                                setChooseTab('Điểm bán');
                            }}
                        >
                            <Icon path={mdiStorefrontOutline} size={0.7} /> Cửa hàng
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <button className='cursor-pointer' onClick={sapxepItems}>
                            <img src={sorticon} alt='' />
                        </button>
                        <button
                            onClick={() => {
                                setisAddAddress(!isAddAddress);
                            }}
                        >
                            <Icon path={mdiPlus} size={0.7} />
                        </button>
                    </div>
                </div>
                <input
                    className='h-[33px] rounded-sm border outline-none my-1 w-full px-2 mb-2'
                    type='text'
                    placeholder='Tìm kiếm'
                />
                {data &&
                    data.map((item: any) => {
                        return <ItemAddress key={`${item.tendiadiem} - ${item.diachi}`} item={item} />;
                    })}
            </div>
            {isAddAddress && <ModalAddAddress />}
        </ConfigProvider>
    );
});

const ItemAddress = observer(({ item }: any) => {
    var strdiadiem = `${item.tendiadiem} - ${item.diachi}`;
    var { data } = useEmployeeContext();

    var [isCheck, setisCheck] = useState(() => {
        return data.address!.includes(strdiadiem);
    });

    var setCheck = () => {
        setisCheck((pre) => !pre);
    };

    useEffect(() => {
        if (isCheck) {
            if (!data.address!.includes(strdiadiem)) {
                data.address! = JSON.parse(JSON.stringify([...data.address!, strdiadiem]));
            }
        } else {
            var tmp = data.address?.filter((o) => o !== strdiadiem);
            data.address! = JSON.parse(JSON.stringify([...tmp!]));
        }
    }, [isCheck]);

    return (
        <div
            onClick={setCheck}
            className='flex gap-2 items-center h-[40px] w-full  my-2 hover:bg-[rgba(0,0,0,0.04)] cursor-pointer'
        >
            <Checkbox checked={isCheck}></Checkbox>
            <div className='flex flex-col'>
                <p className='text-[13px] font-[500]'>{item.tendiadiem}</p>
                <p className='text-[12px] font-[400]'>{item.diachi}</p>
            </div>
        </div>
    );
});
