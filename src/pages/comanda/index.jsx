import React from 'react';
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

    function navigateToPageAbrirComanda() {
      history.push('/abrircomanda')
    }


  return(
    <>
        <div className="container">
                    <header className="cabecalho">
                        <div className="logo">
                            <img className="logo1" src={logo} alt="" />
                        </div>
                        <div className="voltar1">
                            <Button
                                variant="contained"
                                color="primary"
                                className="voltar1"
                                onClick={navigateToPageAbrirComanda}>
                                Voltar
                            </Button>
                        </div>
                        <div className="usuariologado">
                            <p>Ola usuario</p>
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
                            <p>Nome do usuario</p>

                            <p>Numero da mesa</p>
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
                            <div className="listaPedidos">
                              <div className="produtosComanda">
                                  <p>Produtos</p>
                              </div>
                              <div className="preçoComanda">
                                <p>Preço</p>
                              </div>
                            </div>
                            <div className="valorTotal">
                              <p>Valor Total</p>
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