import React from 'react';
import './App.css';

class App extends React.Component {
  handleClick = () => {
    console.log('Clicou!')
  }

  render() {
    return <button onClick={this.handleClick}>Meu botão</button>
  }
}

export default App;