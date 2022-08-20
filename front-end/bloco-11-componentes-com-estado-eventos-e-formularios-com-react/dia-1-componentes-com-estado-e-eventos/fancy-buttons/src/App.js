import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    // Removemos a declaração do estado de dentro do construtor
    // this.state = {
    //   numeroDeCliques: 0,
    // };

    this.handleClick = this.handleClick.bind(this);
  }

  // Fazemos a definição do estado utilizando a sintaxe Public Class Field
  state = {
    numeroDeCliques: 0,
  };

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
  }

  render() {
    const { numeroDeCliques } = this.state;
    return (
      <div>
        <button type="button" onClick={ this.handleClick }>Meu Botão</button>
        <p>Numero de cliques: { numeroDeCliques } { numeroDeCliques % 2 === 0? console.log(numeroDeCliques, 'verde'): '' }</p>
      </div>
    );
  }
}

export default App;