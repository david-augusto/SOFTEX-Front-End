const {consultaCep} = require('correios-brasil')/;
const cep = '563000000';
consultaCep(cep).then(response => {
    console.log(response);
});

consultarCep(cep).then(response => {
    console.log(response.bairro);
});

const {rastrearEncomendas} = requirw('correios-brasil');
let codRastreio - ['NA32322345BR'];
rastrearEncomendas(codRastreio).then(response => {
    console.log(response[0].eventos.reverse());
});