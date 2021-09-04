import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
//import Button from '@material-ui/core/Button';
import logo from '../../assets/logo.svg'
import bar1 from '../../assets/cervejaria.svg'
import { MenuItem, Button } from '@material-ui/core';
// import { Container } from './styles';
import './styles.css'

function AbrirComanda() {

    const history = useHistory()

    function navigateToPageComanda() {
        history.push('/comanda')
    }

    function navigateToPageEstabelecimento() {
      history.push('/estabelecimento')
    }

    const [mesas, setMesas] = useState([])
    const [loading, setLoading] = useState(true);
    const [usuarioName, setUsuarioName] = useState({})
    const [comanda, setComanda] = useState([])
    const [usuarioId, setUsuarioId] = useState([])

    async function addMesa(value) {

            console.log(`Valor: ${value}`)
            let  x = value;
            
            const values = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 'id_mesa': x, 'id_usuario_cadastrado': usuarioId }),
              withCredentials: true,
              credentials: 'include'
             }
      
              const response = await fetch('http://localhost:4000/Comanda', values);
              const data = await response.json();
      
                  setComanda(data)
                  console.log(data)
                  navigateToPageComanda()

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

            setUsuarioName(data[0].name)
            setUsuarioId(data[0].id_usuario_cadastrado)
            setLoading(false);
          
      } catch (error) {
        console.log(error)
      }
    }
      loadData()

  }, [])

  useEffect(() => {
    async function loadData(){
      try{

          const values = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
            credentials: 'include'
        }

        const response = await fetch('http://localhost:4000/mesas', values);
        const data = await response.json();

          if (Array.isArray(data)) {
            setMesas(data)
            setLoading(false);
          }
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
                                onClick={navigateToPageEstabelecimento}>
                                Voltar
                            </Button>
                        </div>
                        <div className="usuariologado">
                            <p>{usuarioName}</p>
                        </div>
                        <div className="notificaçoes">
                            <Badge badgeContent={999} color="error">
                                <MailIcon />
                            </Badge>
                        </div>
                    </header>
                    <div className="numeromesa">
                        <div className="estabelecimentoComanda">
                            <img className="" src={bar1} alt="" />
                        </div>
                        <div className="abrirComanda">
                            {mesas.map(post => (
                              <MenuItem key={post.id_mesa}>
                                <div className="mesas">
                                <label>Mesa:</label>
                                  <p>
                                  {post.numero}
                                  </p>
                                  <Button
                                        variant="contained"
                                        type="number"
                                        color="primary"
                                        className="voltar"
                                        //onChange={event => setNumero(event.target.value)}
                                        onClick={ () => addMesa(post.id_mesa) }
                                        > 
                                      Abrir Comanda
                                  </Button>
                                </div>
                              </MenuItem>
                            ))}
                            </div>
                        </div>
                            
                    </div>
    </>
  );
}

export default AbrirComanda;