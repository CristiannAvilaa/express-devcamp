const express = require('express')

const {  
    getALLUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    createUser
} = require ('../controllers/UserController')

//definiir ebjeto de ruteo
const router = express.Router()

//Crear rutas sin parametros

router.route('/')
            .get(getALLUsers)
            .post(createUser)

//Crear rutas con parametros
router.route('/:id')
            .get(getSingleUser)
            .put(updateUser)
            .delete(deleteUser)

module.exports = router