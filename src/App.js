import Login from "./login/login.js"
import Cadastro from "./login/cadastro.js";
import Registro from "./registros/registro.js";
import Entrada from "./registros/entrada.js";
import Saida from "./registros/saida.js";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const tokenLocal = JSON.parse(localStorage.getItem("tokenLocal"));
  const [token, setToken] = useState(tokenLocal);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login setToken={setToken} />}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/registro" element={<Registro token={token}/>}/>
      <Route path="/entrada" element={<Entrada token={token}/>}/>
      <Route path="/saida" element={<Saida token={token}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
