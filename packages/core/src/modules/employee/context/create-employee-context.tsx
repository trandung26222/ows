import _ from 'lodash';
import { observer } from 'mobx-react';
import { createContext, useContext, useEffect, useState } from 'react';
import { AddressModel } from '../../../models/AddressModel';
import { EmployeeModel } from '../../../models/EmployeeModel';
import { dataDepartment, dataManager, dataPosition, dataRole, seedAddress } from '../data/data';
import { useManagementEmployeeContext } from './management-employee-context';

interface EmployeeContextType {
    data: EmployeeModel;
    setdata: (value: EmployeeModel) => void;
    errors?: IEmployeeFormError;
    onCreate: () => void;
    // ----------------------------------------------------------------
    listRole: any;
    isAddAddress: boolean;
    setisAddAddress: (value: any) => void;
    listDepartment: any;
    listPosition: any;
    listManager: any;
    listAddress: AddressModel[];
    dataAddress: AddressModel;
}

interface IEmployeeFormError {
    name?: string;
    username?: string;
    email?: string;
    phone?: string;
    password?: string;
}

export const EmployeeContext = createContext<EmployeeContextType>({
    data: new EmployeeModel(),
    setdata: () => {},
    errors: {},
    onCreate: () => {},
    isAddAddress: false,
    setisAddAddress: (value: any) => {},
    listDepartment: [],
    listPosition: [],
    listManager: [],
    listAddress: [],
    dataAddress: new AddressModel(),
    listRole: []
});

function useHookEmployee(): EmployeeContextType {
    const [data, setdata] = useState<EmployeeModel>(new EmployeeModel());
    const [errors, setErrors] = useState<IEmployeeFormError>({});
    const [listRole, setListRole] = useState<any>([]);
    const [isAddAddress, setisAddAddress] = useState<boolean>(false);
    const [listDepartment, setlistDepartment] = useState<any>([]);
    const [listPosition, setlistPosition] = useState<any>([]);
    const [listManager, setlistManager] = useState<any>([]);
    const [listAddress, setlistAddress] = useState<AddressModel[]>([]);
    const [dataAddress, setdataAddress] = useState<any>(new AddressModel());

    const { itemUpdate, datas, setIsCreate, isCreate } = useManagementEmployeeContext();

    useEffect(() => {
        setListRole([...dataRole]);
        setlistDepartment([...dataDepartment]);
        setlistPosition([...dataPosition]);
        setlistManager([...dataManager]);
        setlistAddress([...seedAddress]);
        setErrors({ username: '', email: '', password: '', phone: '', name: '' });
    }, []);

    useEffect(() => {
        itemUpdate && setdata(itemUpdate);
    }, [itemUpdate]);

    const onCreate = () => {
        let newErr = { username: '', email: '', password: '', phone: '', name: '' };

        if (data.username === undefined) {
            newErr.username = 'Vui lòng nhập tên đăng nhập';
        }
        if (data.email === undefined) {
            newErr.email = 'Vui lòng nhập email';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email!)) {
            newErr.email = 'Email không đúng định dạng';
        }
        if (data.name === undefined) {
            newErr.name = 'Vui lòng nhập tên nhân viên';
        }
        if (data.password === undefined) {
            newErr.password = 'Vui lòng nhập mật khẩu';
        }
        if (data.phone === undefined) {
            newErr.phone = 'Vui lòng nhập số điện thoại';
        }

        setErrors(newErr);
        const allFieldsEmpty = Object.values(newErr).every((error) => error === '');
        if (allFieldsEmpty) {
            let newdata = new EmployeeModel();
            _.assign(newdata, data);
            datas.push(newdata);
            setIsCreate(false);
        }
    };

    useEffect(() => {
        setdata(new EmployeeModel());
    }, [isCreate]);

    return {
        data,
        setdata,
        errors,
        onCreate,
        listRole,
        isAddAddress,
        setisAddAddress,
        listDepartment,
        listPosition,
        listManager,
        listAddress,
        dataAddress
    };
}

export const EmployeeProvider = observer(({ children }: any) => {
    const value = useHookEmployee();
    return <EmployeeContext.Provider value={value}>{children}</EmployeeContext.Provider>;
});
export function useEmployeeContext(): EmployeeContextType {
    return useContext(EmployeeContext) as EmployeeContextType;
}
