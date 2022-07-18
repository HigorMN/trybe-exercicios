const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Os parametros não são Numeros");
  }
  return a + b;
};

module.exports = sum;
