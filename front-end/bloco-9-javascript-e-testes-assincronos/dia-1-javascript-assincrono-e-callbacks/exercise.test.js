// 7 - A função uppercase recebe um parâmetro str e uma callback. Esta função transforma as letras de uma palavra em letras maiúsculas. Escreva um teste que verifique a chamada da função uppercase. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

// const uppercase = (str, callback) => {
//     setTimeout(() => {
//       callback(str.toUpperCase());
//     }, 500);
//   };

//   it('uppercase "test" to equal "TEST"', (done) => { // 1. Criamos o it
//     uppercase('test', (strUpperCase) => { // 2. Chamamos a função `uppercase`
//       try { // 3. Adicionamos o `try/catch`
//         expect(strUpperCase).toBe('TEST'); // 4. Criamos o expect
//         done(); // 5. Chamamos a função `done`
//       } catch (error) {
//         done(error); // 6. Chamamos a função `done` com o parâmetro `error`
//       }
//     });
//   });

// Verifique se a importação do arquivo correto está sendo feita.

const getPokemonDetails = require("./exercise");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokémon que não existe no banco de dados", (done) => {
    const errof = new Error("Não temos esse pokémon para você :(");
    function callback(error, message) {
      try {
        expect(error).toEqual(errof);
        done();
      } catch (error) {
        done(error);
      }
    }
    getPokemonDetails("dfafasdf", callback);
  });

  it("retorna um pokémon que existe no banco de dados", (done) => {
    const sucesso = `Olá, seu pokémon é o Squirtle, o tipo dele é Água e a habilidade principal dele é Jato de Água`

    function callback(erro, mensagem) { 
      try {
        expect(mensagem).toEqual(sucesso)
        done()
      } catch {
        done(mensagem)
      }
    }
    getPokemonDetails("Squirtle", callback);
  });
});
