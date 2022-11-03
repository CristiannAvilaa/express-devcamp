//Dependencias: el objeto de conexion:
const sequelize = require('../config/seq')
//Dtatypes de Sequelize
const{ DataTypes, ValidationError } = require('sequelize')
//El modelo
const UserModel = require('../models/user')
const user = require('../models/user')

//Crear la entidad
const User = UserModel(sequelize, DataTypes)

//Listar todos los users
exports.getALLUsers = async(req , res)=>{
    try {
         //Traer los Usuarios
        const users = await User.findAll();
        res
            .status(200)
            .json({
                "success": true,
                "data": users
            })
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "Error de servidor desconocido"
            })
    }
}

//Listar users por id
exports.getSingleUser = async(req , res)=>{
    try {
        const singleUser = await User.findByPk(req.params.id);
        if (singleUser) {
            res
            .status(200)
            .json({
                "success": true,
                "data": singleUser
            })
        } else {
            res
            .status(200)
            .json({
                "success": false,
                "errors": "Usuario no existente"
            })
        }
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "Error de servidor desconocido"
            })
    }
}

//Actualizar users
exports.updateUser = async(req , res)=>{
    try {
        const singleUser = await User.findByPk(req.params.id);
        if(!singleUser){
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Usuario no existente"
                })
        }
        else{
            await User.update(req.body, {
                where: {
                  id: req.params.id
                }
              });
              const updateUser = await User.findByPk(req.params.id)
            res
                .status(200)
                .json({
                    "success": true,
                    "data":updateUser
                })
        }
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "Error de servidor desconocido"
            })
    }
}

//Borrar users
exports.deleteUser = async(req , res)=>{
    try {
        const singleUser = await User.findByPk(req.params.id);
        if (!singleUser) {
            res
                .status(200)
                .json({
                    "success": false,
                    "errors": "Usuario no existente"
                })
        } else {
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
    } catch (error) {
        res
            .status(400)
            .json({
                "success": false,
                "errors": "Error de servidor desconocido"
            })
    }
    
}

//Crear todos los users
exports.createUser = async(req , res)=>{
    try {
        const newUser = await User.create(req.body)

    res
        .status(200)
        .json({
            "success": true,
            "data": newUser
        })
    } catch (error) {
        if(error instanceof ValidationError){
            //recorrer el arreglo de errores
            //map
            const errores = error.errors.map((elemento) =>{return elemento.message})

            res
                .status(400)
                .json({
                    "success": false,
                    "Error": errores
                })
        }else{
            res
            .status(400)
            .json({
                "success": false,
                "errors": "Error de servidor"
            })
        }
    }
}
