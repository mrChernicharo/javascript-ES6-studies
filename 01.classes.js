class List {
    constructor(){
        this.data = [];
    }
    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}


class TodoList extends List{
    constructor(){
        super();

        this.user = 'Felipe';
        this.codeName = 'string7dev'
    }
    mostrarUsuario() {
        console.log(this.user, this.codeName);
    }
}

const MinhaLista = new TodoList();

document.getElementById('vai_mulek').onclick = function() {
    MinhaLista.add('novo item');
    MinhaLista.mostrarUsuario();
}
/**
 * com arrow function:
 * 
    document.getElementById('novotodo').onclick = () => {
        MinhaLista.add('novo item');
        MinhaLista.mostrarUsuario();
    }
*/