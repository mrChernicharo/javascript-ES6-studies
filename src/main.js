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

  setLoading(loading = true){
    if (loading === true){
      let loadingEl = document.createElement('span');
      loadingEl.appendChild(document.createTextNode('  loading...'));
      loadingEl.setAttribute('id', 'loading');

      this.formEl.appendChild(loadingEl);
    } else {
      document.getElementById('loading').remove();
    }
  }
    
  async addUser(event){
    event.preventDefault();

    const userInput = this.inputEl.value;   
    if (userInput.length === 0){  
      window.alert('escreva nome de usuário')
      return;     //se o input estiver vazio, não faça nada: bata no return e pare de executar o addUser()
    }
    this.setLoading();
    
    try {
    const response = await api.get(`/users/${userInput}`);

    const {login, name, bio, avatar_url, html_url } = response.data
    
    console.log(response)
    console.log(bio)
    
    this.users.push({
      login,
      name,
      bio,
      avatar_url,
      html_url, 
    });

    this.inputEl.value = ''; // apague o input 

    this.render();
    } catch(err) {
      window.alert('Usuário não encontrado, digite novamente.')
    }
    this.setLoading(false);
  }

  render() {
    this.listEl.innerHTML = '' // esvasiar lista

    this.users.forEach(user => {
      let imgEl = document.createElement('img');
      imgEl.setAttribute('src', user.avatar_url)

      let titleEl = document.createElement('strong');
      titleEl.appendChild(document.createTextNode(user.login))

      let nameEl = document.createElement('p');
      nameEl.className = 'subtitle';
      nameEl.appendChild(document.createTextNode(user.name))
    
      let descriptionEl = document.createElement('p');
      descriptionEl.appendChild(document.createTextNode(user.bio))

      let linkEl = document.createElement('a');
      linkEl.setAttribute('target', '_blank');
      linkEl.setAttribute('href', user.html_url )
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