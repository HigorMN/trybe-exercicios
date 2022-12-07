const fs = require('fs').promises;

async function getSimpsonById(id) {
  const fileContent = await fs.readFile('./simpsons.json');
  const simpsons = JSON.parse(fileContent);
  const chosenSimpson = simpsons.find((simpson) => +simpson.id === +id);

  if (!chosenSimpson) {
    throw new Error('id não encontrado');
  }

  return chosenSimpson;
}

async function filterSimpsons() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

async function createSimpsonsFamily() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons.filter((simpson) => familyIds.includes(+simpson.id));

  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
}

async function main() {
  createSimpsonsFamily();
  // filterSimpsons();
  // await readAll();
  // console.log(await getSimpsonById(1));
}

main();
