import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"


export default function Registro(){
    return(
        <PaginaRegistro>
            <Titulo>
                Olá, Fulano
            <ion-icon name="exit-outline"></ion-icon>
            </Titulo>
            <QuadroDeRegistros></QuadroDeRegistros>
            <Opcoes>
                <button>
                    <p>Nova<br/>entrada</p>
                <ion-icon name="add-circle-outline"></ion-icon>
                </button>
                <button>
                    <p>Nova<br/>saída</p>                   
                <ion-icon name="remove-circle-outline"></ion-icon>
                    </button>
            </Opcoes>
        </PaginaRegistro>
    )
}

const PaginaRegistro = styled.div`
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
    padding: 25px;
`

const Titulo = styled.div`
    width: 326px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
    ion-icon {
    font-size: 32px;
    }
`

const QuadroDeRegistros = styled.div`
    width: 326px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-bottom: 13px;
`

const Opcoes = styled.div`
    width: 326px;
    display:flex;
    justify-content: space-between;

    button{
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #FFFFFF;
    border: thin;
    position: relative;
    }
    ion-icon {
    font-size: 25px;
    position: absolute;
    left: 10px;
    top: 10px;
    }
    p{
    position: absolute;
    left: 10px;
    bottom: 9px;
    text-align: start;
    }
`