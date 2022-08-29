/*
Crie um programa que contenha os seguintes tipos de funções

1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;
2. uma função tradicional com parâmetros e um retorno de valor;
3. uma arrow function com parâmetros e que retorne um valor.

Crie um programa que utilize essas três funções de forma lógica, por exemplo um programa de calculadora.
*/
//---------------------------------------------- 

const frutas= ['Maçã','Banana','Pera','Melancia'];


//---------------------------------------------- 
//1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro
function nomeFrutas(){
  return frutas;
}
console.log(Nomes das Strings , nomeFrutas());



//---------------------------------------------- 
//2. uma função tradicional com parâmetros e um retorno de valor;
function escolherFrutas(posicao){
return frutas[posicao];
}
console.log(Fruta escolhida ,escolherFrutas(2));


//---------------------------------------------- 
//3. uma arrow function com parâmetros e que retorne um valor.
console.log(Tamanho das Strings , frutas.map(frutas = frutas.length));