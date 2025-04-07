import {Outlet, Route, Routes, useLocation} from "react-router-dom";
import {routesEnum} from "@/app/routes/routesEnum";
import Navbar from "@/components/Navbar";
import useCharactersStore from "@/store/store";
import ModalWindow from "@/components/ModalWindow";
import Home from "@/pages/HomePage";
import Characters from "@/pages/CharactersPage";
import Error from "@/pages/ErrorPage";

const Router = ()  => {
    const location = useLocation();
    let {modalOpen} = useCharactersStore();

    const isErrorPage = location.pathname !== routesEnum.HOME && location.pathname !== routesEnum.CHARACTERS;
    return (
        <div style={{position:'relative'}} className="app">
            {modalOpen && <ModalWindow />}
            {!isErrorPage && <Navbar />}
            <Routes>
                <Route>
                    <Route path={routesEnum.HOME} element={<Home/>} />
                    <Route path={routesEnum.CHARACTERS} element={<Characters/>} />
                    <Route path={routesEnum.ERROR} element={<Error/>} />
                </Route>
            </Routes>
            <Outlet />
        </div>
    );
}

export default Router;