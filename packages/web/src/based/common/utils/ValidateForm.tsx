var messagecustom = (p: any) => {
    return (
        <p className=" text-[12px] text-[rgba(255, 121, 103, 0.8)] my-[5px] font-[400]">
            {p}
        </p>
    );
};

const isNumber = (char: any) => {
    return /^\d$/.test(char);
};

export const phoneNumberValidator = (_: any, value: any) => {
    if (!/^\d+$/.test(value)) {
        return Promise.reject(messagecustom("Số điện thoại không hợp lệ!"));
    }
    if (value.length < 8) {
        return Promise.reject(messagecustom("Số điện thoại phải có ít nhất 8 số!"));
    }
    if (value.length > 10) {
        return Promise.reject(
            messagecustom("Số điện thoại không được vượt quá 10 số!")
        );
    }
    return Promise.resolve();
};

export const usernameValidator = (_: any, value: any) => {
    if (!value) return Promise.reject(messagecustom("Vui lòng nhập tên!"));
    if (isNumber(value[0]) === true) {
        return Promise.reject(
            messagecustom("Tên tài khoản không được bắt đầu bằng số!")
        );
    }
    if (value.length < 6) {
        return Promise.reject(messagecustom("Tên tài khoản có ít nhất 6 ký tự!"));
    }
    if (value.length > 20) {
        return Promise.reject(messagecustom("Tên tài khoản có tối đa 20 ký tự!"));
    }
    return Promise.resolve();
};
export const GioiTinhValidator = (_: any, value: any) => {
    if (!value) {
        return Promise.reject(messagecustom("Vui lòng chọn giới tính!"));
    }
    return Promise.resolve();
};

export const EmailValidator = (_: any, value: any) => {
    if (!value) {
        return Promise.reject(messagecustom("Vui lòng nhập email!"));
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
        return Promise.reject(messagecustom("Email không hợp lệ!"));
    }
    return Promise.resolve();
};