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
  
  const history = useHistory()

    function navigateToPageComanda() {
        history.push('/comanda')
    }

  useEffect(() => {
    async function loadData(){
      try{
          const response = await fetch('http://localhost:4000/produtos')
          const data = await response.json()

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
                                  >
                                  +
                                  </Button>
                              </div>
                              <div className="botoesMenu">
                              <Button
                                    type="number"
                                    color="primary"
                                    variant="outlined"
                                  >
                                    0
                                  </Button>
                              </div>
                              <div className="botoesMenu">
                                  <Button
                                    color="secondary"
                                    variant="contained"
                                  >
                                  -
                                  </Button>
                              </div>

                          </MenuItem>
                           
                        ))}
                        <Button
                              color="primary"
                              variant="contained"
                              type="submit"
                            >
                            Fazer Pedido
                          </Button>
                      </div>
                    <div className="rodape">

                    </div>
                </div>
            </>
  );
 }


export default Menu;
