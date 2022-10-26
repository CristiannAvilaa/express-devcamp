const sequelize = require('./seq')
const colors = require('colors')
const { DataTypes }  = require ('sequelize')

//Crear instancia de el modelo User
const UserModel = require('../models/user')
const User = UserModel(sequelize, DataTypes)

//Definir la fucion de conexion a la base de datos

const connectDB = async ()=> {
    try {
        await sequelize.authenticate()
        console.log('Conectado a mysql'.bgMagenta.green)
        const jane = await User.create({ username: "Samuel", email: "sameul@misena.edu.co", password:'2345'});
        console.log("Jane's auto-generated ID:", jane.username);
    } catch (error) {
        console.log(error)
    }
}

connectDB()