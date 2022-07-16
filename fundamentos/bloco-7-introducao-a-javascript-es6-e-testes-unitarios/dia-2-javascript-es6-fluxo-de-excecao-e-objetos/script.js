const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  return `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;
};

console.log(customerInfo(order));

const orderModifier = () => {
  order.name = "Luiz Silva";
  order.payment.total = 50;
  return `Olá ${order.name}, o total do seu pedido de ${Object.keys(
    order.order.pizza
  )} e ${order.order.drinks.coke.type} é R$ ${order.payment.total.toFixed(2)}`;
};

console.log(orderModifier(order));

const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addTurno = (objeto, chave, valor) => (objeto[chave] = valor);

addTurno(lesson2, "turno", "noite");

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const keysObjets = (objeto) => Object.keys(objeto);
console.log(keysObjets(lesson1));

// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

const tamanhoObjetos = (objeto) => Object.keys(objeto).length;
console.log(tamanhoObjetos(lesson3));

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listarValoresObjetos = (objeto) => Object.values(objeto);
console.log(listarValoresObjetos(lesson3));

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = Object.assign({lesson1}, {lesson2}, {lesson3});
console.log(allLessons);
