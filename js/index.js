function calcularImc() {
  const peso = document.getElementById("peso").value;
  const altura = document.getElementById("altura").value;
  const resposta = document.getElementById("resposta");

  if (peso === "" || altura === "") {
    resposta.innerHTML = "Preencha todos os campos!";
    return; 
  }

  const indice = peso / (altura * 2);
  let situacao;

  if(indice < 18.5) {
    situacao = "Abaixo do normal";
  } else if(indice >= 18.6 && indice < 24.9) {
    situacao = "Normal";
  } else if(indice >= 25 && indice < 29.9) {
    situacao = "Sobrepeso";
  } else if(indice >= 30 && indice < 34.9) {
    situacao = "Obesidade grau 1";
  } else if(indice >= 35 && indice < 39.9) {
    situacao = "Obesidade grau 2";
  } else {
    situacao = "Obesidade grau 3";
  }

  resposta.innerHTML = `Seu IMC é: ${indice.toFixed(2)},` + " sua situação é de: " + situacao;

  
}
