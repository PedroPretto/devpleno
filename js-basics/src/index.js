import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



//hoisting
console.log(variavel1)
var variavel1 = 10 //essa variavel1 começa a ser valida desde o começo do código, porem undefined, e recebe um valor apenas nessa linha
console.log(variavel1)

//o mesmo não é valido para const e let
const id = 1 //constante, nao puda
let peso = 50 //let, váriavel regular que nao ocorre hoisting

//na função também ocorre hoisting
console.log(soma(2,1))
function soma(a,b){
  return a + b
}

//assim não tem hoisting
//arrow function
const funcSoma = (a,b) => b+a
console.log(funcSoma(8,9))

//template string
const pedro = `Pedro tem peso ${peso}`



//objetos
const obj = {
  name: 'Pedro',
  lastName: 'Pretto'
}
console.log(obj.name, obj['lastName']) //poderia ser uma variavel contendo o valor


//vetores, são hetereogenios
const vetor = [1,2,3]
console.log(vetor[0])

//pegar as chaves de um valor
const keys = Object.keys(obj)
console.log(keys)


//percorrer as chaves, foreach espera uma função onde a variavel 'item' é cada item de keys
//funções que recebem outra função sao high-order-function
keys.forEach(item => {
  console.log(obj[item])
})

//outra high-order-function: map retorna um vetor modificado
const values = keys.map(item => {
  return obj[item]
})
console.log(values)

//destructuring assignament permite acessar diretamente keys de objetos
const {name} = obj
console.log(name)

const getName = ({name}) => {
  return name
}
console.log(getName(obj))