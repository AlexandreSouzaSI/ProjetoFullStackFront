import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
//import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'
import bar1 from '../../assets/cervejaria.svg'
import { Button } from '@material-ui/core';
// import { Container } from './styles';
import './styles.css'

function Comanda() {

    const history = useHistory()

    function navigateToPageMenu() {
        history.push('/menu')
    }

    function navigateToPageFecharConta() {
      history.push('/fecharconta')
    }

    const [usuario, setUsuario] = useState([])
    const [loading, setLoading] = useState(true);
    const [produtos, setProdutos] = useState([])
    const [mesa, setMesa] = useState([])
    const [usuarioId, setUsuarioId] = useState([])
    const [preco, setPreco] = useState([])

   
    async function Atualizar(){

      console.log(preco)

      try{
          const values = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'id_usuario_cadastrado': usuarioId }),
            withCredentials: true,
            credentials: 'include'
        }

        const response = await fetch('http://localhost:4000/relatoriopessoa', values);
        const data = await response.json();
        const responseTotal = await fetch('http://localhost:4000/relatoriopreco', values);
        const dataTotal = await responseTotal.json();
        
            setProdutos(data)
            setMesa(data[0].numero)
            setPreco(dataTotal[0].total)
         

          
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() => {
    async function loadData(){
      try{
          const values = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
            credentials: 'include'
        }

        const response = await fetch('http://localhost:4000/validacaonome', values);
        const data = await response.json();

            setUsuario(data[0].name)
            setUsuarioId(data[0].id_usuario_cadastrado)
            setLoading(false);
          
      } catch (error) {
        console.log(error)
      }
    }
      loadData()

  }, [])

  if (loading) {
    return <span>Carregando...</span>
  }


  return(
    <>
        <div className="container">
                    <header className="cabecalho">
                        <div className="logo">
                            <img className="logo1" src={logo} alt="" />
                        </div>
                        
                        <div className="usuariologado">
                            <p>{usuario}</p>
                        </div>
                        <div className="notificaçoes">
                            <Badge badgeContent={999} color="error">
                                <MailIcon />
                            </Badge>
                        </div>
                    </header>
                    
                    <div className="conteudoComanda">
                        <div className="informaçoesComanda">
                          
                            <img src={bar1} alt="" />
                          
                          <div className="info">
                            <div className="usuariologado">
                              <p>{usuario}</p>
                            </div>

                            <p>Mesa <strong>{mesa}</strong></p>
                          </div>

                          <div className="fazerPedido">
                            <Button 
                                color="secondary"
                                variant="contained"
                                type="submit"
                                onClick={navigateToPageMenu}
                              >
                              Fazer Pedido
                            </Button> 
                          </div>
                        </div>
                        <div className="informaçoesPedidos">
                              <Button
                              color="secondary"
                              variant="outlined"
                              onClick={Atualizar}
                              >
                                Atualizar Lista
                              </Button>
                            <div className="listaPedidos">
                              
                              <div className="produtosComanda">
                                  <p>Produtos</p>
                                  {produtos.map(post => (
                              <p>{post.name}</p>
                              ))}
                              </div>
                              <div className="preçoComanda">
                                <p>Preço</p>
                                {produtos.map(post => (
                              <p>RS {post.preco},00</p>
                              ))}
                              </div>
                              <div className="preçoComanda">
                                <p>Quantidade</p>
                                {produtos.map(post => (
                              <p>{post.quantidade}</p>
                              ))}
                              </div>
                            </div>

                            <div className="valorTotal">
                              <p>Valor Total</p>
                              <p>RS {preco},00</p>
                            </div>
                          <div className="fecharPedido">
                          <Button 
                                color="primary"
                                variant="contained"
                                type="submit"
                                onClick={navigateToPageFecharConta}
                              >
                              Fechar Pedido
                            </Button>
                          </div>
                        </div>
                    </div>
                            
                    </div>
    </>
  );
}

export default Comanda;