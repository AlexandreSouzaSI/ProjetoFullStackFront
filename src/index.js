import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/GlobalStyle.css'
require('dotenv').config();
//import App from './App';
//import { Home } from './pages/Home';
// import { Cadastre } from './pages/cadastre';
//import { Estabelecimentos } from './pages/estabelecimentos';

ReactDOM.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
  document.getElementById('root')
);