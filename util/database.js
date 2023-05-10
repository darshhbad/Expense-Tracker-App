const Sequelize = require('sequelize')      //Created a constructor function 

const sequelize = new Sequelize('node-complete','root','darsh123',{     //created a sequelize enviroment that includes database pool connection
    dialect:'mysql',
    host:'localhost'
    })

module.exports = sequelize