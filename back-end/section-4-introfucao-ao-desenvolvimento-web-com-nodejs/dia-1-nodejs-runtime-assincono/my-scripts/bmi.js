const readline = require('readline-sync')

const weight = readline.questionFloat('What\'s your weight? (kg) ');
const height = readline.questionInt('What\'s your height? (cm) ');

const BMI = (peso, altura) => {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  return (peso / ((altura / 100) ** 2)).toFixed(2);
};

const main = () => {
  const bmi = BMI(weight, height);
  console.log(`BMI: ${bmi}`);
  if(bmi < 18.5) console.log('Abaixo do peso (magreza)');
  if(bmi >= 18.5 && bmi <= 24.9) console.log('Peso normal');
  if(bmi >= 25 &&bmi <= 29.9) console.log('Acima do peso (sobrepeso)');
  if(bmi >= 30 && bmi <= 34.9) console.log('Obesidade grau I');
  if(bmi >= 35 && bmi <= 39.9) console.log('Obesidade grau II');
  if(bmi > 40) console.log('Obesidade graus III e IV');
}

main();