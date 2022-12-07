const readline = require('readline-sync')

const weight = readline.questionInt('What’ your weight? ');
const height = readline.questionInt('What’ your height? ');

const BMI = (peso, altura) => {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  return (peso / ((altura / 100) ** 2)).toFixed(2);
};

const main = () => {
  const bmi = BMI(weight, height);
  console.log(`BMI: ${bmi}`);
}

main();