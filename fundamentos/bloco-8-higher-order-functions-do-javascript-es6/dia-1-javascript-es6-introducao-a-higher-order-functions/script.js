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

// console.log(checkHOF(4, numberRandom));

const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

const test = (rightAnswer, studentAnswers) => {
  if (rightAnswer === studentAnswers) {
    return 1;
  }
  if (studentAnswers === "N.A") {
    return 0;
  }
  return -0.5;
};

const counterPoints = (rightAnswer, studentAnswers, action) => {
  let counter = 0;
  for (let index = 0; index < rightAnswer.length; index += 1) {
    const actionReturn = action(rightAnswer[index], studentAnswers[index]);
    counter += actionReturn;
  }
  return `Resultado: ${counter} pontos`
};

console.log(counterPoints(RIGHT_ANSWERS, STUDENT_ANSWERS, test));