const fullNames = (fullName) => {
  return {
    nomeCompleto: fullName,
    email: `${fullName.toLowerCase().replace(" ", "_")}@trybe.com`,
  };
};

const newEmployees = (callBack) => {
  const employees = {
    id1: callBack("Pedro Guerra"),
    id2: callBack("Luiza Drumond"),
    id3: callBack("Carla Paiva"),
  };
  return employees;
};

// console.log(newEmployees(fullNames));

const numberRandom = (number) => {
  const numberR = Math.floor(Math.random() * 5);
  if (numberR === number) {
    return `Parabéns você ganhou`;
  }
  return `Tente novamente`;
};

const checkHOF = (number, callBack) => callBack(number);

console.log(checkHOF(4, numberRandom));
