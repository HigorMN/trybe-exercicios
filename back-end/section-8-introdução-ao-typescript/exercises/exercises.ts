export const getSquareArea = (side: number):number => side ** 2;

export const getRectangleArea = (base: number, height: number): number => {
  return base * height;
}

export const getTriangleArea = (base: number, height: number): number => {
  return (base * height) / 2;
}

export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0);
}

export function triangleCheck(
  sideA: number,
  sideB: number,
  sideC: number
): boolean {
  const checkSideA = (sideB - sideC) < sideA && sideA < (sideB + sideC);
  const checkSideB = (sideA - sideC) < sideB && sideB < (sideA + sideC);
  const checkSideC = (sideA - sideB) < sideC && sideC < (sideA + sideB);
  return checkSideA && checkSideB && checkSideC;
}

// Para fixar;

//Crie uma nova função para calcular a área de um losango. A área do losango é dada pelo resultado da multiplicação da diagonal maior (D) pela diagonal menor (d) dividido por dois. A = (D * d) / 2

export const getAreaOfLosango = (Diagonal: number, diagonal:number): number => {
  return (Diagonal * diagonal) / 2;
}

//Crie uma nova função para calcular a área de um trapézio. A área do trapézio é dada pelo produto da altura (h) com a soma da base maior (B) e a base menor (b) dividido por dois. A = [(B + b) * h] / 2

export const getAreaOfTrap = (Base: number, base:number, height: number): number => {
  return ((Base + base) * height) / 2;
}
