import _ from 'lodash';
import { observer } from 'mobx-react';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { EmployeeModel } from '../../../models';
import { dataEmployee } from '../data/data';

interface IManagementEmployeeContextType {
    datas: EmployeeModel[];
    itemUpdate?: EmployeeModel;
    setItemUpdate: (value: any) => void;
    isCreate: boolean;
    setIsCreate: (value: boolean) => void;
    onRemove: (id: number) => void;
    getItemUpdate: (id: number) => void;
    onUpdate: () => void;
}
const ManagementEmployeeContext = createContext<IManagementEmployeeContextType>({
    datas: [],
    itemUpdate: undefined,
    setItemUpdate: () => {},
    isCreate: false,
    setIsCreate: () => {},
    onRemove: () => {},
    getItemUpdate: () => {},
    onUpdate: () => {}
});

function useHookManagementEmployee(): IManagementEmployeeContextType {
    const [datas, setDatas] = useState<EmployeeModel[]>([]);
    const [itemUpdate, setItemUpdate] = useState<EmployeeModel | undefined>(undefined);
    const [isCreate, setIsCreate] = useState<boolean>(false);

    useEffect(() => {
        if (datas.length === 0) {
            _.forEach(dataEmployee, (employee) => {
                let newdata = new EmployeeModel();
                _.assign(newdata, employee);
                datas.push(newdata);
            });
        }
    }, []);

    const onRemove = (id: number) => {
        let temp = datas.filter((data) => data.id !== id);
        setDatas(temp);
    };
    const onUpdate = () => {
        let temp =
            itemUpdate &&
            datas.map((data) => {
                if (data.id === itemUpdate!.id) {
                    return itemUpdate;
                }
                return data;
            });
        temp && setDatas(temp); // update lại list employee
        // sau khi update xong thì reresh lại itemupdate và đặt lại isUpdate = false
        setItemUpdate(undefined);
    };

    const getItemUpdate = (id: number) => {
        let employee = datas.find((item) => item.id === id);
        let temp = new EmployeeModel();
        _.assign(temp, employee);
        setItemUpdate(temp);
    };

    useEffect(() => {
        if (isCreate) {
            setItemUpdate(undefined);
        }
    }, [isCreate]);

    return {
        datas,
        isCreate,
        setIsCreate,
        itemUpdate,
        setItemUpdate,
        getItemUpdate,
        onRemove,
        onUpdate
    };
}
export const ManagementEmployeeProvider = observer(({ children }: { children: ReactNode }) => {
    const value = useHookManagementEmployee();
    return <ManagementEmployeeContext.Provider value={value}>{children}</ManagementEmployeeContext.Provider>;
});
export function useManagementEmployeeContext(): IManagementEmployeeContextType {
    return useContext(ManagementEmployeeContext) as IManagementEmployeeContextType;
}
