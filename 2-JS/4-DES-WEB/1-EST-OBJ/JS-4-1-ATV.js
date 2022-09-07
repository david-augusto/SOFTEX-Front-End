/*
Crie um código com um objeto chamado “Banco”. Ele deverá ter propriedades que incluem conta, saldo, tipo de conta e agência e os seus métodos devem ser: buscar saldo, depósito, saque e número da conta.

Observações:
- buscar saldo deve retornar o valor atual do saldo;
- para o depósito, você deverá passar um valor como parâmetro e adicioná-lo no saldo final do objeto;
- para o saque, você deverá passar um valor como parâmetro e subtraí-lo no saldo final do objeto;
- o número da conta deve retornar o número da conta.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub e compartilhe o link desse projeto no campo ao lado para que outros desenvolvedores possam analisá-lo.
*/


function Banco(conta, saldo, tipo, agencia){
  this.conta = conta;
  this.saldo = saldo;
  this.tipo = tipo;
  this.agencia = agencia;

  	function SaldoValor(){
    	   return this.saldo;}

  	function DepositarValor(dep){
  	   this.saldo = this.saldo + dep;}

        function SacarValor(sac){
  	   this.saldo = this.saldo - dep;}

        function MostrarConta(dep){
  	   return this.conta;}
}
var minhaConta = new Banco("5124", 100.5, "contacorrente", "0812");