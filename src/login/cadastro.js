import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import { ThreeDots } from 'react-loader-spinner'


export default function Cadastro(){

    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");
    const [botao, setBotao] = useState("Cadastrar");

    function cadastrar(){
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

        if(name !== "" && email !== "" && password !== "" && password === passwordTwo){
            let informaçoesDeCadastro = {
                name,
                email,
                password
            }

            const URL = "https://projeto14-mywallet-back-1ct2.onrender.com/sign-up"

            axios.post(URL, informaçoesDeCadastro)
            .then(res => {
                alert("Cadastrado com sucesso!")
                navigate("/")
                setBotao("Cadastrar");
            })
            .catch(err => {
                alert(err.response.data)
                setBotao("Cadastrar");
            })
        }else if(password !== passwordTwo){
            alert("Senhas diferens")
            setBotao("Cadastrar");
        }else{
            alert("Todos os campos são necessarios!")
            setBotao("Cadastrar");
        }
    }

    return(
        <PaginaCadastro>
            <h1>MyWallet</h1>
            <form>
                <input type="name" placeholder="Nome" value={name} onChange={e => setName(e.target.value)}/>
                <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)}/>
                <input type="password" placeholder="Confirme a senha" value={passwordTwo} onChange={e => setPasswordTwo(e.target.value)}/>
            </form>
            <button onClick={cadastrar}>{botao}</button>
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
p{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
}
`