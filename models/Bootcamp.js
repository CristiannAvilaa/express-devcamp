const mongoose = require ('mongoose')

//Modelo de botcamps
const BootcampsSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[
            true,
            "Por favor, ingrese un nombre"
        ],
        unique: true,
        maxlength: [
            30,
            "No se admiten bootcamps > 30"
        ]
    },
    description:{
        type: String,
        required: [
            true,
            'Por favor, ingrese una descripción'
        ],
        maxlength: [
            500,
            "No se admiten descripciones > 500"
        ]
    },
    phone:{
        type: String,
        maxlength:[
            20,
            "Telefonos no mayores a 20"
        ]
    },
    email:{
        type: String,
        Match:[
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            'Por favor, ingrese email valido'
        ]
    },
    averageCost: Number,
    averageRating:{
        type: Number,
        min:[1, 'Calificación minima 1'],
        max:[10, 'Calificación maxima 10']
    }
})

module.exports = mongoose.model('bootcamp', BootcampsSchema)