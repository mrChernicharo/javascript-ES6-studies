//REST 

const usuario = {
  nome: 'Junior',
  idade: 21,
  altura: 1.89,
  skills: ['Html', 'CSS', 'Javascript', 'ES6']
}
const { nome, ...resto} = usuario;
console.log(nome);
console.log(resto);

// ##################

const array = [1, 2, 3, 4, 5]
const [a, b, c, ...d] = array
console.log(a, b, c, d)

// ##################

function soma(x, ...params) {
  return x + params.reduce((total, next) => total + next)
}
console.log(soma(1, 2, 3, 4))

function putInArray(...params){
  return params
}
console.log(putInArray(1,2,3,4))

function getEnd(a, b, ...params){
  return params
}
console.log(getEnd(1,2,3,4,5,6,7))

