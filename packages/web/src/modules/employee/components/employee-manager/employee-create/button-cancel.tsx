import { useManagementEmployeeContext } from 'core-modules';
import { observer } from 'mobx-react';

export const ButtonCancel = observer(() => {
    let { setIsCreate, setItemUpdate } = useManagementEmployeeContext();
    return (
        <button
            className='text-[13px] font-[600]'
            onClick={() => {
                setIsCreate(false);
                setItemUpdate(undefined);
            }}
        >
            Hủy bỏ
        </button>
    );
});
