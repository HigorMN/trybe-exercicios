// import logo from "./logo.svg";
import "./App.css";
import About from "./About";

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <About />,
    Task('Higor')
  );
}

export default App;
