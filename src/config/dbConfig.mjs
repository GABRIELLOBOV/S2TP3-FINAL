import mongoose from 'mongoose';

export async function connectDB () {
    try {      
 
//mongoose.connect('mongodb://localhost:3000'), {

//const mongoose = require('mongoose'); 

// Conexión a MongoDB con las opciones correctamente configuradas
       await mongoose.connect('mongodb+srv://Grupo-12:grupo12@cursadanodejs.ls9ii.mongodb.net/Node-js', {
        //mongoose.connect('mongodb://localhost:3000'), {    
       //useNewUrlParser: true,
          //  useUnifiedTopology: true
        });

//.then(() => 
    console.log('Conexión exitosa a MongoDB');
} catch(error)  {console.error('Error al conectar a MongoDB:', error);
process.exit (1);   
}

}
