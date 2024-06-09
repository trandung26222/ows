import { NavlinkItems } from "./Nav";
function Footer() {
    return (
        <div className="w-full h-[50px] bobl flex px-4 items-center justify-between">
            <p>@2012 - TapChiLapTrinh</p>
            <NavlinkItems under={true} />
        </div>
    )
}

interface NavlinkItemsProps {
    under: Boolean; // Định nghĩa kiểu của thuộc tính under là một chuỗi
}


export default Footer