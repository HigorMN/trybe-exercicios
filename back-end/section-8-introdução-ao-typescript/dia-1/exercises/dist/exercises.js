"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAreaOfTrap = exports.getAreaOfLosango = exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
const getSquareArea = (side) => side ** 2;
exports.getSquareArea = getSquareArea;
const getRectangleArea = (base, height) => {
    return base * height;
};
exports.getRectangleArea = getRectangleArea;
const getTriangleArea = (base, height) => {
    return (base * height) / 2;
};
exports.getTriangleArea = getTriangleArea;
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, side) => acc + side, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
    const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
    const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
// Para fixar;
//Crie uma nova função para calcular a área de um losango. A área do losango é dada pelo resultado da multiplicação da diagonal maior (D) pela diagonal menor (d) dividido por dois. A = (D * d) / 2
const getAreaOfLosango = (Diagonal, diagonal) => {
    return (Diagonal * diagonal) / 2;
};
exports.getAreaOfLosango = getAreaOfLosango;
//Crie uma nova função para calcular a área de um trapézio. A área do trapézio é dada pelo produto da altura (h) com a soma da base maior (B) e a base menor (b) dividido por dois. A = [(B + b) * h] / 2
const getAreaOfTrap = (Base, base, height) => {
    return ((Base + base) * height) / 2;
};
exports.getAreaOfTrap = getAreaOfTrap;
