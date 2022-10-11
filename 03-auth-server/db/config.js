const mongoose = require('mongoose');


const dbConnection = async() =>{
    try {
        await mongoose.connect(process.env.BD_CNN);
        console.log('Arriba!');
    } catch (error) {
        console.log(error);
        throw new Error('Error al iniciar la BD');
    }
}

module.exports= {
    dbConnection
}
/*
?Intento fallido: conexión a Postgres
 */
// const { Pool, Client} = require('pg');
// require('dotenv').config();

// const dbConnection = async() => {
//     try {
//         const pool = new Pool({
//             host: process.env.PGHOST,
//             user: process.env.PGUSER,
//             database: process.env.PGDATABASE,
//             password: process.env.PGPASSWORD,
//             port: process.env.PGPORT,
//         });
 
//         await pool.connect()
//         const res = await pool.query('SELECT * FROM actor')
//         console.log(res)
//         await pool.end()
//     } catch (error) {
//         console.log(error);
//         throw new Error('Error al iniciar la BD');
//     }
// }
