import { useEffect, useState } from 'react';
import logo from '../../assets/logo.svg'
import { useHistory } from 'react-router-dom'

import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import { MenuItem, Button } from '@material-ui/core';
import './styles.css'

function Menu() {

  const [produtos, setProdutos] = useState([])
  const [loading, setLoading] = useState(true);
  const [comandaid, setComandaId] = useState();
  const [mesa, setMesa] = useState(true);
  
  const history = useHistory()

    function navigateToPageComanda() {
        history.push('/comanda')
    }

    async function addPedido(value) {

      console.log(comandaid)
      console.log(value)
      let valor = value;
      let quantidade = 1;

      try{
        const values = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 'id_comanda': comandaid, 'id_produto': valor, 'quantidade': quantidade }),
          withCredentials: true,
          credentials: 'include'
      }

      const response = await fetch('http://localhost:4000/ItensComanda', values);
      const data = await response.json();

          console.log(`Valores da nova Array ${data}`)

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
  
          const response = await fetch('http://localhost:4000/produtos', values);
          const data = await response.json();
  
            if (Array.isArray(data)) {
              setProdutos(data)
              setLoading(false);
            }
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

        const response = await fetch('http://localhost:4000/novotoken', values);
        const data = await response.json();

            setComandaId(data[0].id_comanda)
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

  return (
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
                            <p>Ola usuario</p>
                        </div>
                        <div className="notificaçoes">
                            <Badge badgeContent={999} color="error">
                                <MailIcon />
                            </Badge>
                        </div>
                    </header>

                    <div className="produtopreço">
                      <div className="produtotexto">
                          <p>Produto</p>
                        </div>
                        <div className="preçotexto">
                          <p>Preço</p>
                        </div>
                    </div>

                    <div className="conteudoMenu">
                        {produtos.map(post => (
                          <MenuItem key={post.id_produto} >
                              <div className="produtosMenu">
                                <p>{post.produto}</p>
                              </div>
                              <div className="preçoMenu">
                                <p>R$ {post.preço},00</p>
                              </div>
                              <div className="botoesMenu">
                                  <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={ () => addPedido(post.id_produto) }
                                  >
                                  Pedir
                                  </Button>
                              </div>
                          </MenuItem>
                        ))}
                      </div>
                    <div className="rodape">

                    </div>
                </div>
            </>
  );
 }


export default Menu;
