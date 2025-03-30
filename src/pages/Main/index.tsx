import React from 'react';
import styles from './index.module.scss';
import {Route, Routes, useLocation} from "react-router-dom";
import {routesEnum} from "../../app/routes/routesEnum";
import Home from "../Home";
import Characters from "../Characters";
import Error from "../Error";
import Navbar from "../../shared/Navbar";

function Main() {
    const location = useLocation();

    const isErrorPage = location.pathname !== routesEnum.HOME && location.pathname !== routesEnum.CHARACTERS;
    return (
        <div style={{position:'relative'}}>
            {/*<ModalWindow/>*/}
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