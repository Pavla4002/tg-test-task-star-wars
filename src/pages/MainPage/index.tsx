import {Route, Routes, useLocation} from "react-router-dom";
import {routesEnum} from "../../app/routes/routesEnum";
import Home from "../HomePage";
import Characters from "../CharactersPage";
import Error from "../ErrorPage";
import Navbar from "../../components/Navbar";
import useCharactersStore from "../../store/store";
import ModalWindow from "../../components/ModalWindow";

const Main = ()  => {
    const location = useLocation();
    let {modalOpen} = useCharactersStore();

    const isErrorPage = location.pathname !== routesEnum.HOME && location.pathname !== routesEnum.CHARACTERS;
    return (
        <div style={{position:'relative'}}>
            {modalOpen && <ModalWindow />}
            {!isErrorPage && <Navbar />}
            <Routes>
                <Route path={routesEnum.HOME} element={<Home/>} />
                <Route path={routesEnum.CHARACTERS} element={<Characters/>} />
                <Route path={routesEnum.ERROR} element={<Error />} />
            </Routes>
        </div>
    );
}

export default Main;