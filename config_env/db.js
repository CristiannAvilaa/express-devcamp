const mongoose = require('mongoose')

const uri = 'mongodb+srv://Criss:Cam1lo.Av1la@cluster0.unlnhgz.mongodb.net/bootcamps-sena?retryWrites=true&w=majority'

//componenrtes de conexion a db 
//tipo: funcional
 
const connectDB = async() => {
    const conn = await mongoose.connect(uri, {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    console.log(`MongoDB Conectado: ${conn.connection.host}`)
}

connectDB()