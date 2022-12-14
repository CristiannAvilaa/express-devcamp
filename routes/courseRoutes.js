const express = require('express')

//definiir ebjeto de ruteo
const router = express.Router()

//Listar todos los courses
router.get('/' , (req , res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aqui salen todos los courses"
        })
})

//Listar course por id
router.get('/:id' , (req , res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va salir el course cuyo id es ${req.params.id}`
        })
})

//Actualizar course
router.put('/:id' , (req , res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va actualizar el course cuyo id es ${req.params.id}`
        })
})
//Borrar course
router.delete('/:id' , (req , res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": `Aqui va borrarse el course cuyo id es ${req.params.id}`
        })
})

//Crear todos los bootcamps
router.post('/' , (req , res)=>{
    res
        .status(200)
        .json({
            "success": true,
            "data": "Aqui vamos a registrar course"
        })
})

module.exports = router