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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

function Comanda() {


  const [value, setValue] = React.useState('Dinheiro');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

    const history = useHistory()

    function navigateToPageComanda() {
      history.push('/comanda')
    }

const [usuario, setUsuario] = useState([])
    const [loading, setLoading] = useState(true);

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

        console.log({data})
        
            setUsuario(data)
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
                        <div className="voltar1">
                            <Button
                                variant="contained"
                                color="primary"
                                className="voltar1"
                                onClick={navigateToPageComanda}>
                                Voltar
                            </Button>
                        </div>
                        <div className="usuariologado">
                            {usuario.map(post => (
                            <p>{post.name}</p>
                            ))}
                        </div>
                        <div className="notificaçoes">
                            <Badge badgeContent={999} color="error">
                                <MailIcon />
                            </Badge>
                        </div>
                    </header>
                    
                    <div className="conteudoFecharConta">
                        <div className="informaçoesFecharConta">
                          
                            <img src={bar1} alt="" />
                          
                          <div className="infoFecharConta">
                            <p>Nome do usuario</p>

                            <p>Numero da mesa</p>
                          </div>
                          <FormControl component="fieldset">
                          <FormLabel component="legend">Forma de Pagamento</FormLabel>
                          <RadioGroup aria-label="forma" name="forma1" value={value} onChange={handleChange}>
                            <FormControlLabel value="dinheiro" control={<Radio />} label="Dinheiro" />
                            <FormControlLabel value="debito" control={<Radio />} label="Debito" />
                            <FormControlLabel value="credito" control={<Radio />} label="Credito" />
                            <FormControlLabel value="pix" control={<Radio />} label="Pix" />
                          </RadioGroup>
                        </FormControl>

                        </div>
                        <div className="informaçoesPedidosFecharConta">
                            <div className="listaPedidosFecharConta">
                              <div className="produtosComandaFecharConta">
                                  <p>Produtos</p>
                              </div>
                              <div className="preçoComandaFecharConta">
                                <p>Preço</p>
                              </div>
                            </div>
                            <div className="valorTotalFecharConta">
                              <p>Valor Total</p>
                            </div>
                          <div className="fecharPedidoFecharConta">
                          <Button 
                                color="primary"
                                variant="contained"
                                type="submit"
                              >
                              Finalizar
                            </Button>
                          </div>
                        </div>
                    </div>
                            
                    </div>
    </>
  );
}

export default Comanda;