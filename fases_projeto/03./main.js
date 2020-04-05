//não precisa escrever o .js 
//Se é um arquivo local, aí sim precisa passar o path e nesse caso,
import api from './api';



class App{
  constructor() {
    this.users = [];
    this.formEl = document.getElementById('user-form');
    this.listEl = document.getElementById('user-list');
    this.inputEl = document.querySelector('input[name=user]') // olha isso!

    this.registerHandlers();
  }

  registerHandlers(){
    this.formEl.onsubmit = event => this.addUser(event);
  }

  async addUser(event){
    event.preventDefault();
    try {
    const userInput = this.inputEl.value;   
    if (userInput.length === 0){  
      return;     //se o input estiver vazio, não faça nada: bata no return e pare de executar o addUser()
    }
    const response = await api.get(`/users/${userInput}`);

    console.log(response)

    this.users.push({
      title: response.data.login,
      name: response.data.name,
      description: response.data.bio,
      avatar_url: response.data.avatar_url,
      html_url: 'http://github.com/rocketseat',  
    });

    this.render();
    } catch(err) {
      window.alert('Usuário não encontrado, digite novamente.')
    }
  }

  render() {
    this.listEl.innerHTML = '' // esvasiar lista

    this.users.forEach(user => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', user.avatar_url)

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(user.title))

      let nameEl = document.createElement('p');
      nameEl.className = 'subtitle';
      nameEl.appendChild(document.createTextNode(user.name))

      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(user.description))

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target', '_blank');
      linkEl.appendChild(document.createTextNode('Acessar'));

      let listItemEl = document.createElement('li');
      listItemEl.appendChild(imgEl);
      listItemEl.appendChild(titleEl);
      listItemEl.appendChild(nameEl);
      listItemEl.appendChild(descriptionEl);
      listItemEl.appendChild(linkEl);

      this.listEl.appendChild(listItemEl)
    })
  }

}

new App();

//'https://avatars0.githubusercontent.com/u/28929274?v=4'