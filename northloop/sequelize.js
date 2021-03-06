const Sequelize = require('sequelize')
const newsModel = require('./app/models/newsModel')

const sequelize = new Sequelize('testdb', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

sequelize.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`)
  })

module.exports = {
  newsModel
}
