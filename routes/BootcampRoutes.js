const express = require('express')

//definiir ebjeto de ruteo
const router = express.Router()

//Listar todos los bootcamps
router.get('/' , (req , res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aqui salen todos los bootcamps"
        })
})

//Listar bootcamp por id
router.get('/:id' , (req , res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va salir el bootcamp cuyo id es ${req.params.id}`
        })
})

//Actualizar bootcamps
router.put('/:id' , (req , res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va actualizar el bootcamp cuyo id es ${req.params.id}`
        })
})
//Borrar bootcamps
router.delete('/:id' , (req , res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va borrarse el bootcamp cuyo id es ${req.params.id}`
        })
})

//Crear todos los bootcamps
router.post('/' , (req , res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aqui vamos a registrar bootcamp"
        })
})

module.exports = router