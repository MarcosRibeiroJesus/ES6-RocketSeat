// 3.1

const arr = [1, 2, 3, 4, 5];

const arr1 = arr.map(item => item + 10);

console.log(arr1);

// 3.2
// Dica: Utilize uma constante pra function
const user = { name: 'Diego', age: 23 };
const mostraIdade = user => user.age;
mostraIdade(user);
console.log(mostraIdade(user));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Marcos";
const idade = 35;
const mostraUsuario = (nome = 'Marcos', idade = 35) => ({
    nome, idade
});

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
const promise = () => new Promise((resolve, reject) => resolve());