"use strict";

var _console;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* 
Classes e herança
*/
var List =
/*#__PURE__*/
function () {
  function List() {
    _classCallCheck(this, List);

    this.data = [];
  }

  _createClass(List, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return List;
}();

var TodoList =
/*#__PURE__*/
function (_List) {
  _inherits(TodoList, _List);

  function TodoList() {
    var _this;

    _classCallCheck(this, TodoList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TodoList).call(this));
    _this.usuario = 'Marcos';
    return _this;
  }

  _createClass(TodoList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return TodoList;
}(List);

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function () {
  MinhaLista.add('New todo');
};

MinhaLista.mostraUsuario(); // métodos estáticos

var Matematica =
/*#__PURE__*/
function () {
  function Matematica() {
    _classCallCheck(this, Matematica);
  }

  _createClass(Matematica, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Matematica;
}();

console.log(Matematica.soma(1, 2));
/*
Const e Let
*/

/* const 
    n pode ter seu valor reatribuído
    pode ser mutado
*/
// const a = 2;
// a = 3;  // reatribuição de valor, error

var usuario = {
  nome: 'mrj'
};
usuario.nome = 'mars'; // mutação, ok

console.log(usuario);
/*
Variáveis de escopo = Let
*/

function test(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
}

test(10);
/* 
    Operações em Arrays
*/
// map percorre o vetor e retorna uma nova info após determinada função 

var arr = [1, 4, 4, 6, 7, 8, 0];
var newArr = arr.map(function (item) {
  return item * 2;
});
console.log('map = ', newArr); // reduce consome o vetor e transforma em uma única variável

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log('reduce = ', sum); // filter

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log('filter = ', filter); // find verifica se existe ou se consegue encontrar uma info no array

var find = arr.find(function (item) {
  // return item === 2; undefined
  return item === 4;
});
console.log('find = ', find);
/* 
    Arrow functions
*/

var arrow = [1, 4, 4, 6, 7, 8, 0];
var newArrow = arrow.map(function (item) {
  return item * 2;
});
console.log('arrow = ', newArrow); // af com reduce

var sumReduce = arrow.reduce(function (total, next) {
  return total + next;
});
console.log('Arrowreduce = ', sumReduce); // af find

var findArrow = arr.find(function (item) {
  return item === 4;
});
console.log('findArrow = ', findArrow); // af filter

var filterArrow = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log('filterArrow = ', filterArrow);
/* 
    Desestruturação de objetos em JS
*/

var user = {
  nome: 'Mrj',
  idade: 34,
  endereco: {
    cidade: 'Paranoá',
    estado: 'Distrito Federal'
  }
};
console.table(user);

function mostraUser(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      _ref$endereco = _ref.endereco,
      cidade = _ref$endereco.cidade,
      estado = _ref$endereco.estado;
  console.log(nome, idade, cidade, estado);
}

mostraUser(user);
/* 
    Rest e Spread
    Rest ... serve para pegar o restante das propriedades
*/
// Utilizando Rest

var userRest = {
  name: 'Mrj',
  age: 34,
  state: 'DF'
};

var name = userRest.name,
    resto = _objectWithoutProperties(userRest, ["name"]);

console.log('name Rest= ', name, '/ resto Rest= ', resto);
var userRestArr = [1, 3, 'w', 'x', 'y'];
var a = userRestArr[0],
    b = userRestArr[1],
    c = userRestArr[2],
    restoArray = userRestArr.slice(3);

(_console = console).log.apply(_console, ['Array com Rest => index 0 = ', a, '/ index 1 = ', b, '/ index 2 = ', c, '/ resto ='].concat(_toConsumableArray(restoArray))); // Rest para parâmetros de functions


function soma(a, b) {
  for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    params[_key - 2] = arguments[_key];
  }

  return params;
}

console.log('Rest utilizado nos params da function', 1, 2, 'resto = ', 3, 4); // Spread repassa as informações de um objeto ou array pra outra estrutura de dados

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];
var arr3 = [].concat(arr1, arr2);
console.log(arr3); // Spread copiando um objeto e alterando uma propriedade

var user1 = {
  name1: 'Mrj',
  age1: 34,
  state1: 'DF'
};

var user2 = _objectSpread({}, user1, {
  nome: 'MadMax'
});

console.log('Objeto 1 = ', user1);
console.log('Spread copiando um objeto 1 e alterando uma propriedade ', user2);
/* 
    Template literals
*/

var food = "Pizza";
var pieces = 8;
console.log('Template literals = O jantar foi uma ${food} com ${pieces} pedaços. => ', "O jantar foi uma ".concat(food, " com ").concat(pieces, " peda\xE7os."));
/* 
    Sintaxe curta de objetos no ES6
*/

var foods = {
  food: food,
  pieces: pieces,
  restaurant: 'Roma'
};
console.log('Sintaxe curta de objetos no ES6');
console.log("const foods = { food, pieces, restaurant: 'Roma', };");
console.log(foods);
