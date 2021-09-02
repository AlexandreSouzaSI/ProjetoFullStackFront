import { React } from 'react';
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'
import bebida from '../../assets/bebidas.svg'
//import comida from '../assets/comida.svg';
import './styles.css';


function Eventos() {

    const history = useHistory()

    function navigateToPageCadastrar() {
        history.push('/cadastre')
    }

    function navigateToPageLoginOn() {
        history.push('/login')
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
                        <div className="voltar">
                        <Button
                                variant="contained"
                                color="primary"
                                className="voltar"
                                onClick={navigateToPageHome}>
                                Voltar
                            </Button>
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
                    <div className="conteudoEventos">
                        <div className="imagemInicialEventos">
                                <img id="bebidaEvento" src={bebida} alt="" />
                        </div>
                        <div className="textoInicialEventos">
                            <h1>Bem vindo ao OrderFood</h1>
                            <div className="informaçãoEvento">
                                <p>dia <strong>11/09</strong> o Beer Pub comemora 5 anos, e para comemorar esse dia especial, teremos musica ao vivo e promoção em todas as bebidas, não perca esse grande evento!</p>
                            </div>
                            <div className="mapa">
                                
                            </div>
                        </div>
                    </div>
        </div>
      </>
  )
}

export default Eventos;