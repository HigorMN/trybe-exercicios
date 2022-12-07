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

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

async function main() {
  // await readAll();
  console.log(await getSimpsonById(1));
}

main();