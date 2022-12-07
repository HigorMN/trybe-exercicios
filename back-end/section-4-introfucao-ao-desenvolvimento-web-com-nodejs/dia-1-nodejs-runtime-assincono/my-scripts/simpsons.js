const fs = require('fs').promises;

async function readAll() {
  const fileContent = await fs.readFile('./simpsons.json');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

async function main() {
  await readAll();
}

main();