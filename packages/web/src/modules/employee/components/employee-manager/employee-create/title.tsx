interface IProps {
    titlecontent: string;
}

export const Title = ({ titlecontent }: IProps) => {
    return (
        <>
            <div className='flex items-center justify-between w-full h-[48px] px-4 border-y'>
                <span className='text-lgm font-medium'>{titlecontent}</span>
            </div>
        </>
    );
};
