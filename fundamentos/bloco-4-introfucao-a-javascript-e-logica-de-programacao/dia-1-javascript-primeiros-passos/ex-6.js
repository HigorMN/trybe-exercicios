let pecas = "rei";

switch (pecas.toLowerCase()) {
  case "rei":
    console.log("O rei pode mover-se em todas as direções");
    break;
  case "rainha":
    console.log("A rainha move-se ao longo da horizontal");
    break;
  case "bispo":
    console.log("O bispo move-se ao longo da diagonal");

  case "cavalo":
    console.log("É a única peça que pode pular as outras");
    break;
  case "torre":
    console.log("A torre movimenta-se pela vertical ou horizontal");
    break;
  case "peão":
    console.log(
      "O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal"
    );
    break;
  default:
    console.log("Erro, nenhuma peça selecionada");
}
