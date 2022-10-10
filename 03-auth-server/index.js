const express = require('express');

/* 
todo: Crear el servidor/ app express  */
const app = express();

/* 
?Con esto se valida qué responde el servidor*/

app.get('/', (req, res) => {
    res.json({
        msg: 'somebody SAAAAAVE me!',
        saveMeIn: 4200
    });
  });

const Port = process.env.Port || 4000
app.listen(Port, ( ) => {
    
    console.log(`Hola, mi nombre es Frailejon corriendo en el puerto ${Port} `);
})




