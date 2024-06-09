import { useEmployeeContext, useManagementEmployeeContext } from 'core-modules';
import { observer } from 'mobx-react';
import { InputText } from 'src/modules/employee/components/employee-manager/employee-create/input-text';

export const EmployeeFormContainer = observer(() => {
    const { data, errors } = useEmployeeContext();
    const { itemUpdate } = useManagementEmployeeContext();
    let PropInputText = {
        widthTotal: 400,
        widthTitle: 153,
        height: 30
    };

    return (
        <form className='flex flex-col w-full py-4'>
            <InputText
                defaultValue={data.name || ''}
                onChange={(e: any) => {
                    data.name = e.target.value;
                }}
                placeholder='Nhập họ và tên'
                title='Họ và tên'
                type='text'
                bigText
                {...PropInputText}
                errorText={errors?.name}
            />
            <InputText
                defaultValue={data.email || ''}
                onChange={(e: any) => {
                    data.email = e.target.value;
                }}
                placeholder='Nhập Email'
                title='Email:'
                type='email'
                {...PropInputText}
                errorText={errors?.email}
            />
            <InputText
                defaultValue={data.phone?.toString() || ''}
                onChange={(e: any) => {
                    data.phone = e.target.value;
                }}
                placeholder='Nhập số điện thoại'
                title='Điện thoại'
                type='text'
                {...PropInputText}
                errorText={errors?.phone}
            />
            <InputText
                defaultValue={data.username || ''}
                onChange={(e: any) => {
                    data.username = e.target.value;
                }}
                placeholder='Nhập tên đăng nhập'
                title='Tên đăng nhập:'
                type='text'
                {...PropInputText}
                errorText={errors?.username}
            />

            {!itemUpdate && (
                <>
                    <InputText
                        defaultValue=''
                        onChange={() => {}}
                        placeholder='Nhập mật khẩu'
                        title='Mật khẩu:'
                        type='password'
                        {...PropInputText}
                        errorText={errors?.password}
                    />
                    <InputText
                        defaultValue=''
                        onChange={() => {}}
                        placeholder='Nhập lại mật khẩu'
                        title='Nhập lại mật khẩu:'
                        type='password'
                        {...PropInputText}
                        errorText={errors?.password}
                    />
                </>
            )}
        </form>
    );
});
