const { sum, myRemove, myFizzBuzz, encode, decode } = require("./sum.js");

describe("1 - A função sum(a, b) retorna a soma do parâmetro a com o b", () => {
  test("Teste se o retorno de sum(4, 5) é 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  test("Teste se o retorno de sum(0, 0) é 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test(`Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")`, () => {
    expect(() => sum(4, "5")).toThrow("Os parametros não são Numeros");
  });
});

describe("2 - A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array", () => {
  test("Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  test("Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it("Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe(`3 - A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número`, () => {
  it("Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(15)).toBe("fizzbuzz");
  });

  it("Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(3)).toBe("fizz");
  });

  it("Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(5)).toBe("buzz");
  });

  it("Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz(2)).toBe(2);
  });

  it("Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado", () => {
    expect(myFizzBuzz("2")).toBe(false);
  });
});

describe("4 - Para as funções encode e decode crie os seguintes testes em Jest:", () => {
  it("Teste se encode e decode são funções;", () => {
    expect(typeof encode && typeof decode).toBe("function");
  });
});
