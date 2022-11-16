import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"


export default function Cadastro(){
    return(
        <PaginaCadastro>
            <h1>MyWallet</h1>
            <form>
                <input type="name" placeholder="Nome"/>
                <input type="email" placeholder="E-mail"/>
                <input type="password" placeholder="Senha" />
                <input type="password" placeholder="Confirme a senha" />
                <button>Cadastrar</button>
            </form>
            <Link to="/">
            <p>Já tem uma conta? Entre agora!</p>
            </Link>

        </PaginaCadastro>
    )
}

const PaginaCadastro = styled.div`
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