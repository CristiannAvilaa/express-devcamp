const sequelize = require('./seq')
const colors = require('colors')

//Definir la fucion de conexion a la base de datos

const connectDB = async ()=> {
    try {
        await sequelize.authenticate()
        console.log('Conectado a mysql'.bgMagenta.green)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB