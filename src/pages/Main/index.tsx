import React from 'react';
import styles from './index.module.scss';
import {Route, Routes, useLocation} from "react-router-dom";
import {routesEnum} from "../../app/routes/routesEnum";
import Home from "../Home";
import Characters from "../Characters";
import Error from "../Error";
import Navbar from "../../shared/Navbar";
import useCharactersStore from "../../store/store";
import ModalWindow from "../../components/ModalWindow";

const Main = ()  => {
    const location = useLocation();
    let {modalOpen, setModalOpen} = useCharactersStore();

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