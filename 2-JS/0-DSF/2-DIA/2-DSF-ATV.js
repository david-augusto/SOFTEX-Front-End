/*
2º Desafio #8diasdecodigo
Escreva uma função que recebe um array por parâmetro e remove os 3 primeiros
elementos do array. Caso o Array tenha menos de 3 elementos, retorna um array vazio.
OBS: Usar o SLICE e o Operador Condicional Ternário
Entrada
Voce receberá um array por parâmetro na função.
Saída
*/

function removeprimeiros(vetor) {
  return vetor.length > 3?vetor.slice(3):[];
}

function removeultimos(vetor) {
  return vetor.length > 3?vetor.slice(0, -3):[];
}
console.log("--------------------------");
console.log("REMOVE OS 3 PRIMEIROS");
console.log(removeprimeiros([1,2,3,4,5]));
console.log(removeprimeiros([5,4,3,2,1,0]));
console.log(removeprimeiros([10,20,30]));
console.log(removeprimeiros([99,100]));

console.log("--------------------------");
console.log("REMOVE OS 3 ULTIMOS");
console.log(removeultimos([1,2,3,4,5]));
console.log(removeultimos([5,4,3,2,1,0]));
console.log(removeultimos([10,20,30]));
console.log(removeultimos([99,100]));
console.log("--------------------------");