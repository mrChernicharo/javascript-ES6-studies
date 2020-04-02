
  const user = {
    nome: 'Felipe',
    idade: 32,
    endereco: {
      cidade: 'Rio de Janeiro',
      estado: 'RJ'
    }
  }
  
  //método padrão de acesso a atributos objetos
  const nome = user.nome;
  const idade = user.idade;
  const cidade = user.endereco.cidade
  

//##########################################################//

const user2 = {
  nome2: 'Mariana',
  idade2: 30,
  endereco2: {
    cidade2: 'Rio de Janeiro',
    estado2: 'RJ'
  }
}

//agora usando destructuring...
const { nome2, idade2, endereco2: { cidade2 }} = user2

document.getElementById('vai_mulek').onclick = function() {
  console.log(user)
  console.log(nome, idade, cidade)
  console.log(user2)
  console.log(nome2, idade2, cidade2)
}

