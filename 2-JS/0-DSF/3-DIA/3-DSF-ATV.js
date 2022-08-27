/*
3º Desafio #8diasdecodigo
Você recebeu desafio para determinar qual dos produtos é o preferêncial dos
clientes de um posto de abastecimento de combustível. Para isso você deve
escrever um algoritmo para ler o tipo de combustível abastecido (codificado da
seguinte forma: 1. Álcool 2. Gasolina 3. Diesel 4. Fim). Caso o usuário informe
um código inválido (fora da faixa de 1 a 4) deve ser solicitado um novo código
(até que seja válido). O programa será encerrado quando o código informado
for o número 4.
Entrada
A entrada contém apenas valores inteiros e positivos.
Saída
Deve ser escrito a mensagem: "MUITO OBRIGADO" e a quantidade de clientes que
abasteceram cada tipo de combustível.
*/


var vetor = {"Alcool": 0, "Gasolina": 0, "Diesel": 0};
console.log("Escolha uma opção: ");
console.log("1 - Alcool");
console.log("2 - Gasolina");
console.log("3 - Diesel");
console.log("4 - Sair");
console.log("-------------------");
do{
var opcao = Number(prompt("Digite o número"));
  if(opcao == 1){
    vetor.Alcool ++;} 
  else if(opcao == 2){
    vetor.Gasolina ++;}
  else if(opcao == 3){
    vetor.Diesel ++;}
  else {
    console.log("Invalido!");} 
}
  while(opcao != 4)
console.log("Muito Obrigado");
console.log("Relatório:");
console.log("Alcool:", vetor.Alcool);
console.log("Gasolina:", vetor.Gasolina);
console.log("Diesel:", vetor.Diesel);
