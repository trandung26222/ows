import Content from "../containers/Content"
import Footer from "../containers/Footer"
import Header from "../containers/Header"
import Nav from "../containers/Nav"

export const PublicScreen = () => {
    return <div className="w-[100vw] h-[100vh] p-[15px] text-[12px]">
        <Header />
        <Nav />
        <Content />
        <Footer />
    </div>
}