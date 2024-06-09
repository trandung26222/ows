import { ConfigProvider, Dropdown, Input, Radio, message } from 'antd';
import { useEmployeeContext } from 'core-modules';
import { observer } from 'mobx-react';
import { IoClose } from 'react-icons/io5';
import chevron from '../../../../../based/common/icon/Vector.png';

const { TextArea } = Input;


export const ModalAddAddress = observer(() => {
    var { isAddAddress, setisAddAddress } = useEmployeeContext();
    var classnameinput = 'w-full h-[30px] outline-none border-b-[1px] text-lmd text-textColorGray';
    var { listAddress, dataAddress } = useEmployeeContext();
    const items = [
        {
            label: '1st menu item',
            key: '1',
        },
        {
            label: '2nd menu item',
            key: '2',
        },
        {
            label: '3rd menu item',
            key: '3',
        },
    ];
    const onClick = ({ key }: any) => {
        message.info(`Click on item ${key}`);
    };
    return (
        <ConfigProvider theme={theme}>
            <div className='w-[100vw] h-[100vh] top-0 left-0 fixed bg-[rgba(0,0,0,0.3)] z-[100] flex justify-center items-center'>
                <div className='w-[691px] bg-white rounded-sm flex flex-col'>
                    <div className='flex h-[52px] w-full items-center justify-between border-b text-llg px-5 font-medium'>
                        <span>Thêm địa điểm </span>
                        <button
                            onClick={() => {
                                setisAddAddress(!isAddAddress);
                            }}
                        >
                            <IoClose />
                        </button>
                    </div>
                    <div className='flex gap-4 text-[14px] h-auto justify-center px-6'>
                        <div className='flex flex-col gap-[2px] justify-end'>
                            {arrTitle.map((item, index) => {
                                return <ItemTitle key={index} item={item} />;
                            })}
                        </div>
                        <div className='flex flex-col flex-1 gap-[2px] justify-start w-full pr-16'>
                            <input
                                onChange={(e) => {
                                    dataAddress.tendiadiem = e.target.value;
                                }}
                                placeholder='Nhập Địa điểm'
                                className={classnameinput}
                            ></input>

                            <div className='flex items-center gap-12 h-[30px]'>
                                <Radio.Group
                                    options={['Kho', 'Điểm bán']}
                                    onChange={(e) => {
                                        dataAddress.loai = e.target.value;
                                    }}
                                />
                            </div>
                            {/* <input
                                onChange={(e) => {
                                    dataAddress.tinhthanhpho = e.target.value;
                                }}
                                placeholder='Chọn Tỉnh/Thành phố'
                                className={classnameinput}
                            ></input> */}

                            <Dropdown
                                menu={{
                                    items,
                                    onClick,
                                }}
                            >
                                <div className={`${classnameinput} cursor-pointer flex items-center w-full justify-between`}
                                    onClick={(e) => e.preventDefault()}>
                                    <div className='flex items-center w-full justify-between'>
                                        Chọn Tỉnh/Thành phố
                                        <img src={chevron} alt="" />
                                    </div>
                                </div>
                            </Dropdown>

                            <Dropdown
                                menu={{
                                    items,
                                    onClick,
                                }}
                            >
                                <div className={`${classnameinput} cursor-pointer flex items-center w-full justify-between`}
                                    onClick={(e) => e.preventDefault()}>
                                    <div className='flex items-center w-full justify-between'>
                                        Chọn Quận/Huyện
                                        <img src={chevron} alt="" />
                                    </div>
                                </div>
                            </Dropdown>


                            <Dropdown
                                menu={{
                                    items,
                                    onClick,
                                }}
                            >
                                <div className={`${classnameinput} cursor-pointer flex items-center w-full justify-between`}
                                    onClick={(e) => e.preventDefault()}>
                                    <div className='flex items-center w-full justify-between'>
                                        Chọn Phường/Xã
                                        <img src={chevron} alt="" />
                                    </div>
                                </div>
                            </Dropdown>
                            <input
                                onChange={(e) => {
                                    dataAddress.diachi = e.target.value;
                                }}
                                type='text'
                                placeholder='Nhập Địa chỉ'
                                className={classnameinput}
                            />
                            <Dropdown
                                menu={{
                                    items,
                                    onClick,
                                }}
                            >
                                <div className={`${classnameinput} cursor-pointer flex items-center w-full justify-between`}
                                    onClick={(e) => e.preventDefault()}>
                                    <div className='flex items-center w-full justify-between'>
                                        Chọn người phụ trách kho
                                        <img src={chevron} alt="" />
                                    </div>
                                </div>
                            </Dropdown>
                            <input
                                onChange={(e) => {
                                    dataAddress.sodienthoai = e.target.value;
                                }}
                                type='text'
                                placeholder='Nhập Số điện thoại'
                                className={classnameinput}
                            />
                            <div className='flex gap-12 items-center h-[30px]'>
                                <Radio.Group
                                    onChange={(e) => {
                                        dataAddress.trangthai = e.target.value;
                                    }}
                                    options={['Đang sử dụng', 'Ngưng sử dụng']}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='flex w-full items-center justify-center mb-3'>
                        <ConfigProvider theme={themeTextArea}>
                            <TextArea
                                className='w-[500px] h-[67px]'
                                onChange={(e: any) => {
                                    dataAddress.ghichu = e.target.value;
                                }}
                                placeholder='Nhập nội dung ghi chú'
                                autoSize={{
                                    minRows: 2,
                                    maxRows: 6
                                }}
                            />
                        </ConfigProvider>
                    </div>

                    <div className='flex justify-end items-center gap-7 px-6 h-[56px] border-t'>
                        <button className='h-[40px] text-lmd font-medium'>Hủy bỏ</button>
                        <button
                            onClick={async (e) => {
                                e.preventDefault();
                                var tmp = JSON.parse(JSON.stringify(dataAddress));
                                listAddress.push(tmp);
                                await new Promise((resolve) => setTimeout(resolve, 100));
                                setisAddAddress(!isAddAddress);
                            }}
                            className='w-[48px] h-[32px] border-colorActive border text-lmd font-medium'
                        >
                            Lưu
                        </button>
                    </div>
                </div>
            </div>
        </ConfigProvider>

    );
});

var themeTextArea = {
    token: {
        colorPrimary: '#B2B2B2',
        colorPrimaryActive: '#B2B2B2',
        colorPrimaryHover: '#B2B2B2'
    }
};
var ItemTitle = ({ item }: any) => {
    return <div className='w-full h-[30px] text-md font-normal text-end content-center'>{item}</div>;
};
var arrTitle = [
    'Địa điểm:',
    'Loại hình:',
    'Tỉnh/ Thành phố:',
    'Quận/ Huyện:',
    'Phường/ Xã:',
    'Địa chỉ:',
    'Người phụ trách:',
    'Số điện thoại:',
    'Trạng thái:',
    'Ghi chú:'
];
var theme = {
    token: {
        colorPrimary: 'black',
        colorPrimaryBorder: "#000000",
        controlItemBgActive: "#000000",
        controlItemBgActiveHover: "#000000"
    },
}