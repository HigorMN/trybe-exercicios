// 7 - A função uppercase recebe um parâmetro str e uma callback. Esta função transforma as letras de uma palavra em letras maiúsculas. Escreva um teste que verifique a chamada da função uppercase. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
    setTimeout(() => {
      callback(str.toUpperCase());
    }, 500);
  };
  
  it('uppercase "test" to equal "TEST"', (done) => { // 1. Criamos o it
    uppercase('test', (strUpperCase) => { // 2. Chamamos a função `uppercase`
      try { // 3. Adicionamos o `try/catch`
        expect(strUpperCase).toBe('TEST'); // 4. Criamos o expect
        done(); // 5. Chamamos a função `done`
      } catch (error) {
        done(error); // 6. Chamamos a função `done` com o parâmetro `error`
      }
    });
  });