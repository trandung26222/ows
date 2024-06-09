
function MiddleContent() {
    return (
        <div className="content w-full px-4">
            <div className="w-full h-[100px]  flex justify-between mb-2">
                <div className="flex-1 h-full bobl mr-2 tccc">
                    Hot new
                </div>
                <div className="flex-1 h-full bobl tccc">
                    PhotoSide
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
                <div className="bobl p-4 h-[140px] tccc">News 1</div>
                <div className="bobl p-4 h-[140px] tccc">News 2</div>
                <div className="bobl p-4 h-[140px] tccc">News 3</div>
                <div className="bobl p-4 h-[140px] tccc">News 4</div>
                <div className="bobl p-4 h-[140px] tccc">News 5</div>
                <div className="bobl p-4 h-[140px] tccc">News 6</div>
            </div>
        </div>
    )
}

export default MiddleContent