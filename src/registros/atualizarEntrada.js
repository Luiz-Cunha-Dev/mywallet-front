import React from "react"
import styled from "styled-components"
import { useState, useEffect } from "react"
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner'


export default function AtualizarEntrada({token}){
    const {idRegistro} = useParams();
    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const [title, setTitle] = useState("");
    const [botao, setBotao] = useState("Atualizar entrada");
    const config = {
        headers:{
            Authorization: `Bearer ${token}`
        }
    };

    useEffect(() => {
        const URL = "https://projeto14-mywallet-back-1ct2.onrender.com/registro"

        axios.get(URL, config)
            .then(res => {
                const listaDeRegistros = res.data;
                const registro = listaDeRegistros.filter(r => r._id === idRegistro);
                setTitle(registro[0].title);
                setValue(Number(registro[0].value));
            })
            .catch(err => {
                alert(err);
            })
    }, [])    

    useEffect(() => {
        const URL = "https://projeto14-mywallet-back-1ct2.onrender.com/status"

        const interval = setInterval(() => {
            axios.post(URL, {}, config)
                .then(res => {
                })
                .catch(err => {
                    alert("Sua sessão expirou!");
                    navigate("/")
                })
        }, 5000);

        return () => clearInterval(interval);

    }, [])


    function salvarEntrada(){

        setBotao(<ThreeDots
            height="80"
            width="80"
            radius="9"
            color="white"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
        />)    

        if(value !== "" && title !== ""){
            const URL = `https://projeto14-mywallet-back-1ct2.onrender.com/registro/${idRegistro}`
            axios.put(URL,{value, title}, config)
            .then(res => {
                navigate("/registro");
                setBotao("Atualizar entrada");
            })
            .catch(err => {
                alert(err.response.data);
                setBotao("Atualizar entrada");
            })
        }else{
            alert("Todos os campos são necessarios!")
            setBotao("Atualizar entrada");
        }
    }

    return(
        <PaginaEntrada>
            <h1>Editar entrada</h1>
            <form>
                <input type="number" placeholder="Valor" value={value} onChange={e => setValue(e.target.value)}/>
                <input type="text" placeholder="Descrição" value={title} onChange={e => setTitle(e.target.value)}/>
            </form>
            <button onClick={salvarEntrada}>{botao}</button>
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
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    padding-left: 15px;
    ::placeholder{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
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
    display: flex;
    justify-content: center;
    align-items: center;
}
`