const valorCusto = 100;
const valorVenda = 200;
const impostoSobeOCusto = valorCusto * 0.20;
let valorCustoTotal = valorCusto + impostoSobeOCusto
let lucro = valorVenda - valorCustoTotal

console.log(lucro * 1000);