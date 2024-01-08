import {Navbar} from "../component/Navbar";
import {Sidebar} from "../component/Sidebar";
import {Outlet} from "react-router-dom";

export const DashboardLayout = () => {
    return (
        <>
            <div>
                <Navbar/>
                <Sidebar/>
                <Outlet/>
            </div>
        </>
    )
}
