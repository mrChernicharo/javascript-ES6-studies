//SPREAD

const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = [...arr1, ...arr2]

console.log(arr3)

//############################################

const pessoa1 = {
  nome: 'Zé',
  idade: 45,
  peso: 89.5,
  profissao: 'Carcereiro'
}

const pessoa2 = { ...pessoa1, nome: 'João'}  
const pessoa3 = {...pessoa1, nome:'Ramon',idade:23}  //<== o Spread é muito utilizado na vida real
const pessoa4 = {...pessoa3, peso:67.2, profissao: 'Dev'}

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)

//O Spread é muito útil pois com ele vc pode acessar todos os atributos de um objeto,
// e ainda ganha a possibilidade de alterar algum atributo em qualquer lugar do objeto