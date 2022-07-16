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

// 1. Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addTurno = (objeto, chave, valor) => (objeto[chave] = valor);

addTurno(lesson2, "turno", "noite");

// 2. Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const keysObjets = (objeto) => Object.keys(objeto);
console.log(keysObjets(lesson1));

// 3. Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

const tamanhoObjetos = (objeto) => Object.keys(objeto).length;
console.log(tamanhoObjetos(lesson3));

// 4. Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listarValoresObjetos = (objeto) => Object.values(objeto);
console.log(listarValoresObjetos(lesson3));

// 5. Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = Object.assign({ lesson1 }, { lesson2 }, { lesson3 });
console.log(allLessons);

// 6. Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const numeroTotalDosEstudantes = (objeto) => {
  return (
    objeto.lesson1.numeroEstudantes +
    objeto.lesson2.numeroEstudantes +
    objeto.lesson3.numeroEstudantes
  );
};
console.log(`No total são ${numeroTotalDosEstudantes(allLessons)} estudantes.`);

// 7. Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto. Por exemplo:

const valorChave = (objeto, valor) => Object.values(objeto)[valor];
console.log(valorChave(lesson1, 0));

// 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

function verificarChaveEValor(objeto, chave, valor) {
  const arm = Object.entries(objeto);
  let valorInicial = false;
  for (let index in arm) {
    if (arm[index][0] === chave && arm[index][1] === valor) valorInicial = true;
  }
  return valorInicial;
}

console.log(verificarChaveEValor(lesson3, "numeroEstudantes", 10));

//Bônus
// 1. 🚀 Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.

const nEstudantesM = (objeto) => {
    let total = 0;
    const array = Object.keys(objeto);
    for (index in array) {
      if(objeto[array[index]].materia === 'Matemática'){
      total += objeto[array[index]].numeroEstudantes;
      }
    }
    return total;
  }

  console.log(nEstudantesM(allLessons));

  // 2. 🚀 Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5: 

  const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (index in array) {
      if (array[index].professor === name) {
        allLessons.push(array[index].materia)
        allStudent += array[index].numeroEstudantes;
      }
    }
    return { lessons: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));