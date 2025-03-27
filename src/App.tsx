import './App.css';
import React from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {routesEnum} from "./app/routes/routesEnum";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Error from "./pages/Error";
import Navbar from "./shared/Navbar";

function App() {
    const location = useLocation();

    const isErrorPage = location.pathname !== routesEnum.HOME && location.pathname !== routesEnum.CHARACTERS;
  return (
    <div>
        {!isErrorPage && <Navbar />}
      <Routes>
        <Route path={routesEnum.HOME} element={<Home/>} />
        <Route path={routesEnum.CHARACTERS} element={<Characters/>} />
        <Route path={routesEnum.ERROR} element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
