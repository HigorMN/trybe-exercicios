// import logo from "./logo.svg";
import "./App.css";
import About from "./About";

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir para academia'];

function App() {
  return (
    <div>
      <About />,
      <h2>Tarefas</h2>
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    </div>
  );
}

export default App;
