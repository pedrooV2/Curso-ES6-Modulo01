// 1. Classes
class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
    
}

class TodoList extends List{
  constructor() {
    //Chama o constructor da classe pai
    super();

    this.usuario = 'Pedro Lucas'
  }

  showUser(){
    console.log(this.usuario);
  }
}

const MyList = new TodoList();

document.querySelector('#newTodo').onclick = function(){
  MyList.add('Novo to-do');
};

MyList.showUser();

// Métodos estáticos:
// São métodos independentes, eles não dependem de nenhum outro atributo da class. 
// Eles não "enchergam" os outros elementos da class

class Matematica {
  static soma(a, b){
    return a + b;
  }
}

console.log(Matematica.soma(2,2));

/*============================================================================================*/