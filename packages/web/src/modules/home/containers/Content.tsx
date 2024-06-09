import MiddleContent from "../components/MiddleContent"
import SidebarLeft from "../components/SidebarLeft"
import SidebarRight from "../components/SidebarRight"
function Content() {
    return (
        <div className=" w-full flex mb-2">
            <SidebarLeft />
            <MiddleContent />
            <SidebarRight />

        </div>
    )
}

export default Content