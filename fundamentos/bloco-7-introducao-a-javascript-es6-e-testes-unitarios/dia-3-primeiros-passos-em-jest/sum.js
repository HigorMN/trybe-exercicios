const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Os parametros não são Numeros");
  }
  return a + b;
};

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

const encode = (vA, vE, vI, vO, vU) => {
  const result = [];
  if (vA === "a") {
    result.push(1);
  }
  if (vE === "e") {
    result.push(2);
  }
  if (vI === "i") {
    result.push(3);
  }
  if (vO === "o") {
    result.push(4);
  }
  if (vU === "u") {
    result.push(5);
  }
  return result;
};

console.log(encode("a", "e", "i", "o", "u"));

const decode = () => {};

module.exports = { sum, myRemove, myFizzBuzz, encode, decode };
