import { EmailValidator, phoneNumberValidator, usernameValidator } from "./ValidateForm";

const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
};

export var propsMainForm = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
    },
    style: {
        maxWidth: 510,
    },
    onFinishFailed: onFinishFailed,
    autoComplete: "off",
    labelAlign: "left",
    scrollToFirstError: true,
};
export var propUserName = {
    label: "Tên",
    name: "username",
    rules: [{ validator: usernameValidator }],

    hasFeedback: true,
};
export var propSodienthoai = {
    label: "Số điện thoại",
    name: "phonenumber",
    rules: [
        {
            validator: phoneNumberValidator,
        },
    ],
    hasFeedback: true,
};

export var propEmail = {
    name: "email",
    label: "Email",
    rules: [{ validator: EmailValidator }],
    hasFeedback: true,


}

export var propLuu = {
    wrapperCol: {
        offset: 10,
    },

};

export const optionChonGioiTinh = [
    {
        label: "Nam",
        value: "nam",
    },
    {
        label: "Nữ",
        value: "nu",
    },
    {
        label: "Khác",
        value: "other",
    },
];