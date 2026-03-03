import { Outlet } from "react-router"
import Header from "../src/components/Header"
import Footer from "../src/components/Footer"
const HomeLayout=()=>
{
return(
    <div>
    <Header/>
    <div className="flex flex-wrap justify-center w-full">
    <Outlet/>
    </div>
    <Footer/>
    </div>
)
}
export default HomeLayout