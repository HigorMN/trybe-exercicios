import React from 'react';
import pokemons from './Data';
import './pokedex.css';

const pokedex = pokemons.map(({ id, name, type, image, moreInfo }) => {
  return (
    <li key={id}>
      <img src={image} alt={name}></img>
      <p>Nome: {name}</p>
      <p>Tipo: {type}</p>
      <p>Mais inormação: <a href={moreInfo}>Info</a></p>
    </li>
  );
});

class Main extends React.Component {
  render() {
    return (
      <div>
        <ul>{pokedex}</ul>
      </div>
    );
  }
}

export default Main;
