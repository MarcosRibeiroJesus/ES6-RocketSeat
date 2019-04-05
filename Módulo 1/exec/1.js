class Usuario {
    constructor(email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin === true;
    }
}

class Admin extends Usuario {
    constructor(email, senha) {
        super(email, senha);

       this.admin = true;
    }
}

const User1 = new Usuario('mrj@mrj', '1234');
const Adm1 = new Admin('mrj@mrj', '1234');

console.log(User1, Adm1);