/*
Crie dois códigos de sistema de notas para uma escola. O primeiro código deve ser um programa que informa se o aluno reprovou, ou não, com base nas três notas que ele adicionou ao programa. Utilize, no mínimo, um operador de atribuição e um operador ternário. 
O segundo código é um programa que o aluno deve escrever duas notas e o retorno informa a nota mínima que ele deve tirar na próxima prova para poder passar com nota sete.
*/



// 1º código

function teste(a, b, c){
  var media = (a+b+c)/3;
  return media == 7?"Aprovado":"Reprovado";
}


var primeiro = 8;
var segundo = 6;
var terceiro = 9;

console.log("[codigo 1] Aluno", teste(primeiro,segundo,terceiro));


console.log("-----------------------");
// 2º código

function falta(x, y){
  return 21 - x - y;
}

var terceiro = 7;
var quarto = 5;

console.log("[codigo 2] para ser aprovado com nota 7,0, precisa tirar no mínimo nota", falta(terceiro,quarto));




