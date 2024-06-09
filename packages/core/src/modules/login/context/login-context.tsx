import { makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react';
import React, { useCallback, useState } from 'react';

export class LoginModel {           // tạo model để làm observable
    @observable username?: string = undefined;
    @observable password?: string = undefined;
    @observable email?: string = undefined;
    constructor() {
        makeObservable(this);
    }
}

export class LoginContextType {    // tạo kiểu cho context 
    onLogin!: () => void;  // bắt buộc khác null và undefined
    data?: LoginModel;  // null hoặc undefined hoặc không co gt
};
export const LoginContext = React.createContext<LoginContextType>({    // tạo context dựa trên kiểu, và khởi tạo giá trị mặc định 
    onLogin: () => { },
    data: undefined,
});
interface IProps {           // tạo interface cho PropChildren bọc lấy 
    children: React.ReactNode;
}
export const LoginProvider = observer(({ children }: IProps) => {  // tạo provider bọc lấy children
    const value = useHookLogin();
    return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
})

function useHookLogin(): LoginContextType {         // tạo hook để sử dụng trong Provider có kiểu là logincontexttype
    const [data, setData] = useState<LoginModel>(new LoginModel());

    const onLogin = useCallback(() => {
        let param = {
            username: data.username,
            password: data.password
        }
        //call api
    }, [])
    return {
        onLogin,
        data,
    }
}

export function useLoginContext(): LoginContextType {
    return React.useContext(LoginContext) as LoginContextType
}