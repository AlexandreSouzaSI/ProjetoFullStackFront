import { useHistory } from 'react-router-dom'
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import { Button } from '@material-ui/core';
//import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'
import bar1 from '../../assets/cervejaria.svg'
import bar2 from '../../assets/espetoearte.svg'
import bar3 from '../../assets/restaurante.svg'
import './styles.css'


function Estabelecimentos() {

    

    const history = useHistory()

    function navigateToPageAbrirComanda() {
        history.push('/abrircomanda')
    }

    function navigateToPageLogin() {
        history.push('/login')
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
                                onClick={navigateToPageLogin}>
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
                    <div className="numeromesa">
                        
                    </div>
                    <div className="conteudoEstabelecimento">
                            <img className="estabelecimento" src={bar1} alt="" onClick={navigateToPageAbrirComanda}></img>
                    </div>

                    <div className="conteudoEstabelecimento">
                            <img className="estabelecimento" src={bar2} alt=""></img>
                    </div>

                    <div className="conteudoEstabelecimento">
                            <img className="estabelecimento" src={bar3} alt=""></img>
                    </div>
                    <div className="rodape">

                    </div>
                </div>
            </>
        );
    }

export default Estabelecimentos;