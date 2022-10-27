const express = require('express')

const {  
    getALLBootcamps,
    getSingleBootcamps,
    updateBootcamps,
    deleteBootcamps,
    createBootcamps
} = require ('../controllers/BootcampController')

//definiir ebjeto de ruteo
const router = express.Router()

//Crear rutas sin parametros

router.route('/')
            .get(getALLBootcamps)
            .post(createBootcamps)

//Crear rutas con parametros
router.route('/:id')
            .get(getSingleBootcamps)
            .put(updateBootcamps)
            .delete(deleteBootcamps)

module.exports = router