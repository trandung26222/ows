import iconedit from '../../../../../based/common/icon/edit-outline.svg';

export const ButtonUpdate = ({ handleClick }: any) => {
    return (
        <div
            className='flex w-[103px] h-[32px] gap-2 items-center justify-center border text-lmd font-medium cursor-pointer'
            onClick={() => {
                handleClick();
            }}
        >
            <img src={iconedit} alt='' />
            Cập nhật
        </div>
    )
}