// 1 - Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
  person1: "João",
  person2: "Maria",
  person3: "Jorge",
};

for (chaves in names) {
  console.log("Olá", names[chaves]);
}

// 2 - Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
  model: "A3 Sedan",
  manufacturer: "Audi",
  year: 2020,
};

for (chaves in car) {
    console.log(chaves, car[chaves]);
}
