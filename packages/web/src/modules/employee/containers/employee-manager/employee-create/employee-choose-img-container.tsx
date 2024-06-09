import { useEffect, useState } from 'react';

import { mdiTrayArrowUp } from '@mdi/js';
import Icon from '@mdi/react';
import { Avatar } from 'antd';
import { useEmployeeContext } from 'core-modules';
import { InputRadioGroup } from 'src/modules/employee/components/employee-manager/employee-create/input-radio-group';
import { observer } from 'mobx-react';

type SelectedFile = MediaSource | Blob;
export const EmployeeImgContainer = observer(() => {
    const { data } = useEmployeeContext();
    const [selectedFile, setSelectedFile] = useState<SelectedFile>();
    const [preview, setPreview] = useState<string>();
    useEffect(() => {
        if (selectedFile) {
            const objectUrl = URL.createObjectURL(selectedFile);
            setPreview(objectUrl);

            return () => URL.revokeObjectURL(objectUrl);
        }
    }, [selectedFile]);
    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined);
            return;
        }
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreview((pre) => objectUrl);
        data.avartar = objectUrl;
    }, [selectedFile, data]);

    const onSelectFile = (e: any) => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined);
            return;
        }
        setSelectedFile(e.target.files[0]);
    };

    return (
        <div className='flex flex-col items-center w-[300px] h-full gap-3 py-9 '>
            {data.avartar ? (
                <Avatar size={100} src={data.avartar} />
            ) : (
                <>
                    {selectedFile ? (
                        <Avatar size={100} src={preview} />
                    ) : (
                        <div className='flex flex-col h-[100px] w-[100px] rounded-full bg-bgGray items-center gap-1 justify-center'>
                            <Icon path={mdiTrayArrowUp} size={0.7} />
                            <label className='cursor-pointer text-textColorBlue' htmlFor='fileInput'>
                                Chọn ảnh
                            </label>
                            <input id='fileInput' type='file' onChange={onSelectFile} className='hidden' />
                        </div>
                    )}
                </>
            )}
            <StatusCheck />
        </div>
    );
});

const StatusCheck = observer(() => {
    const { data } = useEmployeeContext();
    return (
        <InputRadioGroup
            key={123}
            height={24}
            title='Trạng thái'
            gap={8}
            widthTitle={80}
            widthTotal={280}
            items={['Khóa', 'Hoạt động']}
            onChange={(value: string) => {
                console.log('data.trangthai', data.trangthai);
                data.trangthai = value;
            }}
            titleFontNormal
            defaultValue={data.trangthai}
        />
    );
});
