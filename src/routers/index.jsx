import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Cadastre from '../pages/cadastre'
import Estabelecimento from '../pages/estabelecimentos'
import Menu from '../pages/menu'
import FecharConta from '../pages/fecharconta'
import eventos from '../pages/eventos';
import abrircomanda from '../pages/abrircomanda'
import comanda from '../pages/comanda'


function Routers() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastre" component={Cadastre} />
                <Route path="/estabelecimento" component={Estabelecimento} />
                <Route path="/menu" component={Menu} />
                <Route path="/fecharconta" component={FecharConta} />
                <Route path="/eventos" component={eventos} />
                <Route path="/abrircomanda" component={abrircomanda} />
                <Route path="/comanda" component={comanda} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routers;