//Dependencias: el objeto de conexion:
const sequelize = require('../config/seq')
//Dtatypes de Sequelize
const{ DataTypes } = require('sequelize')
//El modelo
const BootcampModel = require('../models/bootcamps')

//Crear la entidad
const Bootcamp = BootcampModel(sequelize, DataTypes)

//Listar todos los bootcamps
exports.getALLBootcamps = async(req , res)=>{
    //Traer los bootcamps
    const bootcamps = await Bootcamp.findAll();
    res
        .status(200)
        .json({
            "success": true,
            "data": bootcamps
        })
}

//Listar bootcamps por id
exports.getSingleBootcamps = (req , res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va salir el bootcamp cuyo id es ${req.params.id}`
        })
}

//Actualizar bootcamps
exports.updateBootcamps = (req , res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va actualizar el bootcamp cuyo id es ${req.params.id}`
        })
}

//Borrar Bootcamps
exports.deleteBootcamps = (req , res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va borrarse el Bootcamp cuyo id es ${req.params.id}`
        })
}

//Crear todos los Bootcamps
exports.createBootcamps =  (req , res)=>{

    res
        .status(200)
        .json({
            "success": true,
            "data": "Aqui vamos a registrar Bootcamps"
        })
}
