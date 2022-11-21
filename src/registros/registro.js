import React from "react"
import styled from "styled-components"
import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"


export default function Registro({ token }) {
    const navigate = useNavigate()
    const [listaDeRegistros, setListaDeRegistros] = useState([]);
    const [saldo, setSaldo] = useState(0);
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    useEffect(() => {
        carregarRegistros()
    }, [])

    function carregarRegistros() {
        const URL = "https://projeto14-mywallet-back-1ct2.onrender.com/registro"

        axios.get(URL, config)
            .then(res => {
                console.log(res);
                setListaDeRegistros(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        const URL = "https://projeto14-mywallet-back-1ct2.onrender.com/status"

        setInterval(() => {
            axios.post(URL, {}, config)
                .then(res => {
                })
                .catch(err => {
                    console.log(err);
                })
        }, 5000)

    }, [])

    useEffect(() => {
        let soma = 0;
        let registros = listaDeRegistros;
        registros.forEach(r => soma = soma + Number(r.value))
        setSaldo(soma)
    }, [listaDeRegistros])

    function apagarRegistro(id) {
        let confirmacao = window.confirm("Tem certeza que deseja apagar esse registro?")
        if (confirmacao) {
            const URL = `https://projeto14-mywallet-back-1ct2.onrender.com/registro/${id}`

            axios.delete(URL, config)
                .then(res => {
                    console.log(res);
                    carregarRegistros()
                })
                .catch(err => {
                    console.log(err);
                })
        }

    }

    function Deslogar() {
        let confirmacao = window.confirm("Tem certeza que deseja sair?")
        if (confirmacao) {
            const URL = `https://projeto14-mywallet-back-1ct2.onrender.com/sessao`

            axios.delete(URL, config)
                .then(res => {
                    console.log(res);
                    navigate("/")
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    return (
        <PaginaRegistro>
            <Titulo>
                Olá, Fulano
                <ion-icon name="exit-outline" onClick={Deslogar}></ion-icon>
            </Titulo>

            <QuadroDeRegistros >
                {listaDeRegistros.length === 0
                    ?
                    <b>Não há registros de<br />entrada ou saída</b>
                    :
                    <>
                        {listaDeRegistros.map((i, index) => <Item key={index} date={i.date} title={i.title} value={i.value} deletar={() => apagarRegistro(i._id)} id={i._id} />)}
                    </>
                }
            </QuadroDeRegistros>
            {listaDeRegistros.length === 0
                ?
                ""
                :
                <Saldo cor={saldo < 0 ? "#C70000" : "#03AC00"}>
                    <span>Saldo</span>
                    <span>{saldo < 0 ? saldo * -1 : saldo}</span>
                </Saldo>
            }
            <Opcoes>
                <Link to="/entrada">
                    <button>
                        <p>Nova<br />entrada</p>
                        <ion-icon name="add-circle-outline"></ion-icon>
                    </button>
                </Link>
                <Link to="/saida">
                    <button>
                        <p>Nova<br />saída</p>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                    </button>
                </Link>

            </Opcoes>
        </PaginaRegistro>
    )
}

function Item(props) {
    return (
        <EstiloItens cor={props.value < 0 ? "#C70000" : "#03AC00"} >
            <p><span>{props.date}</span>
                <EstiloLink to={props.value > 0 ? `/atualizar-entrada/${props.id}` : `/atualizar-saida/${props.id}`} >
                    <span>{props.title}</span>
                </EstiloLink>
            </p>
            
            <p>
                <span>{props.value < 0 ? props.value * -1 : props.value}</span>
                <button onClick={props.deletar}>x</button>
            </p>
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
    position: relative;
    padding-left: 12px;
    padding-right: 11px;
    padding-top: 23px;
    overflow: scroll;
    padding-bottom: 30px;
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
`

const Saldo = styled.div`
    margin-top: -29px;
    height: 40px;
    width: 326px;
    display: flex;
    justify-content: space-between;
    padding-left: 15px;
    padding-right: 10px;
    background-color: #ffffff;
    z-index: 1;
    align-items: center;
    border-radius: 5px;
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
        color: ${props => props.cor};
    }
`

const Opcoes = styled.div`
    width: 326px;
    display:flex;
    justify-content: space-between;
    margin-top: 20px;
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

        span{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #C6C6C6;
        margin-right: 10px;
    }
    p:nth-child(2){
        span{
            font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: right;
        color: ${props => props.cor};
        }
    }

    button{
        border: thin;
        background-color: #ffffff;
        color: #C6C6C6;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
;
    }
`
const EstiloLink = styled(Link)`
    span{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: #000000;
    }
`