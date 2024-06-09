import { AddressModel } from '../../../models/AddressModel';
import { EmployeeModel } from '../../../models/EmployeeModel';

export const dataManager = [
    { id: 0, item: 'Quan ly 1' },
    { id: 1, item: 'Quan ly 2' },
    { id: 2, item: 'Quan ly 3' },
    { id: 3, item: 'Quan ly 4' }
];
export const dataPosition = [
    { id: 0, item: 'Quản lý' },
    { id: 1, item: 'Nhân viên' }
];

export const dataDepartment = [
    { id: 0, item: 'Sale' },
    { id: 1, item: 'Marketing' },
    { id: 2, item: 'Nhân sự' }
];
export const dataRole = [
    { id: 0, loai: 'Nhân viên bán hàng', ngaytao: '27/07/2022', sonhanvien: 8 },
    { id: 1, loai: 'Nhân viên Marketing', ngaytao: '27/07/2022', sonhanvien: 23 },
    { id: 2, loai: 'Nhân viên kho', ngaytao: '27/07/2022', sonhanvien: 60 },
    { id: 3, loai: 'Nhân viên Sale', ngaytao: '27/07/2022', sonhanvien: 80 },
    { id: 4, loai: 'Nhân viên Content Marketing', ngaytao: '27/07/2022', sonhanvien: 180 }
];

export const dataEmployee: EmployeeModel[] = [
    {
        id: 0,
        avartar:
            'https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg',
        name: 'Đặng Thị Chinh',
        username: 'chinhdt',
        email: 'chinhdt@ows.com.vn',
        vaitro: 'Nhân viên kho',
        nguoiquanly: 'SM Nghĩa Trần',
        phone: '0968886686',
        address: [],
        trangthai: 'Hoạt động',
        chucvu: 'Quản lý',
        gioitinh: 'Nữ',
        ngaysinh: '11/10/1999',
        ngonngu: 'Tiếng Việt',
        password: '123456',
        phongban: 'Sale'
    },
    {
        id: 1,
        avartar:
            'https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?cs=srgb&dl=pexels-olly-874158.jpg&fm=jpg',
        name: 'Trần X Dũng',
        username: 'trandung',
        email: 'dungtx@ows.com.vn',
        vaitro: 'Nhân viên Marketing',
        nguoiquanly: 'SM Nghĩa Trần',
        phone: '0988888888',
        address: [],
        trangthai: 'Khóa',
        chucvu: 'Nhân viên',
        gioitinh: 'Nam',
        ngaysinh: '11/12/2001',
        ngonngu: 'Tiếng Việt',
        password: '123456',
        phongban: 'Marketing'
    }
    // {
    //     id: 2,
    //     avartar:
    //         'https://st.depositphotos.com/2208684/2812/i/450/depositphotos_28123979-stock-photo-portrait-of-professional-smiling-businessman.jpg',
    //     name: 'TranDung3',
    //     username: 'TranDung3',
    //     email: 'TranDung3',
    //     vaitro: 'Admin',
    //     nguoiquanly: 'TranDung3',
    //     phone: 22222222222,
    //     address: []
    // }
    // {
    //     id: 3,
    //     avartar: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    //     name: 'TranDung4',
    //     username: 'TranDung4',
    //     email: 'TranDung4',
    //     vaitro: 'Admin',
    //     nguoiquanly: 'TranDung4',
    //     phone: 33333333333,
    //     address: []
    // }
];

export const seedAddress: AddressModel[] = [
    {
        id: 0,
        tendiadiem: 'Kho Thanh Xuân',
        diachi: '574 Nguyễn Đức Dục, Thanh Xuân, Hà Nội',
        loai: 'Kho',
        tinhthanhpho: 'Hà Nội',
        quanhuyen: 'Hà Nội',
        phuongxa: 'Thanh Xuân',
        nguoiphutrach: 'TranDung',
        sodienthoai: '0988888888',
        trangthai: 'Đang sử dụng',
        ghichu: 'Kho Thanh Xuân'
    },
    {
        id: 1,
        tendiadiem: 'Kho Bạch Đằng',
        diachi: '121 Bạch Đằng, Hoàn Kiếm, Hà Nội',
        loai: 'Kho',
        tinhthanhpho: 'Hà Nội',
        quanhuyen: 'Hà Nội',
        phuongxa: 'Hoàn Kiếm',
        nguoiphutrach: 'TranDung',
        sodienthoai: '0988989898',
        trangthai: 'Đang sử dụng',
        ghichu: 'Kho Bạch Đằng'
    },
    {
        id: 2,
        tendiadiem: 'Kho Hà Đông',
        diachi: 'Ngõ 2, Ao Sen, Mỗ Lao, Hà Đông, Hà Nội',
        loai: 'Điểm bán',
        tinhthanhpho: 'Hà Nội',
        quanhuyen: 'Hà Nội',
        phuongxa: 'Mỗ Lao',
        nguoiphutrach: 'TranDung',
        sodienthoai: '0912345678',
        trangthai: 'Đang sử dụng',
        ghichu: 'Kho Hà Đông'
    }
];
