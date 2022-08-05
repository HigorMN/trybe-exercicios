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


  // Verifique se a importação do arquivo correto está sendo feita.
const getPokemonDetails  = require('./exercise');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokémon que não existe no banco de dados', () => {
    const expectedError = new Error('Não temos esse pokémon para você :(');
    getPokemonDetails('Pikachu', (error, _message) => { // 2, 3. Chamamos a função passando os parâmetros
        try { // 4. Adiciona um `try/catch`
          expect(error).toEqual(expectedError); // 5. Criamos o expect
          done(); // 6. Chamamos a função `done()`
        } catch (error) {
          done(error); // 7. Chamamos a função `done()` com o parâmetro `error`
        }
      });
  });

  it('retorna um pokémon que existe no banco de dados', () => {
    const expectedString = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    getPokemonDetails('Charmander', (_error, result) => {
      try {
        expect(result).toBe(expectedString);
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});