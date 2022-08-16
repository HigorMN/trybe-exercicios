import React from "react";

class About extends React.Component {
  render() {
    const skills = ["HTML",'CSS', 'JAVASCRIPT', 'REACT']; // adicione mais habilidades aqui
    const jsxSkills = skills.map((skill) => <li>{skill}</li>); // cria um array de tags <li>
    return (
      <div>
        <h1>Higor Maranhão</h1>
        <p>Sou Fullstacks developer</p>
        <h2>Minhas Habilidades</h2>
        <ul>{jsxSkills}</ul>
      </div>
    );
  }
}

export default About;
