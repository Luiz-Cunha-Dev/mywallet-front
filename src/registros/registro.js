import React from "react"
import styled from "styled-components"
import { useState } from "react"
import { Link } from "react-router-dom"


export default function Registro(){
    const [listaDeRegistros, setListaDeRegistros] = useState([]);

    return(
        <PaginaRegistro>
            <Titulo>
                Olá, Fulano
            <ion-icon name="exit-outline"></ion-icon>
            </Titulo>

            <QuadroDeRegistros>
                {listaDeRegistros.length === 0 
                ? 
                <b>Não há registros de<br/>entrada ou saída</b>
                :
                <>
                {listaDeRegistros.map(i => <Item/>)}
                <div>
                    <span>Saldo</span>
                    <span>2849,96</span>
                </div>
                </>
            }
            </QuadroDeRegistros>

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

function Item(){
    return(
        <EstiloItens>
    <span>30/11</span><span>Almoço mãe</span><span>39,90</span>
        </EstiloItens>

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
    position: relative;
    padding-left: 12px;
    padding-right: 11px;
    padding-top: 23px;
    b{
    height: 100%;
    width: 100%;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    color: #868686;
    display: flexbox;
    align-items: center;
    justify-content: center;
    }   
    div{
    position: absolute;
    left: 0px;
    bottom: 0px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-left: 15px;
    padding-right: 10px;
    span{
        width: auto;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        color: #000000;
    }
    span:nth-child(2){
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        text-align: right;
        color: #03AC00;
    }
}


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

const EstiloItens = styled.p`
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    span:nth-child(1){
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
    }
    span:nth-child(2){
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
        margin-left: -110px;
    }
    span:nth-child(3){
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: right;
        color: #C70000;
    }
`