const Sequelize = require('sequelize');
const sequelize = new Sequelize('DavidDB', 'root', '987654'), {  dialect: 'mysql', host: 'localhost',});

module.exports = sequelize;

sequelize.authenticate().then(() => {
  console.log("Conexão realizada!");
}).catch((err) => {
  console.log("Erro:" +err);
});
