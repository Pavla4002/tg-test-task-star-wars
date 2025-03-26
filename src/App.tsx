import './App.css';
import React from "react";
import {Route, Routes} from "react-router-dom";
import {routesEnum} from "./app/routes/routesEnum";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Error from "./pages/Error";
import Navbar from "./shared/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path={routesEnum.HOME} element={<Home/>} />
        <Route path={routesEnum.CHARACTERS} element={<Characters/>} />
        <Route path={routesEnum.ERROR} element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
