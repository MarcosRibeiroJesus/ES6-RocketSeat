const arr1 = [1, 2, 3, 4, 5, 6];

const [x, z, ...y] = arr1;

console.log(x); // 1
console.log(z); // 2
console.log(y); // [ 3, 4, 5, 6]

// function soma...
function soma(...nums) { 
    return nums
    .reduce((a,b) => a+b)
};

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

// 5.2
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
   };

const usuario2 = { ...usuario, nome: 'Marcos' };
console.log(usuario2);

const usuario3 = { ...usuario, endereco : { ...usuario.endereco, cidade: 'Lontras'}};
console.log(usuario3);
