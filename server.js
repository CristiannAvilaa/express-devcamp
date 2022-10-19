//1. Crear el objeto express
const express = require('express')
//2. citar las dependencias necesarias
const dotenv = require ('dotenv')
const colors = require ('colors')
const listEndpoint = require('express-list-endpoints')
const req = require('express/lib/request')
const res = require('express/lib/response')
// Los componentes de ruta 
const bootcampRoutes = require('./routes/BootcampRoutes')
const courseRoutes = require('./routes/courseRoutes')

//3. Establecer archivo de configuracion
dotenv.config({
    path: './config/config.env'
})
//console.log(process.env.PORT)

// Crear el objeto application para el servidor de desarrollo
const app = express()

//rutas de proyecto 
app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/courses' , courseRoutes)


//Rutas de aplicacion
app.get('/' , (request, response)=>{
    response
        .status(200)
        .json({
            "success": true,
            "data": "request exitosa"
        })
})


// Imprimir la listas de endpoints validas del proyecto
console.log(listEndpoint(app))


//Ejeecutar el servidor de desarrollo 
//parametros:
//Puerto de escucha - listen
app.listen(process.env.PORT , ()=>{
    console.log(`Servidor activo en puerto 5000`.bgGreen.yellow)
})
