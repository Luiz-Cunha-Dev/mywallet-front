import Login from "./login/login.js"
import Cadastro from "./login/cadastro.js";
import Registro from "./registros/registro.js";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/registro" element={<Registro/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
