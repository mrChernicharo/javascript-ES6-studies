const nome = 'Felipe';
const sobrenome = 'Chernicharo';

function nomeCompleto(first, last) {
  return first + ' ' + last;
}

//podemos criar funções utilizando constantes
const soma = (a, b) => a + b 

const teste = () => [1,2,3]

//essa técnica não funciona pra objetos! Pois o interpretador não entende se as chaves são parte do objeto 
//ou se são parte do corpo da função

//const cpf = () => {cpf: '125.339.217-00'} <== vai dar ruim!

// pra resolver encapsule o objeto com parênteses
const cpf = () => ({cpf: '125.339.217-00'})

document.getElementById('vai_mulek').onclick = function () {
  console.log(nomeCompleto(nome, sobrenome))
  console.log(soma(2, 3))
  console.log(teste())
  console.log(cpf())
};