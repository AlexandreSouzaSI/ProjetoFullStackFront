import { React } from 'react';
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'
import bebida from '../../assets/bebidas.svg'
import comida from '../../assets/comida.svg';
import './styles.css';

function Home() {


    const history = useHistory()

    function navigateToPageCadastrar() {
        history.push('/cadastre')
    }

    function navigateToPageLoginOn() {
        history.push('/login')
    }

    function navigateToPageEventos() {
        history.push('/eventos')
    }

        return(
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
                            className="login"
                            onClick={navigateToPageLoginOn}>
                            Login
                        </Button>
                        </div>
                        <div className="cadastre">
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            className="cadastre"
                            onClick={navigateToPageCadastrar}>
                            Cadastre-se
                        </Button>
                        </div>
                    </header>
                    <div className="conteudo">
                        <div className="imagemInicial">
                                <img className="imagemHome" src={bebida} alt=""  onClick={navigateToPageEventos}/>
                                <img className="imagemHome" src={comida} alt="" />
                        </div>
                        <div className="textoInicial">
                            <h1>Bem vindo ao OrderFood</h1>
                            <div>
                                    <p className="texto">Tenha controle total da sua comanda </p>
                            </div>
                            <div>
                                    <p className="texto">Mais Agilidade no pedido</p>
                            </div>
                            <div>
                                    <p className="texto">Gerencie melhor o seu negocio</p>
                            </div>
                        </div>
                    </div>
                    <div className="rodape"></div>
                </div>
            </>
        );
    }

export default Home;