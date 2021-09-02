import logo from '../../assets/logo.svg'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './styles.css'

import {
    TextField,
    Button
} from '@material-ui/core';


function Login() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");


    const [loading, setLoading] = useState(false);

    const history = useHistory()
    

    async function handleSubmit() {


        const values = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'email': email, 'senha': senha}),
            withCredentials: true,
            credentials: 'include'
        }

        const response = await fetch('http://localhost:4000/login', values);
        const data = await response.json();

        setLoading(false);

        if (data === 0) {
            console.log("Usuario ou Senha invalidos")
        } else {
            navigateToPageEstabelecimento();
        }

        }

        if (loading) {
            return <span>Carregando...</span>
        }

    function navigateToPageHome() {
        history.push('/home')
    }

    function navigateToPageEstabelecimento() {
        history.push('/estabelecimento')
    }

        return(
            <>
               <div className="container">
                    <header className="cabecalho">
                        <div className="logo">
                            <img className="logo1" src={logo} alt="" />
                        </div>
                        <div className="voltar">
                            <Button 
                                variant="contained" 
                                color="primary" 
                                className="voltar"
                                onClick={navigateToPageHome}>
                                Voltar
                            </Button>
                        </div>
                    </header>
                <div className="conteudoLogin">
                    <div>
                        <div>
                            <TextField
                                required
                                variant="outlined"
                                label="E-mail"
                                name="email"
                                placeholder="Digite seu e-mail"
                                className="botaoLogin"
                                autoFocus
                                margin="normal"
                                onChange={event => setEmail(event.target.value)}
                            />
                        </div>
                        <div>
                            <TextField 
                                required
                                variant="outlined"
                                label="Senha"
                                name="senha"
                                placeholder="Digite sua senha"
                                className="botaoLogin"
                                margin="normal"
                                type="password"
                                onChange={event => setSenha(event.target.value)}
                            />
                        </div>
                        <div>
                            <Button 
                                id="entrar"
                                variant="contained" 
                                color="secondary" 
                                onClick={handleSubmit}
                                >
                                Entrar
                            </Button>
                        </div>
                    </div>
                </div>
                    <div className="rodape"></div>
                </div>
            </>
        );
    }

export default Login;