const usuarios = [
    { nome: 'Marcos', idade: 23, empresa: 'Online' },
    { nome: 'Ribeiro', idade: 15, empresa: 'Online' },
    { nome: 'Jesus', idade: 30, empresa: 'Startup' },
];

// 2.1 map
const idades = usuarios.map(usuarios => usuarios.idade);
console.log(idades);

// 2.2 filter
const empresas = usuarios.filter(usuarios => usuarios.empresa === 'Online' && usuarios.idade > 18);
console.log(empresas);

// 2.3 find
const isGoogler = usuarios.find(usuarios => usuarios.empresa === 'Google');
console.log(isGoogler);

// 2.4 map e filter
const dobraIdade = usuarios
.map(usuarios => ({...usuarios, idade: usuarios.idade * 2}))
.filter(usuarios => usuarios.idade <= 50);
console.log(dobraIdade);