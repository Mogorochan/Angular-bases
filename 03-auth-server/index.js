const express = require('express');

/* 
*Crear el servidor/ app express*/
const app = express();
//Rutas
app.use('/api/auth', require('./routes/auth.routes'));

const Port = process.env.Port || 4000
app.listen(Port, ( ) => {
    
    console.log(`Hola, mi nombre es Frailejon corriendo en el puerto ${Port} `);
})




