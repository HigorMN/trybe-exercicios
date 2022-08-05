// 1 - Dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

const planetDistanceFromSun = ({
  name,
  distanceFromSun: { value, measurementUnit },
}) => `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

// console.log(planetDistanceFromSun(mars)); // A
// console.log(planetDistanceFromSun(venus)); // B
// console.log(planetDistanceFromSun(jupiter)); // C

// 2 - Agora, dado o código abaixo, qual a ordem de finalização de execução das linhas comentadas?

// console.log(planetDistanceFromSun(mars)); // A
// setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
// setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // C

// 3 - A função getPlanet abaixo imprime o planeta Marte de forma síncrona. Modifique getPlanet, de forma que Marte seja impresso assincronamente, depois de 4 segundos.

const getPlanet = () => {
  setTimeout(() => {
    const mars = {
      name: "Mars",
      distanceFromSun: {
        value: 227900000,
        measurementUnit: "kilometers",
      },
    };
    console.log("Returned planet: ", mars);
  }, 4000);
};

// getPlanet(); // Imprime Marte depois de 4 segundos

// 4 - Suponha que você precise simular uma mensagem enviada do robô Curiosity de Marte para a Terra. O Curiosity envia para a Terra a temperatura atual em Marte, gastando um tempo variável de até 5 segundos para que termine o envio. Crie a função sendMarsTemperature de forma que:

// A função sendMarsTemperature imprima no console o seguinte texto: "A temperatura de Marte é: temperaturaAtual graus celsius" onde, temperaturaAtual é o valor recebido da função getMarsTemperature; e

// A mensagem deve ser impressa no console depois de no máximo 5 segundos.

// Dica: utilize a função messageDelay para gerar o tempo de espera necessário

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo

// const sendMarsTemperature = () => {
//   setTimeout(() => {
//     console.log(`A temperatura de Marte é: ${getMarsTemperature()} graus celsius`);
//   }, messageDelay());
// };

// sendMarsTemperature(); // Imprime "A temperatura de Marte é: 20 graus celsius", por exemplo

// 5 - Agora que você fez a função que envia a temperatura de Marte, vamos utilizar essa temperatura para realizar outras operações. No código abaixo, temos as funções temperatureInFahrenheit e greet. Elas irão utilizar a temperatura obtida pela função getMarsTemperature para realizar nossas operações. Escreva a função sendMarsTemperature de forma que:

// A função sendMarsTemperature receba uma callback;

// Dica: Essa callback será uma de nossas funções: temperatureInFahrenheit ou greet; e
// A função sendMarsTemperature execute essa callback depois de no máximo 5 segundos.
// Dica: Lembre-se de nossa função messageDelay para gerar o tempo de espera necessário.

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo

// const toFahrenheit = (degreeCelsius) => degreeCelsius * (9 / 5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`Atualmente está ${toFahrenheit(temperature)}ºF em Marte`);

// const greet = (temperature) =>
//   console.log(
//     `Olá! Curiosity aqui. Nesse momento está ${temperature}ºC em Marte`
//   );

// const sendMarsTemperature = (callback) => {
//   const tempo = getMarsTemperature();
//   setTimeout(() => callback(tempo), messageDelay());
// };

// Definição da função sendMarsTemperature...

// sendMarsTemperature(temperatureInFahrenheit); // Imprime "Atualmente está 46.4ºF em Marte", por exemplo

// sendMarsTemperature(greet); // Imprime "Olá! Curiosity aqui. Nesse momento são 36ºC em Marte", por exemplo

// 6 - Por fim, o robô Curiosity tem uma taxa de sucesso de envio de mensagem de 60% devido ao fato de o robô já estar muito ocupado com outras operações. Logo, adicione na função sendMarsTemperature uma outra callback que contenha as ações a serem tomadas em caso de falha

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * (9 / 5)) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (callbackSuccess, callbackError) => {
  const tempo = getMarsTemperature()
  const messageSuccessfullySent = Math.random() <= 0.6; // randomiza true ou false até 60%
  setTimeout(() => {
    if (messageSuccessfullySent) {
      callbackSuccess(tempo)
    } else {
      callbackError('Robo não conseguio enviar a mensagem')
    }
  }, messageDelay())
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(temperatureInFahrenheit, handleError);

// // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
// sendMarsTemperature(greet, handleError);

const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grama',
    ability: 'Raio Solar',
  },
  {
    name: 'Charmander',
    type: 'Fogo',
    ability: 'Lança Chamas',
  },
  {
    name: 'Squirtle',
    type: 'Água',
    ability: 'Jato de Água',
  },
];

function getPokemonDetails(selectedPokemon, callback) {
  const foundPokemon = pokemons.find((pokemon) => pokemon.name === selectedPokemon);

  setTimeout(() => {
    if (foundPokemon === undefined) {
      return callback(new Error('Não temos esse pokémon para você :('), null);
    }

    const { name, type, ability } = foundPokemon;

    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

const handlePokemonSearch = (error, message) => {
  if(error){
    console.log(error);
  } else {
    console.log(message);
  }
};

// getPokemonDetails('Charmander', handlePokemonSearch);

// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

// OBS: Lembre-se de exportar o arquivo do exercício 08 para que possamos utilizá-lo em nossos testes.

module.exports = handlePokemonSearch