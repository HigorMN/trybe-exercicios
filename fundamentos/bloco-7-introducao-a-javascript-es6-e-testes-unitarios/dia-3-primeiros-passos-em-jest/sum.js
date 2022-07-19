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
  if (
    typeof vA !== "string" ||
    typeof vE !== "string" ||
    typeof vI !== "string" ||
    typeof vO !== "string" ||
    typeof vU !== "string"
  ) {
    throw new Error("Use string");
  }
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

const decode = (n1, n2, n3, n4, n5) => {
  if (
    typeof n1 !== "number" ||
    typeof n2 !== "number" ||
    typeof n3 !== "number" ||
    typeof n4 !== "number" ||
    typeof n5 !== "number"
  ) {
    throw new Error("Use penas numeros");
  }
  const result = [];
  if (n1 === 1) {
    result.push("a");
  }
  if (n2 === 2) {
    result.push("e");
  }
  if (n3 === 3) {
    result.push("i");
  }
  if (n4 === 4) {
    result.push("o");
  }
  if (n5 === 5) {
    result.push("u");
  }
  return result;
};

module.exports = { sum, myRemove, myFizzBuzz, encode, decode };
