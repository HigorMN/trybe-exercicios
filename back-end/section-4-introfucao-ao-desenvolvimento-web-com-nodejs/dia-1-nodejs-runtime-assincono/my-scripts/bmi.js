const BMI = (peso, altura) => {
  console.log(`Peso: ${peso}, Altura: ${altura}`);

  const pesoEmMetros = altura / 100;
  const alturaAoQuadrado = pesoEmMetros ** 2;

  const bmi = peso / alturaAoQuadrado;
  
  return bmi.toFixed(2);
};

const main = () => {
  const bmi = BMI(130, 190);
  console.log(`BMI: ${bmi}`);
}

main();