import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"


export default function Login({setToken, setNomeUsuario}){

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function fazerLogin(){
        if(email !== "" && password !== ""){
            let informaçoesDeLogin = {
                email,
                password
            }

            const URL = "https://projeto14-mywallet-back-1ct2.onrender.com/sign-in"

            axios.post(URL, informaçoesDeLogin)
            .then(res => {
                localStorage.removeItem("tokenLocal");
                localStorage.setItem("tokenLocal", JSON.stringify(res.data.token));
                localStorage.removeItem("nomeLocal");
                localStorage.setItem("nomeLocal", JSON.stringify(res.data.name));
                setToken(res.data.token);
                setNomeUsuario(res.data.name);
                navigate("/registro")
            })
            .catch(err => {
                alert(err.response.data)
            })
        }
    }

    return(
        <PaginaLogin>
            <h1>MyWallet</h1>
            <form>
                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
            </form>
            <button onClick={fazerLogin}>Entrar</button>
            <Link to="/cadastro">
            <p>Primeira vez? Cadastre-se!</p>
            </Link>

        </PaginaLogin>
    )
}

const PaginaLogin = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1{
    font-family: 'Saira Stencil One';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 50px;
    color: #FFFFFF;
    margin-bottom: 24px;
}
input{
    width: 326px;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 13px;
    border: thin;
    ::placeholder{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        padding-left: 15px;
    }
}
button{
    width: 326px;
    height: 46px;
    background: #A328D6;
    border-radius: 5px;
    margin-bottom:36px;
    border: thin;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #FFFFFF;
}
p{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
}
`