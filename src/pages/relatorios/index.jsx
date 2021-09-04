import React, { useState } from 'react';
//import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'
import './styles.css'

function Relatorios() {

    const [comidas, setComidas] = useState([])
    const [bebidas, setBebidas] = useState([])

   async function totalComidas() {
          try{
    
              const values = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
                credentials: 'include'
            }
    
            const response = await fetch('http://localhost:4000/comidas', values);
            const data = await response.json();
    
              if (Array.isArray(data)) {
                setComidas(data)
              }
          } catch (error) {
            console.log(error)
          }
        }
    
    async function totalBebidas() {
          try{
    
              const values = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true,
                credentials: 'include'
            }
    
            const response = await fetch('http://localhost:4000/bebidas', values);
            const data = await response.json();
    
              if (Array.isArray(data)) {
                setBebidas(data)
                
              }
          } catch (error) {
            console.log(error)
          }
        }    

        return(
            <>
                <div className="containerRelatorio">
                    <header className="cabecalhoRelatorio">
                        <div className="logoRelatorio">
                            <img className="logo1Relatorio" src={logo} alt="" />
                        </div>
                        <div className="loginRelatorio">
                        <Button 
                            variant="contained" 
                            color="primary" 
                            className="loginRelatorio"
                            onClick={totalComidas}
                            >
                            Comidas
                        </Button>
                        </div>
                        <div className="cadastreRelatorio">
                        <Button 
                            variant="contained" 
                            color="primary" 
                            className="cadastreRelatorio"
                            onClick={totalBebidas}
                            >
                            Bebidas
                        </Button>
                        </div>
                        <div className="cadastreRelatorio">
                        <Button 
                            variant="contained" 
                            color="primary" 
                            className="cadastreRelatorio"
                            >
                            Total a Pagar
                        </Button>
                        </div>
                        <div className="cadastreRelatorio">
                        <Button 
                            variant="contained" 
                            color="primary" 
                            className="cadastreRelatorio"
                            >
                            Total do Dia
                        </Button>
                        </div>
                        <div className="cadastreRelatorio">
                        <Button 
                            variant="contained" 
                            color="primary" 
                            className="cadastreRelatorio"
                            >
                            Total Produto
                        </Button>
                        </div>
                        <div className="cadastreRelatorio">
                        <Button 
                            variant="contained" 
                            color="primary" 
                            className="cadastreRelatorio"
                            >
                            Total Por Pessoa
                        </Button>
                        </div>
                    </header>
                    <div className="conteudoRelatorio">
                            {bebidas.map(post => (
                                <ul>
                                    <p>Nome: {post.produto}</p>
                                    <p>Quantidade: {post.quantidade}</p>
                                    <p>Preço: R$ {post.preço},00</p>
                                    <p>{post.date_create}</p>
                                </ul>
                            ))}
                    </div>
                </div>        
            </>
        );
    }

export default Relatorios;