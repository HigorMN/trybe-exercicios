let iNSS;
let iR;

const salario = 2700;

if (salario <= 1556.94) {
  iNSS = salario * 0.08;
} else if (salario <= 2594.92) {
  iNSS = salario * 0.09;
} else if (salario <= 5189.82) {
  iNSS = salario * 0.11;
} else {
  iNSS = 570.88;
}

const salarioMenosOINSS = salario - iNSS;

if (salarioMenosOINSS <= 1903.98) {
  iR = 0;
} else if (salarioMenosOINSS <= 2826.65) {
  iR = salarioMenosOINSS * 0.075 - 142.8;
} else if (salarioMenosOINSS <= 3751.05) {
  iR = salarioMenosOINSS * 0.15 - 354.8;
} else if (salarioMenosOINSS <= 4664.68) {
  iR = salarioMenosOINSS * 0.225 - 636.13;
} else if (salarioMenosOINSS > 4664.68) {
  iR = salarioMenosOINSS * 0.275 - 869.36;
}

console.log("Salario: " + (salarioMenosOINSS - iR));
