/*
Desenvolva um código e crie nele:

- um objeto com, no mínimo, três propriedades;
- um array de tamanho três no mínimo;
- duas funções, a primeira lista as propriedades do objeto e a segunda, os elementos do array.
*/

//objeto
let filme = {
	nome: 'SAW',
	cod: 5432,
	categoria: 'terror'
};

//array
const precos = [76,54,32];

//lista as propriedades do objeto
function listarObjeto(obj){
  for (const propriedade in obj){
	  console.log(propriedade, ":" ,obj[propriedade]);
  }
}

//lista os elementos do array
function listarVetor(vet){
  for(const e of vet){
    console.log(e);
  }
}

listarObjeto(filme);
listarVetor(precos);
