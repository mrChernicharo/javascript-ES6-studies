const nome = 'Felipe';
const idade = 32;
const endereco = {
  cidade: 'Rio de Janeiro',
  estado: 'RJ'
}

const user = {    // <== sintaxe tradicional de objeto
  nome: nome,
  idade: idade,
  endereco: endereco
};


const user2 = {    // <== e olha a sintaxe curta de objeto
  nome,
  idade,
  endereco,
};

console.log(user)
console.log(user2)

//conceito muito usado