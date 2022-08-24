/*
Com os conceitos aprendidos, crie um programa de calculadora que: 

receba dois valores, que devem ser salvos em variáveis; 
o usuário deve colocar qual operador ele vai utilizar por meio dos símbolos aritméticos; 
com os dois valores e o operador definido, o programa deve fazer a operação e retornar o resultado; 
se houver divisão, você deve retornar o resultado e a sobra, caso haja alguma. 

*/





function calculadora(a, op, b){
    if(op == "+"){
        return a + b;
        
    }else if(op == "-"){
        return a - b;
    }else if(op == "*"){
        return a * b;
        
    }else if(op == "/"){
        return a / b;
}

}

console.log("Escolha o operador de acordo com o número: ");
console.log("Soma: Digite +");
console.log("Subtração: Digite -");
console.log("Multiplicação: Digite *");
console.log("Divisao: Digite : /");

var operador = prompt("Digite o operador");
var primeiro = prompt("Digite um númeror");
var segundo = prompt("Digite outro número");



console.log("Resultado: ", calculadora(primeiro,operador, segundo));

if(operador = "/"){
  console.log("Resto: ",primeiro % segundo);
}






