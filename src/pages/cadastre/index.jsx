import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import logo from '../../assets/logo.svg'

import './styles.css'

import {
    TextField,
    Button
} from '@material-ui/core';

function Cadastre() {
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [senha, setSenha] = useState("");

    const [loading, setLoading] = useState(false);

    const history = useHistory()
    

    async function handleSubmitUser() {


        const values = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'name': name, 'email': email, 'telefone': telefone, 'senha': senha}),
            withCredentials: true,
            credentials: 'include'
        }

        const response = await fetch('http://localhost:4000/usuarios', values);
        const data = await response.json();

        setLoading(false);

        if (data === 0) {
            console.log("Email já cadastrado")
        } else {
            history.push('/home')
            console.log("Usuario cadastrado com sucesso")
        }

        }

        if (loading) {
            return <span>Carregando...</span>
        }


        function navigateToPageHome() {
            history.push('/home')
        }

    return (
        <>
               <div className="container">
                    <header className="cabecalho">
                        <div className="logo">
                            <img className="logo1" src={logo} alt="" />
                        </div>
                        <div className="login">
                            <Button
                                variant="contained"
                                color="primary"
                                className="voltar"
                                onClick={navigateToPageHome}>
                                Voltar
                            </Button>
                        </div>
                    </header>
                        <div className="conteudoCadastro">
                        <TextField
                                label="Nome"
                                name="name"
                                required
                                variant="outlined"
                                placeholder="Digite seu Nome"
                                className="botaoCadastro"
                                margin="normal"
                                onChange={event => setName(event.target.value)}
                        />
                        <TextField
                                label="Email"
                                name="email"
                                required
                                variant="outlined"
                                placeholder="Digite seu e-mail"
                                className="botaoCadastro"
                                margin="normal"
                                onChange={event => setEmail(event.target.value)}
                        />

                        
  
                        <TextField
                                label="Telefone"
                                name="telefone"
                                required
                                variant="outlined"
                                placeholder="Digite seu Telefone"
                                className="botaoCadastro"
                                margin="normal"
                                onChange={event => setTelefone(event.target.value)}
                        />
                        <TextField 
                                label="Senha"
                                name="senha"
                                required
                                variant="outlined"
                                placeholder="Digite sua senha"
                                className="botaoCadastro"
                                type="password"
                                margin="normal"
                                onChange={event => setSenha(event.target.value)}
                        />
                        
                        <Button
                            className="cadastre"
                            variant="contained" 
                            color="secondary"
                            onClick={handleSubmitUser}
                            >
                            Cadastrar
                        </Button>
                        </div>
                    </div>
                    
                    <div className="rodape"></div>
            </>
    );
}

export default Cadastre;