const valorMulta = 6;
const velocidadeMaxima = 50;
const velocidade = prompt("Informe sua velocidade (em km/h):");
const conteudo = document.getElementById("conteudo");

// Verifica se o valor inserido é um número
const velocidadeNumero = parseFloat(velocidade);
if (velocidade < velocidadeMaxima) {
  conteudo.innerHTML = `<p>Sua velocidade e de ${velocidade} km/h Tenha Uma Boa Viagem   </p>`;
  2;
} else {
  const media = (velocidade - velocidadeMaxima) * valorMulta;
  conteudo.innerHTML = `<p>Sua velocidade e de ${velocidade} km/h Voce foi Multado em R$${media.toFixed(
    2
  )}   </p>`;
}6.6
