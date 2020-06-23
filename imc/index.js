//Desafio 1-1: Primeiros passos com JS

//Cálculo de IMC

const nome = 'Mateus'
const peso = 72
const altura = 1.72

const imc = peso / (altura * altura)

//SE o IMC maior ou igual a 30: Carlos você está acima do peso;
//SE o IMC menor que 29.9: Carlos você não está acima do peso;

if (imc >= 30) {
  console.log(`${nome} você está acima do peso.`)
} else {
  console.log(`${nome} você não está acima do peso.`)
}
