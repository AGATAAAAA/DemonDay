import React, { Component } from 'react';
import logo from './logo.svg';
import './Cabecalho.css';


class Cabecalho extends Component {
  render() {
    return (
      <div className="App">
        <header>
         <img src={logo}/> 
         <a>
             <a>Sobre noiz</a>
             <a>Contato</a>
             <a>kdastro</a>
             </a>
        </header>
        </div>
    );
  }
}

export default Cabecalho;
