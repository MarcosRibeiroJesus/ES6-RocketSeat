/* 
Classes e herança
*/
class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Marcos'
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('New todo');
}

MinhaLista.mostraUsuario();

// métodos estáticos
class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1, 2))

/*
Const e Let
*/

/* const 
    n pode ter seu valor reatribuído
    pode ser mutado
*/

// const a = 2;
// a = 3;  // reatribuição de valor, error

const usuario = { nome: 'mrj' };

usuario.nome = 'mars' // mutação, ok

console.log(usuario);

/*
Variáveis de escopo = Let
*/
function test(x) {
    let y = 2;

    if(x > 5) {
        let y = 4;
        console.log(x, y)
    }
}

test(10);

/* 
    Operações em Arrays
*/
// map percorre o vetor e retorna uma nova info após determinada função 
const arr = [1, 4, 4, 6, 7, 8, 0];

const newArr = arr.map(function(item) {
    return item * 2;
})

console.log('map = ',newArr);

// reduce consome o vetor e transforma em uma única variável
const sum = arr.reduce(function(total, next){
    return total + next;
});

console.log('reduce = ',sum);

// filter
const filter = arr.filter(function(item){
    return item %2 === 0;
})

console.log('filter = ',filter);

// find verifica se existe ou se consegue encontrar uma info no array
const find = arr.find(function(item){
    // return item === 2; undefined
    return item === 4;
})

console.log('find = ',find);

/* 
    Arrow functions
*/
const arrow = [1, 4, 4, 6, 7, 8, 0];

const newArrow = arrow.map(item => item * 2);

console.log('arrow = ',newArrow);

// af com reduce
const sumReduce = arrow.reduce((total, next) => {
    return total + next;
});

console.log('Arrowreduce = ',sumReduce);

// af find
const findArrow = arr.find(item => item === 4);

console.log('findArrow = ',findArrow);

// af filter
const filterArrow = arr.filter(item => item %2 === 0)

console.log('filterArrow = ',filterArrow);

/* 
    Desestruturação de objetos em JS
*/
const user = {
    nome: 'Mrj',
    idade: 34,
    endereco: {
        cidade: 'Paranoá',
        estado: 'Distrito Federal',
    },
}



console.table(user)

function mostraUser({nome, idade, endereco: { cidade, estado }}) {
    console.log(nome, idade, cidade, estado);
}

mostraUser(user);


/* 
    Rest e Spread
    Rest ... serve para pegar o restante das propriedades
*/
// Utilizando Rest
const userRest = {
    name: 'Mrj',
    age: 34,
    state: 'DF'
};

const { name, ...resto } = userRest;

console.log('name Rest= ', name, '/ resto Rest= ', resto)

const userRestArr = [1, 3, 'w', 'x', 'y'];

const [a, b, c, ...restoArray] = userRestArr;

console.log('Array com Rest => index 0 = ', a, '/ index 1 = ', b, '/ index 2 = ', c, '/ resto =', ...restoArray )

// Rest para parâmetros de functions
function soma(a, b, ...params) {
    return params;
}

console.log('Rest utilizado nos params da function', 1, 2, 'resto = ', 3, 4)

// Spread repassa as informações de um objeto ou array pra outra estrutura de dados
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2]
console.log(arr3);

// Spread copiando um objeto e alterando uma propriedade
const user1 = {
    name1: 'Mrj',
    age1: 34,
    state1: 'DF'
};

const user2 = { ...user1, nome: 'MadMax' };

console.log('Objeto 1 = ', user1);
console.log('Spread copiando um objeto 1 e alterando uma propriedade ',user2);

/* 
    Template literals
*/
const food = "Pizza";
const pieces = 8;

console.log('Template literals = O jantar foi uma ${food} com ${pieces} pedaços. => ', `O jantar foi uma ${food} com ${pieces} pedaços.`);

/* 
    Sintaxe curta de objetos no ES6
*/
const foods = {
    food,
    pieces,
    restaurant: 'Roma',
};

console.log('Sintaxe curta de objetos no ES6')
console.log("const foods = { food, pieces, restaurant: 'Roma', };")
console.log(foods);