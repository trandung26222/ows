import { makeObservable, observable } from 'mobx';

export class EmployeeModel {
    @observable id?: number;
    @observable avartar?: string = undefined;
    @observable name?: string = undefined;
    @observable username?: string = undefined;
    @observable email?: string = undefined;
    @observable vaitro?: string = undefined;
    @observable phone?: string = undefined;
    @observable address?: string[] = [];
    @observable phongban?: string = undefined;
    @observable chucvu?: string = undefined;
    @observable nguoiquanly?: string = undefined;
    @observable ngaysinh?: string = undefined;
    @observable gioitinh?: string = undefined;
    @observable ngonngu?: string = undefined;
    @observable trangthai?: string = undefined;
    @observable password?: string = undefined;

    constructor() {
        makeObservable(this);
    }
}
