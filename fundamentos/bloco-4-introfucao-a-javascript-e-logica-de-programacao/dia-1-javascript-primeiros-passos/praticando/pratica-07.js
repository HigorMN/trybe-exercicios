let estadoAtual = 'aprovado'

switch (estadoAtual) {
  case "aprovado":
    console.log('Parabéns, você foi aprovada(o)!');
    break;
  case "lista":
    console.log('Você está na nossa lista de espera');
    break;

  case "aprovado":
    console.log('Você foi reprovada(o)');
    break;

    default:
        console.log('não se aplica');
}
