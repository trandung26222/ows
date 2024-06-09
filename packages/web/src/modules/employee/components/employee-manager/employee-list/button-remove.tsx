import deletIcon from '../../../../../based/common/icon/delete-outline.png';

export const ButtonRemove = ({ handleClick }: any) => {
    return (
        <button className='cursor-pointer'
            onClick={() => {
                handleClick()
            }}
        >
            <img src={deletIcon} alt="" />
        </button>
    )
}