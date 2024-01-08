import {Menu} from "../component/Menu";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DashboardLayout} from "../layout/DashboardLayout";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<DashboardLayout/>}>
                        <Route index element={<Menu/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
