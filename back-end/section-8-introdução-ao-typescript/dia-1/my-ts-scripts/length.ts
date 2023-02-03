const unidates = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];

const convert = (valor: number, unidadeBase: string, unidadeConversão: string): number => {
  const uniBIndex = unidates.indexOf(unidadeBase);
  const uniCIndex = unidates.indexOf(unidadeConversão);
  const expoente = uniCIndex - uniBIndex;

  return valor * Math.pow(10, expoente);
};
