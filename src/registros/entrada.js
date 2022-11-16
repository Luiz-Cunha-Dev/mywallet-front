import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"


export default function Entrada(){
    return(
        <PaginaEntrada>
            <h1>Nova entrada</h1>
            <form>
                <input type="number" placeholder="Valor"/>
                <input type="text" placeholder="Descrição" />
                <button>Salvar entrada</button>
            </form>
        </PaginaEntrada>
    )
}

const PaginaEntrada = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25px;
form{
    display: flex;
    flex-direction: column;
    align-items: center;
}
h1{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    margin-left: -155px;
    margin-bottom: 40px;
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
`