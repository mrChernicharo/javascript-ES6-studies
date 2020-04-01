/** Esse script dá erro, demonstrando a dinâmica dos métodos estáticos
 * 
    class TodoList {
        constructor() {
            this.todos = [];
        }
    
        static addTodo(){
            this.todos.push('novo todo');
            console.log(this.todos);
        }
    }
    
    TodoList.addTodo();
    TodoList.addTodo();
    TodoList.addTodo();
    TodoList.addTodo();
*/

// método estático não enxerga o restante da classe. 
// Ele retorna informação independente do restante da classe.
// quando o método é estáticco, dá pra utilizar sem dar o 'new' na classe
// sem instanciar a classe
// normalmente quando temos método estático, nem faz sentido fazer o constructor
// 

class Matematica{
    static soma(a,b) {
        return a + b
    }
}
document.getElementById('vai_mulek').onclick = () =>{
    console.log(Matematica.soma(1, 2))
}
