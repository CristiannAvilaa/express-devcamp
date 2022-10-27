//Dependencias: el objeto de conexion:
const sequelize = require('../config/seq')
//Dtatypes de Sequelize
const{ DataTypes } = require('sequelize')
//El modelo
const UserModel = require('../models/user')

//Crear la entidad
const User = UserModel(sequelize, DataTypes)

//Listar todos los users
exports.getALLUsers = async(req , res)=>{
    //Traer los Usuarios
    const users = await User.findAll();
    res
        .status(200)
        .json({
            "success": true,
            "data": users
        })
}

//Listar users por id
exports.getSingleUser = async(req , res)=>{
    const singleUser = await User.findByPk(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}

//Actualizar users
exports.updateUser = async(req , res)=>{
    await User.update(req.body, {
        where: {
          id: req.params.id
        }
      });
      const singleUser = await User.findByPk(req.params.id);
    res
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}

//Borrar users
exports.deleteUser = async(req , res)=>{
    const singleUser = await User.findByPk(req.params.id);
    await User.destroy({
        where: {
          id: req.params.id
        }
      });
    res
        .status(200)
        .json({
            "success": true,
            "data": singleUser
        })
}

//Crear todos los users
exports.createUser = async(req , res)=>{
    const newUser = await User.create(req.body)

    res
        .status(200)
        .json({
            "success": true,
            "data": newUser
        })
}
