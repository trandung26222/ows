import { IoMdSearch } from "react-icons/io";


function Nav() {
    return (
        <div className=" h-[33px]  w-full mb-2 flex items-center bobl justify-between cursor-pointer">
            <NavlinkItems under={false} />
            <div className="h-full w-[200px]  px-1 py-1 flex items-center relative">
                <input type="text" className="w-full h-full rounded-full bobl px-6" placeholder="Search" />
                <IoMdSearch className="absolute left-3" />
            </div>
        </div>
    )
}

interface NavlinkItemsProps {
    under: Boolean; // Định nghĩa kiểu của thuộc tính under là một chuỗi
}

export const NavlinkItems: React.FC<NavlinkItemsProps> = ({ under }) => {
    var classnamea = `px-3 h-full cursor-pointer text-center text-blue-300 content-center ${under && 'underline'}`
    return (
        <div className="flex items-center h-full">
            <a className={classnamea}>Home</a>
            <span className="divider "></span>
            <a className={classnamea}>Students</a>
            <span className="divider"></span>
            <a className={classnamea}>Courses</a>
            <span className="divider"></span>
            <a className={classnamea}>About Us</a>
            <span className="divider"></span>
            <a className={classnamea}>Contact Us</a>
        </div>
    )
}

export default Nav