const express = require('express');
const cors = require('cors');
require('dotenv').config();

console.log( process.env);

/* 
*Crear el servidor/ app express*/
const app = express();
//Cors
app.use(cors());
//Lectura y parseo del body
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth.routes'));

const Port = process.env.Port || 4000
app.listen(Port, ( ) => {
    
    console.log(`Hola, mi nombre es Frailejon corriendo en el puerto ${Port} `);
})




