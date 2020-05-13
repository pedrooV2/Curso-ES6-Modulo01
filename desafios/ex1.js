class User {

  constructor(email, password){
    this.email = email;
    this.password = password;
    this.admin = false;
  }

  isAdmin(){
    return (this.admin) ? 'Administrador' : 'Usuário';
  }

}

class Admin extends User{
  
  constructor(){

    super().admin = true;
  }
}

const adm = new Admin('pedro@mail.com', '12345');
const user = new User('gabriel@mail.com', '12345');

console.log(user.isAdmin());
console.log(adm.isAdmin());


