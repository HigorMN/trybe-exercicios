import logo from './logo.svg';
import './App.css';

function handleClick() {
  console.log('Clicou no botão!')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleClick}>Botão</button>
      </header>
    </div>
  );
}

export default App;
