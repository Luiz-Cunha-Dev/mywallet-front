import Login from "./login/login.js"
import Cadastro from "./login/cadastro.js";
import Registro from "./registros/registro.js";
import Entrada from "./registros/entrada.js";
import Saida from "./registros/saida.js";
import AtualizarEntrada from "./registros/atualizarEntrada.js";
import AtualizarSaida from "./registros/atualizarSaida.js";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const tokenLocal = JSON.parse(localStorage.getItem("tokenLocal"));
  const nomeLocal = JSON.parse(localStorage.getItem("nomeLocal"));
  const [token, setToken] = useState(tokenLocal);
  const [nomeUsuario, setNomeUsuario] = useState(nomeLocal);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login setToken={setToken} setNomeUsuario={setNomeUsuario} />}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/registro" element={<Registro token={token} nomeUsuario={nomeUsuario}/>}/>
      <Route path="/entrada" element={<Entrada token={token}/>}/>
      <Route path="/saida" element={<Saida token={token}/>}/>
      <Route path="/atualizar-entrada/:idRegistro" element={<AtualizarEntrada token={token}/>}/>
      <Route path="/atualizar-saida/:idRegistro" element={<AtualizarSaida token={token}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
